import { profile } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-dim)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-[var(--text-dim)] hover:text-[var(--text-h)] transition"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--text-dim)] hover:text-[var(--text-h)] transition"
          >
            GitHub
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--text-dim)] hover:text-[var(--text-h)] transition"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
