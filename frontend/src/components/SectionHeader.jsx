import { useReveal } from '../hooks/useReveal'
import './SectionHeader.css'

export default function SectionHeader({ label, title, subtitle }) {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`section-header reveal ${visible ? 'reveal--visible' : ''}`}>
      {label && <span className="section-header__label">{label}</span>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  )
}
