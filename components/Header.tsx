import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const desktopNavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Live Sites', href: '#live-sites' },
    { name: 'Skills', href: '#skills' },
    { name: 'Values', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleDesktopNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const handleOverlayLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    // Delay scroll to allow menu to close visually
    setTimeout(() => {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); 
  };
  
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex fixed top-4 left-0 right-0 z-50 justify-center px-4">
        <div className="w-auto flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-black/5">
          <Link to="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            NM.
          </Link>
          {isHomePage ? (
            <div className="flex items-center gap-1 ml-16">
              <nav className="flex items-baseline space-x-1">
                {desktopNavLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={handleDesktopNavClick} className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    {link.name}
                  </a>
                ))}
              </nav>
              <button onClick={toggleTheme} className="p-2 ml-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Toggle theme">
                {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-grow justify-center px-8">
                <Link to="/" className="px-3 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                  &larr; All Projects
                </Link>
              </div>
              <div>
                <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Toggle theme">
                  {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Mobile Experience */}
      {isHomePage ? (
        <>
          {/* Mobile Tab Bar */}
          <nav className="md:hidden fixed bottom-4 left-4 right-4 z-40">
            <div className="flex items-center justify-between h-16 w-full max-w-sm mx-auto px-6 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-black/5">
                <Link to="/" onClick={handleLogoClick} className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    NM.
                </Link>
                <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -mr-2 text-gray-900 dark:text-white" aria-label="Open menu">
                    <MenuIcon className="w-7 h-7"/>
                </button>
            </div>
          </nav>
          
          {/* Mobile Overlay Menu */}
          <div className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
             <div className="absolute inset-0 bg-white/80 dark:bg-black/70 backdrop-blur-xl"></div>
             <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
                <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-4 p-2 text-gray-900 dark:text-white" aria-label="Close menu">
                  <CloseIcon className="w-8 h-8"/>
                </button>

                <nav className="flex flex-col items-center text-center gap-8">
                  {desktopNavLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={(e) => handleOverlayLinkClick(e, link.href)} className="text-4xl font-heading font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                      {link.name}
                    </a>
                  ))}
                </nav>
                
                <div className="absolute bottom-10 flex flex-col items-center gap-4">
                    <button onClick={toggleTheme} className="flex items-center gap-3 p-3 rounded-full text-gray-600 dark:text-gray-300 bg-black/5 dark:bg-white/10" aria-label="Toggle theme">
                        {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                        <span className="font-medium">Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                    </button>
                </div>
             </div>
          </div>
        </>
      ) : (
        <header className="md:hidden fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 bg-white/70 dark:bg-black/50 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50">
            <Link to="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              NM.
            </Link>
            <div className='flex items-center gap-4'>
              <Link to="/" className="px-3 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                &larr; All Projects
              </Link>
              <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300" aria-label="Toggle theme">
                {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;