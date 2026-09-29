import { ArrowUpRight } from 'lucide-react'
import { otherProjects } from '../data/content'
import Reveal from './Reveal'

/**
 * Lista compacta de proyectos menores. Da contexto y volumen sin competir
 * visualmente con los proyectos grandes.
 */
export default function OtherProjects() {
  if (otherProjects.length === 0) return null

  return (
    <div className="mt-24 sm:mt-32">
      <Reveal>
        <h3 className="display text-4xl">También he trabajado en</h3>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Game jams, prácticas y prototipos con los que fui aprendiendo el motor.
        </p>

        <ul className="mt-8 border-t border-line">
          {otherProjects.map((p, i) => {
            const href = p.itch || p.repo
            const Row = href ? 'a' : 'div'
            return (
              <li key={`${p.title}-${i}`} className="border-b border-line">
                <Row
                  {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex items-start gap-6 py-5"
                >
                  <span className="w-12 shrink-0 pt-0.5 text-sm tabular-nums text-muted">{p.year}</span>

                  <span className="min-w-0 flex-1 sm:grid sm:grid-cols-[15rem_1fr] sm:gap-8">
                    <span className="block font-semibold transition-colors group-hover:text-accent">
                      {p.title}
                      <span className="ml-2 text-xs font-normal text-muted">{p.kind}</span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted sm:mt-0">{p.blurb}</span>
                  </span>

                  {href && (
                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  )}
                </Row>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </div>
  )
}
