```aura width=1000 height=360
<div style={{ display: 'flex', width: 1000, height: 360, background: '#0d1117', color: '#e6edf3', fontFamily: 'Inter', position: 'relative', overflow: 'hidden' }}>
  <style>{`
    @keyframes float1 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(30px, -30px) scale(1.1); }
    }
    @keyframes float2 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-40px, 20px) scale(1.05); }
    }
  `}</style>

  {/* Deep Ambient Gradients matching GitHub Dark Mode */}
  <div style={{ position: 'absolute', top: -150, left: -100, width: 600, height: 600, background: 'radial-gradient(circle, rgba(56,139,253,0.12) 0%, rgba(13,17,23,0) 70%)', animation: 'float1 12s ease-in-out infinite' }} />
  <div style={{ position: 'absolute', bottom: -200, right: -150, width: 700, height: 700, background: 'radial-gradient(circle, rgba(163,113,247,0.10) 0%, rgba(13,17,23,0) 70%)', animation: 'float2 16s ease-in-out infinite' }} />

  <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: '50px', zIndex: 10, justifyContent: 'space-between' }}>
    
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', fontSize: 52, fontWeight: 800, letterSpacing: '-1.5px', color: '#ffffff' }}>
        HIMA VARA SAGAR
      </div>
      <div style={{ display: 'flex', fontSize: 14, color: '#8b949e', fontWeight: 600, letterSpacing: '2px', marginTop: 8 }}>
        ELECTRONICS & COMMUNICATION
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Dynamic Languages Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 12 }}>
        <div style={{ display: 'flex', width: '100%', height: 6, borderRadius: 3, background: '#21262d', overflow: 'hidden' }}>
          {(() => {
            const langs = github?.languages && github.languages.length > 0 ? github.languages.slice(0, 5) : [{ percentage: 60, color: '#3178c6' }, { percentage: 40, color: '#f1e05a' }];
            return langs.map((l, i) => (
              <div key={i} style={{ display: 'flex', width: `${l.percentage}%`, height: '100%', background: l.color || '#8b949e' }} />
            ));
          })()}
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          {(() => {
            const langs = github?.languages && github.languages.length > 0 ? github.languages.slice(0, 5) : [{ name: 'TypeScript', color: '#3178c6' }, { name: 'JavaScript', color: '#f1e05a' }];
            return langs.map((l, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ display: 'flex', width: 8, height: 8, borderRadius: 4, background: l.color || '#8b949e' }} />
                <div style={{ display: 'flex', fontSize: 12, color: '#8b949e', fontWeight: 600 }}>{l.name}</div>
              </div>
            ));
          })()}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 60, marginTop: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 11, color: '#8b949e', fontWeight: 700, letterSpacing: '1px' }}>TOTAL COMMITS</div>
          <div style={{ display: 'flex', fontSize: 26, color: '#c9d1d9', fontWeight: 700, marginTop: 6 }}>{github?.stats?.totalCommits || 1337}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 11, color: '#8b949e', fontWeight: 700, letterSpacing: '1px' }}>REPOSITORIES</div>
          <div style={{ display: 'flex', fontSize: 26, color: '#c9d1d9', fontWeight: 700, marginTop: 6 }}>{github?.stats?.totalRepos || 25}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 11, color: '#8b949e', fontWeight: 700, letterSpacing: '1px' }}>STARGAZERS</div>
          <div style={{ display: 'flex', fontSize: 26, color: '#c9d1d9', fontWeight: 700, marginTop: 6 }}>{github?.stats?.totalStars || 0}</div>
        </div>
      </div>
    </div>
  </div>
</div>
```
