import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './DevSecOpsTools.css'

const DEVOPS_CATEGORIES = [
  'Conteneurisation',
  'Infrastructure as Code',
  'CI/CD',
  'Cloud AWS',
  'Observabilité',
]

const CATEGORY_META = {
  'Conteneurisation': { desc: 'Packaging, orchestration et registry d\'images', color: '#22d3ee' },
  'Infrastructure as Code': { desc: 'Provisioning et configuration automatisés', color: '#a78bfa' },
  'CI/CD': { desc: 'Intégration et déploiement continus', color: '#f472b6' },
  'Cloud AWS': { desc: 'Services managés Amazon Web Services', color: '#fbbf24' },
  'Observabilité': { desc: 'Monitoring, métriques et alerting', color: '#60a5fa' },
}

const CATEGORY_ORDER = [...DEVOPS_CATEGORIES]

export default function DevOpsTools({ skills }) {
  const [gridRef, gridVisible] = useReveal()

  if (!skills?.length) return null

  const devOpsSkills = skills.filter((s) => DEVOPS_CATEGORIES.includes(s.category))
  if (!devOpsSkills.length) return null

  const grouped = CATEGORY_ORDER
    .map((cat) => ({
      category: cat,
      meta: CATEGORY_META[cat],
      tools: devOpsSkills.filter((s) => s.category === cat),
    }))
    .filter((g) => g.tools.length > 0)

  return (
    <section id="devops" className="section devsecops-tools">
      <div className="container">
        <SectionHeader
          label="Arsenal DevOps"
          title={<>Outils <span>DevOps</span></>}
          subtitle="Conteneurisation, IaC, CI/CD, cloud et observabilité : la chaîne de déploiement moderne."
        />

        <div ref={gridRef} className={`devsecops-tools__grid reveal ${gridVisible ? 'reveal--visible' : ''}`}>
          {grouped.map(({ category, meta, tools }, gi) => (
            <div
              key={category}
              className={`devsecops-tools__category card reveal-delay-${(gi % 4) + 1}`}
              style={{ '--cat-color': meta.color }}
            >
              <div className="devsecops-tools__cat-header">
                <div>
                  <h3>{category}</h3>
                  <p>{meta.desc}</p>
                </div>
                <span className="devsecops-tools__count">{tools.length}</span>
              </div>

              <div className="devsecops-tools__list">
                {tools.map((tool) => (
                  <div key={tool.id} className="devsecops-tool">
                    <span className="devsecops-tool__icon">{tool.icon}</span>
                    <div className="devsecops-tool__info">
                      <div className="devsecops-tool__name-row">
                        <span className="devsecops-tool__name">{tool.name}</span>
                        {tool.subcategory && (
                          <span className="devsecops-tool__sub">{tool.subcategory}</span>
                        )}
                      </div>
                      {tool.description && (
                        <span className="devsecops-tool__desc">{tool.description}</span>
                      )}
                    </div>
                    <span className="devsecops-tool__level">{tool.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
