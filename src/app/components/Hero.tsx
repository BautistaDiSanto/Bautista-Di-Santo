export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Juan</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Full Stack Developer passionate about building modern web applications
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          View Projects
        </a>
      </div>
    </div>
  );
} 