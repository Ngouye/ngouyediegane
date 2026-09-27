import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import { getExpertiseIcon } from './expertiseIcons'
import ToolTag from './ToolTag'
import './Expertise.css'

export default function Expertise({ items }) {
  const [ref, visible] = useReveal()

  return (
    <section id="expertise" className="section section--soft">
      <div className="container">
        <SectionHeader
          label="Expertise"
          title={<>Une expertise complète pour <em>chaque couche.</em></>}
          subtitle="De la détection d'incidents à l'industrialisation des déploiements, j'interviens sur l'ensemble de la chaîne."
        />

        <div ref={ref} className={`expertise__grid stagger ${visible ? 'is-visible' : ''}`}>
          {items.map((item, i) => {
            const Icon = getExpertiseIcon(item.icon)
            return (
              <article key={item.id} className="expertise-card card lift spotlight" style={{ '--i': i }}>
                <span className="expertise-card__icon" aria-hidden="true"><Icon size={26} strokeWidth={1.5} /></span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => <ToolTag key={tag} name={tag} />)}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
