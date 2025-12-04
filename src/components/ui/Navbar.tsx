import { useState, useEffect } from 'react'
import { Menu, X, Calendar } from 'lucide-react'
import ScheduleModal from './ScheduleModal'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isScheduleOpen, setIsScheduleOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-2 group">
                        <img src="/logo.png" alt="Visionary Byte Works" className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                            VBW
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <button
                            onClick={() => setIsScheduleOpen(true)}
                            className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2"
                        >
                            <Calendar className="w-4 h-4" />
                            Schedule a Call
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-primary transition-colors">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    {isOpen && (
                        <div className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-lg p-6 md:hidden flex flex-col space-y-4 border-t border-white/10 animate-fade-in">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsOpen(false)
                                    setIsScheduleOpen(true)
                                }}
                                className="px-5 py-3 rounded-lg bg-primary text-white font-bold text-center"
                            >
                                Schedule a Call
                            </button>
                        </div>
                    )}
                </div>
            </nav>

            <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
        </>
    )
}

export default Navbar
