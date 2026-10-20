import { useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import './Tex.css'

// Formule LaTeX rendue par KaTeX. Les formules sont des chaînes fixes du code source
// (jamais une saisie utilisateur), d'où l'usage de dangerouslySetInnerHTML.
export default function Tex({ children, block = false }) {
  const html = useMemo(
    () => katex.renderToString(children, { displayMode: block, throwOnError: false, strict: 'ignore' }),
    [children, block]
  )
  return <span className={block ? 'tex tex--block' : 'tex'} dangerouslySetInnerHTML={{ __html: html }} />
}
