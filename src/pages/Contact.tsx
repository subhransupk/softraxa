import { useState } from 'react';
import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, Clock, Send, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@softraxa.com',
    href: 'mailto:hello@softraxa.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-7437988568',
    href: 'tel:+917437988568',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: '#',
  },
];

const budgetOptions = ['$5K - $10K', '$10K - $25K', '$25K - $50K', '$50K+'];

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden relative">
      {/* Cinematic noise overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none fixed" />

      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
          <FloatingParticles count={40} className="z-0" />

          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen" />

          <div className="container relative z-10">
            <div
              ref={headerRef}
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in mx-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-sm font-medium text-white/90 tracking-wide uppercase text-xs">Get in Touch</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6">
                Let's start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-white italic">conversation</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto relative">
              {/* Divider Line for Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              {/* Contact Info */}
              <div
                className={`transition-all duration-700 delay-200 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
              >
                <h2 className="text-3xl font-display font-bold mb-6 text-white">Contact Information</h2>
                <p className="text-white/60 mb-8 font-light leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours.
                  Or reach out to us directly through the contact details below.
                </p>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/30 group-hover:scale-110 transition-all border border-violet-500/20">
                        <item.icon className="w-5 h-5 text-violet-300" />
                      </div>
                      <div>
                        <span className="text-sm text-white/40 block mb-1">{item.label}</span>
                        <span className="font-medium text-white group-hover:text-violet-200 transition-colors">{item.value}</span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="gap-2 border-white/10 bg-transparent hover:bg-white/5 text-white hover:text-white">
                    <Calendar className="w-4 h-4 text-violet-400" /> Schedule Call
                  </Button>
                  <Button variant="outline" className="gap-2 border-white/10 bg-transparent hover:bg-white/5 text-white hover:text-white">
                    <MessageCircle className="w-4 h-4 text-violet-400" /> Live Chat
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div
                ref={formRef}
                className={`transition-all duration-700 delay-400 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
              >
                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white/80">Full Name</label>
                      <Input placeholder="John Doe" required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-violet-500/50 focus:ring-violet-500/20" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white/80">Email</label>
                      <Input type="email" placeholder="john@company.com" required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-violet-500/50 focus:ring-violet-500/20" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block text-white/80">Company (Optional)</label>
                    <Input placeholder="Your company name" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-violet-500/50 focus:ring-violet-500/20" />
                  </div>

                  <div className="mb-6">
                    <label className="text-sm font-medium mb-3 block text-white/80">Project Budget</label>
                    <div className="flex flex-wrap gap-3">
                      {budgetOptions.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedBudget === budget
                            ? 'bg-white text-dark border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                            : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white'
                            }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="text-sm font-medium mb-2 block text-white/80">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={5}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 resize-none focus:border-violet-500/50 focus:ring-violet-500/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-dark hover:bg-white/90 font-bold h-12 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-white/40 text-center mt-6 flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>


      </main>
      <GlobalFooter />
    </div>
  );
};

export default Contact;
