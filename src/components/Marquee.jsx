import './Marquee.css'

export default function Marquee({ items }) {
  const doubled = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            {item}
            <span className="marquee__dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
