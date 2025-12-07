import { ArrowRight, Sparkles, ExternalLink, Activity, Trophy, Globe, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    category: 'Travel Tech',
    title: 'Triply: The Future of Travel Booking',
    description: 'A revolutionary all-inclusive booking platform that leverages AI to create personalized travel itineraries. We redesigned the entire user journey to focus on discovery and seamless booking.',
    stats: [
      { label: 'Conversion Rate', value: '+36%' },
      { label: 'User Retention', value: '4.8/5' },
    ],
    person: {
      name: 'Shubho Al-Faroque',
      role: 'CEO, Triply',
      quote: "Softraxa didn't just design an app, they reimagined our entire business model.",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=1000&fit=crop',
    accent: 'from-violet-500 to-fuchsia-500',
    icon: Globe,
  },
  {
    category: 'FinTech',
    title: 'Yenex: Sustainable Energy Trading',
    description: 'Empowering users to trade renewable energy with a blockchain-backed platform. We created a trust-centric design system that makes complex energy data accessible to everyone.',
    stats: [
      { label: 'Active Users', value: '50k+' },
      { label: 'Carbon Saved', value: '1200T' },
    ],
    person: {
      name: 'Sarah Chen',
      role: 'Founder, Yenex',
      quote: "The clarity of the UI helped us secure our Series A funding.",
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop',
    accent: 'from-emerald-500 to-teal-500',
    icon: Zap,
  },
  {
    category: 'Health & Wellness',
    title: 'Fitmate: AI Personal Trainer',
    description: 'Transforming fitness in Australia with an intelligent mobile companion. The interface adapts to user progress, providing real-time feedback and motivation through gamification.',
    stats: [
      { label: 'Daily Active', value: '85%' },
      { label: 'App Store', value: 'Editors Choice' },
    ],
    person: {
      name: 'Omar K.',
      role: 'Co-founder, Fitmate',
      quote: "User engagement skyrocketed after the redesign. Simply phenomenal.",
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=1000&fit=crop',
    accent: 'from-cyan-500 to-blue-500',
    icon: Activity,
  },
];

export const PortfolioMosaic = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="portfolio" className="relative py-32 bg-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-24 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            <Trophy className="w-3.5 h-3.5" />
            Selected Work
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Digital Products that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-fuchsia-400 to-white animate-text-shimmer bg-[length:200%_auto]">Defy Expectations</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We don't just build websites; we craft digital ecosystems that drive growth, engagement, and brand loyalty.
          </p>
        </div>

        {/* Sticky Cards Stack */}
        <div className="space-y-32 lg:space-y-0">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="sticky lg:top-32"
              style={{
                paddingTop: index > 0 ? '2rem' : '0',
                zIndex: index + 1,
              }}
            >
              <div className="group relative bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">

                {/* Ambient Glow inside card */}
                <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${item.accent} opacity-5 blur-[120px] rounded-full pointer-events-none`} />

                <div className="grid lg:grid-cols-2 gap-0 relative z-10">
                  {/* Content Side */}
                  <div className="p-8 lg:p-16 flex flex-col justify-center h-full min-h-[500px]">

                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-lg`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-white/50 font-bold uppercase tracking-wider text-sm">{item.category}</span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-white/60 text-lg mb-10 leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-2 gap-8 mb-10 border-t border-white/5 pt-8">
                      {item.stats.map((stat, i) => (
                        <div key={i}>
                          <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                          <p className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Endorsement Pill */}
                    <div className="mt-auto bg-white/5 rounded-2xl p-4 flex items-center gap-4 backdrop-blur-sm border border-white/5">
                      <img src={item.person.avatar} alt={item.person.name} className="w-12 h-12 rounded-full ring-2 ring-white/10" />
                      <div>
                        <p className="text-white/90 text-sm italic mb-1">"{item.person.quote}"</p>
                        <p className="text-white/40 text-xs font-bold">{item.person.name} • {item.person.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="relative bg-[#050505] p-8 lg:p-0 overflow-hidden flex items-center justify-center min-h-[400px] lg:min-h-auto group-hover:bg-[#080808] transition-colors duration-500">
                    {/* Decorative grid */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                    {/* Main Image */}
                    <div className="relative w-[80%] aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-20 mix-blend-overlay z-10`} />
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Floating Badge */}
                    <Button variant="outline" className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-md border-white/20 text-white gap-2 rounded-full hidden lg:flex opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-32 text-center">
          <Link to="/projects">
            <Button className="h-auto py-6 px-8 rounded-full bg-white text-dark text-lg font-bold hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300">
              Explore All Projects <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
