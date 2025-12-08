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
    title: 'Softraxa: Rebranding with Purpose',
    category: 'Business Consulting',
    description: 'The rebrand of Softraxa was built with scalability, clarity, and purpose. Tayion in new logo. We were shipping who we are with wh...',
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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

          {/* Floating Background Thumbnails */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* Left Card */}
            <div className="absolute top-[20%] -left-[5%] md:left-[5%] w-64 h-48 opacity-[0.07] rotate-[-12deg] rounded-2xl overflow-hidden animate-float">
              <img src={projects[1].image} className="w-full h-full object-cover blur-[2px] grayscale" alt="" />
            </div>
            {/* Right Top Card */}
            <div className="absolute top-[15%] -right-[5%] md:right-[10%] w-72 h-56 opacity-[0.08] rotate-[15deg] rounded-2xl overflow-hidden animate-float" style={{ animationDelay: '2s' }}>
              <img src={projects[3].image} className="w-full h-full object-cover blur-[2px] grayscale" alt="" />
            </div>
          </div>

          <div className="container relative z-10">
            <div
              ref={headerRef}
              className={`max-w-5xl mx-auto text-center transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in mx-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-white/90 tracking-wide uppercase text-xs">Our Portfolio</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-[1.1]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
                  Curated Work
                </span>
                <span className="block mt-2 relative">
                  <span className="bg-gradient-to-r from-violet via-fuchsia-400 to-white bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto] italic">
                    &&nbsp;Case Studies
                  </span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                We transform ambitious ideas into market-leading digital products through data-driven design and strategic innovation.
              </p>

              {/* Scroll Indicator */}
              <div className="flex justify-center">
                <div className="w-6 h-10 border border-white/10 rounded-full flex justify-center p-1 bg-white/5 backdrop-blur-sm">
                  <div className="w-1 h-2 bg-white/60 rounded-full animate-scroll-down" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 sticky top-20 z-40 backdrop-blur-xl border-y border-white/5 bg-dark/50">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-md ${activeCategory === category
                    ? 'bg-white text-dark border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <div ref={containerRef} className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative flex flex-col gap-6 transition-all duration-700 ${visibleItems[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                    }`}
                >
                  {/* Project Image Card */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-[#0f0f0f] border border-white/10 shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)] group-hover:-translate-y-2 group-hover:border-white/20 backdrop-blur-sm">

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40" />

                    {/* Floating Action Button */}
                    <div className="absolute bottom-8 right-8 z-20 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-dark shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="px-4">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-bold uppercase tracking-widest text-violet-400">
                        {project.category}
                      </span>
                      <div className="h-px w-8 bg-white/10" />
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/50">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4 group-hover:text-violet-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-lg text-white/50 line-clamp-2 leading-relaxed font-light font-display">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-24 flex justify-center">
              <Pagination>
                <PaginationContent className="bg-white/5 rounded-full p-2 border border-white/10 backdrop-blur-sm">
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      className="text-white hover:bg-white/10 hover:text-white rounded-full transition-colors"
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
                        className={`rounded-full transition-all ${currentPage === page
                          ? 'bg-white text-dark hover:bg-white'
                          : 'text-white hover:bg-white/10 hover:text-white'
                          }`}
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
                      className="text-white hover:bg-white/10 hover:text-white rounded-full transition-colors"
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
