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

  const tileW = 20;
  const tileH = 10;
  const daysPerWeek = 7;

  const daysByDate = new Map<string, ContributionDay>();
  for (const d of data.contributions) {
    daysByDate.set(d.date, d);
  }

  const firstDateStr = data.contributions[0]?.date || "2025-09-21";
  const lastDateStr = data.contributions[data.contributions.length - 1]?.date || "2026-09-21";

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
  
  // Calculate bounding offsets to center the isometric city
  // x = week index, y = day index
  // sx = originX + (x - y) * (tileW / 2)
  // sy = originY + (x + y) * (tileH / 2)
  const maxW = displayWeeks.length - 1;
  const maxD = 6;
  
  const minSx = -maxD * (tileW / 2);
  const maxSx = maxW * (tileW / 2);
  const mapWidth = maxSx - minSx;
  
  const originX = width / 2 - (minSx + maxSx) / 2;
  const originY = 90; // Top margin

  p.push(`<g id="activity-isometric-cityscape">`);

  // We sort standard 0..W, 0..D which naturally provides the correct back-to-front drawing order
  displayWeeks.forEach((week, w) => {
    week.forEach(day => {
      const x = w;
      const y = day.dayOfWeek;
      
      const sx = originX + (x - y) * (tileW / 2);
      const sy = originY + (x + y) * (tileH / 2);
      
      const count = day.count;
      const level = day.level;
      
      // Calculate height with logarithmic-like cap for visual balance
      let z = count === 0 ? 0 : Math.min(80, 4 + count * 6);

      // Determine colors based on level
      let cTop = "#E5E3DB";
      let cLeft = "#D5D3CB";
      let cRight = "#C5C3BB";
      let stroke = "#D5D3CB";
      let strokeW = "0.5";

      if (count > 0) {
        stroke = "#111111"; // Brutalist stark outlines for active blocks
        strokeW = "1";
        if (level >= 3 || count >= 4) {
          cTop = "#FF4B26";
          cLeft = "#D9331A";
          cRight = "#A62410";
        } else if (level === 2 || count >= 2) {
          cTop = "#333333";
          cLeft = "#111111";
          cRight = "#000000";
        } else {
          cTop = "#A0A0A0";
          cLeft = "#777777";
          cRight = "#555555";
        }
      }

      if (z === 0) {
        // Flat tile
        const t1 = `${sx},${sy}`;
        const t2 = `${sx + tileW/2},${sy + tileH/2}`;
        const t3 = `${sx},${sy + tileH}`;
        const t4 = `${sx - tileW/2},${sy + tileH/2}`;
        p.push(`<polygon points="${t1} ${t2} ${t3} ${t4}" fill="${cTop}" stroke="${stroke}" stroke-width="${strokeW}" />`);
      } else {
        // 3D Extruded Block
        const t1 = `${sx},${sy - z}`;
        const t2 = `${sx + tileW/2},${sy + tileH/2 - z}`;
        const t3 = `${sx},${sy + tileH - z}`;
        const t4 = `${sx - tileW/2},${sy + tileH/2 - z}`;
        
        const l1 = `${sx - tileW/2},${sy + tileH/2 - z}`;
        const l2 = `${sx},${sy + tileH - z}`;
        const l3 = `${sx},${sy + tileH}`;
        const l4 = `${sx - tileW/2},${sy + tileH/2}`;

        const r1 = `${sx},${sy + tileH - z}`;
        const r2 = `${sx + tileW/2},${sy + tileH/2 - z}`;
        const r3 = `${sx + tileW/2},${sy + tileH/2}`;
        const r4 = `${sx},${sy + tileH}`;

        p.push(`<polygon points="${l1} ${l2} ${l3} ${l4}" fill="${cLeft}" stroke="${stroke}" stroke-width="${strokeW}" />`);
        p.push(`<polygon points="${r1} ${r2} ${r3} ${r4}" fill="${cRight}" stroke="${stroke}" stroke-width="${strokeW}" />`);
        p.push(`<polygon points="${t1} ${t2} ${t3} ${t4}" fill="${cTop}" stroke="${stroke}" stroke-width="${strokeW}" />`);
      }
    });
  });

  p.push(`</g>`);
  return p.join("\n");
}
