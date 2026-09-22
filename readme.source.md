I'm an electronics and communication engineering graduate based in Hyderabad, India. I work on hardware projects, agent systems, and developer tools.

```aura width=1200 height=630
<div
  style={{
    position: "relative",
    width: "1200px",
    height: "630px",
    display: "flex",
    flexDirection: "column",
    background: "#f2f0eb",
    color: "#111111",
    fontFamily: "Inter",
    padding: "24px",
    boxSizing: "border-box"
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      border: "4px solid #111111",
      justifyContent: "space-between",
      boxSizing: "border-box"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 32px",
        borderBottom: "4px solid #111111",
      }}
    >
      <span style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.5px" }}>ARCHIVE_{new Date().getFullYear()}</span>
      <span style={{ fontSize: "20px", fontWeight: 600, color: "#d9331a" }}>NO. 001</span>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 32px",
        flexGrow: 1,
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            fontSize: "170px",
            fontWeight: 600,
            letterSpacing: "-9px",
            lineHeight: "0.8",
            color: "#111111",
          }}
        >
          {github?.user?.name ? github.user.name.split(' ').slice(0, 2).join(' ').toUpperCase() : 'HIMA VARA'}
        </div>
        <div
          style={{
            fontSize: "170px",
            fontWeight: 600,
            letterSpacing: "-9px",
            lineHeight: "0.8",
            color: "#111111",
            display: "flex",
            alignItems: "flex-end",
            marginTop: "12px",
          }}
        >
          {github?.user?.name ? github.user.name.split(' ').slice(2).join(' ').toUpperCase() : 'SAGAR'}<span style={{ color: "#d9331a", fontSize: "170px" }}>.</span>
        </div>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        borderTop: "4px solid #111111",
        height: "120px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 32px",
          width: "30%",
          borderRight: "4px solid #111111",
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: 600, color: "#777" }}>DISCIPLINE</span>
        <span style={{ fontSize: "18px", fontWeight: 600, marginTop: "8px", letterSpacing: "-0.5px" }}>
          ELECTRONICS &amp; COMMUNICATION
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 32px",
          width: "30%",
          borderRight: "4px solid #111111",
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: 600, color: "#777" }}>CORE COMPETENCY</span>
        <span style={{ fontSize: "18px", fontWeight: 600, marginTop: "8px", letterSpacing: "-0.5px" }}>
          AGENT ARCHITECTURES // THz MIMO
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 32px",
          width: "40%",
          background: "#111111",
          color: "#f2f0eb",
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: 600, color: "#888" }}>LOCATION // COORDINATES</span>
        <span style={{ fontSize: "18px", fontWeight: 600, marginTop: "8px", letterSpacing: "-0.5px" }}>
          {github?.user?.location?.toUpperCase() || 'HYDERABAD, INDIA'}
        </span>
      </div>
    </div>
  </div>
</div>
```

```aura width=1200 height=440
<div
  style={{
    position: "relative",
    width: "1200px",
    height: "440px",
    display: "flex",
    flexDirection: "column",
    background: "#f2f0eb",
    color: "#111111",
    fontFamily: "Inter",
    padding: "24px",
    paddingTop: "0",
    boxSizing: "border-box"
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      border: "4px solid #111111",
      borderTop: "none",
      boxSizing: "border-box"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        borderBottom: "4px solid #111111",
        background: "#111111",
        color: "#f2f0eb",
      }}
    >
      <span style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.5px" }}>SELECTED WORKS</span>
      <span style={{ fontSize: "20px", fontWeight: 600 }}>02</span>
    </div>

    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <div style={{ display: "flex", flexGrow: 1, borderBottom: "4px solid #111111" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "50%", borderRight: "4px solid #111111", padding: "32px", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{ fontSize: "32px", fontWeight: 600, letterSpacing: "-1px" }}>Universal Cognitive Engine</span>
            <span style={{ fontSize: "24px", fontWeight: 600, color: "#d9331a" }}>01</span>
          </div>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "#555" }}>Google ADK / Multi-Agent / Planning / Orchestration</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "50%", padding: "32px", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{ fontSize: "32px", fontWeight: 600, letterSpacing: "-1px" }}>Graphene THz MIMO Antenna</span>
            <span style={{ fontSize: "24px", fontWeight: 600, color: "#d9331a" }}>02</span>
          </div>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "#555" }}>2-Element MIMO / ML Regression / Resonance Tuning</span>
        </div>
      </div>
      <div style={{ display: "flex", flexGrow: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", width: "50%", borderRight: "4px solid #111111", padding: "32px", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{ fontSize: "32px", fontWeight: 600, letterSpacing: "-1px" }}>csage</span>
            <span style={{ fontSize: "24px", fontWeight: 600, color: "#d9331a" }}>03</span>
          </div>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "#555" }}>Python / PyPI / Data Processing</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "50%", padding: "32px", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{ fontSize: "32px", fontWeight: 600, letterSpacing: "-1px" }}>ESP32 Telemetry Framework</span>
            <span style={{ fontSize: "24px", fontWeight: 600, color: "#d9331a" }}>04</span>
          </div>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "#555" }}>UDP / Python / n8n / Thermal Testing</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

```aura width=1200 height=400
<div
  style={{
    position: "relative",
    width: "1200px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    background: "#f2f0eb",
    color: "#111111",
    fontFamily: "Inter",
    padding: "24px",
    paddingTop: "0",
    boxSizing: "border-box"
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      border: "4px solid #111111",
      borderTop: "none",
      boxSizing: "border-box"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        borderBottom: "4px solid #111111",
      }}
    >
      <span style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.5px" }}>STATISTICAL SCULPTURE</span>
      <span style={{ fontSize: "20px", fontWeight: 600 }}>03</span>
    </div>

    <div style={{ display: 'flex', flexGrow: 1, padding: '32px', position: 'relative' }}>
      {(() => {
        const p = [];
        const langs = github?.languages || [];
        const maxH = 200;
        const barW = 80;
        const spacing = 40;
        
        p.push(<svg width="600" height="280" style={{ position: 'absolute', top: 32, left: 32 }}>
          <g id="stats-sculpture">
            {langs.slice(0, 4).map((lang, i) => {
              const h = Math.max(10, (lang.percentage / 100) * maxH);
              const sx = 60 + i * (barW + spacing);
              const sy = 240;
              
              const cTop = lang.color || "#d9331a";
              const cLeft = "#111111";
              const cRight = "#333333";
              const stroke = "#111111";
              
              const t1 = `${sx},${sy - h}`;
              const t2 = `${sx + barW/2},${sy - h + barW/4}`;
              const t3 = `${sx},${sy - h + barW/2}`;
              const t4 = `${sx - barW/2},${sy - h + barW/4}`;
              
              const l1 = `${sx - barW/2},${sy - h + barW/4}`;
              const l2 = `${sx},${sy - h + barW/2}`;
              const l3 = `${sx},${sy + barW/2}`;
              const l4 = `${sx - barW/2},${sy + barW/4}`;

              const r1 = `${sx},${sy - h + barW/2}`;
              const r2 = `${sx + barW/2},${sy - h + barW/4}`;
              const r3 = `${sx + barW/2},${sy + barW/4}`;
              const r4 = `${sx},${sy + barW/2}`;
              
              return (
                <g key={i}>
                  <polygon points={`${l1} ${l2} ${l3} ${l4}`} fill={cLeft} stroke={stroke} strokeWidth="2" />
                  <polygon points={`${r1} ${r2} ${r3} ${r4}`} fill={cRight} stroke={stroke} strokeWidth="2" />
                  <polygon points={`${t1} ${t2} ${t3} ${t4}`} fill={cTop} stroke={stroke} strokeWidth="2" />
                </g>
              );
            })}
          </g>
        </svg>);

        // Render HTML text overlays
        langs.slice(0, 4).map((lang, i) => {
          const sx = 60 + i * (barW + spacing);
          const sy = 240;
          p.push(
            <div key={`text-${i}`} style={{ position: 'absolute', top: 32 + sy + barW + 10, left: 32 + sx - 50, width: 100, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#111111" }}>{lang.name.toUpperCase()}</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#d9331a" }}>{lang.percentage.toFixed(1)}%</span>
            </div>
          );
        });
        
        return p;
      })()}

      {/* Global Stats Matrix rendered as HTML */}
      <div style={{ position: 'absolute', top: 72, left: 650, display: 'flex', flexDirection: 'column', width: "400px" }}>
        <span style={{ fontSize: "24px", fontWeight: 600, color: "#111111", letterSpacing: "-1px" }}>LIFETIME METRICS</span>
        <div style={{ width: "100%", height: "4px", background: "#111111", marginTop: "12px", marginBottom: "24px" }} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "16px" }}>
          <span style={{ fontSize: "16px", fontWeight: 600, color: "#777" }}>COMMITS</span>
          <span style={{ fontSize: "32px", fontWeight: 600, color: "#d9331a" }}>{github?.stats?.totalCommits || 0}</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "16px" }}>
          <span style={{ fontSize: "16px", fontWeight: 600, color: "#777" }}>REPOSITORIES</span>
          <span style={{ fontSize: "32px", fontWeight: 600, color: "#111111" }}>{github?.stats?.totalRepos || 0}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: "16px", fontWeight: 600, color: "#777" }}>STARS EARNED</span>
          <span style={{ fontSize: "32px", fontWeight: 600, color: "#111111" }}>{github?.stats?.totalStars || 0}</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

```aura width=1200 height=240
<div
  style={{
    position: "relative",
    width: "1200px",
    height: "240px",
    display: "flex",
    flexDirection: "column",
    background: "#f2f0eb",
    color: "#111111",
    fontFamily: "Inter",
    padding: "24px",
    paddingTop: "0",
    boxSizing: "border-box"
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      border: "4px solid #111111",
      borderTop: "none",
      justifyContent: "space-between",
      boxSizing: "border-box"
    }}
  >
    <div style={{ display: "flex", padding: "32px", justifyContent: "space-between", alignItems: "flex-start", flexGrow: 1 }}>
       <div style={{ display: "flex", flexDirection: "column" }}>
         <span style={{ fontSize: "64px", fontWeight: 600, letterSpacing: "-3px", lineHeight: "1" }}>END OF FILE.</span>
       </div>
       <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>
         <span style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.5px" }}>GITHUB.COM/{github?.user?.login?.toUpperCase() || 'HIMAVARASAGAR'}</span>
         <span style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.5px" }}>LINKEDIN.COM/IN/HIMAVARASAGAR</span>
       </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        borderTop: "4px solid #111111",
        background: "#d9331a",
        color: "#f2f0eb",
      }}
    >
      <span style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "1px" }}>SYSTEM STATUS: ONLINE</span>
      <span style={{ fontSize: "16px", fontWeight: 600 }}>04</span>
    </div>
  </div>
</div>
```
