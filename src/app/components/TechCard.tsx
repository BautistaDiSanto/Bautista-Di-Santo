"use client";

import { useRef } from "react";

interface TechCardProps {
  name: string;
  logo: string;
}

export default function TechCard({ name, logo }: TechCardProps) {
  const shineRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Proximity to each edge (0 = at edge, 1 = at far edge)
    const left = x / rect.width;
    const right = 1 - left;
    const top = y / rect.height;
    const bottom = 1 - top;
    // For each edge, opacity is higher when closer to that edge
    const maxOpacity = 0.14; // was 0.28, now more subtle
    const minOpacity = 0.04; // was 0.10, now more subtle
    const leftOpacity = minOpacity + (1 - left) * (maxOpacity - minOpacity);
    const rightOpacity = minOpacity + (1 - right) * (maxOpacity - minOpacity);
    const topOpacity = minOpacity + (1 - top) * (maxOpacity - minOpacity);
    const bottomOpacity = minOpacity + (1 - bottom) * (maxOpacity - minOpacity);
    // Blend four edge shines
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

  return (
    <div
      className="flex-shrink-0 p-4 bg-white/10 rounded-xl shadow-md text-center hover:-translate-y-1 transition-all duration-200 hover:shadow-lg w-40 border-white/10 backdrop-blur-2xl relative overflow-hidden group"
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
      <img
        src={logo}
        alt={name + " logo"}
        className="mx-auto mb-3 h-20 w-20 object-contain relative z-10 transition-transform duration-200 group-hover:scale-110"
        loading="lazy"
        width={80}
        height={80}
      />
      <span className="text-white font-medium block mt-2 relative z-10">
        {name}
      </span>
    </div>
  );
}
