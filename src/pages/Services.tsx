import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Check, Star, Users, Award, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'We create intuitive, user-centered designs that enhance engagement and drive conversions. Our UI/UX solutions blend aesthetics with functionality.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing'],
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Beautiful, responsive websites that captivate visitors and convert them into customers. We combine stunning visuals with seamless functionality.',
    features: ['Responsive Design', 'Custom Layouts', 'SEO Optimization', 'Performance', 'CMS Integration', 'E-commerce'],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop',
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Design',
    description: 'Native and cross-platform mobile app designs that users love. We create seamless experiences for iOS and Android platforms.',
    features: ['iOS Design', 'Android Design', 'Cross-Platform', 'App Store Assets', 'Motion Design'],
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=250&h=500&fit=crop',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=250&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=250&h=500&fit=crop',
    ],
  },
  {
    id: 'ai-product',
    title: 'AI Product Design',
    description: 'Designing intelligent interfaces for AI-powered products. We make complex technology accessible and intuitive for users.',
    features: ['AI Interfaces', 'Data Visualization', 'Machine Learning UI', 'Conversational Design', 'Dashboard Design'],
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=350&fit=crop',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 'saas',
    title: 'SaaS Design',
    description: 'Enterprise-grade SaaS product design that scales. We create intuitive dashboards and workflows that boost productivity.',
    features: ['Dashboard Design', 'Admin Panels', 'User Onboarding', 'Analytics UI', 'B2B Interfaces'],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 'game-ui',
    title: 'Game UI/UX',
    description: 'Immersive game interface design that enhances player experience. We create engaging HUDs, menus, and in-game elements.',
    features: ['HUD Design', 'Menu Systems', 'Character UI', 'Inventory Design', 'Achievement Systems'],
    images: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&h=350&fit=crop',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b2b34?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1493711662062-fa541f7f897a?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 'framer',
    title: 'Framer Design',
    description: 'Interactive websites built with Framer. We leverage advanced animations and interactions to create memorable experiences.',
    features: ['Framer Sites', 'Animations', 'Interactions', 'CMS Setup', 'Custom Components'],
    images: [
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&h=350&fit=crop',
      'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 'webflow',
    title: 'Webflow Design',
    description: 'Professional Webflow websites with custom CMS integrations. We build scalable, maintainable sites without code limitations.',
    features: ['Webflow Development', 'CMS Collections', 'E-commerce', 'Animations', 'SEO Setup'],
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=350&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 'shopify',
    title: 'Shopify Design',
    description: 'Custom Shopify store designs that drive sales. We create beautiful, conversion-optimized e-commerce experiences.',
    features: ['Theme Customization', 'Product Pages', 'Checkout Flow', 'App Integration', 'Brand Identity'],
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    ],
  },
  {
    id: 'branding',
    title: 'Logo and Branding',
    description: 'Complete brand identity design that tells your story. From logos to brand guidelines, we create memorable visual identities.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy', 'Collateral Design'],
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=350&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    ],
  },
];

const industries = [
  'Fintech', 'Healthcare', 'E-commerce', 'Education', 'Real Estate',
  'Travel', 'Food & Beverage', 'Entertainment', 'Automotive', 'Fashion'
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Industries Served' },
  { value: '24hr', label: 'Response Time' },
];

const testimonials = [
  {
    quote: 'Softraxa transformed our entire product experience. The results exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    quote: 'Working with them was seamless. They understood our vision and delivered beyond what we imagined.',
    author: 'Michael Chen',
    role: 'Founder, GrowthLab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    quote: 'The attention to detail and user-centric approach made all the difference for our platform.',
    author: 'Emily Davis',
    role: 'Product Lead, InnovateCo',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
    rating: 5,
  },
];

const Services = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: partnerRef, isVisible: partnerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: industriesRef, isVisible: industriesVisible } = useScrollAnimation();
  const { ref: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden relative">
      {/* Cinematic noise overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none fixed" />

      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <FloatingParticles count={40} className="z-0" />

          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

          <div className="container relative z-10">
            <div
              ref={heroRef}
              className={`max-w-5xl mx-auto text-center transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-8 animate-fade-in">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-white">Services</span>
              </nav>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 tracking-tight leading-[0.95]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
                  Transforming Ideas
                </span>
                <span className="block mt-2 relative">
                  <span className="bg-gradient-to-r from-violet via-fuchsia-400 to-white bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(139,92,246,0.2)] italic">
                    into&nbsp;Refined Reality
                  </span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                From concept to launch, we craft digital experiences that drive growth, engagement, and sustainable value.
              </p>
            </div>

            {/* Hero Image / Visualization */}
            <div className={`mt-16 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm group">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

                <div className="aspect-[21/9] flex items-center justify-center p-8 md:p-12">
                  <div className="grid grid-cols-4 gap-6 w-full h-full">
                    {/* Staggered visuals - abstract representation of services */}
                    <div className="col-span-2 row-span-2 rounded-xl bg-[#0f0f0f] border border-white/5 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700">
                      <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <div className="text-sm font-bold uppercase tracking-wider text-violet-400 mb-1">UI/UX Design</div>
                        <div className="text-xl text-white font-bold">Immersive Interfaces</div>
                      </div>
                    </div>
                    <div className="col-span-1 row-span-2 rounded-xl bg-violet-600/10 border border-violet-500/20 flex flex-col items-center justify-center p-6 text-center group-hover:translate-y-2 transition-transform duration-700 delay-100">
                      <div className="w-16 h-16 rounded-full bg-violet-500/20 flex items-center justify-center mb-4">
                        <Zap className="w-8 h-8 text-violet-400" />
                      </div>
                      <div className="text-white font-bold text-lg">Fast &<br />Fluid</div>
                    </div>
                    <div className="col-span-1 row-span-1 rounded-xl bg-[#0f0f0f] border border-white/5 overflow-hidden relative group-hover:-translate-y-2 transition-transform duration-700 delay-150">
                      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" className="w-full h-full object-cover opacity-50" alt="" />
                    </div>
                    <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-br from-fuchsia-600/20 to-violet-600/20 border border-white/10 flex items-center justify-center group-hover:scale-95 transition-transform duration-700">
                      <span className="text-2xl font-bold text-white/20">A.I.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Sections */}
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}

        {/* Design Partnership Section */}
        <section className="py-20 lg:py-32 relative">
          <div className="container">
            <div
              ref={partnerRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${partnerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-bold uppercase tracking-widest mb-6">
                <Users className="w-3 h-3" />
                Partnership
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Design Partnership
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-fuchsia-400 to-white">in the Cloud</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                We work as an extension of your team, providing dedicated design resources
                that scale with your needs. No hiring hassles, just exceptional design delivered consistently.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Dedicated Team', 'Flexible Scaling', 'Fixed Monthly Cost'].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1a1a] border border-white/10 text-white shadow-lg">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden border-t border-white/5 bg-white/5">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="container relative z-10">
            <div
              ref={statsRef}
              className={`text-center mb-16 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
                <Award className="w-3 h-3" />
                Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Happiness by Design,
                <br />
                Success by <span className="text-violet-400 italic">Results</span>
              </h2>
            </div>

            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-8 bg-[#0f0f0f] rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                  <p className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{stat.value}</p>
                  <p className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <div
              ref={industriesRef}
              className={`text-center mb-16 transition-all duration-700 ${industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Expertise Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-fuchsia-400 to-white">Industries</span>
              </h2>
            </div>

            <div className={`flex flex-wrap justify-center gap-3 max-w-5xl mx-auto transition-all duration-700 delay-200 ${industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-6 py-3 rounded-full bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-pointer backdrop-blur-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-32 bg-white/5 border-t border-white/5 relative">
          <div className="container">
            <div
              ref={testimonialRef}
              className={`text-center mb-16 transition-all duration-700 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Clients Who
                <br />
                <span className="text-violet-400 italic">Trust Us</span>
              </h2>
            </div>

            <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-[#0f0f0f] rounded-[2rem] p-8 border border-white/5 shadow-2xl hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-8 italic text-lg leading-relaxed font-light">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
                    />
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-xs text-white/40 uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-violet-900/20" />
          <div className="container relative z-10">
            <div
              ref={ctaRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-fuchsia-400 to-white">Launch?</span>
              </h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light">
                Let's build something extraordinary together.
              </p>
              <Link to="/contact">
                <Button size="lg" className="h-14 px-10 rounded-full bg-white text-dark font-bold text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <FooterCta />
      </main>
      <GlobalFooter />
    </div>
  );
};

// Service Section Component
const ServiceSection = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isEven = index % 2 === 0;
  const number = (index + 1).toString().padStart(2, '0');

  return (
    <section
      id={service.id}
      className={`py-24 lg:py-32 relative overflow-hidden`}
    >
      {/* Dynamic Background Gradient for variety */}
      <div className={`absolute top-1/2 ${isEven ? '-left-[20%]' : '-right-[20%]'} w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px] pointer-events-none`} />

      <div className="container relative z-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {/* Content Side */}
          <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            {/* Big Background Number */}
            <div className={`absolute -top-32 ${isEven ? '-left-20' : '-right-20'} text-[200px] font-bold text-white/[0.02] select-none pointer-events-none font-display leading-none`}>
              {number}
            </div>

            <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border border-white/10 shadow-2xl group hover:border-white/20 transition-colors duration-500">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/5 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500">
                <Globe className="w-6 h-6" />
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display tracking-tight">
                {service.title}
              </h2>

              <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
                {service.description}
              </p>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="border-white/10 text-white hover:bg-white hover:text-dark rounded-full h-12 px-8 transition-all duration-300 group/btn bg-transparent">
                Explore Service <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'} lg:h-[600px] flex items-center`}>
            {/* Floating Composition */}
            <div className="relative w-full aspect-square lg:aspect-auto h-full">

              {/* Main Image */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10 animate-float"
                style={{ animationDuration: '8s' }}
              >
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110"
                />
                {/* Glass Overlay with Title */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-white font-bold text-xl">{service.title}</div>
                  <div className="text-white/60 text-sm">Visual Exploration</div>
                </div>
              </div>

              {/* Secondary Floating Image top-right */}
              <div
                className={`absolute top-[10%] ${isEven ? 'right-0' : 'left-0'} w-48 h-48 rounded-3xl overflow-hidden border border-white/10 shadow-xl z-20 animate-float backdrop-blur-sm bg-black/20`}
                style={{ animationDelay: '1s', animationDuration: '7s' }}
              >
                <img src={service.images[1]} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="" />
              </div>

              {/* Decorative Elements */}
              <div
                className={`absolute bottom-[15%] ${isEven ? 'left-0' : 'right-0'} w-32 h-32 bg-[#1a1a1a] rounded-full border border-white/10 flex items-center justify-center z-20 animate-float shadow-2xl`}
                style={{ animationDelay: '2s', animationDuration: '6s' }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
