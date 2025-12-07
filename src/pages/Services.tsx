import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
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
    quote: 'Design Monks transformed our entire product experience. The results exceeded our expectations.',
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
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-dark pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
          <FloatingParticles count={40} className="z-0" />
          <div className="container relative z-10">
            <div
              ref={heroRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-primary">Services</span>
              </nav>
              
              <h1 className="text-display-lg md:text-display-xl text-white mb-6">
                We turn great ideas into
                <br />
                <span className="text-violet italic">Functional Products</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                From concept to launch, we craft digital experiences that drive growth and delight users.
              </p>
            </div>

            {/* Hero Image */}
            <div className={`mt-12 max-w-4xl mx-auto transition-all duration-700 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative rounded-3xl overflow-hidden">
                <div className="aspect-[16/9] bg-gradient-to-br from-violet via-primary to-green-accent rounded-3xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet/80 via-primary/60 to-green-accent/40" />
                  <div className="relative z-10 grid grid-cols-3 gap-4 p-8">
                    <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=300&h=200&fit=crop" alt="Design" className="rounded-xl shadow-2xl" />
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=400&fit=crop" alt="Mobile" className="rounded-xl shadow-2xl row-span-2" />
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop" alt="App" className="rounded-xl shadow-2xl" />
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" alt="Web" className="rounded-xl shadow-2xl col-span-1" />
                    <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop" alt="Design" className="rounded-xl shadow-2xl" />
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
        <section className="section-dark py-20 lg:py-32">
          <div className="container">
            <div 
              ref={partnerRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
                partnerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Your Design Partner
              </span>
              <h2 className="text-display-md md:text-display-lg text-white mb-6">
                Design Partnership Company
                <br />
                <span className="text-violet italic">in Cloud</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
                We work as an extension of your team, providing dedicated design resources 
                that scale with your needs. No hiring hassles, just exceptional design.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white">
                  <Check className="w-4 h-4 text-green-accent" />
                  <span>Dedicated Team</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white">
                  <Check className="w-4 h-4 text-green-accent" />
                  <span>Flexible Scaling</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white">
                  <Check className="w-4 h-4 text-green-accent" />
                  <span>Fixed Monthly Cost</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-light py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-green-accent/5" />
          <div className="container relative z-10">
            <div 
              ref={statsRef}
              className={`text-center mb-16 transition-all duration-700 ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Why Choose Us
              </span>
              <h2 className="text-display-md mb-4">
                Happiness UI/UX Design
                <br />
                Services for <span className="text-violet italic">Successful Results</span>
              </h2>
            </div>

            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 delay-200 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-border/50">
                  <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section-dark py-20 lg:py-32">
          <div className="container">
            <div 
              ref={industriesRef}
              className={`text-center mb-12 transition-all duration-700 ${
                industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Industries
              </span>
              <h2 className="text-display-md text-white mb-4">
                Our Expertise Transcends
                <br />
                Design across <span className="text-violet italic">Industries</span>
              </h2>
            </div>

            <div className={`flex flex-wrap justify-center gap-3 max-w-4xl mx-auto transition-all duration-700 delay-200 ${
              industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {industries.map((industry) => (
                <span 
                  key={industry}
                  className="px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-primary hover:border-primary transition-all cursor-pointer"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div 
              ref={testimonialRef}
              className={`text-center mb-12 transition-all duration-700 ${
                testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Testimonials
              </span>
              <h2 className="text-display-md mb-4">
                Our Clients Love
                <br />
                to <span className="text-violet italic">Recommend us</span>
              </h2>
            </div>

            <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
              testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-dark py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-primary/20" />
          <div className="container relative z-10">
            <div 
              ref={ctaRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-display-md md:text-display-lg text-white mb-4">
                Perfection Is Our <span className="text-green-accent">Planet</span>
                <br />
                Mediocrity Is <span className="text-violet italic">Far Out</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
                Ready to transform your digital presence? Let's create something extraordinary together.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-violet hover:from-violet hover:to-primary text-white px-8">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Earth-like visual */}
            <div className={`mt-16 flex justify-center transition-all duration-700 delay-300 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative w-64 h-64 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-green-400 to-blue-600 opacity-80 blur-sm" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400 via-green-300 to-blue-500 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=400&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              </div>
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

  return (
    <section 
      id={service.id}
      className={`py-20 lg:py-32 ${isEven ? 'section-light' : 'bg-muted/30'}`}
    >
      <div className="container">
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Content */}
          <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
            <h2 className="text-display-sm md:text-display-md mb-4">{service.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {service.features.map((feature) => (
                <span 
                  key={feature}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2">
              {services.slice(0, 5).map((_, i) => (
                <div 
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === index % 5 ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Images */}
          <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={service.images[0]} 
                  alt={`${service.title} showcase 1`}
                  className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
                <img 
                  src={service.images[1]} 
                  alt={`${service.title} showcase 2`}
                  className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="pt-8">
                <img 
                  src={service.images[2]} 
                  alt={`${service.title} showcase 3`}
                  className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
