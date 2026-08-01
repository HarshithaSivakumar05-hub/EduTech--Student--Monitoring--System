import { Link } from "react-router-dom";

function AuthShell({ roleConfig, children }) {
  return (
    <div className="auth-shell">
      <aside className="auth-side" style={{ "--role-accent": roleConfig.accent }}>
        <div className="auth-side-top">
          <Link to="/" className="brand">
            <span className="brand-mark">ET</span>
            EduTech
          </Link>
        </div>

        <div className="auth-side-quote">
          <span className="role-tag">
            {roleConfig.icon} {roleConfig.label} Portal
          </span>
          <h2>{roleConfig.quote}</h2>
          <p>{roleConfig.tagline}</p>
        </div>

        <div className="auth-side-foot">EduTech Student Monitoring System</div>
      </aside>

      <div className="auth-main">
        <div className="auth-box">
          <Link to="/" className="back-link">
            ← Back to home
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthShell;
