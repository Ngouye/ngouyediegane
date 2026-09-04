import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'
import './Footer.css'

export default function Footer({ profile }) {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo.png?v=2" alt="Kalimaster Ngouye Gning" className="footer__logo-img" />
            <div>
              <p className="footer__name">{profile?.fullName}</p>
              <p className="footer__tagline">DevSecOps Engineer</p>
            </div>
          </div>

          <div className="footer__links">
            <a href="#accueil">Accueil</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__socials">
            {profile?.githubUrl && (
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub size={18} />
              </a>
            )}
            {profile?.linkedinUrl && (
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
            )}
          </div>

          <button className="footer__top-btn" onClick={scrollTop} aria-label="Retour en haut">
            <FiArrowUp size={18} />
          </button>
        </div>

        <div className="footer__bottom">
          <p>© {year} {profile?.fullName || 'NGOUYE GNING'}</p>
          <p className="footer__crafted">
            Crafted with <span>Docker</span> + <span>Kubernetes</span> + <span>AWS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
