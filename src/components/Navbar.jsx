import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const links = [
  { href: '#apropos', label: 'À propos' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#certifications', label: 'Certifications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const listRef = useRef(null)
  const indicatorRef = useRef(null)
  const progressRef = useRef(null)

  // État « scrollé » + barre de progression (mise à jour directe du DOM, sans re-render)
  useEffect(() => {
    let frame = null
    const update = () => {
      frame = null
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? window.scrollY / max : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`
      setScrolled(window.scrollY > 8)
    }
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  useEffect(() => {
    const sections = [...links, { href: '#contact' }]
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Pastille qui glisse sous le lien actif (bureau uniquement)
  useLayoutEffect(() => {
    const place = () => {
      const indicator = indicatorRef.current
      const link = listRef.current?.querySelector(`.navbar__link[href="${active}"]`)
      if (!indicator) return
      if (!link) {
        indicator.style.opacity = '0'
        return
      }
      indicator.style.opacity = '1'
      indicator.style.width = `${link.offsetWidth - 24}px`
      indicator.style.top = `${link.offsetTop + link.offsetHeight - 4}px`
      indicator.style.transform = `translateX(${link.offsetLeft + 12}px)`
    }
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [active])

  const close = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <nav className="container navbar__inner" aria-label="Navigation principale">
        <a href="#accueil" className="navbar__brand" onClick={close}>
          <img src="/logo.png" alt="" className="navbar__logo" width="70" height="36" />
          <span className="navbar__brand-text">
            <span className="navbar__name">Ngouye Gning</span>
            <span className="navbar__tagline">SOC · DevSecOps · Cloud</span>
          </span>
        </a>

        <ul ref={listRef} id="navbar-menu" className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li ref={indicatorRef} className="navbar__indicator" aria-hidden="true" />
          {links.map((link, i) => (
            <li key={link.href} style={{ '--i': i }}>
              <a
                href={link.href}
                className={`navbar__link ${active === link.href ? 'navbar__link--active' : ''}`}
                aria-current={active === link.href ? 'true' : undefined}
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-item" style={{ '--i': links.length }}>
            <a href="#contact" className="btn btn-primary navbar__cta" onClick={close}>
              Me contacter
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="navbar__burger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>
      <div ref={progressRef} className="navbar__progress" aria-hidden="true" />
    </header>
  )
}
