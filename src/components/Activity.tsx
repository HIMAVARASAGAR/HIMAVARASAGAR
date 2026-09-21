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
        padding: "36px 64px 32px 64px",
        background: "#080808",
        color: "#f2f2f2",
        fontFamily: "Inter",
        overflow: "hidden",
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
        <div style={{ display: "flex", gap: "24px", alignItems: "baseline" }}>
          <span style={{ color: "#888", fontWeight: 600 }}>ACTIVITY</span>
          <span style={{ color: "#444", fontSize: 11, letterSpacing: "1px" }}>
            {total} CONTRIBUTIONS / LAST 365 DAYS
          </span>
        </div>
        <div>03</div>
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
          fontSize: 11,
          color: "#444",
        }}
      >
        <div>52 WEEKS</div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "9px", height: "9px", background: "rgba(255,255,255,0.03)", borderRadius: "2px", display: "flex" }} />
            <span>0</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "9px", height: "9px", background: "rgba(255,255,255,0.30)", borderRadius: "2px", display: "flex" }} />
            <span>low</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "9px", height: "9px", background: "rgba(255,255,255,0.95)", borderRadius: "2px", display: "flex" }} />
            <span>high</span>
          </div>
        </div>
      </div>
    </div>
  );
}
