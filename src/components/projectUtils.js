/** Etiqueta corta de un proyecto: estado, si es de jam y el ano. */
export function projectLabel(project) {
  return [project.status === 'wip' ? 'En desarrollo' : null, project.jam ? 'Game jam' : null, project.year]
    .filter(Boolean)
    .join(' · ')
}

/**
 * Props para que un bloque entero abra la ficha del proyecto con el raton
 * o con el teclado (Enter / espacio), como si fuera un boton.
 */
export function openProps(project, onOpen) {
  return {
    role: 'button',
    tabIndex: 0,
    'aria-label': `Ver ficha de ${project.title}`,
    onClick: () => onOpen(project),
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onOpen(project)
      }
    },
  }
}
