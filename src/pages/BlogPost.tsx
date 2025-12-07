import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Clock, User, Calendar, ArrowLeft, ArrowRight, Tag, Share2, Linkedin, Twitter, Facebook, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Blog post data - in a real app, this would come from an API
const blogPosts = [
  {
    id: '1',
    slug: 'future-of-ui-design-2024',
    title: 'The Future of UI Design: Trends to Watch in 2024',
    excerpt: 'Explore the emerging trends shaping the future of user interface design and how to stay ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop',
    category: 'Design',
    author: {
      name: 'Sarah Chen',
      role: 'Head of Design',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    date: 'Dec 1, 2024',
    readTime: '8 min read',
    content: `
## The Evolution of UI Design

User interface design is constantly evolving, shaped by technological advancements, changing user expectations, and new creative possibilities. As we look ahead to 2024, several key trends are emerging that will define how we create digital experiences.

### 1. AI-Powered Design Systems

Artificial intelligence is no longer just a tool for automation—it's becoming an integral part of the design process itself. AI-powered design systems can now generate color palettes, suggest layout improvements, and even create entire component libraries based on brand guidelines.

> "The designers who embrace AI will be the ones who stay relevant. Those who resist will find themselves left behind." — Design Industry Expert

### 2. Immersive 3D Experiences

With the advancement of WebGL and browser capabilities, 3D elements are becoming more prevalent in web design. From subtle depth effects to fully immersive environments, designers are finding creative ways to add dimensionality to flat screens.

**Key considerations for 3D design:**
- Performance optimization is crucial
- Accessibility must remain a priority
- Progressive enhancement ensures compatibility

### 3. Micro-Interactions That Delight

The small details matter more than ever. Thoughtful micro-interactions—from button hover states to loading animations—create emotional connections with users and differentiate products from competitors.

\`\`\`css
/* Example micro-interaction */
.button-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.button-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(106, 75, 255, 0.3);
}
\`\`\`

### 4. Sustainable Design Practices

Environmental consciousness is influencing design decisions. Sustainable UI design focuses on reducing digital carbon footprints through optimized images, efficient code, and thoughtful user flows that minimize unnecessary data transfer.

### 5. Voice and Gesture Interfaces

As voice assistants and gesture controls become more sophisticated, designers must consider multimodal interactions. The challenge lies in creating seamless experiences that work across touch, voice, and gesture inputs.

## Preparing for the Future

To stay ahead of these trends, designers should:

1. **Continuously learn** new tools and technologies
2. **Experiment** with emerging design patterns
3. **Prioritize accessibility** in all design decisions
4. **Collaborate** with developers early and often
5. **Stay curious** about user behavior and needs

The future of UI design is exciting, challenging, and full of opportunities for those willing to adapt and innovate.
    `,
    tags: ['UI Design', 'Trends', 'Innovation', 'Future'],
  },
  {
    id: '2',
    slug: 'building-scalable-design-systems',
    title: 'Building Scalable Design Systems',
    excerpt: 'A comprehensive guide to creating design systems that grow with your organization.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&h=600&fit=crop',
    category: 'Design',
    author: {
      name: 'Emily Davis',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    content: `
## What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It's more than just a component library—it's a living, breathing entity that evolves with your organization.

### The Building Blocks

Every successful design system starts with these foundational elements:

- **Design tokens**: Colors, typography, spacing, shadows
- **Components**: Buttons, forms, cards, navigation
- **Patterns**: Common UI patterns and layouts
- **Guidelines**: Usage rules and best practices

### Starting Small, Thinking Big

Don't try to build everything at once. Start with the components you use most frequently and expand from there.
    `,
    tags: ['Design Systems', 'Components', 'Scalability'],
  },
  {
    id: '3',
    slug: 'ux-research-methods',
    title: 'UX Research Methods That Actually Work',
    excerpt: 'Discover proven research methodologies to validate your design decisions.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop',
    category: 'UX Research',
    author: {
      name: 'James Wilson',
      role: 'UX Researcher',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    date: 'Nov 25, 2024',
    readTime: '10 min read',
    content: `
## The Importance of UX Research

Good design isn't just about aesthetics—it's about understanding users and solving their problems. UX research provides the insights needed to make informed design decisions.

### Popular Research Methods

1. **User Interviews**: Direct conversations with users
2. **Usability Testing**: Observing users interact with your product
3. **Surveys**: Gathering quantitative data at scale
4. **A/B Testing**: Comparing design variations
5. **Analytics Review**: Understanding user behavior through data
    `,
    tags: ['UX Research', 'User Testing', 'Methods'],
  },
  {
    id: '4',
    slug: 'psychology-of-color-branding',
    title: 'The Psychology of Color in Branding',
    excerpt: 'How strategic color choices can influence perception and drive brand recognition.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=600&fit=crop',
    category: 'Branding',
    author: {
      name: 'Lisa Park',
      role: 'UI Designer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    },
    date: 'Nov 20, 2024',
    readTime: '7 min read',
    content: `
## Color Psychology in Design

Colors evoke emotions and associations. Understanding color psychology is essential for creating brands that resonate with audiences.

### Color Meanings

- **Blue**: Trust, stability, professionalism
- **Red**: Energy, passion, urgency
- **Green**: Growth, nature, health
- **Yellow**: Optimism, creativity, warmth
- **Purple**: Luxury, creativity, wisdom
    `,
    tags: ['Branding', 'Color Theory', 'Psychology'],
  },
  {
    id: '5',
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Advanced strategies to make your React applications lightning fast.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    category: 'Development',
    author: {
      name: 'Michael Roberts',
      role: 'Lead Developer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    date: 'Nov 15, 2024',
    readTime: '12 min read',
    content: `
## Optimizing React Applications

Performance is crucial for user experience. Here are key strategies for optimizing React apps.

### Key Techniques

1. **Code Splitting**: Load only what's needed
2. **Memoization**: Prevent unnecessary re-renders
3. **Virtual Lists**: Handle large datasets efficiently
4. **Lazy Loading**: Defer non-critical resources
    `,
    tags: ['React', 'Performance', 'Development'],
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [readingProgress, setReadingProgress] = useState(0);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { containerRef: relatedRef, visibleItems: relatedVisible } = useStaggeredAnimation(3);

  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById('article-content');
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const start = articleTop - windowHeight;
      const end = articleTop + articleHeight - windowHeight;
      const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
      
      setReadingProgress(progress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';

    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: 'Link copied!',
          description: 'The article link has been copied to your clipboard.',
        });
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blogs" className="text-primary hover:underline">
            Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-green-accent z-[60] transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-dark pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <FloatingParticles count={30} className="z-0" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link>
                <span>›</span>
                <span className="text-primary truncate max-w-[200px]">{post.title}</span>
              </nav>

              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
                <span className="text-white/50 text-sm">{post.date}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-white/60 mb-8">{post.excerpt}</p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-white">{post.author.name}</p>
                    <p className="text-sm text-white/50">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/50 text-sm">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="section-light">
          <div className="container">
            <div className="max-w-5xl mx-auto -mt-12 relative z-20">
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-light py-16 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12 max-w-5xl mx-auto">
              {/* Main Content */}
              <article 
                id="article-content"
                ref={contentRef}
                className={`prose prose-lg max-w-none transition-all duration-700 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div 
                  className="
                    [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-4
                    [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3
                    [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6
                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:text-muted-foreground [&>ul>li]:mb-2
                    [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:text-muted-foreground [&>ol>li]:mb-2
                    [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-foreground/80 [&>blockquote]:bg-muted/30 [&>blockquote]:rounded-r-xl
                    [&>pre]:bg-dark [&>pre]:text-white/90 [&>pre]:p-6 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:my-6
                    [&>code]:bg-muted [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm
                    [&_strong]:text-foreground [&_strong]:font-semibold
                  "
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                      .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/^- (.*$)/gm, '<li>$1</li>')
                      .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
                      .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
                      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
                      .replace(/\n\n/g, '</p><p>')
                      .replace(/^(?!<[hublop])(.+)$/gm, '<p>$1</p>')
                  }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 h-fit space-y-8">
                {/* Author Card */}
                <div className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-4">Written by</p>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{post.author.name}</p>
                      <p className="text-sm text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Passionate about creating exceptional digital experiences and sharing knowledge.
                  </p>
                </div>

                {/* Share Card */}
                <div className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share this article
                  </p>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleShare('twitter')}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleShare('linkedin')}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleShare('copy')}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Back to Blogs */}
                <Link to="/blogs">
                  <Button variant="outline" className="w-full group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blogs
                  </Button>
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="section-dark py-20 lg:py-32">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                Keep Reading
              </span>
              <h2 className="text-display-sm text-white">
                Related <span className="text-violet italic">Articles</span>
              </h2>
            </div>

            <div ref={relatedRef} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blogs/${relatedPost.slug}`}
                  className={`group bg-dark-surface rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-700 hover:-translate-y-2 ${
                    relatedVisible[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <Clock className="w-4 h-4" />
                      {relatedPost.readTime}
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

export default BlogPost;
