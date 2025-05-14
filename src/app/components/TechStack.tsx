export default function TechStack() {
  const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js'];

  return (
    <div className="mt-24">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center"
          >
            <span className="text-gray-900 dark:text-white">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 