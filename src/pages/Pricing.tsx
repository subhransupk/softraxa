import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { Check, Sparkles, ArrowRight, HelpCircle, Star, Zap, Gift, Shield, Clock, Users, DollarSign, Target, Award, Infinity, MessageCircle, Crown, X, Minus, Quote, TrendingUp, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const serviceTabs = [
  { id: 'web-design', label: 'Web Design' },
  { id: 'web-app', label: 'Web App' },
  { id: 'mobile-app', label: 'Mobile App' },
  { id: 'branding', label: 'Branding' },
  { id: 'subscription', label: 'Subscription' },
];

const pricingData: Record<string, {
  name: string;
  price: string;
  quarterlyPrice: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}[]> = {
  'web-design': [
    {
      name: 'Landing Page',
      price: '$1,500',
      quarterlyPrice: '$4,050',
      period: '/project',
      description: 'Single page website design',
      features: [
        'Custom responsive design',
        'Up to 5 sections',
        '2 rounds of revisions',
        'Mobile optimization',
        'Source files included',
        '5-7 days delivery',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Multi-Page Website',
      price: '$3,500',
      quarterlyPrice: '$9,450',
      period: '/project',
      description: 'Complete website design',
      features: [
        'Up to 10 pages design',
        'Custom design system',
        'Unlimited revisions',
        'Responsive design',
        'SEO optimization',
        'CMS integration',
        '14-21 days delivery',
      ],
      popular: true,
      cta: 'Start Project',
    },
    {
      name: 'E-Commerce',
      price: '$5,500',
      quarterlyPrice: '$14,850',
      period: '/project',
      description: 'Full e-commerce solution',
      features: [
        'Unlimited pages',
        'Product catalog design',
        'Cart & checkout flow',
        'Payment integration',
        'Admin dashboard',
        'Inventory management',
        '21-30 days delivery',
      ],
      popular: false,
      cta: 'Contact Us',
    },
  ],
  'web-app': [
    {
      name: 'MVP Design',
      price: '$4,000',
      quarterlyPrice: '$10,800',
      period: '/project',
      description: 'Minimum viable product',
      features: [
        'User research & analysis',
        'Core feature design',
        'Up to 15 screens',
        '3 rounds revisions',
        'Interactive prototype',
        '14-21 days delivery',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Full Application',
      price: '$8,500',
      quarterlyPrice: '$22,950',
      period: '/project',
      description: 'Complete web application',
      features: [
        'Everything in MVP',
        'Up to 40 screens',
        'Design system',
        'User flow optimization',
        'Unlimited revisions',
        'Developer handoff',
        '30-45 days delivery',
      ],
      popular: true,
      cta: 'Start Project',
    },
    {
      name: 'Enterprise Suite',
      price: '$15,000',
      quarterlyPrice: '$40,500',
      period: '/project',
      description: 'Large-scale applications',
      features: [
        'Everything in Full App',
        'Unlimited screens',
        'Multiple user roles',
        'Complex workflows',
        'Admin dashboards',
        'Analytics integration',
        'Priority support',
      ],
      popular: false,
      cta: 'Contact Us',
    },
  ],
  'mobile-app': [
    {
      name: 'Single Platform',
      price: '$3,500',
      quarterlyPrice: '$9,450',
      period: '/project',
      description: 'iOS or Android design',
      features: [
        'Platform-specific design',
        'Up to 20 screens',
        'UI kit included',
        '2 rounds revisions',
        'Interactive prototype',
        '14-21 days delivery',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Cross Platform',
      price: '$5,500',
      quarterlyPrice: '$14,850',
      period: '/project',
      description: 'iOS & Android design',
      features: [
        'Both platform designs',
        'Up to 30 screens each',
        'Unified design system',
        'Unlimited revisions',
        'Motion design',
        'Dev-ready assets',
        '21-30 days delivery',
      ],
      popular: true,
      cta: 'Start Project',
    },
    {
      name: 'Premium App',
      price: '$10,000',
      quarterlyPrice: '$27,000',
      period: '/project',
      description: 'Feature-rich application',
      features: [
        'Everything in Cross',
        'Unlimited screens',
        'Custom animations',
        'Tablet optimization',
        'Wearable design',
        'App Store assets',
        '30-45 days delivery',
      ],
      popular: false,
      cta: 'Contact Us',
    },
  ],
  'branding': [
    {
      name: 'Logo Package',
      price: '$1,200',
      quarterlyPrice: '$3,240',
      period: '/project',
      description: 'Essential brand identity',
      features: [
        '3 logo concepts',
        '2 revision rounds',
        'Color palette',
        'Typography selection',
        'Logo variations',
        '5-7 days delivery',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Brand Identity',
      price: '$3,500',
      quarterlyPrice: '$9,450',
      period: '/project',
      description: 'Complete brand package',
      features: [
        'Everything in Logo',
        '5 logo concepts',
        'Brand guidelines',
        'Business cards',
        'Social media kit',
        'Stationery design',
        '14-21 days delivery',
      ],
      popular: true,
      cta: 'Start Project',
    },
    {
      name: 'Full Rebrand',
      price: '$7,500',
      quarterlyPrice: '$20,250',
      period: '/project',
      description: 'Complete brand overhaul',
      features: [
        'Everything in Identity',
        'Brand strategy',
        'Market research',
        'Packaging design',
        'Environmental design',
        'Brand launch assets',
        '30-45 days delivery',
      ],
      popular: false,
      cta: 'Contact Us',
    },
  ],
  'subscription': [
    {
      name: 'Starter Package',
      price: '$1,950',
      quarterlyPrice: '$5,250',
      period: '/month',
      description: 'Perfect for early-stage startups',
      features: [
        'Unlimited design requests',
        '1 active request at a time',
        '48-72 hour delivery',
        'Unlimited revisions',
        'Web & mobile design',
        'Webflow development',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Growth Package',
      price: '$2,800',
      quarterlyPrice: '$7,560',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'Everything in Starter',
        '2 active requests at a time',
        '24-48 hour delivery',
        'Priority support',
        'Framer development',
        'Motion design',
        'Design system',
      ],
      popular: true,
      cta: 'Start Project',
    },
    {
      name: 'Enterprise',
      price: '$3,950',
      quarterlyPrice: '$10,665',
      period: '/month',
      description: 'For established companies',
      features: [
        'Everything in Growth',
        '3+ active requests',
        'Same-day delivery',
        'Dedicated designer',
        'Custom integrations',
        'Strategy sessions',
        'Brand guidelines',
        'Slack connect',
      ],
      popular: false,
      cta: 'Contact Us',
    },
  ],
};

const bonuses = [
  { icon: Gift, title: 'Free Brand Audit', value: '$500' },
  { icon: Target, title: 'UX Strategy Session', value: '$750' },
  { icon: Zap, title: 'Priority Onboarding', value: '$300' },
  { icon: Shield, title: 'Design System Setup', value: '$950' },
];

const additionalServices = [
  { icon: Sparkles, title: 'Logo Design', description: 'Custom logo creation' },
  { icon: Users, title: 'Illustration', description: 'Custom illustrations' },
  { icon: Target, title: 'Branding', description: 'Full brand identity' },
  { icon: Zap, title: 'Animation', description: 'Motion graphics' },
  { icon: Award, title: 'Pitch Decks', description: 'Investor presentations' },
  { icon: MessageCircle, title: 'Social Media', description: 'Social media assets' },
];

const comparisonFeatures = [
  { feature: 'Unlimited Requests', us: true, others: false },
  { feature: 'Unlimited Revisions', us: true, others: false },
  { feature: 'Fixed Monthly Rate', us: true, others: false },
  { feature: 'No Contracts', us: true, others: false },
  { feature: 'Pause or Cancel Anytime', us: true, others: false },
  { feature: 'Real-time Collaboration', us: true, others: true },
  { feature: 'Dedicated Designer', us: true, others: false },
  { feature: 'Fast Turnaround', us: true, others: false },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    quote: 'Softraxa transformed our entire brand. The quality and speed exceeded all expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthLab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    quote: 'Best design subscription service. Worth every penny for the unlimited requests alone.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    quote: 'Their attention to detail and understanding of our needs is unmatched.',
    rating: 5,
  },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24hr', label: 'Avg Response Time' },
  { value: '50+', label: 'Happy Clients' },
];

const faqs = [
  {
    question: 'How does the unlimited request model work?',
    answer: 'You can submit as many design requests as you want. We work through them one at a time (or more depending on your plan). Once one request is complete, we move to the next.',
  },
  {
    question: 'What\'s the typical turnaround time?',
    answer: 'Most requests are completed within 24-72 hours depending on complexity and your plan tier. Complex projects may take longer.',
  },
  {
    question: 'Can I pause or cancel my subscription?',
    answer: 'Yes! You can pause your subscription at any time and resume when you\'re ready. Cancel anytime with no penalties.',
  },
  {
    question: 'What if I\'m not satisfied with the design?',
    answer: 'We offer unlimited revisions until you\'re 100% happy. We\'ll keep refining until we get it right.',
  },
  {
    question: 'What types of design work do you cover?',
    answer: 'We handle UI/UX design, web design, mobile app design, landing pages, design systems, branding, social media graphics, and more.',
  },
];

const Pricing = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: bonusRef, isVisible: bonusVisible } = useScrollAnimation();
  const { ref: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation();
  const { ref: comparisonRef, isVisible: isComparisonVisible } = useScrollAnimation();
  const [isQuarterly, setIsQuarterly] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState('web-design');

  const currentPlans = pricingData[activeTab] || pricingData['web-design'];
  const { containerRef, visibleItems } = useStaggeredAnimation(currentPlans.length);

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden relative">
      {/* Cinematic noise overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none fixed" />

      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

          <FloatingParticles count={40} className="z-0" />
          <div className="container relative z-10">
            <div
              ref={headerRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-8 animate-fade-in">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-white">Pricing</span>
              </nav>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 tracking-tight leading-[0.95]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
                  Premium Quality
                </span>
                <span className="block mt-2 relative text-4xl md:text-5xl lg:text-6xl">
                  With <span className="text-violet italic">Affordability</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-fuchsia-400 to-white italic">Flexibility</span>
                </span>
              </h1>

              {/* Service Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-12 mb-8">
                {serviceTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-md ${activeTab === tab.id
                      ? 'bg-white text-dark border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transform scale-105'
                      : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Toggle */}
              <div className="flex items-center justify-center gap-4 mt-8 bg-white/5 backdrop-blur-sm border border-white/10 w-fit mx-auto px-6 py-3 rounded-full">
                <span className={`text-sm font-medium transition-colors ${!isQuarterly ? 'text-white' : 'text-white/60'}`}>
                  {activeTab === 'subscription' ? 'Monthly' : 'Standard'}
                </span>
                <button
                  onClick={() => setIsQuarterly(!isQuarterly)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${isQuarterly ? 'bg-violet' : 'bg-white/20'
                    }`}
                >
                  <span
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${isQuarterly ? 'left-8' : 'left-1'
                      }`}
                  />
                </button>
                <span className={`text-sm font-medium transition-colors ${isQuarterly ? 'text-white' : 'text-white/60'}`}>
                  {activeTab === 'subscription' ? 'Quarterly' : 'Premium'}{' '}
                  <span className="text-green-400 text-xs font-bold ml-1">(Save 10%)</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 lg:pb-32">
          <div className="container">
            <div ref={containerRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
              {currentPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative group rounded-3xl p-1 transition-all duration-500 hover:-translate-y-2 ${visibleItems[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                    } ${plan.popular ? 'md:-mt-8 md:mb-8 z-10' : ''}`}
                >
                  {/* Card Glow Border */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${plan.popular
                    ? 'from-violet via-fuchsia-500 to-violet opacity-100'
                    : 'from-white/10 via-white/5 to-transparent opacity-50 group-hover:opacity-100'
                    } p-[1px] transition-opacity duration-500`} />

                  {/* Glow effect */}
                  <div className={`absolute -inset-2 rounded-[2rem] blur-2xl transition-all duration-500 pointer-events-none ${plan.popular
                    ? 'bg-violet/20 opacity-100'
                    : 'bg-violet/10 opacity-0 group-hover:opacity-100'
                    }`} />

                  {/* Card content */}
                  <div className="relative h-full bg-[#0f0f0f]/90 backdrop-blur-xl rounded-[1.4rem] p-8 overflow-hidden">
                    {/* Gradient Blob */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-violet/20 to-fuchsia-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="flex items-center gap-1 bg-gradient-to-r from-violet to-fuchsia-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                          <Sparkles className="w-3 h-3" /> Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-8 relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-sm text-white/50 min-h-[40px] leading-relaxed">{plan.description}</p>
                    </div>

                    <div className="mb-8 relative z-10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl lg:text-5xl font-display font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:via-white group-hover:to-white/70 transition-all duration-300">
                          {isQuarterly ? plan.quarterlyPrice : plan.price}
                        </span>
                        <span className="text-white/50 font-medium">
                          {isQuarterly ? '/quarter' : plan.period}
                        </span>
                      </div>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-8" />

                    <ul className="space-y-4 mb-8 relative z-10">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 group/item">
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-violet/20 text-violet-300' : 'bg-white/10 text-white/60 group-hover/item:text-white group-hover/item:bg-white/20'
                            } transition-colors`}>
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-sm text-white/70 group-hover/item:text-white transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 relative z-10 ${plan.popular
                        ? 'bg-white text-dark hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02]'
                        : 'bg-white/5 hover:bg-white text-white hover:text-dark border border-white/10 hover:border-transparent'
                        }`}
                      size="lg"
                    >
                      {plan.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="relative pb-20 lg:pb-32">
          <div className="container relative z-10">
            <div
              ref={bonusRef}
              className={`max-w-6xl mx-auto transition-all duration-700 ${bonusVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {/* Special Offer Container */}
              <div className="relative rounded-[3rem] border border-white/10 bg-[#0a0a0a] overflow-hidden p-8 md:p-12 lg:p-16">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(74,222,128,0.1)]">
                    <Gift className="w-3.5 h-3.5" />
                    Limited Time Offer
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                    Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">$2,500+</span> Worth of
                    <br />
                    <span className="text-white italic">Premium Bonues</span> for Free
                  </h2>
                  <p className="text-lg text-white/50 max-w-2xl mx-auto">
                    Start your project today and get these essential growth assets included at no extra cost.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {bonuses.map((bonus, index) => (
                    <div
                      key={bonus.title}
                      className="group relative bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Card Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/5 group-hover:via-green-500/5 group-hover:to-green-500/10 rounded-2xl transition-all duration-500" />

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#151515] border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <bonus.icon className="w-8 h-8 text-white/80 group-hover:text-green-400 transition-colors" />
                        </div>

                        <h4 className="text-white font-bold text-lg mb-2">{bonus.title}</h4>

                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-white/40 line-through text-sm">Valued {bonus.value}</span>
                          <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                            Free
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 lg:py-32 bg-white/[0.02] border-y border-white/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Apart from that{' '}
                <br className="hidden md:block" />
                <span className="text-violet italic">We also Provide</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {additionalServices.map((service) => (
                <div
                  key={service.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center hover:bg-white/10 hover:border-white/10 transition-all duration-300 group cursor-default"
                >
                  <service.icon className="w-8 h-8 text-white/50 mx-auto mb-4 group-hover:text-white transition-colors" />
                  <h4 className="font-bold text-white text-sm mb-2">{service.title}</h4>
                  <p className="text-xs text-white/40">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section ref={comparisonRef} className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative z-10">
            <div
              className={`transition-all duration-700 ${isComparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  Other Agencies <span className="text-violet italic">VS</span> Us{' '}
                  <br className="hidden md:block" />
                  We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Outrun</span> Excellence
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                  Why settle for standard when you can have the premier advantage?
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
                  {/* Glass Header */}
                  <div className="grid grid-cols-12 items-center border-b border-white/5 bg-white/[0.02]">
                    <div className="col-span-4 p-8">
                      <span className="text-white/40 font-bold uppercase tracking-widest text-xs">Features</span>
                    </div>
                    {/* Softraxa Header - Highlighted */}
                    <div className="col-span-4 p-8 bg-white/5 relative border-x border-white/5">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet to-fuchsia-500" />
                      <div className="flex flex-col items-center">
                        <Crown className="w-8 h-8 text-yellow-400 mb-3 fill-yellow-400/20" />
                        <h3 className="text-white font-bold text-lg">Softraxa</h3>
                        <span className="text-green-400 text-[10px] font-bold uppercase tracking-widest mt-1">Best Choice</span>
                      </div>
                    </div>

                    <div className="col-span-4 p-8 flex flex-col items-center opacity-50 grayscale">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-white font-medium text-lg">Other Agencies</h3>
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Standard</span>
                    </div>
                  </div>

                  {/* Table Body */}
                  <div className="divide-y divide-white/5">
                    {comparisonFeatures.map((item, index) => (
                      <div
                        key={item.feature}
                        className={`grid grid-cols-12 items-center hover:bg-white/[0.02] transition-colors group ${index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'}`}
                      >
                        {/* Feature Name */}
                        <div className="col-span-4 p-6 px-8">
                          <span className="text-white/80 font-medium text-sm group-hover:text-white transition-colors">{item.feature}</span>
                        </div>

                        {/* Softraxa Column */}
                        <div className="col-span-4 p-6 bg-white/5 border-x border-white/5 flex justify-center h-full items-center relative">
                          {/* Subtle vertical highlight */}
                          <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                          {item.us ? (
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center ring-1 ring-green-500/50 shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                              <Check className="w-4 h-4 text-green-400 stroke-[3]" />
                            </div>
                          ) : (
                            <Minus className="text-white/20" />
                          )}
                        </div>

                        {/* Others Column */}
                        <div className="col-span-4 p-6 flex justify-center items-center h-full opacity-40">
                          {item.others ? (
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                              <X className="w-3 h-3 text-red-400" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative fading */}
                <div className="w-full h-24 bg-gradient-to-t from-dark to-transparent absolute bottom-0 left-0 z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

          <div className="container relative z-10">
            <div
              ref={testimonialRef}
              className={`transition-all duration-700 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  Success Stories{' '}
                  <br className="hidden md:block" />
                  That <span className="text-violet italic">Inspire Us</span>
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                  Real results from real businesses that trusted Softraxa.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, i) => (
                  <div
                    key={testimonial.name}
                    className="group relative p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Large decorative quote */}
                    <Quote className="absolute top-8 right-8 w-24 h-24 text-white/[0.02] fill-white/[0.02] group-hover:text-violet-500/10 group-hover:fill-violet-500/10 transition-colors duration-500 transform rotate-180" />

                    {/* Gradient glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="relative">
                          <div className="absolute inset-0 bg-violet-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity rounded-full" />
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover ring-2 ring-white/10 relative z-10"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-[#0a0a0a] z-20">
                            <Check className="w-2 h-2 text-white stroke-[4]" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                          <p className="text-white/40 text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 inline-block mr-1" />
                        ))}
                      </div>

                      <p className="text-xl text-white/80 leading-relaxed font-light font-display italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 lg:py-32 relative">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Strategic Design Benefits for{' '}
                <br className="hidden md:block" />
                Your <span className="text-violet italic">Business Growth</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 overflow-hidden relative shadow-2xl">
              {/* Background abstract graph using gradients */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-500/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-50" />

              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5 relative z-10">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="p-8 lg:p-12 text-center group hover:bg-white/[0.02] transition-colors relative">
                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-violet-500/20 group-hover:border-violet-500/30 group-hover:text-violet-300 transition-all duration-300">
                      {i === 0 && <Award className="w-6 h-6 text-white/60 group-hover:text-violet-300" />}
                      {i === 1 && <TrendingUp className="w-6 h-6 text-white/60 group-hover:text-green-400" />}
                      {i === 2 && <Clock className="w-6 h-6 text-white/60 group-hover:text-blue-400" />}
                      {i === 3 && <Users className="w-6 h-6 text-white/60 group-hover:text-fuchsia-400" />}
                    </div>

                    <div className="text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                      {stat.value}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-32 relative bg-[#050505]">
          {/* Background Mesh */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  Frequently Asked <span className="text-violet italic">Questions</span>
                </h2>
                <p className="text-white/50 text-lg">
                  Everything you need to know about our premium design services.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${openFaqIndex === index
                      ? 'bg-[#0a0a0a] border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.1)]'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                      }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className={`font-medium text-lg transition-colors ${openFaqIndex === index ? 'text-white' : 'text-white/80 group-hover:text-white'
                        }`}>
                        {faq.question}
                      </span>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${openFaqIndex === index
                        ? 'bg-violet-500 text-white border-violet-500 rotate-180'
                        : 'bg-white/5 text-white/40 border-white/10 group-hover:bg-white/10 group-hover:text-white'
                        }`}>
                        {openFaqIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-0 text-white/50 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Support CTA */}
              <div className="mt-12 text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Still have questions?</h4>
                    <p className="text-white/50 text-sm mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <Button className="bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 font-semibold px-8 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <FooterCta />
      </main>
      <GlobalFooter />
    </div>
  );
};

export default Pricing;
