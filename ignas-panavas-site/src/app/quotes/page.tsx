'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Quote {
  id: number;
  text: string;
  author: string;
  source?: string;
  category: string;
}

export default function Quotes() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const quotes: Quote[] = [
    {
      id: 1,
      text: "Beautiful things don't ask for attention.",
      author: "Unknown",
      source: "Unknown",
      category: "Life"
    },
    {
        id: 2,
        text: "You're not trying if you can't fail.",
        author: "Ignas",
        source: "Unknown",
        category: "Work"
      },
      {
        id: 3,
        text: "Embarrassment is an underexplored emotion, go out there and make a fool of yourself",
        author: "unknown",
        source: "Youtube",
        category: "Life"
      }
    
  ];

  const categories = ['All', ...Array.from(new Set(quotes.map(quote => quote.category)))];

  const filteredQuotes = selectedCategory === 'All' 
    ? quotes 
    : quotes.filter(quote => quote.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-8 pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-light text-gray-800 mb-4">Beautiful Quotes</h1>
          <p className="text-xl text-gray-600 font-light">
            A collection of words that inspire, challenge, and illuminate the human experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gray-800 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Quotes Grid */}
        <div className="space-y-6">
          {filteredQuotes.map((quote) => {
            const hasAuthor = quote.author && quote.author !== "Unknown";
            const hasSource = quote.source && quote.source !== "Unknown" && quote.source !== "";
            const hasAttribution = hasAuthor || hasSource;
            
            return (
              <div 
                key={quote.id} 
                className={`bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200 ${
                  hasAttribution ? 'p-8' : 'p-6'
                }`}
              >
                <blockquote className={`text-lg text-gray-800 leading-relaxed italic ${
                  hasAttribution ? 'mb-6' : 'mb-4'
                }`}>
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                
                {hasAttribution ? (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t pt-4">
                    <div>
                      {hasAuthor && (
                        <cite className="text-gray-600 font-medium not-italic">
                          — {quote.author}
                        </cite>
                      )}
                      {hasSource && (
                        <p className="text-sm text-gray-500 mt-1">
                          {quote.source}
                        </p>
                      )}
                    </div>
                    
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        {quote.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                      {quote.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">More Quotes Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              I&apos;m constantly collecting beautiful quotes that resonate with me. 
              Check back regularly to discover new words of wisdom and inspiration.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Philosophy</span>
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Creativity</span>
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Wisdom</span>
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Poetry</span>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
