const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ---------------------------------------------------------------------
// Mock data (in a production build this would come from Zoho Catalyst
// Data Store / a real database). Kept here so the API is self-contained
// and easy to demo.
// ---------------------------------------------------------------------
const users = {
  student: { id: "student", password: "1234", role: "student" },
  teacher: { id: "teacher", password: "1234", role: "teacher" },
  parent: { id: "parent", password: "1234", role: "parent" },
};

const studentProfile = {
  name: "Aarav Sharma",
  id: "STU-2026-014",
  grade: "Grade 10 · Section B",
  attendance: 92,
  gpa: 8.7,
  rank: 4,
  subjects: [
    { name: "Mathematics", score: 91 },
    { name: "Science", score: 86 },
    { name: "English", score: 78 },
    { name: "Social Studies", score: 88 },
    { name: "Computer Science", score: 95 },
  ],
  assignments: [
    { title: "Algebra Worksheet 7", subject: "Mathematics", due: "Aug 04", status: "Pending" },
    { title: "Lab Report: Photosynthesis", subject: "Science", due: "Aug 06", status: "Pending" },
    { title: "Essay: Independence Movement", subject: "Social Studies", due: "Aug 09", status: "Pending" },
    { title: "Poem Recitation", subject: "English", due: "Jul 28", status: "Submitted" },
  ],
};

const teacherProfile = {
  name: "Meera Krishnan",
  id: "TCH-2026-003",
  department: "Mathematics Department",
  classes: [
    { name: "Grade 10 - Section B", students: 32, avgScore: 84, attendance: 92 },
    { name: "Grade 9 - Section A", students: 30, avgScore: 78, attendance: 87 },
    { name: "Grade 11 - Section C", students: 28, avgScore: 81, attendance: 90 },
    { name: "Grade 8 - Section D", students: 28, avgScore: 75, attendance: 85 },
  ],
};

const parentProfile = {
  name: "Rohit Verma",
  id: "PAR-2026-021",
  child: "Aarav Sharma",
  feesStatus: "Paid",
  upcomingEvents: [
    { title: "Parent-Teacher Meeting", date: "Aug 12" },
    { title: "Annual Sports Day", date: "Aug 20" },
    { title: "Term 2 fee due", date: "Aug 30" },
  ],
};

// ---------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------
app.get("/", (req, res) => {
  res.json({
    message: "EduTech Student Monitoring System API is running 🚀",
    version: "1.0.0",
    endpoints: [
      "POST /api/auth/login",
      "GET  /api/student/:id",
      "GET  /api/teacher/:id",
      "GET  /api/parent/:id",
    ],
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.post("/api/auth/login", (req, res) => {
  const { role, id, password } = req.body || {};
  const user = users[role];

  if (!user || user.id !== id || user.password !== password) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  res.json({ success: true, role: user.role, id: user.id });
});

app.get("/api/student/:id", (req, res) => {
  res.json(studentProfile);
});

app.get("/api/teacher/:id", (req, res) => {
  res.json(teacherProfile);
});

app.get("/api/parent/:id", (req, res) => {
  res.json(parentProfile);
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3000;

app.listen(PORT, () => {
  console.log(`EduTech API server running on port ${PORT}`);
});
