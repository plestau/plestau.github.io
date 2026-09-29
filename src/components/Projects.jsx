import { projects } from '../data/content'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import OtherProjects from './OtherProjects'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Projects({ onOpen }) {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="proyectos" className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Proyectos"
          intro="Juegos que he programado en Unity. Pincha en cualquiera para ver el detalle técnico, las capturas y, cuando está disponible, jugarlo en el navegador."
        />

        <div className="space-y-24 sm:space-y-32">
          {featured.map((p, i) => (
            <Reveal key={p.id}>
              <FeaturedProject project={p} flip={i % 2 === 1} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-x-8 gap-y-14 sm:mt-32 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <ProjectCard project={p} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>

        <OtherProjects />
      </div>
    </section>
  )
}
