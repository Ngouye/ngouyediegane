import { getToolIcon } from '../data/toolIcons'
import './ToolTag.css'

// Logo d'un outil ; décoratif, le nom est toujours affiché à côté
export function ToolIcon({ name, size = 18 }) {
  const src = getToolIcon(name)
  if (!src) return null
  return (
    <img
      className="tool-icon"
      src={src}
      alt=""
      height={size}
      style={{ '--icon-size': `${size}px` }}
      loading="lazy"
      decoding="async"
    />
  )
}

// Étiquette « logo + nom »
export default function ToolTag({ name }) {
  return (
    <span className="tag tool-tag">
      <ToolIcon name={name} size={16} />
      {name}
    </span>
  )
}
