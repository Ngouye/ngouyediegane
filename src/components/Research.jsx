import { FiBookOpen, FiLock, FiEyeOff, FiShield, FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import './Research.css'

const PILLAR_ICONS = { hard: FiLock, zk: FiEyeOff, pq: FiShield }

// Exemple de vecteur découpé en ℓ = 4 blocs : longueur nᵢ et rang de chaque bloc
const BLOCKS = [
  { n: 3, rk: 2 },
  { n: 2, rk: 0 },
  { n: 4, rk: 1 },
  { n: 3, rk: 3 },
]

// Somme avec bornes au-dessus et en dessous, comme \sum_{i=1}^{ℓ} en LaTeX
function Sum({ from, to }) {
  return (
    <span className="math__sum">
      <span>{to}</span>
      <span className="math__sum-sign">Σ</span>
      <span>{from}</span>
    </span>
  )
}

// Indice et exposant empilés à droite : base^{sup}_{sub}
function Scripts({ base, sup, sub }) {
  return (
    <span className="math__scripted">
      {base}
      <span className="math__scripts">
        <span>{sup}</span>
        <span>{sub}</span>
      </span>
    </span>
  )
}

export default function Research({ research }) {
  const [ref, visible] = useReveal()
  const [pillarsRef, pillarsVisible] = useReveal()
  const weight = BLOCKS.reduce((sum, b) => sum + b.rk, 0)

  return (
    <section id="recherche" className="section research">
      <div className="container">
        <SectionHeader
          label="Recherche"
          title={<>Mathématiques &amp; <em>cryptographie post-quantique.</em></>}
          subtitle="Mathématicien de formation, je mène en parallèle de mon parcours technique un travail de recherche en cryptographie fondée sur les codes correcteurs."
        />

        <div ref={ref} className={`research__grid stagger ${visible ? 'is-visible' : ''}`}>
          <article className="research__thesis" style={{ '--i': 0 }}>
            <div className="research__badges">
              <span className="research__badge"><FiBookOpen aria-hidden="true" /> {research.type}</span>
              <span className="research__status">
                <span className="research__status-dot" aria-hidden="true" />
                {research.status} · {research.period}
              </span>
            </div>
            <h3 className="research__title serif">{research.title}</h3>
            <p className="research__inst">{research.institution} · {research.program}</p>
            <p className="research__summary">{research.summary}</p>
            <ul className="research__keywords" aria-label="Mots-clés">
              {research.keywords.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </article>

          <aside className="research__math" style={{ '--i': 1 }} aria-label="Définition de la métrique sum-rank">
            <p className="research__math-label">La métrique sum-rank</p>

            <p className="math">
              <var>x</var> = (<var>x</var><sub>1</sub> | <var>x</var><sub>2</sub> | … | <var>x</var><sub><var>ℓ</var></sub>),&ensp;
              <var>x</var><sub><var>i</var></sub> ∈{' '}
              <Scripts base="𝔽" sup={<><var>n</var><sub><var>i</var></sub></>} sub={<><var>q</var><sup><var>m</var></sup></>} />
            </p>
            <p className="math math--main">
              w<sub>SR</sub>(<var>x</var>) = <Sum from={<><var>i</var>=1</>} to={<var>ℓ</var>} />
              {' '}rk<sub>𝔽<sub><var>q</var></sub></sub>(<var>x</var><sub><var>i</var></sub>)
            </p>

            {/* Le poids sum-rank est la somme des rangs des blocs */}
            <div className="sumrank" aria-hidden="true">
              {BLOCKS.map((b, i) => (
                <div key={i} className="sumrank__block" style={{ flexGrow: b.n }}>
                  <div className="sumrank__cells">
                    {Array.from({ length: b.n }, (_, j) => (
                      <span key={j} className={j < b.rk ? 'is-active' : ''} />
                    ))}
                  </div>
                  <span className="sumrank__label"><var>x</var><sub>{i + 1}</sub> : rang {b.rk}</span>
                </div>
              ))}
            </div>
            <p className="math math--result">
              w<sub>SR</sub>(<var>x</var>) = {BLOCKS.map((b) => b.rk).join(' + ')} = <strong>{weight}</strong>
            </p>
            <p className="research__math-note">
              Chaque bloc est vu comme une matrice sur 𝔽<sub>q</sub> : les cases bleues figurent son rang.
            </p>

            {/* La sum-rank englobe les deux métriques classiques de la théorie des codes */}
            <table className="metrics">
              <caption className="research__math-label">Une métrique qui en généralise deux</caption>
              <thead>
                <tr><th scope="col">Métrique</th><th scope="col">Cas</th><th scope="col">Poids de <var>x</var></th></tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Hamming</th>
                  <td className="math"><var>n</var><sub>1</sub> = … = <var>n</var><sub><var>ℓ</var></sub> = 1</td>
                  <td>nombre de coordonnées non nulles</td>
                </tr>
                <tr>
                  <th scope="row">Rang</th>
                  <td className="math"><var>ℓ</var> = 1</td>
                  <td>rang de la matrice associée</td>
                </tr>
                <tr className="is-current">
                  <th scope="row">Sum-rank</th>
                  <td>cas général</td>
                  <td>somme des rangs des blocs</td>
                </tr>
              </tbody>
            </table>
          </aside>
        </div>

        <div ref={pillarsRef} className={`research__pillars stagger ${pillarsVisible ? 'is-visible' : ''}`}>
          {research.pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[p.icon] ?? FiLock
            return (
              <article key={p.title} className="research__pillar" style={{ '--i': i }}>
                <span className="research__pillar-icon" aria-hidden="true"><Icon size={20} /></span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
                {p.steps && (
                  <ol className="zk-steps" aria-label="Échange entre le prouveur et le vérifieur">
                    {p.steps.map((step, j) => (
                      <li key={step} className={j % 2 ? 'is-back' : ''}>
                        <span className="zk-steps__party">{j % 2 ? 'V' : 'P'}</span>
                        {j % 2 ? <FiArrowLeft aria-hidden="true" /> : <FiArrowRight aria-hidden="true" />}
                        <span className="zk-steps__party">{j % 2 ? 'P' : 'V'}</span>
                        <span className="zk-steps__name">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
