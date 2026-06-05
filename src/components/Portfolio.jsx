import project1 from '../assets/project 1/cover.png'
import project2 from '../assets/project 2/cover.png'
import project3 from '../assets/project 3/cover.png'
import project4 from '../assets/project 4/cover.png'


const projects = [
    { id: 1, slug: 'porta-romana', name: 'Porta Romana', city: 'Milan', category: 'Residential', cover: project1 },
    { id: 2, slug: 'porta-venezia', name: 'Porta Romana', city: 'Milan', category: 'Residential', cover: project2 },
    { id: 3, slug: 'naviglio-studio', name: 'Porta Romana', city: 'Milan', category: 'Residential', cover: project3 },
    { id: 4, slug: 'brera-loft', name: 'Porta Romana', city: 'Milan', category: 'Residential', cover: project4 }
]

export default function Portfolio() {
    return(
        <section className="bg-dark px-6 py-20 md:px-16">
            {/* header for portfolio */}
            <div className="mb-12">
                <h4 className="text-green-md text-xs tracking-widest uppercase mb-3">Projects</h4>
                <h2 className="text-cream text-3xl md:text-4xl font-medium tracking-tight">
                    Selected Work
                </h2>
            </div>
            {/* cards' grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map(project => (
                    <div 
                        key={project.id}
                        className="group flex flex-col gap-4 cursor-pointer"
                        onClick={() => console.log(project.slug)}
                    >
                        {/* img */}
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                            <img 
                                src={project.cover}
                                alt="project.slug" 
                                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                            />
                            {/* overlay hover */}
                            <div className="absolute inset-0 bg-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-cream text-xs tracking-widest uppercase">View Project</span>
                            </div>
                        </div>
                        {/* project info */}
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-cream text-sm font-medium'>{project.name}</h3>
                            <p className='text-cream/40 text-xs'>{project.category} , {project.city}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}