# 🎓 EduTech Student Monitoring System

A unified web platform that connects **students, teachers and parents** on one dashboard — live grades, attendance, assignments and feedback, always in sync.

Built with **React (Vite)** on the frontend and **Node.js / Express** on **Zoho Catalyst AppSail** for the backend.

![CI](https://github.com/HarshithaSivakumar05-hub/EduTech-Student-Monitoring-System/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Made with React](https://img.shields.io/badge/frontend-React%20%2B%20Vite-3b4fe0)
![Backend](https://img.shields.io/badge/backend-Zoho%20Catalyst%20AppSail-f2a93b)

---

## ✨ Overview

Schools generate a lot of data — grades, attendance, assignments, notices — but it's usually scattered across spreadsheets, notice boards and phone calls. **EduTech** brings all of it into a single, role-aware platform:

| Role | What they can do |
|---|---|
| 🎓 **Student** | View subject-wise grades, attendance, pending assignments and class rank |
| 👩‍🏫 **Teacher** | Track classes, average scores/attendance, and a queue of submissions to review |
| 👨‍👩‍👧 **Parent** | Follow their child's grades, attendance, fee status and upcoming school events |

---

## 🖥️ Tech Stack

**Frontend** (`edutech-ui/`)
- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/) for client-side routing and role-protected routes
- Hand-rolled CSS design system (CSS custom properties, no framework) — see [`src/styles`](./edutech-ui/src/styles)
- Session handled via a lightweight `AuthContext` (`localStorage`-backed)

**Backend** (`appsail/`)
- [Node.js](https://nodejs.org/) + [Express 5](https://expressjs.com/)
- Deployed as a [Zoho Catalyst AppSail](https://www.catalyst.zoho.com/help/appsail.html) service
- REST endpoints for authentication and role dashboards (currently backed by in-memory mock data — swap in Catalyst Data Store / ZCQL for production)

**Platform**
- [Zoho Catalyst](https://catalyst.zoho.com/) (serverless hosting, `catalyst.json` project config)

---

## 📁 Project structure

```
EduTech-Student-Monitoring-System/
├── appsail/                  # Express backend (Zoho Catalyst AppSail)
│   ├── index.js               # API routes (auth, student/teacher/parent data)
│   ├── app-config.json        # AppSail runtime config
│   └── package.json
│
├── edutech-ui/                # React frontend (Vite)
│   ├── src/
│   │   ├── components/         # Navbar, Footer, DashboardLayout, StatRing, etc.
│   │   ├── context/             # AuthContext (session state)
│   │   ├── data/                 # Mock data + role configuration
│   │   ├── pages/                 # Home, Login pages, Dashboards, 404
│   │   └── styles/                 # Design tokens + component/page stylesheets
│   └── package.json
│
├── catalyst.json              # Zoho Catalyst project/component config
├── .github/workflows/ci.yml   # Lint + build pipeline
└── README.md
```

---

## 🚀 Getting started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- npm
- (Optional, for deployment) [Zoho Catalyst CLI](https://www.catalyst.zoho.com/help/cli.html)

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/EduTech-Student-Monitoring-System.git
cd EduTech-Student-Monitoring-System
```

### 2. Run the frontend
```bash
cd edutech-ui
npm install
npm run dev
```
The app runs at `http://localhost:5173`.

### 3. Run the backend (optional, for the API)
```bash
cd appsail
npm install
npm start
```
The API runs at `http://localhost:3000`.

### 4. Try it out
Use the demo credentials on any login screen:

| Role | ID | Password |
|---|---|---|
| Student | `student` | `1234` |
| Teacher | `teacher` | `1234` |
| Parent | `parent` | `1234` |

---

## 🔌 API reference (backend)

| Method | Route | Description |
|---|---|---|
| `GET` | `/` | API status and route list |
| `GET` | `/health` | Health check |
| `POST` | `/api/auth/login` | Validate `{ role, id, password }` |
| `GET` | `/api/student/:id` | Student profile & academic data |
| `GET` | `/api/teacher/:id` | Teacher profile & class data |
| `GET` | `/api/parent/:id` | Parent profile & child summary |

---

## ☁️ Deploying on Zoho Catalyst

This project is already structured as a Catalyst project (`catalyst.json`):

```bash
npm install -g zcatalyst-cli
catalyst login
catalyst deploy
```

This deploys:
- `appsail/` as an AppSail Node.js service
- `edutech-ui/` as a Client (Slate) component

---

## 🗺️ Roadmap

- [ ] Replace mock data with Zoho Catalyst Data Store (ZCQL)
- [ ] JWT-based authentication instead of demo credentials
- [ ] Teacher-side grade/attendance entry forms
- [ ] Email/SMS notifications via Catalyst Notifications
- [ ] Dark mode

---

## 📄 License

Licensed under the [MIT License](./LICENSE).
