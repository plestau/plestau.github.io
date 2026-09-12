import Reveal from './Reveal'

/** Cabecera comun de seccion: numero, titulo y subtitulo. */
export default function SectionHeading({ index, title, subtitle }) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-cyan tracking-[0.25em]">{index}</span>
        <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-cyan/60 to-transparent" />
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-muted leading-relaxed">{subtitle}</p>}
    </Reveal>
  )
}
