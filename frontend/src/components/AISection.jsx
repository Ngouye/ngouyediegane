import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './AISection.css'

const AI_CARDS = [
  {
    title: 'Machine Learning',
    icon: '🤖',
    color: '#34d399',
    summary: 'Modèles supervisés et non supervisés pour prédictions, classification et insights actionnables.',
    bullets: [
      'Régression, classification et scoring en temps réel',
      'Feature engineering, pipelines data et normalisation',
      'Scikit-learn, Pandas, NumPy',
    ],
  },
  {
    title: 'Deep Learning',
    icon: '🧠',
    color: '#6366f1',
    summary: 'Réseaux neuronaux, CNN, RNN, Transformers et entraînement haute performance.',
    bullets: [
      'Vision par ordinateur et NLP',
      'TensorFlow / PyTorch / Keras',
      'Fine-tuning et transfer learning',
    ],
  },
  {
    title: 'MLOps & IA Ops',
    icon: '⚙️',
    color: '#f59e0b',
    summary: 'Déploiement, monitoring et pipelines data pour des modèles fiables, scalables et observables.',
    bullets: [
      'Orchestration de pipelines et gestion de version',
      'Monitoring des modèles en production',
      'Automatisation et CI/CD ML',
    ],
  },
]

export default function AISection() {
  const [ref, visible] = useReveal()

  return (
    <section id="ia" className="section ai-section">
      <div className="container">
        <SectionHeader
          label="Intelligence Artificielle"
          title={<>IA, <span>Machine Learning</span> & Deep Learning</>}
          subtitle="IA appliquée : du ML au Deep Learning, avec MLOps pour des déploiements fluides et fiables."
        />

        <div ref={ref} className={`ai-section__grid reveal ${visible ? 'reveal--visible' : ''}`}>
          {AI_CARDS.map((card) => (
            <article
              key={card.title}
              className="ai-card card"
              style={{ borderTopColor: card.color }}
            >
              <div className="ai-card__head">
                <span className="ai-card__icon">{card.icon}</span>
                <h3>{card.title}</h3>
              </div>
              <p className="ai-card__summary">{card.summary}</p>
              <ul className="ai-card__list">
                {card.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
