import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-xs text-muted">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">Hecho con React, Vite y Tailwind</p>
      </div>
    </footer>
  )
}
