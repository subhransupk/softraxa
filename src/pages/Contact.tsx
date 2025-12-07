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
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Get in Touch
              </span>
              <h1 className="text-display-lg md:text-display-xl text-white mb-6">
                Let's start a <span className="text-violet italic">conversation</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-light py-20 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div
                className={`transition-all duration-700 delay-200 ${
                  formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <h2 className="text-display-sm mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and our team will get back to you within 24 hours. 
                  Or reach out to us directly through the contact details below.
                </p>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="gap-2">
                    <Calendar className="w-4 h-4" /> Schedule Call
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <MessageCircle className="w-4 h-4" /> Live Chat
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div
                ref={formRef}
                className={`transition-all duration-700 delay-400 ${
                  formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="john@company.com" required />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Company (Optional)</label>
                    <Input placeholder="Your company name" />
                  </div>

                  <div className="mb-6">
                    <label className="text-sm font-medium mb-3 block">Project Budget</label>
                    <div className="flex flex-wrap gap-3">
                      {budgetOptions.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedBudget === budget
                              ? 'bg-primary text-white'
                              : 'bg-secondary hover:bg-secondary/80'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-violet hover:from-violet hover:to-primary"
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

                  <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-accent" />
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
