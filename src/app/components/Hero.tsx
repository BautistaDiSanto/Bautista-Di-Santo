"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [name, setName] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const fullName = "Di Santo";

  useEffect(() => {
    // Animate the name
    let currentIndex = 0;
    const nameInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(nameInterval);
        // Show description after name is typed
        setTimeout(() => {
          setShowDescription(true);
        }, 500);
      }
    }, 150);

    return () => clearInterval(nameInterval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-900/20 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-900/20 rounded-full blur-2xl opacity-50"></div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 relative">
          Bautista <span className="text-blue-400">
            {name}
            <span className="animate-blink">|</span>
          </span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-400 rounded-full"></div>
        </h1>
        <div className="space-y-6 relative">
          <div className={`transition-all duration-1000 ease-in-out ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              As a Frontend Developer, I worked on a variety of web projects for over four years, focusing on building internal tools, dashboards, and CMS platforms. Most of my work involved using React, Next.js, and TypeScript to create responsive, scalable interfaces and components.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mt-4">
              I regularly collaborate with cross-functional teams made up of frontend and backend developers, designers, project managers, and QA testers. I participate in agile workflows including daily standups, sprint planning, retrospectives, and code reviews.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mt-4">
              I also worked closely with backend developers to integrate APIs and with designers to bring Figma mockups to life with pixel-perfect UIs. My role requires me to balance usability, performance, and maintainability while delivering features on time in a fast-paced environment.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          View Projects
        </a>
      </div>
    </div>
  );
} 