'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
      isHomePage 
        ? (isScrolled ? 'bg-[#dfdbd8] shadow-sm' : 'bg-transparent')
        : 'bg-[#dfdbd8] shadow-sm'
    }`}>
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-medium transition-colors duration-300 ${
          isHomePage 
            ? (isScrolled ? 'text-gray-800' : 'text-white')
            : 'text-gray-800'
        }`}>
          <Link href="/">Ignas Panavas</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/projects" 
            className={`transition-colors duration-200 ${
              isHomePage 
                ? (isScrolled 
                    ? 'text-gray-600 hover:text-gray-800' 
                    : 'text-white hover:text-gray-200')
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Projects
          </Link>
          <Link 
            href="/gallery" 
            className={`transition-colors duration-200 ${
              isHomePage 
                ? (isScrolled 
                    ? 'text-gray-600 hover:text-gray-800' 
                    : 'text-white hover:text-gray-200')
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Gallery
          </Link>
          <Link 
            href="/quotes" 
            className={`transition-colors duration-200 ${
              isHomePage 
                ? (isScrolled 
                    ? 'text-gray-600 hover:text-gray-800' 
                    : 'text-white hover:text-gray-200')
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Quotes
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors duration-200 ${
              isHomePage 
                ? (isScrolled 
                    ? 'text-gray-600 hover:text-gray-800' 
                    : 'text-white hover:text-gray-200')
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Contact
          </Link>
          <Link 
            href="/resume" 
            className={`transition-colors duration-200 ${
              isHomePage 
                ? (isScrolled 
                    ? 'text-gray-600 hover:text-gray-800' 
                    : 'text-white hover:text-gray-200')
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
            isHomePage 
              ? (isScrolled 
                  ? 'text-gray-600 hover:text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:text-gray-200 hover:bg-white hover:bg-opacity-10')
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
          }`}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100 mt-4' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className={`bg-white rounded-lg shadow-lg border border-gray-200 ${
          isHomePage && !isScrolled ? 'bg-opacity-95 backdrop-blur-sm' : ''
        }`}>
          <div className="py-2">
            <Link 
              href="/projects" 
              onClick={closeMobileMenu}
              className="block px-6 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              Projects
            </Link>
            <Link 
              href="/gallery" 
              onClick={closeMobileMenu}
              className="block px-6 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link 
              href="/quotes" 
              onClick={closeMobileMenu}
              className="block px-6 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              Quotes
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMobileMenu}
              className="block px-6 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              href="/resume" 
              onClick={closeMobileMenu}
              className="block px-6 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
