'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Artwork {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  medium: string;
  dimensions: string;
  category: string;
}

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const artworks = [
    {
      id: 1,
      title: "Frog Portrait",
      description: "A detailed portrait capturing the essence and character of a frog, exploring the beauty in nature's smaller creatures.",
      image: "/resources/Ignas_frog_painting.jpg",
      year: "2024",
      medium: "Acrylic on Canvas",
      dimensions: "12\" x 12\"",
      category: "Portrait"
    },
    {
      id: 2,
      title: "Owl Study",
      description: "An intimate study of an owl, focusing on the intricate details of feathers and the wisdom in its gaze.",
      image: "/resources/Ignas_owl_painting.jpg",
      year: "2024",
      medium: "Acrylic on Canvas",
      dimensions: "12\" x 12\"",
      category: "Portrait"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-8 pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-light text-gray-800 mb-4">Art Gallery</h1>
          <p className="text-xl text-gray-600 font-light">
            A collection of paintings that explore the intersection of nature, character, and artistic expression
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {/* Image */}
              <div 
                className="relative h-80 cursor-pointer hover:opacity-90 transition-opacity duration-200"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 bg-white bg-opacity-90 rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-medium text-gray-800">{artwork.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {artwork.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {artwork.description}
                </p>
                
                {/* Artwork Details */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 border-t pt-4">
                  <div>
                    <span className="font-medium">Year:</span> {artwork.year}
                  </div>
                  <div>
                    <span className="font-medium">Medium:</span> {artwork.medium}
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium">Dimensions:</span> {artwork.dimensions}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">More Artwork Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              I&apos;m constantly working on new pieces that explore different themes and techniques. 
              Check back regularly to see the latest additions to my collection.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Landscape</span>
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Abstract</span>
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Still Life</span>
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Mixed Media</span>
            </div>
          </div>
        </div>
        
        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
      
      {/* Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div 
            className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Large Image */}
            <div className="relative w-full md:h-[500px]">
              <Image
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            
            {/* Image Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-3xl font-medium text-gray-800">{selectedArtwork.title}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {selectedArtwork.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                {selectedArtwork.description}
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-500 border-t pt-4">
                <div>
                  <span className="font-medium">Year:</span> {selectedArtwork.year}
                </div>
                <div>
                  <span className="font-medium">Medium:</span> {selectedArtwork.medium}
                </div>
                <div>
                  <span className="font-medium">Dimensions:</span> {selectedArtwork.dimensions}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
