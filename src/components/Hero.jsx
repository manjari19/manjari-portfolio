import styles from './Hero.module.css'

const PHOTO_SRC = '/manjari.jpg'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
)
const GHIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
)
const ExtIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
)
const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
  </svg>
)

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridBg} />

      <div className={styles.left}>
        <div className={styles.eyebrow}>
          Open to internships & co-ops · Available Summer 2026
        </div>

        <h1 className={styles.name}>
          Manjari<br /><span className={styles.italic}>Prasad</span>
        </h1>

        <div className={styles.chips}>
          {["Software Engineer", "SFU CS '27", "Coquitlam, BC"].map(c => (
            <span key={c} className={styles.chip}>{c}</span>
          ))}
        </div>

        <p className={styles.sub}>
          I started coding and quickly went beyond what was taught. That hasn’t changed. I build products that solve real problems and feel polished enough that people actually want to use them.
        </p>

        <div className={styles.ctas}>
          <a href="#projects" className="btn-primary"><ArrowIcon /> View Projects</a>
          <a href="#contact"  className="btn-outline">Get in Touch</a>
          <a href="https://github.com/manjari19" target="_blank" rel="noreferrer" className="btn-outline">
            <GHIcon /> GitHub <ExtIcon />
          </a>
        </div>

        <div className={styles.scroll}>
          <div className={styles.scrollBar} />
          Scroll to explore
        </div>
      </div>

      <div className={styles.right}>
        {PHOTO_SRC ? (
          <img src={PHOTO_SRC} alt="Manjari Prasad" className={styles.photo} />
        ) : (
          <div className={styles.photoPlaceholder}>
            <PersonIcon />
            <span>Drop your photo in <code>/public</code> and set <code>PHOTO_SRC</code> in Hero.jsx</span>
          </div>
        )}
      </div>
    </section>
  )
}