import { useReveal } from '../hooks/useReveal'
import './SectionHeader.css'

export default function SectionHeader({ label, title, subtitle, center = false }) {
  const [ref, visible] = useReveal()

  return (
    <header
      ref={ref}
      className={`section-header ${center ? 'section-header--center' : ''} reveal ${visible ? 'reveal--visible' : ''}`}
    >
      {label && <span className="eyebrow">{label}</span>}
      <h2 className="section-header__title serif">{title}</h2>
      <span className="rule section-header__rule" aria-hidden="true" />
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </header>
  )
}
