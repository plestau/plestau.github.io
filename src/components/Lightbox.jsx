import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Visor a pantalla completa para las capturas de un proyecto.
 * Se cierra con Escape o pinchando fuera; se navega con las flechas
 * del teclado o con los botones laterales.
 */
export default function Lightbox({ images, index, title, onClose, onIndex }) {
  const abierto = index !== null && index >= 0
  const total = images?.length ?? 0
  const capaRef = useRef(null)

  useEffect(() => {
    if (!abierto) return

    const onKey = (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      // Sin esto las flechas ademas desplazan la pagina de detras
      e.preventDefault()
      onIndex(e.key === 'ArrowRight' ? (index + 1) % total : (index - 1 + total) % total)
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [abierto, index, total, onIndex])

  // Lleva el foco al visor al abrirlo y lo devuelve al cerrarlo, para que
  // el teclado actue sobre el y no sobre la miniatura que quedo detras.
  useEffect(() => {
    if (!abierto) return
    const anterior = document.activeElement
    capaRef.current?.focus()
    return () => {
      if (anterior instanceof HTMLElement) anterior.focus()
    }
  }, [abierto])

  return (
    <AnimatePresence>
      {abierto && (
        <motion.div
          ref={capaRef}
          tabIndex={-1}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-void/95 p-4 outline-none backdrop-blur-sm sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Captura ampliada de ${title}`}
        >
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-4 top-4 z-10 rounded-lg bg-surface/80 p-2.5 text-muted ring-1 ring-line backdrop-blur transition-colors hover:text-ink"
          >
            <X size={20} />
          </button>

          {total > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onIndex((index - 1 + total) % total)
                }}
                aria-label="Anterior"
                className="absolute left-3 z-10 rounded-full bg-surface/80 p-3 text-muted ring-1 ring-line backdrop-blur transition-colors hover:text-ink sm:left-6"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onIndex((index + 1) % total)
                }}
                aria-label="Siguiente"
                className="absolute right-3 z-10 rounded-full bg-surface/80 p-3 text-muted ring-1 ring-line backdrop-blur transition-colors hover:text-ink sm:right-6"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Captura ampliada de ${title}`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          />

          {total > 1 && (
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-surface/80 px-3.5 py-1.5 font-mono text-xs text-muted ring-1 ring-line backdrop-blur">
              {index + 1} / {total}
            </span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
