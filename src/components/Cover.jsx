const logoWidth = {
  card: 'w-3/5',
  featured: 'w-[46%] max-w-[440px]',
  modal: 'w-1/2 max-w-[460px]',
}

const containPadding = {
  card: 'p-6',
  featured: 'p-8',
  modal: 'p-8',
}

/**
 * Portada de un proyecto: la captura (recortada o entera segun coverFit),
 * el fondo desenfocado si lo pide y el logo superpuesto. Sin captura muestra
 * el titulo. El contenedor debe ser `relative overflow-hidden`; si ademas
 * tiene la clase `group`, la imagen se amplia un poco al pasar el raton.
 */
export default function Cover({ project, size = 'card', zoom = true }) {
  if (!project.cover) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-surface-2">
        <span className="display text-5xl text-muted/40">{project.title}</span>
      </div>
    )
  }

  const contain = project.coverFit === 'contain'
  const fit = contain
    ? `object-contain ${
        project.coverBackdrop
          ? '[mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)]'
          : containPadding[size]
      }`
    : 'object-cover'

  return (
    <>
      {project.coverBackdrop && (
        <img
          src={project.cover}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-2xl"
        />
      )}
      <img
        src={project.cover}
        alt={`Captura de ${project.title}`}
        loading="lazy"
        className={`relative h-full w-full ${fit} ${
          zoom ? 'transition-transform duration-700 ease-out group-hover:scale-[1.03]' : ''
        }`}
      />
      {project.logo && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-bg/95 via-bg/50 to-transparent px-6 pb-5 pt-20">
          <img
            src={project.logo}
            alt={`Logo de ${project.title}`}
            className={`${logoWidth[size]} drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]`}
          />
        </div>
      )}
    </>
  )
}
