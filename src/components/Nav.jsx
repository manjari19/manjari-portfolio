import styles from './Nav.module.css'

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
  </svg>
)

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM4.22 5.64a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 1 1-1.41 1.42L4.22 7.06a1 1 0 0 1 0-1.42zm12.72 12.72a1 1 0 0 1 1.41 0l1.41 1.41a1 1 0 0 1-1.41 1.42l-1.41-1.42a1 1 0 0 1 0-1.41zM1 13h2a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm20 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zM5.63 17.95l1.42-1.41a1 1 0 1 1 1.41 1.41l-1.41 1.42a1 1 0 0 1-1.42-1.42zM18.36 5.64l-1.41 1.41a1 1 0 0 1-1.41-1.41l1.41-1.41a1 1 0 0 1 1.41 1.41z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
)

export default function Nav({ theme, setTheme }) {
  const isDark = theme === 'dark'

  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>MP<span>.</span></a>
      <div className={styles.right}>
        <ul className={styles.links}>
          {['about','projects','skills','experience','contact'].map(id => (
            <li key={id}><a href={`#${id}`}>{id}</a></li>
          ))}
        </ul>
        <a href="https://github.com/manjari19" target="_blank" rel="noreferrer" className={styles.ghLink}>
          <GitHubIcon />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.resumeBtn}>
          Resume
        </a>
        <button
          className={styles.toggle}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label="Toggle theme"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className={`${styles.toggleTrack} ${isDark ? styles.dark : styles.light}`}>
            <span className={styles.toggleThumb}>
              {isDark ? <MoonIcon /> : <SunIcon />}
            </span>
          </span>
        </button>
      </div>
    </nav>
  )
}