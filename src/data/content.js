// ============================================================
//  CONTENIDO DEL PORTFOLIO
//  Este es el unico fichero que necesitas tocar para actualizar
//  textos, proyectos, formacion y enlaces. El diseno lee de aqui.
// ============================================================

export const profile = {
  name: 'Pablo Lestau',
  // Aparece en el hero, se escribe letra a letra
  roles: [
    'Gameplay Programmer',
    'Desarrollador Unity',
    'Full-Stack Web',
    'Desarrollo Multiplataforma',
  ],
  tagline:
    'Programo videojuegos en Unity y aplicaciones web y multiplataforma. Me interesa la parte de sistemas: que el gameplay sea solido, legible y facil de extender.',
  location: 'Espana',
  email: 'pablitolestau3@gmail.com',
  github: 'https://github.com/plestau',
  linkedin: '', // pega aqui tu URL de LinkedIn
  itch: '', // pega aqui tu perfil de itch.io si lo tienes
  cv: '', // ruta a tu CV en PDF, p.ej. '/cv-pablo-lestau.pdf'
}

export const stats = [
  { value: 4, suffix: '', label: 'Proyectos Unity' },
  { value: 2, suffix: '', label: 'Titulaciones FP' },
  { value: 3, suffix: '+', label: 'Anos programando' },
  { value: 8, suffix: '+', label: 'Tecnologias' },
]

// ------------------------------------------------------------
//  PROYECTOS
//  status: 'wip' | 'done'
//  featured: true -> ocupa la tarjeta grande destacada
//  cover: ruta dentro de /public, p.ej. '/projects/deadline.png'
//  links.itch:      URL de la pagina del juego en itch.io
//  links.itchEmbed: URL del iframe de itch (la que aparece en "Embed" ->
//                   https://itch.io/embed-upload/XXXXXXX). Si la pones,
//                   el juego se puede jugar dentro de la propia web.
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
    tagline: 'Roguelike de rutas nocturnas donde transportas almas y puntuas como en un deckbuilder.',
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
      itch: '', // pagina en itch.io
      itchEmbed: '', // iframe jugable de itch.io
      video: '', // trailer de YouTube
    },
    cover: '', // '/projects/deadline.png'
    gallery: [], // ['/projects/deadline-1.png', '/projects/deadline-2.png']
    accent: 'cyan',
  },

  // ---------- RELLENA ESTOS TRES ----------
  {
    id: 'proyecto-2',
    title: 'Titulo del proyecto',
    studio: '',
    year: '2025',
    status: 'done',
    featured: false,
    role: 'Tu rol en el proyecto',
    tagline: 'Una frase que enganche y explique el juego.',
    description:
      'Describe aqui de que va el juego, que hiciste tu y que fue lo mas dificil de resolver.',
    highlights: [
      'Sistema o mecanica interesante que programaste',
      'Otro reto tecnico que resolviste',
    ],
    tech: ['Unity', 'C#'],
    links: { repo: '', itch: '', itchEmbed: '', video: '' },
    cover: '',
    gallery: [],
    accent: 'violet',
  },
  {
    id: 'proyecto-3',
    title: 'Titulo del proyecto',
    studio: '',
    year: '2024',
    status: 'done',
    featured: false,
    role: 'Tu rol en el proyecto',
    tagline: 'Uno de los primeros proyectos con los que aprendi a hacer videojuegos.',
    description: 'Describe aqui el proyecto y que aprendiste con el.',
    highlights: ['Que construiste', 'Que aprendiste'],
    tech: ['Unity', 'C#'],
    links: { repo: '', itch: '', itchEmbed: '', video: '' },
    cover: '',
    gallery: [],
    accent: 'lime',
  },
  {
    id: 'proyecto-4',
    title: 'Titulo del proyecto',
    studio: '',
    year: '2024',
    status: 'done',
    featured: false,
    role: 'Tu rol en el proyecto',
    tagline: 'El proyecto con el que empezo todo.',
    description: 'Describe aqui el proyecto y que aprendiste con el.',
    highlights: ['Que construiste', 'Que aprendiste'],
    tech: ['Unity', 'C#'],
    links: { repo: '', itch: '', itchEmbed: '', video: '' },
    cover: '',
    gallery: [],
    accent: 'violet',
  },
]

// ------------------------------------------------------------
//  OTROS PROYECTOS
//  Lista compacta para los trabajos menores: practicas, game jams y
//  pruebas. Dan contexto y volumen sin robar atencion a los buenos.
//  Si alguno crece, pasalo al array `projects` de arriba.
// ------------------------------------------------------------
export const otherProjects = [
  {
    title: 'Nombre del proyecto',
    year: '2025',
    kind: 'Game jam', // Game jam | Practica | Prototipo | AR/VR
    blurb: 'Una linea: que era y que aprendiste.',
    repo: '',
    itch: '',
  },
  {
    title: 'Nombre del proyecto',
    year: '2024',
    kind: 'Prototipo',
    blurb: 'Una linea: que era y que aprendiste.',
    repo: '',
    itch: '',
  },
  {
    title: 'Nombre del proyecto',
    year: '2024',
    kind: 'Practica',
    blurb: 'Una linea: que era y que aprendiste.',
    repo: '',
    itch: '',
  },
]

// ------------------------------------------------------------
//  SKILLS
// ------------------------------------------------------------
export const skillGroups = [
  {
    title: 'Videojuegos',
    icon: 'gamepad',
    items: ['Unity', 'C#', 'ScriptableObjects', 'Input System', 'URP', 'Shader Graph', 'Cinemachine', 'AR / VR'],
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
//  FORMACION  (apartado breve, como pediste)
// ------------------------------------------------------------
export const education = [
  {
    title: 'Master en Desarrollo de Videojuegos',
    org: 'Completa con tu centro',
    period: '2025 - 2026',
    note: 'Proyecto final: Deadline.',
    tag: 'Videojuegos',
  },
  {
    title: 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
    org: 'Completa con tu centro',
    period: '2023 - 2025',
    note: 'Aplicaciones nativas, acceso a datos y servicios.',
    tag: 'Titulo FP',
  },
  {
    title: 'Desarrollo de Aplicaciones Web (DAW)',
    org: 'Completa con tu centro',
    period: '2021 - 2023',
    note: 'Front-end, back-end y bases de datos.',
    tag: 'Titulo FP',
  },
]
