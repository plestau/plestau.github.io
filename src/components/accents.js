// Mapa estatico de acentos. Tailwind necesita las clases escritas enteras,
// por eso no se construyen con plantillas tipo `text-${color}`.
export const accents = {
  cyan: {
    text: 'text-cyan',
    hoverText: 'group-hover:text-cyan',
    dot: 'bg-cyan',
    border: 'group-hover:border-cyan/50',
    chip: 'bg-cyan/10 text-cyan ring-cyan/20',
    glow: 'rgba(34,211,238,0.16)',
  },
  violet: {
    text: 'text-violet',
    hoverText: 'group-hover:text-violet',
    dot: 'bg-violet',
    border: 'group-hover:border-violet/50',
    chip: 'bg-violet/10 text-violet ring-violet/20',
    glow: 'rgba(168,85,247,0.16)',
  },
  lime: {
    text: 'text-lime',
    hoverText: 'group-hover:text-lime',
    dot: 'bg-lime',
    border: 'group-hover:border-lime/50',
    chip: 'bg-lime/10 text-lime ring-lime/20',
    glow: 'rgba(163,230,53,0.16)',
  },
}

export const accentOf = (key) => accents[key] ?? accents.cyan
