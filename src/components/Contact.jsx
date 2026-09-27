import { useState } from 'react'
import { FiSend, FiMail, FiLinkedin, FiPhone, FiMapPin, FiInfo } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact({ profile }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [opened, setOpened] = useState(false)
  const [ref, visible] = useReveal()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Pas de backend : le message est pré-rempli dans la messagerie du visiteur
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `[Portfolio] ${form.subject}`
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`
    window.location.href =
      `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  const channels = [
    { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    profile.phone && {
      icon: FiPhone, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    profile.linkedinUrl && {
      icon: FiLinkedin, label: 'LinkedIn', value: 'Ngouye Gning', href: profile.linkedinUrl, external: true,
    },
    { icon: FiMapPin, label: 'Localisation', value: profile.location },
  ].filter(Boolean)

  const availability = [
    { label: 'Statut', value: profile.availability?.replace(/^Disponible — /, '') ?? 'Disponible' },
    { label: 'Délai de réponse', value: 'Sous 24 heures' },
    { label: 'Fuseau horaire', value: 'GMT (Dakar)' },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          center
          label="Contact"
          title={<>Parlons de votre <em>projet.</em></>}
          subtitle="Un poste, une mission ou un projet sécurité ? Écrivez-moi, je réponds généralement sous 24 heures."
        />

        <div ref={ref} className={`contact__layout stagger ${visible ? 'is-visible' : ''}`}>
          <form className="contact__form card" onSubmit={handleSubmit} style={{ '--i': 0 }}>
            <h3 className="contact__card-title serif">Votre message</h3>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="contact-name">Nom complet</label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Prénom Nom"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="vous@entreprise.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="contact-subject">Sujet</label>
              <input
                id="contact-subject"
                name="subject"
                placeholder="Poste, mission, audit…"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Décrivez votre besoin en quelques lignes."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {opened && (
              <p className="contact__notice" role="status">
                <FiInfo aria-hidden="true" />
                <span>
                  Votre messagerie s'est ouverte avec le message pré-rempli : il ne reste qu'à l'envoyer.
                  Rien ne s'est ouvert ? Écrivez-moi directement à{' '}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </span>
              </p>
            )}

            <button type="submit" className="btn btn-primary contact__submit">
              <FiSend className="btn__arrow" /> Envoyer le message
            </button>
          </form>

          <div className="contact__aside" style={{ '--i': 1 }}>
            <div className="card contact__card">
              <h3 className="contact__card-title serif">Coordonnées</h3>
              <ul className="contact__channels">
                {channels.map(({ icon: Icon, label, value, href, external }) => (
                  <li key={label} className="contact__channel">
                    <span className="contact__channel-icon" aria-hidden="true"><Icon size={18} /></span>
                    <span>
                      <span className="contact__channel-label">{label}</span>
                      {href ? (
                        <a
                          href={href}
                          className="contact__channel-value contact__channel-value--link"
                          {...(external && { target: '_blank', rel: 'noreferrer' })}
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="contact__channel-value">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card contact__card">
              <h3 className="contact__card-title serif">Disponibilité</h3>
              <dl className="contact__hours">
                {availability.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
