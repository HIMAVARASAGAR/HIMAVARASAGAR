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
      {/* ── Top Header ── */}
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
              fontSize: "11px",
              color: "#50627a",
              letterSpacing: "0.04em",
            }}
          >
            Hyderabad, India
          </span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#00f0ff",
              letterSpacing: "0.08em",
            }}
          >
            04
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

      {/* ── Identity & Links ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          paddingBottom: "6px",
        }}
      >
        {/* Left: Identity */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
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
            Hima Vara Sagar
          </span>
          <span
            style={{
              fontSize: "11px",
              color: "#50627a",
            }}
          >
            Electronics & Communication Engineering
          </span>
        </div>

        {/* Right: Network links */}
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
              color: "#8092a8",
              letterSpacing: "0.02em",
            }}
          >
            github.com/HIMAVARASAGAR
          </span>
          <span style={{ fontSize: "11px", color: "#1a2332" }}>·</span>
          <span
            style={{
              fontSize: "11px",
              color: "#8092a8",
              letterSpacing: "0.02em",
            }}
          >
            linkedin.com/in/himavarasagar
          </span>
        </div>
      </div>
    </div>
  );
}
