# Simhadri Mukesh - Developer Portfolio

A modern, high-performance developer portfolio built with **React**, **Vite**, and **Tailwind CSS**, inspired by the clean engineering portfolio structure of [kamesh-kadimisetty.github.io/portfolio](https://kamesh-kadimisetty.github.io/portfolio/).

---

## 🚀 Features

- **Hero & Interactive Terminal**: Animated tagline cycler, live status badge, and an interactive developer profile terminal window.
- **Key Metrics Grid**: Highlighting 750+ Solved Problems, LeetCode Knight badge, CodeChef 3-Star rating, and 8.75 CGPA at Gayatri Vidya Parishad College of Engineering.
- **Categorized Technical Skills**: Dynamic filter tabs for Programming Languages, AI/ML & Automation, Web & Backend, Cloud & Infrastructure, and Core CS Fundamentals.
- **Experience Timeline**: Detailed AWS Academy AI-ML Virtual Intern section with bullet points and tech tags.
- **Featured Projects Showcase**:
  - *Offline LLM with Customizable Avatar Interface* (FastAPI, PyTorch, Whisper, EasyOCR, Three.js/Babylon.js, SQLite)
  - *ScoutWay – Travel Journaling & Story-Sharing Platform* (MERN Stack, Cloudinary, OAuth)
  - *Project Yuvata – Digital Literacy Platform* (FastAPI, Gemini API, OCR, Chrome Extension)
- **Achievements & Certifications**: LeetCode Knight, CodeChef 3-Star, Srujana Hackathon 3rd Prize, Cisco CCNA, AWS Cloud Quest Cloud Practitioner, and CloudKarya Generative AI.
- **Interactive Contact Form & Socials**: Pre-configured with direct mailto fallback, phone, and quick-access profile badges.
- **Dark & Light Mode**: Default sleek dark theme with persistent theme toggling.
- **Fully Responsive**: Optimized for ultra-smooth rendering on desktop, tablets, and mobile screens.

---

## 🛠️ Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Generates an optimized static production build in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploy to GitHub Pages (Like Kamesh's Portfolio)

To deploy your portfolio to `https://simhadrimukesh23.github.io/portfolio/`:

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/simhadrimukesh23/portfolio.git
   git push -u origin main
   ```

2. In `vite.config.js`, ensure `base` matches your repository name:
   ```js
   base: '/portfolio/',
   ```

3. Enable GitHub Pages:
   - Go to your repository on GitHub: **Settings** > **Pages**
   - Under **Build and deployment**, select **GitHub Actions** (or deploy from branch `gh-pages` / `dist`).

---

## ✏️ Customizing Your Content

All data is decoupled from the UI and centralized in a single file:
👉 [`src/data/portfolioData.js`](file:///d:/mini_project/port/src/data/portfolioData.js)

You can easily update:
- Social links & usernames
- Project live demo URLs and GitHub repositories
- Additional internships, certifications, or awards
