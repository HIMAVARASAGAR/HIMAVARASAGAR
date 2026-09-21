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

// ── Generate all scenes ─────────────────────────────────────────────

const scenes: { name: string; element: React.JSX.Element; width: number; height: number }[] = [
  { name: "hero", element: <Hero />, width: 1200, height: 630 },
  { name: "projects", element: <Projects />, width: 1200, height: 400 },
  { name: "activity", element: <Activity />, width: 1200, height: 320 },
  { name: "closing", element: <Closing />, width: 1200, height: 240 },
];

function generateProjectsAccents(): string {
  return `
  <style>
    @keyframes repoPulse {
      0%, 100% { opacity: 0.25; transform: scale(0.9); }
      50% { opacity: 0.9; transform: scale(1.1); }
    }
    @keyframes matrixSweep {
      0% { transform: translateY(0px); opacity: 0; }
      5% { opacity: 0.25; }
      90% { opacity: 0.2; }
      100% { transform: translateY(400px); opacity: 0; }
    }
    .repo-diode-1 { transform-origin: 64px 60px; animation: repoPulse 2.8s ease-in-out infinite; }
    .repo-diode-2 { transform-origin: 1136px 60px; animation: repoPulse 3.4s ease-in-out infinite 0.5s; }
    .repo-diode-3 { transform-origin: 64px 345px; animation: repoPulse 3.1s ease-in-out infinite 1.0s; }
    .repo-diode-4 { transform-origin: 1136px 345px; animation: repoPulse 2.6s ease-in-out infinite 1.5s; }
    .horiz-sweep { animation: matrixSweep 9s cubic-bezier(0.3, 0.05, 0.3, 0.95) infinite; }
  </style>
  <g id="projects-accents">
    <defs>
      <linearGradient id="projSweepGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="white" stop-opacity="0"/>
        <stop offset="100%" stop-color="white" stop-opacity="0.04"/>
      </linearGradient>
    </defs>
    <!-- Matrix subtle horizontal scan beam -->
    <g class="horiz-sweep">
      <line x1="64" y1="0" x2="1136" y2="0" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
      <rect x="64" y="-24" width="1072" height="24" fill="url(#projSweepGrad)"/>
    </g>
    <!-- Micro technical corner indicators on outer frame -->
    <circle cx="64" cy="58" r="1.5" fill="rgba(255,255,255,0.4)" class="repo-diode-1"/>
    <circle cx="1136" cy="58" r="1.5" fill="rgba(255,255,255,0.4)" class="repo-diode-2"/>
    <circle cx="64" cy="348" r="1.5" fill="rgba(255,255,255,0.4)" class="repo-diode-3"/>
    <circle cx="1136" cy="348" r="1.5" fill="rgba(255,255,255,0.4)" class="repo-diode-4"/>
  </g>
  `;
}

function generateClosingAccents(): string {
  return `
  <style>
    @keyframes beaconBlink {
      0%, 100% { opacity: 0.15; }
      50% { opacity: 0.95; }
    }
    .beacon-light {
      animation: beaconBlink 2s ease-in-out infinite;
    }
  </style>
  <g id="closing-accents">
    <circle cx="1136" cy="41" r="2" fill="#ffffff" class="beacon-light"/>
    <circle cx="1136" cy="41" r="5" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="0.5" class="beacon-light"/>
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

    const bgRect = `<rect x="0" y="0" width="${scene.width}" height="${scene.height}" fill="#080808"/>`;

    // Inject animated visual layer into hero.svg
    if (scene.name === "hero" && svg.includes(bgRect)) {
      const animatedLayer = generateAnimatedHeroLayer();
      svg = svg.replace(bgRect, bgRect + animatedLayer);
    }

    // Inject animated real-time activity grid into activity.svg
    if (scene.name === "activity" && svg.includes(bgRect)) {
      const data = getContributionData();
      const activityLayer = generateAnimatedActivityLayer(scene.width, scene.height, data);
      svg = svg.replace(bgRect, bgRect + activityLayer);
    }

    // Inject subtle accents into projects.svg
    if (scene.name === "projects" && svg.includes(bgRect)) {
      const projLayer = generateProjectsAccents();
      svg = svg.replace(bgRect, bgRect + projLayer);
    }

    // Inject beacon into closing.svg
    if (scene.name === "closing" && svg.includes(bgRect)) {
      const closingLayer = generateClosingAccents();
      svg = svg.replace(bgRect, bgRect + closingLayer);
    }

    await fs.writeFile(`src/generated/${scene.name}.svg`, svg);
    console.log(`✓ generated src/generated/${scene.name}.svg`);
  } catch (err) {
    console.error(`✗ failed to generate ${scene.name}:`, err);
  }
}
