import { useEffect } from 'react'

// Un seul écouteur global : positionne --mx / --my sur l'élément .spotlight survolé
export function useSpotlight() {
  useEffect(() => {
    let current = null

    const reset = (el) => {
      el.style.removeProperty('--mx')
      el.style.removeProperty('--my')
    }

    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return
      const el = e.target.closest?.('.spotlight') ?? null
      if (current && current !== el) reset(current)
      current = el
      if (!el) return
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
