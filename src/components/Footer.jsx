import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Manjari Prasad <span className={styles.dot}>·</span> Coquitlam, BC</p>
      <p>Built with React <span className={styles.dot}>+</span> Vite</p>
    </footer>
  )
}
