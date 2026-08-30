import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './DevSecOpsTools.css'

const SCAN_TYPES = [
  {
    id: 'SAST',
    title: 'SAST',
    fullName: 'Static Application Security Testing',
    desc: 'Analyse du code applicatif sans exécution — OWASP, CWE, flux sensibles, RGPD.',
    color: '#34d399',
    icon: '🔍',
  },
  {
    id: 'DAST',
    title: 'DAST',
    fullName: 'Dynamic Application Security Testing',
    desc: 'Spider, fuzzer, templates & proxies — tests dynamiques en runtime & CI/CD.',
    color: '#f472b6',
    icon: '🕷️',
  },
  {
    id: 'SCA',
    title: 'SCA',
    fullName: 'Software Composition Analysis',
    desc: 'Audit des dépendances open source — CVE, licences et supply chain.',
    color: '#fbbf24',
    icon: '📦',
  },
  {
    id: 'Sécurité IaC',
    title: 'IaC Scan',
    fullName: 'Infrastructure as Code Security',
    desc: 'Scan Terraform, Kubernetes, Dockerfile — 1000+ règles, policies as code.',
    color: '#a78bfa',
    icon: '🏗️',
  },
  {
    id: 'Sécurité Images',
    title: 'Images',
    fullName: 'Container Image Security',
    desc: 'Bonnes pratiques Docker & conformité CIS Benchmarks.',
    color: '#22d3ee',
    icon: '🐳',
  },
  {
    id: 'Détection Secrets',
    title: 'Secrets',
    fullName: 'Secret Detection & Leak Prevention',
    desc: 'Détection de clés, tokens et credentials — scan Git & vérification active.',
    color: '#fb923c',
    icon: '🔑',
  },
]

const SAST_MATRIX = [
  { tool: 'Bearer', langs: 'JS, TS, Ruby, Python, Java, Go, PHP', strengths: 'OWASP Top 10, CWE Top 25, flux sensibles, privacy RGPD' },
  { tool: 'Semgrep', langs: '30+ langages', strengths: 'Règles personnalisables, rapide, gratuit' },
  { tool: 'CodeQL', langs: 'Java, JS, Python, Go, C++', strengths: 'Requêtes puissantes, intégré GitHub' },
  { tool: 'Bandit', langs: 'Python', strengths: 'Simple, spécialisé Python' },
  { tool: 'SonarQube', langs: '25+ langages', strengths: 'Qualité + sécurité, tableau de bord' },
]

const DAST_TYPES = [
  {
    type: 'Scanners automatisés',
    subtitle: 'Spider + Fuzzer',
    desc: 'Crawlent l\'application et testent automatiquement les points d\'entrée. Idéal pour les scans réguliers en CI/CD.',
    color: '#f472b6',
    tools: [
      { tool: 'OWASP ZAP', strengths: 'Référence open source, très complet', license: 'Open source' },
      { tool: 'Burp Suite', strengths: 'Fonctionnalités avancées, communauté active', license: 'Community/Pro' },
      { tool: 'Nikto', strengths: 'Simple, rapide, détection de misconfigs', license: 'Open source' },
    ],
  },
  {
    type: 'Scanners basés sur templates',
    subtitle: 'Templates prédéfinis',
    desc: 'Exécutent des tests prédéfinis contre une cible — plus rapides, détectent des vulnérabilités connues sans crawler.',
    color: '#ec4899',
    tools: [
      { tool: 'Nuclei', strengths: 'Ultra-rapide, 11 000+ templates communautaires', license: 'Open source' },
      { tool: 'Nmap + NSE', strengths: 'Classique, polyvalent', license: 'Open source' },
    ],
  },
  {
    type: 'Proxies d\'interception',
    subtitle: 'Tests manuels',
    desc: 'S\'intercalent entre navigateur et application — capture, modification et rejeu des requêtes. Essentiels pour pentest manuel.',
    color: '#db2777',
    tools: [
      { tool: 'Burp Suite', strengths: 'Standard de l\'industrie', license: 'Community/Pro' },
      { tool: 'OWASP ZAP', strengths: 'Alternative open source', license: 'Open source' },
      { tool: 'mitmproxy', strengths: 'Scriptable en Python', license: 'Open source' },
    ],
  },
]

const SECURITY_CATEGORIES = [
  'SAST', 'DAST', 'SCA', 'Sécurité IaC', 'Sécurité Images', 'Détection Secrets',
]

const CATEGORY_META = {
  'Conteneurisation': { desc: 'Packaging, orchestration et registry d\'images', color: '#22d3ee' },
  'Infrastructure as Code': { desc: 'Provisioning et configuration automatisés', color: '#a78bfa' },
  'CI/CD': { desc: 'Intégration et déploiement continus', color: '#f472b6' },
  'Cloud AWS': { desc: 'Services managés Amazon Web Services', color: '#fbbf24' },
  SAST: { desc: 'Analyse statique du code applicatif', color: '#34d399' },
  DAST: { desc: 'Spider, fuzzer, templates & proxies d\'interception', color: '#f472b6' },
  SCA: { desc: 'Analyse des dépendances & supply chain', color: '#fbbf24' },
  'Sécurité IaC': { desc: 'Scan Terraform, K8s, Dockerfile, ARM', color: '#a78bfa' },
  'Sécurité Images': { desc: 'Bonnes pratiques & CIS Benchmarks Docker', color: '#22d3ee' },
  'Détection Secrets': { desc: 'Scan secrets Git & vérification credentials', color: '#fb923c' },
  'Observabilité': { desc: 'Monitoring, métriques et alerting', color: '#60a5fa' },
}

const CATEGORY_ORDER = [
  ...SECURITY_CATEGORIES,
  'Conteneurisation',
  'Infrastructure as Code',
  'CI/CD',
  'Cloud AWS',
  'Observabilité',
]

export default function DevSecOpsTools({ skills }) {
  const [introRef, introVisible] = useReveal()
  const [matrixRef, matrixVisible] = useReveal()
  const [dastRef, dastVisible] = useReveal()
  const [gridRef, gridVisible] = useReveal()

  if (!skills?.length) return null

  const devSecOpsSkills = skills.filter((s) => CATEGORY_ORDER.includes(s.category))
  if (!devSecOpsSkills.length) return null

  const securitySkills = devSecOpsSkills.filter((s) =>
    SECURITY_CATEGORIES.includes(s.category)
  )

  const grouped = CATEGORY_ORDER
    .map((cat) => ({
      category: cat,
      meta: CATEGORY_META[cat],
      tools: devSecOpsSkills.filter((s) => s.category === cat),
      isSecurity: SECURITY_CATEGORIES.includes(cat),
    }))
    .filter((g) => g.tools.length > 0)

  return (
    <section id="devsecops" className="section devsecops-tools">
      <div className="container">
        <SectionHeader
          label="Arsenal DevSecOps"
          title={<>Outils <span>sécurité</span></>}
          subtitle="SAST, DAST, SCA, scan IaC, images Docker et détection de secrets — couverture complète de la chaîne DevSecOps."
        />

        <div
          ref={introRef}
          className={`security-scan-intro reveal ${introVisible ? 'reveal--visible' : ''}`}
        >
          {SCAN_TYPES.map((type) => {
            const tools = securitySkills.filter((s) => s.category === type.id)
            return (
              <div
                key={type.id}
                className="security-scan-card card"
                style={{ '--scan-color': type.color }}
              >
                <div className="security-scan-card__header">
                  <span className="security-scan-card__icon">{type.icon}</span>
                  <div>
                    <h3>{type.title}</h3>
                    <span className="security-scan-card__full">{type.fullName}</span>
                  </div>
                </div>
                <p className="security-scan-card__desc">{type.desc}</p>
                <div className="security-scan-card__tools">
                  {tools.map((t) => (
                    <span key={t.id} className="security-scan-card__tool">{t.name}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div
          ref={matrixRef}
          className={`sast-matrix card reveal ${matrixVisible ? 'reveal--visible' : ''}`}
        >
          <h3 className="sast-matrix__title">Comparatif SAST — langages & points forts</h3>
          <div className="sast-matrix__table-wrap">
            <table className="sast-matrix__table">
              <thead>
                <tr>
                  <th>Outil</th>
                  <th>Langages supportés</th>
                  <th>Points forts</th>
                </tr>
              </thead>
              <tbody>
                {SAST_MATRIX.map((row) => (
                  <tr key={row.tool}>
                    <td><strong>{row.tool}</strong></td>
                    <td>{row.langs}</td>
                    <td>{row.strengths}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          ref={dastRef}
          className={`dast-matrix card reveal ${dastVisible ? 'reveal--visible' : ''}`}
        >
          <h3 className="sast-matrix__title sast-matrix__title--dast">
            Types de scanners DAST
          </h3>
          <p className="dast-matrix__intro">
            Trois approches complémentaires pour tester la sécurité des applications en runtime.
          </p>

          {DAST_TYPES.map((dastType) => (
            <div key={dastType.type} className="dast-type-block" style={{ '--dast-color': dastType.color }}>
              <div className="dast-type-block__header">
                <h4>{dastType.type}</h4>
                <span className="dast-type-block__subtitle">{dastType.subtitle}</span>
              </div>
              <p className="dast-type-block__desc">{dastType.desc}</p>
              <div className="sast-matrix__table-wrap">
                <table className="sast-matrix__table">
                  <thead>
                    <tr>
                      <th>Outil</th>
                      <th>Points forts</th>
                      <th>Licence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dastType.tools.map((row) => (
                      <tr key={`${dastType.type}-${row.tool}`}>
                        <td><strong>{row.tool}</strong></td>
                        <td>{row.strengths}</td>
                        <td><span className="dast-license">{row.license}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div ref={gridRef} className={`devsecops-tools__grid reveal ${gridVisible ? 'reveal--visible' : ''}`}>
          {grouped.map(({ category, meta, tools, isSecurity }, gi) => (
            <div
              key={category}
              className={`devsecops-tools__category card reveal-delay-${(gi % 4) + 1} ${isSecurity ? 'devsecops-tools__category--security' : ''}`}
              style={{ '--cat-color': meta.color }}
            >
              <div className="devsecops-tools__cat-header">
                <div>
                  <h3>
                    {category}
                    {isSecurity && <span className="devsecops-tools__badge">Security</span>}
                  </h3>
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
