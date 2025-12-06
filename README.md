export default function Home() {
  return (
    <div style={{
      background: "#f5f5f5",
      minHeight: "100vh",
      padding: "50px",
      fontFamily: "Arial"
    }}>
      <div style={{
        maxWidth: "700px",
        margin: "auto",
        background: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>My AI Studio App</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Powered by Gemini API. Edit UI easily in Visual Studio Code.
        </p>

        <button style={{
          marginTop: "20px",
          background: "#007bff",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}>
          Start App
        </button>
      </div>
    </div>
  );
}
