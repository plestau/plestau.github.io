import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowDown, Mail, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon, ItchIcon } from './BrandIcons'
import { profile, stats } from '../data/content'

/** Escribe y borra los roles en bucle, como una terminal. */
function Typewriter({ words, speed = 70, pause = 1800 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? speed / 2 : speed

    if (!deleting && text === word) {
      delay = pause
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, speed, pause])

  return (
    <span className="text-cyan text-glow">
      {text}
      <span className="ml-0.5 inline-block w-[2px] translate-y-0.5 animate-pulse bg-cyan" style={{ height: '1em' }} />
    </span>
  )
}

/** Cuenta de 0 a value cuando entra en pantalla. */
function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const duration = 1200
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setShown(Math.round(eased * value))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  )
}

const socials = [
  { key: 'github', href: profile.github, icon: GithubIcon, label: 'GitHub' },
  { key: 'linkedin', href: profile.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
  { key: 'itch', href: profile.itch, icon: ItchIcon, label: 'itch.io' },
  { key: 'cv', href: profile.cv, icon: FileText, label: 'CV' },
]

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-28 pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="font-mono text-xs text-muted">Disponible para nuevos proyectos</span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>

          <p className="mt-5 font-mono text-xl sm:text-2xl lg:text-3xl">
            <Typewriter words={profile.roles} />
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="group relative overflow-hidden rounded-xl bg-cyan px-6 py-3 font-medium text-void transition-transform hover:scale-[1.03]"
            >
              <span className="relative z-10">Ver proyectos</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/60 px-6 py-3 font-medium backdrop-blur transition-colors hover:border-cyan/50 hover:bg-surface-2"
            >
              <Mail size={17} />
              Contactar
            </a>

            <div className="ml-1 flex items-center gap-1">
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
                    className="rounded-xl border border-line bg-surface/60 p-3 text-muted backdrop-blur transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan"
                  >
                    <Icon size={18} />
                  </a>
                ))}
            </div>
          </div>

          <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface/70 px-5 py-6 backdrop-blur">
                <dt className="font-display text-3xl font-bold text-cyan">
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <a
        href="#proyectos"
        aria-label="Ir a proyectos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-cyan"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  )
}
