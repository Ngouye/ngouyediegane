import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { titleCase } from '../utils/text'
import './Footer.css'

export default function Footer({ profile }) {
  const year = new Date().getFullYear()
  const name = titleCase(profile.fullName)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <p className="footer__cta-title serif">
            Besoin d'un profil <em>sécurité</em> dans votre équipe&nbsp;?
          </p>
          <a href="#contact" className="btn footer__cta-btn">Me contacter</a>
        </div>

        <div className="footer__inner">
          <div className="footer__brand">
            <img src="/logo.png" alt="" className="footer__logo" width="70" height="36" />
            <span className="footer__divider" aria-hidden="true" />
            <div>
              <p className="footer__name serif">{name}</p>
              <p className="footer__tagline">Sécurité · Cloud · Automatisation</p>
            </div>
          </div>

          <div className="footer__socials">
            {profile.githubUrl && (
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub size={18} />
              </a>
            )}
            {profile.linkedinUrl && (
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail size={18} />
            </a>
            <a href="#accueil" className="footer__top" aria-label="Retour en haut">
              <FiArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} {name}. Tous droits réservés.</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  )
}
