import useReveal from '../hooks/useReveal.js'
import styles from './About.module.css'

const MLIcon    = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm1 14h-2v-5H8v-2h3V8h2v2h3v2h-3v5z"/></svg>
const A11yIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>
const MusicIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>

const stats = [
  { num: '4',       lbl: 'Languages Spoken', tooltip: 'English, Japanese, Malayalam, Tamil' },
  { num: '2',       lbl: 'Hackathon Awards' },
  { num: '21',      lbl: 'GitHub Repos'     },
  { num: "Jun '27", lbl: 'Graduation'       },
]

const interests = [
  { Icon: MLIcon,    text: 'Machine Learning & AI'            },
  { Icon: A11yIcon,  text: 'Accessibility & Inclusive Design'  },
  { Icon: MusicIcon, text: 'Piano & Music Composition'        },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref}>
      <div className="reveal">
        <div className="section-header">
          <div className="label">About Me</div>
          <h2 className="section-title">Curious by nature,<br /><em>builder by choice.</em></h2>
        </div>
      </div>

      <div className={`${styles.grid} reveal`}>
        {/* ── LEFT: bio text ── */}
        <div className={styles.text}>
          <p>
            I&apos;m a second-year CS student at <strong>Simon Fraser University</strong>, graduating June 2027.
            I grew up between India and Japan, which gave me a pretty unique lens — and a strong drive
            to build things that actually work for people with different backgrounds and needs.
          </p>
          <p>
            I started coding in high school and immediately went off-script — learning things way past
            what the curriculum covered just because I <span className={styles.hl}>couldn&apos;t stop</span>.
            That same tendency shows up in my projects: I&apos;m drawn to problems that feel unsolved,
            whether that&apos;s making financial literacy accessible to kids, reducing food waste through
            computer vision, or designing apps where accessibility is the core feature, not a checkbox.
          </p>
          <p>
            When I&apos;m not writing code, I&apos;m at the piano — composing mostly. Both feel like the same
            thing to me: you start with constraints and try to make something that feels <em>right</em>.
          </p>
        </div>

        {/* ── RIGHT: stats + interests ── */}
        <div className={styles.right}>
          <div className={styles.statsGrid}>
            {stats.map(({ num, lbl, tooltip }) => (
              <div key={lbl} className={`stat-card ${styles.stat}`} title={tooltip || ''}>
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLbl}>{lbl}</div>
              </div>
            ))}
          </div>
          <div className={styles.interests}>
            {interests.map(({ Icon, text }) => (
              <div key={text} className={`interest-item ${styles.interest}`}>
                <Icon />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}