/**
 * High-Precision Electromagnetic & Signal Geometry (Hero Scene).
 *
 * Designed with high visible contrast and dual-layer animation:
 * - Native SVG SMIL (<animateTransform>, <animate>) for rock-solid 60 FPS
 *   rendering across all browsers (including Safari and GitHub Camo).
 * - Complementary CSS keyframes for smooth hardware-accelerated transitions.
 * - Restrained electric phosphor cyan (#00f0ff) accent on active telemetry nodes.
 * - Higher calibrated opacities (0.12 to 0.55) so geometry visibly lifts off dark backgrounds.
 */

const W = 1200;
const H = 630;

function seeded(s: number) {
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function generateAnimatedHeroLayer(): string {
  const p: string[] = [];

  // ── CSS & SMIL Definitions ─────────────────────────────────────────
  p.push(`<style>
    @keyframes sweepGlow {
      0% { transform: translateX(640px); opacity: 0; }
      5% { opacity: 0.65; }
      85% { opacity: 0.55; }
      100% { transform: translateX(1150px); opacity: 0; }
    }
    @keyframes packetFlow {
      from { stroke-dashoffset: 400; }
      to { stroke-dashoffset: 0; }
    }
    @keyframes carrierFlow {
      from { stroke-dashoffset: 600; }
      to { stroke-dashoffset: 0; }
    }
    @keyframes diodeGlow {
      0%, 100% { opacity: 0.35; transform: scale(0.85); }
      50% { opacity: 1; transform: scale(1.2); }
    }
    .sweep-beam {
      animation: sweepGlow 7s cubic-bezier(0.3, 0.05, 0.35, 0.95) infinite;
    }
    .packet-cyan {
      stroke-dasharray: 36 140;
      animation: packetFlow 4.5s linear infinite;
    }
    .carrier-white {
      stroke-dasharray: 24 100;
      animation: carrierFlow 3.8s linear infinite;
    }
    .diode-cyan {
      transform-origin: 860px 190px;
      animation: diodeGlow 2s ease-in-out infinite;
    }
  </style>`);

  p.push(`<g id="hero-instrumentation-plate">`);

  // ── Gradients & Markers ────────────────────────────────────────────
  p.push(`<defs>
    <!-- Slate gradient surface so the card distinctly lifts off GitHub dark mode (#0d1117) -->
    <linearGradient id="plateSurface" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c1118"/>
      <stop offset="60%" stop-color="#070a0f"/>
      <stop offset="100%" stop-color="#040609"/>
    </linearGradient>

    <!-- Radar scanning beam gradient with phosphor cyan tint -->
    <linearGradient id="radarBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff" stop-opacity="0"/>
      <stop offset="75%" stop-color="#00f0ff" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#00f0ff" stop-opacity="0.28"/>
    </linearGradient>

    <!-- Focal electromagnetic aura -->
    <radialGradient id="focalAura" cx="860" cy="190" r="320" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.09"/>
      <stop offset="35%" stop-color="#00f0ff" stop-opacity="0.025"/>
      <stop offset="70%" stop-color="#ffffff" stop-opacity="0.01"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>`);

  // ── 0. Outer Architectural Plate Framing ───────────────────────────
  // Outer plate container with technical border
  p.push(`<rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="6" fill="url(#plateSurface)" stroke="#1a2332" stroke-width="1.2"/>`);
  p.push(`<rect x="12" y="12" width="${W - 24}" height="${H - 24}" rx="4" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.8"/>`);

  // Outer ambient aura
  p.push(`<circle cx="860" cy="190" r="320" fill="url(#focalAura)"/>`);

  // Precision corner brackets
  const bLen = 26;
  const corners = [
    { x: 24, y: 24, dx: 1, dy: 1 },
    { x: W - 24, y: 24, dx: -1, dy: 1 },
    { x: 24, y: H - 24, dx: 1, dy: -1 },
    { x: W - 24, y: H - 24, dx: -1, dy: -1 },
  ];
  for (const c of corners) {
    p.push(`<line x1="${c.x}" y1="${c.y}" x2="${c.x + c.dx * bLen}" y2="${c.y}" stroke="#00f0ff" stroke-opacity="0.6" stroke-width="1.2"/>`);
    p.push(`<line x1="${c.x}" y1="${c.y}" x2="${c.x}" y2="${c.y + c.dy * bLen}" stroke="#00f0ff" stroke-opacity="0.6" stroke-width="1.2"/>`);
  }

  // ── 1. Coordinate Grid & Measurement Matrix ────────────────────────
  {
    const gx = 640, gy = 48, gw = 512, gh = 340, cell = 46.5;

    // Measurement sub-grid lines (visible contrast: 0.05 to 0.12)
    p.push(`<g id="measurement-grid">`);
    for (let x = gx; x <= gx + gw + 1; x += cell) {
      const isBorder = Math.abs(x - gx) < 1 || Math.abs(x - (gx + gw)) < cell / 2;
      const op = isBorder ? 0.22 : 0.06;
      p.push(`<line x1="${x.toFixed(1)}" y1="${gy}" x2="${x.toFixed(1)}" y2="${gy + gh}" stroke="rgba(255,255,255,${op})" stroke-width="${isBorder ? 0.8 : 0.5}"/>`);
    }
    for (let y = gy; y <= gy + gh + 1; y += cell) {
      const isBorder = Math.abs(y - gy) < 1 || Math.abs(y - (gy + gh)) < cell / 2;
      const op = isBorder ? 0.22 : 0.06;
      p.push(`<line x1="${gx}" y1="${y.toFixed(1)}" x2="${gx + gw}" y2="${y.toFixed(1)}" stroke="rgba(255,255,255,${op})" stroke-width="${isBorder ? 0.8 : 0.5}"/>`);
    }
    p.push(`</g>`);

    // Polar radial lines projecting from Antenna Port 1 (860, 190)
    const angles = [0, 30, 45, 60, 75, 90, 120, 150, 210, 240, 270, 300, 330];
    for (const deg of angles) {
      const rad = (deg * Math.PI) / 180;
      const len = 340;
      const x2 = 860 + len * Math.cos(rad);
      const y2 = 190 + len * Math.sin(rad);
      if (x2 >= 520 && x2 <= 1180 && y2 >= 20 && y2 <= 610) {
        p.push(`<line x1="860" y1="190" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" stroke-dasharray="3 6"/>`);
      }
    }

    // Polar distance rings (r = 70, 140, 210, 280)
    for (const r of [70, 140, 210, 280]) {
      p.push(`<circle cx="860" cy="190" r="${r}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.5" stroke-dasharray="4 7"/>`);
      p.push(`<text x="${860 + r + 3}" y="186" font-family="monospace" font-size="7" fill="rgba(255,255,255,0.20)">r=${r}</text>`);
    }

    // Telemetry crosshairs at Port 1 and Port 2
    p.push(`<line x1="844" y1="190" x2="876" y2="190" stroke="#00f0ff" stroke-opacity="0.8" stroke-width="1"/>`);
    p.push(`<line x1="860" y1="174" x2="860" y2="206" stroke="#00f0ff" stroke-opacity="0.8" stroke-width="1"/>`);
    p.push(`<circle cx="860" cy="190" r="18" fill="none" stroke="#00f0ff" stroke-opacity="0.3" stroke-width="0.6" stroke-dasharray="2 3"/>`);

    p.push(`<line x1="960" y1="260" x2="980" y2="260" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>`);
    p.push(`<line x1="970" y1="250" x2="970" y2="270" stroke="rgba(255,255,255,0.4)" stroke-width="0.8"/>`);

    // Engineering annotations with high-contrast text
    p.push(`<text x="878" y="182" font-family="monospace" font-size="8" fill="#00f0ff" font-weight="600" letter-spacing="1">PORT_01 // 1.0 THz</text>`);
    p.push(`<text x="982" y="254" font-family="monospace" font-size="7.5" fill="rgba(255,255,255,0.35)" letter-spacing="1">PORT_02 // Δφ = 45°</text>`);
    p.push(`<text x="652" y="66" font-family="monospace" font-size="8" fill="rgba(255,255,255,0.3)" letter-spacing="1.5">MIMO_SPATIAL_FIELD [2-ELEM]</text>`);

    // Radar scanning beam with trailing phosphor cyan glow
    p.push(`<g class="sweep-beam">`);
    p.push(`<line x1="0" y1="${gy}" x2="0" y2="${gy + gh}" stroke="#00f0ff" stroke-opacity="0.8" stroke-width="1.2"/>`);
    p.push(`<rect x="-36" y="${gy}" width="36" height="${gh}" fill="url(#radarBeamGrad)"/>`);
    p.push(`</g>`);
  }

  // ── 2. MIMO Dual-Array Electromagnetic Radiation Fringe Field ─────
  {
    // Element A: Radiation wave pattern (22 ellipses) with SMIL continuous rotation
    p.push(`<g id="mimo-elem-a">`);
    p.push(`<animateTransform attributeName="transform" type="rotate" from="0 860 190" to="360 860 190" dur="68s" repeatCount="indefinite"/>`);
    for (let i = 0; i < 22; i++) {
      const r = 24 + i * 22;
      const rx = r;
      const ry = r * (0.58 + 0.42 * Math.sin(i * 0.38 + 0.2));
      const t = i / 22;
      const op = Math.max(0.04, 0.32 * Math.exp(-Math.pow((t - 0.28) * 3, 2)));
      const rot = i * 3.6;
      p.push(
        `<ellipse cx="860" cy="190" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" ` +
        `fill="none" stroke="rgba(255,255,255,${op.toFixed(3)})" stroke-width="${i % 4 === 0 ? 0.8 : 0.5}" ` +
        `transform="rotate(${rot.toFixed(1)} 860 190)"/>`
      );
    }
    p.push(`</g>`);

    // Element B: Coupled radiating element (16 ellipses) counter-rotating
    p.push(`<g id="mimo-elem-b">`);
    p.push(`<animateTransform attributeName="transform" type="rotate" from="360 970 260" to="0 970 260" dur="52s" repeatCount="indefinite"/>`);
    for (let i = 0; i < 16; i++) {
      const r = 36 + i * 26;
      const rx = r;
      const ry = r * (0.62 + 0.38 * Math.sin(i * 0.42 + 0.3));
      const t = i / 16;
      const op = Math.max(0.03, 0.24 * Math.exp(-Math.pow((t - 0.3) * 3, 2)));
      const rot = 18 + i * 4.6;
      p.push(
        `<ellipse cx="970" cy="260" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" ` +
        `fill="none" stroke="rgba(255,255,255,${op.toFixed(3)})" stroke-width="0.5" ` +
        `transform="rotate(${rot.toFixed(1)} 970 260)"/>`
      );
    }
    p.push(`</g>`);

    // Calibrated rotating antenna reticle rings at Port 1
    p.push(`<g id="reticle-spin">`);
    p.push(`<animateTransform attributeName="transform" type="rotate" from="0 860 190" to="360 860 190" dur="24s" repeatCount="indefinite"/>`);
    p.push(`<circle cx="860" cy="190" r="32" fill="none" stroke="#00f0ff" stroke-opacity="0.25" stroke-width="0.8" stroke-dasharray="4 6"/>`);
    p.push(`<circle cx="860" cy="190" r="48" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="0.5" stroke-dasharray="2 10"/>`);
    p.push(`</g>`);

    // Blinking telemetry port diode (bright cyan + white core)
    p.push(`<g class="diode-cyan">`);
    p.push(`<circle cx="860" cy="190" r="7.5" fill="none" stroke="#00f0ff" stroke-opacity="0.5" stroke-width="0.8"/>`);
    p.push(`<circle cx="860" cy="190" r="3" fill="#00f0ff"/>`);
    p.push(`<circle cx="860" cy="190" r="1.2" fill="#ffffff"/>`);
    p.push(`</g>`);
  }

  // ── 3. High-Frequency RF Signal Waveforms ──────────────────────────
  {
    // Waveform A: Damped RF envelope crossing mid-canvas
    const pts1: string[] = [];
    for (let x = 36; x <= 740; x += 1.5) {
      const t = (x - 36) / 704;
      const amp = 56 * Math.exp(-t * 1.5) * Math.sin(t * Math.PI * 8.5);
      const y = 330 + amp;
      pts1.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    const poly1 = pts1.join(" ");
    // Baseline trace
    p.push(`<polyline points="${poly1}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.7"/>`);
    // High-contrast electric cyan traveling packet
    p.push(`<polyline points="${poly1}" fill="none" stroke="#00f0ff" stroke-width="1.4" class="packet-cyan"/>`);

    // Waveform B: High-frequency carrier wave (lower section)
    const pts2: string[] = [];
    for (let x = 120; x <= 1140; x += 1.5) {
      const t = (x - 120) / 1020;
      const freq = 4 + 12 * t;
      const envelope = Math.sin(t * Math.PI);
      const amp = 22 * envelope;
      const y = 496 + amp * Math.sin(t * Math.PI * freq);
      pts2.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    const poly2 = pts2.join(" ");
    // Baseline trace
    p.push(`<polyline points="${poly2}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/>`);
    // High-contrast white traveling packet
    p.push(`<polyline points="${poly2}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.0" class="carrier-white"/>`);

    // Waveguide propagation arcs
    p.push(`<path d="M 40,140 C 200,105 460,190 860,188" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.7"/>`);
    p.push(`<path d="M 100,200 C 320,170 550,260 760,250" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/>`);

    // Diagonal calibrated line with division ticks
    const x1 = 940, y1 = 52, x2 = 1150, y2 = 568;
    p.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>`);
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const nx = -dy / len, ny = dx / len;
    for (let i = 0; i <= 14; i++) {
      const t = i / 14;
      const px = x1 + dx * t;
      const py = y1 + dy * t;
      const tl = i % 5 === 0 ? 10 : 4;
      p.push(
        `<line x1="${(px - nx * tl).toFixed(1)}" y1="${(py - ny * tl).toFixed(1)}" ` +
        `x2="${(px + nx * tl).toFixed(1)}" y2="${(py + ny * tl).toFixed(1)}" ` +
        `stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>`
      );
    }
  }

  // ── 4. Shimmer Point Scatter ───────────────────────────────────────
  {
    const rand = seeded(77);
    for (let i = 0; i < 45; i++) {
      const x = 580 + rand() * 560;
      const y = 30 + rand() * 560;
      const dist = Math.sqrt((x - 860) ** 2 + (y - 190) ** 2);
      if (dist > 340) continue;
      const r = 0.5 + rand() * 1.1;
      const isCyan = rand() > 0.75;
      const fill = isCyan ? "#00f0ff" : "#ffffff";
      const op = 0.08 + rand() * 0.22;
      p.push(`<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" fill="${fill}" fill-opacity="${op.toFixed(2)}"/>`);
    }
  }

  p.push(`</g>`);
  return p.join("\n");
}
