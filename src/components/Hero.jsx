import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon, ItchIcon } from './BrandIcons'
import { profile, heroShots, projects } from '../data/content'

// Tiempo que se queda cada captura antes de pasar a la siguiente
const INTERVAL = 7000

const shots = heroShots.map((shot) => ({
  ...shot,
  project: projects.find((p) => p.id === shot.project),
}))

const socials = [
  { key: 'github', href: profile.github, icon: GithubIcon, label: 'GitHub' },
  { key: 'linkedin', href: profile.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
  { key: 'itch', href: profile.itch, icon: ItchIcon, label: 'itch.io' },
  { key: 'cv', href: profile.cv, icon: FileText, label: 'CV' },
]

export default function Hero({ onOpenProject }) {
  const [current, setCurrent] = useState(0)
  const shot = shots[current]

  // Pasa a la siguiente captura. Depende de `current` para que, si el
  // visitante elige una a mano, la cuenta empiece de cero desde ahi.
  useEffect(() => {
    if (shots.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setTimeout(() => setCurrent((i) => (i + 1) % shots.length), INTERVAL)
    return () => clearTimeout(timer)
  }, [current])

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        {shots.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt=""
            fetchPriority={i === 0 ? 'high' : 'auto'}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg/80 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-accent">{profile.headline}</p>
          <h1 className="display mt-4 text-[clamp(3.5rem,14vw,10rem)]">{profile.name}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href="#proyectos"
              className="rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent"
            >
              Ver proyectos
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-ink underline decoration-muted underline-offset-[6px] transition-colors hover:decoration-accent"
            >
              {profile.email}
            </a>
            <div className="flex items-center gap-5">
              {socials
                .filter((s) => s.href)
                .map(({ key, href, icon: Icon, label }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    <Icon size={18} />
                  </a>
                ))}
            </div>
          </div>
        </motion.div>

        {shots.length > 0 && (
          <div className="mt-20 flex items-center justify-between gap-6 border-t border-ink/15 pt-4">
            {shot.project ? (
              <button
                type="button"
                onClick={() => onOpenProject(shot.project)}
                className="group min-w-0 truncate text-left text-sm text-muted"
              >
                <span className="eyebrow mr-3 hidden sm:inline">En pantalla</span>
                <span className="text-ink underline-offset-4 group-hover:underline">{shot.project.title}</span>
                <span> · {shot.project.year}</span>
              </button>
            ) : (
              <span />
            )}

            {shots.length > 1 && (
              <div className="flex shrink-0 gap-2">
                {shots.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Mostrar captura de ${s.project?.title ?? i + 1}`}
                    aria-pressed={i === current}
                    className="group py-3"
                  >
                    <span className="relative block h-0.5 w-8 overflow-hidden bg-ink/25 transition-colors group-hover:bg-ink/50">
                      {i === current && (
                        <span
                          key={current}
                          className="hero-progress absolute inset-0 bg-ink"
                          style={{ animationDuration: `${INTERVAL}ms` }}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
