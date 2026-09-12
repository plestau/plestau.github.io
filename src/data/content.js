// ============================================================
//  CONTENIDO DEL PORTFOLIO
//  Este es el unico fichero que necesitas tocar para actualizar
//  textos, proyectos, formacion y enlaces. El diseno lee de aqui.
// ============================================================

export const profile = {
  name: 'Pablo Lestau',
  roles: [
    'Gameplay Programmer',
    'Desarrollador Unity',
    'Full-Stack Web',
    'Desarrollo Multiplataforma',
  ],
  tagline:
    'Programo videojuegos en Unity y aplicaciones web y multiplataforma. Me interesa la parte de sistemas: que el gameplay sea solido, legible y facil de extender.',
  location: 'Espana',
  email: 'pablolestau@outlook.com',
  github: 'https://github.com/plestau',
  linkedin: 'https://es.linkedin.com/in/pablo-lestau-martin-862ba51b7',
  itch: 'https://plestau.itch.io',
  cv: '', // ruta a tu CV en PDF, p.ej. '/cv-pablo-lestau.pdf'
}

export const stats = [
  { value: 8, suffix: '', label: 'Proyectos Unity' },
  { value: 3, suffix: '', label: 'Game jams' },
  { value: 3, suffix: '', label: 'Titulaciones FP' },
  { value: 10, suffix: '+', label: 'Tecnologias' },
]

// ------------------------------------------------------------
//  PROYECTOS DESTACADOS
//  status: 'wip' | 'done'
//  featured: true -> tarjeta grande a todo el ancho
//  jam: true -> muestra la etiqueta "Juego de jam"
//  accent: 'cyan' | 'violet' | 'lime'
//  logo: ruta a un logo que se superpone sobre la portada, abajo y centrado
//  coverFit: 'contain' -> muestra la portada entera sin recortar, para
//                        banners y logos muy apaisados. Por defecto recorta.
//  coverBackdrop: true -> con coverFit 'contain', rellena el hueco sobrante con
//                         una copia desenfocada de la propia portada
//  links.itchEmbed: URL del iframe de itch (Edit game -> Embed options).
//                   Solo funciona con builds WebGL; con builds de escritorio
//                   se deja vacio y la tarjeta no ofrece jugar.
// ------------------------------------------------------------
export const projects = [
  {
    id: 'deadline',
    title: 'Deadline',
    studio: 'LasDivinasGames',
    year: '2026',
    status: 'wip',
    featured: true,
    role: 'Programador de gameplay y sistemas',
    tagline:
      'Roguelike de rutas nocturnas donde transportas almas y puntuas como en un deckbuilder.',
    description:
      'Conduces un autobus nocturno recogiendo almas en las paradas de la ciudad. Cada entrega puntua segun el tipo de alma que llevas: las combinaciones correctas forman combos (Mafia, Guardia Real...) que multiplican la puntuacion, al estilo de las manos de Balatro. Entre rondas gastas el dinero en una tienda de jokers que modifican las reglas de la partida. Hay que gestionar el combustible, el tiempo y la ruta.',
    highlights: [
      'Sistema de puntuacion por rondas con objetivos crecientes y economia entre partidas',
      'Jokers que alteran las reglas en runtime, construidos sobre ScriptableObjects',
      'Evaluador de combos que detecta patrones en la carga de pasajeros',
      'Conduccion con consumo de combustible, GPS y ciclo dia/noche',
      'Sistema de dialogos e interaccion con condiciones por personaje',
      'Minijuego de pesca como actividad secundaria',
    ],
    tech: ['Unity', 'C#', 'ScriptableObjects', 'Input System', 'URP', 'Git'],
    links: {
      repo: 'https://github.com/plestau/TFM-Repo',
      itch: '',
      itchEmbed: '',
      video: '',
    },
    cover: '',
    gallery: [],
    accent: 'cyan',
  },

  {
    id: 'evad-tale',
    title: 'EVAD Tale',
    studio: 'Game jam · equipo de 6',
    year: '2026',
    status: 'done',
    featured: true,
    jam: true,
    role: 'Programador de combate, inventario y UI',
    tagline:
      'RPG por turnos en el que te quedas encerrado en la escuela tras una jam y tienes que averiguar que esconde la sala de profesores.',
    description:
      'Proyecto de game jam hecho en equipo de seis personas, y el que mejor resultado dio. Me encargue de los sistemas de combate: el flujo de los turnos, los ataques de los enemigos y su comportamiento, ademas del inventario y de los menus de pausa y navegacion.',
    highlights: [
      'Sistema de combate por turnos con los patrones de ataque de los enemigos',
      'Inventario con gestion de objetos y su uso durante el combate',
      'Menus de pausa y navegacion de interfaz',
      'Soporte de teclado y mando con el Input System',
    ],
    tech: ['Unity', 'C#', '2D', '3D', 'RPG', 'Input System'],
    links: {
      repo: '',
      itch: 'https://mariams998.itch.io/evad-tale',
      itchEmbed: '',
      video: '',
    },
    cover: '/projects/evad-tale-cover.webp',
    logo: '/projects/evad-tale-logo.svg',
    gallery: ['/projects/evad-tale-combate.webp', '/projects/evad-tale-exploracion.webp', '/projects/evad-tale-2.webp', '/projects/evad-tale-1.webp'],
    accent: 'violet',
  },

  {
    id: 'crossy-venice',
    title: 'Crossy Venice',
    studio: 'Global Game Jam · equipo de 5',
    year: '2026',
    status: 'done',
    featured: false,
    jam: true,
    role: 'Programador principal',
    tagline:
      'Arcade tipo Crossy Road: cruza las calles y canales de Venecia en carnaval para entregar la pizza a tiempo.',
    description:
      'Juego de Global Game Jam en el que controlas a un personaje enmascarado que avanza por las calles, plazas y canales de Venecia durante el Carnaval. Combina accion arcade rapida con una estetica low-poly festiva. Programe practicamente todo el juego; el arte lo hizo el resto del equipo.',
    highlights: [
      'Generacion de los carriles de trafico y obstaculos al estilo Crossy Road',
      'Control del personaje con movimiento por casillas',
      'Juego hecho en 3 dias',
    ],
    tech: ['Unity', 'C#', 'Low poly', 'Arcade'],
    links: {
      repo: '',
      itch: 'https://lu-423566235.itch.io/crossy-venice',
      itchEmbed: '',
      video: '',
    },
    cover: '/projects/crossy-venice-cover.webp',
    coverFit: 'contain',
    gallery: ['/projects/crossy-venice-gameplay-2.webp', '/projects/crossy-venice-2.webp', '/projects/crossy-venice-1.webp', '/projects/crossy-venice-gameplay.webp'],
    accent: 'lime',
  },

  {
    id: 'pirenaic-scape',
    title: 'Pirenaic Scape',
    studio: '',
    year: '2026',
    status: 'done',
    featured: false,
    role: 'Programador, todo salvo arte y modelos',
    tagline:
      'Puzles, terror y sigilo en primera persona en los bosques de los Pirineos.',
    description:
      'Juego de puzles, terror y sigilo en primera persona. Hay que avanzar sin ser descubierto, resolver puzles interactuando con el entorno y gestionar bien lo que llevas en el inventario. Me encargue de toda la programacion; el arte y los modelos vinieron de fuera. Construido sobre HDRP, lo que obligo a cuidar el rendimiento y el peso de los assets.',
    highlights: [
      'Mecanicas de sigilo para avanzar sin ser detectado por los enemigos',
      'Puzles basados en la interaccion con objetos del entorno',
      'Inventario con opciones para usar, equipar y combinar objetos',
      'Optimizacion del build: texturas 8K reducidas a 2K y compresion activada',
    ],
    tech: ['Unity', 'C#', 'HDRP', 'Primera persona', 'Terror', 'Sigilo', 'Puzles'],
    links: {
      repo: '',
      itch: 'https://plestau.itch.io/pirenaic-scape',
      itchEmbed: '',
      video: 'https://youtu.be/HQHgLg3Fv8I',
    },
    cover: '/projects/pirenaic-scape-portada.webp',
    logo: '/projects/pirenaic-scape-logo.webp',
    gallery: ['/projects/pirenaic-scape-gameplay.webp', '/projects/pirenaic-scape-inventario.webp', '/projects/pirenaic-scape-1.webp', '/projects/pirenaic-scape-2.webp', '/projects/pirenaic-scape-3.webp'],
    accent: 'violet',
  },

  {
    id: 'rotten-rush',
    title: 'Rotten Rush',
    studio: '',
    year: '2025',
    status: 'done',
    featured: false,
    role: 'Programador, todo salvo arte',
    tagline:
      'Mi primer proyecto terminado: plataformas 2D en pixel art donde subes de nivel, eliges poderes o te la juegas a la ruleta.',
    description:
      'Mi primer proyecto terminado. Plataformas 2D en pixel art en el que avanzas saltando, golpeando enemigos y esquivando obstaculos para llegar lo mas lejos posible. Al subir de nivel eliges entre varias mejoras, o te arriesgas con una ruleta que te da un poder aleatorio. Programe todo el juego; el arte lo hizo otra persona.',
    highlights: [
      'Sistema de subida de niveles con experiencia por distancia recorrida',
      'Eleccion de poderes al subir de nivel, como salto extra o mas experiencia por metro',
      'Ruleta de poderes aleatorios como alternativa arriesgada a elegir mejora',
      'Control de plataformas 2D con salto y ataque cuerpo a cuerpo',
    ],
    tech: ['Unity', 'C#', '2D', 'Pixel art'],
    links: {
      repo: '',
      itch: 'https://plestau.itch.io/rotten-rush',
      itchEmbed: '',
      video: '',
    },
    cover: '/projects/rotten-rush-cover.webp',
    coverFit: 'contain',
    coverBackdrop: true,
    gallery: ['/projects/rotten-rush-2.webp', '/projects/rotten-rush-1.webp', '/projects/rotten-rush-levelup.webp', '/projects/rotten-rush-3.webp'],
    accent: 'cyan',
  },
]

// ------------------------------------------------------------
//  OTROS PROYECTOS
//  Lista compacta: dan contexto y volumen sin robar atencion.
// ------------------------------------------------------------
export const otherProjects = [
  {
    title: 'Warfare Rain',
    year: '2025',
    kind: 'Arcade',
    blurb:
      'Juego de oleadas en vista cenital: escoltas un tanque hasta el punto de evacuacion. Programe todo salvo los modelos.',
    repo: '',
    itch: 'https://plestau.itch.io/warfare-rain',
  },
  {
    title: 'Gun Rage',
    year: '2024',
    kind: 'FPS',
    blurb:
      'Mi primer shooter en primera persona, de estetica retro. Quedo sin terminar, pero fue donde aprendi el control en primera persona.',
    repo: '',
    itch: 'https://plestau.itch.io/gun-rage',
  },
  {
    title: 'Juego de gancho 2D',
    year: '2024',
    kind: 'Primeros pasos',
    blurb:
      'Mis primeros pasos en Unity: plataformas 2D con mecanica de balanceo mediante gancho, tres niveles y enemigos con pathing propio.',
    repo: '',
    itch: 'https://plestau.itch.io/juego-de-gancho-2d',
  },
]

// ------------------------------------------------------------
//  SKILLS
// ------------------------------------------------------------
export const skillGroups = [
  {
    title: 'Videojuegos',
    icon: 'gamepad',
    items: ['Unity', 'C#', 'ScriptableObjects', 'Input System', 'URP', 'HDRP', 'Shader Graph', 'AR / VR'],
  },
  {
    title: 'Web',
    icon: 'code',
    items: ['JavaScript', 'React', 'HTML / CSS', 'PHP', 'Node.js', 'MySQL', 'REST APIs'],
  },
  {
    title: 'Multiplataforma',
    icon: 'layers',
    items: ['Java', 'Android', 'Kotlin', '.NET', 'SQLite', 'Firebase'],
  },
  {
    title: 'Herramientas',
    icon: 'wrench',
    items: ['Git', 'GitHub Actions', 'Rider', 'VS Code', 'Blender', 'Figma'],
  },
]

// ------------------------------------------------------------
//  FORMACION
// ------------------------------------------------------------
export const education = [
  {
    title: 'Master en Desarrollo y Diseno de Videojuegos',
    org: 'EVAD · Malaga',
    period: '2025 - Actualidad',
    note: 'En curso. Proyecto final: Deadline.',
    tag: 'Master',
    current: true,
  },
  {
    title: 'Curso de Especializacion en Desarrollo de Videojuegos',
    org: 'I.E.S. Francisco Ayala · Granada',
    period: '2024 - 2025',
    note: 'Motores de videojuegos, graficos en tiempo real y realidad virtual y aumentada.',
    tag: 'Videojuegos',
  },
  {
    title: 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
    org: 'Escuela de Arte de Granada · Granada',
    period: '2023 - 2024',
    note: 'Aplicaciones nativas, acceso a datos y servicios.',
    tag: 'Titulo FP',
  },
  {
    title: 'Desarrollo de Aplicaciones Web (DAW)',
    org: 'I.E.S. Francisco Ayala · Granada',
    period: '2021 - 2023',
    note: 'Front-end, back-end y bases de datos.',
    tag: 'Titulo FP',
  },
]
