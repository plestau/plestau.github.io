import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Play, ExternalLink } from 'lucide-react'
import { GithubIcon, ItchIcon } from './BrandIcons'
import { accentOf } from './accents'
import CoverPlaceholder from './CoverPlaceholder'

export default function ProjectModal({ project, onClose }) {
  const [playing, setPlaying] = useState(false)

  // Cierra con Escape y bloquea el scroll del fondo mientras esta abierto
  useEffect(() => {
    if (!project) return
    setPlaying(false)
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [project, onClose])

  const a = project ? accentOf(project.accent) : null

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-void/85 p-4 backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 rounded-lg bg-void/70 p-2 text-muted backdrop-blur transition-colors hover:text-ink"
            >
              <X size={18} />
            </button>

            {/* Zona superior: juego incrustado, portada o vacio */}
            <div className="relative aspect-video w-full border-b border-line bg-surface-2">
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
                  {project.cover ? (
                    <img
                      src={project.cover}
                      alt={`Captura de ${project.title}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <CoverPlaceholder title={project.title} accent={a} featured />
                  )}
                  {project.links?.itchEmbed && (
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-void/50 transition-colors hover:bg-void/30"
                    >
                      <span className="inline-flex items-center gap-2 rounded-xl bg-cyan px-6 py-3 font-medium text-void transition-transform hover:scale-105">
                        <Play size={18} fill="currentColor" /> Jugar en el navegador
                      </span>
                    </button>
                  )}
                </>
              )}
            </div>

            <div className="p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-3xl font-bold tracking-tight">{project.title}</h3>
                <span className={`font-mono text-xs ${a.text}`}>{project.year}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted">
                {[project.studio, project.role].filter(Boolean).join(' \u00b7 ')}
              </p>

              <p className="mt-6 leading-relaxed text-muted">{project.description}</p>

              {project.highlights?.length > 0 && (
                <>
                  <h4 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-ink">
                    Lo que construi
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {project.gallery?.length > 0 && (
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.gallery.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Captura de ${project.title}`}
                      loading="lazy"
                      className="aspect-video w-full rounded-lg border border-line object-cover"
                    />
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] ring-1 ring-inset ${a.chip}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-7">
                {project.links?.itch && (
                  <a
                    href={project.links.itch}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan px-5 py-2.5 text-sm font-medium text-void transition-transform hover:scale-[1.03]"
                  >
                    <ItchIcon size={16} /> Ver en itch.io
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-2.5 text-sm transition-colors hover:border-cyan/50 hover:bg-surface-2"
                  >
                    <GithubIcon size={16} /> Codigo
                  </a>
                )}
                {project.links?.video && (
                  <a
                    href={project.links.video}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-2.5 text-sm transition-colors hover:border-cyan/50 hover:bg-surface-2"
                  >
                    <ExternalLink size={16} /> Trailer
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
