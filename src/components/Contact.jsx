import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, ItchIcon } from './BrandIcons'
import { profile } from '../data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const links = [
  { key: 'github', href: profile.github, icon: GithubIcon, label: 'GitHub', handle: '@plestau' },
  { key: 'linkedin', href: profile.linkedin, icon: LinkedinIcon, label: 'LinkedIn', handle: 'Perfil profesional' },
  { key: 'itch', href: profile.itch, icon: ItchIcon, label: 'itch.io', handle: 'Mis juegos' },
]

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          title="Hablamos"
          subtitle="Busco un equipo donde seguir creciendo como programador de gameplay. Si encaja lo que ves, escribeme."
        />

        <Reveal>
          <a
            href={`mailto:${profile.email}`}
            className="group flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-surface/60 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-cyan/50 sm:p-10"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cyan">Escribeme</p>
              <p className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-4xl">{profile.email}</p>
            </div>
            <span className="rounded-xl bg-cyan/10 p-4 text-cyan ring-1 ring-cyan/20 transition-transform group-hover:scale-110">
              <Mail size={26} />
            </span>
          </a>
        </Reveal>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {links
            .filter((l) => l.href)
            .map(({ key, href, icon: Icon, label, handle }, i) => (
              <Reveal key={key} delay={i * 0.08}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-cyan/50"
                >
                  <Icon size={20} className="shrink-0 text-muted transition-colors group-hover:text-cyan" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{label}</p>
                    <p className="truncate text-xs text-muted">{handle}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  )
}
