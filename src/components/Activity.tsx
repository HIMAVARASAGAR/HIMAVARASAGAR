export function Activity() {
  return (
    <div
      style={{
        position: "relative",
        width: "1200px",
        height: "320px",
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
          <span style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.5px" }}>ISOMETRIC DATA SCULPTURE</span>
          <span style={{ fontSize: "20px", fontWeight: 600 }}>03</span>
        </div>

        {/* Space for the injected ActivityField SVG layer */}
        <div style={{ flexGrow: 1, display: "flex", position: "relative" }}>
           {/* The ActivityField SVG gets injected into this #f2f0eb background element */}
           <div style={{ width: "100%", height: "100%", background: "#f2f0eb" }} />
        </div>
      </div>
    </div>
  );
}
