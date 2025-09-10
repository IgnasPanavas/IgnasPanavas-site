'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
      isHomePage 
        ? (isScrolled ? 'bg-[#dfdbd8] shadow-sm' : 'bg-transparent')
        : 'bg-[#dfdbd8] shadow-sm'
    }`}>
      <div className="w-full flex justify-between items-center">
        <div className={`text-2xl font-medium transition-colors duration-300 ${
          isHomePage 
            ? (isScrolled ? 'text-gray-800' : 'text-white')
            : 'text-gray-800'
        }`}>
          <Link href="/">Ignas Panavas</Link>
        </div>
        
        <div className="flex space-x-8">
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
      </div>
    </nav>
  );
};

export default NavBar;
