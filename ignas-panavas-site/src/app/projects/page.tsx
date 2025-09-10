export default function ProjectsPage() {
  const projects = [
    {
      name: "Trading Journal",
      description: "Full-stack web app for tracking stock and options trades with performance metrics and visualizations.",
      tech: ["Python", "PostgreSQL", "React", "Tailwind"],
      github: "https://github.com/yourusername/trading-journal",
    },
    {
      name: "Habit Chain iOS App",
      description: "iOS productivity app built with SwiftUI for building streaks by chaining habits together.",
      tech: ["SwiftUI", "Combine", "SwiftCharts"],
      github: "https://github.com/yourusername/habit-chain",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-8 pt-32">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-light text-gray-800 mb-4">Projects</h1>
          <p className="text-xl text-gray-600 font-light">
            A collection of things I&apos;ve built
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border-b border-gray-200 pb-12 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-medium text-gray-800 mb-2 md:mb-0">
                  {project.name}
                </h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  View on GitHub →
                </a>
              </div>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
