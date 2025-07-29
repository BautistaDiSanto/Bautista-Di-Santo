import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/BautistaDiSanto',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juanbautistadisanto/',
    },
    {
      name: 'Email',
      url: 'mailto:juanbautistadisanto@gmail.com',
    }
  ];

  return (
    <AnimatedSection className="mt-24 relative" animation="fade-up">
      {/* Consistent background with other sections */}
      <div className="absolute inset-0"></div>
      
      {/* Consistent decorative elements */}
      <div className="absolute -top-10 right-0 w-32 h-32 bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 left-0 w-32 h-32 bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center relative">
          Get in Touch
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400 rounded-full"></div>
        </h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link) => (
            <AnimatedSection
              key={link.name}
              animation="fade-up"
              className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
              //style={{ transitionDelay: `${index * 100}ms` }}
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