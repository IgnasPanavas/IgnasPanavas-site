import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch from Substack API server-side (no CORS issues)
    const response = await fetch('https://ignaspanavas.substack.com/api/v1/posts?limit=3');
    
    if (!response.ok) {
      throw new Error('Failed to fetch from Substack');
    }
    
    const data = await response.json();
    
    // The API returns an array directly, not wrapped in a posts property
        if (Array.isArray(data) && data.length > 0) {
            const articles = data.map((post: { title?: string; slug?: string; description?: string; truncated_body_text?: string; post_date?: string; cover_image?: string }) => {
              console.log('Processing post:', post.title, 'Cover image:', post.cover_image);
              return {
                title: post.title || 'Untitled',
                link: `https://ignaspanavas.substack.com/p/${post.slug}`,
                description: (post.description || post.truncated_body_text || '').substring(0, 150) + '...',
                pubDate: post.post_date || new Date().toISOString(),
                coverImage: post.cover_image && post.cover_image.startsWith('http') ? post.cover_image : null
              };
            });
      
      return NextResponse.json({ articles });
    } else {
      throw new Error('No posts found');
    }
  } catch (error) {
    console.error('Error fetching Substack articles:', error);
    
    // Return fallback articles
    const fallbackArticles = [
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
    ];
    
    return NextResponse.json({ articles: fallbackArticles });
  }
}
