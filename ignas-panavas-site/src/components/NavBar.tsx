'use client';

import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg text-white">
          <Link href="/">Ignas Panavas</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            ☰
          </button>
        </div>
        <div className={`md:flex space-x-20 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className=" hover:underline text-white">Home</Link>
          <Link href="/about" className="hover:underline text-white">About</Link>
          <Link href="/projects" className="hover:underline text-white">Projects</Link>
          <Link href="/resume" className="hover:underline text-white">Resume</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
