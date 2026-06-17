import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
    const { slug } = useParams()
    const project = projects.find(p => p.slug === slug)


    // اگه اون ادرس پیدا نشد چه اتفاقی بیفته؟
    if(!project) {
        
        return (
            <section className="bg-dark min-h-screen px-6 py-20 md:px-16 flex items-center">
                <div>
                    <p className="text-cream/40 text-sm mb-4">Project not found</p>
                    <Link to='/projects' className="text-green-md text-sm hover:text-cream transition-colors duration-300">
                        ← Back to projects
                    </Link>
                </div>
            </section>
        )
    }
    return (
        <section className="bg-dark min-h-screen px-6 py-16 md:px-16">
            {/* to back btn */}
            <Link to="/projects" className="text-cream/40  text-xs tracking-widest uppercase hover:text-cream transition-colors duration-300 flex items-center gap-2 mb-12">
                ← Back
            </Link>
            {/* head */}
            <div className="flex flex-col gap-4 md:flex-row md:items-end justify-between mb-12">
                <div>
                    <p className="text-green-md text-xs tracking-widest uppercase mb-3">{project.category} · {project.city}</p>
                    <h1 className="text-cream text-4xl md:text-5xl font-medium tracking-tight">{project.name}</h1>
                </div>
                <div className="flex gap-6">
                    <div className="flex flex-col gap-1">
                        <p className="text-cream/30 text-xs tracking-widest uppercase">Area</p>
                        <p className="text-cream text-sm">{project.area}</p>
                    </div>
                </div>
            </div>
            {/* cover img */}
            <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-16">
                <img src={project.cover} alt={project.name} className="w-full h-full object-cover" />
            </div>
            {/* description */}
            <div className="max-w-2xl">
                <p className="text-cream/60 text-sm leading-relaxed">{project.description}</p>
            </div>

            {/* photo gallery for each project */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {project.images.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                        <img src={img} alt={`${project.name} ${index+1}`} className="w-full h-auto object-cover" />
                    </div>
                ))}
            </div>
        </section>
    )
}