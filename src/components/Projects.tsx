export function Projects() {
  const repos = [
    {
      id: "01",
      domain: "SYSTEM // ARCHITECTURE",
      name: "universal-cognitive-engine",
      scope: "Google ADK · Multi-Agent Orchestration · Reasoning Subsystems",
      telemetry: "KERNEL: ACTIVE // TARGET: MULTI-AGENT",
    },
    {
      id: "02",
      domain: "HARDWARE // ELECTROMAGNETICS",
      name: "graphene-thz-mimo",
      scope: "2-Element MIMO Array · ML Regression Tuning · THz Band",
      telemetry: "RESONANCE: TUNED // ARRAY: 2-PORT",
    },
    {
      id: "03",
      domain: "PACKAGE // RUNTIME",
      name: "csage",
      scope: "Public Python Engine · PyPI Distribution · Standalone Core",
      telemetry: "REGISTRY: PYPI // RUNTIME: PYTHON 3.x",
    },
    {
      id: "04",
      domain: "TELEMETRY // PIPELINES",
      name: "esp32-telemetry",
      scope: "UDP Stream Pipeline · n8n Automation · Thermal Testing",
      telemetry: "TRANSPORT: UDP // PIPELINE: N8N LIVE",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        height: "520px",
        backgroundColor: "#080808",
        color: "#f2f2f2",
        fontFamily: "Inter",
        padding: "44px 64px 38px 64px",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      {/* ── Section Header ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#e0e0e0",
            }}
          >
            SYSTEMS DIRECTORY
          </span>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              color: "#444",
            }}
          >
            PUBLIC REPOSITORIES
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.14em",
              color: "#444",
            }}
          >
            SECTION
          </span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#777",
              letterSpacing: "0.08em",
            }}
          >
            02
          </span>
        </div>
      </div>

      {/* ── Top Framing Rule ── */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "1px",
          backgroundColor: "#1c1c1c",
          marginTop: "16px",
        }}
      />

      {/* ── 2x2 Technical Matrix ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-around",
          paddingTop: "24px",
          paddingBottom: "20px",
        }}
      >
        {/* Row 1 */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* Item 01 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "510px",
              paddingRight: "36px",
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
                  color: "#444",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                }}
              >
                01 // {repos[0].domain}
              </span>
              <span
                style={{
                  fontSize: "9px",
                  color: "#333",
                  fontFamily: "monospace",
                }}
              >
                [PUBLIC]
              </span>
            </div>

            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#e8e8e8",
                letterSpacing: "-0.4px",
                marginTop: "10px",
              }}
            >
              {repos[0].name}
            </span>

            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                color: "#666",
                letterSpacing: "0.02em",
                marginTop: "8px",
                lineHeight: "1.4",
              }}
            >
              {repos[0].scope}
            </span>

            <span
              style={{
                fontSize: "9px",
                fontFamily: "monospace",
                color: "#3a3a3a",
                letterSpacing: "0.08em",
                marginTop: "12px",
              }}
            >
              {repos[0].telemetry}
            </span>
          </div>

          {/* Vertical Divider */}
          <div
            style={{
              display: "flex",
              width: "1px",
              height: "100%",
              backgroundColor: "#161616",
            }}
          />

          {/* Item 02 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "510px",
              paddingLeft: "36px",
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
                  color: "#444",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                }}
              >
                02 // {repos[1].domain}
              </span>
              <span
                style={{
                  fontSize: "9px",
                  color: "#333",
                  fontFamily: "monospace",
                }}
              >
                [PUBLIC]
              </span>
            </div>

            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#e8e8e8",
                letterSpacing: "-0.4px",
                marginTop: "10px",
              }}
            >
              {repos[1].name}
            </span>

            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                color: "#666",
                letterSpacing: "0.02em",
                marginTop: "8px",
                lineHeight: "1.4",
              }}
            >
              {repos[1].scope}
            </span>

            <span
              style={{
                fontSize: "9px",
                fontFamily: "monospace",
                color: "#3a3a3a",
                letterSpacing: "0.08em",
                marginTop: "12px",
              }}
            >
              {repos[1].telemetry}
            </span>
          </div>
        </div>

        {/* Horizontal Divider between rows */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "1px",
            backgroundColor: "#161616",
            marginTop: "18px",
            marginBottom: "18px",
          }}
        />

        {/* Row 2 */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* Item 03 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "510px",
              paddingRight: "36px",
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
                  color: "#444",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                }}
              >
                03 // {repos[2].domain}
              </span>
              <span
                style={{
                  fontSize: "9px",
                  color: "#333",
                  fontFamily: "monospace",
                }}
              >
                [PUBLIC]
              </span>
            </div>

            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#e8e8e8",
                letterSpacing: "-0.4px",
                marginTop: "10px",
              }}
            >
              {repos[2].name}
            </span>

            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                color: "#666",
                letterSpacing: "0.02em",
                marginTop: "8px",
                lineHeight: "1.4",
              }}
            >
              {repos[2].scope}
            </span>

            <span
              style={{
                fontSize: "9px",
                fontFamily: "monospace",
                color: "#3a3a3a",
                letterSpacing: "0.08em",
                marginTop: "12px",
              }}
            >
              {repos[2].telemetry}
            </span>
          </div>

          {/* Vertical Divider */}
          <div
            style={{
              display: "flex",
              width: "1px",
              height: "100%",
              backgroundColor: "#161616",
            }}
          />

          {/* Item 04 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "510px",
              paddingLeft: "36px",
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
                  color: "#444",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                }}
              >
                04 // {repos[3].domain}
              </span>
              <span
                style={{
                  fontSize: "9px",
                  color: "#333",
                  fontFamily: "monospace",
                }}
              >
                [PUBLIC]
              </span>
            </div>

            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#e8e8e8",
                letterSpacing: "-0.4px",
                marginTop: "10px",
              }}
            >
              {repos[3].name}
            </span>

            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                color: "#666",
                letterSpacing: "0.02em",
                marginTop: "8px",
                lineHeight: "1.4",
              }}
            >
              {repos[3].scope}
            </span>

            <span
              style={{
                fontSize: "9px",
                fontFamily: "monospace",
                color: "#3a3a3a",
                letterSpacing: "0.08em",
                marginTop: "12px",
              }}
            >
              {repos[3].telemetry}
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom Framing Rule & Metadata ── */}
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
            width: "100%",
            height: "1px",
            backgroundColor: "#1c1c1c",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: "9px",
              color: "#383838",
              letterSpacing: "0.14em",
              fontFamily: "monospace",
            }}
          >
            INDEX: 4 ARTIFACTS // REPO SPECIFICATION
          </span>
          <span
            style={{
              fontSize: "9px",
              color: "#383838",
              letterSpacing: "0.14em",
              fontFamily: "monospace",
            }}
          >
            GITHUB.COM/HIMAVARASAGAR
          </span>
        </div>
      </div>
    </div>
  );
}
