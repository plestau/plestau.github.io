import { ArrowUpRight } from 'lucide-react'
import { otherProjects } from '../data/content'
import { GithubIcon, ItchIcon } from './BrandIcons'
import Reveal from './Reveal'

/**
 * Lista compacta de proyectos menores. Da contexto y volumen sin competir
 * visualmente con las tarjetas grandes de los proyectos buenos.
 */
export default function OtherProjects() {
  if (otherProjects.length === 0) return null

  return (
    <div className="mt-20">
      <Reveal>
        <h3 className="font-display text-xl font-semibold">Tambien he trabajado en</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Game jams, practicas y prototipos con los que fui aprendiendo el motor.
        </p>
      </Reveal>

      <ul className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface/40 backdrop-blur">
        {otherProjects.map((p, i) => {
          const href = p.itch || p.repo
          const Row = href ? 'a' : 'div'
          return (
            <Reveal key={`${p.title}-${i}`} delay={i * 0.05} y={12}>
              <li>
                <Row
                  {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
                  className={`flex flex-wrap items-center gap-x-5 gap-y-2 px-6 py-5 transition-colors ${
                    href ? 'group hover:bg-surface-2' : ''
                  }`}
                >
                  <span className="font-mono text-xs text-muted tabular-nums">{p.year}</span>

                  <span className="min-w-0 flex-1">
                    <span className="font-medium">{p.title}</span>
                    <span className="ml-3 rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted ring-1 ring-inset ring-line">
                      {p.kind}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{p.blurb}</span>
                  </span>

                  <span className="flex items-center gap-3 text-muted">
                    {p.repo && <GithubIcon size={15} />}
                    {p.itch && <ItchIcon size={15} />}
                    {href && (
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </span>
                </Row>
              </li>
            </Reveal>
          )
        })}
      </ul>
    </div>
  )
}
