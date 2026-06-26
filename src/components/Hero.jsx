import heroImg from '../assets/project 4/cover.webp'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-dark md:min-h-screen grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center px-6 md:px-16 bg:px-24 py-4 md:py-16 overflow-hidden">
      
      {/* ستون چپ — متن */}
      <div className="flex flex-col gap-6">
          <span className="text-green-md text-xs tracking-widest uppercase">
              Interior Design - Milan
          </span>
          <h1 className="text-cream text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
              Spaces that carry <br className="hidden md:block" /> a signature
          </h1>
          <p className="text-cream/45 text-sm leading-relaxed max-w-sm">
              Each project begins with listening
          </p>
          <div className="flex gap-3 mt-2">
              <Link to="/projects" className="px-4 md:px-6 py-2.5 md:py-3 text-[13px] bg-brown-md text-cream rounded hover:bg-brown transition-colors duration-300 cursor-pointer">
                  View work
              </Link>
              <Link to="/about" className="px-4 md:px-6 py-2.5 md:py-3 text-[13px] border border-cream/20 text-cream/70 rounded hover:border-cream/50 hover:text-cream transition-colors duration-300 cursor-pointer">
                  About me
              </Link>
          </div>
      </div>

      {/* ستون راست — عکس */}
        <div className="w-full">
            <img
                src={heroImg}
                alt="Interior design project"
                className="w-full rounded-lg object-cover"
            />
        </div>

    </section>
  )
}