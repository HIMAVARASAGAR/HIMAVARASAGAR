export function Hero() {
  return (
    <div
      style={{
        position: "relative",
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 64px",
        background: "#0a0c0f",
        color: "#f4f2eb",
        fontFamily: "Inter",
        overflow: "hidden",
      }}
    >
      {/* Top row */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 14,
          color: "#8b949e",
          letterSpacing: "0.15em",
          fontWeight: 600,
        }}
      >
        <div>HIMA VARA SAGAR</div>
        <div style={{ color: "#6e7681", fontWeight: 400 }}>ECE · INDIA</div>
      </div>

      {/* Main hero typography */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "440px",
        }}
      >
        <div
          style={{
            fontSize: 108,
            fontWeight: 600,
            letterSpacing: "-4px",
            lineHeight: "1.0",
            color: "#f4f2eb",
          }}
        >
          HIMA
        </div>

        <div
          style={{
            fontSize: 108,
            fontWeight: 600,
            letterSpacing: "-4px",
            lineHeight: "1.0",
            color: "#f4f2eb",
            marginTop: "4px",
          }}
        >
          VARA SAGAR
        </div>
      </div>

      {/* Bottom metadata */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 13,
          color: "#6e7681",
          fontFamily: "monospace",
          letterSpacing: "0.08em",
        }}
      >
        <div>github.com/HIMAVARASAGAR</div>
        <div>01</div>
      </div>
    </div>
  );
}
