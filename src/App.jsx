import { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Detect touch device — cursor is desktop-only
const isTouch = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('mp-theme') || 'dark')
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const raf     = useRef(null)
  const touch   = useRef(isTouch())

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('mp-theme', theme)
  }, [theme])

  // Remove no-transition after first paint so toggles animate normally
  useEffect(() => {
    const r = requestAnimationFrame(() => {
      document.documentElement.classList.remove('no-transition')
    })
    return () => cancelAnimationFrame(r)
  }, [])

  // Cursor — skip entirely on touch devices
  useEffect(() => {
    if (touch.current) return

    const onMove = (e) => { mouse.current.x = e.clientX; mouse.current.y = e.clientY }
    document.addEventListener('mousemove', onMove)

    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14
      if (dotRef.current) {
        dotRef.current.style.left = mouse.current.x + 'px'
        dotRef.current.style.top  = mouse.current.y + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  // Cursor hover effect — desktop only
  useEffect(() => {
    if (touch.current) return
    const onEnter = (e) => { if (e.target.closest('a,button,.proj-card,.stat-card,.skill-group,.contact-link,.interest-item')) document.body.classList.add('cursor-hover') }
    const onLeave = (e) => { if (e.target.closest('a,button,.proj-card,.stat-card,.skill-group,.contact-link,.interest-item')) document.body.classList.remove('cursor-hover') }
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    return () => {
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <>
      {/* Only render cursor elements on non-touch devices */}
      {!touch.current && (
        <>
          <div className="cursor-dot"  ref={dotRef}  />
          <div className="cursor-ring" ref={ringRef} />
        </>
      )}
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <div className="container"><Hero /></div>
        <div className="container"><About /></div>
        <div className="container"><Projects /></div>
        <div className="container"><Skills /></div>
        <div className="container"><Experience /></div>
        <div className="container"><Contact /></div>
      </main>
      <Footer />
    </>
  )
}