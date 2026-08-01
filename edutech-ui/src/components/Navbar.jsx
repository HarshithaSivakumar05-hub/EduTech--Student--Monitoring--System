import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-nav">
      <Link to="/" className="brand">
        <span className="brand-mark">ET</span>
        EduTech
      </Link>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#roles">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
