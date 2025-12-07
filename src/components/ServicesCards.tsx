import { useRef, useState } from 'react';
import { ArrowUpRight, Target, Layout, Smartphone, Code2, Palette, TrendingUp, Globe, Cpu } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Product Strategy',
    description: 'We decode your market to build roadmaps that actually lead somewhere. Research-backed, data-driven, and designed for scale.',
    icon: Target,
    gradient: 'from-rose-500 to-orange-400',
    tags: ['Market Research', 'Roadmapping', 'User Persona'],
    color: '#fb7185', // Rose-400
    href: '/services#strategy',
    colSpan: 'md:col-span-2 lg:col-span-2',
  },
  {
    title: 'UI/UX Design',
    description: 'Interfaces that feel inevitable. We craft intuitive journeys that delight users.',
    icon: Layout,
    gradient: 'from-violet-500 to-fuchsia-500',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    color: '#a78bfa', // Violet-400
    href: '/services#ui-ux',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    title: 'Mobile Apps',
    description: 'Native experiences for iOS and Android that feel fluid, responsive, and natural.',
    icon: Smartphone,
    gradient: 'from-blue-500 to-cyan-400',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
    color: '#60a5fa', // Blue-400
    href: '/services#mobile',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    title: 'Development',
    description: 'Clean code, scalable architecture. We build robust systems using modern stacks like React, Next.js, and Node.',
    icon: Code2,
    gradient: 'from-emerald-400 to-teal-500',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    color: '#34d399', // Emerald-400
    href: '/services#development',
    colSpan: 'md:col-span-2 lg:col-span-2',
  },
  {
    title: 'Brand Identity',
    description: 'More than a logo. We forge visual systems that tell your story.',
    icon: Palette,
    gradient: 'from-amber-400 to-yellow-500',
    tags: ['Logo Design', 'Typography', 'Brand Guidelines'],
    color: '#fbbf24', // Amber-400
    href: '/services#branding',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    title: 'SaaS Growth',
    description: 'Optimizing funnels and retention loops to turn users into advocates.',
    icon: TrendingUp,
    gradient: 'from-pink-500 to-rose-500',
    tags: ['CRO', 'Analytics', 'Retention'],
    color: '#f43f5e', // Rose-500
    href: '/services#growth',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    title: 'Webflow Dev',
    description: 'Award-winning no-code sites delivered globally.',
    icon: Globe,
    gradient: 'from-indigo-500 to-blue-600',
    tags: ['Webflow', 'GSAP', 'Interactions'],
    color: '#818cf8', // Indigo-400
    href: '/services#webflow',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
];

const ServiceCard = ({ service, index, visible }: { service: any; index: number; visible: boolean }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <Link
      to={service.href}
      className={`group relative bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-1 ${service.colSpan} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Spotlight Border Wrapper */}
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="absolute inset-0 z-20"
        style={{
          maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
        }}
      >
        <div className="absolute inset-0 border-2 border-white/20 rounded-[2rem] pointer-events-none transition-opacity duration-300" style={{ opacity }} />
      </div>

      {/* Spotlight Background Glow */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${service.color}15, transparent 40%)`,
          opacity: opacity
        }}
      />

      {/* Watermark Number */}
      <div className="absolute -bottom-4 -right-4 text-[10rem] font-bold text-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none select-none leading-none">
        0{index + 1}
      </div>

      <div className="relative z-10 h-full flex flex-col items-start pointer-events-none">
        <div className={`w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-white/5 shadow-inner`}>
          <service.icon className={`w-7 h-7`} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
          {service.title}
        </h3>

        <p className="text-white/60 leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {service.tags.map((tag: string, i: number) => (
            <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/50 group-hover:text-white/80 group-hover:border-white/10 transition-colors duration-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export const ServicesCards = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef: cardsRef, visibleItems: cardsVisible } = useStaggeredAnimation(services.length, {
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <section id="services" className="relative py-32 bg-dark-surface overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-violet/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-24 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5" />
            Our Expertise
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-fuchsia-400 to-white animate-text-shimmer bg-[length:200%_auto]">Digital Solutions</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From Day 1 strategy to Day 1000 growth. We are the partner that scales with you.
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} visible={cardsVisible[index]} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-dark font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            View Full Service List
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
