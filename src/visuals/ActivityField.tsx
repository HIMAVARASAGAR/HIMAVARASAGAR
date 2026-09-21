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

  const cellSize = 13.5;
  const gap = 4.2;
  const weeksCount = 52;
  const daysPerWeek = 7;
  const gridWidth = weeksCount * (cellSize + gap) - gap;
  const startX = Math.round((width - gridWidth) / 2);
  const startY = 100;

  // CSS animations
  p.push(`<style>
    @keyframes calendarSweep {
      0% { transform: translateX(${startX - 24}px); opacity: 0; }
      4% { opacity: 0.35; }
      88% { opacity: 0.32; }
      100% { transform: translateX(${startX + gridWidth + 24}px); opacity: 0; }
    }
    @keyframes activePulseHigh {
      0%, 100% { filter: drop-shadow(0 0 1px rgba(255,255,255,0.4)); opacity: 0.85; }
      50% { filter: drop-shadow(0 0 5px rgba(255,255,255,0.95)); opacity: 1; }
    }
    @keyframes activePulseMid {
      0%, 100% { opacity: 0.55; }
      50% { opacity: 0.80; }
    }
    .sweep-bar {
      animation: calendarSweep 7.5s cubic-bezier(0.35, 0.05, 0.35, 0.95) infinite;
    }
    .node-high {
      animation: activePulseHigh 2.6s ease-in-out infinite;
    }
    .node-mid {
      animation: activePulseMid 3.4s ease-in-out infinite;
    }
  </style>`);

  p.push(`<g id="animated-activity-layer">`);

  // Linear gradient for sweep line
  p.push(`<defs>
    <linearGradient id="calSweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="white" stop-opacity="0"/>
      <stop offset="100%" stop-color="white" stop-opacity="0.10"/>
    </linearGradient>
  </defs>`);

  // ── Grid Framing & Axis Lines ─────────────────────────────────────
  const gridHeight = daysPerWeek * (cellSize + gap) - gap;

  // Top and bottom horizontal axis guidelines
  p.push(`<line x1="${startX - 20}" y1="${startY - 26}" x2="${startX + gridWidth + 20}" y2="${startY - 26}" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/>`);
  p.push(`<line x1="${startX - 20}" y1="${startY + gridHeight + 20}" x2="${startX + gridWidth + 20}" y2="${startY + gridHeight + 20}" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/>`);

  // Slice contributions to the exact 52 weeks (364 days)
  const totalDays = weeksCount * daysPerWeek;
  const daysList = data.contributions.slice(-totalDays);

  // Month labels and vertical tick guides
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const weeksPerMonth = weeksCount / 12;
  for (let m = 0; m < 12; m++) {
    const x = startX + Math.floor(m * weeksPerMonth) * (cellSize + gap);
    // Month label
    p.push(`<text x="${x}" y="${startY - 12}" font-family="Inter,sans-serif" font-size="8.5" fill="rgba(255,255,255,0.22)" font-weight="600" letter-spacing="1">${months[m]}</text>`);
    // Hairline tick mark
    p.push(`<line x1="${x}" y1="${startY - 8}" x2="${x}" y2="${startY - 4}" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>`);
  }

  // Day of week labels (MON, WED, FRI)
  const dayLabels: Record<number, string> = { 1: "MON", 3: "WED", 5: "FRI" };
  for (let d = 0; d < 7; d++) {
    if (dayLabels[d]) {
      const y = startY + d * (cellSize + gap) + cellSize * 0.72;
      p.push(`<text x="${startX - 14}" y="${y}" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.14)" text-anchor="end" font-weight="500">${dayLabels[d]}</text>`);
    }
  }

  // Render contribution cells
  let dayIdx = 0;
  for (let w = 0; w < weeksCount; w++) {
    for (let d = 0; d < daysPerWeek; d++) {
      const day = daysList[dayIdx++];
      const x = startX + w * (cellSize + gap);
      const y = startY + d * (cellSize + gap);

      const count = day?.count ?? 0;
      const level = day?.level ?? 0;

      if (count > 0) {
        if (level >= 3 || count >= 4) {
          // Intense activity
          p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2.5" fill="rgba(255,255,255,0.95)" class="node-high"/>`);
        } else if (level === 2 || count >= 2) {
          // Moderate activity
          p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2.5" fill="rgba(255,255,255,0.60)" class="node-mid"/>`);
        } else {
          // Low activity
          p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2.5" fill="rgba(255,255,255,0.30)"/>`);
        }
      } else {
        // Zero-commit day: subtle precision coordinate cell
        p.push(`<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" fill="rgba(255,255,255,0.022)" stroke="rgba(255,255,255,0.018)" stroke-width="0.5"/>`);
      }
    }
  }

  // Oscilloscope sweep beam
  p.push(`<g class="sweep-bar">`);
  p.push(`<line x1="0" y1="${startY - 16}" x2="0" y2="${startY + gridHeight + 16}" stroke="rgba(255,255,255,0.22)" stroke-width="0.75"/>`);
  p.push(`<rect x="-24" y="${startY - 16}" width="24" height="${gridHeight + 32}" fill="url(#calSweepGrad)"/>`);
  p.push(`</g>`);

  p.push(`</g>`);
  return p.join("\n");
}
