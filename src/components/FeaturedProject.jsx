import { ArrowRight } from 'lucide-react'
import Cover from './Cover'
import { openProps, projectLabel } from './projectUtils'

/** Proyecto destacado: imagen grande a un lado y texto al otro. `flip` los intercambia. */
export default function FeaturedProject({ project, flip = false, onOpen }) {
  return (
    <article
      {...openProps(project, onOpen)}
      className="group grid cursor-pointer items-center gap-8 lg:grid-cols-12 lg:gap-14"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-sm bg-surface-2 lg:col-span-7 ${
          flip ? 'lg:order-2' : ''
        }`}
      >
        <Cover project={project} size="featured" />
      </div>

      <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <p className="eyebrow text-accent">{projectLabel(project)}</p>
        <h3 className="display mt-3 text-5xl sm:text-6xl">{project.title}</h3>
        <p className="mt-3 text-sm text-muted">{[project.role, project.studio].filter(Boolean).join(' · ')}</p>

        <p className="mt-6 text-lg leading-relaxed text-ink/85">{project.tagline}</p>

        {project.highlights?.length > 0 && (
          <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="text-accent" aria-hidden="true">
                  —
                </span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-6 text-xs leading-relaxed text-muted">{project.tech.join(' · ')}</p>

        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">
          Ver ficha completa
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  )
}
