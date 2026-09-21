export function Closing() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        height: "240px",
        backgroundColor: "#070a0f",
        color: "#f2f2f2",
        fontFamily: "Inter",
        padding: "32px 56px 28px 56px",
        position: "relative",
        justifyContent: "space-between",
        border: "1px solid #1a2332",
        borderRadius: "6px",
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
              color: "#50627a",
              letterSpacing: "0.14em",
            }}
          >
            SYS_REF // HYDERABAD, IN [17.3850° N, 78.4867° E]
          </span>
          <span
            style={{
              fontSize: "10px",
              fontFamily: "monospace",
              color: "#00f0ff",
              letterSpacing: "0.14em",
            }}
          >
            04 // END TRANSMISSION
          </span>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "1px",
            backgroundColor: "#16202c",
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
          paddingBottom: "6px",
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
              fontSize: "16px",
              fontWeight: 600,
              color: "#e2f9ff",
              letterSpacing: "-0.2px",
            }}
          >
            HIMA VARA SAGAR
          </span>
          <span
            style={{
              fontSize: "10px",
              color: "#50627a",
              letterSpacing: "0.06em",
            }}
          >
            Electronics & Communication Engineer · High-Frequency RF & Systems
          </span>
        </div>

        {/* Right: Network Signatures */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontFamily: "monospace",
              color: "#8092a8",
              letterSpacing: "0.04em",
            }}
          >
            github.com/HIMAVARASAGAR
          </span>
          <span style={{ fontSize: "11px", color: "#1a2332" }}>/</span>
          <span
            style={{
              fontSize: "11px",
              fontFamily: "monospace",
              color: "#8092a8",
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
