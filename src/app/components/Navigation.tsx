"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="w-full dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold dark:text-white">Bautista Di Santo</div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-300 dark:hover:text-white transition-colors whitespace-nowrap text-sm lg:text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md dark:text-gray-300 dark:hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:hidden dark:border-gray-800`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 truncate"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}