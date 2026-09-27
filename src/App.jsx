import {
  profile,
  projects,
  experiences,
  educations,
  skills,
  cybersecurityCertifications,
  expertise,
  workflow,
  skillGroups,
} from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useSpotlight } from './hooks/useSpotlight'

export default function App() {
  useSpotlight()

  // Signaux de confiance affichés sous les boutons de l'accueil
  const stats = [
    { value: `${cybersecurityCertifications.length}`, label: 'Certifications', hint: 'Microsoft · Harvard · ANSSI' },
    { value: `${projects.length}`, label: 'Projets réalisés', hint: 'DevSecOps · Cloud · SOC' },
    { value: `${Math.floor(skills.length / 10) * 10}+`, label: 'Outils maîtrisés', hint: 'SAST · DAST · IaC · AWS' },
  ]

  return (
    <>
      <a href="#main" className="skip-link">Aller au contenu</a>
      <Navbar />
      <main id="main">
        <Hero profile={profile} stats={stats} features={expertise.slice(0, 4)} />
        <About profile={profile} workflow={workflow} />
        <Expertise items={expertise} />
        <Skills skills={skills} groups={skillGroups} />
        <Projects projects={projects} />
        <Journey experiences={experiences} educations={educations} />
        <Certifications certifications={cybersecurityCertifications} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
