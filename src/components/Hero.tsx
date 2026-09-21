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
        padding: "64px",
        background: "#080808",
        color: "#f2f2f2",
        fontFamily: "Inter",
        overflow: "hidden",
      }}
    >
      {/* Top row: Name & ECE metadata */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 18,
          color: "#777",
          letterSpacing: "1px",
        }}
      >
        <div>HIMA VARA SAGAR</div>
        <div>ECE / INDIA</div>
      </div>

      {/* Main hero typography */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 112,
            fontWeight: 600,
            letterSpacing: "-5px",
            lineHeight: "1.02",
          }}
        >
          HIMA
        </div>

        <div
          style={{
            fontSize: 112,
            fontWeight: 600,
            letterSpacing: "-5px",
            lineHeight: "1.02",
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
          fontSize: 16,
          color: "#666",
        }}
      >
        <div>github.com/HIMAVARASAGAR</div>
        <div>01</div>
      </div>
    </div>
  );
}
