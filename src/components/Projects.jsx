import useReveal from '../hooks/useReveal.js'
import styles from './Projects.module.css'

const ExtIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </svg>
)
const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

// SVG icons per project
const BrainIcon   = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6.03-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5v-5l-2.28 2.28C6.81 18.03 5 15.21 5 12c0-4.08 3.05-7.44 7-7.93V2.05z"/></svg>
const PersonIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08A7.2 7.2 0 0 1 12 19.2z"/></svg>
const MoneyIcon   = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
const FridgeIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v17c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-1.11-.9-1.99-2-1.99zM18 19H6v-6h12v6zm0-8H6V4h12v7z"/></svg>
const SearchIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
const MedIcon     = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-4H7v-2h4V8h2v4h4v2h-4v4z"/></svg>

const projects = [
  {
    Icon: BrainIcon,
    title: 'BrainGoated',
    award: "Teaching Team's Choice — CMPT 276",
    link: 'https://github.com/CMPT-276-SPRING-2025/final-project-11-stars',
    live: 'https://braingoated.netlify.app',
    desc: 'AI-powered educational trivia platform for kids 8–16. Custom quiz generation via OpenAI, multi-language support, Bud-E chatbot for follow-up questions, and confetti for when you nail it. 358 commits, full test suite.',
    tags: ['React', 'Redux', 'OpenAI API', 'Trivia API', 'Netlify'],
  },
  {
    Icon: PersonIcon,
    title: 'PenguinSteps',
    award: 'Most Accessible — Sparkjam Designathon',
    link: 'https://github.com/manjari19',
    desc: 'Event companion app built specifically for neurodiverse users. High-contrast UI, motion-safe animations, full screen-reader support. The accessibility wasn\'t an afterthought — it was the whole point.',
    tags: ['React', 'JavaScript', 'WCAG', 'A11y'],
  },
  {
    Icon: MoneyIcon,
    title: 'EarnNest',
    link: 'https://github.com/laraib-y/EarnNest',
    live: 'https://earn-nest-j1qh.vercel.app/',
    desc: 'Financial literacy app for kids 9–12 — think Duolingo but for money. Chore-based coin system, Gemini-powered goal coach, parent dashboard. Most kids\' finance apps are just digital piggy banks. EarnNest actually tries to teach.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Gemini API'],
  },
  {
    Icon: FridgeIcon,
    title: 'FridgeSnap',
    link: 'https://github.com/manjari19/fridgesnap',
    live: 'https://fridgesnapjh.netlify.app/',
    desc: 'Upload a photo of your fridge, confirm the ingredients, get recipe ideas tailored to your time and cooking confidence. Starts from what you have, not what you want. Built to reduce food waste and the 7pm "what do I even make" spiral.',
    tags: ['React', 'JavaScript', 'Computer Vision', 'Netlify'],
  },
  {
    Icon: SearchIcon,
    title: 'Job Scraper & SMS Alerts',
    link: 'https://github.com/manjari19',
    desc: 'Built this because refreshing job boards manually is a waste of time. Automated monitoring with Selenium, structured parsing with retries and timeouts, real-time alerts via SMS. Cut manual monitoring by 90%+.',
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'SMS API'],
  },
  {
    Icon: MedIcon,
    title: "Alzheimer's Detection — ML",
    link: 'https://github.com/manjari19/alzheimers',
    desc: 'End-to-end ML pipeline classifying Alzheimer\'s from cognitive and clinical features. Tried Logistic Regression, Random Forest, and SVM, tuned hyperparameters, and documented everything with visualizations so the results are actually interpretable.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy'],
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" ref={ref}>
      <div className="section-header reveal">
        <div className="label">Projects</div>
        <h2 className="section-title">Things I've <em>built.</em></h2>
      </div>

      <div className={styles.grid}>
        {projects.map(({ Icon, title, award, link, live, desc, tags }) => (
          <div key={title} className={`proj-card ${styles.card} reveal`}>
            <div className={styles.top}>
              <div className={styles.icon}><Icon /></div>
              <div className={styles.topLinks}>
                {live && (
                  <a href={live} target="_blank" rel="noreferrer" className={styles.link}>
                    Live <ExtIcon />
                  </a>
                )}
                <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
                  GitHub <ExtIcon />
                </a>
              </div>
            </div>

            <div className={styles.title}>{title}</div>

            {award && (
              <div className={styles.award}>
                <StarIcon /> {award}
              </div>
            )}

            <p className={styles.desc}>{desc}</p>

            <div className={styles.tags}>
              {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
