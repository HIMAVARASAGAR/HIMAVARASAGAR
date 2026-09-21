export function Closing() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        height: "240px",
        backgroundColor: "#080808",
        color: "#f2f2f2",
        fontFamily: "Inter",
        padding: "36px 64px 32px 64px",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      {/* ── Top Framing Rule & Coordinates ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              fontFamily: "monospace",
              color: "#3a3a3a",
              letterSpacing: "0.14em",
            }}
          >
            SYS_REF // HYDERABAD, IN [17.3850° N, 78.4867° E]
          </span>
          <span
            style={{
              fontSize: "10px",
              fontFamily: "monospace",
              color: "#3a3a3a",
              letterSpacing: "0.14em",
            }}
          >
            END_TRANSMISSION // 04
          </span>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "1px",
            backgroundColor: "#1c1c1c",
          }}
        />
      </div>

      {/* ── Editorial Identity Block ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          paddingBottom: "8px",
        }}
      >
        {/* Left: Identity Specification */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#e0e0e0",
              letterSpacing: "-0.2px",
            }}
          >
            HIMA VARA SAGAR
          </span>
          <span
            style={{
              fontSize: "10px",
              color: "#555",
              letterSpacing: "0.06em",
            }}
          >
            Electronics & Communication Engineer · Systems & AI Developer
          </span>
        </div>

        {/* Right: Network Signatures */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontFamily: "monospace",
              color: "#666",
              letterSpacing: "0.04em",
            }}
          >
            github.com/HIMAVARASAGAR
          </span>
          <span style={{ fontSize: "11px", color: "#222" }}>/</span>
          <span
            style={{
              fontSize: "11px",
              fontFamily: "monospace",
              color: "#666",
              letterSpacing: "0.04em",
            }}
          >
            linkedin.com/in/himavarasagar
          </span>
        </div>
      </div>
    </div>
  );
}
