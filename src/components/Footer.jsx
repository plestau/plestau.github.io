import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="transition-colors hover:text-ink">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  )
}
