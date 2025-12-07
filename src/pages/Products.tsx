import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Search, Star, Quote } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const categories = [
  { id: 'all', label: 'Explore All' },
  { id: 'framer', label: 'Framer Template' },
  { id: 'mobile', label: 'Mobile Template' },
  { id: 'portfolio', label: 'Portfolio Template' },
];

const products = [
  {
    id: 'onx-off-road',
    title: 'onX Off-Road Mobile App UI Kit',
    description: "Experience the thrill of off-road adventures with onX Off-Road's intuitive mobile app.",
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
    category: 'mobile',
    price: 'Free',
    badge: 'Mobile App',
  },
  {
    id: 'crypto-app',
    title: 'Cryptocurrency App UI Kit',
    description: 'A comprehensive UI kit for crypto trading applications with dark mode support.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
    category: 'mobile',
    price: '$49',
    badge: 'FinTech',
  },
  {
    id: 'metaverse-guide',
    title: 'MetaVerse Transformation Guide',
    description: 'Complete guide to building immersive metaverse experiences.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
    category: 'framer',
    price: '$29',
    badge: 'Web3',
  },
  {
    id: 'fitness-app',
    title: 'Fitness App UI Design',
    description: 'Modern fitness tracking app with workout plans and progress analytics.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
    category: 'mobile',
    price: 'Free',
    badge: 'Health',
  },
  {
    id: 'smart-home',
    title: 'Smart Home App UI Design',
    description: 'Control your smart home devices with this elegant UI kit.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    category: 'mobile',
    price: '$39',
    badge: 'IoT',
  },
  {
    id: 'framer-agency',
    title: 'Framer Agency Template',
    description: 'Professional agency website template built with Framer.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    category: 'framer',
    price: '$79',
    badge: 'Agency',
  },
  {
    id: 'portfolio-starter',
    title: 'Portfolio Starter Kit',
    description: 'Clean and minimal portfolio template for designers.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    category: 'portfolio',
    price: 'Free',
    badge: 'Portfolio',
  },
  {
    id: 'framer-ecommerce',
    title: 'Framer E-commerce Template',
    description: 'Modern e-commerce template with smooth animations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    category: 'framer',
    price: '$99',
    badge: 'E-commerce',
  },
];

const stats = [
  { value: '268', suffix: 'Articles', label: 'Design Articles' },
  { value: '100K', suffix: '+', label: 'Monthly Views' },
  { value: '50K', suffix: '+', label: 'Downloads' },
  { value: '1M', suffix: '+', label: 'Community' },
];

const testimonials = [
  {
    quote: "Softraxa templates saved us countless hours. The quality is exceptional and the support is outstanding. Highly recommend their UI kits!",
    author: "Anna Carre Jas",
    role: "Product Designer at Spotify",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Will I have full source code/files after buying the packs?",
    answer: "Yes, you'll receive complete source files including Figma files, design assets, and documentation."
  },
  {
    question: "Are these templates only built in Framer?",
    answer: "No, we offer templates in various formats including Framer, Figma, and code-ready React components."
  },
  {
    question: "Can I preview a template before deciding on purchasing it?",
    answer: "Absolutely! Each template has a live preview link so you can experience it before purchasing."
  },
  {
    question: "Do I need a Framer account to use the templates?",
    answer: "For Framer templates, yes you'll need a Framer account. For Figma templates, you'll need Figma."
  },
  {
    question: "Can I use these templates for commercial or agency work?",
    answer: "Yes, all our templates come with commercial licenses allowing you to use them for client projects."
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(products.length);
  const statsAnimation = useScrollAnimation();
  const testimonialAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-primary">Products</span>
              </nav>
              
              <h1 className="text-display-lg md:text-display-xl text-white mb-6">
                Explore our{' '}
                <span className="text-violet italic">UI Kits</span>
                <br className="hidden md:block" />
                & <span className="text-violet italic">Resources</span>
              </h1>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative mt-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="section-light py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-light py-16 lg:py-24">
          <div className="container">
            <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className={`group bg-card rounded-2xl overflow-hidden border border-border transition-all duration-700 hover:shadow-xl ${
                    visibleItems[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  {/* Product Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.price === 'Free' 
                          ? 'bg-green-accent/20 text-green-accent' 
                          : 'bg-violet/20 text-violet'
                      }`}>
                        {product.price}
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Badge */}
                    <span className="inline-block px-3 py-1.5 rounded-full bg-dark text-white text-xs font-medium">
                      {product.badge}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  {[1, 2, 3, 4].map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === page}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < 4) setCurrentPage(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Contribution Stats Section */}
        <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
          <FloatingParticles count={20} className="z-0" />
          <div 
            ref={statsAnimation.ref}
            className={`container relative z-10 transition-all duration-700 ${
              statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-violet/20 text-violet rounded-full text-sm font-medium mb-4">
                Our Contribution
              </span>
              <h2 className="text-display-md md:text-display-lg text-white">
                Contribution We Made :<br />
                <span className="italic text-violet">UX Insights</span> to Grow the Industry
              </h2>
              <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                We're on a mission to educate. Check out our free design resources, articles, and guides.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-display-sm md:text-display-md font-display font-bold text-violet mb-2">
                    {stat.value}<span className="text-green-accent">{stat.suffix}</span>
                  </div>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Featured Content */}
            <div className="flex justify-center">
              <Link 
                to="/blogs"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Explore All Articles →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-light py-20 lg:py-28">
          <div 
            ref={testimonialAnimation.ref}
            className={`container transition-all duration-700 ${
              testimonialAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-display-md md:text-display-lg">
                Our Clients Love to<br />
                <span className="italic text-violet">Recommend Us</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <Quote className="w-12 h-12 text-violet/30 mx-auto mb-6" />
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-light py-20 lg:py-28 bg-muted/30">
          <div 
            ref={faqAnimation.ref}
            className={`container transition-all duration-700 ${
              faqAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-display-md md:text-display-lg">
                Your Questions<br />
                <span className="italic text-violet">Answered!</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
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

        {/* CTA Section */}
        <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
          <FloatingParticles count={30} className="z-0" />
          <div 
            ref={ctaAnimation.ref}
            className={`container relative z-10 text-center transition-all duration-700 ${
              ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-display-md md:text-display-lg text-white mb-4">
              Your Brand Deserves<br />
              the <span className="italic text-violet">Next Level!</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Elevate your online presence with our premium templates and design resources.
            </p>

            {/* Globe Visual */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-teal-400 to-green-500 opacity-80 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
            </div>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
              <span className="text-green-accent font-bold">Join 50,000+</span>
              <span className="text-white/80">designers who trust our resources</span>
            </div>
          </div>
        </section>

        <FooterCta />
      </main>
      <GlobalFooter />
    </div>
  );
};

export default Products;
