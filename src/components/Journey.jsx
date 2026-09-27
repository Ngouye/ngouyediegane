import { FiBriefcase, FiBookOpen } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import { formatMonth } from '../utils/date'
import './Journey.css'

function formatPeriod(start, end, current) {
  return `${formatMonth(start)} — ${current ? "aujourd'hui" : formatMonth(end)}`
}

export default function Journey({ experiences, educations }) {
  const [ref, visible] = useReveal()

  return (
    <section id="parcours" className="section">
      <div className="container">
        <SectionHeader
          label="Parcours"
          title={<>Un parcours construit <em>pas à pas.</em></>}
        />

        <div ref={ref} className={`journey__grid reveal ${visible ? 'reveal--visible' : ''}`}>
          <div className="journey__col card">
            <h3 className="journey__heading"><FiBriefcase aria-hidden="true" /> Expérience</h3>
            <ol className={`timeline stagger ${visible ? 'is-visible' : ''}`}>
              {experiences.map((exp, i) => (
                <li key={exp.id} className="timeline__item" style={{ '--i': i + 1 }}>
                  <span className="timeline__period">
                    {formatPeriod(exp.startDate, exp.endDate, exp.current)}
                    {exp.current && <span className="timeline__live">En cours</span>}
                  </span>
                  <h4>{exp.role}</h4>
                  <p className="timeline__org">{exp.company} · {exp.location}</p>
                  <p className="timeline__desc">{exp.description}</p>
                  {exp.achievements?.length > 0 && (
                    <ul className="timeline__achievements">
                      {exp.achievements.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="journey__col card">
            <h3 className="journey__heading"><FiBookOpen aria-hidden="true" /> Formation</h3>
            <ol className={`timeline stagger ${visible ? 'is-visible' : ''}`}>
              {educations.map((edu, i) => (
                <li key={edu.id} className="timeline__item" style={{ '--i': i + 1 }}>
                  <span className="timeline__period">
                    {formatPeriod(edu.startDate, edu.endDate, edu.current)}
                    {edu.current && <span className="timeline__live">En cours</span>}
                  </span>
                  <h4>{edu.degree} — {edu.field}</h4>
                  <p className="timeline__org">{edu.institution} · {edu.location}</p>
                  <p className="timeline__desc">{edu.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
