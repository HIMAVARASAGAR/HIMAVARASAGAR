/**
 * Full-Width Architectural Masthead & Structural Matrix (Hero Scene).
 *
 * BREAKS THE CLICHÉ:
 * - NO scanning beams / radar sweeps.
 * - NO "text on left, graphic on right" split.
 * - Full-bleed unified 1200x630 architectural composition.
 * - Central monumental typography integrated with generative structural coordinate matrices.
 * - 4-column lower specification ledger spanning the full base.
 */

const W = 1200;
const H = 630;

export function generateAnimatedHeroLayer(): string {
  const p: string[] = [];

  p.push(`<style>
    @keyframes nodeBreathe {
      0%, 100% { opacity: 0.3; transform: scale(0.95); }
      50% { opacity: 0.9; transform: scale(1.05); }
    }
    @keyframes subtleDrift {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: 80; }
    }
    .reg-node { transform-origin: center; animation: nodeBreathe 4s ease-in-out infinite; }
    .drift-hairline { stroke-dasharray: 4 8; animation: subtleDrift 20s linear infinite; }
  </style>`);

  p.push(`<g id="hero-architectural-masthead">`);

  // ── Defs & Surfaces ──
  p.push(`<defs>
    <linearGradient id="mastheadBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1014"/>
      <stop offset="50%" stop-color="#0a0c0f"/>
      <stop offset="100%" stop-color="#060709"/>
    </linearGradient>

    <!-- Structural micro-grid pattern spanning entire background -->
    <pattern id="fullGrid" width="60" height="60" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="60" y2="0" stroke="rgba(255,255,255,0.02)" stroke-width="0.5"/>
      <line x1="0" y1="0" x2="0" y2="60" stroke="rgba(255,255,255,0.02)" stroke-width="0.5"/>
      <circle cx="30" cy="30" r="0.5" fill="rgba(255,255,255,0.05)"/>
    </pattern>
  </defs>`);

  // ── 0. Full Canvas Outer Shell ──
  p.push(`<rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="4" fill="url(#mastheadBg)" stroke="#1a1d24" stroke-width="1.2"/>`);
  p.push(`<rect x="20" y="20" width="${W - 40}" height="${H - 40}" rx="2" fill="url(#fullGrid)" stroke="#14171e" stroke-width="0.8"/>`);

  // Full-width horizontal architectural guide hairlines
  p.push(`<line x1="20" y1="72" x2="${W - 20}" y2="72" stroke="#1a1d24" stroke-width="1.0"/>`);
  p.push(`<line x1="20" y1="460" x2="${W - 20}" y2="460" stroke="#1a1d24" stroke-width="1.0"/>`);

  // ── 1. Full-Width Background Generative Vector Strata ──
  // Spanning across the ENTIRE width behind the typography
  p.push(`<g id="full-canvas-geometry">`);
  
  // Dense harmonic horizontal wave bands running across the whole canvas
  for (let i = 0; i < 14; i++) {
    const baseY = 110 + i * 24;
    const pts: string[] = [];
    for (let x = 32; x <= W - 32; x += 8) {
      const t = (x - 32) / (W - 64);
      // Gentle harmonic undulations across full width
      const w1 = Math.sin(t * Math.PI * 4 + i * 0.45);
      const w2 = Math.sin(t * Math.PI * 8.5 - i * 0.3) * 0.35;
      const env = Math.sin(t * Math.PI); // tapering at edges
      const amp = (18 + 8 * Math.sin(i * 0.7)) * env;
      const y = baseY + (w1 + w2) * amp;
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    const poly = pts.join(" ");
    const op = 0.04 + 0.08 * Math.sin((i / 14) * Math.PI);
    p.push(`<polyline points="${poly}" fill="none" stroke="rgba(244,242,235,${op.toFixed(3)})" stroke-width="0.6"/>`);
  }

  // Cross-cutting architectural diagonals intersecting across the central field
  p.push(`<line x1="32" y1="72" x2="380" y2="460" stroke="rgba(255,255,255,0.035)" stroke-width="0.7"/>`);
  p.push(`<line x1="${W - 32}" y1="72" x2="${W - 380}" y2="460" stroke="rgba(255,255,255,0.035)" stroke-width="0.7"/>`);
  p.push(`<line x1="600" y1="72" x2="600" y2="460" stroke="rgba(255,255,255,0.04)" stroke-width="0.8" stroke-dasharray="4 6"/>`);

  // Symmetric polar concentric reference rings centered on the structural midline
  const cx = 600;
  const cy = 266;
  for (let r = 80; r <= 520; r += 60) {
    const op = Math.max(0.015, 0.06 * (1 - r / 520));
    p.push(`<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${(r * 0.42).toFixed(1)}" fill="none" stroke="rgba(255,255,255,${op.toFixed(3)})" stroke-width="0.5"/>`);
  }

  p.push(`</g>`);

  // ── 2. Structural Corner & Margin Registration Marks ──
  const regCrosses = [
    { x: 36, y: 36 },
    { x: W - 36, y: 36 },
    { x: 36, y: H - 36 },
    { x: W - 36, y: H - 36 },
    { x: 600, y: 36 },
    { x: 600, y: H - 36 },
    { x: 300, y: 460 },
    { x: 600, y: 460 },
    { x: 900, y: 460 },
  ];
  for (const rc of regCrosses) {
    p.push(`<line x1="${rc.x - 4}" y1="${rc.y}" x2="${rc.x + 4}" y2="${rc.y}" stroke="#6e7681" stroke-opacity="0.4" stroke-width="0.7"/>`);
    p.push(`<line x1="${rc.x}" y1="${rc.y - 4}" x2="${rc.x}" y2="${rc.y + 4}" stroke="#6e7681" stroke-opacity="0.4" stroke-width="0.7"/>`);
  }

  // Precision scale ticks along the bottom divider
  for (let x = 40; x <= W - 40; x += 20) {
    const isMajor = (x - 40) % 100 === 0;
    const len = isMajor ? 6 : 3;
    const op = isMajor ? 0.35 : 0.12;
    p.push(`<line x1="${x}" y1="460" x2="${x}" y2="${460 - len}" stroke="#6e7681" stroke-opacity="${op}" stroke-width="0.5"/>`);
  }

  // ── 3. Lower 4-Column Structural Dividers ──
  const cols = [300, 600, 900];
  for (const c of cols) {
    p.push(`<line x1="${c}" y1="460" x2="${c}" y2="${H - 20}" stroke="#1a1d24" stroke-width="0.8"/>`);
  }

  p.push(`</g>`);
  return p.join("\n");
}
