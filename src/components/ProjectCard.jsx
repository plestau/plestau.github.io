import Cover from './Cover'
import { openProps, projectLabel } from './projectUtils'

/** Proyecto de la rejilla: imagen, etiqueta, titulo y una linea de descripcion. */
export default function ProjectCard({ project, onOpen }) {
  return (
    <article {...openProps(project, onOpen)} className="group cursor-pointer">
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-surface-2">
        <Cover project={project} size="card" />
      </div>
      <p className="eyebrow mt-5 text-muted">{projectLabel(project)}</p>
      <h3 className="display mt-2 text-3xl transition-colors group-hover:text-accent">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.tagline}</p>
    </article>
  )
}
