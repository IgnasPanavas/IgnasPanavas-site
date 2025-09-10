'use client';

import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SpamShield",
      description: "A full-stack anti-spam solution designed for GroupMe chats using machine learning. The system successfully blocks over 230 spam messages weekly across 7+ active groups with 99% uptime, providing a scalable and cost-effective solution for community protection.",
      longDescription: "SpamShield represents a comprehensive approach to combating spam in group messaging platforms. Built with React frontend and AWS infrastructure, the system uses Scikit-learn machine learning models to analyze message patterns and content. The solution includes a complete CI/CD pipeline leveraging Docker and GitHub Actions for automated deployment to AWS (ECR, Lambda), ensuring robust, high-availability performance and seamless updates.",
      technologies: ["React", "AWS Lambda", "AWS EC2", "AWS ECR", "Vercel", "Scikit-learn", "Docker", "Python", "Flask"],
      links: {
        live: "https://spamshield.ignaspanavas.com",
        github: "https://github.com/ignaspanavas/spamshield"
      },
      status: "Live",
      category: "Full-Stack",
      metrics: {
        uptime: "99%",
        spamBlocked: "230+ weekly",
        groups: "7+ active"
      }
    },
    {
      id: 2,
      title: "Social Media Analytics Platform",
      description: "A comprehensive full-stack analytics dashboard serving 99+ users across 5 platforms (TikTok, Instagram, Facebook, YouTube, Snapchat). Processes 26k+ daily data points to deliver unified cross-platform performance metrics and engagement insights.",
      longDescription: "This platform addresses the growing need for unified social media analytics across multiple platforms. Built with React frontend and Node.js backend, it implements OAuth 2.0 authentication with JWT token management and automated refresh workflows. The system maintains secure API connections for 350+ social media accounts while achieving 99.9% uptime through rate limiting compliance and exponential backoff error handling. The scalable backend infrastructure includes Redis caching, Bull queue job processing, and CI/CD pipeline using Docker and GitHub Actions.",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Redis", "Docker", "GitHub Actions", "OAuth 2.0"],
      links: {
        github: "https://github.com/ignaspanavas/social-analytics"
      },
      status: "In Development",
      category: "Full-Stack",
      metrics: {
        users: "99+",
        dataPoints: "26k+ daily",
        accounts: "350+",
        uptime: "99.9%"
      }
    },
    {
      id: 3,
      title: "Optimal Schedule Builder",
      description: "DevDogs' inaugural project: an optimal schedule-building website for UGA students. This collaborative effort features 62 contributors and 97 forks, demonstrating the power of community-driven development in solving real-world scheduling challenges.",
      longDescription: "The Optimal Schedule Builder was developed as part of DevDogs, a student organization at UGA focused on collaborative software development. The project addresses the complex scheduling needs of university students by providing an intelligent system that considers course requirements, time preferences, and availability constraints. Built with modern web technologies, it showcases effective team collaboration and project management in an academic setting.",
      technologies: ["Java", "TypeScript", "React", "Docker", "GitHub Actions"],
      links: {
        github: "https://github.com/DevDogs-UGA/Optimal-Schedule-Builder"
      },
      status: "Completed",
      category: "Collaborative",
      metrics: {
        contributors: "62",
        forks: "97",
        organization: "DevDogs UGA"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800';
      case 'In Development': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full-Stack': return 'bg-purple-100 text-purple-800';
      case 'Collaborative': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-20 px-8 pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-light text-gray-800 mb-4">Projects</h1>
          <p className="text-xl text-gray-600 font-light">
            A collection of software solutions built to solve real-world problems and empower communities
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {/* Project Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-medium text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-0 md:ml-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-semibold text-gray-800">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">About This Project</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                  
                  {/* Technologies & Links */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Links</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                        >
                          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Live
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                        >
                          <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              I&apos;m constantly working on new projects that combine technology with real-world impact. 
              Check back regularly to see the latest additions to my portfolio.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">FinTech</span>
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Machine Learning</span>
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Web3</span>
              <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Mobile Apps</span>
            </div>
          </div>
        </div>
        
        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
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