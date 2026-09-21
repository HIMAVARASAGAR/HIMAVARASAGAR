export function Closing() {
  return (
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
        }}
      >
        <div style={{ display: "flex", padding: "32px", justifyContent: "space-between", alignItems: "flex-start", flexGrow: 1 }}>
           <div style={{ display: "flex", flexDirection: "column" }}>
             <span style={{ fontSize: "64px", fontWeight: 600, letterSpacing: "-3px", lineHeight: "1" }}>END OF FILE.</span>
           </div>
           <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>
             <span style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.5px" }}>GITHUB.COM/HIMAVARASAGAR</span>
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
  );
}
