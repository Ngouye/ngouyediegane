import { useEffect, useRef } from 'react'
import { FiX } from 'react-icons/fi'
import './Modal.css'

// Fenêtre modale basée sur <dialog> : focus piégé, Échap et fond inerte gérés par le navigateur
export default function Modal({ title, onClose, wide = false, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const previouslyFocused = document.activeElement

    dialog.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
      if (dialog.open) dialog.close()
      previouslyFocused?.focus?.()
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className={`modal ${wide ? 'modal--wide' : ''}`}
      aria-label={title}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => {
        // Un clic sur le fond (::backdrop) cible le <dialog> lui-même
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal__content">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Fermer">
          <FiX size={20} />
        </button>
        {children}
      </div>
    </dialog>
  )
}
