import { projects } from '../data/site'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-h)] mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
