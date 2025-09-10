'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      isScrolled ? 'bg-[#dfdbd8] shadow-sm' : 'bg-transparent'
    }`}>
      <div className="w-full flex justify-between items-center">
        <div className={`text-2xl font-medium transition-colors duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <Link href="/">Ignas Panavas</Link>
        </div>
        
        <div className="flex space-x-8">
          <button 
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-600 hover:text-gray-800' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            Projects
          </button>
          <Link 
            href="/resume" 
            className={`transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-600 hover:text-gray-800' 
                : 'text-white hover:text-gray-200'
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
