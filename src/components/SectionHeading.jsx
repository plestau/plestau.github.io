import Reveal from './Reveal'

/** Cabecera comun de seccion: titulo grande a la izquierda y entradilla a la derecha. */
export default function SectionHeading({ title, intro }) {
  return (
    <Reveal className="mb-16 grid gap-6 sm:mb-20 lg:grid-cols-12 lg:items-end">
      <h2 className="display text-6xl sm:text-7xl lg:col-span-6">{title}</h2>
      {intro && <p className="max-w-xl leading-relaxed text-muted lg:col-span-6 lg:justify-self-end">{intro}</p>}
    </Reveal>
  )
}
