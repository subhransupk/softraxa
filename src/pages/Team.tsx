import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FooterCta } from '@/components/FooterCta';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Linkedin, Twitter, Dribbble } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Abdullah Al Noman',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Visionary leader with 10+ years in design industry.',
    social: { linkedin: '#', twitter: '#', dribbble: '#' },
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'Award-winning designer specializing in user experience.',
    social: { linkedin: '#', twitter: '#', dribbble: '#' },
  },
  {
    name: 'Michael Roberts',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Full-stack developer with passion for clean code.',
    social: { linkedin: '#', twitter: '#', dribbble: '#' },
  },
  {
    name: 'Emily Davis',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    bio: 'Creative mind behind our most innovative projects.',
    social: { linkedin: '#', twitter: '#', dribbble: '#' },
  },
  {
    name: 'James Wilson',
    role: 'UX Researcher',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    bio: 'Data-driven researcher focused on user behavior.',
    social: { linkedin: '#', twitter: '#', dribbble: '#' },
  },
  {
    name: 'Lisa Park',
    role: 'UI Designer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    bio: 'Pixel-perfect designer with eye for detail.',
    social: { linkedin: '#', twitter: '#', dribbble: '#' },
  },
  {
    name: 'David Kim',
    role: 'Motion Designer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    bio: 'Bringing designs to life with stunning animations.',
    social: { linkedin: '#', twitter: '#', dribbble: '#' },
  },
  {
    name: 'Anna Martinez',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    bio: 'Ensuring every project runs smoothly and on time.',
    social: { linkedin: '#', twitter: '#', dribbble: '#' },
  },
];

const Team = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef: teamRef, visibleItems: teamVisible } = useStaggeredAnimation(teamMembers.length);
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
                <span className="text-primary">Team</span>
              </nav>
              
              <h1 className="text-display-lg md:text-display-xl text-white mb-6">
                Meet the <span className="text-violet italic">Monk</span> family
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                A talented team of designers, developers, and strategists working together 
                to create exceptional digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div ref={teamRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`group relative bg-white rounded-2xl overflow-hidden border border-border/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                    teamVisible[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social Links */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href={member.social.dribbble} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <Dribbble className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="section-dark py-20 lg:py-32">
          <div className="container">
            <div 
              ref={ctaRef}
              className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Join Us
              </span>
              <h2 className="text-display-md text-white mb-6">
                Want to be a <span className="text-violet italic">Monk</span>?
              </h2>
              <p className="text-lg text-white/60 mb-8">
                We're always looking for talented individuals to join our team. 
                Check out our open positions and start your journey with us.
              </p>
              <Link to="/career">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-green-accent text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30">
                  View Open Positions
                </button>
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

export default Team;
