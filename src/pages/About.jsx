import profileImg from '../assets/about/profile.jpeg'


export default function About() {
    return (
        <section className='bg-[#1c2b1e] min-h-screen px-6 py-20 md:px-16'>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-start">
                {/* pro img */}
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                    <img src={profileImg} alt="Nikta Moradi" className="w-full h-full object-cover" />
                </div>

                {/* content */}
                <div className="flex flex-col gap-6">
                    <p className="text-green-md text-xs tracking-widest uppercase flex items-center gap-3">
                        <span className="w-6 h-[0.5px] bg-green-md" />
                        About
                    </p>
                    <h1 className="text-cream text-4xl md:text-5xl font-medium tracking-tight leading-tight">Nikta Moradi</h1>
                    <p className="text-cream/55 text-sm leading-relaxed">
                        Interior designer graduated from <span className="text-cream">Politecnico di Milano</span>, with over <span className="text-cream">4 years of experience</span> in interior design across World.
                        <br /><br />
                        Every space tells a story — mine begins with listening closely to how people want to live, then translating that into rooms that feel both elevated and effortless.
                    </p>

                    <div className="h-[0.5px] bg-green-md/15" />

                    {/* social media links */}
                    <div className="flex gap-6">
                        <a href="mailto:niktamrd@gmail.com" className='text-cream/45 text-xs hover:text-cream transition-colors duration-300'>
                            niktamrd@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/nikta-moradi-290663240/" target='_blank' rel='noopener noreferrer' className='text-cream/45 text-xs hover:text-cream transition-colors duration-300'>
                            LinkedIn
                        </a>
                        <a href="https://www.instagram.com/niktamoradi/" target='_blank' rel='noopener noreferrer' className='text-cream/45 text-xs hover:text-cream transition-colors duration-300'>
                            Instagram
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}