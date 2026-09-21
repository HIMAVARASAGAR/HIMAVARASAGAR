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
        padding: "20px",
        background: "#08090c",
        color: "#f4f2eb",
        fontFamily: "Inter",
        overflow: "hidden",
      }}
    >
      {/* ── Top Masthead Bar ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "52px",
          padding: "0 24px",
          fontSize: "11px",
          color: "#8b949e",
          letterSpacing: "0.14em",
          fontWeight: 600,
        }}
      >
        <span>HIMA VARA SAGAR</span>
        <span style={{ color: "#6e7681", fontWeight: 400 }}>ELECTRONICS &amp; COMMUNICATION</span>
        <span style={{ color: "#6e7681", fontWeight: 400 }}>HYDERABAD, IN</span>
      </div>

      {/* ── Central Monumental Typographic Block ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "388px",
          padding: "0 36px",
        }}
      >
        <div
          style={{
            fontSize: "96px",
            fontWeight: 600,
            letterSpacing: "-4px",
            lineHeight: "0.95",
            color: "#f4f2eb",
          }}
        >
          HIMA
        </div>
        <div
          style={{
            fontSize: "96px",
            fontWeight: 600,
            letterSpacing: "-4px",
            lineHeight: "0.95",
            color: "#f4f2eb",
            marginTop: "6px",
          }}
        >
          VARA SAGAR
        </div>
      </div>

      {/* ── Lower 4-Column Specification Ledger ── */}
      <div
        style={{
          display: "flex",
          height: "150px",
          width: "100%",
        }}
      >
        {/* Col 1 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "280px",
            padding: "20px 24px",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "10px", color: "#6e7681", letterSpacing: "0.10em" }}>01 / DISCIPLINE</span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#f4f2eb", letterSpacing: "-0.2px" }}>
            Electronics &amp; Communication
          </span>
          <span style={{ fontSize: "11px", color: "#6e7681", fontFamily: "monospace" }}>ECE Graduate</span>
        </div>

        {/* Col 2 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            padding: "20px 24px",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "10px", color: "#6e7681", letterSpacing: "0.10em" }}>02 / PRIMARY FOCUS</span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#f4f2eb", letterSpacing: "-0.2px" }}>
            Hardware &amp; Systems Software
          </span>
          <span style={{ fontSize: "11px", color: "#6e7681", fontFamily: "monospace" }}>THz MIMO · Agent DAGs</span>
        </div>

        {/* Col 3 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            padding: "20px 24px",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "10px", color: "#6e7681", letterSpacing: "0.10em" }}>03 / CORE TOOLING</span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#f4f2eb", letterSpacing: "-0.2px" }}>
            Google ADK · Python · C++
          </span>
          <span style={{ fontSize: "11px", color: "#6e7681", fontFamily: "monospace" }}>CST · ESP32 · GLSL</span>
        </div>

        {/* Col 4 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "280px",
            padding: "20px 24px",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "10px", color: "#6e7681", letterSpacing: "0.10em" }}>04 / COORDINATES</span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#f4f2eb", letterSpacing: "-0.2px" }}>
            17.3850° N, 78.4867° E
          </span>
          <span style={{ fontSize: "11px", color: "#6e7681", fontFamily: "monospace" }}>github.com/HIMAVARASAGAR</span>
        </div>
      </div>
    </div>
  );
}
