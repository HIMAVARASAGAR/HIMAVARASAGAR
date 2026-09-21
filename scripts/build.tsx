import fs from "node:fs/promises";
import React from "react";
import satori from "satori";
import { Hero } from "../src/components/Hero.js";
import { Projects } from "../src/components/Projects.js";
import { Activity } from "../src/components/Activity.js";
import { Closing } from "../src/components/Closing.js";
import { generateAnimatedHeroLayer } from "../src/visuals/Interference.js";
import { generateAnimatedActivityLayer, getContributionData } from "../src/visuals/ActivityField.js";

const regularFont = await fs.readFile(
  "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff"
);

const semiboldFont = await fs.readFile(
  "node_modules/@fontsource/inter/files/inter-latin-600-normal.woff"
);

const fonts = [
  {
    name: "Inter",
    data: regularFont,
    weight: 400 as const,
    style: "normal" as const,
  },
  {
    name: "Inter",
    data: semiboldFont,
    weight: 600 as const,
    style: "normal" as const,
  },
];

await fs.mkdir("src/generated", { recursive: true });

// ── Scene Dimensions ────────────────────────────────────────────────
const scenes: { name: string; element: React.JSX.Element; width: number; height: number }[] = [
  { name: "hero", element: <Hero />, width: 1200, height: 630 },
  { name: "projects", element: <Projects />, width: 1200, height: 440 },
  { name: "activity", element: <Activity />, width: 1200, height: 320 },
  { name: "closing", element: <Closing />, width: 1200, height: 240 },
];

// ── Generation Loop ────────────────────────────────────────────────

for (const scene of scenes) {
  try {
    let svg = await satori(scene.element, {
      width: scene.width,
      height: scene.height,
      fonts,
    });

    const bgRegex = /(?:<rect|<path)[^>]*fill="#[0-9a-fA-F]{6}"[^>]*\/>/;

    // Inject animated visual layer into hero.svg
    if (scene.name === "hero" && bgRegex.test(svg)) {
      const animatedLayer = generateAnimatedHeroLayer();
      svg = svg.replace(bgRegex, match => match + animatedLayer);
    }

    // Inject animated real-time activity grid into activity.svg
    if (scene.name === "activity" && bgRegex.test(svg)) {
      const data = getContributionData();
      const activityLayer = generateAnimatedActivityLayer(scene.width, scene.height, data);
      svg = svg.replace(bgRegex, match => match + activityLayer);
    }

    await fs.writeFile(`src/generated/${scene.name}.svg`, svg);
    console.log(`✓ generated src/generated/${scene.name}.svg`);
  } catch (err) {
    console.error(`✗ failed to generate ${scene.name}:`, err);
  }
}
