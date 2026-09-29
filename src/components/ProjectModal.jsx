import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Play, ExternalLink, Maximize2 } from 'lucide-react'
import { GithubIcon, ItchIcon } from './BrandIcons'
import Cover from './Cover'
import Lightbox from './Lightbox'
import { projectLabel } from './projectUtils'

export default function ProjectModal({ project, onClose }) {
  const [playing, setPlaying] = useState(false)
  const [ampliada, setAmpliada] = useState(null)

  // Al abrir otro proyecto se reinicia el estado interno. Va en su propio
  // efecto: si compartiera el de abajo, que depende de `ampliada`, se
  // anularia a si mismo en cuanto se ampliara una captura.
  useEffect(() => {
    setPlaying(false)
    setAmpliada(null)
  }, [project])

  // Cierra con Escape y bloquea el scroll del fondo mientras esta abierto
  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      // Si hay una captura ampliada, Escape solo cierra esa
      if (ampliada !== null) setAmpliada(null)
      else onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [project, onClose, ampliada])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-bg/90 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-sm border border-line bg-surface"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 rounded-sm bg-bg/80 p-2 text-muted transition-colors hover:text-ink"
            >
              <X size={18} />
            </button>

            {/* Zona superior: juego incrustado o portada */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-line bg-surface-2">
              {playing && project.links?.itchEmbed ? (
                <iframe
                  src={project.links.itchEmbed}
                  title={`Jugar a ${project.title}`}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; gamepad; xr-spatial-tracking"
                  allowFullScreen
                />
              ) : (
                <>
                  <Cover project={project} size="modal" zoom={false} />
                  {project.links?.itchEmbed && (
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-bg/50 transition-colors hover:bg-bg/30"
                    >
                      <span className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-bg">
                        <Play size={18} fill="currentColor" /> Jugar en el navegador
                      </span>
                    </button>
                  )}
                </>
              )}
            </div>

            <div className="p-7 sm:p-10">
              <p className="eyebrow text-accent">{projectLabel(project)}</p>
              <h3 className="display mt-3 text-5xl">{project.title}</h3>
              <p className="mt-3 text-sm text-muted">{[project.role, project.studio].filter(Boolean).join(' · ')}</p>

              <p className="mt-8 leading-relaxed text-ink/85">{project.description}</p>

              {project.highlights?.length > 0 && (
                <>
                  <h4 className="eyebrow mt-10 text-muted">Lo que programé</h4>
                  <ul className="mt-4 space-y-2.5 border-t border-line pt-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="text-accent" aria-hidden="true">
                          —
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {project.gallery?.length > 0 && (
                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.gallery.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setAmpliada(i)}
                      aria-label={`Ampliar captura ${i + 1} de ${project.title}`}
                      className="group/thumb relative overflow-hidden rounded-sm border border-line transition-colors hover:border-muted"
                    >
                      <img
                        src={src}
                        alt={`Captura de ${project.title}`}
                        loading="lazy"
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                      />
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg/60 opacity-0 transition-opacity group-hover/thumb:opacity-100">
                        <Maximize2 size={18} className="text-ink" />
                      </span>
                    </button>
                  ))}
                </div>
              )}

              <p className="mt-10 text-xs leading-relaxed text-muted">{project.tech.join(' · ')}</p>

              {(project.links?.itch || project.links?.repo || project.links?.video) && (
                <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-8">
                  {project.links?.itch && (
                    <a
                      href={project.links.itch}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent"
                    >
                      <ItchIcon size={16} /> Ver en itch.io
                    </a>
                  )}
                  {project.links?.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-2.5 text-sm transition-colors hover:border-muted"
                    >
                      <GithubIcon size={16} /> Código
                    </a>
                  )}
                  {project.links?.video && (
                    <a
                      href={project.links.video}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-2.5 text-sm transition-colors hover:border-muted"
                    >
                      <ExternalLink size={16} /> Tráiler
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          <Lightbox
            images={project.gallery ?? []}
            index={ampliada}
            title={project.title}
            onClose={() => setAmpliada(null)}
            onIndex={setAmpliada}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
