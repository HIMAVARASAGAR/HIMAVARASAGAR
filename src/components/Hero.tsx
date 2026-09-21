export function Hero() {
  return (
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
      }}
    >
      {/* Inner Structural Frame */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          border: "4px solid #111111",
          justifyContent: "space-between",
        }}
      >
        {/* Header Ribbon */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 32px",
            borderBottom: "4px solid #111111",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.5px" }}>ARCHIVE_2026</span>
          <span style={{ fontSize: "20px", fontWeight: 600, color: "#d9331a" }}>NO. 001</span>
        </div>

        {/* Central Typographic Monument */}
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
          {/* Big Abstract Background Number */}
          <div
            style={{
              position: "absolute",
              right: "-20px",
              top: "-80px",
              fontSize: "600px",
              fontWeight: 600,
              color: "#e8e5dc",
              letterSpacing: "-20px",
              lineHeight: 1,
              zIndex: 0,
            }}
          >
            H
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
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
              HIMA VARA
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
              SAGAR<span style={{ color: "#d9331a", fontSize: "170px" }}>.</span>
            </div>
          </div>
        </div>

        {/* Lower Info Matrix */}
        <div
          style={{
            display: "flex",
            borderTop: "4px solid #111111",
            height: "120px",
          }}
        >
          {/* Col 1 */}
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

          {/* Col 2 */}
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

          {/* Col 3 */}
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
              HYDERABAD, INDIA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
