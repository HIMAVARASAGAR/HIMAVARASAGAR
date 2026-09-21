export function Projects() {
  return (
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
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          border: "4px solid #111111",
          borderTop: "none", // Connects seamlessly from previous block if placed together, or just stands alone cleanly.
        }}
      >
        {/* Header Ribbon */}
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

        {/* 2x2 Project Grid */}
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          {/* Row 1 */}
          <div style={{ display: "flex", flexGrow: 1, borderBottom: "4px solid #111111" }}>
            {/* Proj 1 */}
            <div style={{ display: "flex", flexDirection: "column", width: "50%", borderRight: "4px solid #111111", padding: "32px", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: "32px", fontWeight: 600, letterSpacing: "-1px" }}>Universal Cognitive Engine</span>
                <span style={{ fontSize: "24px", fontWeight: 600, color: "#d9331a" }}>01</span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: 500, color: "#555" }}>Google ADK / Multi-Agent / Planning / Orchestration</span>
            </div>
            {/* Proj 2 */}
            <div style={{ display: "flex", flexDirection: "column", width: "50%", padding: "32px", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: "32px", fontWeight: 600, letterSpacing: "-1px" }}>Graphene THz MIMO Antenna</span>
                <span style={{ fontSize: "24px", fontWeight: 600, color: "#d9331a" }}>02</span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: 500, color: "#555" }}>2-Element MIMO / ML Regression / Resonance Tuning</span>
            </div>
          </div>
          {/* Row 2 */}
          <div style={{ display: "flex", flexGrow: 1 }}>
            {/* Proj 3 */}
            <div style={{ display: "flex", flexDirection: "column", width: "50%", borderRight: "4px solid #111111", padding: "32px", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: "32px", fontWeight: 600, letterSpacing: "-1px" }}>csage</span>
                <span style={{ fontSize: "24px", fontWeight: 600, color: "#d9331a" }}>03</span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: 500, color: "#555" }}>Python / PyPI / Data Processing</span>
            </div>
            {/* Proj 4 */}
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
  );
}
