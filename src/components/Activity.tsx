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
        backgroundColor: "#0c0e12",
        color: "#f2f2f2",
        fontFamily: "Inter",
        overflow: "hidden",
        border: "1px solid #1d222a",
        borderRadius: "6px",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: "20px", alignItems: "baseline" }}>
          <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 11, letterSpacing: "0.20em" }}>
            ACTIVITY
          </span>
          <span style={{ color: "#6e7681", fontSize: 11, letterSpacing: "0.02em" }}>
            {total} contributions in the last year
          </span>
        </div>
        <div style={{ color: "#ff5500", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em" }}>
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
          color: "#6e7681",
        }}
      >
        <div>52 weeks</div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "9px", height: "9px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px", display: "flex" }} />
            <span>less</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "9px", height: "9px", background: "rgba(240,244,250,0.45)", borderRadius: "2px", display: "flex" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "9px", height: "9px", background: "#f0f4fa", borderRadius: "2px", display: "flex" }} />
            <span style={{ color: "#f0f4fa" }}>more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
