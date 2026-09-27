import { FiMapPin, FiMail, FiPhone, FiBookOpen } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import ToolTag from './ToolTag'
import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About({ profile, workflow }) {
  const [introRef, introVisible] = useReveal()
  const [flowRef, flowVisible] = useReveal()

  const facts = [
    { icon: FiMapPin, label: 'Localisation', value: profile.location },
    { icon: FiBookOpen, label: 'Formation en cours', value: `${profile.degree}, ${profile.school}` },
    { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  ]

  return (
    <section id="apropos" className="section">
      <div className="container">
        <div ref={introRef} className={`about__intro reveal ${introVisible ? 'reveal--visible' : ''}`}>
          <div>
            <SectionHeader
              label="À propos"
              title={<>Une sécurité bâtie sur la <em>confiance.</em></>}
            />
            <p className="about__bio">{profile.bio}</p>
          </div>

          <aside className="about__card card">
            <p className="about__card-title serif">En bref</p>
            <dl className="about__facts">
              {facts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="about__fact">
                  <span className="about__fact-icon" aria-hidden="true"><Icon size={18} /></span>
                  <div>
                    <dt>{label}</dt>
                    <dd>{href ? <a href={href}>{value}</a> : value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div ref={flowRef} className="about__workflow">
          <h3 className="about__subtitle serif">Mon workflow <em>DevSecOps</em></h3>
          <ol className={`workflow stagger ${flowVisible ? 'is-visible' : ''}`}>
            {workflow.map((step, i) => (
              <li key={step.title} className="workflow__step card lift" style={{ '--i': i + 1 }}>
                <span className="workflow__num">{String(i + 1).padStart(2, '0')}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {step.tools?.length > 0 && (
                  <div className="tag-list workflow__tools">
                    {step.tools.map((t) => <ToolTag key={t} name={t} />)}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
