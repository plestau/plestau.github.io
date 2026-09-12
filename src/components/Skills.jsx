import { Gamepad2, Code2, Layers, Wrench } from 'lucide-react'
import { skillGroups } from '../data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const icons = { gamepad: Gamepad2, code: Code2, layers: Layers, wrench: Wrench }

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="Stack"
          subtitle="Lo que uso a diario, entre el motor y el navegador."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? Code2
            return (
              <Reveal key={group.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur transition-colors hover:border-cyan/40">
                  <div className="mb-5 inline-flex rounded-xl bg-cyan/10 p-3 text-cyan ring-1 ring-cyan/20 transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted ring-1 ring-inset ring-line"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
