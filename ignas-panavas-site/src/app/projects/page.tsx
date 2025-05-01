export default function ProjectsPage() {
  const projects = [
    {
      name: "Trading Journal",
      description:
        "A full-stack web app for tracking stock and options trades, built with Python, PostgreSQL, and React. Includes performance metrics, tagging, and visualizations.",
      tech: ["Python", "PostgreSQL", "React", "Tailwind"],
      github: "https://github.com/yourusername/trading-journal",
      demo: "https://trading-journal.example.com",
    },
    {
      name: "Habit Chain iOS App",
      description:
        "An iOS productivity app built with SwiftUI and Combine, allowing users to build streaks by chaining habits together.",
      tech: ["SwiftUI", "Combine", "SwiftCharts"],
      github: "https://github.com/yourusername/habit-chain",
      demo: "",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-lg text-gray-600 mb-10">
        A collection of things I’ve built — from web apps to iOS tools.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-gray-300 p-6 shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-sm text-gray-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <span className="text-blue-600 underline text-sm">GitHub</span>
              )}
              {project.demo && (
                <span className="text-blue-600 underline text-sm">Live Demo</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
