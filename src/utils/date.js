const MONTHS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']

// "2025-03-01" -> "mars 2025"
export function formatMonth(dateStr) {
  if (!dateStr) return ''
  const [year, month] = dateStr.split('-')
  return `${MONTHS[parseInt(month, 10) - 1]} ${year}`
}
