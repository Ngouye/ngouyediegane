import { useState } from 'react'
import Tex from '../math/Tex'
import { useReveal } from '../../hooks/useReveal'

export default function CryptoBody({ families }) {
  const [activeId, setActiveId] = useState(families[0].id)
  const [ref, visible] = useReveal()
  const active = families.find((f) => f.id === activeId)

  const onTabKey = (e, index) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const next = families[(index + step + families.length) % families.length]
    setActiveId(next.id)
    document.getElementById(`crypto-tab-${next.id}`)?.focus()
  }

  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal--visible' : ''}`}>
      <div className="crypto__tabs" role="tablist" aria-label="Familles de cryptosystèmes">
        {families.map((f, i) => {
          const selected = f.id === activeId
          return (
            <button
              key={f.id}
              id={`crypto-tab-${f.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="crypto-panel"
              tabIndex={selected ? 0 : -1}
              className={`crypto__tab ${selected ? 'crypto__tab--active' : ''}`}
              onClick={() => setActiveId(f.id)}
              onKeyDown={(e) => onTabKey(e, i)}
            >
              {f.label}
              <span className="crypto__tab-count">{f.items.length}</span>
            </button>
          )
        })}
      </div>

      <p className="crypto__intro">{active.intro}</p>

      {/* key : remonte le panneau à chaque onglet pour rejouer l'animation */}
      <div
        key={activeId}
        id="crypto-panel"
        role="tabpanel"
        aria-labelledby={`crypto-tab-${activeId}`}
        className="crypto__grid"
      >
        {active.items.map((item, i) => (
          <article key={item.name} className="crypto-card card lift" style={{ '--i': i }}>
            <header className="crypto-card__head">
              <h3 className="serif">{item.name}</h3>
              <span className="crypto-card__tag">{item.tag}</span>
            </header>
            <div className="crypto-card__formulas">
              {item.formulas.map((f) => <Tex key={f} block>{f}</Tex>)}
            </div>
            <p className="crypto-card__note">{item.note}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
