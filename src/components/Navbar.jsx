import { useState } from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom'


export default function Navbar () {

    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const scrollToSection = (id) => {
        if(location.pathname !== '/') {
            // برای اینکه اگه تو صفحه ی دیگه ای بودیم اول بره  home
            navigate('/')
            // we set timer to load first and then starts to scroll
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})
            }, 100);
        } else{
            document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
        }
        setIsOpen(false)
    }

    return(
        <nav className="bg-dark border-b border-green/30 sticky top-0 z-50">
            {/* desktap nav bar */}
            <div className="flex items-center justify-between px-6 py-5 md:px-10 ">
                {/* logo */}
                <Link to="/" className="flex flex-col gap-1">
                    <span className="text-cream text-sm font-medium tracking-wider">Nikta Moradi</span>
                    <span className="w-6 h-[2px] bg-green-md" />
                </Link>
                {/* links */}
                <div className="hidden md:flex items-center gap-7">
                    <Link to="/" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">Home</Link>
                    <Link to="/projects" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">Projects</Link>
                    <button 
                        onClick={() => scrollToSection('inquiry')}
                        className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 cursor-pointer"
                    >
                        Inquiry
                    </button>
                    <Link to="/about" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">About</Link>
                    
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="px-5 py-2 text-sm rounded-md border border-green-md text-cream hover:bg-green-md/10 transition-colors duration-300 cursor-pointer"
                    >
                        Contact
                    </button>
                    
                </div>
                    {/* hamburger menu */}
                <button 
                    className="md:hidden text-cream/70 hover:text-cream transition-colors duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>
            {/* mobile nav bar */}
            {isOpen && (
                <div className="md:hidden flex flex-col px-6 pb-6 gap-4 border-t border-green/20">
                    <Link to="/" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">Home</Link>
                    <Link to="/projects" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">Projects</Link>
                    <button 
                        onClick={() => scrollToSection('inquiry')}
                        className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 cursor-pointer"
                    >
                        Inquiry
                    </button>
                    <Link to="/about" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">About</Link>
                    
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="px-5 py-2 text-sm rounded-md border border-green-md text-cream hover:bg-green-md/10 transition-colors duration-300 cursor-pointer"
                    >
                        Contact
                    </button>

                </div>
            )}
        </nav>
    )
}