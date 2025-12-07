import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Facebook, ArrowRight, Dribbble, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  { label: 'Brand Guidelines', href: '#' },
  { label: 'Help Center', href: '#' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookies', href: '#' },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Dribbble, href: '#', label: 'Dribbble' },
];

export const GlobalFooter = () => {
  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden">
      {/* Massive Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[15vw] font-bold leading-none tracking-tighter text-white whitespace-nowrap">
          SOFTRAXA
        </h1>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block">
              <img src="/logo1.png" alt="Softraxa" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              We build digital products that define the future. Combining strategy, design, and technology to help brands grow.
            </p>

            {/* Newsletter */}
            <div className="max-w-md pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/80">Stay in the loop</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full text-white placeholder:text-white/30 focus:outline-none focus:border-violet/50 transition-colors"
                />
                <Button className="bg-violet hover:bg-violet/90 text-white rounded-xl px-4">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 col-span-6">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/40">Company</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-base font-medium flex items-center group"
                  >
                    <span className="relative overflow-hidden">
                      <span className="block group-hover:-translate-y-full transition-transform duration-300">{link.label}</span>
                      <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-violet">{link.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 col-span-6">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/40">Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-base font-medium flex items-center group"
                  >
                    <span className="relative overflow-hidden">
                      <span className="block group-hover:-translate-y-full transition-transform duration-300">{link.label}</span>
                      <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-violet">{link.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 col-span-12">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/40">Connect</h4>
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-violet/50 hover:text-violet transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet to-fuchsia-600 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <h5 className="font-bold text-lg mb-1 relative z-10">Start a Project</h5>
              <p className="text-white/80 text-sm mb-4 relative z-10">Ready to build something amazing?</p>
              <div className="flex items-center gap-2 text-sm font-bold relative z-10">
                Let's Talk <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Softraxa. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-8">
            {legalLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
