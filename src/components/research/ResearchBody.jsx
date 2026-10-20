import { FiBookOpen } from 'react-icons/fi'
import Tex from '../math/Tex'
import { useReveal } from '../../hooks/useReveal'

// Exemple de vecteur découpé en ℓ = 4 blocs : longueur nᵢ et rang de chaque bloc
const BLOCKS = [
  { n: 3, rk: 2 },
  { n: 2, rk: 0 },
  { n: 4, rk: 1 },
  { n: 3, rk: 3 },
]

const T = String.raw

// Énoncé numéroté façon amsthm : « Définition 1 (Nom). »
function Statement({ kind, num, name, variant = 'def', wide = false, children }) {
  return (
    <article className={`thm thm--${variant} ${wide ? 'thm--wide' : ''}`}>
      <p className="thm__head">
        <span className="thm__kind">{kind}{num ? ` ${num}` : ''}</span>
        {name && <span className="thm__name"> ({name})</span>}
        <span className="thm__kind">.</span>
      </p>
      <div className="thm__body">{children}</div>
    </article>
  )
}

function Proof({ children }) {
  return (
    <p className="thm__proof">
      <em>Idée de preuve.</em> {children} <span className="qed" aria-label="fin de la preuve">∎</span>
    </p>
  )
}

export default function ResearchBody({ research }) {
  const [ref, visible] = useReveal()
  const [theoryRef, theoryVisible] = useReveal()
  const weight = BLOCKS.reduce((sum, b) => sum + b.rk, 0)

  return (
    <>
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

        <aside className="research__math" style={{ '--i': 1 }} aria-label="Illustration du poids sum-rank">
          <p className="research__math-label">Le poids sum-rank en un coup d’œil</p>
          <Tex block>{T`\operatorname{wt}_{\mathrm{SR}}(x) \;=\; \sum_{i=1}^{\ell} \operatorname{rk}_q\!\big(x^{(i)}\big)`}</Tex>

          {/* Les cases actives figurent le rang de chaque bloc */}
          <div className="sumrank" aria-hidden="true">
            {BLOCKS.map((b, i) => (
              <div key={i} className="sumrank__block" style={{ flexGrow: b.n }}>
                <div className="sumrank__cells">
                  {Array.from({ length: b.n }, (_, j) => (
                    <span key={j} className={j < b.rk ? 'is-active' : ''} />
                  ))}
                </div>
                <span className="sumrank__label"><Tex>{`x^{(${i + 1})}`}</Tex> : rang {b.rk}</span>
              </div>
            ))}
          </div>
          <Tex block>{T`\operatorname{wt}_{\mathrm{SR}}(x) = ${BLOCKS.map((b) => b.rk).join(' + ')} = \mathbf{${weight}}`}</Tex>
          <p className="research__math-note">
            Chaque bloc est vu comme une matrice de <Tex>{T`\mathbb{F}_q^{\,m \times n_i}`}</Tex> ;
            les cases bleues figurent son rang.
          </p>

          <table className="metrics">
            <caption className="research__math-label">Une métrique qui en généralise deux</caption>
            <thead>
              <tr><th scope="col">Métrique</th><th scope="col">Cas</th><th scope="col">Poids de <Tex>x</Tex></th></tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Hamming</th>
                <td><Tex>{T`n_1 = \cdots = n_\ell = 1`}</Tex></td>
                <td>coordonnées non nulles</td>
              </tr>
              <tr>
                <th scope="row">Rang</th>
                <td><Tex>{T`\ell = 1`}</Tex></td>
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

      {/* ---------- Cadre mathématique, rédigé comme un article ---------- */}
      <div className="research__theory-head">
        <h3 className="serif">Cadre mathématique</h3>
        <p>
          Notations : <Tex>q</Tex> est une puissance d’un nombre premier, <Tex>{T`m \ge 1`}</Tex>,
          et <Tex>{T`n = n_1 + \cdots + n_\ell`}</Tex> est une partition de la longueur en <Tex>{T`\ell`}</Tex> blocs.
        </p>
      </div>

      <div ref={theoryRef} className={`theory stagger ${theoryVisible ? 'is-visible' : ''}`}>
        <Statement kind="Définition" num={1} name="poids et distance sum-rank">
          <p>On découpe tout vecteur <Tex>{T`x \in \mathbb{F}_{q^m}^{\,n}`}</Tex> en <Tex>{T`\ell`}</Tex> blocs :</p>
          <Tex block>{T`x = \big(x^{(1)} \mid x^{(2)} \mid \cdots \mid x^{(\ell)}\big), \qquad x^{(i)} \in \mathbb{F}_{q^m}^{\,n_i}.`}</Tex>
          <p>Le poids sum-rank de <Tex>x</Tex> est la somme des rangs de ses blocs sur <Tex>{T`\mathbb{F}_q`}</Tex> :</p>
          <Tex block>{T`\operatorname{wt}_{\mathrm{SR}}(x) = \sum_{i=1}^{\ell} \operatorname{rk}_q\!\big(x^{(i)}\big),`}</Tex>
          <p>où le rang d’un bloc est la dimension du <Tex>{T`\mathbb{F}_q`}</Tex>-espace engendré par ses coordonnées :</p>
          <Tex block>{T`\operatorname{rk}_q\!\big(x^{(i)}\big) = \dim_{\mathbb{F}_q} \big\langle x^{(i)}_1, \dots, x^{(i)}_{n_i} \big\rangle_{\mathbb{F}_q}.`}</Tex>
          <p>
            L’application <Tex>{T`d_{\mathrm{SR}}(x, y) = \operatorname{wt}_{\mathrm{SR}}(x - y)`}</Tex> est une
            distance sur <Tex>{T`\mathbb{F}_{q^m}^{\,n}`}</Tex>.
          </p>
        </Statement>

        <Statement kind="Proposition" num={1} name="encadrement" variant="thm">
          <p>Pour tout <Tex>{T`x \in \mathbb{F}_{q^m}^{\,n}`}</Tex>,</p>
          <Tex block>{T`\operatorname{wt}_{\mathrm{R}}(x) \;\le\; \operatorname{wt}_{\mathrm{SR}}(x) \;\le\; \operatorname{wt}_{\mathrm{H}}(x),`}</Tex>
          <p>
            avec égalité à gauche si <Tex>{T`\ell = 1`}</Tex> (métrique rang) et à droite
            si <Tex>{T`n_1 = \cdots = n_\ell = 1`}</Tex> (métrique de Hamming).
          </p>
          <Proof>
            Le rang d’un bloc est majoré par son nombre de coordonnées non nulles ; et la dimension
            d’une somme de sous-espaces est majorée par la somme de leurs dimensions.
          </Proof>
        </Statement>

        <Statement kind="Définition" num={2} name="code linéaire">
          <p>
            Un code <Tex>{T`[n, k]_{q^m}`}</Tex> est un sous-espace <Tex>{T`\mathcal{C} \subseteq \mathbb{F}_{q^m}^{\,n}`}</Tex> de
            dimension <Tex>k</Tex>, noyau d’une matrice de parité <Tex>{T`H \in \mathbb{F}_{q^m}^{(n-k) \times n}`}</Tex> de rang plein :
          </p>
          <Tex block>{T`\mathcal{C} = \big\{\, c \in \mathbb{F}_{q^m}^{\,n} \;:\; H c^{\top} = 0 \,\big\}, \qquad d_{\mathrm{SR}}(\mathcal{C}) = \min_{c \,\in\, \mathcal{C} \setminus \{0\}} \operatorname{wt}_{\mathrm{SR}}(c).`}</Tex>
        </Statement>

        <Statement kind="Théorème" num={1} name="borne de Singleton" variant="thm">
          <p>Tout code <Tex>{T`[n, k]_{q^m}`}</Tex> vérifie</p>
          <Tex block>{T`d_{\mathrm{SR}}(\mathcal{C}) \;\le\; n - k + 1.`}</Tex>
          <p>
            Les codes qui l’atteignent sont dits MSRD ; les codes de Reed–Solomon linéarisés
            (Martínez-Peñas, 2018) en sont l’exemple fondamental et se décodent efficacement
            jusqu’à <Tex>{T`\lfloor (n-k)/2 \rfloor`}</Tex> erreurs.
          </p>
          <Proof>
            Comme <Tex>{T`\operatorname{wt}_{\mathrm{SR}} \le \operatorname{wt}_{\mathrm{H}}`}</Tex>, on
            a <Tex>{T`d_{\mathrm{SR}}(\mathcal{C}) \le d_{\mathrm{H}}(\mathcal{C})`}</Tex>, et l’on conclut
            par la borne de Singleton en métrique de Hamming.
          </Proof>
        </Statement>

        <Statement kind="Problème" num={1} name="SR-SD, décodage par syndrome" variant="pb">
          <p>
            <strong>Entrée :</strong> <Tex>{T`H \in \mathbb{F}_{q^m}^{(n-k) \times n}`}</Tex> de rang
            plein, <Tex>{T`s \in \mathbb{F}_{q^m}^{\,n-k}`}</Tex> et <Tex>{T`t \in \mathbb{N}`}</Tex>.
            <br />
            <strong>Sortie :</strong> <Tex>{T`e \in \mathbb{F}_{q^m}^{\,n}`}</Tex> tel que
          </p>
          <Tex block>{T`H e^{\top} = s^{\top} \qquad \text{et} \qquad \operatorname{wt}_{\mathrm{SR}}(e) = t.`}</Tex>
          <p>
            Pour <Tex>{T`n_1 = \cdots = n_\ell = 1`}</Tex>, c’est le décodage par syndrome en métrique de
            Hamming, dont la version décisionnelle est NP-complète (Berlekamp, McEliece, van Tilborg, 1978) ;
            pour <Tex>{T`\ell = 1`}</Tex>, c’est le problème RSD de la métrique rang. Les meilleurs algorithmes
            génériques connus sont de complexité exponentielle (Puchinger, Renner, Rosenkilde, 2022).
          </p>
        </Statement>

        <Statement kind="Lemme" num={1} name="isométries" variant="thm">
          <p>
            Fixons une base de <Tex>{T`\mathbb{F}_{q^m}`}</Tex> sur <Tex>{T`\mathbb{F}_q`}</Tex> et notons{' '}
            <Tex>{T`M(v) \in \mathbb{F}_q^{\,m \times n_i}`}</Tex> la matrice des coordonnées
            d’un bloc <Tex>{T`v \in \mathbb{F}_{q^m}^{\,n_i}`}</Tex>. Pour <Tex>{T`P_i \in \mathrm{GL}_m(\mathbb{F}_q)`}</Tex> et{' '}
            <Tex>{T`Q_i \in \mathrm{GL}_{n_i}(\mathbb{F}_q)`}</Tex>, l’application
          </p>
          <Tex block>{T`\varphi : x \longmapsto y, \qquad M\big(y^{(i)}\big) = P_i \, M\big(x^{(i)}\big) \, Q_i \quad (1 \le i \le \ell)`}</Tex>
          <p>
            est <Tex>{T`\mathbb{F}_q`}</Tex>-linéaire et préserve <Tex>{T`\operatorname{wt}_{\mathrm{SR}}`}</Tex>.
            Si les <Tex>{T`P_i, Q_i`}</Tex> sont tirés uniformément, <Tex>{T`\varphi(e)`}</Tex> est uniforme parmi
            les vecteurs ayant le même profil de rang <Tex>{T`\big(\operatorname{rk}_q(e^{(i)})\big)_i`}</Tex> que <Tex>e</Tex>.
          </p>
          <Proof>
            <Tex>{T`\operatorname{rk}(P M Q) = \operatorname{rk}(M)`}</Tex> pour <Tex>P, Q</Tex> inversibles, et{' '}
            <Tex>{T`\mathrm{GL}_m \times \mathrm{GL}_{n_i}`}</Tex> agit transitivement sur les matrices de rang fixé.
          </Proof>
        </Statement>

        <Statement kind="Protocole" num={1} name="identification de type Stern en métrique sum-rank" variant="proto" wide>
          <p>
            <strong>Clé publique :</strong> <Tex>{T`(H, s, t)`}</Tex> et un profil de rang{' '}
            <Tex>{T`r = (r_1, \dots, r_\ell)`}</Tex> avec <Tex>{T`\sum_i r_i = t`}</Tex>.{' '}
            <strong>Clé secrète :</strong> <Tex>e</Tex> tel que <Tex>{T`H e^{\top} = s^{\top}`}</Tex> et{' '}
            <Tex>{T`\operatorname{rk}_q(e^{(i)}) = r_i`}</Tex>. <Tex>{T`\mathsf{Com}`}</Tex> est un schéma
            d’engagement. Un tour du protocole :
          </p>
          <Tex block>{T`
\begin{array}{lcr}
\textbf{Prouveur } \mathcal{P} & & \textbf{Vérifieur } \mathcal{V} \\[6pt]
u \xleftarrow{\$} \mathbb{F}_{q^m}^{\,n}, \quad \varphi \xleftarrow{\$} \mathrm{Isom} & & \\[2pt]
c_0 = \mathsf{Com}\big(\varphi \,\|\, H u^{\top}\big) & & \\[2pt]
c_1 = \mathsf{Com}\big(\varphi(u)\big) & \xrightarrow{\quad c_0,\ c_1,\ c_2 \quad} & \\[2pt]
c_2 = \mathsf{Com}\big(\varphi(u + e)\big) & & \\[6pt]
& \xleftarrow{\qquad b \qquad} & b \xleftarrow{\$} \{0, 1, 2\} \\[6pt]
\mathrm{rsp} = \begin{cases} (u, \varphi) & \text{si } b = 0 \\ (u + e, \varphi) & \text{si } b = 1 \\ \big(\varphi(u), \varphi(e)\big) & \text{si } b = 2 \end{cases} & \xrightarrow{\qquad \mathrm{rsp} \qquad} & \text{vérification}
\end{array}`}</Tex>
          <Tex block>{T`
\begin{array}{c|l}
b & \text{Le vérifieur contrôle} \\ \hline
0 & c_0 = \mathsf{Com}\big(\varphi \,\|\, H u^{\top}\big), \quad c_1 = \mathsf{Com}\big(\varphi(u)\big) \\[2pt]
1 & c_0 = \mathsf{Com}\big(\varphi \,\|\, H (u+e)^{\top} - s^{\top}\big), \quad c_2 = \mathsf{Com}\big(\varphi(u+e)\big) \\[2pt]
2 & c_1 = \mathsf{Com}\big(\varphi(u)\big), \quad c_2 = \mathsf{Com}\big(\varphi(u) + \varphi(e)\big), \quad \operatorname{rk}_q\!\big(\varphi(e)^{(i)}\big) = r_i
\end{array}`}</Tex>
        </Statement>

        <Statement kind="Théorème" num={2} name="sécurité du protocole" variant="thm">
          <p>Si <Tex>{T`\mathsf{Com}`}</Tex> est masquant et liant :</p>
          <ul className="thm__list">
            <li><strong>Complétude.</strong> Un prouveur honnête est toujours accepté.</li>
            <li>
              <strong>Significativité.</strong> Trois réponses valides à un même engagement fournissent une
              solution de SR-SD (ou une collision de <Tex>{T`\mathsf{Com}`}</Tex>). La probabilité de fraude est
              donc au plus <Tex>{T`2/3`}</Tex> par tour, et après <Tex>{T`\delta`}</Tex> tours
            </li>
          </ul>
          <Tex block>{T`\Pr[\text{fraude}] \le \left(\tfrac{2}{3}\right)^{\delta}, \qquad \delta = 219 \;\Longrightarrow\; \left(\tfrac{2}{3}\right)^{\delta} < 2^{-128}.`}</Tex>
          <ul className="thm__list">
            <li>
              <strong>Divulgation nulle de connaissance.</strong> Grâce au lemme 1, un simulateur produit sans
              connaître <Tex>e</Tex> des transcriptions indistinguables des vraies (vérifieur honnête).
            </li>
          </ul>
        </Statement>

        <Statement kind="Remarque" num={1} name="signature par Fiat–Shamir" variant="rem">
          <p>
            En calculant lui-même les <Tex>{T`\delta`}</Tex> défis à l’aide d’une fonction de hachage{' '}
            <Tex>{T`\mathcal{H}`}</Tex>,
          </p>
          <Tex block>{T`(b_1, \dots, b_\delta) = \mathcal{H}\big(\mathsf{msg} \,\|\, c^{(1)} \,\|\, \cdots \,\|\, c^{(\delta)}\big) \in \{0, 1, 2\}^{\delta},`}</Tex>
          <p>
            le prouveur transforme le protocole en un schéma de signature numérique, sûr dans le modèle de
            l’oracle aléatoire (Pointcheval–Stern, 1996) : une signature post-quantique dont la sécurité
            repose sur SR-SD.
          </p>
        </Statement>
      </div>
    </>
  )
}
