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
  { name: "projects", element: <Projects />, width: 1200, height: 460 },
  { name: "activity", element: <Activity />, width: 1200, height: 320 },
  { name: "closing", element: <Closing />, width: 1200, height: 240 },
];

function generateProjectsAccents(): string {
  return `
  <style>
    @keyframes matrixSweep {
      0% { transform: translateY(0px); opacity: 0; }
      5% { opacity: 0.55; }
      90% { opacity: 0.45; }
      100% { transform: translateY(460px); opacity: 0; }
    }
    @keyframes nodeBlink {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    .proj-sweep { animation: matrixSweep 8s cubic-bezier(0.3, 0.05, 0.3, 0.95) infinite; }
    .corner-node { animation: nodeBlink 2.4s ease-in-out infinite; }
  </style>
  <g id="projects-accents">
    <defs>
      <linearGradient id="projSweepGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#00f0ff" stop-opacity="0"/>
        <stop offset="80%" stop-color="#00f0ff" stop-opacity="0.04"/>
        <stop offset="100%" stop-color="#00f0ff" stop-opacity="0.16"/>
      </linearGradient>
    </defs>
    <!-- Subtle vertical scanning beam with cyan phosphor tint -->
    <g class="proj-sweep">
      <line x1="56" y1="0" x2="1144" y2="0" stroke="#00f0ff" stroke-opacity="0.7" stroke-width="1.0"/>
      <rect x="56" y="-28" width="1088" height="28" fill="url(#projSweepGrad)"/>
    </g>
    <!-- Micro technical corner indicators on outer frame -->
    <circle cx="56" cy="36" r="2" fill="#00f0ff" class="corner-node"/>
    <circle cx="1144" cy="36" r="2" fill="#00f0ff" class="corner-node"/>
    <circle cx="56" cy="428" r="2" fill="#00f0ff" class="corner-node"/>
    <circle cx="1144" cy="428" r="2" fill="#00f0ff" class="corner-node"/>
  </g>
  `;
}

function generateClosingAccents(): string {
  return `
  <style>
    @keyframes beaconBlink {
      0%, 100% { opacity: 0.25; transform: scale(0.9); }
      50% { opacity: 1; transform: scale(1.2); }
    }
    .beacon-light {
      transform-origin: 1144px 34px;
      animation: beaconBlink 2s ease-in-out infinite;
    }
  </style>
  <g id="closing-accents">
    <circle cx="1144" cy="34" r="2.5" fill="#00f0ff" class="beacon-light"/>
    <circle cx="1144" cy="34" r="7" fill="none" stroke="#00f0ff" stroke-opacity="0.5" stroke-width="0.8" class="beacon-light"/>
  </g>
  `;
}

for (const scene of scenes) {
  try {
    let svg = await satori(scene.element, {
      width: scene.width,
      height: scene.height,
      fonts,
    });

    const bgRegex = /(?:<rect|<path)[^>]*fill="#(?:080808|070a0f)"[^>]*\/>/;

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

    // Inject subtle accents into projects.svg
    if (scene.name === "projects" && bgRegex.test(svg)) {
      const projLayer = generateProjectsAccents();
      svg = svg.replace(bgRegex, match => match + projLayer);
    }

    // Inject beacon into closing.svg
    if (scene.name === "closing" && bgRegex.test(svg)) {
      const closingLayer = generateClosingAccents();
      svg = svg.replace(bgRegex, match => match + closingLayer);
    }

    await fs.writeFile(`src/generated/${scene.name}.svg`, svg);
    console.log(`✓ generated src/generated/${scene.name}.svg`);
  } catch (err) {
    console.error(`✗ failed to generate ${scene.name}:`, err);
  }
}
