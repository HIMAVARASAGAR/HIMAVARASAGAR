export function Projects() {
  const repos = [
    {
      name: "Soteria",
      lang: "TypeScript",
    },
    {
      name: "wow-gesture-recognition",
      lang: "Python",
    },
    {
      name: "codegraphview",
      lang: "Python",
    },
    {
      name: "Restaurent_chatbot",
      lang: "JavaScript",
    },
    {
      name: "My-Portfolio",
      lang: "HTML",
    },
    {
      name: "glsl-fragment-shaders",
      lang: "",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        height: "400px",
        backgroundColor: "#080808",
        color: "#f2f2f2",
        fontFamily: "Inter",
        padding: "44px 64px 38px 64px",
        position: "relative",
        justifyContent: "space-between",
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
            letterSpacing: "0.18em",
            color: "#999",
          }}
        >
          REPOSITORIES
        </span>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.14em",
            color: "#444",
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
          backgroundColor: "#1c1c1c",
          marginTop: "14px",
        }}
      />

      {/* Repo list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "center",
          gap: "0px",
        }}
      >
        {repos.map((repo, i) => (
          <div
            key={repo.name}
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              width: "100%",
              padding: "11px 0",
              borderBottom: i < repos.length - 1 ? "1px solid #141414" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  color: "#333",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                  width: "20px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#d4d4d4",
                  letterSpacing: "-0.3px",
                }}
              >
                {repo.name}
              </span>
            </div>
            {repo.lang ? (
              <span
                style={{
                  fontSize: "11px",
                  color: "#555",
                  letterSpacing: "0.04em",
                }}
              >
                {repo.lang}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      {/* Bottom rule + footer */}
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
              fontSize: "10px",
              color: "#383838",
              letterSpacing: "0.10em",
              fontFamily: "monospace",
            }}
          >
            github.com/HIMAVARASAGAR
          </span>
          <span
            style={{
              fontSize: "10px",
              color: "#383838",
              letterSpacing: "0.10em",
              fontFamily: "monospace",
            }}
          >
            6 PUBLIC
          </span>
        </div>
      </div>
    </div>
  );
}
