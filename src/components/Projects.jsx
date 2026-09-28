import { useState } from 'react'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import Modal from './Modal'
import ToolTag from './ToolTag'
import { useReveal } from '../hooks/useReveal'
import { formatMonth } from '../utils/date'
import './Projects.css'

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('Tous')
  const [selected, setSelected] = useState(null)
  const [ref, visible] = useReveal()

  const categories = ['Tous', ...new Set(projects.map((p) => p.category))]
  const filtered = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projets" className="section section--soft">
      <div className="container">
        <SectionHeader
          label="Projets"
          title={<>Des projets concrets, <em>du code à la prod.</em></>}
          subtitle="Du concept au déploiement : des projets qui illustrent mon approche de la sécurité et de l'automatisation."
        />

        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filter === cat}
              className={`projects__filter ${filter === cat ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={ref} className={`projects__grid stagger ${visible ? 'is-visible' : ''}`}>
          {filtered.map((project, i) => (
            <article key={`${filter}-${project.id}`} className="project-card" style={{ '--i': i }}>
              <button
                type="button"
                className="project-card__button spotlight"
                onClick={() => setSelected(project)}
                aria-label={`Voir le détail du projet ${project.title}`}
              >
                <div className="project-card__image">
                  <img src={project.imageUrl} alt="" loading="lazy" />
                  {project.featured && <span className="project-card__badge">À la une</span>}
                </div>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className="eyebrow">{project.category}</span>
                    {project.startDate && (
                      <span className="project-card__date">{formatMonth(project.startDate)}</span>
                    )}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <ToolTag key={tech} name={tech} />
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tag">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  <span className="project-card__more">
                    Voir le détail <FiArrowUpRight size={16} className="btn__arrow" />
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>

        {selected && (
          <Modal title={selected.title} onClose={() => setSelected(null)}>
            <img className="project-modal__image" src={selected.imageUrl} alt="" />
            <div className="project-modal__body">
              <div className="project-card__meta">
                <span className="eyebrow">{selected.category}</span>
                {selected.startDate && (
                  <span className="project-card__date">
                    {formatMonth(selected.startDate)} — {selected.endDate ? formatMonth(selected.endDate) : 'En cours'}
                  </span>
                )}
              </div>
              <h3 className="project-modal__title">{selected.title}</h3>
              <p className="project-modal__desc">{selected.longDescription || selected.description}</p>
              <div className="tag-list">
                {selected.technologies.map((tech) => <ToolTag key={tech} name={tech} />)}
              </div>
              {(selected.githubUrl || selected.demoUrl) && (
                <div className="project-modal__actions">
                  {selected.demoUrl && (
                    <a href={selected.demoUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                      <FiExternalLink /> Voir le site
                    </a>
                  )}
                  {selected.githubUrl && (
                    <a href={selected.githubUrl} className="btn btn-outline" target="_blank" rel="noreferrer">
                      <FiGithub /> Code source
                    </a>
                  )}
                </div>
              )}
            </div>
          </Modal>
        )}
      </div>
    </section>
  )
}
