import fs from "node:fs";
import path from "node:path";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionData {
  total: {
    lastYear: number;
  };
  contributions: ContributionDay[];
  updatedAt: string;
}

export function getContributionData(): ContributionData {
  const dataPath = path.resolve("src/data/contributions.json");
  try {
    const raw = fs.readFileSync(dataPath, "utf8");
    return JSON.parse(raw);
  } catch {
    return {
      total: { lastYear: 0 },
      contributions: [],
      updatedAt: new Date().toISOString(),
    };
  }
}

export function generateAnimatedActivityLayer(
  width: number,
  height: number,
  data: ContributionData
): string {
  const p: string[] = [];

  const cellSize = 13;
  const gap = 3.8;
  const daysPerWeek = 7;

  // Build calendar map by date string
  const daysByDate = new Map<string, ContributionDay>();
  for (const d of data.contributions) {
    daysByDate.set(d.date, d);
  }

  const firstDateStr = data.contributions[0]?.date || "2025-09-21";
  const lastDateStr = data.contributions[data.contributions.length - 1]?.date || "2026-09-21";

  // Align start to the preceding Sunday
  const startDate = new Date(firstDateStr + "T00:00:00Z");
  const startDayOfWeek = startDate.getUTCDay();
  startDate.setUTCDate(startDate.getUTCDate() - startDayOfWeek);

  const endDate = new Date(lastDateStr + "T00:00:00Z");

  interface GridDay {
    date: string;
    dayOfWeek: number;
    count: number;
    level: number;
  }

  const allWeeks: GridDay[][] = [];
  const curr = new Date(startDate);

  while (curr <= endDate || curr.getUTCDay() !== 0) {
    const dateStr = curr.toISOString().split("T")[0];
    const dow = curr.getUTCDay();
    if (dow === 0) {
      allWeeks.push([]);
    }
    const dayData = daysByDate.get(dateStr) || { date: dateStr, count: 0, level: 0 };
    allWeeks[allWeeks.length - 1].push({
      date: dateStr,
      dayOfWeek: dow,
      count: dayData.count,
      level: dayData.level,
    });
    curr.setUTCDate(curr.getUTCDate() + 1);
  }

  const displayWeeks = allWeeks.slice(-53);
  const weeksCount = displayWeeks.length;
  const gridWidth = weeksCount * (cellSize + gap) - gap;
  const startX = Math.round((width - gridWidth) / 2);
  const startY = 100;
  const gridHeight = daysPerWeek * (cellSize + gap) - gap;

  // CSS animations
  p.push(`<style>
    @keyframes calendarSweep {
      0% { transform: translateX(${startX - 20}px); opacity: 0; }
      4% { opacity: 0.55; }
      88% { opacity: 0.45; }
      100% { transform: translateX(${startX + gridWidth + 20}px); opacity: 0; }
    }
    @keyframes activeWhitePulse {
      0%, 100% { opacity: 0.90; filter: drop-shadow(0 0 1px rgba(255,255,255,0.4)); }
      50% { opacity: 1; filter: drop-shadow(0 0 4px rgba(255,255,255,0.95)); }
    }
    .sweep-bar {
      animation: calendarSweep 8s cubic-bezier(0.35, 0.05, 0.35, 0.95) infinite;
    }
    .node-high {
      animation: activeWhitePulse 2.6s ease-in-out infinite;
    }
  </style>`);

  p.push(`<g id="animated-activity-layer">`);

  // Linear gradient for sweep line with titanium/ember tone
  p.push(`<defs>
    <linearGradient id="calSweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff5500" stop-opacity="0"/>
      <stop offset="85%" stop-color="#ff5500" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.25"/>
    </linearGradient>
  </defs>`);

  // Axis guidelines
  p.push(`<line x1="${startX - 20}" y1="${startY - 26}" x2="${startX + gridWidth + 20}" y2="${startY - 26}" stroke="#1d222a" stroke-width="0.8"/>`);
  p.push(`<line x1="${startX - 20}" y1="${startY + gridHeight + 20}" x2="${startX + gridWidth + 20}" y2="${startY + gridHeight + 20}" stroke="#1d222a" stroke-width="0.8"/>`);

  // Month labels: place exactly above the week column where a new month starts
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let lastLabeledCol = -10;

  displayWeeks.forEach((week, wIdx) => {
    let monthToLabel: string | null = null;
    if (wIdx === 0) {
      const m = new Date(week[0].date + "T00:00:00Z").getUTCMonth();
      monthToLabel = monthNames[m];
    } else {
      for (const day of week) {
        if (day.date.endsWith("-01")) {
          const m = parseInt(day.date.split("-")[1], 10) - 1;
          monthToLabel = monthNames[m];
          break;
        }
      }
    }

    if (monthToLabel && (wIdx - lastLabeledCol) >= 3) {
      const x = startX + wIdx * (cellSize + gap);
      p.push(`<text x="${x}" y="${startY - 12}" font-family="Inter,sans-serif" font-size="8.5" fill="#6e7681" font-weight="600" letter-spacing="0.5">${monthToLabel.toUpperCase()}</text>`);
      p.push(`<line x1="${x}" y1="${startY - 8}" x2="${x}" y2="${startY - 4}" stroke="#1d222a" stroke-width="0.8"/>`);
      lastLabeledCol = wIdx;
    }
  });

  // Day of week labels on left (MON = Row 1, WED = Row 3, FRI = Row 5)
  const dayLabels: Record<number, string> = { 1: "MON", 3: "WED", 5: "FRI" };
  for (let d = 0; d < 7; d++) {
    if (dayLabels[d]) {
      const y = startY + d * (cellSize + gap) + cellSize * 0.75;
      p.push(`<text x="${startX - 14}" y="${y}" font-family="Inter,sans-serif" font-size="8" fill="#6e7681" text-anchor="end" font-weight="500">${dayLabels[d]}</text>`);
    }
  }

  // Render contribution cells
  displayWeeks.forEach((week, w) => {
    week.forEach(day => {
      const x = startX + w * (cellSize + gap);
      const y = startY + day.dayOfWeek * (cellSize + gap);

      const count = day.count;
      const level = day.level;

      if (count > 0) {
        if (level >= 3 || count >= 4) {
          // Intense activity: brilliant paper white
          p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" fill="#ffffff" class="node-high"/>`);
        } else if (level === 2 || count >= 2) {
          // Moderate activity: luminous silver
          p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" fill="rgba(240, 244, 252, 0.75)"/>`);
        } else {
          // Low activity: cool titanium
          p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" fill="rgba(240, 244, 252, 0.40)"/>`);
        }
      } else {
        // Zero-commit day: subtle precision coordinate cell
        p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>`);
      }
    });
  });

  // Oscilloscope sweep beam with warm ember edge
  p.push(`<g class="sweep-bar">`);
  p.push(`<line x1="0" y1="${startY - 14}" x2="0" y2="${startY + gridHeight + 14}" stroke="#ff5500" stroke-opacity="0.65" stroke-width="0.8"/>`);
  p.push(`<rect x="-24" y="${startY - 14}" width="24" height="${gridHeight + 28}" fill="url(#calSweepGrad)"/>`);
  p.push(`</g>`);

  p.push(`</g>`);
  return p.join("\n");
}
