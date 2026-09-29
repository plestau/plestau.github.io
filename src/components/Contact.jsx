import { ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, ItchIcon } from './BrandIcons'
import { profile } from '../data/content'
import Reveal from './Reveal'

const links = [
  { key: 'github', href: profile.github, icon: GithubIcon, label: 'GitHub' },
  { key: 'linkedin', href: profile.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
  { key: 'itch', href: profile.itch, icon: ItchIcon, label: 'itch.io' },
]

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 border-t border-line px-6 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-6xl">
        <p className="eyebrow text-accent">Contacto</p>
        <h2 className="display mt-4 text-7xl sm:text-8xl">¿Hablamos?</h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Busco un equipo donde seguir creciendo como programador de gameplay. Si encaja lo que ves, escríbeme.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-12 inline-flex max-w-full items-center gap-3 border-b border-muted pb-2 text-2xl font-semibold transition-colors hover:border-accent sm:text-4xl"
        >
          <span className="break-all">{profile.email}</span>
          <ArrowUpRight
            className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            size={28}
          />
        </a>

        <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
          {links
            .filter((l) => l.href)
            .map(({ key, href, icon: Icon, label }) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <Icon size={16} />
                  {label}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
        </ul>
      </Reveal>
    </section>
  )
}
