import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import { roles } from "../data/mockData";
import { useAuth } from "../context/useAuth";
const roleConfig = roles.parent;

function ParentLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [parentId, setParentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (parentId === roleConfig.demoId && password === roleConfig.demoPassword) {
      setError("");
      login("parent", parentId);
      navigate("/parent-dashboard");
    } else {
      setError("Invalid Parent ID or password. Try the demo credentials below.");
    }
  };

  return (
    <AuthShell roleConfig={roleConfig}>
      <div className="role-icon-lg" style={{ background: roleConfig.accentSoft, color: roleConfig.accent }}>
        {roleConfig.icon}
      </div>
      <h1>Parent sign in</h1>
      <p className="sub">Follow your child&apos;s academic progress in real time.</p>

      <form className="auth-form" onSubmit={handleLogin}>
        <div className="field">
          <label htmlFor="parentId">Parent ID</label>
          <input
            id="parentId"
            type="text"
            placeholder="e.g. parent"
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="form-error">⚠ {error}</div>}

        <button type="submit" className="btn btn-primary btn-block">
          Sign in
        </button>
      </form>

      <div className="demo-hint">
        🔑
        <span>
          Demo access — ID <code>{roleConfig.demoId}</code>, password{" "}
          <code>{roleConfig.demoPassword}</code>
        </span>
      </div>
    </AuthShell>
  );
}

export default ParentLogin;
