import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import { roles } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

const roleConfig = roles.student;

function StudentLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (studentId === roleConfig.demoId && password === roleConfig.demoPassword) {
      setError("");
      login("student", studentId);
      navigate("/student-dashboard");
    } else {
      setError("Invalid Student ID or password. Try the demo credentials below.");
    }
  };

  return (
    <AuthShell roleConfig={roleConfig}>
      <div className="role-icon-lg" style={{ background: roleConfig.accentSoft, color: roleConfig.accent }}>
        {roleConfig.icon}
      </div>
      <h1>Student sign in</h1>
      <p className="sub">Access your grades, attendance and assignments.</p>

      <form className="auth-form" onSubmit={handleLogin}>
        <div className="field">
          <label htmlFor="studentId">Student ID</label>
          <input
            id="studentId"
            type="text"
            placeholder="e.g. student"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
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

export default StudentLogin;
