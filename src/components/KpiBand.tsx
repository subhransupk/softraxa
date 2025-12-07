import { TrendingUp, Users, Zap, Award, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const kpis = [
  {
    icon: TrendingUp,
    value: '38%',
    label: 'Avg. conversion uplift',
    trend: '+12%',
    color: 'from-violet to-purple-400',
    bgColor: 'bg-violet/10',
  },
  {
    icon: Users,
    value: '2.4M',
    label: 'Users impacted',
    trend: '+25%',
    color: 'from-green-accent to-emerald-400',
    bgColor: 'bg-green-accent/10',
  },
  {
    icon: Zap,
    value: '45%',
    label: 'Faster time-to-market',
    trend: '+8%',
    color: 'from-amber-400 to-orange-400',
    bgColor: 'bg-amber-400/10',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Client retention rate',
    trend: '+3%',
    color: 'from-cyan-400 to-blue-400',
    bgColor: 'bg-cyan-400/10',
  },
];

export const KpiBand = () => {
  const { containerRef: kpisRef, visibleItems: kpisVisible } = useStaggeredAnimation(kpis.length, {
    rootMargin: '0px 0px -50px 0px'
  });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-surface to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-accent/10 via-transparent to-transparent" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container relative z-10">
        {/* Section Header */}
        <div
          ref={contentRef}
          className={`text-center mb-16 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet/10 border border-violet/20 text-violet text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Real Results
          </span>
          <h2 className="text-display-md lg:text-display-lg text-white mb-6">
            Measurable impact,
            <span className="block bg-gradient-to-r from-violet via-purple-400 to-green-accent bg-clip-text text-transparent">
              every time
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            We don't just design beautiful products—we build experiences that drive real business outcomes
            with data-driven decisions optimized for growth.
          </p>
        </div>

        {/* KPI Cards */}
        <div ref={kpisRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet/10 ${
                kpisVisible[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${kpi.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

              {/* Icon */}
              <div className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-2xl ${kpi.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <kpi.icon className={`w-6 h-6 lg:w-7 lg:h-7 bg-gradient-to-br ${kpi.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                <kpi.icon className={`w-6 h-6 lg:w-7 lg:h-7 absolute bg-gradient-to-br ${kpi.color}`} style={{ opacity: 1 }} />
              </div>

              {/* Value */}
              <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-br ${kpi.color} bg-clip-text text-transparent mb-2`}>
                {kpi.value}
              </div>

              {/* Label */}
              <div className="text-sm lg:text-base text-white/50 mb-4">{kpi.label}</div>

              {/* Trend Badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-green-accent/10 border border-green-accent/20">
                <ArrowUpRight className="w-3 h-3 text-green-accent" />
                <span className="text-xs font-semibold text-green-accent">{kpi.trend} this year</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div
          className={`relative bg-gradient-to-r from-violet/10 via-purple-500/10 to-green-accent/10 rounded-3xl p-8 border border-white/10 transition-all duration-700 delay-500 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/50">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/50">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white/50">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-sm text-white/50">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
