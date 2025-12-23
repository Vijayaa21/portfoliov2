import '../styles/globals.css'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // If user prefers reduced motion, reveal everything immediately
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return <Component {...pageProps} />
}
