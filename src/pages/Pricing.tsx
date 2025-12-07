import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { Check, Sparkles, ArrowRight, HelpCircle, Star, Zap, Gift, Shield, Clock, Users, DollarSign, Target, Award, Infinity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
  { icon: Shield, title: 'Social Media', description: 'Social media assets' },
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
    quote: 'Design Monks transformed our entire brand. The quality and speed exceeded all expectations.',
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
  const { ref: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();
  const { ref: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const [isQuarterly, setIsQuarterly] = useState(false);
  const [activeTab, setActiveTab] = useState('web-design');
  
  const currentPlans = pricingData[activeTab] || pricingData['web-design'];
  const { containerRef, visibleItems } = useStaggeredAnimation(currentPlans.length);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-dark pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
          <FloatingParticles count={40} className="z-0" />
          <div className="container relative z-10">
            <div
              ref={headerRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>›</span>
                <span className="text-primary">Pricing</span>
              </nav>
              
              <h1 className="text-display-lg md:text-display-xl text-white mb-6">
                Premium Quality With{' '}
                <br className="hidden md:block" />
                <span className="text-violet italic">Affordability</span> & <span className="text-violet italic">Flexibility</span>
              </h1>

              {/* Service Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-6">
                {serviceTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-violet text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Toggle */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className={`text-sm font-medium ${!isQuarterly ? 'text-white' : 'text-white/60'}`}>
                  {activeTab === 'subscription' ? 'Monthly' : 'Standard'}
                </span>
                <button
                  onClick={() => setIsQuarterly(!isQuarterly)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    isQuarterly ? 'bg-primary' : 'bg-white/20'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      isQuarterly ? 'left-8' : 'left-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isQuarterly ? 'text-white' : 'text-white/60'}`}>
                  {activeTab === 'subscription' ? 'Quarterly' : 'Premium'}{' '}
                  <span className="text-green-accent text-xs">(Save 10%)</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-dark pb-20 lg:pb-32">
          <div className="container">
            <div ref={containerRef} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {currentPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`group relative rounded-2xl transition-all duration-500 ${
                    visibleItems[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  {/* Animated gradient border */}
                  <div className={`absolute -inset-[1px] rounded-2xl transition-all duration-500 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet via-primary to-green-accent opacity-100'
                      : 'bg-gradient-to-r from-violet/50 via-primary/50 to-green-accent/50 opacity-0 group-hover:opacity-100'
                  }`} style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 3s ease infinite' }} />
                  
                  {/* Glow effect */}
                  <div className={`absolute -inset-2 rounded-3xl blur-xl transition-all duration-500 ${
                    plan.popular
                      ? 'bg-violet/30 opacity-100'
                      : 'bg-violet/20 opacity-0 group-hover:opacity-100'
                  }`} />
                  
                  {/* Card content */}
                  <div className={`relative p-8 rounded-2xl h-full transition-all duration-500 ${
                    plan.popular
                      ? 'bg-gradient-to-b from-violet/20 to-dm-dark'
                      : 'bg-dm-dark group-hover:bg-dm-dark/95'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="badge-popular flex items-center gap-1 bg-gradient-to-r from-violet to-primary text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-violet/30">
                          <Sparkles className="w-3 h-3" /> Most Popular
                        </span>
                      </div>
                    )}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-display font-bold text-white group-hover:text-violet transition-colors duration-300">
                          {isQuarterly ? plan.quarterlyPrice : plan.price}
                        </span>
                        <span className="text-white/60 text-sm">
                          {isQuarterly ? '/quarter' : plan.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mt-2">{plan.name}</h3>
                      <p className="text-sm text-white/60 mt-1">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-accent" />
                          <span className="text-sm text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-violet to-primary hover:from-violet/90 hover:to-primary/90 text-white shadow-lg shadow-violet/20 hover:shadow-violet/40'
                          : 'bg-white/10 hover:bg-gradient-to-r hover:from-violet hover:to-primary text-white border border-white/20 hover:border-transparent'
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
        <section className="section-dark pb-20 lg:pb-32 border-t border-white/10">
          <div className="container pt-16">
            <div
              ref={bonusRef}
              className={`text-center transition-all duration-700 ${
                bonusVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-display-sm md:text-display-md text-white mb-4">
                Bonuses Worth Over{' '}
                <span className="text-green-accent">$2,500+</span> Yours Free!
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                {bonuses.map((bonus, index) => (
                  <div
                    key={bonus.title}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
                  >
                    <bonus.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="text-white font-medium text-sm mb-1">{bonus.title}</h4>
                    <span className="text-green-accent font-bold">{bonus.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-display-sm md:text-display-md mb-4">
                Apart from that{' '}
                <br className="hidden md:block" />
                <span className="text-violet italic">We also Provide</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {additionalServices.map((service) => (
                <div
                  key={service.title}
                  className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors"
                >
                  <service.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-sm mb-1">{service.title}</h4>
                  <p className="text-xs text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section-dark py-20 lg:py-32">
          <div className="container">
            <div
              ref={comparisonRef}
              className={`transition-all duration-700 ${
                comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <h2 className="text-display-sm md:text-display-md text-white mb-4">
                  Other Agencies <span className="text-violet italic">VS</span> Services{' '}
                  <br className="hidden md:block" />
                  We <span className="text-green-accent">Outrun</span> Excellence
                </h2>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-3 gap-4 mb-4 px-4">
                  <span className="text-white/60 text-sm">Feature</span>
                  <span className="text-white font-medium text-center">Design Monks</span>
                  <span className="text-white/60 text-center">Other Agencies</span>
                </div>
                <div className="space-y-2">
                  {comparisonFeatures.map((item) => (
                    <div
                      key={item.feature}
                      className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <span className="text-white/80 text-sm">{item.feature}</span>
                      <div className="flex justify-center">
                        {item.us ? (
                          <Check className="w-5 h-5 text-green-accent" />
                        ) : (
                          <span className="w-5 h-5 text-red-400">✕</span>
                        )}
                      </div>
                      <div className="flex justify-center">
                        {item.others ? (
                          <Check className="w-5 h-5 text-green-accent" />
                        ) : (
                          <span className="w-5 h-5 text-red-400">✕</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div
              ref={testimonialRef}
              className={`transition-all duration-700 ${
                testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <h2 className="text-display-sm md:text-display-md mb-4">
                  Success Stories{' '}
                  <br className="hidden md:block" />
                  That <span className="text-violet italic">Inspire Us</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-dark py-20 lg:py-32">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-display-sm md:text-display-md text-white mb-4">
                Strategic Design Benefits for{' '}
                <br className="hidden md:block" />
                Your <span className="text-violet italic">Business Growth</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="text-4xl md:text-5xl font-display font-bold text-green-accent">
                    {stat.value}
                  </span>
                  <p className="text-white/60 mt-2 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div
              ref={faqRef}
              className={`max-w-3xl mx-auto transition-all duration-700 ${
                faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <h2 className="text-display-sm md:text-display-md mb-4">
                  Your Questions{' '}
                  <span className="text-violet italic">Answered</span>
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                  >
                    <AccordionTrigger className="hover:text-primary py-6 text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
