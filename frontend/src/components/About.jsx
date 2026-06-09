import { FiMapPin, FiMail, FiPhone, FiCode } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About({ profile }) {
  const [gridRef, gridVisible] = useReveal()
  const [statsRef, statsVisible] = useReveal()

  if (!profile) return null

  const stats = [
    { value: '5', label: 'Outils SAST', icon: '🔍' },
    { value: '6', label: 'Outils DAST', icon: '🕷️' },
    { value: '3', label: 'Types DAST', icon: '🎯' },
    { value: '40+', label: 'Outils total', icon: '🛠️' },
  ]

  return (
    <section id="apropos" className="section about">
      <div className="container">
        <SectionHeader
          label="01 — À propos"
          title={<>Qui suis-<span>je ?</span></>}
          subtitle="Analyste SOC & passionné de cybersécurité — détection d'incidents, protection ransomware et posture Zero Trust."
        />

        <div
          ref={gridRef}
          className={`about__bento reveal ${gridVisible ? 'reveal--visible' : ''}`}
        >
          <div className="about__main card">
            <div className="about__main-icon"><FiCode /></div>
            <h3>Ma vision</h3>
            <p>{profile.bio}</p>
            <div className="about__tool-groups">
              <div className="about__tool-group">
                <span className="about__tool-label">Conteneurisation</span>
                <div className="about__tool-tags">
                  {['Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'ECR'].map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="about__tool-group">
                <span className="about__tool-label">IaC & CI/CD</span>
                <div className="about__tool-tags">
                  {['Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'CodeBuild', 'CodeDeploy', 'CodePipeline'].map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="about__tool-group">
                <span className="about__tool-label">SAST — Code applicatif</span>
                <div className="about__tool-tags">
                  {['Bearer', 'SonarQube', 'Semgrep', 'CodeQL', 'Bandit'].map((t) => (
                    <span key={t} className="tag tag--sast">{t}</span>
                  ))}
                </div>
              </div>
              <div className="about__tool-group">
                <span className="about__tool-label">IaC — Terraform, K8s, Dockerfile</span>
                <div className="about__tool-tags">
                  {['Checkov', 'KICS', 'tfsec'].map((t) => (
                    <span key={t} className="tag tag--iac">{t}</span>
                  ))}
                </div>
              </div>
              <div className="about__tool-group">
                <span className="about__tool-label">Images & Secrets</span>
                <div className="about__tool-tags">
                  {['Dockle', 'Gitleaks', 'TruffleHog'].map((t) => (
                    <span key={t} className="tag tag--secrets">{t}</span>
                  ))}
                </div>
              </div>
              <div className="about__tool-group">
                <span className="about__tool-label">DAST — Spider + Fuzzer</span>
                <div className="about__tool-tags">
                  {['OWASP ZAP', 'Burp Suite', 'Nikto'].map((t) => (
                    <span key={t} className="tag tag--dast">{t}</span>
                  ))}
                </div>
              </div>
              <div className="about__tool-group">
                <span className="about__tool-label">DAST — Templates & Proxy</span>
                <div className="about__tool-tags">
                  {['Nuclei', 'Nmap + NSE', 'mitmproxy'].map((t) => (
                    <span key={t} className="tag tag--dast">{t}</span>
                  ))}
                </div>
              </div>
              <div className="about__tool-group">
                <span className="about__tool-label">SCA — Dépendances</span>
                <div className="about__tool-tags">
                  {['Trivy', 'Snyk', 'Dependency-Check'].map((t) => (
                    <span key={t} className="tag tag--sca">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="about__code">
              <pre><code>{`pipeline DevSecOps {
  secrets → Gitleaks + TruffleHog (pre-commit)
  SAST    → Bearer + SonarQube + Semgrep + Bandit
  IaC     → Checkov + KICS + tfsec
  SCA     → Trivy + Snyk
  image   → Dockle (CIS Benchmarks)
  DAST    → ZAP + Nuclei + Nikto (staging)
  proxy   → Burp Suite / mitmproxy (manuel)
  deploy  → CodeDeploy → ECS/EKS
}`}</code></pre>
            </div>
          </div>

          <div className="about__info-card card">
            <FiMapPin className="about__info-icon" />
            <span className="about__info-label">Localisation</span>
            <span className="about__info-value">{profile.location}</span>
          </div>

          <div className="about__info-card card">
            <FiMail className="about__info-icon" />
            <span className="about__info-label">Email</span>
            <a href={`mailto:${profile.email}`} className="about__info-value about__info-link">
              {profile.email}
            </a>
          </div>

          <div className="about__info-card card">
            <FiPhone className="about__info-icon" />
            <span className="about__info-label">Téléphone</span>
            <span className="about__info-value">{profile.phone}</span>
          </div>

        </div>

        <div
          ref={statsRef}
          className={`about__stats reveal ${statsVisible ? 'reveal--visible' : ''}`}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={`about__stat card reveal-delay-${i + 1}`}>
              <span className="about__stat-icon">{stat.icon}</span>
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
