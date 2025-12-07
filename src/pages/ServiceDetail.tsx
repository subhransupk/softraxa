import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Check, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  benefits: string[];
  showcase: { image: string; title: string; category: string }[];
  faqs: { question: string; answer: string }[];
}> = {
  'ui-ux': {
    title: 'UI/UX Design',
    subtitle: 'User-Centered Design Excellence',
    description: 'We create intuitive, user-centered designs that enhance engagement and drive conversions. Our UI/UX solutions blend aesthetics with functionality to deliver exceptional digital experiences.',
    heroImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop',
    features: [
      { title: 'User Research', description: 'Deep dive into user behavior, needs, and pain points through interviews, surveys, and analytics.' },
      { title: 'Wireframing', description: 'Low-fidelity sketches and wireframes to establish information architecture and user flows.' },
      { title: 'Visual Design', description: 'Pixel-perfect designs with attention to typography, color, spacing, and visual hierarchy.' },
      { title: 'Prototyping', description: 'Interactive prototypes to test and validate design concepts before development.' },
      { title: 'Usability Testing', description: 'Real user testing to identify issues and optimize the user experience.' },
      { title: 'Design Systems', description: 'Scalable component libraries and design tokens for consistent experiences.' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Understanding your business goals, users, and market landscape.' },
      { step: '02', title: 'Research', description: 'User interviews, competitive analysis, and data gathering.' },
      { step: '03', title: 'Ideation', description: 'Brainstorming solutions and creating initial concepts.' },
      { step: '04', title: 'Design', description: 'Creating polished, user-centered visual designs.' },
      { step: '05', title: 'Testing', description: 'Validating designs with real users and iterating.' },
      { step: '06', title: 'Handoff', description: 'Developer-ready assets and documentation.' },
    ],
    benefits: [
      'Increased user engagement and retention',
      'Higher conversion rates',
      'Reduced development costs through clear specs',
      'Consistent brand experience across touchpoints',
      'Data-driven design decisions',
      'Scalable design systems for future growth',
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop', title: 'Mobile Banking App', category: 'Fintech' },
      { image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop', title: 'Health Dashboard', category: 'Healthcare' },
      { image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop', title: 'E-commerce Platform', category: 'Retail' },
      { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', title: 'SaaS Analytics', category: 'B2B' },
    ],
    faqs: [
      { question: 'What is the typical timeline for a UI/UX project?', answer: 'Most projects take 4-8 weeks depending on scope and complexity. We provide detailed timelines during our initial consultation.' },
      { question: 'Do you provide design files and assets?', answer: 'Yes, we deliver all source files in Figma, along with design specs, assets, and documentation for development.' },
      { question: 'How do you ensure designs meet user needs?', answer: 'We conduct user research, usability testing, and iterate based on feedback to validate all design decisions.' },
    ],
  },
  'web-design': {
    title: 'Web Design',
    subtitle: 'Beautiful, High-Converting Websites',
    description: 'Beautiful, responsive websites that captivate visitors and convert them into customers. We combine stunning visuals with seamless functionality for maximum impact.',
    heroImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop',
    features: [
      { title: 'Responsive Design', description: 'Websites that look and work perfectly on all devices and screen sizes.' },
      { title: 'Custom Layouts', description: 'Unique, branded designs tailored to your business goals and audience.' },
      { title: 'SEO Optimization', description: 'Built-in SEO best practices for better search engine visibility.' },
      { title: 'Performance', description: 'Fast-loading pages optimized for Core Web Vitals and user experience.' },
      { title: 'CMS Integration', description: 'Easy content management with WordPress, Webflow, or headless CMS.' },
      { title: 'Analytics Setup', description: 'Tracking and analytics integration for data-driven improvements.' },
    ],
    process: [
      { step: '01', title: 'Strategy', description: 'Defining goals, audience, and key messaging.' },
      { step: '02', title: 'Architecture', description: 'Planning site structure and user journeys.' },
      { step: '03', title: 'Design', description: 'Creating visual designs and interactive prototypes.' },
      { step: '04', title: 'Development', description: 'Building responsive, performant websites.' },
      { step: '05', title: 'Testing', description: 'QA across devices, browsers, and accessibility.' },
      { step: '06', title: 'Launch', description: 'Deployment, training, and ongoing support.' },
    ],
    benefits: [
      'Professional online presence',
      'Mobile-first responsive design',
      'Improved search rankings',
      'Higher conversion rates',
      'Easy content management',
      'Scalable architecture',
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', title: 'Corporate Website', category: 'Business' },
      { image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop', title: 'Portfolio Site', category: 'Creative' },
      { image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop', title: 'Landing Page', category: 'Marketing' },
      { image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop', title: 'Blog Platform', category: 'Media' },
    ],
    faqs: [
      { question: 'How long does it take to design a website?', answer: 'A typical website takes 3-6 weeks from concept to launch, depending on the number of pages and features.' },
      { question: 'Will my website be mobile-friendly?', answer: 'Absolutely! All our websites are designed mobile-first and fully responsive across all devices.' },
      { question: 'Do you provide hosting and maintenance?', answer: 'We can recommend hosting solutions and offer ongoing maintenance packages to keep your site updated and secure.' },
    ],
  },
  'mobile-app': {
    title: 'Mobile App Design',
    subtitle: 'Native & Cross-Platform Excellence',
    description: 'Native and cross-platform mobile app designs that users love. We create seamless experiences for iOS and Android platforms that drive engagement.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
    features: [
      { title: 'iOS Design', description: 'Native iOS designs following Apple Human Interface Guidelines.' },
      { title: 'Android Design', description: 'Material Design principles for seamless Android experiences.' },
      { title: 'Cross-Platform', description: 'Unified designs that work beautifully on both platforms.' },
      { title: 'App Store Assets', description: 'Screenshots, icons, and promotional graphics for app stores.' },
      { title: 'Motion Design', description: 'Micro-interactions and animations that delight users.' },
      { title: 'Accessibility', description: 'Inclusive designs that work for all users.' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Understanding app goals and target users.' },
      { step: '02', title: 'UX Design', description: 'User flows, wireframes, and interaction design.' },
      { step: '03', title: 'UI Design', description: 'Visual design and component creation.' },
      { step: '04', title: 'Prototyping', description: 'Interactive prototypes for testing.' },
      { step: '05', title: 'Animation', description: 'Micro-interactions and motion design.' },
      { step: '06', title: 'Handoff', description: 'Developer-ready specs and assets.' },
    ],
    benefits: [
      'Platform-native experiences',
      'Increased user engagement',
      'Higher app store ratings',
      'Reduced development iterations',
      'Consistent cross-platform branding',
      'Accessible to all users',
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop', title: 'Fitness App', category: 'Health' },
      { image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=300&fit=crop', title: 'Banking App', category: 'Fintech' },
      { image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop', title: 'Social App', category: 'Social' },
      { image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400&h=300&fit=crop', title: 'Delivery App', category: 'Logistics' },
    ],
    faqs: [
      { question: 'Do you design for both iOS and Android?', answer: 'Yes, we design native experiences for both platforms, following each platform\'s design guidelines.' },
      { question: 'Can you create app store screenshots?', answer: 'Absolutely! We provide all app store assets including screenshots, icons, and promotional graphics.' },
      { question: 'Do you include animations in your designs?', answer: 'Yes, we create micro-interactions and animations that enhance the user experience and bring your app to life.' },
    ],
  },
  'ai-product': {
    title: 'AI Product Design',
    subtitle: 'Intelligent Interface Design',
    description: 'Designing intelligent interfaces for AI-powered products. We make complex technology accessible and intuitive for users of all skill levels.',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    features: [
      { title: 'AI Interfaces', description: 'Intuitive interfaces for machine learning and AI products.' },
      { title: 'Data Visualization', description: 'Clear, actionable visualizations for complex data.' },
      { title: 'Conversational Design', description: 'Chatbot and voice interface design.' },
      { title: 'Dashboard Design', description: 'AI-powered analytics and monitoring dashboards.' },
      { title: 'Explainable AI', description: 'Making AI decisions transparent and understandable.' },
      { title: 'Automation UX', description: 'Designing seamless automated workflows.' },
    ],
    process: [
      { step: '01', title: 'AI Audit', description: 'Understanding AI capabilities and limitations.' },
      { step: '02', title: 'User Research', description: 'How users interact with AI systems.' },
      { step: '03', title: 'Interaction Design', description: 'Designing human-AI interactions.' },
      { step: '04', title: 'Visual Design', description: 'Creating clear, trustworthy interfaces.' },
      { step: '05', title: 'Prototyping', description: 'Testing AI interactions with users.' },
      { step: '06', title: 'Iteration', description: 'Refining based on AI behavior and feedback.' },
    ],
    benefits: [
      'User trust in AI systems',
      'Reduced complexity',
      'Higher adoption rates',
      'Clear AI transparency',
      'Efficient workflows',
      'Competitive advantage',
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop', title: 'AI Assistant', category: 'Productivity' },
      { image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop', title: 'ML Dashboard', category: 'Analytics' },
      { image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop', title: 'Chatbot Interface', category: 'Support' },
      { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', title: 'Predictive Analytics', category: 'Business' },
    ],
    faqs: [
      { question: 'How do you make AI understandable to users?', answer: 'We focus on explainable AI principles, providing clear feedback, transparency, and user control over AI actions.' },
      { question: 'Can you design conversational interfaces?', answer: 'Yes, we specialize in chatbot and voice interface design, creating natural conversational flows.' },
      { question: 'How do you handle AI errors in the design?', answer: 'We design graceful error handling, clear feedback, and easy recovery paths when AI makes mistakes.' },
    ],
  },
  'saas': {
    title: 'SaaS Design',
    subtitle: 'Enterprise-Grade Product Design',
    description: 'Enterprise-grade SaaS product design that scales. We create intuitive dashboards and workflows that boost productivity and user satisfaction.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    features: [
      { title: 'Dashboard Design', description: 'Data-rich dashboards that provide actionable insights.' },
      { title: 'Admin Panels', description: 'Powerful admin interfaces for complex operations.' },
      { title: 'User Onboarding', description: 'Smooth onboarding flows that drive activation.' },
      { title: 'Analytics UI', description: 'Visualizations that make data meaningful.' },
      { title: 'B2B Interfaces', description: 'Professional interfaces for business users.' },
      { title: 'Multi-tenant Design', description: 'Scalable designs for multiple organizations.' },
    ],
    process: [
      { step: '01', title: 'Product Audit', description: 'Analyzing existing product and competitors.' },
      { step: '02', title: 'User Journey', description: 'Mapping key workflows and pain points.' },
      { step: '03', title: 'IA & Navigation', description: 'Organizing features and information.' },
      { step: '04', title: 'Component Design', description: 'Building reusable UI components.' },
      { step: '05', title: 'Design System', description: 'Creating scalable design documentation.' },
      { step: '06', title: 'Implementation', description: 'Supporting development and iteration.' },
    ],
    benefits: [
      'Improved user productivity',
      'Reduced support tickets',
      'Higher user retention',
      'Faster feature adoption',
      'Consistent experience',
      'Scalable design system',
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', title: 'Analytics Platform', category: 'Data' },
      { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', title: 'CRM Dashboard', category: 'Sales' },
      { image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop', title: 'Project Management', category: 'Productivity' },
      { image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop', title: 'HR Platform', category: 'Enterprise' },
    ],
    faqs: [
      { question: 'How do you handle complex SaaS features?', answer: 'We break down complexity through progressive disclosure, smart defaults, and contextual guidance.' },
      { question: 'Do you create design systems?', answer: 'Yes, we build comprehensive design systems with components, patterns, and documentation for scalability.' },
      { question: 'Can you redesign existing SaaS products?', answer: 'Absolutely! We specialize in SaaS redesigns, improving UX while maintaining user familiarity.' },
    ],
  },
  'game-ui': {
    title: 'Game UI/UX',
    subtitle: 'Immersive Gaming Interfaces',
    description: 'Immersive game interface design that enhances player experience. We create engaging HUDs, menus, and in-game elements that keep players engaged.',
    heroImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=600&fit=crop',
    features: [
      { title: 'HUD Design', description: 'Heads-up displays that inform without overwhelming.' },
      { title: 'Menu Systems', description: 'Intuitive navigation and settings interfaces.' },
      { title: 'Character UI', description: 'Character sheets, inventories, and stats displays.' },
      { title: 'Inventory Design', description: 'Easy-to-use item management systems.' },
      { title: 'Achievement Systems', description: 'Rewarding progression and achievement displays.' },
      { title: 'Tutorial Design', description: 'Engaging onboarding that teaches through play.' },
    ],
    process: [
      { step: '01', title: 'Game Analysis', description: 'Understanding game mechanics and genre.' },
      { step: '02', title: 'Player Research', description: 'Studying target player preferences.' },
      { step: '03', title: 'Concept Art', description: 'Visual style exploration and mood boards.' },
      { step: '04', title: 'UI Design', description: 'Creating game interface elements.' },
      { step: '05', title: 'Animation', description: 'Adding motion and feedback.' },
      { step: '06', title: 'Integration', description: 'Working with game engines.' },
    ],
    benefits: [
      'Enhanced player immersion',
      'Better game feel',
      'Reduced player frustration',
      'Higher retention rates',
      'Consistent art direction',
      'Memorable experiences',
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop', title: 'RPG Interface', category: 'RPG' },
      { image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b34?w=400&h=300&fit=crop', title: 'FPS HUD', category: 'Shooter' },
      { image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f897a?w=400&h=300&fit=crop', title: 'Strategy Game', category: 'Strategy' },
      { image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop', title: 'Mobile Game', category: 'Casual' },
    ],
    faqs: [
      { question: 'Which game engines do you support?', answer: 'We design for Unity, Unreal Engine, and other popular engines, providing assets in the required formats.' },
      { question: 'Do you create animated UI elements?', answer: 'Yes, we create animated UI with state transitions, feedback animations, and visual effects.' },
      { question: 'Can you match an existing art style?', answer: 'Absolutely! We can work within established art directions or help develop new visual styles.' },
    ],
  },
  'framer': {
    title: 'Framer Design',
    subtitle: 'Interactive No-Code Websites',
    description: 'Interactive websites built with Framer. We leverage advanced animations and interactions to create memorable, high-converting experiences.',
    heroImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop',
    features: [
      { title: 'Framer Sites', description: 'Custom Framer websites with advanced features.' },
      { title: 'Animations', description: 'Smooth, performant scroll and trigger animations.' },
      { title: 'Interactions', description: 'Hover effects, transitions, and micro-interactions.' },
      { title: 'CMS Setup', description: 'Dynamic content management and collections.' },
      { title: 'Custom Components', description: 'Reusable, interactive component development.' },
      { title: 'Responsive Design', description: 'Pixel-perfect layouts across all breakpoints.' },
    ],
    process: [
      { step: '01', title: 'Planning', description: 'Defining site goals and content structure.' },
      { step: '02', title: 'Design', description: 'Creating visual designs in Framer.' },
      { step: '03', title: 'Interactions', description: 'Adding animations and effects.' },
      { step: '04', title: 'CMS Setup', description: 'Configuring content management.' },
      { step: '05', title: 'Testing', description: 'Cross-device and performance testing.' },
      { step: '06', title: 'Launch', description: 'Deployment and training.' },
    ],
    benefits: [
      'No code maintenance',
      'Advanced animations',
      'Fast page loads',
      'Easy content updates',
      'SEO optimized',
      'Quick iterations',
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop', title: 'Agency Site', category: 'Creative' },
      { image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&h=300&fit=crop', title: 'Product Launch', category: 'Marketing' },
      { image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop', title: 'Portfolio', category: 'Personal' },
      { image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop', title: 'Startup Site', category: 'Tech' },
    ],
    faqs: [
      { question: 'Why choose Framer over other platforms?', answer: 'Framer offers superior animation capabilities, excellent performance, and designer-friendly workflows.' },
      { question: 'Can I update content myself?', answer: 'Yes! Framer CMS makes it easy to update text, images, and collections without touching the design.' },
      { question: 'Is Framer good for SEO?', answer: 'Absolutely! Framer generates clean, semantic HTML with excellent Core Web Vitals scores.' },
    ],
  },
  'webflow': {
    title: 'Webflow Design',
    subtitle: 'Professional No-Code Development',
    description: 'Professional Webflow websites with custom CMS integrations. We build scalable, maintainable sites without code limitations.',
    heroImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop',
    features: [
      { title: 'Webflow Development', description: 'Custom Webflow sites with clean, organized structure.' },
      { title: 'CMS Collections', description: 'Dynamic content with custom collection structures.' },
      { title: 'E-commerce', description: 'Webflow Commerce setup and customization.' },
      { title: 'Animations', description: 'Scroll-based and interaction animations.' },
      { title: 'SEO Setup', description: 'Technical SEO and metadata configuration.' },
      { title: 'Integrations', description: 'Third-party tools and API integrations.' },
    ],
    process: [
      { step: '01', title: 'Strategy', description: 'Defining project scope and requirements.' },
      { step: '02', title: 'Design', description: 'Creating designs in Figma or directly in Webflow.' },
      { step: '03', title: 'Build', description: 'Developing the site in Webflow.' },
      { step: '04', title: 'CMS & Content', description: 'Setting up collections and content.' },
      { step: '05', title: 'Optimization', description: 'Performance and SEO optimization.' },
      { step: '06', title: 'Launch', description: 'Deployment, DNS setup, and training.' },
    ],
    benefits: [
      'No developer dependency',
      'Visual editing',
      'Powerful CMS',
      'Built-in hosting',
      'Great performance',
      'Easy maintenance',
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop', title: 'Corporate Site', category: 'Business' },
      { image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop', title: 'Blog Platform', category: 'Media' },
      { image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop', title: 'E-commerce', category: 'Retail' },
      { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', title: 'Landing Page', category: 'Marketing' },
    ],
    faqs: [
      { question: 'Do I need coding knowledge to manage a Webflow site?', answer: 'No! Webflow\'s visual editor makes it easy to update content and even make design changes.' },
      { question: 'Can Webflow handle e-commerce?', answer: 'Yes, Webflow Commerce is great for small to medium-sized stores with full customization control.' },
      { question: 'How does Webflow hosting work?', answer: 'Webflow includes fast, secure hosting with automatic SSL, CDN, and easy domain setup.' },
    ],
  },
  'shopify': {
    title: 'Shopify Design',
    subtitle: 'E-Commerce Excellence',
    description: 'Custom Shopify store designs that drive sales. We create beautiful, conversion-optimized e-commerce experiences that turn visitors into customers.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
    features: [
      { title: 'Theme Customization', description: 'Custom theme development and modifications.' },
      { title: 'Product Pages', description: 'High-converting product page designs.' },
      { title: 'Checkout Flow', description: 'Optimized checkout experience.' },
      { title: 'App Integration', description: 'Third-party app setup and customization.' },
      { title: 'Brand Identity', description: 'Cohesive visual branding throughout.' },
      { title: 'Mobile Commerce', description: 'Mobile-first shopping experiences.' },
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Analyzing current store and competitors.' },
      { step: '02', title: 'Strategy', description: 'Planning store structure and features.' },
      { step: '03', title: 'Design', description: 'Creating custom store designs.' },
      { step: '04', title: 'Development', description: 'Building and customizing themes.' },
      { step: '05', title: 'Setup', description: 'Product, payment, and shipping setup.' },
      { step: '06', title: 'Launch', description: 'Go-live and optimization.' },
    ],
    benefits: [
      'Higher conversion rates',
      'Professional brand image',
      'Mobile-optimized',
      'Easy management',
      'Scalable platform',
      'Integrated payments',
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', title: 'Fashion Store', category: 'Fashion' },
      { image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop', title: 'Electronics', category: 'Tech' },
      { image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop', title: 'Home Goods', category: 'Lifestyle' },
      { image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=300&fit=crop', title: 'Beauty Store', category: 'Beauty' },
    ],
    faqs: [
      { question: 'Do you work with existing Shopify stores?', answer: 'Yes! We can redesign and optimize existing stores or create new ones from scratch.' },
      { question: 'Can you integrate apps with my store?', answer: 'Absolutely! We integrate and customize popular Shopify apps for reviews, subscriptions, and more.' },
      { question: 'How do you improve conversions?', answer: 'Through UX optimization, clear CTAs, trust signals, optimized checkout, and A/B testing.' },
    ],
  },
  'branding': {
    title: 'Logo and Branding',
    subtitle: 'Memorable Brand Identities',
    description: 'Complete brand identity design that tells your story. From logos to brand guidelines, we create memorable visual identities that resonate.',
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=600&fit=crop',
    features: [
      { title: 'Logo Design', description: 'Unique, versatile logos that represent your brand.' },
      { title: 'Brand Guidelines', description: 'Comprehensive brand books and style guides.' },
      { title: 'Visual Identity', description: 'Color palettes, typography, and visual elements.' },
      { title: 'Brand Strategy', description: 'Positioning, messaging, and brand voice.' },
      { title: 'Collateral Design', description: 'Business cards, stationery, and marketing materials.' },
      { title: 'Social Media', description: 'Branded templates and social media assets.' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Understanding your brand story and goals.' },
      { step: '02', title: 'Research', description: 'Market and competitor analysis.' },
      { step: '03', title: 'Concepts', description: 'Initial logo concepts and directions.' },
      { step: '04', title: 'Refinement', description: 'Developing chosen direction.' },
      { step: '05', title: 'System', description: 'Building complete brand identity.' },
      { step: '06', title: 'Delivery', description: 'Final files and brand guidelines.' },
    ],
    benefits: [
      'Strong brand recognition',
      'Professional credibility',
      'Consistent messaging',
      'Competitive differentiation',
      'Customer trust',
      'Marketing efficiency',
    ],
    showcase: [
      { image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop', title: 'Tech Startup', category: 'Tech' },
      { image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop', title: 'Restaurant Brand', category: 'Food' },
      { image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop', title: 'Fashion Label', category: 'Fashion' },
      { image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop', title: 'Fitness Brand', category: 'Health' },
    ],
    faqs: [
      { question: 'How many logo concepts do you provide?', answer: 'We typically provide 3-5 initial concepts, then refine the chosen direction through multiple iterations.' },
      { question: 'What files do I receive?', answer: 'You get all vector files (AI, SVG, EPS), raster files (PNG, JPG), and a comprehensive brand guidelines PDF.' },
      { question: 'Can you rebrand an existing company?', answer: 'Yes! We specialize in rebranding, carefully evolving your identity while maintaining brand equity.' },
    ],
  },
};

const otherServices = [
  { id: 'ui-ux', title: 'UI/UX Design' },
  { id: 'web-design', title: 'Web Design' },
  { id: 'mobile-app', title: 'Mobile App' },
  { id: 'ai-product', title: 'AI Product' },
  { id: 'saas', title: 'SaaS Design' },
  { id: 'game-ui', title: 'Game UI/UX' },
  { id: 'framer', title: 'Framer' },
  { id: 'webflow', title: 'Webflow' },
  { id: 'shopify', title: 'Shopify' },
  { id: 'branding', title: 'Branding' },
];

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId || ''] || servicesData['ui-ux'];
  
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: showcaseRef, isVisible: showcaseVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const filteredServices = otherServices.filter(s => s.id !== serviceId);

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
              className={`transition-all duration-700 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-primary">{service.title}</span>
              </nav>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                    {service.subtitle}
                  </span>
                  <h1 className="text-display-lg md:text-display-xl text-white mb-6">
                    {service.title}
                  </h1>
                  <p className="text-lg text-white/60 mb-8">
                    {service.description}
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-violet hover:from-violet hover:to-primary">
                      Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src={service.heroImage} 
                    alt={service.title}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div 
              ref={featuresRef}
              className={`text-center mb-16 transition-all duration-700 ${
                featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                What We Offer
              </span>
              <h2 className="text-display-md mb-4">
                Our <span className="text-violet italic">{service.title}</span> Services
              </h2>
            </div>

            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {service.features.map((feature, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-dark py-20 lg:py-32">
          <div className="container">
            <div 
              ref={processRef}
              className={`text-center mb-16 transition-all duration-700 ${
                processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Our Process
              </span>
              <h2 className="text-display-md text-white mb-4">
                How We <span className="text-violet italic">Work</span>
              </h2>
            </div>

            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
              processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {service.process.map((step, i) => (
                <div key={i} className="relative p-6 bg-dark-surface rounded-2xl border border-white/10">
                  <span className="text-5xl font-bold text-primary/20 absolute top-4 right-4">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Benefits
                </span>
                <h2 className="text-display-md mb-6">
                  Why Choose Our <span className="text-violet italic">{service.title}</span>
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-accent" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {service.showcase.slice(0, 4).map((item, i) => (
                  <img 
                    key={i}
                    src={item.image} 
                    alt={item.title}
                    className={`rounded-xl shadow-lg ${i === 1 ? 'mt-8' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="section-dark py-20 lg:py-32">
          <div className="container">
            <div 
              ref={showcaseRef}
              className={`text-center mb-16 transition-all duration-700 ${
                showcaseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Our Work
              </span>
              <h2 className="text-display-md text-white mb-4">
                Recent <span className="text-violet italic">Projects</span>
              </h2>
            </div>

            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${
              showcaseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {service.showcase.map((item, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-primary text-sm">{item.category}</span>
                    <h3 className="text-white font-bold">{item.title}</h3>
                  </div>
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
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  FAQ
                </span>
                <h2 className="text-display-md mb-4">
                  Common <span className="text-violet italic">Questions</span>
                </h2>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-border/50">
                    <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="section-dark py-20">
          <div className="container">
            <h2 className="text-display-sm text-white text-center mb-8">
              Explore Other <span className="text-violet italic">Services</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {filteredServices.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="px-5 py-2.5 rounded-full bg-white/10 text-white border border-white/20 hover:bg-primary hover:border-primary transition-all"
                >
                  {s.title}
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

export default ServiceDetail;
