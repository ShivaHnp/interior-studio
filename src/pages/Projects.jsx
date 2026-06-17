import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="bg-dark min-h-screen px-6 py-16 md:px-16">
      <div className="mb-12">
        <p className="text-green-md text-xs tracking-widest uppercase mb-3">Projects</p>
        <h1 className="text-cream text-4xl font-medium tracking-tight">All Work</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map(project => (
          <Link
            to={`/projects/${project.slug}`}
            key={project.id}
            className="group flex flex-col gap-4 cursor-pointer"
          >
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <img
                src={project.cover}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-cream text-xs tracking-widest uppercase">View Project</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-cream text-sm font-medium">{project.name}</h3>
              <p className="text-cream/40 text-xs">{project.category} · {project.city}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}