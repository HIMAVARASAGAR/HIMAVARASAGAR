export function generateAnimatedHeroLayer(): string {
  const p: string[] = [];
  const W = 1200;
  const H = 630;

  p.push(`<g id="hero-architectural-masthead">`);

  // We don't want animations anymore, the user hates the scanning bs.
  // We want a static, highly complex physical silicon die graphic or brutalist pattern.

  p.push(`<g opacity="0.1">`);
  // Dense diagonal hatching
  p.push(`<pattern id="hatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">`);
  p.push(`  <line x1="0" y1="0" x2="0" y2="10" stroke="#111111" stroke-width="1.5" />`);
  p.push(`</pattern>`);
  
  // A large physical die abstraction in the background
  p.push(`<rect x="700" y="50" width="450" height="450" fill="url(#hatch)" stroke="#111111" stroke-width="4" />`);
  p.push(`<rect x="720" y="70" width="150" height="150" fill="none" stroke="#111111" stroke-width="4" />`);
  p.push(`<rect x="980" y="330" width="150" height="150" fill="none" stroke="#111111" stroke-width="4" />`);
  p.push(`<rect x="720" y="330" width="200" height="150" fill="none" stroke="#111111" stroke-width="4" />`);

  // Intricate connection lines
  for (let i = 0; i < 20; i++) {
    p.push(`<line x1="${880 + i * 4}" y1="70" x2="${880 + i * 4}" y2="220" stroke="#111111" stroke-width="1.5" />`);
    p.push(`<line x1="${720}" y1="${230 + i * 4}" x2="${870}" y2="${230 + i * 4}" stroke="#111111" stroke-width="1.5" />`);
  }

  p.push(`</g>`);

  // Target registration crosses
  const crosses = [
    { x: 120, y: 120 },
    { x: W - 120, y: 120 },
    { x: 120, y: H - 240 },
    { x: W - 120, y: H - 240 }
  ];

  for (const c of crosses) {
    p.push(`<g transform="translate(${c.x}, ${c.y})">`);
    p.push(`<circle cx="0" cy="0" r="16" fill="none" stroke="#111111" stroke-width="2" />`);
    p.push(`<line x1="-24" y1="0" x2="24" y2="0" stroke="#111111" stroke-width="2" />`);
    p.push(`<line x1="0" y1="-24" x2="0" y2="24" stroke="#111111" stroke-width="2" />`);
    p.push(`</g>`);
  }

  p.push(`</g>`);

  return p.join("\n");
}
