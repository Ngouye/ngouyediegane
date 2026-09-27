import { useEffect, useState } from 'react'

// Anime la partie numérique d'une valeur ("50+" -> 0+ … 50+) une fois `run` vrai.
// Les valeurs non numériques ("M2") sont renvoyées telles quelles.
export function useCountUp(value, run, duration = 1600) {
  const match = /^(\d+)(\D*)$/.exec(value)
  const target = match ? Number(match[1]) : null
  const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  // Sans animation : valeur finale affichée d'emblée
  const [current, setCurrent] = useState(() => (reduce ? target : 0))

  useEffect(() => {
    if (target === null || !run || reduce) return
    const start = performance.now()
    let frame

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCurrent(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, run, duration, reduce])

  return match ? `${current}${match[2]}` : value
}
