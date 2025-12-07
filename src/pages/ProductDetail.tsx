import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowLeft, Star, Download, Eye, Heart, Share2, Check, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const allProducts: Record<string, {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  originalPrice?: string;
  category: string;
  images: string[];
  features: string[];
  includes: string[];
  compatibility: string[];
  rating: number;
  reviews: number;
  downloads: number;
  author: string;
  authorImage: string;
  lastUpdated: string;
  version: string;
}> = {
  'onx-off-road': {
    id: 'onx-off-road',
    title: 'onX Off-Road Mobile App UI Kit',
    description: "Experience the thrill of off-road adventures with onX Off-Road's intuitive mobile app.",
    longDescription: "A comprehensive UI kit designed for outdoor and adventure applications. This kit includes over 80+ screens covering navigation, trail mapping, community features, and more. Perfect for building GPS-based adventure apps with a modern, clean interface.",
    price: 'Free',
    category: 'Mobile Template',
    images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80',
      'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?w=800&q=80',
    ],
    features: ['80+ Screens', 'Dark & Light Mode', 'GPS Integration Ready', 'Offline Maps Support', 'Community Features', 'Real-time Updates'],
    includes: ['Figma Source Files', 'Component Library', 'Design System', 'Documentation', 'Free Updates'],
    compatibility: ['Figma', 'Sketch', 'Adobe XD'],
    rating: 4.9,
    reviews: 128,
    downloads: 2340,
    author: 'Softraxa',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    lastUpdated: 'Dec 2024',
    version: '2.1.0',
  },
  'crypto-app': {
    id: 'crypto-app',
    title: 'Cryptocurrency App UI Kit',
    description: 'A comprehensive UI kit for crypto trading applications with dark mode support.',
    longDescription: "Build stunning cryptocurrency trading platforms with this premium UI kit. Features include real-time charts, portfolio management, trading interfaces, wallet screens, and transaction history. Designed with accessibility and usability in mind.",
    price: '$49',
    originalPrice: '$79',
    category: 'Mobile Template',
    images: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80',
      'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&q=80',
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80',
    ],
    features: ['120+ Screens', 'Real-time Charts', 'Wallet Integration', 'Dark Mode', 'Trading UI', 'Portfolio Dashboard'],
    includes: ['Figma Source Files', 'React Components', 'Design Tokens', 'Documentation', 'Lifetime Updates'],
    compatibility: ['Figma', 'React', 'Tailwind CSS'],
    rating: 4.8,
    reviews: 89,
    downloads: 1560,
    author: 'Softraxa',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    lastUpdated: 'Nov 2024',
    version: '3.0.0',
  },
  'metaverse-guide': {
    id: 'metaverse-guide',
    title: 'MetaVerse Transformation Guide',
    description: 'Complete guide to building immersive metaverse experiences.',
    longDescription: "Dive into the future of digital experiences with our comprehensive MetaVerse design guide. Learn how to create immersive 3D environments, avatar systems, virtual commerce interfaces, and social interaction patterns for the next generation of web experiences.",
    price: '$29',
    category: 'Starter',
    images: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80',
    ],
    features: ['50+ Page Guide', '3D Design Principles', 'Avatar Systems', 'Virtual Commerce', 'Case Studies', 'Best Practices'],
    includes: ['PDF Guide', 'Figma Templates', 'Resource Library', 'Video Tutorials', 'Community Access'],
    compatibility: ['PDF', 'Figma', 'Notion'],
    rating: 4.7,
    reviews: 56,
    downloads: 890,
    author: 'Softraxa',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    lastUpdated: 'Oct 2024',
    version: '1.5.0',
  },
  'fitness-app': {
    id: 'fitness-app',
    title: 'Fitness App UI Design',
    description: 'Modern fitness tracking app with workout plans and progress analytics.',
    longDescription: "Transform health and fitness experiences with this comprehensive UI kit. Includes workout tracking, nutrition planning, progress analytics, social challenges, and personalized coaching interfaces. Built for both iOS and Android platforms.",
    price: 'Free',
    category: 'Mobile Template',
    images: [
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    ],
    features: ['65+ Screens', 'Workout Tracking', 'Nutrition Plans', 'Progress Charts', 'Social Features', 'Wearable Integration'],
    includes: ['Figma Source Files', 'Icon Set', 'Illustration Pack', 'Documentation', 'Free Updates'],
    compatibility: ['Figma', 'Sketch'],
    rating: 4.6,
    reviews: 234,
    downloads: 4200,
    author: 'Softraxa',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    lastUpdated: 'Dec 2024',
    version: '2.3.0',
  },
  'smart-home': {
    id: 'smart-home',
    title: 'Smart Home App UI Design',
    description: 'Control your smart home devices with this elegant UI kit.',
    longDescription: "Create beautiful smart home control applications with this premium UI kit. Features include device management, automation scenes, energy monitoring, security controls, and voice assistant integration. Perfect for IoT applications.",
    price: '$39',
    category: 'Mobile Template',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80',
    ],
    features: ['75+ Screens', 'Device Controls', 'Automation Scenes', 'Energy Dashboard', 'Security Panel', 'Voice Integration'],
    includes: ['Figma Source Files', 'Prototype', 'Design System', 'Icons', 'Documentation'],
    compatibility: ['Figma', 'Framer'],
    rating: 4.8,
    reviews: 67,
    downloads: 1120,
    author: 'Softraxa',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    lastUpdated: 'Nov 2024',
    version: '1.8.0',
  },
  'framer-agency': {
    id: 'framer-agency',
    title: 'Framer Agency Template',
    description: 'Professional agency website template built with Framer.',
    longDescription: "Launch your agency website in minutes with this premium Framer template. Includes portfolio showcase, team pages, service sections, blog integration, and contact forms. Fully responsive and optimized for conversions.",
    price: '$79',
    category: 'Framer Template',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
    ],
    features: ['12 Pages', 'CMS Ready', 'Blog Integration', 'Contact Forms', 'SEO Optimized', 'Analytics Ready'],
    includes: ['Framer Template', 'CMS Setup', 'Documentation', 'Support', 'Free Updates'],
    compatibility: ['Framer'],
    rating: 4.9,
    reviews: 145,
    downloads: 2890,
    author: 'Softraxa',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    lastUpdated: 'Dec 2024',
    version: '4.0.0',
  },
};

const relatedProducts = [
  { id: 'crypto-app', title: 'Cryptocurrency App UI Kit', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80', price: '$49' },
  { id: 'fitness-app', title: 'Fitness App UI Design', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80', price: 'Free' },
  { id: 'smart-home', title: 'Smart Home App UI Design', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', price: '$39' },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const relatedAnimation = useScrollAnimation();

  const product = allProducts[productId || 'onx-off-road'] || allProducts['onx-off-road'];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="section-light pt-28 pb-4">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>›</span>
              <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
              <span>›</span>
              <span className="text-primary">{product.title}</span>
            </nav>
          </div>
        </section>

        {/* Product Hero */}
        <section className="section-light py-12">
        <div 
          ref={heroAnimation.ref}
          className={`container transition-all duration-700 ${
            heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                  key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-primary ring-2 ring-primary/20' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  {product.category}
                </span>
                <h1 className="text-display-sm md:text-display-md mb-4">
                  {product.title}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Rating & Stats */}
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Download className="w-4 h-4" />
                  <span>{product.downloads.toLocaleString()} downloads</span>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className={`text-4xl font-display font-bold ${
                    product.price === 'Free' ? 'text-green-accent' : 'text-foreground'
                  }`}>
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {product.price === 'Free' ? 'Download Free' : 'Buy Now'}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    Preview
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={isWishlisted ? 'text-destructive border-destructive/50' : ''}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <img
                  src={product.authorImage}
                  alt={product.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-muted-foreground">Created by</p>
                  <p className="font-medium">{product.author}</p>
                </div>
                <div className="ml-auto text-right text-sm">
                  <p className="text-muted-foreground">Last updated</p>
                  <p className="font-medium">{product.lastUpdated}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Details */}
      <section className="section-light py-16 lg:py-24">
        <div 
          ref={featuresAnimation.ref}
          className={`container transition-all duration-700 ${
            featuresAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Features */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-accent" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3">
                {product.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compatibility */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">Compatibility</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {product.compatibility.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">Version</p>
                  <p className="font-medium">{product.version}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-light py-16 lg:py-24 bg-muted/30">
        <div 
          ref={relatedAnimation.ref}
          className={`container transition-all duration-700 ${
            relatedAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-display-sm md:text-display-md mb-8">
            You May Also Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className={`font-medium ${
                    item.price === 'Free' ? 'text-green-accent' : 'text-violet'
                  }`}>
                    {item.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

        <FooterCta />
      </main>
      <GlobalFooter />
    </div>
  );
};

export default ProductDetail;
