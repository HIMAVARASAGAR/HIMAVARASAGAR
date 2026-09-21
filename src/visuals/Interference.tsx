/**
 * High-Precision Editorial & Technical Drafting Layer (Hero Scene).
 *
 * Designed as a unified architectural/drafting artifact:
 * - Layered structural planes & isometric technical projection.
 * - Precision drafting grids, harmonic vector density, and fine measurement scales.
 * - Palette: Warm deep carbon (#0c0e12), bone/ivory (#f4f2eb), titanium (#6e7681).
 * - Zero gamer neon, zero fake sci-fi HUD text. Pure high-craft engineering draftsmanship.
 */

const W = 1200;
const H = 630;

export function generateAnimatedHeroLayer(): string {
  const p: string[] = [];

  p.push(`<style>
    @keyframes beamPulse {
      0%, 100% { opacity: 0.15; }
      50% { opacity: 0.85; }
    }
    @keyframes lineDrift {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: 120; }
    }
    @keyframes scanTravel {
      0% { transform: translateY(0px); opacity: 0; }
      8% { opacity: 0.45; }
      88% { opacity: 0.45; }
      100% { transform: translateY(530px); opacity: 0; }
    }
    .draft-pulse { animation: beamPulse 3.6s ease-in-out infinite; }
    .drift-path { stroke-dasharray: 6 14; animation: lineDrift 14s linear infinite; }
    .horiz-scan { animation: scanTravel 10s cubic-bezier(0.3, 0.05, 0.3, 0.95) infinite; }
  </style>`);

  p.push(`<g id="hero-editorial-draft">`);

  // ── Defs & Gradients ──
  p.push(`<defs>
    <linearGradient id="draftSurface" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1014"/>
      <stop offset="60%" stop-color="#0a0c0f"/>
      <stop offset="100%" stop-color="#07080a"/>
    </linearGradient>

    <linearGradient id="horizScanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.08"/>
    </linearGradient>

    <!-- Isometric structural hatch pattern -->
    <pattern id="isoGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 0 20 L 40 20 M 20 0 L 20 40" fill="none" stroke="rgba(255,255,255,0.025)" stroke-width="0.5"/>
      <circle cx="20" cy="20" r="0.75" fill="rgba(255,255,255,0.08)"/>
    </pattern>
  </defs>`);

  // ── 0. Base Plate & Structural Margins ──
  p.push(`<rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="4" fill="url(#draftSurface)" stroke="#1a1d24" stroke-width="1.2"/>`);
  p.push(`<rect x="24" y="24" width="${W - 48}" height="${H - 48}" rx="2" fill="url(#isoGrid)" stroke="#15181f" stroke-width="0.8"/>`);

  // Outer corner registration brackets
  const b = 18;
  const corners = [
    { x: 36, y: 36, dx: 1, dy: 1 },
    { x: W - 36, y: 36, dx: -1, dy: 1 },
    { x: 36, y: H - 36, dx: 1, dy: -1 },
    { x: W - 36, y: H - 36, dx: -1, dy: -1 },
  ];
  for (const c of corners) {
    p.push(`<path d="M ${c.x + c.dx * b} ${c.y} L ${c.x} ${c.y} L ${c.x} ${c.y + c.dy * b}" fill="none" stroke="#6e7681" stroke-opacity="0.6" stroke-width="1.0"/>`);
  }

  // ── 1. Layered Isometric Architectural Planes ──
  // Projected structural planes floating in the right visual field
  const originX = 820;
  const originY = 310;

  // Plane 1: Lower Ground Substrate (Isometric Rhombus)
  p.push(`<g id="substrate-plane">`);
  p.push(`<polygon points="${originX},${originY + 120} ${originX + 260},${originY + 10} ${originX},${originY - 100} ${originX - 260},${originY + 10}" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.12)" stroke-width="0.8"/>`);
  
  // Isometric internal grid lines
  for (let step = -4; step <= 4; step++) {
    const ox = originX + step * 45;
    const oy = originY + 10 - step * 18;
    p.push(`<line x1="${ox - 100}" y1="${oy + 42}" x2="${ox + 100}" y2="${oy - 42}" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>`);
  }
  p.push(`</g>`);

  // Plane 2: Floating Radiating Aperture Plane
  p.push(`<g id="aperture-plane">`);
  const topY = originY - 60;
  p.push(`<polygon points="${originX},${topY + 100} ${originX + 220},${topY + 5} ${originX},${topY - 90} ${originX - 220},${topY + 5}" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.0" stroke-dasharray="3 5"/>`);

  // Interconnecting vertical projection pillars between substrate and aperture
  const pillars = [
    { x: originX, y1: originY + 120, y2: topY + 100 },
    { x: originX + 220, y1: originY + 10, y2: topY + 5 },
    { x: originX, y1: originY - 100, y2: topY - 90 },
    { x: originX - 220, y1: originY + 10, y2: topY + 5 },
    { x: originX + 70, y1: originY + 40, y2: topY + 15 },
    { x: originX - 70, y1: originY + 40, y2: topY + 15 },
  ];
  for (const pl of pillars) {
    p.push(`<line x1="${pl.x}" y1="${pl.y1}" x2="${pl.x}" y2="${pl.y2}" stroke="rgba(255,255,255,0.10)" stroke-width="0.7" stroke-dasharray="2 3"/>`);
    p.push(`<circle cx="${pl.x}" cy="${pl.y2}" r="1.5" fill="#f4f2eb" fill-opacity="0.7"/>`);
  }
  p.push(`</g>`);

  // ── 2. Harmonic Signal Vector Curves & Wavefront Geometry ──
  p.push(`<g id="harmonic-wavefronts">`);
  // Dense generative radiating wavefront arcs centered at primary focus
  const fx = originX + 20;
  const fy = topY + 10;

  for (let r = 25; r <= 320; r += 16) {
    const ratio = (r - 25) / 295;
    const op = Math.max(0.04, 0.40 * (1 - ratio));
    // Asymmetric elliptical deformation reflecting spatial propagation
    const rx = r * 1.15;
    const ry = r * 0.62;
    p.push(`<ellipse cx="${fx}" cy="${fy}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="none" stroke="rgba(244,242,235,${op.toFixed(3)})" stroke-width="${r % 32 === 0 ? 0.9 : 0.5}" transform="rotate(-18 ${fx} ${fy})"/>`);
  }

  // Cross-cutting hyperbolic asymptote traces
  for (let angle = 0; angle < 360; angle += 30) {
    const rad = (angle * Math.PI) / 180;
    const len = 340;
    const x2 = fx + len * Math.cos(rad);
    const y2 = fy + len * Math.sin(rad) * 0.55;
    if (x2 >= 460 && x2 <= 1160 && y2 >= 30 && y2 <= 600) {
      p.push(`<line x1="${fx}" y1="${fy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/>`);
    }
  }

  // Precision focal crosshair
  p.push(`<line x1="${fx - 24}" y1="${fy}" x2="${fx + 24}" y2="${fy}" stroke="#f4f2eb" stroke-opacity="0.8" stroke-width="1"/>`);
  p.push(`<line x1="${fx}" y1="${fy - 24}" x2="${fx}" y2="${fy + 24}" stroke="#f4f2eb" stroke-opacity="0.8" stroke-width="1"/>`);
  p.push(`<circle cx="${fx}" cy="${fy}" r="8" fill="none" stroke="#f4f2eb" stroke-opacity="0.5" stroke-width="0.8"/>`);
  p.push(`<circle cx="${fx}" cy="${fy}" r="2" fill="#f4f2eb" class="draft-pulse"/>`);
  p.push(`</g>`);

  // ── 3. Circuitous Transmission Bus & Waveguide Paths ──
  p.push(`<g id="transmission-bus">`);
  // Elegant geometric tracks with 45-degree chamfers navigating across canvas
  const tracks = [
    "M 440,110 L 620,110 L 690,180 L 780,180",
    "M 440,126 L 612,126 L 682,196 L 810,196 L 850,236",
    "M 440,510 L 630,510 L 710,430 L 920,430 L 960,390",
    "M 480,530 L 640,530 L 720,450 L 890,450",
  ];
  for (const t of tracks) {
    p.push(`<path d="${t}" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="0.8"/>`);
    p.push(`<path d="${t}" fill="none" stroke="rgba(244,242,235,0.4)" stroke-width="1.0" class="drift-path"/>`);
  }

  // Linear measurement scale along right margin
  const rx = W - 48;
  for (let y = 60; y <= H - 60; y += 10) {
    const isMajor = (y - 60) % 50 === 0;
    const len = isMajor ? 8 : 3;
    const op = isMajor ? 0.45 : 0.15;
    p.push(`<line x1="${rx - len}" y1="${y}" x2="${rx}" y2="${y}" stroke="#6e7681" stroke-opacity="${op}" stroke-width="0.5"/>`);
  }
  p.push(`</g>`);

  // ── 4. Subtle Ambient Scan Elevation ──
  p.push(`<g class="horiz-scan">`);
  p.push(`<line x1="48" y1="0" x2="${W - 48}" y2="0" stroke="rgba(255,255,255,0.20)" stroke-width="0.6"/>`);
  p.push(`<rect x="48" y="-18" width="${W - 96}" height="18" fill="url(#horizScanGrad)"/>`);
  p.push(`</g>`);

  // ── 5. Central Vertical Division Axis ──
  p.push(`<line x1="440" y1="36" x2="440" y2="${H - 36}" stroke="#1a1d24" stroke-width="0.8" stroke-dasharray="3 5"/>`);

  p.push(`</g>`);
  return p.join("\n");
}
