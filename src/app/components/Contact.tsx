import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
    }
  ];

  return (
    <AnimatedSection id="contact" className="mt-24 relative" animation="fade-up">
      {/* Consistent background with other sections */}
      <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/30 -z-10"></div>
      
      {/* Consistent decorative elements */}
      <div className="absolute -top-10 right-0 w-32 h-32 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 left-0 w-32 h-32 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center relative">
          Get in Touch
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        </h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link, index) => (
            <AnimatedSection
              key={link.name}
              animation="fade-up"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 