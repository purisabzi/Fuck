export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "3rem" }}>404</h1>
      <p>Page not found</p>
      <a href="/" style={{ marginTop: "1rem", color: "#e879a0" }}>Go Home</a>
    </div>
  );
}
