import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Target, Heart, Zap, Award, Users, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Heart,
    title: 'Passion First',
    description: 'We pour our heart into every pixel, creating designs that truly resonate with users.',
    color: 'bg-pastel-coral',
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Every design decision is backed by data and aimed at achieving measurable outcomes.',
    color: 'bg-pastel-blue',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of trends, bringing fresh perspectives to every project we undertake.',
    color: 'bg-pastel-yellow',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as an extension of your team, fostering open communication throughout.',
    color: 'bg-pastel-teal',
  },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'Started with a vision to transform digital experiences' },
  { year: '2019', title: 'First 50 Clients', description: 'Reached our first major milestone in client partnerships' },
  { year: '2020', title: 'Global Expansion', description: 'Extended services to clients across 20+ countries' },
  { year: '2021', title: '100+ Projects', description: 'Completed over 100 successful design projects' },
  { year: '2022', title: 'Award Winning', description: 'Recognized with multiple industry design awards' },
  { year: '2023', title: '500+ Projects', description: 'Reached 500+ successfully delivered projects' },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '20+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { containerRef: valuesRef, visibleItems: valuesVisible } = useStaggeredAnimation(values.length);
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

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
                <span className="text-primary">About</span>
              </nav>
              
              <h1 className="text-display-lg md:text-display-xl text-white mb-6">
                The journey of{' '}
                <span className="text-violet italic">Design Monks</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                We're a team of passionate designers and developers dedicated to creating 
                digital experiences that drive real business results.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div 
              ref={storyRef}
              className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
                storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Our Story
                </span>
                <h2 className="text-display-md mb-6">
                  From vision to <span className="text-violet italic">reality</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Design Monks was founded with a simple mission: to bridge the gap between 
                  beautiful design and measurable business outcomes. We believe that great 
                  design isn't just about aesthetics—it's about creating experiences that 
                  convert visitors into customers.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Today, we've grown into a global team of talented designers, developers, 
                  and strategists who share a common passion for pushing creative boundaries 
                  while delivering results that matter.
                </p>
                <Link to="/team">
                  <Button className="bg-primary hover:bg-primary/90 text-white group">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-pastel-purple to-pastel-blue p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-green-accent rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-white font-display font-bold text-4xl">D</span>
                    </div>
                    <p className="font-display font-bold text-2xl text-foreground">Design Monks</p>
                    <p className="text-muted-foreground mt-2">Est. 2018</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Award Winning</p>
                      <p className="text-sm text-muted-foreground">Design Studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-dark py-20 lg:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Our Values
              </span>
              <h2 className="text-display-md text-white mb-4">
                What drives <span className="text-violet italic">us</span>
              </h2>
            </div>
            
            <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`p-8 rounded-2xl ${value.color} transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                    valuesVisible[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Journey
              </span>
              <h2 className="text-display-md mb-4">
                Milestones along the <span className="text-violet italic">way</span>
              </h2>
            </div>

            <div 
              ref={timelineRef}
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border" />
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center gap-8 mb-12 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-1">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-dark py-20">
          <div className="container">
            <div 
              ref={statsRef}
              className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-white/60">{stat.label}</p>
                </div>
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

export default About;
