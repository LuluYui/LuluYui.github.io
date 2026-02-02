import { useState, useEffect } from 'react'
import sun from './assets/svgs/sun.svg'
import moon from './assets/svgs/moon.svg'
import { useTheme } from './utilities.jsx'
import resume from './assets/resume.pdf'

export default function MenuBar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Effect to prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
    <header className="font-creato sticky top-0 z-100 backdrop-blur-sm bg-white/70 dark:bg-black/70">
      <div className="menu flex justify-between items-center py-1 px-4 shadow-xl/5">
        <a className="logo flex py-1" href="#home" onClick={closeMenu}>
          <h1> Chris Yip</h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-xl">
            <a className="btn" href="#about"> About </a>
            <a className="btn" href="#projects"> Projects </a>
           <a className="btn" href="#timeline" > Experience  </a>
            <a className="btn" href="#education"> Education </a>
            <a 
              className="inline-block px-2 py-0.5 border-2 border-slate-900 dark:border-emerald-400 text-slate-900 dark:text-emerald-400 font-bold hover:shadow-lg dark:hover:shadow-emerald-400/40 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300"               href={resume} 
              target="_blank" 
              rel="noopener noreferrer"
            > 
              Resume 
            </a>
            
            <button id="dark-mode-btn" className="dark-border flex h-10 w-10 items-center justify-center rounded-full border border-transparent" onClick={toggleDarkMode}>
                <img className="dark-btn h-8 w-8" src={darkMode ? sun : moon} alt="Dark mode toggle icon" />
            </button>
        </nav>

        {/* Mobile Menu Button & Dark Mode Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <button id="dark-mode-btn-mobile" className="dark-border flex h-10 w-10 items-center justify-center rounded-full border border-transparent" onClick={toggleDarkMode}>
                <img className="dark-btn h-8 w-8" src={darkMode ? sun : moon} alt="Dark mode toggle icon" />
            </button>
            <button onClick={toggleMenu} className="text-slate-900 dark:text-slate-200 focus:outline-none z-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16m-7 6h7" />}
                </svg>
            </button>
        </div>
      </div>

    </header>
      {/* Mobile Menu Overlay */}
      <div className={`fixed mt-12 h-fit inset-0 z-50 bg-white/5 dark:bg-black/50 backdrop-blur-sm transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out md:hidden`}>
        <nav className="flex flex-col items-center justify-start h-full gap-8 text-2xl py-10 ">
            <a className="btn" href="#about" onClick={closeMenu}> About </a>
            <a className="btn" href="#projects" onClick={closeMenu}> Projects </a>
            <a className="btn" href="#timeline" onClick={closeMenu}> Experience </a>
            <a className="btn" href="#education" onClick={closeMenu}> Education </a>
            <a 
              className="inline-block mt-4 px-4 py-1 border-2 border-slate-900 dark:border-emerald-400 text-slate-900 dark:text-emerald-400 font-bold hover:shadow-lg dark:hover:shadow-emerald-400/40 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300" 
              href={resume} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
            > 
              Resume 
            </a>
        </nav>
      </div>
    </>
  );
}
