import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const NAV_ITEMS = ["Overview", "Academics", "Attendance", "Messages", "Settings"];

function DashboardLayout({ roleConfig, userName, userId, title, subtitle, children }) {
  const { logout } = useAuth();

  return (
    <div className="dash-shell">
      <aside className="dash-sidebar">
        <Link to="/" className="brand">
          <span className="brand-mark">ET</span>
          EduTech
        </Link>

        <nav className="dash-nav">
          {NAV_ITEMS.map((item, i) => (
            <span key={item} className={`dash-nav-item${i === 0 ? " active" : ""}`}>
              {item}
            </span>
          ))}
        </nav>

        <div className="dash-sidebar-user">
          <div className="avatar" style={{ background: roleConfig.accent }}>
            {userName?.charAt(0) ?? "U"}
          </div>
          <div>
            <b>{userName}</b>
            <span className="mono">{userId}</span>
          </div>
        </div>

        <button className="logout-btn" onClick={logout}>
          ⏻ Log out
        </button>
      </aside>

      <main className="dash-main">
        <div className="dash-topbar">
          <div>
            <h1>{title}</h1>
            <p className="sub">{subtitle}</p>
          </div>
          <span className={`chip ${roleConfig.chipClass}`}>
            {roleConfig.icon} {roleConfig.label} view
          </span>
        </div>

        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
