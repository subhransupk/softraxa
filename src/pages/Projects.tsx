import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const categories = [
  'Explore All',
  'Automotive',
  'Beauty & Cosmetics',
  'Business Consulting',
  'Construction',
  'EdTech',
  'Entertainment',
  'Fashion & Apparel',
  'Finance',
];

const projects = [
  {
    id: 1,
    title: 'Esdiac - Borderless Communication',
    category: 'Business Consulting',
    description: 'ESDIAC was built to make global communication easy, affordable, and accessible for everyone. With services like international calling, eSIM...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    badge: 'On Demand Services',
  },
  {
    id: 2,
    title: 'Bearister AI - A Tool for the Future Lawyers',
    category: 'EdTech',
    description: 'Bearister AI is an intelligent app assistant designed to simplify complex legal texts through a clean and user-centered experience. Our UI...',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    badge: 'AI Machine Learning',
  },
  {
    id: 3,
    title: 'Design Monks: Rebranding with Purpose',
    category: 'Business Consulting',
    description: 'The rebrand of Design Monks was built with scalability, clarity, and purpose. Tayion in new logo. We were shipping who we are with wh...',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    badge: 'Tech/Saas',
  },
  {
    id: 4,
    title: 'HomeRun: Simplifying Auctions with Gamification',
    category: 'Entertainment',
    description: 'HomeRun is a game-ified real estate auction app that transforms property bidding into a simple, exciting, and user-friendly journey. Built on...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    badge: 'Real Estate',
  },
  {
    id: 5,
    title: 'IIU Dubai: Fintech Project with Islamic Values',
    category: 'Finance',
    description: 'IIU Dubai is a financial thinking towards university that combines modern innovation with ethical finance. For the project, the website was desig...',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
    badge: 'FinTech',
  },
  {
    id: 6,
    title: 'AkeT: Sustainable Rides, Simple Journeys',
    category: 'Automotive',
    description: 'Ake-T is an electric and sustainable e-scooter designed for modern city riders. Our task was to make mobility effortlessly and yet give each ride a...',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    badge: 'Transportation & Logistics',
  },
];

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(projects.length);
  const [activeCategory, setActiveCategory] = useState('Explore All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = activeCategory === 'Explore All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
                <span className="text-primary">Projects</span>
              </nav>
              
              <h1 className="text-display-lg md:text-display-xl text-white mb-6">
                <span className="text-violet italic">Designs</span> That Speak{' '}
                <br className="hidden md:block" />
                Results that <span className="text-violet italic">Matter</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="section-light py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-light py-16 lg:py-24">
          <div className="container">
            <div ref={containerRef} className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group bg-card rounded-2xl overflow-hidden border border-border transition-all duration-700 hover:shadow-xl ${
                    visibleItems[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  {/* Project Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Badge */}
                    <span className="inline-block px-3 py-1.5 rounded-full bg-dm-dark text-white text-xs font-medium">
                      {project.badge}
                    </span>
                  </div>
                </div>
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

        {/* Get in Touch CTA */}
        <FooterCta />
      </main>
      <GlobalFooter />
    </div>
  );
};

export default Projects;
