import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const plans = [
  {
    name: 'Starter',
    price: '$1,500',
    period: '/ month',
    description: 'Perfect for small projects and MVPs',
    features: [
      'Up to 2 active projects',
      'Basic design system',
      'Weekly check-ins',
      '48h response time',
      'Figma deliverables',
    ],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    name: 'Growth',
    price: '$2,500',
    period: '/ month',
    description: 'For scaling teams with big ambitions',
    features: [
      'Unlimited projects',
      'Custom design system',
      'Daily stand-ups',
      '24h response time',
      'Full source files',
      'Priority support',
      'Quarterly strategy reviews',
    ],
    cta: 'Start Plan',
    popular: true,
    gradient: 'from-violet/30 to-purple-500/30'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Dedicated team',
      'Custom workflows',
      'On-site workshops',
      'SLA guarantee',
      'Executive reporting',
      'Multi-brand support',
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-pink-500/20 to-rose-500/20'
  },
];

export const PricingSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: plansRef, visibleItems: plansVisible } = useStaggeredAnimation(plans.length, {
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden bg-dark">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet/10 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="container relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${headerVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-300 text-sm font-medium mb-6 backdrop-blur-sm">
            Pricing Plans
          </span>
          <h2 className="text-display-md lg:text-display-lg text-white mb-6">
            Simple, transparent
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-purple-400">pricing</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our core design services
            and dedicated support.
          </p>
        </div>

        <div ref={plansRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl p-[1px] overflow-hidden transition-all duration-500 ${plansVisible[index]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                } ${plan.popular ? 'md:-mt-8 md:mb-8 z-10 shadow-[0_0_50px_rgba(139,92,246,0.3)]' : 'hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'}`}
            >
              {/* Spinning Border Animation */}
              <div className={`absolute inset-[-500%] animate-spin-slow ${plan.popular
                ? 'bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#8b5cf6_50%,#0000_100%)] opacity-100' // Violet for Popular
                : 'bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#ffffff_50%,#0000_100%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500' // White/Subtle for Standard
                }`}
              />

              {/* Main Card Content */}
              <div className="relative h-full bg-dark-surface/90 backdrop-blur-xl rounded-[23px] p-8 overflow-hidden">
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-gradient-to-r from-violet to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-violet/25 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Background Gradient Blob */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${plan.gradient} blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-white/50 min-h-[40px]">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                      <span className="text-white/50 font-medium">{plan.period}</span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-white/10 mb-8" />

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 group/item">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-violet/20 text-violet' : 'bg-white/10 text-white/60 group-hover/item:text-white group-hover/item:bg-white/20'
                          } transition-colors`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${plan.popular
                      ? 'bg-violet hover:bg-violet-600 text-white shadow-lg shadow-violet/25 hover:shadow-violet/40 hover:-translate-y-0.5'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                      }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
