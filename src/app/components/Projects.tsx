import AnimatedSection from './AnimatedSection';

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
    <AnimatedSection className="mt-24 relative" animation="fade-up">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/30 -z-10"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute -top-10 left-0 w-32 h-32 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 right-0 w-32 h-32 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center relative">
          Featured Projects
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:-translate-y-1 transition-all duration-200 hover:shadow-xl"
              //style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/90 to-purple-500/90 dark:from-blue-600/90 dark:to-purple-600/90"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Source Code →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 