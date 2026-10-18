# 🔴 Anuranj V – Professional Data Analyst Portfolio

A modern, responsive portfolio website built with **React.js + Vite + CSS** showcasing data analytics skills, projects, and experience.

## ✨ Features

- 🌑 Dark theme with red neon glow effects & glassmorphism
- 📊 Animated Recharts visualizations in the hero section
- 🎯 Dynamic skill cards with proficiency bars
- 🗂️ Filterable project cards by category
- 🕐 Vertical timeline experience section
- 📬 Mailto-based contact form
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible with semantic HTML & ARIA attributes

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# 1. Clone or download the project
cd anuranj-vPortfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open http://localhost:5173 in your browser.

---

## 📁 Project Structure

```
src/
├── components/          # UI components (one per section)
│   ├── Navbar.jsx/.css
│   ├── Hero.jsx/.css
│   ├── About.jsx/.css
│   ├── Skills.jsx/.css
│   ├── Projects.jsx/.css
│   ├── Experience.jsx/.css
│   ├── Certificates.jsx/.css
│   ├── Contact.jsx/.css
│   └── Footer.jsx/.css
├── data/                # Edit these files to update content
│   ├── profile.js       # Personal info, bio, contact links
│   ├── skills.js        # Skills list
│   ├── projects.js      # Projects list
│   ├── experience.js    # Work/training history
│   └── certificates.js  # Certificates list
├── App.jsx
├── App.css
├── index.css            # Global design system & tokens
└── main.jsx
public/
├── images/              # Place your photos here
│   ├── portrait.jpg     # Hero portrait
│   ├── profile.jpg      # About section photo
│   └── projects/        # Project screenshots
└── resume.pdf           # Your CV
```

---

## ✏️ How to Customize

### 1. Update personal information
Edit src/data/profile.js - change your name, email, LinkedIn/GitHub URLs, bio, etc.

### 2. Add a new skill
Open src/data/skills.js and add an entry:

```js
{
  id: 9,
  name: "Tableau",
  category: "Data Visualization",
  icon: "BarChart2",
  color: "#E97627",
  proficiency: 70,
  description: "Interactive dashboards and stories",
},
```

### 3. Add a new project
Open src/data/projects.js and add an entry with title, category, tags, description, image, viewUrl, and githubUrl. Set viewUrl or githubUrl to "" to hide that button.

### 4. Replace your portrait photo
Place your photo at public/images/portrait.jpg (hero) and public/images/profile.jpg (about section). Recommended: 400x400px.

### 5. Upload your resume
Place your PDF at public/resume.pdf. The Download CV button will automatically become functional.

### 6. Add certificates
Open src/data/certificates.js and uncomment the example entry, then fill in your details.

---

## 📦 Build & Deploy

```bash
npm run dev       # Start development server
npm run build     # Create production build in /dist
npm run preview   # Preview the production build locally
```

### Deploy on Vercel
1. Push your project to GitHub
2. Go to vercel.com - New Project
3. Import your GitHub repository
4. Framework Preset: Vite
5. Build command: npm run build, Output: dist
6. Click Deploy

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18   | UI components |
| Vite       | Build tool & dev server |
| CSS3       | Custom design system |
| Lucide React | Icons |
| Recharts   | Interactive charts in hero |

---

Built with love by Anuranj V
