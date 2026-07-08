import { useState, useEffect } from 'react'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './Cybersecurity.css'

function slugify(name) {
  return (name || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0000-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function getCertImageUrl(imageUrl, name) {
  const base = import.meta.env.BASE_URL || '/'
  const relativePath = imageUrl ? imageUrl.replace(/^\//, '') : `certs/${slugify(name)}.png`
  return `${base}${relativePath}`
}

export default function Cybersecurity({ data }) {
  const [ref, visible] = useReveal()
  const [expertise, setExpertise] = useState([])
  const [certifications, setCertifications] = useState([])

  useEffect(() => {
    if (data?.cybersecurityExpertise) {
      setExpertise(data.cybersecurityExpertise)
    }
    if (data?.cybersecurityCertifications) {
      setCertifications(data.cybersecurityCertifications)
    }
  }, [data])

  return (
    <section id="cybersecurity" className="section cybersecurity">
      <div className="container">
        <SectionHeader
          label="Portfolio Cybersécurité"
          title={<>Portfolio <span>Cyber</span></>}
          subtitle="Toutes mes compétences en cybersécurité, pentesting, DevSecOps et certifications dédiées."
        />

        {expertise.length > 0 && (
          <div ref={ref} className={`cybersecurity-expertise-grid reveal ${visible ? 'reveal--visible' : ''}`}>
            {expertise.map((item) => (
              <div
                key={item.id}
                className="expertise-card"
                style={{ '--expertise-color': item.color || '#f472b6' }}
              >
                <div className="expertise-card__header">
                  <span className="expertise-card__icon">{item.icon || '🛡️'}</span>
                  <div>
                    <h3 className="expertise-card__title">{item.title}</h3>
                    {item.level && (
                      <div className="expertise-card__level">
                        {'★'.repeat(item.level)}{'☆'.repeat(5 - item.level)}
                      </div>
                    )}
                  </div>
                </div>

                <p className="expertise-card__description">{item.description}</p>

                {item.tools && item.tools.length > 0 && (
                  <div className="expertise-card__tools">
                    <p className="expertise-card__tools-label">Outils:</p>
                    <div className="expertise-card__tools-list">
                      {item.tools.map((tool) => (
                        <span key={tool} className="expertise-card__tool">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.skills && item.skills.length > 0 && (
                  <div className="expertise-card__skills">
                    <p className="expertise-card__skills-label">Compétences:</p>
                    <div className="expertise-card__skills-list">
                      {item.skills.map((skill) => (
                        <span key={skill} className="expertise-card__skill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {certifications.length > 0 && (
          <div className="cybersecurity-certifications-section">
            <h2 className="certifications-title">
              <span>📜</span> Certifications
            </h2>

            <div className="certifications-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="certification-card">
                      <div className="certification-card__header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <img
                            src={getCertImageUrl(cert.imageUrl, cert.name)}
                            alt={cert.name}
                            className="certification-badge"
                            style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 8 }}
                            onError={(e) => {
                              e.currentTarget.onerror = null
                              e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2256%22 height=%2256%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23f3f4f6%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial,sans-serif%22 font-size=%2210%22 fill=%22%236b7280%22%3Ebadge manquant%3C/text%3E%3C/svg%3E'
                              e.currentTarget.alt = `${cert.name} - badge indisponible`
                            }}
                          />
                          <span className="certification-card__icon">{cert.icon || '🏆'}</span>
                          <div>
                            <h4 className="certification-card__name">{cert.name}</h4>
                            <p className="certification-card__issuer">{cert.issuer}</p>
                          </div>
                        </div>
                      </div>

                  {cert.description && (
                    <p className="certification-card__description">{cert.description}</p>
                  )}

                  <div className="certification-card__dates">
                    {cert.issuedDate && (
                      <span className="certification-card__date">
                        Délivré: {new Date(cert.issuedDate).toLocaleDateString('fr-FR')}
                      </span>
                    )}
                    {cert.expiryDate && (
                      <span className={`certification-card__expiry ${cert.active ? 'active' : 'expired'}`}>
                        Expire: {new Date(cert.expiryDate).toLocaleDateString('fr-FR')}
                      </span>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-card__link"
                    >
                      Vérifier →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
