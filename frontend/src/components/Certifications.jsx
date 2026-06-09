import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './DevSecOpsTools.css'

export default function Certifications({ educations = [], certifications = [] }) {
  const [ref, visible] = useReveal()

  // Convert education entries that look like certifications into a unified format
  const eduCerts = (educations || []).filter((e) =>
    (e.degree || '').toLowerCase().includes('certif') ||
    (e.field || '').toLowerCase().includes('certif') ||
    (e.institution || '').toLowerCase().includes('certif')
  ).map((e, i) => ({
    id: `edu-${i}`,
    name: `${e.degree || e.field}`,
    issuer: e.institution,
    description: e.description,
    issuedDate: e.startDate,
    expiryDate: e.endDate,
    icon: '🎓',
    credentialUrl: null,
    active: true,
  }))

  const allCerts = [...(certifications || []), ...eduCerts]

  if (!allCerts.length) return null

  return (
    <section id="certifications" className="section devsecops-tools">
      <div className="container">
        <SectionHeader
          label="Certifications"
          title={<>Certifications <span>professionnelles</span></>}
          subtitle="Certificats et preuves de compétence — Cloud, Sécurité, IA et opérations."
        />

        <div ref={ref} className={`devsecops-tools__grid reveal ${visible ? 'reveal--visible' : ''}`}>
          {allCerts.map((c) => (
            <div key={c.id} className="devsecops-tools__category card" style={{ '--cat-color': '#60a5fa' }}>
              <div className="devsecops-tools__cat-header">
                <div>
                  <h3>{c.name}</h3>
                  {c.issuer && <p>{c.issuer}</p>}
                </div>
                <span className="devsecops-tools__count">{c.issuedDate ? new Date(c.issuedDate).getFullYear() : ''}</span>
              </div>
              <div className="devsecops-tool">
                <div className="devsecops-tool__info">
                  {c.description && <span className="devsecops-tool__desc">{c.description}</span>}
                  {c.credentialUrl && (
                    <a href={c.credentialUrl} target="_blank" rel="noreferrer" className="devsecops-tool__link">Vérifier la preuve</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
