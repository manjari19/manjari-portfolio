import { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal.js'
import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Python',       pct: 92 },
      { name: 'JavaScript',   pct: 85 },
      { name: 'HTML & CSS',   pct: 88 },
      { name: 'TypeScript',   pct: 74 },
      { name: 'C / C++',      pct: 70 },
      { name: 'MySQL',        pct: 68 },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'React',          pct: 84 },
      { name: 'Next.js',        pct: 72 },
      { name: 'Scikit-Learn',   pct: 78 },
      { name: 'Pandas / NumPy', pct: 80 },
      { name: 'Selenium',       pct: 75 },
      { name: 'TailwindCSS',    pct: 76 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git / GitHub', pct: 88 },
      { name: 'Firebase',     pct: 74 },
      { name: 'REST APIs',    pct: 84 },
      { name: 'Netlify',      pct: 78 },
      { name: 'Node.js',      pct: 70 },
      { name: 'Linux / Unix', pct: 72 },
    ],
  },
  {
    title: 'Other',
    items: [
      { name: 'UI/UX Accessibility', pct: 86 },
      { name: 'Responsive Design',   pct: 87 },
      { name: 'API Integration',     pct: 84 },
      { name: 'Data Visualization',  pct: 76 },
      { name: 'Technical Docs',      pct: 74 },
    ],
  },
]

function SkillBar({ name, pct }) {
  const barRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.transform = 'scaleX(1)'; io.unobserve(el) } },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className={styles.skillItem}>
      <div className={styles.skillName}>{name}</div>
      <div className={styles.barWrap}>
        <div
          ref={barRef}
          className={styles.bar}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref}>
      <div className="section-header reveal">
        <div className="label">Skills</div>
        <h2 className="section-title">What I <em>work with.</em></h2>
      </div>

      <div className={styles.cols}>
        {skillGroups.map(({ title, items }) => (
          <div key={title} className={`skill-group ${styles.group} reveal`}>
            <div className={styles.groupTitle}>{title}</div>
            <div className={styles.list}>
              {items.map(({ name, pct }) => (
                <SkillBar key={name} name={name} pct={pct} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
