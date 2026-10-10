import { FiDownload, FiEye } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import ToolTag from './ToolTag'
import { useReveal } from '../hooks/useReveal'
import './Resumes.css'

export default function Resumes({ resumes }) {
  const [ref, visible] = useReveal()

  if (!resumes.length) return null

  return (
    <section id="cv" className="section">
      <div className="container">
        <SectionHeader
          label="CV"
          title={<>Un CV adapté à <em>chaque poste.</em></>}
          subtitle="Trois versions de mon CV selon le profil recherché. Consultez-les en ligne ou téléchargez-les au format PDF."
        />

        <div ref={ref} className={`resumes__grid stagger ${visible ? 'is-visible' : ''}`}>
          {resumes.map((resume, i) => (
            <article key={resume.id} className="resume-card lift" style={{ '--i': i }}>
              <a
                href={resume.file}
                target="_blank"
                rel="noreferrer"
                className="resume-card__preview"
                aria-label={`Consulter le CV ${resume.title} (PDF)`}
              >
                <img src={resume.preview} alt="" loading="lazy" width="720" height="1018" />
                <span className="resume-card__badge">PDF</span>
              </a>

              <div className="resume-card__body">
                <span className="eyebrow">{resume.subtitle}</span>
                <h3>{resume.title}</h3>
                <p>{resume.summary}</p>
                <div className="tag-list">
                  {resume.tools.map((tool) => <ToolTag key={tool} name={tool} />)}
                </div>
                <div className="resume-card__actions">
                  <a href={resume.file} className="btn btn-primary" download>
                    <FiDownload size={17} /> Télécharger
                  </a>
                  <a href={resume.file} className="btn btn-outline" target="_blank" rel="noreferrer">
                    <FiEye size={17} /> Consulter
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
