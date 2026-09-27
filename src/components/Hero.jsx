import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiAward, FiBriefcase, FiLayers, FiBookOpen, FiMapPin } from 'react-icons/fi'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { getExpertiseIcon } from './expertiseIcons'
import { titleCase } from '../utils/text'
import { ToolIcon } from './ToolTag'
import './Hero.css'

const STAT_ICONS = [FiAward, FiBriefcase, FiLayers]

function Stat({ value, label, hint, run, index }) {
  const display = useCountUp(value, run)
  const Icon = STAT_ICONS[index % STAT_ICONS.length]
  return (
    <li className="hero__trust-item hero-in" style={{ '--d': 7 + index }}>
      <span className="hero__trust-icon" aria-hidden="true"><Icon size={18} /></span>
      <span>
        <strong>{display} {label}</strong>
        <span>{hint}</span>
      </span>
    </li>
  )
}

export default function Hero({ profile, stats, features }) {
  const [trustRef, trustVisible] = useReveal()
  const [bandRef, bandVisible] = useReveal()
  const fullName = titleCase(profile.fullName)
  const nameParts = fullName.split(' ')
  const shortName = nameParts.length > 2 ? `${nameParts[0]} ${nameParts.at(-1)}` : fullName

  return (
    <section id="accueil" className="hero">
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero-in" style={{ '--d': 0 }}>
            Analyste SOC &amp; DevSecOps · {profile.location}
          </p>

          <h1 className="hero__title serif">
            <span className="hero__line"><span style={{ '--d': 1 }}>{shortName}.</span></span>
            <span className="hero__line"><em style={{ '--d': 2 }}>Sécurité &amp; Cloud.</em></span>
          </h1>

          <p className="hero__pitch hero-in" style={{ '--d': 4 }}>
            Je sécurise et automatise des infrastructures cloud : pipelines CI/CD sécurisés,
            détection de menaces et durcissement Zero Trust, pour des équipes qui livrent vite
            sans compromis sur la sécurité.
          </p>

          <div className="hero__actions hero-in" style={{ '--d': 5 }}>
            <a href="#projets" className="btn btn-primary">
              Voir mes projets <FiArrowRight size={18} className="btn__arrow" />
            </a>
            {profile.cvUrl ? (
              <a href={profile.cvUrl} className="btn btn-outline" download>
                <FiDownload size={18} /> Télécharger le CV
              </a>
            ) : (
              <a href="#contact" className="btn btn-outline">Me contacter</a>
            )}
          </div>

          <ul ref={trustRef} className="hero__trust" aria-label="En bref">
            {stats.map((s, i) => (
              <Stat key={s.label} {...s} run={trustVisible} index={i} />
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <figure className="hero__portrait">
            <img
              src={profile.avatarUrl}
              alt={`Portrait de ${profile.fullName}`}
              width="391"
              height="638"
              fetchPriority="high"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/avatar.svg'
              }}
            />
          </figure>

          {profile.availability && (
            <p className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              {profile.availability}
            </p>
          )}

          <div className="hero__id-card">
            <p className="hero__id-name serif">{fullName}</p>
            <p className="hero__id-role">Analyste SOC · DevSecOps</p>
            <ul className="hero__id-list">
              <li><FiBookOpen aria-hidden="true" /> Étudiant en {profile.degree}, {profile.school}</li>
              <li><FiMapPin aria-hidden="true" /> {profile.location}</li>
            </ul>
            <ul className="hero__id-socials" aria-label="Réseaux">
              {profile.githubUrl && (
                <li>
                  <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub size={16} />
                  </a>
                </li>
              )}
              {profile.linkedinUrl && (
                <li>
                  <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FiLinkedin size={16} />
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <FiMail size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <ul ref={bandRef} className={`hero__band stagger ${bandVisible ? 'is-visible' : ''}`}>
          {features.map((f, i) => {
            const Icon = getExpertiseIcon(f.icon)
            return (
              <li key={f.id} className="hero__feature" style={{ '--i': i }}>
                <span className="hero__feature-icon" aria-hidden="true"><Icon size={20} /></span>
                <span>
                  <strong>{f.title}</strong>
                  <span className="hero__feature-tools">
                    {f.tags.slice(0, 3).map((t) => (
                      <span key={t}><span className="hero__feature-logo"><ToolIcon name={t} size={14} /></span>{t}</span>
                    ))}
                  </span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
