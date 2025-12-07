import { ArrowRight, Play, Sparkles, Star, Zap, Globe, Shield, Activity, BarChart3, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useState, useEffect } from 'react';

const trustBadges = [
  { label: '20+', sublabel: 'Years Experience', icon: '🏆' },
  { label: '500+', sublabel: 'Projects Delivered', icon: '🚀' },
  { label: '98%', sublabel: 'Client Satisfaction', icon: '💯' },
];

const clientLogos = ['ADDIESoft', 'Relaxy', 'Backpack', 'Goldman', 'Telenor'];

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-dark flex items-center pt-20">
      {/* Floating Particles */}
      <FloatingParticles count={60} className="z-[1] opacity-50" />

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep space background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a2e] via-dark to-dark" />

        {/* Dynamic spotlights */}
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-violet/10 rounded-full blur-[120px] mix-blend-screen transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-green-accent/5 rounded-full blur-[100px] mix-blend-screen transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
        />

        {/* Cinematic noise overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(106,75,255,0.1)] animate-fade-in hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-white/90 tracking-wide">Available for new projects</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] animate-fade-in tracking-tight" style={{ animationDelay: '0.1s' }}>
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">Measurable</span>
              <span className="block mt-1 relative">
                <span className="bg-gradient-to-r from-violet via-fuchsia-400 to-white bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  Impact
                </span>
                <span className="text-white/40 font-light ml-4">Every Time.</span>

                {/* Decorative underline */}
                <svg className="absolute -bottom-4 left-0 w-64 h-3 opacity-50" viewBox="0 0 200 9" fill="none">
                  <path d="M2.00025 7.00005C51.6853 1.63852 144.137 -4.10266 198.001 5.00005" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="2" y1="7" x2="198" y2="7" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8B5CF6" />
                      <stop offset="1" stopColor="#00FFA3" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
              We transform ambitious ideas into <span className="text-white font-medium">market-leading digital products</span> through data-driven design and strategic innovation.
            </p>

            <div className="flex flex-wrap items-center gap-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="relative h-14 px-8 bg-white text-dark hover:bg-white/90 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95 group overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <button className="h-14 px-8 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-3 group active:scale-95">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                <span className="text-white font-medium">Showreel</span>
              </button>
            </div>

            {/* Trust Badges - Modernized */}
            <div className="flex gap-8 pt-8 border-t border-white/5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {trustBadges.map((badge, index) => (
                <div key={index} className="group">
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">{badge.label}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-medium">{badge.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Holographic Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center perspective-[2000px]">
            {/* Main floating interface */}
            <div
              className="relative w-full max-w-lg aspect-square transition-transform duration-200 ease-out lg:hover:rotate-y-[-5deg] lg:hover:rotate-x-[5deg]"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${mousePosition.y * -0.5}deg)`
              }}
            >
              {/* Back glow */}
              <div className="absolute inset-0 bg-violet/20 blur-[80px] rounded-full animate-pulse opacity-50" />

              {/* Central Glass Card */}
              <div
                className="absolute inset-4 bg-dark/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
                style={{ transform: 'translateZ(20px)' }}
              >
                {/* Header UI */}
                <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-4 h-6 px-3 bg-black/20 rounded-md flex items-center gap-2 text-[10px] text-white/40 font-mono w-48">
                    <Shield className="w-3 h-3" />
                    design-system-v2.fig
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 h-full relative">
                  {/* Dashboard Grid Mockup */}
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="col-span-2 space-y-4">
                      {/* Stat Cards Row */}
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
                            <div className="w-8 h-8 rounded-lg bg-violet/20 flex items-center justify-center mb-3">
                              <Activity className="w-4 h-4 text-violet" />
                            </div>
                            <div className="h-2 w-12 bg-white/20 rounded-full mb-2" />
                            <div className="h-1.5 w-8 bg-white/10 rounded-full" />
                          </div>
                        ))}
                      </div>

                      {/* Chart Area */}
                      <div className="bg-gradient-to-br from-white/5 to-transparent rounded-xl p-4 border border-white/5 h-48 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-violet/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="h-4 w-24 bg-white/10 rounded-full mb-6" />
                        <div className="flex items-end justify-between h-24 gap-2 px-2">
                          {[40, 70, 45, 90, 65, 85, 50, 75, 60].map((h, i) => (
                            <div
                              key={i}
                              className="w-full bg-violet/30 rounded-t-sm hover:bg-violet/50 transition-all duration-300"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements - Z-Index Layers */}

              {/* Top Right: User Card */}
              <div
                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-2xl shadow-xl w-48 animate-float"
                style={{ transform: 'translateZ(60px)', animationDelay: '1s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 p-[2px]">
                    <div className="w-full h-full rounded-full bg-dark border-2 border-transparent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Active Users</div>
                    <div className="text-lg font-bold text-white flex gap-2">
                      24.8k <span className="text-[10px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded flex items-center">+12%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Left: Action Card */}
              <div
                className="absolute -bottom-8 -left-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl w-52 animate-float"
                style={{ transform: 'translateZ(40px)', animationDelay: '0.5s' }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-white/50">System Status</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-violet" />
                  <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-violet to-fuchsia-500" />
                  </div>
                  <span className="text-xs text-white font-mono">98%</span>
                </div>
              </div>

              {/* Decorative Cursor */}
              <div
                className="absolute top-1/2 -right-12 bg-white text-black px-3 py-1.5 rounded-lg rounded-tl-none font-bold text-xs shadow-xl flex items-center gap-1 animate-bounce"
                style={{ transform: 'translateZ(80px)' }}
              >
                <MousePointer2 className="w-3 h-3 fill-black" />
                <span>You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos - Minimalist */}
        <div className="mt-20 lg:mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <p className="text-sm text-white/40 uppercase tracking-widest font-medium">Trusted by market leaders</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {clientLogos.map((logo, index) => (
              <span key={index} className="text-lg font-display font-medium text-white">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
