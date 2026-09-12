import { GraduationCap } from 'lucide-react'
import { education } from '../data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

/** Apartado breve de formacion, en linea de tiempo vertical. */
export default function Education() {
  return (
    <section id="formacion" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          title="Formacion"
          subtitle="Llego a los videojuegos desde el desarrollo de software: tengo el titulo de Desarrollo de Aplicaciones Web y el de Desarrollo de Aplicaciones Multiplataforma."
        />

        <ol className="relative max-w-3xl border-l border-line pl-8">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <li className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-cyan/40 bg-void">
                  <span className="h-2 w-2 rounded-full bg-cyan" />
                </span>

                <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur transition-colors hover:border-cyan/40">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan ring-1 ring-cyan/20">
                      <GraduationCap size={11} /> {item.tag}
                    </span>
                    <span className="font-mono text-xs text-muted">{item.period}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                  {item.org && <p className="mt-1 text-sm text-muted">{item.org}</p>}
                  {item.note && <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
