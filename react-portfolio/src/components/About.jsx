import { FiMapPin, FiMail, FiPhone, FiCode, FiTerminal } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About({ profile }) {
  const [introRef, introVisible] = useReveal()
  const [techRef, techVisible] = useReveal()
  const [termRef, termVisible] = useReveal()

  if (!profile) return null

  const stats = [
    { value: '5', label: 'Outils SAST', icon: '🔍' },
    { value: '6', label: 'Outils DAST', icon: '🕷️' },
    { value: '3', label: 'Types DAST', icon: '🎯' },
    { value: '40+', label: 'Outils maîtrisés', icon: '🛠️' },
  ]

  const techStack = [
    { name: 'Conteneurisation', tags: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'ECR'] },
    { name: 'IaC & CI/CD', tags: ['Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'CodeBuild', 'CodeDeploy', 'CodePipeline'] },
    { name: 'SAST — Code', tags: ['Bearer', 'SonarQube', 'Semgrep', 'CodeQL', 'Bandit'] },
    { name: 'IaC Sec', tags: ['Checkov', 'KICS', 'tfsec'] },
    { name: 'Images & Secrets', tags: ['Dockle', 'Gitleaks', 'TruffleHog'] },
    { name: 'DAST Spider', tags: ['OWASP ZAP', 'Burp Suite', 'Nikto'] },
    { name: 'DAST Proxy', tags: ['Nuclei', 'Nmap + NSE', 'mitmproxy'] },
    { name: 'SCA', tags: ['Trivy', 'Snyk', 'Dependency-Check'] },
  ]

  return (
    <section id="apropos" className="section about">
      <div className="container">
        <SectionHeader
          label="01 — À propos"
          title={<>Mon <span>Expertise</span></>}
          subtitle="Analyste SOC passionné de cybersécurité — détection d'incidents, protection contre les ransomwares et renforcement de la posture Zero Trust."
        />

        {/* Intro & Stats Grid */}
        <div ref={introRef} className={`about__intro-grid reveal ${introVisible ? 'reveal--visible' : ''}`}>
          
          <div className="about__bio card">
            <div className="about__bio-header">
              <div className="about__bio-icon"><FiCode /></div>
              <h3>Mon approche</h3>
            </div>
            <p className="about__bio-text">{profile.bio}</p>
            
            <div className="about__contact-pills">
              <div className="contact-pill"><FiMapPin /> {profile.location}</div>
              <a href={`mailto:${profile.email}`} className="contact-pill contact-pill--link"><FiMail /> {profile.email}</a>
              <div className="contact-pill"><FiPhone /> {profile.phone}</div>
            </div>
          </div>

          <div className="about__stats-grid">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`about__stat card reveal-delay-${i + 1}`}>
                <span className="about__stat-icon">{stat.icon}</span>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Tech Stack Matrix */}
        <div ref={techRef} className={`about__tech-section reveal ${techVisible ? 'reveal--visible' : ''}`}>
          <h3 className="about__section-title">Matrice Technologique</h3>
          <div className="about__tech-grid">
            {techStack.map((category, i) => (
              <div key={category.name} className={`tech-card card reveal-delay-${(i % 4) + 1}`}>
                <h4 className="tech-card__title">{category.name}</h4>
                <div className="tech-card__tags">
                  {category.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Visual Flow */}
        <div ref={termRef} className={`about__pipeline-section reveal ${termVisible ? 'reveal--visible' : ''}`}>
          <h3 className="about__section-title">Workflow DevSecOps Intégré</h3>
          <div className="pipeline-flow">
            <div className="pipeline-step card">
              <div className="step-badge">01</div>
              <h4 className="step-title">Pre-Commit</h4>
              <p className="step-desc">Scan de secrets (Gitleaks, TruffleHog) avant tout ajout de code.</p>
            </div>
            
            <div className="pipeline-connector">
              <div className="connector-line"></div>
              <div className="connector-arrow"></div>
            </div>

            <div className="pipeline-step card">
              <div className="step-badge">02</div>
              <h4 className="step-title">Build & CI</h4>
              <p className="step-desc">Analyses statiques : SAST (SonarQube), SCA (Trivy), IaC (Checkov).</p>
            </div>

            <div className="pipeline-connector">
              <div className="connector-line"></div>
              <div className="connector-arrow"></div>
            </div>

            <div className="pipeline-step card">
              <div className="step-badge">03</div>
              <h4 className="step-title">Staging & DAST</h4>
              <p className="step-desc">Tests dynamiques et validation d'images (ZAP, Nuclei, Dockle).</p>
            </div>

            <div className="pipeline-connector">
              <div className="connector-line"></div>
              <div className="connector-arrow"></div>
            </div>

            <div className="pipeline-step card">
              <div className="step-badge">04</div>
              <h4 className="step-title">Production</h4>
              <p className="step-desc">Déploiement sécurisé via CodeDeploy vers ECS/EKS sous surveillance.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

