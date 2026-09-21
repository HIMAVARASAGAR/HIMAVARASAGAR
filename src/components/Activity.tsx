import { getContributionData } from "../visuals/ActivityField.js";

export function Activity() {
  const data = getContributionData();
  const total = data.total.lastYear;

  return (
    <div
      style={{
        position: "relative",
        width: "1200px",
        height: "320px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "32px 56px 28px 56px",
        backgroundColor: "#070a0f",
        color: "#f2f2f2",
        fontFamily: "Inter",
        overflow: "hidden",
        border: "1px solid #1a2332",
        borderRadius: "6px",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          fontSize: 12,
          letterSpacing: "2px",
          color: "#666",
        }}
      >
        <div style={{ display: "flex", gap: "20px", alignItems: "baseline" }}>
          <span style={{ color: "#e2f9ff", fontWeight: 600, fontSize: 11, letterSpacing: "0.22em" }}>
            ACTIVITY SPECTROGRAM
          </span>
          <span style={{ color: "#00f0ff", fontSize: 10, fontFamily: "monospace", letterSpacing: "1px" }}>
            {total} CONTRIBUTIONS / LAST 365 DAYS
          </span>
        </div>
        <div style={{ color: "#00f0ff", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em" }}>
          03
        </div>
      </div>

      {/* Grid placeholder — geometry is injected into SVG DOM at build time */}
      <div
        style={{
          display: "flex",
          height: "140px",
          width: "100%",
        }}
      />

      {/* Footer / Legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 10,
          color: "#50627a",
          fontFamily: "monospace",
        }}
      >
        <div>52 WEEKS // CHRONOLOGICAL SEQUENCE</div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "9px", height: "9px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "2px", display: "flex" }} />
            <span>0</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "9px", height: "9px", background: "rgba(255,255,255,0.35)", borderRadius: "2px", display: "flex" }} />
            <span>low</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "9px", height: "9px", background: "#00f0ff", borderRadius: "2px", display: "flex" }} />
            <span style={{ color: "#00f0ff" }}>active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
