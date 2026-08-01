import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <span className="mono" style={{ color: "var(--text-400)", fontSize: 13 }}>ERROR 404</span>
        <h1 style={{ fontSize: 40, margin: "10px 0" }}>This page took a leave of absence.</h1>
        <p style={{ marginBottom: 24 }}>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/">
          <button className="btn btn-primary">Back to home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
