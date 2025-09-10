'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SubstackArticles from '@/components/SubstackArticles';

export default function Home() {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollArrow(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div 
        className='flex flex-col justify-center min-h-screen space-y-6 relative w-full pt-20'
        style={{
          backgroundImage: 'url(/resources/Ignas_in_room.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        
        {/* Content with relative positioning to appear above overlay */}
        <div className='relative z-10 max-w-6xl mx-auto px-8 w-full'>
        <div>
          <h1 className='text-left text-6xl md:text-7xl font-light text-white leading-tight' style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Dedicated to all forms of <span style={{ color: '#10b981' }}>creation</span>.<br />
            Powered by <span style={{ color: '#f59e0b' }}>coffee</span>...
          </h1>
        </div>
        </div>
        
        {/* Scroll Arrow - positioned at bottom of hero image */}
        {showScrollArrow && (
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10'>
            <button
              onClick={scrollToProjects}
              className='text-white hover:text-gray-200 transition-colors duration-200'
            >
              <svg 
                className='w-8 h-8' 
                fill='none' 
                stroke='currentColor' 
                viewBox='0 0 24 24'
              >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth={2} 
                  d='M19 14l-7 7m0 0l-7-7m7 7V3' 
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Projects Section */}
      <section id="projects" className='py-20 relative'>
        {/* Connecting line from hero */}
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gray-300'></div>
        
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='text-5xl md:text-6xl font-light text-gray-800 leading-tight mb-16 text-center' style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            I build software to<br />
            <span style={{ color: '#10b981' }}>empower others</span>
          </h2>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* SpamShield Card */}
            <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col h-full'>
              <div className='mb-4 flex-grow'>
                <h3 className='text-xl font-medium text-gray-800 mb-2'>SpamShield</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  Full-stack anti-spam solution for GroupMe chats using machine learning. Blocks 230+ spam messages weekly across 7+ groups with 99% uptime.
                </p>
              </div>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>React</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>AWS</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Python</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Scikit-learn</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Docker</span>
              </div>
              <div className='flex justify-between items-center mt-auto'>
                <div className='text-sm text-gray-500'>
                  ML/AI
                </div>
                <a 
                  href="https://spamshield.ignaspanavas.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 underline'
                >
                  View Live
                </a>
              </div>
            </div>

            {/* Social Media Analytics Platform Card */}
            <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col h-full'>
              <div className='mb-4 flex-grow'>
                <h3 className='text-xl font-medium text-gray-800 mb-2'>Social Media Analytics Platform</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  Full-stack analytics dashboard serving 99+ users across 5 platforms, processing 26k+ daily data points with 99.9% uptime.
                </p>
              </div>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>React</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Node.js</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>PostgreSQL</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>JWT</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Redis</span>
              </div>
              <div className='flex justify-between items-center mt-auto'>
                <div className='text-sm text-gray-500'>
                  Analytics
                </div>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 underline'
                >
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Optimal Schedule Builder Card */}
            <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col h-full'>
              <div className='mb-4 flex-grow'>
                <h3 className='text-xl font-medium text-gray-800 mb-2'>Optimal Schedule Builder</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  DevDogs' inaugural project: an optimal schedule-building website for UGA students with 62 contributors and 97 forks.
                </p>
              </div>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Java</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>TypeScript</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>React</span>
                <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Docker</span>
              </div>
              <div className='flex justify-between items-center mt-auto'>
                <div className='text-sm text-gray-500'>
                  Open Source
                </div>
                <a 
                  href="https://github.com/DevDogs-UGA/Optimal-Schedule-Builder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 underline'
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Connecting line to art section */}
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gray-300'></div>
        </div>
      </section>

      {/* Art Section */}
      <section id="art" className='py-20 relative'>
        {/* Connecting line from projects */}
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 '></div>
        
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='text-5xl md:text-6xl font-light text-gray-800 leading-tight mb-16 text-center' style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            I paint to<br />
            <span style={{ color: '#f59e0b' }}>inspire <span style={{ fontFamily: '"Lucida Handwriting", "Apple Chancery", "Bradley Hand", cursive' }}>creativity</span></span>
          </h2>
          
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Frog Painting Card */}
            <div className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200'>
              <div className='aspect-square bg-cover bg-center' style={{ backgroundImage: 'url(/resources/Ignas_frog_painting.jpg)' }}></div>
              <div className='p-6'>
                <h3 className='text-xl font-medium text-gray-800 mb-2'>Red-Eyed Tree Frog</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  A vibrant acrylic painting capturing the striking beauty of a red-eyed tree frog in its natural habitat.
                </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Acrylic</span>
                  <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Wildlife</span>
                </div>
              </div>
            </div>

            {/* Owl Painting Card */}
            <div className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200'>
              <div className='aspect-square bg-cover bg-center' style={{ backgroundImage: 'url(/resources/Ignas_owl_painting.jpg)' }}></div>
              <div className='p-6'>
                <h3 className='text-xl font-medium text-gray-800 mb-2'>Owl Portrait</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  An intimate portrait focusing on the piercing gaze and intricate feather details of a majestic owl.
                </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Acrylic</span>
                  <span className='text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>Portrait</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connecting line to writing section */}
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gray-300'></div>
      </section>

      {/* Writing Section */}
      <section id="writing" className='py-20 relative '>
        {/* Connecting line from art */}
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gray-300'></div>
        
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='text-5xl md:text-6xl font-light text-gray-800 leading-tight mb-16 text-center' style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            I write to<br />
            <span style={{ color: '#8b5cf6' }}>provoke thinking</span>
          </h2>
          
          <SubstackArticles />
        </div>
      </section>
    </div>
  );
}