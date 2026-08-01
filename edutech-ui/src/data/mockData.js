export const roles = {
  student: {
    key: "student",
    label: "Student",
    icon: "🎓",
    accent: "#3b4fe0",
    accentSoft: "var(--indigo-050)",
    chipClass: "chip-indigo",
    demoId: "student",
    demoPassword: "1234",
    tagline: "Track your grades, attendance and assignments in one place.",
    quote: "Every subject, every score, one dashboard.",
  },
  teacher: {
    key: "teacher",
    label: "Teacher",
    icon: "👩‍🏫",
    accent: "#f2a93b",
    accentSoft: "var(--amber-050)",
    chipClass: "chip-amber",
    demoId: "teacher",
    demoPassword: "1234",
    tagline: "Manage your classes, mark attendance and share feedback.",
    quote: "Spend less time on spreadsheets, more time teaching.",
  },
  parent: {
    key: "parent",
    label: "Parent",
    icon: "👨‍👩‍👧",
    accent: "#1fa89a",
    accentSoft: "var(--teal-050)",
    chipClass: "chip-teal",
    demoId: "parent",
    demoPassword: "1234",
    tagline: "Stay close to your child's progress, anytime, anywhere.",
    quote: "Real visibility into your child's school life.",
  },
};

export const studentData = {
  name: "Aarav Sharma",
  id: "STU-2026-014",
  grade: "Grade 10 · Section B",
  attendance: 92,
  gpa: 8.7,
  pendingTasks: 3,
  rank: 4,
  subjects: [
    { name: "Mathematics", score: 91, color: "#3b4fe0" },
    { name: "Science", score: 86, color: "#1fa89a" },
    { name: "English", score: 78, color: "#f2a93b" },
    { name: "Social Studies", score: 88, color: "#e5566b" },
    { name: "Computer Science", score: 95, color: "#1fab6b" },
  ],
  assignments: [
    { title: "Algebra Worksheet 7", subject: "Mathematics", due: "Aug 04", status: "Pending" },
    { title: "Lab Report: Photosynthesis", subject: "Science", due: "Aug 06", status: "Pending" },
    { title: "Essay: Independence Movement", subject: "Social Studies", due: "Aug 09", status: "Pending" },
    { title: "Poem Recitation", subject: "English", due: "Jul 28", status: "Submitted" },
  ],
  activity: [
    { text: "Scored 95/100 in Computer Science unit test", time: "2 hours ago", color: "#1fab6b" },
    { text: "Marked present — Aug 1 assembly", time: "5 hours ago", color: "#3b4fe0" },
    { text: "New assignment posted in Science", time: "1 day ago", color: "#f2a93b" },
    { text: "Teacher feedback added on English essay", time: "2 days ago", color: "#1fa89a" },
  ],
};

export const teacherData = {
  name: "Meera Krishnan",
  id: "TCH-2026-003",
  department: "Mathematics Department",
  classesToday: 4,
  totalStudents: 118,
  avgAttendance: 89,
  pendingReviews: 12,
  classes: [
    { name: "Grade 10 - Section B", students: 32, avgScore: 84, attendance: 92 },
    { name: "Grade 9 - Section A", students: 30, avgScore: 78, attendance: 87 },
    { name: "Grade 11 - Section C", students: 28, avgScore: 81, attendance: 90 },
    { name: "Grade 8 - Section D", students: 28, avgScore: 75, attendance: 85 },
  ],
  reviewQueue: [
    { title: "Algebra Worksheet 7", student: "Aarav Sharma", submitted: "Today" },
    { title: "Geometry Quiz", student: "Diya Patel", submitted: "Today" },
    { title: "Algebra Worksheet 7", student: "Kabir Singh", submitted: "Yesterday" },
  ],
  notices: [
    { title: "Parent-teacher meeting", detail: "Scheduled for Aug 12, 10:00 AM" },
    { title: "Mid-term syllabus deadline", detail: "Submit by Aug 15" },
  ],
};

export const parentData = {
  name: "Rohit Verma",
  id: "PAR-2026-021",
  child: "Aarav Sharma",
  childGrade: "Grade 10 · Section B",
  attendance: 92,
  gpa: 8.7,
  feesStatus: "Paid",
  upcomingEvents: [
    { title: "Parent-Teacher Meeting", date: "Aug 12" },
    { title: "Annual Sports Day", date: "Aug 20" },
    { title: "Term 2 fee due", date: "Aug 30" },
  ],
  subjects: [
    { name: "Mathematics", score: 91, color: "#3b4fe0" },
    { name: "Science", score: 86, color: "#1fa89a" },
    { name: "English", score: 78, color: "#f2a93b" },
    { name: "Social Studies", score: 88, color: "#e5566b" },
    { name: "Computer Science", score: 95, color: "#1fab6b" },
  ],
  teacherRemarks: [
    { text: "Excellent performance in the Computer Science unit test.", by: "Ms. Meera Krishnan", time: "2 days ago" },
    { text: "Needs to improve punctuality for morning assembly.", by: "Class Teacher", time: "5 days ago" },
  ],
};
