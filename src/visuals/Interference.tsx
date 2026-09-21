/**
 * Generative Signal Strata & Topographic Waveform Landscape.
 *
 * Inspired by pulsar radio frequency profiles (CP 1919), seismic topography,
 * and high-end Swiss architectural graphic design (Carsten Nicolai / Peter Saville).
 *
 * Replaces cliché neon radar/antenna circles with a layered 3D wave terrain:
 * - 24 stacked continuous contour ribbons with physical occlusion fill.
 * - Massive typographic negative space on the left; rich organic density on the right.
 * - Warm titanium/silver palette with a single tactile cadmium ember (#ff5500) mark.
 * - Zero gamer neon. Zero corny HUD text. Pure sculptural generative art.
 */

const W = 1200;
const H = 630;

export function generateAnimatedHeroLayer(): string {
  const p: string[] = [];

  // ── Animation & Styling ─────────────────────────────────────────────
  p.push(`<style>
    @keyframes terrainScan {
      0% { transform: translateX(420px); opacity: 0; }
      4% { opacity: 0.7; }
      85% { opacity: 0.6; }
      100% { transform: translateX(1140px); opacity: 0; }
    }
    @keyframes ridgeBreathe {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-3px); }
    }
    @keyframes emberPulse {
      0%, 100% { opacity: 0.4; transform: scale(0.9); }
      50% { opacity: 1; transform: scale(1.15); }
    }
    .terrain-beam {
      animation: terrainScan 9s cubic-bezier(0.25, 0.05, 0.25, 0.95) infinite;
    }
    .ridge-group {
      animation: ridgeBreathe 6s ease-in-out infinite;
    }
    .ember-node {
      transform-origin: 430px 48px;
      animation: emberPulse 2.8s ease-in-out infinite;
    }
  </style>`);

  p.push(`<g id="hero-signal-strata">`);

  // ── Gradients & Surfaces ───────────────────────────────────────────
  p.push(`<defs>
    <!-- Deep carbon slate surface with subtle vignette -->
    <linearGradient id="carbonSurface" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1014"/>
      <stop offset="50%" stop-color="#0b0d11"/>
      <stop offset="100%" stop-color="#08090c"/>
    </linearGradient>

    <!-- Warm ember beam gradient -->
    <linearGradient id="scanBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff5500" stop-opacity="0"/>
      <stop offset="85%" stop-color="#ff5500" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.35"/>
    </linearGradient>

    <!-- Ribbon occlusion gradient: dark base so waves occlude each other cleanly -->
    <linearGradient id="ribbonFill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f1217"/>
      <stop offset="100%" stop-color="#08090c"/>
    </linearGradient>
  </defs>`);

  // ── 0. Architectural Frame & Registration ───────────────────────────
  // Outer plate container with crisp titanium border
  p.push(`<rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="6" fill="url(#carbonSurface)" stroke="#1d222a" stroke-width="1.2"/>`);
  p.push(`<rect x="16" y="16" width="${W - 32}" height="${H - 32}" rx="3" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.7"/>`);

  // Precision architectural registration marks (+)
  const regMarks = [
    { x: 36, y: 36 },
    { x: W - 36, y: 36 },
    { x: 36, y: H - 36 },
    { x: W - 36, y: H - 36 },
    { x: 420, y: 36 },
    { x: 420, y: H - 36 },
  ];
  for (const m of regMarks) {
    p.push(`<line x1="${m.x - 5}" y1="${m.y}" x2="${m.x + 5}" y2="${m.y}" stroke="#8b949e" stroke-opacity="0.45" stroke-width="0.7"/>`);
    p.push(`<line x1="${m.x}" y1="${m.y - 5}" x2="${m.x}" y2="${m.y + 5}" stroke="#8b949e" stroke-opacity="0.45" stroke-width="0.7"/>`);
  }

  // Millimeter scale ticks along top margin
  for (let x = 420; x <= 1140; x += 12) {
    const isMajor = (x - 420) % 60 === 0;
    const len = isMajor ? 6 : 3;
    const op = isMajor ? 0.35 : 0.12;
    p.push(`<line x1="${x}" y1="36" x2="${x}" y2="${36 + len}" stroke="#8b949e" stroke-opacity="${op}" stroke-width="0.5"/>`);
  }

  // Tactile Cadmium Ember registration dot (top right of text boundary)
  p.push(`<g class="ember-node">`);
  p.push(`<circle cx="420" cy="48" r="2.5" fill="#ff5500"/>`);
  p.push(`<circle cx="420" cy="48" r="6" fill="none" stroke="#ff5500" stroke-opacity="0.3" stroke-width="0.6"/>`);
  p.push(`</g>`);

  // ── 1. Generative 3D Topographic Strata (24 Layered Ribbons) ──────
  p.push(`<g id="topographic-strata" class="ridge-group">`);

  const numLines = 26;
  const startY = 95;
  const endY = 540;
  const stepY = (endY - startY) / (numLines - 1);

  const startX = 420;
  const endX = 1148;
  const stepX = 5;

  for (let i = 0; i < numLines; i++) {
    const baseY = startY + i * stepY;
    const pathSegments: string[] = [];

    // Begin path at bottom-left corner of this ribbon slice for solid occlusion
    pathSegments.push(`M ${startX} ${baseY + 45}`);
    pathSegments.push(`L ${startX} ${baseY}`);

    for (let x = startX; x <= endX; x += stepX) {
      const t = (x - startX) / (endX - startX);

      // Dual Gaussian envelopes for natural harmonic peaks
      const c1 = 0.52;
      const w1 = 0.22;
      const env1 = Math.exp(-Math.pow((t - c1) / w1, 2));

      const c2 = 0.78;
      const w2 = 0.18;
      const env2 = Math.exp(-Math.pow((t - c2) / w2, 2)) * 0.65;

      const env = Math.max(env1, env2);

      // Multi-frequency harmonic resonance
      const phase = i * 0.38;
      const wave1 = Math.sin(t * Math.PI * 5.2 + phase);
      const wave2 = Math.sin(t * Math.PI * 10.8 - phase * 1.3) * 0.45;
      const wave3 = Math.cos(t * Math.PI * 18.0 + phase * 0.7) * 0.22;
      const compositeWave = wave1 + wave2 + wave3;

      // Peak amplitude scaling with vertical layer position
      const layerScale = Math.sin((i / numLines) * Math.PI);
      const maxAmp = (62 + 22 * layerScale) * Math.max(0, compositeWave * 0.6 + 0.4);

      const y = baseY - env * maxAmp;
      pathSegments.push(`L ${x.toFixed(1)} ${y.toFixed(1)}`);
    }

    pathSegments.push(`L ${endX} ${baseY}`);
    pathSegments.push(`L ${endX} ${baseY + 45}`);
    pathSegments.push(`Z`);

    const pathData = pathSegments.join(" ");

    // Layer stroke luminosity: foreground crests are brighter silver; background is subtle
    const depthRatio = i / numLines;
    const strokeOp = Math.max(0.12, 0.15 + 0.65 * Math.pow(depthRatio, 1.4));
    const strokeWidth = i % 5 === 0 ? 0.85 : 0.55;

    // Solid occlusion fill covers the wave behind it
    p.push(`<path d="${pathData}" fill="url(#ribbonFill)" stroke="rgba(240, 244, 252, ${strokeOp.toFixed(3)})" stroke-width="${strokeWidth}"/>`);
  }

  p.push(`</g>`);

  // ── 2. Traveling Vertical Precision Beam ────────────────────────────
  p.push(`<g class="terrain-beam">`);
  p.push(`<line x1="0" y1="80" x2="0" y2="550" stroke="#ff5500" stroke-opacity="0.65" stroke-width="0.8"/>`);
  p.push(`<rect x="-24" y="80" width="24" height="470" fill="url(#scanBeamGrad)"/>`);
  p.push(`</g>`);

  // ── 3. Structural Dividing Axis ─────────────────────────────────────
  // Clean vertical datum line separating typography column from terrain
  p.push(`<line x1="420" y1="36" x2="420" y2="${H - 36}" stroke="#1d222a" stroke-width="0.8" stroke-dasharray="4 6"/>`);

  p.push(`</g>`);
  return p.join("\n");
}
