import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#devsecops', label: 'DevSecOps' },
  { href: '#ia', label: 'IA' },
  { href: '#devops', label: 'DevOps' },
  { href: '#cybersecurity', label: 'Cyber' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#competences', label: 'Dev' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__pill glass">
        <a href="#accueil" className="navbar__logo">
          <span className="navbar__logo-mark">NDG</span>
          <span className="navbar__logo-text">NGOUYE GNING</span>
        </a>

        <ul id="navbar-menu" className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              {link.href === '#contact' ? (
                <a
                  href={link.href}
                  className={`btn btn-primary navbar__cta ${active === link.href ? 'navbar__link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  className={active === link.href ? 'navbar__link--active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>
    </header>
  )
}
