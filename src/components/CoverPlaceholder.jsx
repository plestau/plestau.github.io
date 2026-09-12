import { Image as ImageIcon } from 'lucide-react'

/** Portada provisional mientras no hay captura: inicial del juego sobre una
 *  rejilla tenue, para que la tarjeta no se vea como un hueco vacio. */
export default function CoverPlaceholder({ title, accent, featured }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #2a3044 1px, transparent 1px), linear-gradient(to bottom, #2a3044 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(60% 60% at 50% 45%, ${accent.glow}, transparent 70%)` }}
      />
      <span
        className={`relative font-display font-bold leading-none opacity-25 ${accent.text} ${
          featured ? 'text-[9rem]' : 'text-[5rem]'
        }`}
      >
        {title.charAt(0).toUpperCase()}
      </span>
      <span className="absolute bottom-4 flex items-center gap-1.5 font-mono text-[10px] text-muted/60">
        <ImageIcon size={11} /> captura pendiente
      </span>
    </div>
  )
}
