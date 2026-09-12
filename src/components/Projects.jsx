import { useState } from 'react'
import { projects } from '../data/content'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="proyectos" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          title="Proyectos"
          subtitle="Juegos que he programado en Unity. Pincha en cualquiera para ver el detalle tecnico, las capturas y, cuando esta disponible, jugarlo en el navegador."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((p) => (
            <Reveal key={p.id} className="lg:col-span-2">
              <ProjectCard project={p} featured onOpen={setSelected} />
            </Reveal>
          ))}
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
