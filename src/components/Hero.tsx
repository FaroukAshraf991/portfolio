import { profile } from '../data/site'

export function Hero() {
  return (
    <header className="max-w-4xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
      <p className="font-mono text-sm text-[var(--accent)] mb-4">
        Hi, I'm {profile.name.split(' ')[0]}
      </p>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-h)] leading-[1.1]">
        {profile.tagline}
      </h1>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-[var(--accent)] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
        >
          View my work
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-semibold text-[var(--text-h)] hover:bg-[var(--accent-soft)] transition"
        >
          Get in touch
        </a>
        {profile.resumeUrl && (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-semibold text-[var(--text-h)] hover:bg-[var(--accent-soft)] transition"
          >
            Resume
          </a>
        )}
        <div className="flex items-center gap-3 ml-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--text-dim)] hover:text-[var(--text-h)] transition underline underline-offset-4"
          >
            GitHub
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--text-dim)] hover:text-[var(--text-h)] transition underline underline-offset-4"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
