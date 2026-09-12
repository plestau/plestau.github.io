import { useRef, useState } from 'react'
import { ArrowUpRight, Gamepad2 } from 'lucide-react'
import CoverPlaceholder from './CoverPlaceholder'
import { accentOf } from './accents'

/** Tarjeta de proyecto con halo que sigue al raton. */
export default function ProjectCard({ project, featured = false, onOpen }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const a = accentOf(project.accent)

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(project)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${project.title}`}
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${a.border} ${
        featured ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, ${a.glow}, transparent 65%)` }}
      />

      {/* Portada */}
      <div
        className={`relative overflow-hidden border-b border-line bg-surface-2 ${
          featured ? 'aspect-[16/9] max-h-[420px]' : 'aspect-[16/10]'
        }`}
      >
        {project.cover ? (
          <img
            src={project.cover}
            alt={`Captura de ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <CoverPlaceholder title={project.title} accent={a} featured={featured} />
        )}

        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ring-1 backdrop-blur ${
              project.status === 'wip'
                ? 'bg-amber-400/10 text-amber-300 ring-amber-400/25'
                : 'bg-lime/10 text-lime ring-lime/25'
            }`}
          >
            {project.status === 'wip' ? 'En desarrollo' : 'Terminado'}
          </span>
          {project.links?.itchEmbed && (
            <span className="inline-flex items-center gap-1 rounded-full bg-void/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan ring-1 ring-cyan/25 backdrop-blur">
              <Gamepad2 size={11} /> Jugable
            </span>
          )}
        </div>
      </div>

      {/* Cuerpo */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={`font-display font-bold tracking-tight ${featured ? 'text-3xl' : 'text-xl'}`}>
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted">
              {[project.studio, project.year].filter(Boolean).join(' \u00b7 ')}
            </p>
          </div>
          <ArrowUpRight
            size={20}
            className={`shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${a.hoverText}`}
          />
        </div>

        <p className={`mt-4 leading-relaxed text-muted ${featured ? '' : 'text-sm'}`}>{project.tagline}</p>

        {featured && project.highlights?.length > 0 && (
          <ul className="mt-6 space-y-2">
            {project.highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex gap-3 text-sm text-muted">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tech.slice(0, featured ? 8 : 4).map((t) => (
            <span
              key={t}
              className={`rounded-md px-2.5 py-1 font-mono text-[11px] ring-1 ring-inset ${a.chip}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
