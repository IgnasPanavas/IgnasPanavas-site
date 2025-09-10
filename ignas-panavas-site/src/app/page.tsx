'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
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
      <div className='relative min-h-screen overflow-hidden'>
        {/* Optimized Background Image - covers entire viewport */}
        <Image
          src='/resources/Ignas_in_room.jpg'
          alt='Ignas in room'
          fill
          priority
          className='object-cover'
          sizes='100vw'
          quality={85}
          placeholder='blur'
          blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
        />
        
        {/* Overlay for better text readability - covers entire viewport */}
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        
        {/* Content positioned below header */}
        <div className='flex flex-col justify-center min-h-screen space-y-6 relative w-full pt-20'>
          {/* Content with relative positioning to appear above overlay */}
          <div className='relative z-10 max-w-6xl mx-auto px-8 w-full'>
            <div>
              <h1 className='text-left text-6xl md:text-7xl font-light text-white leading-tight' style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Dedicated to all forms of <span style={{ color: '#10b981' }}>creation</span>.<br />
                Powered by <span style={{ color: '#f59e0b' }}>coffee</span>...
              </h1>
            </div>
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
                  DevDogs&apos; inaugural project: an optimal schedule-building website for UGA students with 62 contributors and 97 forks.
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
          
          {/* Learn More Button */}
          <div className='text-center mt-12'>
            <a
              href='https://github.com/ignaspanavas'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium'
            >
              View All Projects on GitHub
              <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
              </svg>
            </a>
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
          
          {/* Learn More Button */}
          <div className='text-center mt-12'>
            <a
              href='/gallery'
              className='inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium'
            >
              View Full Gallery
              <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
              </svg>
            </a>
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
          
          {/* Learn More Button */}
          <div className='text-center mt-12'>
            <a
              href='https://ignaspanavas.substack.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium'
            >
              Read More on Substack
              <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Connecting line to deeper story section */}
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gray-300'></div>
      </section>

      {/* Deeper Story Section */}
      <section id="story" className='py-20 relative'>
        {/* Connecting line from writing */}
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gray-300'></div>
        
        <div className='max-w-4xl mx-auto px-8'>
          <h2 className='text-5xl md:text-6xl font-light text-gray-800 leading-tight mb-16 text-center' style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            The deeper story behind<br />
           the creator
          </h2>
          
            <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
              <p className='mb-6'>
                As I&apos;ve made my way through college, I&apos;ve come to realize just how powerful and beautiful creation is. Whether it&apos;d be through painting, writing, or coding, creation moves your thoughts in new ways. Building provides satisfaction and learning in a way consumption rarely matches. It&apos;s with this understanding that I&apos;ve focused my attention on a vision of creation.
              </p>
              
              <p className='mb-6'>
                From a professional perspective, I have knowledge in both Finance and Computer Science. Given that finance is interwoven through the fabric of society, it&apos;s a powerful area to build in. Being involved in financial markets for close to 4 years now, I&apos;ve come to understand how money provides the backbone to innovation and creation. With this understanding, I hope to create new ways of democratizing finance, providing novel ways to empower people.
              </p>
              
              <p className='mb-6'>
                Combining my finance knowledge with a deep interest in computer science and programming gives me the full suite of tools to build impactful technology. I&apos;ve worked on a number of projects, all built with the purpose of helping others. While I&apos;ve had success building effective solutions alone, I&apos;m looking to join a company and work on larger scale problems.
              </p>
              
              <p className='mb-6'>
                Though the path forward is variable, my insistence on creation is not. Whatever the future looks like, I&apos;ll wake up every day with a desire to build. A desire to make the world a little bit better. A desire to make an impact. A desire to help another.
              </p>
              
              <p className='mb-6'>
                I believe we&apos;re on this earth to make, to create, to build. If you feel the same, or you&apos;d like to collaborate on a new project, feel free to contact me. I love taking initiative and I love working with those that do.
              </p>
            </div>
            
            {/* Contact Button */}
            <div className='text-center mt-12'>
              <a
                href='/contact'
                className='inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium'
              >
                Get In Touch
                <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                </svg>
              </a>
            </div>
        </div>
      </section>
    </div>
  );
}