import { useState } from 'react'
import SectionHeader from './SectionHeader'
import { ToolIcon } from './ToolTag'
import { useReveal } from '../hooks/useReveal'
import './Skills.css'

export default function Skills({ skills, groups }) {
  const [activeId, setActiveId] = useState(groups[0].id)
  const [ref, visible] = useReveal()

  const active = groups.find((g) => g.id === activeId)
  const categories = active.categories
    .map((name) => ({ name, tools: skills.filter((s) => s.category === name) }))
    .filter((c) => c.tools.length > 0)

  const onTabKey = (e, index) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const next = groups[(index + step + groups.length) % groups.length]
    setActiveId(next.id)
    document.getElementById(`skills-tab-${next.id}`)?.focus()
  }

  return (
    <section id="competences" className="section">
      <div className="container">
        <SectionHeader
          label="Compétences"
          title={<>Les outils de <em>mon quotidien.</em></>}
          subtitle="Les outils que j'utilise au quotidien pour construire, déployer et sécuriser des systèmes."
        />

        <div ref={ref} className={`reveal ${visible ? 'reveal--visible' : ''}`}>
          <div className="skills__tabs" role="tablist" aria-label="Familles de compétences">
            {groups.map((g, i) => {
              const count = skills.filter((s) => g.categories.includes(s.category)).length
              const selected = g.id === activeId
              return (
                <button
                  key={g.id}
                  id={`skills-tab-${g.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="skills-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`skills__tab ${selected ? 'skills__tab--active' : ''}`}
                  onClick={() => setActiveId(g.id)}
                  onKeyDown={(e) => onTabKey(e, i)}
                >
                  {g.label}
                  <span className="skills__tab-count">{count}</span>
                </button>
              )
            })}
          </div>

          {/* key : remonte le panneau à chaque onglet pour rejouer l'animation */}
          <div
            key={activeId}
            id="skills-panel"
            role="tabpanel"
            aria-labelledby={`skills-tab-${activeId}`}
            className="skills__grid"
          >
            {categories.map((cat, i) => (
              <div key={cat.name} className="skills__category card spotlight" style={{ '--i': i }}>
                <h3>{cat.name}</h3>
                <ul className="skills__list">
                  {cat.tools.map((tool, j) => (
                    <li key={tool.id} style={{ '--j': j }}>
                      <span className="skills__logo" aria-hidden="true"><ToolIcon name={tool.name} size={24} /></span>
                      <span className="skills__text">
                        <span className="skills__name">{tool.name}</span>
                        {tool.description && <span className="skills__desc">{tool.description}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
