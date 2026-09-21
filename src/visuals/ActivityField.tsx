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

  const cellSize = 14;
  const gap = 2; // Tighter print gap
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
  const startY = 80;
  const gridHeight = daysPerWeek * (cellSize + gap) - gap;

  p.push(`<g id="activity-print-grid">`);

  // Axis guidelines
  p.push(`<line x1="${startX - 20}" y1="${startY - 20}" x2="${startX + gridWidth + 20}" y2="${startY - 20}" stroke="#111111" stroke-width="2"/>`);
  p.push(`<line x1="${startX - 20}" y1="${startY + gridHeight + 20}" x2="${startX + gridWidth + 20}" y2="${startY + gridHeight + 20}" stroke="#111111" stroke-width="2"/>`);

  // Month labels: place exactly above the week column where a new month starts
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
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

    if (monthToLabel && (wIdx - lastLabeledCol) >= 4) {
      const x = startX + wIdx * (cellSize + gap);
      p.push(`<text x="${x}" y="${startY - 8}" font-family="Inter,sans-serif" font-size="10" fill="#111111" font-weight="700">${monthToLabel}</text>`);
      lastLabeledCol = wIdx;
    }
  });

  // Day of week labels on left (MON = Row 1, WED = Row 3, FRI = Row 5)
  const dayLabels: Record<number, string> = { 1: "MON", 3: "WED", 5: "FRI" };
  for (let d = 0; d < 7; d++) {
    if (dayLabels[d]) {
      const y = startY + d * (cellSize + gap) + cellSize * 0.75;
      p.push(`<text x="${startX - 14}" y="${y}" font-family="Inter,sans-serif" font-size="9" fill="#111111" text-anchor="end" font-weight="700">${dayLabels[d]}</text>`);
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
          // Intense activity: Deep Red
          p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="#d9331a" />`);
        } else if (level === 2 || count >= 2) {
          // Moderate activity: Solid Black
          p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="#111111" />`);
        } else {
          // Low activity: Mid Gray
          p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="#777777" />`);
        }
      } else {
        // Zero-commit day: subtle paper crease
        p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="#e5e3db" stroke="#d5d3cb" stroke-width="1"/>`);
      }
    });
  });

  p.push(`</g>`);
  return p.join("\n");
}
