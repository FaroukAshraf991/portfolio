import type { Project } from '../data/site'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden flex flex-col"
      style={{ boxShadow: 'var(--card-shadow)' }}
    >
      {project.screenshot ? (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}${project.screenshot}`}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : (
        // Placeholder thumbnail — swap for a real screenshot at
        // /public/screenshots/<slug>.png, see PORTFOLIO_GUIDE.md §5
        <div
          className="aspect-[16/10] flex items-center justify-center text-5xl"
          style={{ background: project.gradient }}
        >
          <span role="img" aria-hidden="true">
            {project.accentEmoji}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[var(--text-h)]">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-[var(--accent)]">{project.headline}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text)] flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs rounded-md border border-[var(--border)] px-2 py-0.5 text-[var(--text-dim)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[var(--text-h)] underline underline-offset-4 hover:text-[var(--accent)] transition"
            >
              Code →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[var(--text-h)] underline underline-offset-4 hover:text-[var(--accent)] transition"
            >
              Live demo →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
