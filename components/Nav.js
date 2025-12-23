import { useState, useEffect } from 'react'

export default function Nav(){
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('sky')

  useEffect(()=>{
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
      return
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = prefersDark ? 'night' : 'sky'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'night' ? 'sky' : 'night'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch (e){}
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="nav-inner">
        <div className="brand">
          <a href="#home">Your Name</a>
        </div>
        <nav className={`main-nav ${open? 'open':''}`} aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#opensource">Open Source</a>
          <a href="#links">Links</a>
        </nav>

        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={theme === 'night'}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'night' ? (
              /* sun icon */
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="12" r="4" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M4 12H2" />
                  <path d="M22 12h-2" />
                  <path d="M5 5L3.5 3.5" />
                  <path d="M20.5 20.5L19 19" />
                  <path d="M5 19L3.5 20.5" />
                  <path d="M20.5 3.5L19 5" />
                </g>
              </svg>
            ) : (
              /* moon icon */
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" fill="currentColor" />
              </svg>
            )}
          </button>

          <button className="menu-toggle" aria-expanded={open} onClick={()=>setOpen(!open)} aria-label="Toggle menu">
            <span className="menu-icon" />
          </button>
        </div>
      </div>
    </header>
  )
}
