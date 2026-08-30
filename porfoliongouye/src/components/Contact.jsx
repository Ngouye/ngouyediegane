import { useState } from 'react'
import { FiSend, FiMail, FiMapPin, FiCheck, FiMessageCircle } from 'react-icons/fi'
import { sendContact } from '../api/portfolioApi'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [ref, visible] = useReveal()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await sendContact(form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader
          label="06 — Contact"
          title={<>Travaillons <span>ensemble</span></>}
          subtitle="Un projet, une opportunité ou simplement envie d'échanger ? Écrivez-moi."
        />

        <div ref={ref} className={`contact__layout reveal ${visible ? 'reveal--visible' : ''}`}>
          <div className="contact__aside">
            <div className="contact__card card">
              <FiMail className="contact__card-icon" />
              <span className="contact__card-label">Email</span>
              <a href={`mailto:${profile?.email}`}>{profile?.email}</a>
            </div>
            <div className="contact__card card">
              <FiMapPin className="contact__card-icon" />
              <span className="contact__card-label">Localisation</span>
              <span>{profile?.location}</span>
            </div>
            <div className="contact__cta-box card">
              <FiMessageCircle size={28} />
              <p>Je réponds généralement sous <strong>24h</strong>. Hâte de vous lire !</p>
            </div>
          </div>

          <form className="contact__form card" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="name">Nom complet</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="vous@email.com"
                />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="subject">Sujet</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="De quoi souhaitez-vous parler ?"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Décrivez votre projet ou votre demande..."
              />
            </div>

            {status === 'success' && (
              <div className="contact__alert contact__alert--success">
                <FiCheck /> Message envoyé — merci !
              </div>
            )}
            {status === 'error' && (
              <div className="contact__alert contact__alert--error">
                Erreur d'envoi. Réessayez plus tard.
              </div>
            )}

            <button type="submit" className="btn btn-primary contact__submit" disabled={loading}>
              <FiSend /> {loading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
