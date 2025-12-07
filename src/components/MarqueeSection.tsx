import { useEffect, useRef } from "react";

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
    <section className="py-16 bg-[hsl(270,30%,92%)] overflow-hidden">
      {/* Top Text Marquee - Right to Left */}
      <div className="mb-8 overflow-hidden">
        <div className="flex animate-marquee-rtl">
          {[...services, ...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center shrink-0 px-6">
              <span className="text-2xl md:text-3xl font-medium text-foreground whitespace-nowrap">
                {service}
              </span>
              <span className="ml-6 text-primary text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Images Marquee - Right to Left */}
      <div className="mb-8 overflow-hidden">
        <div className="flex animate-marquee-rtl-slow gap-6">
          {[...portfolioImages, ...portfolioImages, ...portfolioImages].map((image, index) => (
            <div 
              key={index} 
              className="shrink-0 w-64 md:w-80 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={image} 
                alt={`Portfolio project ${(index % portfolioImages.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text Marquee - Left to Right */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-ltr">
          {[...services, ...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center shrink-0 px-6">
              <span className="text-2xl md:text-3xl font-medium text-foreground whitespace-nowrap">
                {service}
              </span>
              <span className="ml-6 text-primary text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
