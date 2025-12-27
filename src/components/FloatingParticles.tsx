import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  parallaxSpeed: number;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
  mouseX?: number;
  mouseY?: number;
}

export const FloatingParticles = ({
  count = 30,
  className = '',
  mouseX = 0,
  mouseY = 0
}: FloatingParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.1,
      parallaxSpeed: Math.random() * 0.5 + 0.1, // Different speeds for parallax
    }));
    setParticles(generatedParticles);
  }, [count]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top;
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => {
        const scrollParallax = scrollY * particle.parallaxSpeed * 0.15;
        const mouseParallaxX = mouseX * particle.parallaxSpeed * 5;
        const mouseParallaxY = mouseY * particle.parallaxSpeed * 5;

        return (
          <div
            key={particle.id}
            className="absolute rounded-full bg-violet animate-float-particle will-change-transform"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              boxShadow: `0 0 ${particle.size * 2}px hsl(var(--violet) / 0.5)`,
              transform: `translate3d(${mouseParallaxX}px, ${scrollParallax + mouseParallaxY}px, 0)`,
            }}
          />
        );
      })}
    </div>
  );
};
