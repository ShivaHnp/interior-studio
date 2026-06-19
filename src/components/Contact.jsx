export default function Contact() {
  return (
    <section id="contact" className="bg-[#161e16] px-12 py-16 md:px-16 overflow-hidden relative">
      
      {/* backgrnd */}
      <div className="absolute top-0 right-0 text-[180px] font-medium leading-none text-green/10 pointer-events-none select-none tracking-tighter">
        let's<br/>talk
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end relative">

        {/* title */}
        <div>
          <p className="text-green-md text-xs tracking-widest uppercase mb-6 flex items-center gap-3">
            <span className="w-6 h-[0.5px] bg-green-md" />
            Contact
          </p>
          <h2 className="text-cream text-5xl md:text-6xl font-medium leading-tight tracking-tighter">
            Start a
            <em className="not-italic block text-cream/30 text-4xl md:text-5xl">
              conversation.
            </em>
          </h2>
        </div>

        {/* راست — اطلاعات */}
        <div className="flex flex-col gap-8">
          <p className="text-cream/45 text-sm leading-relaxed">
            Every great space begins with a single conversation. Tell me about your vision — I'm listening.
          </p>

          <div>
            <p className="text-cream/30 text-xs tracking-widest uppercase mb-2">Write to me</p>
            <a
              href="mailto:niktamrd@gmail.com"
              className="text-cream text-base hover:text-green-md transition-colors duration-300"
            >
              niktamrd@gmail.com
            </a>
          </div>

          <div className="flex gap-3">
            <a href="https://www.instagram.com/niktamoradi/" target="_blank" rel="noopener noreferrer" className="text-cream/40 text-xs px-4 py-2 border border-cream/10 rounded-full hover:border-green-md/40 hover:text-green-md transition-colors duration-300">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/nikta-moradi-290663240/" target="_blank" rel="noopener noreferrer" className="text-cream/40 text-xs px-4 py-2 border border-cream/10 rounded-full hover:border-green-md/40 hover:text-green-md transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-cream/40 text-xs px-4 py-2 border border-cream/10 rounded-full hover:border-green-md/40 hover:text-green-md transition-colors duration-300">
              Pinterest
            </a>
          </div>
        </div>

      </div>

      {/* footer */}
      <div className="flex justify-between items-center mt-16 pt-6 border-t border-green/10">
        <span className="text-cream/20 text-xs">© 2025 Nikta Moradi · Paris</span>
        <div className="w-1.5 h-1.5 rounded-full bg-green-md opacity-40" />
      </div>

    </section>
  )
}