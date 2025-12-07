import { useRef, useState } from 'react';
import { Check, Clock, Shield, Sparkles, Target, Zap, ArrowUpRight, Trophy, Users, BarChart, Gem, Rocket } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Agile sprints that deliver production-ready assets in record time.',
    stat: '2x Speed',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    dark: false
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Every pixel is placed with strategic intent to maximize your conversion rates.',
    stat: '+45% ROI',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    dark: true
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security & Scale',
    description: ' robust design systems that scale with your business. Documentation, components, and assets delivered in a way that your engineering team will love.',
    stat: '100% Scalable',
    gradient: 'from-emerald-400 via-green-500 to-teal-500',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    dark: true,
    isHorizontal: true
  },
  {
    icon: Gem,
    title: 'Premium Aesthetic',
    description: 'We don\'t just design; we craft experiences. Elevate your brand perception with world-class visuals that command attention.',
    stat: 'Top 1% Quality',
    gradient: 'from-fuchsia-500 via-purple-600 to-indigo-600',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    dark: false,
    isHorizontal: true
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Direct access to senior talent.',
    stat: 'No Juniors',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    dark: true
  },
  {
    icon: Rocket,
    title: 'Growth Partner',
    description: 'We scale as you scale.',
    stat: 'Long-term',
    gradient: 'from-violet via-purple-500 to-fuchsia-500',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    dark: false
  },
];

const TiltCard = ({ children, className, gradient }: { children: React.ReactNode, className?: string, gradient: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setTransform(`perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale3d(1.02, 1.02, 1.02)`);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setOpacity(0);
  };

  return (
    <div
      ref={ref}
      className={`${className} relative transition-all duration-200 ease-out`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      {/* Dynamic Border Glow */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 blur-xl`}
        style={{ opacity: opacity * 0.4 }}
      />
      {children}
    </div>
  );
};

export const BenefitsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: benefitsRef, visibleItems: benefitsVisible } = useStaggeredAnimation(benefits.length, {
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Constellation Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-violet/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 hover:bg-white/10 transition-colors cursor-default">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/90">Why Leaders Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Unfair <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-fuchsia-400 to-white">Advantage</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just deliver designs. We deliver a competitive edge wrapped in world-class aesthetics.
          </p>
        </div>

        <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto auto-rows-[minmax(280px,auto)]">
          {benefits.map((benefit, index) => (
            <TiltCard
              key={index}
              gradient={benefit.gradient}
              className={`${benefit.colSpan} ${benefit.rowSpan} group rounded-3xl relative h-full ${benefitsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
            >
              <div className={`h-full w-full rounded-3xl border p-8 flex flex-col relative overflow-hidden backdrop-blur-xl transition-colors duration-300 ${benefit.dark
                  ? 'bg-[#0a0a0a]/80 border-white/5 hover:bg-[#0a0a0a]/90'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}>
                {/* Background Gradient Mesh */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full transform translate-x-12 -translate-y-12 pointer-events-none`} />

                <div className="flex justify-between items-start mb-auto relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-2xl bg-dark/90 flex items-center justify-center backdrop-blur-sm">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-white/70" />
                    <span className="text-xs font-semibold text-white/90">{benefit.stat}</span>
                  </div>
                </div>

                <div className={`mt-8 relative z-10 ${benefit.isHorizontal ? 'lg:flex lg:items-end lg:gap-8' : ''}`}>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-white/60 text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {benefit.isHorizontal && (
                    <div className="hidden lg:flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 flex-shrink-0 animate-spin-slow">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet to-fuchsia-500 opacity-20 blur-md" />
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
