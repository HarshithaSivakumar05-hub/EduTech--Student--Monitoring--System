import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { roles } from "../data/mockData";

const features = [
  {
    icon: "📊",
    title: "Live progress tracking",
    desc: "Grades, attendance and rankings update in real time across every subject.",
    bg: "var(--indigo-050)",
    color: "var(--indigo-600)",
  },
  {
    icon: "🔔",
    title: "Instant notifications",
    desc: "Assignments, notices and remarks reach students, teachers and parents together.",
    bg: "var(--amber-050)",
    color: "#9a6412",
  },
  {
    icon: "🔐",
    title: "Role-based access",
    desc: "Every account only sees what it should — student, teacher or parent.",
    bg: "var(--teal-050)",
    color: "#0f6a5f",
  },
  {
    icon: "🗂️",
    title: "One record per student",
    desc: "Academic history, attendance and feedback consolidated in a single profile.",
    bg: "var(--coral-050)",
    color: "#b23b4d",
  },
  {
    icon: "⚡",
    title: "Built on Zoho Catalyst",
    desc: "Serverless AppSail backend with a Vite + React frontend for fast, reliable delivery.",
    bg: "var(--indigo-050)",
    color: "var(--indigo-600)",
  },
  {
    icon: "📱",
    title: "Works everywhere",
    desc: "A responsive layout that holds up from a school lab desktop to a parent's phone.",
    bg: "var(--teal-050)",
    color: "#0f6a5f",
  },
];

function Home() {
  const subjectBars = [
    { name: "Mathematics", pct: 91, color: "#3b4fe0" },
    { name: "Science", pct: 86, color: "#1fa89a" },
    { name: "English", pct: 78, color: "#f2a93b" },
  ];

  return (
    <>
      <Navbar />

      <section className="hero">
        <div>
          <span className="hero-eyebrow">Live on Zoho Catalyst</span>
          <h1>
            One dashboard for <span className="accent">every</span> student&apos;s journey.
          </h1>
          <p className="lede">
            EduTech Student Monitoring System brings students, teachers and parents onto a single
            platform &mdash; grades, attendance and feedback, always up to date.
          </p>

          <div className="hero-cta">
            <a href="#roles" className="btn btn-primary">
              Get started →
            </a>
            <a href="#features" className="btn btn-ghost">
              Explore features
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <b>3</b>
              <span>User roles</span>
            </div>
            <div className="stat">
              <b>99.9%</b>
              <span>Uptime target</span>
            </div>
            <div className="stat">
              <b>24/7</b>
              <span>Access to records</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="report-card">
            <div className="report-card-head">
              <div>
                <h4>Aarav Sharma</h4>
                <span>Grade 10 · Section B</span>
              </div>
              <span className="chip chip-indigo">Term 2</span>
            </div>
            <div className="report-rows">
              {subjectBars.map((s) => (
                <div className="report-row" key={s.name}>
                  <span className="subject">{s.name}</span>
                  <span className="bar-track">
                    <span className="bar-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                  </span>
                  <span className="pct">{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="floating-card fc-1">
            <div className="fc-icon" style={{ background: "var(--teal-050)" }}>✅</div>
            <div className="fc-text">
              <b>92% attendance</b>
              <span>This month</span>
            </div>
          </div>

          <div className="floating-card fc-2">
            <div className="fc-icon" style={{ background: "var(--amber-050)" }}>🏆</div>
            <div className="fc-text">
              <b>Rank #4</b>
              <span>Class of 32</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-head">
          <span className="chip chip-indigo">Why EduTech</span>
          <h2>Everything a school needs to stay connected</h2>
          <p>
            Built for classrooms that want less paperwork and more visibility into how every
            student is really doing.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon" style={{ background: f.bg, color: f.color }}>
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="roles">
        <div className="section-head">
          <span className="chip chip-teal">Choose your portal</span>
          <h2>Sign in to your dashboard</h2>
          <p>Each role gets a tailored view — pick the badge that matches you.</p>
        </div>

        <div className="badge-grid">
          {Object.values(roles).map((r) => (
            <div className="badge-card" key={r.key}>
              <span className="badge-tab" style={{ background: r.accent }} />
              <div className="badge-role-icon" style={{ background: r.accentSoft, color: r.accent }}>
                {r.icon}
              </div>
              <h3>{r.label} Portal</h3>
              <p className="badge-desc">{r.tagline}</p>

              <div className="badge-id">
                <span>ID · {r.demoId.toUpperCase()}</span>
                <span>ACTIVE</span>
              </div>

              <Link to={`/${r.key}`}>
                <button className="btn btn-primary btn-block">Login as {r.label}</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
