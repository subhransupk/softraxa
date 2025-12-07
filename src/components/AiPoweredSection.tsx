import { Sparkles, Zap, Brain, Palette, Code2, LineChart, Layers, Cpu, Wand2, Target, ArrowRight, MessageCircle, BarChart3, Image, Bot } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const topFeatures = [
  {
    title: 'Smart UX',
    titleItalic: 'Copywriting',
    description: 'AI-powered copywriting that creates compelling CTAs and microcopy that converts.',
    hasInput: true,
    inputPlaceholder: 'Generate CTA for SaaS landing page...',
    buttonText: 'Generate Copy',
    icons: ['📝', '✨']
  },
  {
    title: 'Rapid',
    titleItalic: 'Wireframing',
    description: 'Turn ideas into functional wireframes in minutes with our integrated AI tools.',
    tools: [
      { name: 'Visily', icon: '📐' },
      { name: 'Uizard', icon: '🎯' }
    ]
  },
  {
    title: 'Predictive',
    titleItalic: 'Analytics',
    description: 'AI-powered heatmaps predict user behavior before your product even launches.',
    hasChart: true
  }
];

const bottomFeatures = [
  {
    title: 'Faster',
    titleItalic: 'Launch',
    description: 'AI reduces revisions and guesswork, getting your product to market faster.',
    tools: [
      { name: 'ChatGPT', icon: '🤖', desc: 'Content Gen' },
      { name: 'Midjourney', icon: '🎨', desc: 'Visual Assets' }
    ]
  },
  {
    title: 'Instant',
    titleItalic: 'Visuals',
    description: 'Generate stunning custom visuals and icons in seconds.',
    hasIcons: true
  },
  {
    title: 'AI',
    titleItalic: 'Mockups',
    description: 'Generate editable mockups from simple prompts - no blank canvas struggles.',
    hasImageGen: true
  }
];


export const AiPoweredSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: topCardsRef, visibleItems: topCardsVisible } = useStaggeredAnimation(topFeatures.length);
  const { ref: centerRef, isVisible: centerVisible } = useScrollAnimation({ threshold: 0.5 });
  const { containerRef: bottomCardsRef, visibleItems: bottomCardsVisible } = useStaggeredAnimation(bottomFeatures.length);

  return (
    <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-violet/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-violet/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet/10 border border-violet/20 text-violet-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Bot className="w-4 h-4" />
            <span>AI-Powered Design</span>
          </div>
          <h2 className="text-display-md lg:text-display-lg text-white mb-6">
            Smarter Design, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-fuchsia-400 italic">Supercharged By AI</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From wireframes to launch, we blend AI tools with strategy to deliver faster,
            sharper, and data-led design results.
          </p>
        </div>

        {/* Features Grid with connecting lines */}
        <div className="relative">
          {/* Connecting lines SVG - Only visible on LG screens */}
          <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block overflow-visible">
            <svg
              className="w-full h-full"
              style={{ minHeight: '800px' }}
              viewBox="0 0 1200 800"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* Animated gradient for flowing effect */}
                <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0">
                    <animate attributeName="offset" values="-1;1" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#c084fc" stopOpacity="1">
                    <animate attributeName="offset" values="-0.5;1.5" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0">
                    <animate attributeName="offset" values="0;2" dur="2s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>

                <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0">
                    <animate attributeName="offset" values="-1;1" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#c084fc" stopOpacity="1">
                    <animate attributeName="offset" values="-0.5;1.5" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0">
                    <animate attributeName="offset" values="0;2" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>

                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g filter="url(#glow)">
                {/* Connection Paths */}
                {/* Top Left -> Center */}
                <path d="M 200 320 Q 200 400 600 400" stroke="#8B5CF6" strokeOpacity="0.1" strokeWidth="2" fill="none" />
                <path d="M 200 320 Q 200 400 600 400" stroke="url(#flowGradient1)" strokeWidth="2" fill="none" strokeDasharray="10 10" />

                {/* Top Center -> Center */}
                <path d="M 600 320 L 600 400" stroke="#8B5CF6" strokeOpacity="0.1" strokeWidth="2" fill="none" />
                <path d="M 600 320 L 600 400" stroke="url(#flowGradient2)" strokeWidth="2" fill="none" />

                {/* Top Right -> Center */}
                <path d="M 1000 320 Q 1000 400 600 400" stroke="#8B5CF6" strokeOpacity="0.1" strokeWidth="2" fill="none" />
                <path d="M 1000 320 Q 1000 400 600 400" stroke="url(#flowGradient1)" strokeWidth="2" fill="none" strokeDasharray="10 10" />

                {/* Bottom Left -> Center */}
                <path d="M 200 480 Q 200 400 600 400" stroke="#8B5CF6" strokeOpacity="0.1" strokeWidth="2" fill="none" />
                <path d="M 200 480 Q 200 400 600 400" stroke="url(#flowGradient1)" strokeWidth="2" fill="none" strokeDasharray="10 10" />

                {/* Bottom Center -> Center */}
                <path d="M 600 480 L 600 400" stroke="#8B5CF6" strokeOpacity="0.1" strokeWidth="2" fill="none" />
                <path d="M 600 480 L 600 400" stroke="url(#flowGradient2)" strokeWidth="2" fill="none" />

                {/* Bottom Right -> Center */}
                <path d="M 1000 480 Q 1000 400 600 400" stroke="#8B5CF6" strokeOpacity="0.1" strokeWidth="2" fill="none" />
                <path d="M 1000 480 Q 1000 400 600 400" stroke="url(#flowGradient1)" strokeWidth="2" fill="none" strokeDasharray="10 10" />
              </g>

              {/* Connecting Dots */}
              <circle cx="200" cy="320" r="4" fill="#8B5CF6" className="animate-pulse" />
              <circle cx="600" cy="320" r="4" fill="#8B5CF6" className="animate-pulse" />
              <circle cx="1000" cy="320" r="4" fill="#8B5CF6" className="animate-pulse" />
              <circle cx="200" cy="480" r="4" fill="#8B5CF6" className="animate-pulse" />
              <circle cx="600" cy="480" r="4" fill="#8B5CF6" className="animate-pulse" />
              <circle cx="1000" cy="480" r="4" fill="#8B5CF6" className="animate-pulse" />
            </svg>
          </div>

          {/* Top row features */}
          <div ref={topCardsRef} className="grid md:grid-cols-3 gap-6 mb-12 relative z-10">
            {topFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group bg-dark-surface/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/5 hover:border-violet/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet/10 ${topCardsVisible[index]
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                  {feature.title} <span className="italic font-normal text-violet-300">{feature.titleItalic}</span>
                </h3>
                <p className="text-white/60 text-sm mb-6 relative z-10 min-h-[40px]">{feature.description}</p>

                {/* Card-specific content */}
                <div className="relative z-10 bg-black/40 rounded-xl p-4 border border-white/5 min-h-[140px] flex flex-col justify-center">
                  {feature.icons && (
                    <div className="flex gap-3 mb-4 justify-center">
                      {feature.icons.map((icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl shadow-lg border border-white/5">
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}

                  {feature.hasInput && (
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-lg px-4 py-2.5 text-white/40 text-xs font-mono border border-white/5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
                        {feature.inputPlaceholder}
                      </div>
                      <button className="w-full bg-violet hover:bg-violet-600 text-white rounded-lg py-2.5 text-xs font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-violet/20">
                        <Sparkles className="w-3.5 h-3.5" />
                        {feature.buttonText}
                      </button>
                    </div>
                  )}

                  {feature.tools && (
                    <div className="space-y-2">
                      {feature.tools.map((tool, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2 border border-white/5">
                          <span className="text-lg">{tool.icon}</span>
                          <span className="text-white text-xs font-medium">{tool.name}</span>
                          <div className="flex-1 h-1 bg-white/10 rounded-full ml-auto overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-violet to-fuchsia-400 rounded-full" style={{ width: `${60 + i * 15}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {feature.hasChart && (
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded-full bg-violet/20 flex items-center justify-center">
                          <BarChart3 className="w-3 h-3 text-violet" />
                        </div>
                        <span className="text-white text-xs font-medium">Heatmap Analysis</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-12">
                        {[40, 60, 35, 80, 55, 90, 45].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-white/10 to-white/30 rounded-t-sm transition-all duration-300 group-hover:from-violet/40 group-hover:to-violet/70"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Center icon */}
          <div
            ref={centerRef}
            className={`flex justify-center my-12 relative z-20 transition-all duration-700 ${centerVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-50'
              }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-violet/40 blur-3xl rounded-full" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-violet/50 animate-pulse border-4 border-dark relative z-10">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Bottom row features */}
          <div ref={bottomCardsRef} className="grid md:grid-cols-3 gap-6 relative z-10">
            {bottomFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group bg-dark-surface/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/5 hover:border-violet/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet/10 ${bottomCardsVisible[index]
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                  {feature.title} <span className="italic font-normal text-violet-300">{feature.titleItalic}</span>
                </h3>
                <p className="text-white/60 text-sm mb-6 relative z-10 min-h-[40px]">{feature.description}</p>

                {/* Card-specific content */}
                <div className="relative z-10 bg-black/40 rounded-xl p-4 border border-white/5 min-h-[140px] flex flex-col justify-center">
                  {feature.tools && (
                    <div className="space-y-2">
                      {feature.tools.map((tool, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2 border border-white/5">
                          <span className="text-lg">{tool.icon}</span>
                          <div>
                            <span className="text-white text-xs font-medium block">{tool.name}</span>
                            <span className="text-white/40 text-[10px]">{tool.desc}</span>
                          </div>
                          <div className="ml-auto w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center hover:bg-violet/20 transition-colors">
                            <Wand2 className="w-3 h-3 text-white/60 group-hover:text-violet" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {feature.hasIcons && (
                    <div className="space-y-3">
                      <div className="flex gap-2 justify-center">
                        {['▶️', '⚡', '🌐'].map((icon, i) => (
                          <div key={i} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm border border-white/5">
                            {icon}
                          </div>
                        ))}
                      </div>
                      <div className="space-y-1.5 p-2 bg-white/5 rounded-lg border border-white/5">
                        <div className="h-1.5 bg-gradient-to-r from-violet/60 to-violet/20 rounded-full" />
                        <div className="h-1.5 bg-gradient-to-r from-violet/40 to-violet/10 rounded-full w-3/4" />
                      </div>
                      <div className="flex justify-end">
                        <div className="px-2 py-0.5 rounded-full bg-violet/20 border border-violet/30 flex items-center gap-1">
                          <span className="text-[10px] text-violet-300">Generated</span>
                          <span className="text-violet-300 text-[10px]">✓</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.hasImageGen && (
                    <div className="space-y-3">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet/30 to-fuchsia-500/20 flex items-center justify-center border border-white/10">
                          <Image className="w-6 h-6 text-white/60" />
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg px-3 py-2 text-white/40 text-[10px] text-center border border-white/5 font-mono">
                        "Astronaut in pastel style..."
                      </div>
                      <button className="w-full bg-gradient-to-r from-violet to-fuchsia-600 text-white rounded-lg py-2 text-xs font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-90 shadow-lg shadow-violet/20">
                        <Sparkles className="w-3 h-3" />
                        Generate
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
