export function Projects() {
  const repos = [
    { id: "01", name: "Soteria", lang: "TypeScript" },
    { id: "02", name: "wow-gesture-recognition", lang: "Python" },
    { id: "03", name: "codegraphview", lang: "Python" },
    { id: "04", name: "glsl-fragment-shaders", lang: "GLSL" },
    { id: "05", name: "Restaurent_chatbot", lang: "JavaScript" },
    { id: "06", name: "My-Portfolio", lang: "HTML" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        height: "440px",
        backgroundColor: "#070a0f",
        color: "#f2f2f2",
        fontFamily: "Inter",
        padding: "36px 56px 32px 56px",
        position: "relative",
        justifyContent: "space-between",
        border: "1px solid #1a2332",
        borderRadius: "6px",
      }}
    >
      {/* Header */}
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
            fontWeight: 600,
            letterSpacing: "0.20em",
            color: "#e2f9ff",
          }}
        >
          REPOSITORIES
        </span>

        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#00f0ff",
            letterSpacing: "0.08em",
          }}
        >
          02
        </span>
      </div>

      {/* Top rule */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "1px",
          backgroundColor: "#16202c",
          marginTop: "12px",
        }}
      />

      {/* 2x3 Grid Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-around",
          paddingTop: "16px",
          paddingBottom: "12px",
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
          {repos.slice(0, 3).map((repo, i) => (
            <div
              key={repo.name}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "336px",
                paddingRight: i < 2 ? "24px" : "0px",
                paddingLeft: i > 0 ? "24px" : "0px",
                borderRight: i < 2 ? "1px solid #16202c" : "none",
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
                    color: "#00f0ff",
                    fontFamily: "monospace",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  {repo.id}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    color: "#50627a",
                    letterSpacing: "0.04em",
                  }}
                >
                  {repo.lang}
                </span>
              </div>

              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#f0f2f5",
                  letterSpacing: "-0.3px",
                  marginTop: "10px",
                }}
              >
                {repo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Divider between row 1 and row 2 */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "1px",
            backgroundColor: "#16202c",
            marginTop: "12px",
            marginBottom: "12px",
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
          {repos.slice(3, 6).map((repo, i) => (
            <div
              key={repo.name}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "336px",
                paddingRight: i < 2 ? "24px" : "0px",
                paddingLeft: i > 0 ? "24px" : "0px",
                borderRight: i < 2 ? "1px solid #16202c" : "none",
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
                    color: "#00f0ff",
                    fontFamily: "monospace",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  {repo.id}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    color: "#50627a",
                    letterSpacing: "0.04em",
                  }}
                >
                  {repo.lang}
                </span>
              </div>

              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#f0f2f5",
                  letterSpacing: "-0.3px",
                  marginTop: "10px",
                }}
              >
                {repo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom rule + footer */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "1px",
            backgroundColor: "#16202c",
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
              fontSize: "10px",
              color: "#50627a",
              letterSpacing: "0.08em",
            }}
          >
            github.com/HIMAVARASAGAR
          </span>
          <span
            style={{
              fontSize: "10px",
              color: "#50627a",
              letterSpacing: "0.08em",
            }}
          >
            6 public
          </span>
        </div>
      </div>
    </div>
  );
}
