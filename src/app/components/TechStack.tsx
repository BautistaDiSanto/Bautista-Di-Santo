"use client";

import AnimatedSection from './AnimatedSection';
import TechCard from './TechCard';

const techData = [
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'Next.js', logo: '/logos/nextjs.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'Node.js', logo: '/logos/nodejs.svg' },
  { name: 'Tailwind CSS', logo: '/logos/tailwind.svg' },
  { name: 'Git', logo: '/logos/git.svg' },
  { name: 'GitHub', logo: '/logos/github.svg' },
  { name: 'GitLab', logo: '/logos/gitlab.svg' },
  { name: 'Bitbucket', logo: '/logos/bitbucket.svg' },
  { name: 'HTML', logo: '/logos/html.svg' },
  { name: 'CSS', logo: '/logos/CSS.svg' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
  { name: 'MySQL', logo: '/logos/mysql.svg' },
  { name: 'React Native', logo: '/logos/react-native.svg' },
];

export default function TechStack() {
  // Triple the array for a longer, smoother loop
  const logos = [...techData, ...techData, ...techData];

  return (
    <AnimatedSection className="mt-24 relative w-full" animation="fade-up">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10"></div>
      {/* Subtle decorative elements */}
      <div className="absolute -top-10 right-0 w-32 h-32 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 left-0 w-32 h-32 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center relative w-full">
          Tech Stack
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        </h2>
        <div className="overflow-hidden w-full carousel-wrapper relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-48 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-900 via-gray-50/60 dark:via-gray-900/60 to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-48 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-900 via-gray-50/60 dark:via-gray-900/60 to-transparent" />
          <div className="flex gap-6 py-2 animate-tech-scroll w-max min-w-full">
            {logos.map((tech, index) => (
              <TechCard key={tech.name + index} name={tech.name} logo={tech.logo} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* In globals.css:
@keyframes tech-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.3333%); }
}
.animate-tech-scroll {
  animation: tech-scroll 60s linear infinite;
}
.animate-tech-scroll-paused {
  animation-play-state: paused !important;
}
.flex:hover .animate-tech-scroll {
  animation-play-state: running;
}
.group/techcard:hover ~ .animate-tech-scroll,
.group/techcard:hover .animate-tech-scroll {
  animation-play-state: paused !important;
}
*/