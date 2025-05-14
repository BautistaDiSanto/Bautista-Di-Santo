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
    <div id="contact" className="mt-24">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Get in Touch</h2>
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 