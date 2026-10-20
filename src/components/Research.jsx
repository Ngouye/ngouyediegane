import { lazy, Suspense } from 'react'
import SectionHeader from './SectionHeader'
import './Research.css'

// Le contenu mathématique (KaTeX) est chargé à part pour ne pas alourdir l'ouverture du site
const ResearchBody = lazy(() => import('./research/ResearchBody'))

export default function Research({ research }) {
  return (
    <section id="recherche" className="section research">
      <div className="container">
        <SectionHeader
          label="Recherche"
          title={<>Mathématiques &amp; <em>cryptographie post-quantique.</em></>}
          subtitle="Mathématicien de formation, je mène en parallèle de mon parcours technique un travail de recherche en cryptographie fondée sur les codes correcteurs."
        />
        <Suspense fallback={<div className="math-loading" aria-busy="true" />}>
          <ResearchBody research={research} />
        </Suspense>
      </div>
    </section>
  )
}
