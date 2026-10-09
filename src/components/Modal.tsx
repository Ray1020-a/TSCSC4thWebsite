import { useEffect, useId, useRef, type ReactNode } from 'react'
import './Modal.css'

interface ModalProps {
  open: boolean
  /** 標題上方的英文小標，例如 History。 */
  label: string
  title: string
  subtitle?: string
  onClose: () => void
  children: ReactNode
}

export default function Modal({
  open,
  label,
  title,
  subtitle,
  onClose,
  children,
}: ModalProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    // 開啟時把焦點移到關閉鈕，關閉後還給原本的按鈕
    const prevFocus = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prevFocus?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="modal-close"
          aria-label="關閉"
          onClick={onClose}
        >
          ×
        </button>
        <header className="modal-head">
          <span className="section-label">{label}</span>
          <h2 id={titleId} className="modal-title">
            {title}
          </h2>
          {subtitle && <p className="modal-subtitle">{subtitle}</p>}
        </header>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}
