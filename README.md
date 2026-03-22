# Manjari Prasad — Portfolio

A personal portfolio and resume site built with React + Vite. Features a light/dark theme toggle, scroll-triggered animations, custom cursor, and a fully responsive layout.

**Live site → [manjari-prasad.netlify.app](https://manjari-prasad.netlify.app)**

---

## Tech Stack

| | |
|---|---|
| Framework | React 18 + Vite |
| Styling | CSS Modules |
| Animations | IntersectionObserver + CSS keyframes |
| Deployment | Netlify (auto-deploy on push) |

---

## Features

- Light / dark mode toggle with persisted preference
- Custom animated cursor
- Scroll-triggered reveal animations on all sections
- Animated skill bars
- Fully responsive on mobile, tablet, desktop
- SVG icons throughout (no emoji, no icon libraries)
- Resume PDF download link

---

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx / Nav.module.css -> Navigation + theme toggle
│   ├── Hero.jsx / Hero.module.css -> Landing section with photo
│   ├── About.jsx / About.module.css -> Bio, stats, interests
│   ├── Projects.jsx / Projects.module.css
│   ├── Skills.jsx / Skills.module.css -> Animated skill bars
│   ├── Experience.jsx / Experience.module.css
│   ├── Contact.jsx / Contact.module.css
│   └── Footer.jsx / Footer.module.css
├── hooks/
│   └── useReveal.js
├── App.jsx
├── index.css
└── main.jsx
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---
## Deployment

Deployed on Netlify with continuous deployment from the `main` branch.

```
Build command:     npm run build
Publish directory: dist
```

---

*Designed and built by Manjari Prasad*