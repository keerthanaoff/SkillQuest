# 🌟 SkillQuest — Discover Your Career Path

> An interactive career exploration platform and personal development dashboard tailored for college students, combined with a built-in Node.js HTTP server and live route inspector.

[![React](https://img.shields.io/badge/React-19.0-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/Styling-Vanilla%20CSS3-1572b6?logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Node.js](https://img.shields.io/badge/Server-Node.js%20HTTP-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🎯 Overview

**SkillQuest** bridges the gap between college coursework and modern industry careers. Instead of a generic static website, SkillQuest transforms career discovery into an engaging, gamified experience with real-time feedback, skill gap analysis, personalized roadmaps, and daily quests.

All features and the live Node.js server test inspector are unified on a seamless single-page layout with smooth in-page navigation and persistent state stored in `localStorage`.

---

## ✨ Key Features

### 🧭 1. Interactive Career Quiz & Matching Engine
- **10 Situational Questions**: Evaluates interests, problem-solving preferences, favorite activities, and work environments.
- **Dynamic Match Scores**: Calculates career affinity percentages across 10 in-demand industry tracks with visual indicators (Top Match, High Affinity, Emerging Fit).
- **Match Breakdown**: Detailed explanation of why each career suits the student's profile.

### 🌐 2. Integrated Node.js HTTP Server & Live Route Inspector
SkillQuest includes a standalone Node.js server built using the native `http` module (`server.js`) and an embedded **Live Server Inspector** on the web page:
- **Route `/`**: Responds with `Welcome to My Server` (Status `200 OK`).
- **Route `/about`**: Responds with `About This Server` (Status `200 OK`).
- **Any Other Route**: Responds with `404 - Page Not Found` (Status `404 Not Found`).
- **Interactive UI Console**: Click buttons in the UI to instantly query and inspect live HTTP responses, headers, latency, and status codes right on the page.

### 🌌 3. Interactive Skill Gap Constellation
- Dynamic visual SVG orbit of required vs. mastered competencies.
- Check off competencies you already know to immediately see your readiness percentage increase.
- Filter by Core, Recommended, and Elective skills with curated practice challenges.

### 🗺️ 4. 4-Stage Learning Roadmaps
- **Step-by-Step Curriculum**: Foundations ➔ Core Competencies ➔ Capstone Projects ➔ Career Prep & Interviewing.
- Interactive milestone checklists with estimated completion hours.
- Direct links to free documentation, interactive sandboxes, and portfolio project ideas.

### ⚡ 5. Gamified Missions & XP System
- **Daily Mission Pool**: Complete quick actions like reviewing a roadmap, checking off a skill, or comparing roles.
- **Experience Points (XP) & Levels**: Level up from *Explorer* (Level 1) to *Career Ready* (Level 4).
- **8 Unlockable Badges**: Visual rewards with celebratory confetti bursts when milestones are achieved.

### ⚖️ 6. Career Comparison Matrix & Quick Command Palette
- **Side-by-Side Comparison**: Compare salary ranges, learning curves, daily tasks, and prerequisite stacks for any two careers.
- **Command Palette (`Ctrl + K`)**: Instantly search careers, jump to sections, test server routes, and toggle light/dark modes.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
|---|---|---|
| **Frontend UI** | React.js 19 (JSX) | Component hierarchy, state management, and declarative reactivity |
| **Styling** | Vanilla CSS3 | Custom design system with CSS custom properties, glassmorphism, responsive grid & animations (no external UI libraries) |
| **Logic & Storage** | Vanilla JavaScript (ES2022) | Scoring algorithms, streak calculations, versioned `localStorage` persistence |
| **Development** | Vite 6 | Fast HMR dev server and optimized production bundler |
| **HTTP Server** | Node.js `http` Module | Built-in HTTP server handling `/`, `/about`, and `404` routes with CORS headers |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/keerthanaoff/SkillQuest.git
   cd SkillQuest
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

### Running Locally

To run both the frontend platform and the backend HTTP server:

1. **Start the Node.js HTTP Server (Port 3000):**
   ```bash
   node server.js
   ```
   *Terminal output:*
   ```text
   SkillQuest HTTP Server running at http://localhost:3000/
   Routes handled:
     - GET /       -> "Welcome to My Server" (200 OK)
     - GET /about  -> "About This Server"    (200 OK)
     - GET /*      -> "404 - Page Not Found" (404 Not Found)
   ```

2. **Start the Vite Frontend Dev Server (Port 5173):**
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

---

## 📂 Project Directory Structure

```text
react.js/
├── index.html                # HTML5 entry with metadata and Google Fonts
├── package.json              # Project scripts and dependencies
├── server.js                 # Built-in Node.js HTTP server (routes: /, /about, 404)
├── vite.config.js            # Vite configuration with React plugin
├── src/
│   ├── main.jsx              # React DOM root render
│   ├── App.jsx               # Unified single-page application orchestrator
│   ├── index.css             # Vanilla CSS design system, tokens, and animations
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar with XP badge and server link
│   │   ├── Footer.jsx        # Footer with reset, export, and route links
│   │   ├── CommandPalette.jsx# Quick-action modal (Ctrl+K)
│   │   ├── Constellation.jsx # Interactive SVG skill orbit
│   │   ├── ServerInspector.jsx # Live in-page HTTP server tester
│   │   ├── CareerCard.jsx    # Career tile with save, match, and explore actions
│   │   ├── CareerComparisonModal.jsx # Side-by-side role comparison
│   │   ├── EmptyState.jsx    # Accessible empty fallback UI
│   │   └── Toast.jsx         # Non-blocking notification toasts
│   ├── data/
│   │   ├── careers.js        # 10 comprehensive career profiles
│   │   ├── quizQuestions.js  # 10 quiz questions with weighted scoring
│   │   ├── skills.js         # Curated skill checklists per career
│   │   ├── roadmaps.js       # 4-stage roadmaps with milestones
│   │   └── missions.js       # XP tiers, daily missions, and badge catalog
│   ├── pages/
│   │   ├── LandingPage.jsx   # Hero banner and quick discovery entry
│   │   ├── QuizPage.jsx      # Interactive career assessment
│   │   ├── ResultsPage.jsx   # Match ranking cards and breakdown
│   │   ├── CareerExplorerPage.jsx # Search, filter, and comparison catalog
│   │   ├── SkillGapPage.jsx  # Interactive skill constellation and checklists
│   │   ├── RoadmapPage.jsx   # Milestone roadmaps with project capstones
│   │   ├── MissionsPage.jsx  # Gamified missions, XP bar, and badges
│   │   ├── DashboardPage.jsx # Streaks, velocity charts, and summary
│   │   ├── SavedCareersPage.jsx # Bookmark manager
│   │   └── SettingsPage.jsx  # Dark/Light theme, import/export, and data reset
│   └── utils/
│       ├── confetti.js       # Lightweight celebratory canvas particles
│       ├── dates.js          # Streak counting and velocity formatting
│       ├── scoring.js        # Deterministic match calculation algorithm
│       └── storage.js        # Versioned localStorage management
└── screenshots/              # Tested route proof and verification captures
```

---

## 🧪 Testing the Node.js Server Routes

You can test the server endpoints directly in any browser or using `curl`:

```bash
# 1. Root route
curl http://localhost:3000/
# Output: Welcome to My Server (Status: 200 OK)

# 2. About route
curl http://localhost:3000/about
# Output: About This Server (Status: 200 OK)

# 3. 404 route
curl http://localhost:3000/contact
# Output: 404 - Page Not Found (Status: 404 Not Found)
```

Alternatively, use the **Live Server Inspector** card embedded directly on the SkillQuest web page at `http://localhost:5173/#server`.

---

## 👩‍💻 Author

- **GitHub**: [@keerthanaoff](https://github.com/keerthanaoff)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
