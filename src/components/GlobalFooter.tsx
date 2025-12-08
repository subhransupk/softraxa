import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Dribbble, Send, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const quickLinks = [
  { label: 'Work', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/career' },
];

const resourceLinks = [
  { label: 'Blog', href: '/blogs' },
  { label: 'Case Studies', href: '/projects' },
  { label: 'Brand Guidelines', href: '/brand-guidelines' },
  { label: 'Help Center', href: '/help-center' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookies', href: '/cookies' },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Dribbble, href: '#', label: 'Dribbble' },
];

export const GlobalFooter = () => {
  return (
    <footer className="relative bg-dark text-white pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden w-full">
      {/* Background Ambience - Hidden on mobile to prevent overflow risks */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute -top-24 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/5 via-transparent to-transparent opacity-50" />
      </div>

      {/* Massive Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] overflow-hidden w-full flex justify-center">
        <h1 className="text-[15vw] md:text-[18vw] font-bold leading-none tracking-tighter text-white whitespace-nowrap bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent transform translate-y-1/4">
          SOFTRAXA
        </h1>
      </div>

      <div className="container relative z-10 px-6 md:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-8 mb-16 md:mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <Link to="/" className="inline-block group">
              <img
                src="/logo1.png"
                alt="Softraxa"
                className="h-8 md:h-10 w-auto brightness-0 invert group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
              />
            </Link>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md font-light">
              We build digital products that define the future. Combining strategy, design, and technology to help brands grow in the digital age.
            </p>

            {/* Newsletter */}
            <div className="max-w-md pt-2 md:pt-4 space-y-4">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">Stay in the loop</h4>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 w-full text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all font-light pr-14 text-sm md:text-base"
                />
                <Button className="absolute right-2 top-2 bottom-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl px-3 w-10 h-auto flex items-center justify-center shadow-lg shadow-violet-600/20 group-hover:scale-105 transition-all duration-300">
                  <Send className="w-4 h-4 ml-0.5" />
                </Button>
              </div>
              <p className="text-[10px] md:text-xs text-white/30 pl-1">
                Join 10,000+ designers and developers. No spam, ever.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 text-white/40">Company</h4>
              <ul className="space-y-3 md:space-y-4">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-all duration-300 text-sm md:text-base font-medium flex items-center group w-fit"
                    >
                      <span className="relative overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                        <span className="absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-violet-400 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{link.label}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 text-white/40">Resources</h4>
              <ul className="space-y-3 md:space-y-4">
                {resourceLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-all duration-300 text-sm md:text-base font-medium flex items-center group w-fit"
                    >
                      <span className="relative overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                        <span className="absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-violet-400 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{link.label}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3 space-y-6 md:space-y-8">
            <div>
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 text-white/40">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:border-violet-500/30 hover:text-violet-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-violet-600/90 to-indigo-600/90 text-white overflow-hidden group hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-600/20 transition-all duration-300 cursor-pointer border border-white/10 backdrop-blur-xl w-full">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <h5 className="font-bold text-lg md:text-xl mb-2 font-display">Start a Project</h5>
                <p className="text-white/80 text-sm mb-4 leading-relaxed font-light">
                  Ready to turn your ideas into reality? Let's build something amazing.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold bg-white/10 w-fit px-3 py-1.5 rounded-lg group-hover:bg-white/20 transition-colors">
                  Let's Talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
          <p className="text-white/30 text-xs md:text-sm font-light flex items-center justify-center md:justify-start gap-1.5 order-2 md:order-1">
            © {new Date().getFullYear()} Softraxa. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 order-1 md:order-2">
            {legalLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-white/40 hover:text-white text-xs md:text-sm transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-violet-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
