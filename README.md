# Portfolio — Pablo Lestau

Portfolio personal de proyectos Unity y desarrollo web/multiplataforma.
React + Vite + Tailwind CSS v4, desplegado en GitHub Pages.

## Arrancar en local

```bash
npm install
npm run dev
```

## Como actualizar el contenido

Todo el texto vive en **`src/data/content.js`**. No hace falta tocar ningun
componente para cambiar proyectos, formacion o enlaces.

### Anadir un proyecto

Copia un bloque del array `projects` y rellena los campos:

| Campo | Que es |
|---|---|
| `status` | `'wip'` (en desarrollo) o `'done'` (terminado) |
| `featured` | `true` para la tarjeta grande destacada. Deja solo uno en `true` |
| `accent` | `'cyan'`, `'violet'` o `'lime'` |
| `cover` | Portada, p.ej. `'/projects/deadline.png'` |
| `gallery` | Array de capturas extra que salen en el detalle |
| `links.itch` | URL de la pagina del juego en itch.io |
| `links.itchEmbed` | URL del iframe de itch.io — hace el juego jugable dentro de la web |
| `links.repo` | Repositorio de GitHub |
| `links.video` | Trailer de YouTube |

### Anadir capturas

Mete las imagenes en `public/projects/` y referencialas con ruta absoluta:

```js
cover: '/projects/deadline.png',
gallery: ['/projects/deadline-1.png', '/projects/deadline-2.png'],
```

Formato recomendado: **1600x900 px**, `.webp` o `.jpg` (mas ligeros que `.png`).
Un GIF corto de gameplay luce mucho mas que una captura estatica.

### Hacer un juego jugable en la web

1. Sube la build WebGL a itch.io.
2. En itch: *Edit game* -> *Embed options* -> copia la URL de `itch.io/embed-upload/...`
3. Pegala en `links.itchEmbed`.

Las builds WebGL de Unity no se suben a este repo: pesan demasiado y GitHub
rechaza ficheros de mas de 100 MB.

## Despliegue

Cada `push` a `main` dispara `.github/workflows/deploy.yml`, que compila y
publica en GitHub Pages. No hay que hacer nada mas.

Requisito unico la primera vez: en el repo, **Settings -> Pages -> Source:
GitHub Actions**.

> Si el repo NO se llama `plestau.github.io`, cambia `base` en `vite.config.js`
> a `'/nombre-del-repo/'` o la web se vera sin estilos.
