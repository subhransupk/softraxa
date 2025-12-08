import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { FloatingParticles } from "./FloatingParticles";

const services = [
  "Dashboard", "Logos", "Webflow", "Slide Decks", "Mobile Apps",
  "Figma", "Social Media", "Framer", "Branding", "UI/UX Design"
];

const portfolioImages = [
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=600&fit=crop",
];

const MarqueeSection = () => {
  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-dark to-transparent z-10" />
        <FloatingParticles count={25} className="opacity-30" />
      </div>

      {/* Top Text Marquee - Large Outline Text */}
      <div className="mb-20 overflow-hidden relative z-0">
        <div className="flex animate-marquee-rtl">
          {[...services, ...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center shrink-0 px-8 group">
              <span className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/0 uppercase tracking-tighter whitespace-nowrap transition-all duration-500 group-hover:from-white/30 group-hover:to-white/5 cursor-default select-none">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Images Marquee - Main Showcase */}
      <div className="mb-20 overflow-hidden relative z-10">
        <div className="flex animate-marquee-rtl-slow gap-8 items-center py-4">
          {[...portfolioImages, ...portfolioImages, ...portfolioImages].map((image, index) => (
            <div
              key={index}
              className={cn(
                "shrink-0 w-64 md:w-80 h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden relative group cursor-pointer",
                "border border-white/5 backdrop-blur-sm transition-all duration-500",
                "hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(var(--violet-rgb),0.3)]",
                index % 2 === 0 ? "rotate-2 hover:rotate-0" : "-rotate-2 hover:rotate-0"
              )}
            >
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />

              {/* Image with Parallax-like scale */}
              <img
                src={image}
                alt={`Portfolio project ${(index % portfolioImages.length) + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

              {/* Tag/Badge */}
              <div className="absolute bottom-8 left-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet/20 text-white text-sm font-medium border border-violet/30 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  View Logic
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text Marquee - Features/Tech */}
      <div className="overflow-hidden relative z-0 border-y border-white/5 bg-white/[0.02] py-4 backdrop-blur-sm">
        <div className="flex animate-marquee-ltr">
          {[...services, ...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center shrink-0 px-12 gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
              <span className="text-lg font-light text-white tracking-[0.2em] uppercase">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
