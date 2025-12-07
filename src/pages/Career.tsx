import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Clock, Briefcase, ArrowRight, Heart, Zap, Users, Coffee, Laptop, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const perks = [
  { icon: Heart, title: 'Health Insurance', description: 'Comprehensive health coverage for you and family' },
  { icon: Laptop, title: 'Remote First', description: 'Work from anywhere in the world' },
  { icon: Coffee, title: 'Unlimited PTO', description: 'Take time off when you need it' },
  { icon: Zap, title: 'Learning Budget', description: '$2,000 annual budget for growth' },
  { icon: Users, title: 'Team Retreats', description: 'Annual team gatherings worldwide' },
  { icon: Plane, title: 'Travel Stipend', description: 'Quarterly travel allowance' },
];

const openPositions = [
  {
    id: 1,
    title: 'Senior UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead design projects and mentor junior designers while creating exceptional user experiences.',
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable web applications using React, Node.js, and modern technologies.',
  },
  {
    id: 3,
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco',
    type: 'Full-time',
    description: 'Drive product strategy and roadmap for our design subscription service.',
  },
  {
    id: 4,
    title: 'Motion Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create stunning animations and micro-interactions for web and mobile projects.',
  },
  {
    id: 5,
    title: 'UX Researcher',
    department: 'Design',
    location: 'London',
    type: 'Full-time',
    description: 'Conduct user research and translate insights into actionable design recommendations.',
  },
  {
    id: 6,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead marketing initiatives and grow our brand presence globally.',
  },
];

const Career = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef: perksRef, visibleItems: perksVisible } = useStaggeredAnimation(perks.length);
  const { containerRef: jobsRef, visibleItems: jobsVisible } = useStaggeredAnimation(openPositions.length);
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
              ref={headerRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-primary">Career</span>
              </nav>
              
              <h1 className="text-display-lg md:text-display-xl text-white mb-6">
                Build your <span className="text-violet italic">future</span> with us
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                Work with top global brands, grow your skills, and be part of a team that's 
                shaping the future of digital design.
              </p>
            </div>
          </div>
        </section>

        {/* Perks Section */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Why Join Us
              </span>
              <h2 className="text-display-md mb-4">
                Perks & <span className="text-violet italic">Benefits</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe happy teams create the best work. Here's what we offer to keep you thriving.
              </p>
            </div>

            <div ref={perksRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <div
                  key={perk.title}
                  className={`p-6 rounded-2xl bg-white border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-700 ${
                    perksVisible[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <perk.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{perk.title}</h3>
                  <p className="text-muted-foreground">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-dark py-20 lg:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Open Positions
              </span>
              <h2 className="text-display-md text-white mb-4">
                Find your <span className="text-violet italic">role</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Explore our current openings and find the perfect opportunity to grow your career.
              </p>
            </div>

            <div ref={jobsRef} className="max-w-4xl mx-auto space-y-4">
              {openPositions.map((job, index) => (
                <div
                  key={job.id}
                  className={`group bg-dark-surface border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-700 ${
                    jobsVisible[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button className="bg-white/10 hover:bg-primary text-white border border-white/20 hover:border-primary group/btn">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div 
              ref={ctaRef}
              className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-display-md mb-6">
                Don't see the right <span className="text-violet italic">role</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented individuals. Send us your resume and 
                we'll reach out when a suitable position opens up.
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl">
                  Send Your Resume
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <FooterCta />
      </main>
      <GlobalFooter />
    </div>
  );
};

export default Career;
