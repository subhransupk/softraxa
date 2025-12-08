import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const categories = ['All', 'Design', 'Development', 'Strategy', 'Branding', 'UX Research'];

const blogPosts = [
  {
    id: 1,
    slug: 'future-of-ui-design-2024',
    title: 'The Future of UI Design: Trends to Watch in 2024',
    excerpt: 'Explore the emerging trends shaping the future of user interface design and how to stay ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop',
    category: 'Design',
    author: 'Sarah Chen',
    date: 'Dec 1, 2024',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    slug: 'building-scalable-design-systems',
    title: 'Building Scalable Design Systems',
    excerpt: 'A comprehensive guide to creating design systems that grow with your organization.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop',
    category: 'Design',
    author: 'Emily Davis',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    slug: 'ux-research-methods',
    title: 'UX Research Methods That Actually Work',
    excerpt: 'Discover proven research methodologies to validate your design decisions.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    category: 'UX Research',
    author: 'James Wilson',
    date: 'Nov 25, 2024',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 4,
    slug: 'psychology-of-color-branding',
    title: 'The Psychology of Color in Branding',
    excerpt: 'How strategic color choices can influence perception and drive brand recognition.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop',
    category: 'Branding',
    author: 'Lisa Park',
    date: 'Nov 20, 2024',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 5,
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Advanced strategies to make your React applications lightning fast.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    category: 'Development',
    author: 'Michael Roberts',
    date: 'Nov 15, 2024',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 6,
    slug: 'crafting-winning-digital-strategy',
    title: 'Crafting a Winning Digital Strategy',
    excerpt: 'Key elements of a successful digital strategy that drives business growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'Strategy',
    author: 'Abdullah Al Noman',
    date: 'Nov 10, 2024',
    readTime: '9 min read',
    featured: false,
  },
];

const Blogs = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page

  const featuredPost = blogPosts.find(post => post.featured);

  const filteredPosts = useMemo(() => {
    const nonFeaturedPosts = blogPosts.filter(post => !post.featured);
    if (activeCategory === 'All') {
      return nonFeaturedPosts;
    }
    return nonFeaturedPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filteredPosts.slice(startIndex, endIndex);
  }, [currentPage, filteredPosts, postsPerPage]);

  const { containerRef: postsRef, visibleItems: postsVisible } = useStaggeredAnimation(paginatedPosts.length);

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden relative">
      {/* Cinematic noise overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none fixed" />

      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
          <FloatingParticles count={40} className="z-0" />

          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen" />

          <div className="container relative z-10">
            <div
              ref={headerRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-violet-400">Blogs</span>
              </nav>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6">
                Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-white italic">Ideas</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                A collection of informative blogs on design, development, and digital strategy
                from the Softraxa team.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 border-y border-white/5 bg-white/[0.02] backdrop-blur-md sticky top-20 z-40">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1); // Reset to first page on category change
                  }}
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

        {/* Featured Post */}
        {featuredPost && activeCategory === 'All' && currentPage === 1 && (
          <section className="py-16 relative">
            <div className="container">
              <Link to={`/blogs/${featuredPost.slug}`} className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 block hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)] hover:-translate-y-1">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/50 to-transparent z-10 lg:hidden" />
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium">
                        Featured
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6 group-hover:text-violet-300 transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/60 mb-8 text-lg font-light leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-white/40 mb-8">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-white font-medium group/btn">
                      Read Article
                      <div className="w-8 h-8 rounded-full bg-white text-dark flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4 group-hover/btn:-rotate-45 transition-transform duration-300" />
                      </div>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="pb-20 lg:pb-32 pt-8">
          <div className="container">
            <div ref={postsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post, index) => (
                <Link
                  to={`/blogs/${post.slug}`}
                  key={post.id}
                  className={`group rounded-3xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 block hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] ${postsVisible[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                    }`}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 text-xs font-medium flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs text-violet-300 font-medium">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-6 line-clamp-2 font-light leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="flex items-center gap-2 text-sm text-white/40">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="text-white text-sm font-medium flex items-center gap-2 group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-violet-400" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center">
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
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <PaginationItem key={i + 1}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === i + 1}
                          className={`rounded-full transition-all ${currentPage === i + 1
                            ? 'bg-white text-dark hover:bg-white'
                            : 'text-white hover:bg-white/10 hover:text-white'
                            }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(i + 1);
                          }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        className="text-white hover:bg-white/10 hover:text-white rounded-full transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                        }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default Blogs;
