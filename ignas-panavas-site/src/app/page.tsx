'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        zIndex: 1,
      }}
      className='flex flex-col items-center text-center space-y-4 px-4'
    >
      <h1 className='text-5xl md:text-6xl font-bold'>Ignas Panavas</h1>
      <p className='text-lg md:text-xl text-gray-700'>Building at the intersection of Code and Capital</p>
      <div className='text-sm md:text-base text-gray-500'>Feel free to explore</div>
      <div className='flex space-x-6 pt-4'>
        <Link href="/about" className='text-blue-600 hover:underline'>About</Link>
        <Link href="/projects" className='text-blue-600 hover:underline'>Projects</Link>
        <Link href="/resume" className='text-blue-600 hover:underline'>Resume</Link>
      </div>
    </div>
  );
}
