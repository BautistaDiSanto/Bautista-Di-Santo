import AnimatedSection from './AnimatedSection';

export default function TechStack() {
  const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js'];

  return (
    <AnimatedSection className="mt-24 relative" animation="fade-up">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gray-50/30 dark:bg-gray-900/30 -z-10"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute -top-10 right-0 w-32 h-32 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 left-0 w-32 h-32 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center relative">
          Tech Stack
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <AnimatedSection 
              key={tech} 
              animation="fade-up"
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center transform hover:-translate-y-1 transition-all duration-200 hover:shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-gray-900 dark:text-white font-medium">{tech}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 