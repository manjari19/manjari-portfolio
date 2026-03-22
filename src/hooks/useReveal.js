import { useEffect, useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reveal all .reveal children — rootMargin ensures elements
    // already in viewport on load fire immediately
    const reveals = el.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )
    // Small delay so the observer fires after first paint
    const t = setTimeout(() => reveals.forEach(r => io.observe(r)), 50)

    // Animate skill bars
    const bars = el.querySelectorAll('[data-bar]')
    const barIO = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('bar-visible')
          barIO.unobserve(e.target)
        }
      }),
      { threshold: 0.3 }
    )
    bars.forEach(b => barIO.observe(b))

    return () => {
      clearTimeout(t)
      io.disconnect()
      barIO.disconnect()
    }
  }, [])

  return ref
}
