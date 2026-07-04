import { FiMapPin, FiBriefcase, FiAward, FiLayers } from 'react-icons/fi'
import './RecruiterStrip.css'

export default function RecruiterStrip({ profile, projects, certifications, skills }) {
  const items = [
    {
      icon: FiBriefcase,
      label: 'Projets livrés',
      value: `${projects?.length ?? 0}+`,
      hint: 'DevSecOps, Cloud, SOC',
    },
    {
      icon: FiAward,
      label: 'Certifications',
      value: `${certifications?.length ?? 0}`,
      hint: 'Cloud, Sécurité, IA',
    },
    {
      icon: FiLayers,
      label: 'Stack maîtrisée',
      value: `${skills?.length ?? 0}+`,
      hint: 'Outils & technologies',
    },
    {
      icon: FiMapPin,
      label: 'Basé à',
      value: profile?.location?.split(',')[0] ?? 'Dakar',
      hint: profile?.location ?? 'Sénégal',
    },
  ]

  return (
    <div className="recruiter-strip">
      <div className="container recruiter-strip__inner">
        {items.map(({ icon: Icon, label, value, hint }) => (
          <div key={label} className="recruiter-strip__item">
            <span className="recruiter-strip__icon"><Icon size={18} /></span>
            <div className="recruiter-strip__body">
              <span className="recruiter-strip__value">{value}</span>
              <span className="recruiter-strip__label">{label}</span>
              <span className="recruiter-strip__hint">{hint}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
