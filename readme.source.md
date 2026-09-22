```aura width=1200 height=480
<div style={{ display: 'flex', width: 1200, height: 480, background: '#ECEBE8', color: '#0A0A0A', fontFamily: 'Inter', overflow: 'hidden', position: 'relative' }}>
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes pulse-block {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .grid-line {
      stroke: #0A0A0A;
      stroke-width: 3;
    }
  `}</style>
  
  {/* Severe Structural Grid */}
  <svg width="1200" height="480" style={{ position: 'absolute', top: 0, left: 0 }}>
    {/* Horizontal */}
    <path class="grid-line" d="M 0 120 L 1200 120" />
    <path class="grid-line" d="M 0 360 L 1200 360" />
    {/* Vertical */}
    <path class="grid-line" d="M 360 120 L 360 480" />
    <path class="grid-line" d="M 840 120 L 840 360" />
  </svg>

  {/* Top Section: Infinite Data Marquee */}
  <div style={{ position: 'absolute', top: 0, left: 0, width: 2400, height: 120, display: 'flex', alignItems: 'center', background: '#0A0A0A', color: '#ECEBE8' }}>
    <div style={{ display: 'flex', animation: 'marquee 25s linear infinite', whiteSpace: 'nowrap' }}>
      {(() => {
        const langs = github?.languages && github.languages.length > 0 ? github.languages : [{name: 'TYPESCRIPT', percentage: 40}, {name: 'PYTHON', percentage: 30}];
        const str = langs.map(l => `${l.name.toUpperCase()} ${(l.percentage).toFixed(1)}%`).join('   —   ');
        return <span style={{ fontSize: 64, fontWeight: 900, letterSpacing: '-2px', paddingLeft: 60 }}>{str}   —   {str}   —   {str}   —   {str}</span>
      })()}
    </div>
  </div>

  {/* Middle Left: Identity */}
  <div style={{ position: 'absolute', top: 120, left: 0, width: 360, height: 240, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px' }}>
    <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '2px', marginBottom: 12, color: '#666' }}>ARCHIVE ID</span>
    <div style={{ display: 'flex', flexDirection: 'column', fontSize: 64, fontWeight: 900, letterSpacing: '-4px', lineHeight: 0.85 }}>
      <span>HIMA</span>
      <span>VARA</span>
      <span>SAGAR</span>
    </div>
  </div>

  {/* Middle Center: Brutalist Data Architecture */}
  <div style={{ position: 'absolute', top: 120, left: 360, width: 480, height: 240, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '0 40px' }}>
    <svg width="400" height="240" style={{ transform: 'rotate(180deg)' }}>
      {(() => {
        const langs = github?.languages && github.languages.length > 0 ? github.languages : [{percentage: 50}, {percentage: 30}, {percentage: 20}];
        let currentX = 0;
        return langs.slice(0, 8).map((l, i) => {
          const width = Math.max(4, (l.percentage / 100) * 400);
          const rect = <rect key={i} x={currentX} y="0" width={width > 2 ? width - 2 : width} height={240} fill={l.color || "#0A0A0A"} />;
          currentX += width;
          return rect;
        });
      })()}
    </svg>
  </div>

  {/* Middle Right: Lifetime Metrics */}
  <div style={{ position: 'absolute', top: 120, left: 840, width: 360, height: 240, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 40 }}>
      <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '2px', color: '#666' }}>LIFETIME COMMITS</span>
      <span style={{ fontSize: 72, fontWeight: 900, letterSpacing: '-5px', lineHeight: 1 }}>{github?.stats?.totalCommits || 1337}</span>
    </div>
  </div>

  {/* Bottom Row */}
  <div style={{ position: 'absolute', top: 360, left: 0, width: 1200, height: 120, display: 'flex' }}>
    <div style={{ width: 360, display: 'flex', alignItems: 'center', padding: '0 40px', borderRight: '3px solid #0A0A0A' }}>
      <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '1px' }}>HYDERABAD, IN</span>
    </div>
    <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', padding: '0 40px', borderRight: '3px solid #0A0A0A' }}>
      <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '1px' }}>ELECTRONICS & COMMUNICATION</span>
    </div>
    <div style={{ width: 240, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px' }}>
      <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '1px' }}>SYNC</span>
      <div style={{ width: 24, height: 24, background: '#D9331A', animation: 'pulse-block 2s infinite step-end' }} />
    </div>
  </div>
</div>
```
