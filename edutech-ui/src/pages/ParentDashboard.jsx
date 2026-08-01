import DashboardLayout from "../components/DashboardLayout";
import StatRing from "../components/StatRing";
import { roles, parentData } from "../data/mockData";

const roleConfig = roles.parent;

function ParentDashboard() {
  return (
    <DashboardLayout
      roleConfig={roleConfig}
      userName={parentData.name}
      userId={parentData.id}
      title={`Hello, ${parentData.name.split(" ")[0]} 👋`}
      subtitle={`Following ${parentData.child} · ${parentData.childGrade}`}
    >
      <div className="stat-grid">
        <div className="stat-card">
          <StatRing value={parentData.attendance} color={roleConfig.accent} />
          <div className="stat-info">
            <b>{parentData.attendance}%</b>
            <span>Attendance</span>
          </div>
        </div>
        <div className="stat-card">
          <StatRing value={Math.round(parentData.gpa * 10)} max={100} color="#1fab6b" />
          <div className="stat-info">
            <b>{parentData.gpa}</b>
            <span>GPA / 10</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="feature-icon" style={{ background: "var(--teal-050)", color: "#0f6a5f" }}>💳</div>
          <div className="stat-info">
            <b>{parentData.feesStatus}</b>
            <span>Fee status</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="feature-icon" style={{ background: "var(--amber-050)", color: "#9a6412" }}>📅</div>
          <div className="stat-info">
            <b>{parentData.upcomingEvents.length}</b>
            <span>Upcoming events</span>
          </div>
        </div>
      </div>

      <div className="dash-grid">
        <div className="panel">
          <div className="panel-head">
            <h3>Subject performance</h3>
            <span className="chip chip-teal">This term</span>
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
              {parentData.subjects.map((s) => (
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
            <h3>Teacher remarks</h3>
          </div>
          <div className="activity-list">
            {parentData.teacherRemarks.map((r, i) => (
              <div className="activity-item" key={i}>
                <span className="activity-dot" style={{ background: roleConfig.accent }} />
                <div>
                  <b>{r.text}</b>
                  <span>
                    {r.by} · {r.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Upcoming events</h3>
          </div>
          {parentData.upcomingEvents.map((e, i) => (
            <div className="notice-item" key={i}>
              <b>{e.title}</b>
              <span>{e.date}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ParentDashboard;
