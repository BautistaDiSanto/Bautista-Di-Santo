export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of the project and its key features.",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of the project and its key features.",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <div id="projects" className="mt-24">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project →
                </a>
                <a
                  href={project.codeLink}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 