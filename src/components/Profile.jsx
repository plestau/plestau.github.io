import { education, skillGroups } from '../data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

/** Formacion y stack, uno al lado del otro, como listas de texto. */
export default function Profile() {
  return (
    <section id="perfil" className="scroll-mt-20 border-t border-line px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Perfil"
          intro="Llego a los videojuegos desde el desarrollo de software: tengo el título de Desarrollo de Aplicaciones Web y el de Desarrollo de Aplicaciones Multiplataforma."
        />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <h3 className="eyebrow text-muted">Formación</h3>
            <ol className="mt-6 border-t border-line">
              {education.map((item) => (
                <li key={item.title} className="grid gap-1 border-b border-line py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
                  <span className="pt-0.5 text-sm tabular-nums text-muted">{item.period}</span>
                  <div>
                    <p className="font-semibold leading-snug">
                      {item.title}
                      {item.current && <span className="eyebrow ml-3 whitespace-nowrap text-accent">En curso</span>}
                    </p>
                    {item.org && <p className="mt-1 text-sm text-muted">{item.org}</p>}
                    {item.note && <p className="mt-2 text-sm leading-relaxed text-muted">{item.note}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <h3 className="eyebrow text-muted">Stack</h3>
            <dl className="mt-6 border-t border-line">
              {skillGroups.map((group) => (
                <div key={group.title} className="border-b border-line py-6">
                  <dt className="font-semibold">{group.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{group.items.join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
