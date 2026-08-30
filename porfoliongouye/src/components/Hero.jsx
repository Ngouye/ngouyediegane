import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload, FiArrowRight } from 'react-icons/fi'
import Marquee from './Marquee'
import './Hero.css'

export default function Hero({ profile, skills, stats }) {
  if (!profile) return null

  const techItems = skills
    ?.filter((s) => s.category !== 'Développement')
    .map((s) => s.name)
    .slice(0, 16) || ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'OWASP ZAP', 'Trivy']

  const metrics = [
    { value: stats?.projects ?? '7+', label: 'Projets' },
    { value: stats?.certifications ?? '5', label: 'Certifications' },
    { value: stats?.skills ?? '40+', label: 'Compétences' },
    { value: 'SOC', label: 'Spécialité' },
  ]

  const avatarSrc = '/ngouye.png'
  const fallbackAvatar = '/avatar.svg'

  return (
    <section id="accueil" className="hero">
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Disponible — recrutement & missions
          </div>

          <p className="hero__eyebrow">Portfolio professionnel · DevSecOps & Cybersécurité</p>

          <h1 className="hero__title">
            <span className="hero__title-name text-gradient">{profile.fullName}</span>
          </h1>

          <p className="hero__role">{profile.title}</p>

          <p className="hero__pitch">
            Je sécurise et automatise des infrastructures cloud — pipelines CI/CD, détection de menaces,
            pentest et durcissement Zero Trust pour des équipes qui livrent vite, sans compromis.
          </p>

          <div className="hero__metrics">
            {metrics.map((m) => (
              <div key={m.label} className="hero__metric">
                <span className="hero__metric-value">{m.value}</span>
                <span className="hero__metric-label">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#projets" className="btn btn-primary btn-glow">
              Voir mes projets <FiArrowRight size={18} />
            </a>
            {profile.cvUrl && profile.cvUrl !== '#' && (
              <a href={profile.cvUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
                <FiDownload size={18} /> Télécharger le CV
              </a>
            )}
            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>
          </div>

          <div className="hero__socials">
            {profile.githubUrl && (
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hero__social" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
            )}
            {profile.linkedinUrl && (
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hero__social" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
            )}
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="hero__social" aria-label="Email">
                <FiMail size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <div className="hero__frame-border" aria-hidden="true" />
            <img
              src={avatarSrc}
              alt={profile.fullName}
              className="hero__avatar"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = fallbackAvatar
              }}
            />
            <div className="hero__float hero__float--1">
              <span className="hero__float-icon">🛡️</span>
              <div>
                <span className="hero__float-label">Sécurité</span>
                <span className="hero__float-value">SAST · DAST · SCA</span>
              </div>
            </div>
            <div className="hero__float hero__float--2">
              <span className="hero__float-icon">☁️</span>
              <div>
                <span className="hero__float-label">Cloud</span>
                <span className="hero__float-value">AWS · K8s · Terraform</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__marquee">
        <Marquee items={techItems} />
      </div>

      <a href="#apropos" className="hero__scroll" aria-label="Défiler">
        <span className="hero__scroll-text">Explorer</span>
        <FiArrowDown size={16} />
      </a>
    </section>
  )
}
