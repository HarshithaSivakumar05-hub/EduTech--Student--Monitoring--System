import DashboardLayout from "../components/DashboardLayout";
import StatRing from "../components/StatRing";
import { roles, studentData } from "../data/mockData";

const roleConfig = roles.student;

function StudentDashboard() {
  return (
    <DashboardLayout
      roleConfig={roleConfig}
      userName={studentData.name}
      userId={studentData.id}
      title={`Welcome back, ${studentData.name.split(" ")[0]} 👋`}
      subtitle={studentData.grade}
    >
      <div className="stat-grid">
        <div className="stat-card">
          <StatRing value={studentData.attendance} color={roleConfig.accent} />
          <div className="stat-info">
            <b>{studentData.attendance}%</b>
            <span>Attendance</span>
          </div>
        </div>
        <div className="stat-card">
          <StatRing value={Math.round(studentData.gpa * 10)} max={100} color="#1fab6b" />
          <div className="stat-info">
            <b>{studentData.gpa}</b>
            <span>GPA / 10</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="feature-icon" style={{ background: "var(--amber-050)", color: "#9a6412" }}>📝</div>
          <div className="stat-info">
            <b>{studentData.pendingTasks}</b>
            <span>Pending tasks</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="feature-icon" style={{ background: "var(--teal-050)", color: "#0f6a5f" }}>🏆</div>
          <div className="stat-info">
            <b>#{studentData.rank}</b>
            <span>Class rank</span>
          </div>
        </div>
      </div>

      <div className="dash-grid">
        <div className="panel">
          <div className="panel-head">
            <h3>Subject performance</h3>
            <span className="chip chip-indigo">This term</span>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Score</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {studentData.subjects.map((s) => (
                <tr key={s.name}>
                  <td>{s.name}</td>
                  <td className="mono">{s.score}%</td>
                  <td>
                    <span className="bar-mini">
                      <span style={{ width: `${s.score}%`, background: s.color }} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="panel-head" style={{ marginTop: 26 }}>
            <h3>Assignments</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Due</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {studentData.assignments.map((a) => (
                <tr key={a.title}>
                  <td>{a.title}</td>
                  <td>{a.subject}</td>
                  <td className="mono">{a.due}</td>
                  <td>
                    <span className={`status-pill ${a.status === "Submitted" ? "status-good" : "status-warn"}`}>
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Recent activity</h3>
          </div>
          <div className="activity-list">
            {studentData.activity.map((a, i) => (
              <div className="activity-item" key={i}>
                <span className="activity-dot" style={{ background: a.color }} />
                <div>
                  <b>{a.text}</b>
                  <span>{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StudentDashboard;
