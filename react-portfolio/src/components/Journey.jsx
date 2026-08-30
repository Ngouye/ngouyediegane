import { FiBriefcase, FiBookOpen } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './Journey.css'

function formatPeriod(start, end, current) {
  const fmt = (d) => {
    if (!d) return ''
    const [y, m] = d.split('-')
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
    return `${months[parseInt(m, 10) - 1]} ${y}`
  }
  return `${fmt(start)} — ${current ? 'Présent' : fmt(end)}`
}

export default function Journey({ experiences, educations }) {
  const [ref, visible] = useReveal()

  return (
    <section id="parcours" className="section journey">
      <div className="container">
        <SectionHeader
          label="05 — Parcours"
          title={<>Mon <span>évolution</span></>}
          subtitle="Expériences professionnelles et formations qui ont façonné mon parcours."
        />

        <div ref={ref} className={`journey__grid reveal ${visible ? 'reveal--visible' : ''}`}>
          <div className="journey__col">
            <div className="journey__col-header">
              <FiBriefcase />
              <h3>Expérience</h3>
            </div>
            <div className="journey__timeline">
              {experiences?.map((exp, i) => (
                <div key={exp.id} className={`journey__item card reveal-delay-${i + 1}`}>
                  <div className="journey__item-marker" />
                  <span className="journey__period">
                    {formatPeriod(exp.startDate, exp.endDate, exp.current)}
                  </span>
                  {exp.current && <span className="journey__live">En cours</span>}
                  <h4>{exp.role}</h4>
                  <p className="journey__org">{exp.company}</p>
                  <p className="journey__loc">{exp.location}</p>
                  <p className="journey__desc">{exp.description}</p>
                  {exp.achievements?.length > 0 && (
                    <ul className="journey__achievements">
                      {exp.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="journey__col">
            <div className="journey__col-header">
              <FiBookOpen />
              <h3>Formation</h3>
            </div>
            <div className="journey__timeline">
              {educations?.map((edu, i) => (
                <div key={edu.id} className={`journey__item card journey__item--edu reveal-delay-${i + 1}`}>
                  <div className="journey__item-marker journey__item-marker--edu" />
                  <span className="journey__period">
                    {formatPeriod(edu.startDate, edu.endDate, false)}
                  </span>
                  <h4>{edu.degree}</h4>
                  <p className="journey__org">{edu.field}</p>
                  <p className="journey__loc">{edu.institution} · {edu.location}</p>
                  <p className="journey__desc">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
