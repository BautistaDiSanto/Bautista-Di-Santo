"use client";

import { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in';
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-up' 
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove the class first to reset the animation
            entry.target.classList.remove('animate-in');
            // Force a reflow
            void entry.target.offsetWidth;
            // Add the class back to trigger the animation
            entry.target.classList.add('animate-in');
          } else {
            // Remove the class when out of view
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-10 transition-all duration-700 ease-out';
      case 'fade-in':
        return 'opacity-0 transition-all duration-700 ease-out';
      case 'slide-in':
        return 'opacity-0 translate-x-10 transition-all duration-700 ease-out';
      default:
        return 'opacity-0 translate-y-10 transition-all duration-700 ease-out';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`${getAnimationClasses()} ${className} [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 [&.animate-in]:translate-x-0`}
    >
      {children}
    </div>
  );
} 