import { useState } from 'react';
import { ArrowRight, Check, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const budgetOptions = [
  'Less than $5K',
  '$5K - $10K',
  '$10K - $20K',
  '$20K - $50K',
  'More than $50K',
];

export const FooterCta = () => {
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const benefits = [
    'Expect a response from us within 24 hours',
    "We're happy to sign an NDA upon request.",
    'Get access to a team of dedicated product specialists.',
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-dark">
        <div className="container">
          <div className="text-center py-16 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-green-accent/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
            <p className="text-white/60">We'll be in touch within 24 hours to discuss your project.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-dark">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet/20 rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
          {/* Left Column - Info */}
          <div
            ref={leftRef}
            className={`space-y-10 transition-all duration-700 ${leftVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
              }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-accent/30 bg-green-accent/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-accent text-sm font-medium tracking-wide">
                Available for new projects
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Let's Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan-400">Extraordinary</span>
            </h2>

            {/* Benefits */}
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-accent" />
                  </div>
                  <span className="text-white/80 text-lg font-light">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Person Card */}
            <div className="pt-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-sm hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet to-indigo-600 flex items-center justify-center text-3xl shadow-lg border-2 border-white/10">
                    👨‍💼
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Abdullah Al Noman</h4>
                    <p className="text-violet-300 text-sm">Head of Strategy</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a href="tel:+17165036335" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-violet/20 group-hover:text-violet transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm">+1 (716) 503-6335</span>
                  </a>
                  <a href="mailto:hello@designmonks.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-violet/20 group-hover:text-violet transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">hello@designmonks.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-200 ${rightVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
              }`}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
              {/* Form Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Tell us about your project</h3>
                  <p className="text-white/50">We'll analyze your requirements and get back to you with a tailored proposal.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-white/80">Full Name</label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      className="bg-black/20 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-violet/50 focus:ring-violet/20 transition-all font-light"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className="bg-black/20 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-violet/50 focus:ring-violet/20 transition-all font-light"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Project Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedBudget(option)}
                        className={`px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${selectedBudget === option
                            ? 'bg-violet text-white shadow-lg shadow-violet/25 font-medium'
                            : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white hover:scale-105'
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium text-white/80">Project Details</label>
                  <Textarea
                    id="details"
                    placeholder="Tell us about your goals, timeline, and requirements..."
                    rows={4}
                    className="bg-black/20 border-white/10 text-white placeholder:text-white/30 rounded-xl resize-none focus:border-violet/50 focus:ring-violet/20 transition-all font-light min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white h-14 rounded-xl text-lg font-semibold shadow-lg shadow-violet/25 hover:shadow-violet/40 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
