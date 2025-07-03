"use client";

import React, { useRef, useEffect, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  demoLink: string;
  image?: string;
}

export default function ProjectCard({ title, description, demoLink, image }: ProjectCardProps) {
  const shineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const left = x / rect.width;
    const right = 1 - left;
    const top = y / rect.height;
    const bottom = 1 - top;
    const maxOpacity = 0.14;
    const minOpacity = 0.04;
    const leftOpacity = minOpacity + (1 - left) * (maxOpacity - minOpacity);
    const rightOpacity = minOpacity + (1 - right) * (maxOpacity - minOpacity);
    const topOpacity = minOpacity + (1 - top) * (maxOpacity - minOpacity);
    const bottomOpacity = minOpacity + (1 - bottom) * (maxOpacity - minOpacity);
    const gradient = `
      linear-gradient(90deg, rgba(255,255,255,${leftOpacity}) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 80%),
      linear-gradient(270deg, rgba(255,255,255,${rightOpacity}) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 80%),
      linear-gradient(180deg, rgba(255,255,255,${topOpacity}) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 80%),
      linear-gradient(0deg, rgba(255,255,255,${bottomOpacity}) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 80%)
    `;
    if (shineRef.current) {
      shineRef.current.style.background = gradient;
    }
  }

  function handleMouseLeave() {
    if (shineRef.current) {
      shineRef.current.style.background =
        "linear-gradient(120deg, rgba(255,255,255,0.18) 10%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0) 80%)";
    }
  }

  // Helper to split title into spans for per-letter hover and entrance animation
  function renderAnimatedTitle(title: string) {
    return (
      <span className="inline-block">
        {title.split("").map((char, i) => (
          <span
            key={i}
            className={
              `inline-block transition-all duration-300 cursor-pointer will-change-transform` +
              (inView ? ' letter-pop-animate' : '')
            }
            style={
              inView
                ? {
                    transitionDelay: `${i * 40}ms`,
                    animation: 'letter-pop 0.5s cubic-bezier(.23,1.02,.57,1.01) both',
                    animationDelay: `${i * 40}ms`,
                  }
                : { transitionDelay: `${i * 40}ms` }
            }
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.animation = 'none';
              // Force reflow
              void el.offsetWidth;
              el.style.animation = 'letter-pop 0.5s cubic-bezier(.23,1.02,.57,1.01) both';
            }}
          >
            {char === " " ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  }

  return (
    <div
      ref={cardRef}
      className="bg-white/20 dark:bg-white/10 rounded-xl shadow-md text-center hover:-translate-y-1 transition-all duration-200 hover:shadow-lg border border-white/20 dark:border-white/10 backdrop-blur-2xl relative overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Frosted glass radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.01) 100%)",
        }}
      />
      {/* Edge shine on hover, smoothly blended from all edges */}
      <div
        ref={shineRef}
        className="absolute left-0 top-0 w-full h-full pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.18) 10%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0) 80%)",
        }}
      />
      {image && (
        <img
          src={image}
          alt={title + ' preview'}
          className="h-48 w-full object-cover object-center relative z-10 transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      )}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative overflow-visible">
          {renderAnimatedTitle(title)}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-8 h-1 bg-gray-400 dark:bg-gray-200 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:bottom-[-2px]"></span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex gap-4 justify-center">
          <a
            href={demoLink}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View →
          </a>
        </div>
      </div>
      <style jsx global>{`
@keyframes letter-pop {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  60% { opacity: 1; transform: translateY(-6px) scale(1.08); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
`}</style>
    </div>
  );
}
