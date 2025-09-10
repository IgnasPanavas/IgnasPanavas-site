'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SubstackArticle {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  coverImage?: string;
}

export default function SubstackArticles() {
  const [articles, setArticles] = useState<SubstackArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Use our own API route (no CORS issues)
        const response = await fetch('/api/substack');
        
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching Substack articles:', error);
        // Fallback to placeholder articles
        setArticles([
          {
            title: "The Art of Building",
            link: "https://ignaspanavas.substack.com",
            description: "Exploring the intersection of creativity and technology, and how building software is fundamentally an artistic process.",
            pubDate: new Date().toISOString()
          },
          {
            title: "Lessons from the Canvas",
            link: "https://ignaspanavas.substack.com",
            description: "What painting has taught me about problem-solving, patience, and the importance of iteration in all creative work.",
            pubDate: new Date().toISOString()
          },
          {
            title: "The Creator's Dilemma",
            link: "https://ignaspanavas.substack.com",
            description: "Navigating the balance between commercial success and artistic integrity in the modern creator economy.",
            pubDate: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[1, 2, 3].map((i) => (
          <div key={i} className='bg-white border border-gray-200 rounded-lg p-6 animate-pulse'>
            <div className='h-6 bg-gray-200 rounded mb-2'></div>
            <div className='h-4 bg-gray-200 rounded mb-4'></div>
            <div className='h-4 bg-gray-200 rounded mb-4'></div>
            <div className='h-4 bg-gray-200 rounded w-3/4'></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {articles.map((article, index) => (
        <div key={index} className='bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col h-full'>
                 {article.coverImage && (
                   <div className='mb-4'>
                     <Image
                       src={article.coverImage}
                       alt={article.title}
                       width={400}
                       height={192}
                       className='w-full h-48 object-cover rounded-lg shadow-md'
                     />
                   </div>
                 )}
          <div className='mb-4 flex-grow'>
            <h3 className='text-xl font-medium text-gray-800 mb-2'>{article.title}</h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              {article.description}
            </p>
          </div>
          <div className='flex justify-between items-center mt-auto'>
            <div className='text-sm text-gray-500'>
              Substack
            </div>
            <a 
              href={article.link} 
              target="_blank"
              rel="noopener noreferrer"
              className='text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 underline'
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
