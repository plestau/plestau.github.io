import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base '/' porque el repo se llamara plestau.github.io (URL raiz).
// Si lo subes a un repo con otro nombre, cambia base a '/nombre-del-repo/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
