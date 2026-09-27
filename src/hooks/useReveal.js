import { useEffect, useRef, useState } from 'react'

export function useReveal(threshold = 0.02) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let done = false
    const reveal = () => {
      if (done) return
      done = true
      setVisible(true)
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && reveal(),
      { threshold, rootMargin: '0px 0px -20px 0px' }
    )

    // Secours : un saut d'ancre peut faire passer l'élément d'en dessous à au-dessus
    // de l'écran sans qu'il ne l'intersecte jamais — l'observer ne se déclenche alors pas.
    const onScroll = () => {
      if (el.getBoundingClientRect().top < window.innerHeight) reveal()
    }

    observer.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [threshold])

  return [ref, visible]
}
