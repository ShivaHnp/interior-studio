import { useState } from "react"


export default function Navbar () {

    const [isOpen, setIsOpen] = useState(false)


    return(
        <nav className="bg-dark border-b border-green/30 ">
            {/* desktap nav bar */}
            <div className="flex items-center justify-between px-6 py-5 md:px-10">
                {/* logo */}
                <div className="flex flex-col gap-1">
                    <span className="text-cream text-sm font-medium tracking-wider">Nikta Moradi</span>
                    <span className="w-6 h-[2px] bg-green-md" />
                </div>
                {/* links */}
                <div className="hidden md:flex items-center gap-7">
                    <a href="" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">Home</a>
                    <a href="" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">Journal</a>
                    <a href="" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">About me</a>
                    <a href="" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">Work</a>
                    <button className="px-5 py-2 text-sm rounded-md border border-green-md text-cream hover:bg-green-md/10 ease-in-out cursor-pointer hover:border-green-500 transition-colors duration-300">Contact</button>
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
                    <a href="" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">Home</a>
                    <a href="" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">Journal</a>
                    <a href="" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">About me</a>
                    <a href="" className="text-cream/50 text-sm hover:text-cream transition-colors duration-300 ease-in-out">Work</a>
                    <button className="w-full py-2 text-sm rounded-md border border-green-md text-cream hover:bg-green-md hover:text-dark transition-colors duration-300">
                        Contact
                    </button>
                </div>
            )}
        </nav>
    )
}