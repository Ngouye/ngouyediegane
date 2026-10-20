import { lazy, Suspense } from 'react'
import SectionHeader from './SectionHeader'
import './Cryptosystems.css'

// Contenu (formules KaTeX) chargé à part, comme pour la section Recherche
const CryptoBody = lazy(() => import('./research/CryptoBody'))

export default function Cryptosystems({ families }) {
  return (
    <section id="cryptosystemes" className="section section--soft crypto">
      <div className="container">
        <SectionHeader
          label="Cryptographie"
          title={<>Les cryptosystèmes, <em>des fondements aux standards.</em></>}
          subtitle="Ma formation de mathématicien couvre la cryptographie de bout en bout : les structures algébriques, les problèmes difficiles et les schémas qui en découlent, du chiffrement symétrique aux standards post-quantiques."
        />
        <Suspense fallback={<div className="crypto-loading" aria-busy="true" />}>
          <CryptoBody families={families} />
        </Suspense>
      </div>
    </section>
  )
}
