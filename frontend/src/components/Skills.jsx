import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './Skills.css'

export default function Skills({ skills }) {
  const [ref, visible] = useReveal()

  const devSkills = skills?.filter((s) => s.category === 'Développement') || []
  if (!devSkills.length) return null

  return (
    <section id="competences" className="section skills">
      <div className="container">
        <SectionHeader
          label="03 — Développement"
          title={<>Stack <span>dev</span></>}
          subtitle="Complément technique pour construire les applications déployées via les pipelines DevSecOps."
        />

        <div ref={ref} className={`skills__grid reveal ${visible ? 'reveal--visible' : ''}`}>
          {devSkills.map((skill, i) => (
            <div key={skill.id} className={`skill-card card reveal-delay-${(i % 4) + 1}`}>
              <span className="skill-card__icon">{skill.icon}</span>
              <div className="skill-card__body">
                <h4>{skill.name}</h4>
                {skill.description && <p>{skill.description}</p>}
              </div>
              <div className="skill-card__level">
                <span>{skill.level}%</span>
                <div className="skill-card__bar">
                  <div className="skill-card__fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
