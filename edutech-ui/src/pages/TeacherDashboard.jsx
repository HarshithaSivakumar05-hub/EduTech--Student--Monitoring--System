import DashboardLayout from "../components/DashboardLayout";
import StatRing from "../components/StatRing";
import { roles, teacherData } from "../data/mockData";

const roleConfig = roles.teacher;

function TeacherDashboard() {
  return (
    <DashboardLayout
      roleConfig={roleConfig}
      userName={teacherData.name}
      userId={teacherData.id}
      title={`Good to see you, ${teacherData.name.split(" ")[0]} 👋`}
      subtitle={teacherData.department}
    >
      <div className="stat-grid">
        <div className="stat-card">
          <div className="feature-icon" style={{ background: "var(--amber-050)", color: "#9a6412" }}>📚</div>
          <div className="stat-info">
            <b>{teacherData.classesToday}</b>
            <span>Classes today</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="feature-icon" style={{ background: "var(--indigo-050)", color: "var(--indigo-600)" }}>🧑‍🎓</div>
          <div className="stat-info">
            <b>{teacherData.totalStudents}</b>
            <span>Total students</span>
          </div>
        </div>
        <div className="stat-card">
          <StatRing value={teacherData.avgAttendance} color={roleConfig.accent} />
          <div className="stat-info">
            <b>{teacherData.avgAttendance}%</b>
            <span>Avg attendance</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="feature-icon" style={{ background: "var(--coral-050)", color: "#b23b4d" }}>🕒</div>
          <div className="stat-info">
            <b>{teacherData.pendingReviews}</b>
            <span>Pending reviews</span>
          </div>
        </div>
      </div>

      <div className="dash-grid">
        <div className="panel">
          <div className="panel-head">
            <h3>My classes</h3>
            <span className="chip chip-amber">Term 2</span>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Students</th>
                <th>Avg score</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {teacherData.classes.map((c) => (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td className="mono">{c.students}</td>
                  <td className="mono">{c.avgScore}%</td>
                  <td>
                    <span
                      className={`status-pill ${
                        c.attendance >= 90 ? "status-good" : c.attendance >= 85 ? "status-warn" : "status-bad"
                      }`}
                    >
                      {c.attendance}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="panel-head" style={{ marginTop: 26 }}>
            <h3>Submissions to review</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Student</th>
                <th>Submitted</th>
              </tr>
            </thead>
            <tbody>
              {teacherData.reviewQueue.map((r, i) => (
                <tr key={i}>
                  <td>{r.title}</td>
                  <td>{r.student}</td>
                  <td className="mono">{r.submitted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Notices</h3>
          </div>
          {teacherData.notices.map((n, i) => (
            <div className="notice-item" key={i}>
              <b>{n.title}</b>
              <span>{n.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TeacherDashboard;
