import useReveal from '../hooks/useReveal.js'
import styles from './Experience.module.css'

const experience = [
  {
    date: 'Apr 2024 – Present',
    role: 'Assistant Teacher',
    org: 'Kumon Canada, New Westminster, BC',
    bullets: [
      'Built individualized learning plans using weekly performance data. Learned quickly that one-size-fits-all does not work in practice.',
      'Tracked student progress and attendance, keeping records accurate enough to identify patterns over time.',
    ],
  },
  {
    date: 'Jul – Aug 2025',
    role: 'Assistant Teacher',
    org: 'Miller Park Elementary, Coquitlam, BC',
    bullets: [
      'Designed math exercises at different difficulty levels, which required understanding where each student was instead of following a fixed script.',
      'Supported classroom management and helped build routines that students could follow consistently.',
    ],
  },
]

const education = [
  {
    date: 'Expected Jun 2027',
    role: 'Bachelor of Computer Science',
    org: 'Simon Fraser University, Burnaby, BC',
    bullets: [
      'Coursework in algorithms, systems, software engineering, and machine learning, with a strong focus on building through projects.',
      'Previously: India International School in Japan, Tokyo : High School Diploma, Honor Roll (2023).',
    ],
  },
]

function Entry({ date, role, org, bullets }) {
  return (
    <div className={`${styles.item} reveal`}>
      <div className={styles.date}>{date}</div>
      <div className={styles.content}>
        <div className={styles.role}>{role}</div>
        <div className={styles.org}>{org}</div>
        <ul className={styles.bullets}>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" ref={ref}>
      <div className="section-header reveal">
        <div className="label">Experience &amp; Education</div>
        <h2 className="section-title">Where I've <em>been.</em></h2>
      </div>

      <div className={styles.col}>
        <div className={styles.subLabel}>Work</div>
        {experience.map(e => <Entry key={e.role + e.date} {...e} />)}
        <div className={`${styles.subLabel} ${styles.subLabelSpace}`}>Education</div>
        {education.map(e => <Entry key={e.role} {...e} />)}
      </div>
    </section>
  )
}
