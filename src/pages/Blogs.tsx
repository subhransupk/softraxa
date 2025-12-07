import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const { containerRef: postsRef, visibleItems: postsVisible } = useStaggeredAnimation(blogPosts.length);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-dark pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
          <FloatingParticles count={40} className="z-0" />
          <div className="container relative z-10">
            <div
              ref={headerRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-primary">Blogs</span>
              </nav>
              
              <h1 className="text-display-lg md:text-display-xl text-white mb-6">
                Insights & <span className="text-violet italic">Ideas</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                A collection of informative blogs on design, development, and digital strategy 
                from the Design Monks team.
              </p>
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === 'All'
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

        {/* Featured Post */}
        {featuredPost && (
          <section className="section-light py-16">
            <div className="container">
              <Link to={`/blogs/${featuredPost.slug}`} className="group relative bg-white rounded-3xl overflow-hidden border border-border/50 hover:shadow-2xl transition-all duration-500 block">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        Featured
                      </span>
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary font-medium group/btn">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="section-light pb-20 lg:pb-32">
          <div className="container">
            <div ref={postsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Link
                  to={`/blogs/${post.slug}`}
                  key={post.id}
                  className={`group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-700 hover:-translate-y-2 block ${
                    postsVisible[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group/btn">
                        Read More
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default Blogs;
