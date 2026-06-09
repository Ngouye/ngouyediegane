import { useState, useEffect } from 'react'
import { getPortfolio } from './api/portfolioApi'
import './App.css'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import DevSecOpsTools from './components/DevSecOpsTools'
import AISection from './components/AISection'
import DevOpsTools from './components/DevOpsTools'
import Pentesting from './components/Pentesting'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPortfolio()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <div className="loading__orb" />
        <span className="loading__brand">Kalimaster</span>
        <div className="loading__bar"><div className="loading__bar-fill" /></div>
        <p className="loading__text">Initialisation</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="loading">
        <p style={{ color: '#ff6eb4', fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>
          Impossible de charger le portfolio
        </p>
        <p style={{ color: 'var(--text-muted)' }}>{error}</p>
      </div>
    )
  }

  const { profile, projects, experiences, educations, skills } = data

  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <div className="app-bg" aria-hidden="true">
        <div className="app-bg__aurora" />
        <div className="app-bg__orb app-bg__orb--1" />
        <div className="app-bg__orb app-bg__orb--2" />
        <div className="app-bg__orb app-bg__orb--3" />
        <div className="app-bg__beam" />
        <div className="app-bg__beam app-bg__beam--2" />
        <div className="app-bg__grid" />
        <div className="app-bg__vignette" />
      </div>
      <Navbar />
      <main>
        <Hero profile={profile} skills={skills} />
        <About profile={profile} />
        <DevSecOpsTools skills={skills} />
        <AISection />
        <DevOpsTools skills={skills} />
        <Pentesting data={data} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Journey experiences={experiences} educations={educations} />
        <Certifications educations={educations} certifications={data?.cybersecurityCertifications || []} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}

export default App
