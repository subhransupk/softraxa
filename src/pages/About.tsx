import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Target, Heart, Zap, Award, Users, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Heart,
    title: 'Passion First',
    description: 'We pour our heart into every pixel, creating designs that truly resonate with users.',
    color: 'bg-pastel-coral',
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Every design decision is backed by data and aimed at achieving measurable outcomes.',
    color: 'bg-pastel-blue',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of trends, bringing fresh perspectives to every project we undertake.',
    color: 'bg-pastel-yellow',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as an extension of your team, fostering open communication throughout.',
    color: 'bg-pastel-teal',
  },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'Started with a vision to transform digital experiences' },
  { year: '2019', title: 'First 50 Clients', description: 'Reached our first major milestone in client partnerships' },
  { year: '2020', title: 'Global Expansion', description: 'Extended services to clients across 20+ countries' },
  { year: '2021', title: '100+ Projects', description: 'Completed over 100 successful design projects' },
  { year: '2022', title: 'Award Winning', description: 'Recognized with multiple industry design awards' },
  { year: '2023', title: '500+ Projects', description: 'Reached 500+ successfully delivered projects' },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '20+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { containerRef: valuesRef, visibleItems: valuesVisible } = useStaggeredAnimation(values.length);
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden relative">
      {/* Cinematic noise overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none fixed" />

      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
          <FloatingParticles count={40} className="z-0" />

          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen" />

          <div className="container relative z-10">
            <div
              ref={headerRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-violet-400">About</span>
              </nav>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 tracking-tight leading-[0.9]">
                The journey of{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-white italic">
                  Softraxa
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                We're a team of passionate designers and developers dedicated to creating
                digital experiences that drive real business results.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 lg:py-32 relative">
          <div className="container">
            <div
              ref={storyRef}
              className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-violet-300 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                  </span>
                  Our Story
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  From vision to <span className="text-violet-400 italic">reality</span>
                </h2>

                <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
                  <p>
                    Softraxa was founded with a simple mission: to bridge the gap between
                    beautiful design and measurable business outcomes. We believe that great
                    design isn't just about aesthetics—it's about creating experiences that
                    convert visitors into customers.
                  </p>
                  <p>
                    Today, we've grown into a global team of talented designers, developers,
                    and strategists who share a common passion for pushing creative boundaries
                    while delivering results that matter.
                  </p>
                </div>

                <div className="mt-8">
                  <Link to="/team">
                    <Button className="bg-white text-dark hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium group">
                      Meet Our Team
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 flex items-center justify-center backdrop-blur-sm relative overflow-hidden group">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-violet-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="text-center relative z-10 transition-transform duration-500 group-hover:scale-105">
                    <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.5)]">
                      <span className="text-white font-display font-bold text-5xl">D</span>
                    </div>
                    <p className="font-display font-bold text-3xl text-white mb-2">Softraxa</p>
                    <p className="text-white/40 uppercase tracking-widest text-sm font-medium">Est. 2018</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-[#0F0F12] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-violet-500/10">
                      <Award className="w-8 h-8 text-violet-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Award Winning</p>
                      <p className="text-sm text-white/50">Top Rated Design Studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32 relative bg-white/[0.02]">
          <div className="container">
            <div className="text-center mb-20">
              <span className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-4 block">Our Values</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                What drives <span className="text-violet-400 italic">us</span>
              </h2>
            </div>

            <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/10 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] group ${valuesVisible[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                    }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="w-7 h-7 text-white group-hover:text-violet-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">{value.title}</h3>
                  <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container relative z-10">
            <div className="text-center mb-20">
              <span className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-4 block">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Milestones along the <span className="text-violet-400 italic">way</span>
              </h2>
            </div>

            <div
              ref={timelineRef}
              className={`max-w-4xl mx-auto transition-all duration-700 ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center gap-12 mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-violet-400 font-bold text-2xl font-display">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-white/50 text-base leading-relaxed">{milestone.description}</p>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-violet-500 box-content border-4 border-[#0F0F12] shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
                    </div>

                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-t border-white/5 bg-white/[0.02]">
          <div className="container">
            <div
              ref={statsRef}
              className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <p className="text-4xl lg:text-6xl font-bold text-white mb-2 font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-white/50 transition-all duration-500">{stat.value}</p>
                  <p className="text-white/40 uppercase tracking-wider text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FooterCta />
      </main>
      <GlobalFooter />
    </div>
  );
};

export default About;
