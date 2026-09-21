import fs from "node:fs/promises";
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

const USERNAME = "HIMAVARASAGAR";
const DATA_PATH = path.resolve("src/data/contributions.json");

export async function fetchContributions(): Promise<ContributionData> {
  console.log(`[activity] Fetching real contributions for ${USERNAME}...`);

  // Strategy 1: GitHub GraphQL API if GITHUB_TOKEN is available
  if (process.env.GITHUB_TOKEN) {
    try {
      const query = `
        query($login: String!) {
          user(login: $login) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `;
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          "User-Agent": "readme-experience-fetcher",
        },
        body: JSON.stringify({ query, variables: { login: USERNAME } }),
      });

      if (res.ok) {
        const json = await res.json();
        const calendar = json.data?.user?.contributionsCollection?.contributionCalendar;
        if (calendar) {
          const days: ContributionDay[] = [];
          for (const week of calendar.weeks) {
            for (const day of week.contributionDays) {
              const levelMap: Record<string, number> = {
                NONE: 0,
                FIRST_QUARTILE: 1,
                SECOND_QUARTILE: 2,
                THIRD_QUARTILE: 3,
                FOURTH_QUARTILE: 4,
              };
              days.push({
                date: day.date,
                count: day.contributionCount,
                level: levelMap[day.contributionLevel] ?? (day.contributionCount > 0 ? 1 : 0),
              });
            }
          }

          const data: ContributionData = {
            total: { lastYear: calendar.totalContributions },
            contributions: days,
            updatedAt: new Date().toISOString(),
          };

          await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
          await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
          console.log(`✓ Saved ${days.length} days (${data.total.lastYear} total) via GitHub GraphQL.`);
          return data;
        }
      }
    } catch (e: any) {
      console.warn(`[activity] GraphQL fetch failed: ${e.message}, falling back to public API...`);
    }
  }

  // Strategy 2: Public contribution aggregator API (no token required)
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`);
    if (res.ok) {
      const json = await res.json();
      const data: ContributionData = {
        total: { lastYear: json.total?.lastYear ?? 0 },
        contributions: json.contributions ?? [],
        updatedAt: new Date().toISOString(),
      };
      await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
      await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
      console.log(`✓ Saved ${data.contributions.length} days (${data.total.lastYear} total) via public endpoint.`);
      return data;
    }
  } catch (e: any) {
    console.warn(`[activity] Public API fetch failed: ${e.message}`);
  }

  // Strategy 3: Check if cached file already exists
  try {
    const existing = await fs.readFile(DATA_PATH, "utf8");
    console.log(`✓ Using existing cached contributions data.`);
    return JSON.parse(existing);
  } catch {
    // Generate fallback data if offline and no cache
    console.warn(`[activity] Using offline fallback data.`);
    const days: ContributionDay[] = [];
    const now = new Date();
    for (let i = 364; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 86400000);
      days.push({
        date: d.toISOString().split("T")[0],
        count: 0,
        level: 0,
      });
    }
    const fallback: ContributionData = {
      total: { lastYear: 0 },
      contributions: days,
      updatedAt: new Date().toISOString(),
    };
    await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
    await fs.writeFile(DATA_PATH, JSON.stringify(fallback, null, 2));
    return fallback;
  }
}

// Standalone execution support
if (process.argv[1]?.endsWith("fetch-activity.ts")) {
  fetchContributions();
}
