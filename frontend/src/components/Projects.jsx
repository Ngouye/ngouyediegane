import { useState } from 'react'
import { FiGithub, FiExternalLink, FiStar, FiX, FiArrowUpRight } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './Projects.css'

const categories = ['Tous', 'DevSecOps', 'Cloud', 'Full Stack']

function formatDate(dateStr) {
  if (!dateStr) return ''
  const [year, month] = dateStr.split('-')
  const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
  return `${months[parseInt(month, 10) - 1]} ${year}`
}

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('Tous')
  const [selected, setSelected] = useState(null)
  const [ref, visible] = useReveal()

  if (!projects?.length) return null

  const filtered = filter === 'Tous'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="projets" className="section projects">
      <div className="container">
        <SectionHeader
          label="04 — Projets"
          title={<>Mes <span>réalisations</span></>}
          subtitle="Du concept au déploiement — une sélection de projets qui illustrent mes compétences."
        />

        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter ${filter === cat ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={ref} className={`projects__grid reveal ${visible ? 'reveal--visible' : ''}`}>
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className={`project-card card ${project.featured ? 'project-card--featured' : ''} reveal-delay-${(i % 4) + 1}`}
              onClick={() => setSelected(project)}
            >
              <div className="project-card__image">
                <img src={project.imageUrl} alt={project.title} loading="lazy" />
                <div className="project-card__overlay">
                  <span className="project-card__view">Voir détails <FiArrowUpRight /></span>
                </div>
                {project.featured && (
                  <span className="project-card__badge">
                    <FiStar size={11} /> Featured
                  </span>
                )}
              </div>
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="tag">{project.category}</span>
                  <span className="project-card__num">0{project.id}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__techs">
                  {project.technologies?.slice(0, 3).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                  {(project.technologies?.length || 0) > 3 && (
                    <span>+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {selected && (
          <div className="project-modal" onClick={() => setSelected(null)}>
            <div className="project-modal__content card" onClick={(e) => e.stopPropagation()}>
              <button className="project-modal__close" onClick={() => setSelected(null)}>
                <FiX size={20} />
              </button>
              <div className="project-modal__hero">
                <img src={selected.imageUrl} alt={selected.title} />
                <div className="project-modal__hero-overlay" />
              </div>
              <div className="project-modal__body">
                <div className="project-modal__meta">
                  <span className="tag">{selected.category}</span>
                  <span className="project-modal__dates">
                    {formatDate(selected.startDate)} — {selected.endDate ? formatDate(selected.endDate) : 'En cours'}
                  </span>
                </div>
                <h2>{selected.title}</h2>
                <p>{selected.longDescription || selected.description}</p>
                <div className="project-modal__techs">
                  {selected.technologies?.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
                <div className="project-modal__actions">
                  {selected.githubUrl && (
                    <a href={selected.githubUrl} className="btn btn-outline" target="_blank" rel="noreferrer">
                      <FiGithub /> Code source
                    </a>
                  )}
                  {selected.demoUrl && (
                    <a href={selected.demoUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                      <FiExternalLink /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
