import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiZap, FiShield } from 'react-icons/fi'
import Marquee from './Marquee'
import './Hero.css'

export default function Hero({ profile, skills }) {
  if (!profile) return null

  const devSecOpsTools = [
    'OWASP ZAP', 'Burp Suite', 'Nuclei', 'Bearer', 'Checkov',
    'Gitleaks', 'Trivy', 'Docker', 'Kubernetes', 'Terraform',
  ]
  const techItems = skills
    ?.filter((s) => s.category !== 'Développement')
    .map((s) => s.name) || devSecOpsTools

  const nameParts = profile.fullName.split(' ')

  const highlights = [
    { label: 'DevSecOps', value: 'M2' },
    { label: 'Cloud', value: 'AWS' },
    { label: 'Security', value: 'SAST·DAST·SCA' },
  ]

  const avatarSrc = '/ngouye.png'
  const fallbackAvatar = '/avatar.svg'

  return (
    <section id="accueil" className="hero">
      <div className="hero__spotlight" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__status">
            <span className="hero__status-dot" />
            <FiZap size={12} />
            Disponible pour de nouveaux projets
          </div>

          <p className="hero__eyebrow">
            <FiShield size={14} />
            Administrateur Système & Cloud | DevSecOps & AI
          </p>

          <h1 className="hero__title">
            <span className="hero__title-line">Bonjour,</span>
            <span className="hero__title-line hero__title-line--gradient text-gradient">
              je suis {nameParts[0]}
            </span>
            {nameParts[1] && (
              <span className="hero__title-line hero__title-outline">
                {nameParts.slice(1).join(' ')}
              </span>
            )}
          </h1>

          <p className="hero__role">{profile.title}</p>
          <p className="hero__bio">{profile.bio}</p>

          <div className="hero__highlights">
            {highlights.map((h) => (
              <div key={h.label} className="hero__highlight glass">
                <span className="hero__highlight-label">{h.label}</span>
                <span className="hero__highlight-value">{h.value}</span>
              </div>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#projets" className="btn btn-primary">
              Explorer mes projets
            </a>
            <a href="#cybersecurity" className="btn btn-secondary">
              Voir mon portfolio cyber
            </a>
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
          <div className="hero__orbit" aria-hidden="true">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="hero__orbit-dot" style={{ '--i': i }} />
            ))}
          </div>
          <div className="hero__frame">
            <div className="hero__frame-glow" />
            <div className="hero__frame-ring hero__frame-ring--1" />
            <div className="hero__frame-ring hero__frame-ring--2" />
            <div className="hero__frame-ring hero__frame-ring--3" />
            <img
              src={avatarSrc}
              alt={profile.fullName}
              className="hero__avatar"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = fallbackAvatar
              }}
            />
            <div className="hero__card glass">
              <span className="hero__card-label">CI/CD</span>
              <span className="hero__card-value">CodePipeline</span>
            </div>
            <div className="hero__card hero__card--2 glass">
              <span className="hero__card-label">Stack</span>
              <span className="hero__card-value">K8s · AWS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__marquee">
        <Marquee items={techItems} />
      </div>

      <a href="#apropos" className="hero__scroll glass" aria-label="Défiler">
        <span className="hero__scroll-text">Scroll</span>
        <FiArrowDown size={18} />
      </a>
    </section>
  )
}
