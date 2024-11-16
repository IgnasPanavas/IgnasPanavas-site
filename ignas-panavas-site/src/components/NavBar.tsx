"use client";

import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-lg font-bold">
          <Link href="/">Ignas Panavas</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            ☰
          </button>
        </div>
        <div className={`md:flex space-x-20 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className=" hover:text-gray-400">Home</Link>
          <Link href="/about" className=" hover:text-gray-400">About</Link>
          <Link href="/projects" className=" hover:text-gray-400">Projects</Link>
          <Link href="/resume" className=" hover:text-gray-400">Resume</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
