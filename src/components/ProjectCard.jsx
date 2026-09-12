import { useRef, useState } from 'react'
import { ArrowUpRight, Gamepad2, Timer } from 'lucide-react'
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
          <>
            {project.coverBackdrop && (
              <img
                src={project.cover}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-2xl"
              />
            )}
          <img
            src={project.cover}
            alt={`Captura de ${project.title}`}
            loading="lazy"
            className={`h-full w-full transition-transform duration-700 ${
              project.coverFit === 'contain'
                ? `relative object-contain group-hover:scale-[1.03] ${project.coverBackdrop ? 'p-0 [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)]' : 'p-6'}`
                : 'object-cover group-hover:scale-105'
            }`}
          />
          </>
        ) : (
          <CoverPlaceholder title={project.title} accent={a} featured={featured} />
        )}
        {project.cover && project.logo && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-void/95 via-void/50 to-transparent px-6 pb-5 pt-20">
            <img
              src={project.logo}
              alt={`Logo de ${project.title}`}
              className={`${featured ? 'w-[46%] max-w-[440px]' : 'w-3/5'} drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]`}
            />
          </div>
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
          {project.jam && (
            <span className="inline-flex items-center gap-1 rounded-full bg-void/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan ring-1 ring-cyan/25 backdrop-blur">
              <Timer size={11} /> Juego de jam
            </span>
          )}
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
