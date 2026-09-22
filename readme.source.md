I'm an electronics and communication engineering graduate based in Hyderabad, India. I work on hardware projects, agent architectures, and telemetry frameworks.

```aura width=1200 height=800
<div style={{ display: 'flex', width: 1200, height: 800, background: '#07080b', fontFamily: 'Inter', overflow: 'hidden', position: 'relative' }}>
  <style>{`
    @keyframes pulse-core {
      0%, 100% { transform: scale(1); opacity: 0.85; }
      50% { transform: scale(1.12); opacity: 1; }
    }
    @keyframes flow-data {
      from { stroke-dashoffset: 24; }
      to { stroke-dashoffset: 0; }
    }
    @keyframes drift-bg {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(60px, -40px); }
    }
    #core-node {
      animation: pulse-core 4s ease-in-out infinite;
      transform-origin: 600px 400px;
    }
    .data-stream {
      animation: flow-data 1.5s linear infinite;
    }
    #bg-glow-1 {
      animation: drift-bg 18s ease-in-out infinite;
    }
    #bg-glow-2 {
      animation: drift-bg 24s ease-in-out infinite reverse;
    }
  `}</style>

  {/* Animated Background Atmosphere */}
  <div id="bg-glow-1" style={{ position: 'absolute', top: -200, left: -200, width: 800, height: 800, borderRadius: 400, background: 'radial-gradient(circle, rgba(40,50,120,0.18) 0%, rgba(0,0,0,0) 70%)' }} />
  <div id="bg-glow-2" style={{ position: 'absolute', top: 300, left: 700, width: 900, height: 900, borderRadius: 450, background: 'radial-gradient(circle, rgba(15,70,140,0.15) 0%, rgba(0,0,0,0) 70%)' }} />

  {/* SVG Canvas for Orbits, Vectors, and the Core */}
  <svg width="1200" height="800" style={{ position: 'absolute', top: 0, left: 0 }}>
    <defs>
      <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="25%" stopColor="#88bbee" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#88bbee" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="vector-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4466aa" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#223355" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* The Work Vectors (Data Flow Lines to Projects) */}
    <g stroke="#223344" strokeWidth="1.5" fill="none" opacity="0.6">
      <path class="data-stream" stroke-dasharray="4, 8" d="M 600 400 L 250 180" />
      <path class="data-stream" stroke-dasharray="4, 8" d="M 600 400 L 950 180" />
      <path class="data-stream" stroke-dasharray="4, 8" d="M 600 400 L 250 620" />
      <path class="data-stream" stroke-dasharray="4, 8" d="M 600 400 L 950 620" />
    </g>

    {/* Orbits and Satellites */}
    {(() => {
      const p = [];
      const langs = github?.languages && github.languages.length > 0 
        ? github.languages.slice(0, 5) 
        : [
            { name: 'TypeScript', percentage: 45, color: '#3178c6' },
            { name: 'JavaScript', percentage: 25, color: '#f1e05a' },
            { name: 'Python', percentage: 15, color: '#3572A5' },
            { name: 'C++', percentage: 10, color: '#f34b7d' },
            { name: 'Rust', percentage: 5, color: '#dea584' }
          ];

      const baseRadius = 140;
      const gap = 45;
      
      // Draw Orbit Rings
      langs.forEach((lang, i) => {
        const r = baseRadius + i * gap;
        p.push(<circle key={`orbit-${i}`} cx="600" cy="400" r={r} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />);
      });

      // Draw Orbiting Nodes (Satellites)
      langs.forEach((lang, i) => {
        const r = baseRadius + i * gap;
        const dur = 20 + (i * 12); // Inner orbits spin faster
        const nodeSize = Math.max(3.5, (lang.percentage / 100) * 22); // Size based on tech dominance
        const color = lang.color || "#ffffff";
        
        p.push(
          <g key={`sat-${i}`}>
            <animateTransform attributeName="transform" type="rotate" from={`0 600 400`} to={`360 600 400`} dur={`${dur}s`} repeatCount="indefinite" />
            <circle cx="600" cy={400 - r} r={nodeSize} fill={color} />
            {/* Outer halo for satellite */}
            <circle cx="600" cy={400 - r} r={nodeSize + 6} fill="none" stroke={color} strokeOpacity="0.25" strokeWidth="1" />
          </g>
        );
      });
      return p;
    })()}

    {/* The Central Core */}
    <g id="core-node">
      <circle cx="600" cy="400" r="120" fill="url(#core-glow)" />
      <circle cx="600" cy="400" r="32" fill="#ffffff" />
    </g>
  </svg>

  {/* Typography Overlays (Clean HTML text mapping to the vectors) */}
  <div style={{ position: 'absolute', top: 140, left: 60, display: 'flex', flexDirection: 'column', width: 250 }}>
    <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.3px' }}>Universal Cognitive Engine</span>
    <span style={{ fontSize: 13, fontWeight: 500, color: '#778899', marginTop: 6 }}>Agent Architecture • Planning</span>
  </div>

  <div style={{ position: 'absolute', top: 140, right: 60, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: 250, textAlign: 'right' }}>
    <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.3px' }}>Graphene Antenna</span>
    <span style={{ fontSize: 13, fontWeight: 500, color: '#778899', marginTop: 6 }}>Hardware • ML Regression</span>
  </div>

  <div style={{ position: 'absolute', top: 600, left: 60, display: 'flex', flexDirection: 'column', width: 250 }}>
    <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.3px' }}>csage</span>
    <span style={{ fontSize: 13, fontWeight: 500, color: '#778899', marginTop: 6 }}>Python • PyPI • Data Processing</span>
  </div>

  <div style={{ position: 'absolute', top: 600, right: 60, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: 250, textAlign: 'right' }}>
    <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.3px' }}>ESP32 Telemetry</span>
    <span style={{ fontSize: 13, fontWeight: 500, color: '#778899', marginTop: 6 }}>UDP • Firmware • Thermal</span>
  </div>

  {/* Identity & Lifetime Metrics */}
  <div style={{ position: 'absolute', top: 40, left: 60, display: 'flex', flexDirection: 'column' }}>
    <span style={{ fontSize: 26, fontWeight: 800, color: '#ffffff', letterSpacing: '-1px' }}>{github?.user?.name?.toUpperCase() || 'HIMA VARA SAGAR'}</span>
    <span style={{ fontSize: 13, fontWeight: 600, color: '#556677', letterSpacing: '2px', marginTop: 4 }}>ELECTRONICS & COMMUNICATION</span>
  </div>

  <div style={{ position: 'absolute', bottom: 40, left: 60, display: 'flex', gap: 48 }}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontSize: 11, fontWeight: 600, color: '#445566', letterSpacing: '1px' }}>LIFETIME COMMITS</span>
      <span style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginTop: 4 }}>{github?.stats?.totalCommits || 1342}</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontSize: 11, fontWeight: 600, color: '#445566', letterSpacing: '1px' }}>REPOSITORIES</span>
      <span style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginTop: 4 }}>{github?.stats?.totalRepos || 25}</span>
    </div>
  </div>

  {/* Language Legend */}
  <div style={{ position: 'absolute', bottom: 40, right: 60, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
    {(() => {
      const langs = github?.languages && github.languages.length > 0 
        ? github.languages.slice(0, 5) 
        : [
            { name: 'TypeScript', percentage: 45, color: '#3178c6' },
            { name: 'JavaScript', percentage: 25, color: '#f1e05a' },
            { name: 'Python', percentage: 15, color: '#3572A5' },
            { name: 'C++', percentage: 10, color: '#f34b7d' },
            { name: 'Rust', percentage: 5, color: '#dea584' }
          ];
      return langs.map((lang, i) => (
        <div key={`legend-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#667788' }}>{lang.name.toUpperCase()}</span>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: lang.color || '#fff' }} />
        </div>
      ));
    })()}
  </div>

</div>
```
