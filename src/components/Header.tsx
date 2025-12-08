import { useState } from 'react';
import { Menu, MessageCircle, X, ChevronUp, Sparkles, ArrowRight, Layers, Palette, Monitor, Smartphone, Globe, Briefcase, FileText, User, Mail, Grid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const serviceMenuItems = [
  { label: 'UI/UX Design', description: 'User-centric digital experiences.', href: '/services#ui-ux', icon: Layers },
  { label: 'Web Design', description: 'Visually stunning websites.', href: '/services#web-design', icon: Monitor },
  { label: 'Webflow Dev', description: 'Responsive, no-code solutions.', href: '/services#webflow', icon: Globe },
  { label: 'Framer Magic', description: 'Interactive, high-fidelity sites.', href: '/services#framer', icon: Sparkles },
  { label: 'Brand Identity', description: 'Memorable visual systems.', href: '/services#branding', icon: Palette },
  { label: 'SaaS Product', description: 'Complex interfaces made simple.', href: '/services#saas', icon: Grid },
];

const moreMenuItems = [
  { label: 'Our Story', description: 'The journey of Softraxa', href: '/about', icon: User },
  { label: 'Case Studies', description: 'Real results for real clients', href: '/projects', icon: Briefcase },
  { label: 'Insights', description: 'Thought leadership & news', href: '/blogs', icon: FileText },
  { label: 'Get in Touch', description: 'Start your new project', href: '/contact', icon: Mail },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const location = useLocation();

  const closeAllMenus = () => {
    setIsMoreMenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  return (
    <>
      {/* Top Center Logo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300 hover:opacity-80">
        <Link to="/">
          <img src="/logo1.png" alt="Softraxa" className="h-10 object-contain brightness-0 invert drop-shadow-lg" />
        </Link>
      </div>

      {/* Services Mega Menu Dropdown */}
      {isServicesMenuOpen && (
        <div
          className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[60] animate-fade-in origin-bottom"
          onMouseLeave={() => setIsServicesMenuOpen(false)}
        >
          <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-2 w-[800px] overflow-hidden">
            <div className="grid grid-cols-12 gap-0">
              {/* Left Links */}
              <div className="col-span-8 grid grid-cols-2 gap-2 p-4">
                {serviceMenuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={closeAllMenus}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-violet/20 group-hover:border-violet/30 transition-colors">
                      <item.icon className="w-5 h-5 text-white/70 group-hover:text-violet transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-violet transition-colors">{item.label}</div>
                      <div className="text-sm text-white/40 mt-1">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Right Feature */}
              <div className="col-span-4 bg-white/5 rounded-2xl p-6 m-2 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet/20 border border-violet/30 text-[10px] font-bold text-violet mb-4 uppercase tracking-wider">
                    Featured
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight">Design Systems <br />that Scale</h3>
                  <p className="text-sm text-white/50">Build consistent products faster with our atomic design approach.</p>
                </div>

                <Link to="/services" onClick={closeAllMenus} className="relative z-10 flex items-center gap-2 text-sm font-bold text-white mt-8 group/link">
                  Explore Services <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* More Mega Menu Dropdown */}
      {isMoreMenuOpen && (
        <div
          className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[60] animate-fade-in origin-bottom"
          onMouseLeave={() => setIsMoreMenuOpen(false)}
        >
          <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-2 w-[600px] overflow-hidden">
            <div className="grid grid-cols-2 gap-2 p-2">
              {moreMenuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeAllMenus}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-white group-hover:text-green-accent transition-colors">{item.label}</div>
                    <div className="text-sm text-white/40">{item.description}</div>
                  </div>
                  <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white/50" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Floating Bottom Navigation with Loop Animation */}
      <nav className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-50 rounded-full p-[1px] overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)]">
        {/* Spinning Boarder Gradient */}
        <div className="absolute inset-[-500%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#8b5cf6_50%,#0000_100%)]" />

        {/* Content Container */}
        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-full px-2 py-1.5 flex items-center gap-1 h-full w-full">
          <div className="px-1 flex items-center gap-1">
            <Link
              to="/projects"
              onClick={closeAllMenus}
              className={`relative text-sm font-medium transition-all duration-300 px-6 py-3 rounded-full hover:bg-white/10 ${location.pathname === '/projects' ? 'text-white bg-white/10 shadow-inner shadow-white/5' : 'text-white/70 hover:text-white'
                }`}
            >
              Projects
            </Link>

            <button
              onMouseEnter={() => { closeAllMenus(); setIsServicesMenuOpen(true); }}
              onClick={() => { closeAllMenus(); setIsServicesMenuOpen(!isServicesMenuOpen); }}
              className={`relative text-sm font-medium transition-all duration-300 px-6 py-3 rounded-full hover:bg-white/10 ${isServicesMenuOpen || location.pathname.includes('/services') ? 'text-white bg-white/10 shadow-inner shadow-white/5' : 'text-white/70 hover:text-white'
                }`}
            >
              Services
            </button>

            <Link to="/contact" onClick={closeAllMenus}>
              <Button className="mx-2 bg-white text-dark hover:bg-white/90 font-semibold px-6 py-5 h-auto rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300">
                <MessageCircle className="w-4 h-4 mr-2" />
                Let's Talk
              </Button>
            </Link>

            <Link
              to="/pricing"
              onClick={closeAllMenus}
              className={`relative text-sm font-medium transition-all duration-300 px-6 py-3 rounded-full hover:bg-white/10 ${location.pathname === '/pricing' ? 'text-white bg-white/10 shadow-inner shadow-white/5' : 'text-white/70 hover:text-white'
                }`}
            >
              Pricing
            </Link>

            <button
              onMouseEnter={() => { closeAllMenus(); setIsMoreMenuOpen(true); }}
              onClick={() => { closeAllMenus(); setIsMoreMenuOpen(!isMoreMenuOpen); }}
              className={`relative text-sm font-medium transition-all duration-300 px-6 py-3 rounded-full hover:bg-white/10 flex items-center gap-1 ${isMoreMenuOpen ? 'text-white bg-white/10 shadow-inner shadow-white/5' : 'text-white/70 hover:text-white'
                }`}
            >
              More
              <ChevronUp className={`w-3 h-3 transition-transform duration-300 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Glass with Loop Animation */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 rounded-2xl p-[1px] overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)]">
        {/* Spinning Boarder Gradient */}
        <div className="absolute inset-[-500%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#8b5cf6_50%,#0000_100%)]" />

        {/* Content Container */}
        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl h-full w-full p-1.5">
          <div className="flex items-center justify-between px-2">
            <Link to="/projects" className={`flex flex-col items-center gap-1 px-4 py-3 transition-colors rounded-xl ${location.pathname === '/projects' ? 'bg-white/10 text-white' : 'text-white/60'}`}>
              <Briefcase className="w-5 h-5" />
            </Link>
            <Link to="/services" className={`flex flex-col items-center gap-1 px-4 py-3 transition-colors rounded-xl ${location.pathname === '/services' ? 'bg-white/10 text-white' : 'text-white/60'}`}>
              <Grid className="w-5 h-5" />
            </Link>

            <Link to="/contact">
              <div className="bg-white text-dark p-3.5 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <MessageCircle className="w-5 h-5" />
              </div>
            </Link>

            <Link to="/pricing" className={`flex flex-col items-center gap-1 px-4 py-3 transition-colors rounded-xl ${location.pathname === '/pricing' ? 'bg-white/10 text-white' : 'text-white/60'}`}>
              <Smartphone className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`flex flex-col items-center gap-1 px-4 py-3 transition-colors rounded-xl ${isMobileMenuOpen ? 'bg-white/10 text-white' : 'text-white/60'}`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Bottom Sheet */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute bottom-28 left-4 right-4 bg-[#111] border border-white/10 rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-10 duration-300"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Menu</span>
              <div className="w-12 h-1 bg-white/10 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {moreMenuItems.concat(serviceMenuItems.slice(0, 4)).map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors active:scale-95 duration-200"
                >
                  <link.icon className="w-6 h-6 text-white mb-3" />
                  <span className="block font-medium text-white text-sm">{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 text-center">
              <p className="text-white/30 text-xs">© 2024 Softraxa. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
