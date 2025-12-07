import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { HelpCircle, MessageCircle, Sparkles, Code2, Rocket, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'general', label: 'General', icon: HelpCircle },
  { id: 'process', label: 'Process', icon: Rocket },
  { id: 'services', label: 'Services', icon: Code2 },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
];

const allFaqs = {
  general: [
    {
      question: 'Do you work with startups or only enterprises?',
      answer: 'We work with ambitious teams of all sizes—from early-stage startups to Fortune 500 companies. Our flexible engagement models allow us to scale our services to match your needs and budget.',
    },
    {
      question: 'What constitutes a "successful" project for you?',
      answer: 'Success means you hitting your business KPIs. Whether that\'s increasing conversion rates, reducing churn, or a successful fundraising round. We align our design goals with your business goals.',
    },
  ],
  process: [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope. A focused MVP design sprint typically takes 4-6 weeks, while comprehensive product redesigns can take 3-6 months. We\'ll provide a detailed timeline during our discovery call.',
    },
    {
      question: 'What is your design process like?',
      answer: 'Our process is iterative and collaborative: Discovery → Strategy → Design → Prototyping → Handover. We involve you at every major milestone to ensure we\'re building exactly what you need.',
    },
    {
      question: 'How do revisions and feedback work?',
      answer: 'We offer unlimited revisions during active sprint cycles. We use collaborative tools like Figma to gather feedback in real-time, ensuring we iterate quickly and efficiently.',
    },
  ],
  services: [
    {
      question: 'Can you help with development too?',
      answer: 'Yes! We have a specialized engineering team proficient in React, Next.js, and React Native. We can handle the full lifecycle from design to deployment.',
    },
    {
      question: 'Do you provide on-going support?',
      answer: 'Absolutely. Many of our clients transition to a retainer model after the initial project, where we act as their extended design team for feature updates and maintenance.',
    },
  ],
  pricing: [
    {
      question: 'How much does a typical project cost?',
      answer: 'Our engagements typically start at $5k for small sprints. For full product designs, we usually scope projects between $15k-$50k depending on complexity. We also offer monthly retainers starting at $4k/mo.',
    },
    {
      question: 'What are your payment terms?',
      answer: 'Typically, we structure payments as 50% upfront and 50% upon completion. For larger projects, we can break this down into monthly milestones.',
    },
  ]
};

export const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  const currentFaqs = allFaqs[activeCategory as keyof typeof allFaqs];

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-dark-surface overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 bg-violet/10 rounded-full blur-[128px] opacity-40 animate-pulse" />
        <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left Column: Header & Categories */}
          <div className="lg:col-span-4 space-y-8">
            <div
              ref={headerRef}
              className={`transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-violet text-xs font-bold uppercase tracking-widest mb-6">
                <MessageCircle className="w-3.5 h-3.5" />
                Support
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-fuchsia-400">Questions</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Everything you need to know about working with Softraxa. Can't find the answer you're looking for?
              </p>

              <Link to="/contact">
                <Button className="bg-white text-dark hover:bg-white/90 font-semibold rounded-xl px-6">
                  Contact Support
                </Button>
              </Link>
            </div>

            {/* Category Tabs (Vertical on Desktop) */}
            <div className="hidden lg:flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${activeCategory === cat.id
                      ? 'bg-white/10 border-white/10 text-white shadow-lg shadow-violet/5'
                      : 'bg-transparent border-transparent text-white/50 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeCategory === cat.id ? 'bg-violet text-white' : 'bg-white/5 text-white/50'
                    }`}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">{cat.label}</span>
                  {activeCategory === cat.id && (
                    <Sparkles className="w-4 h-4 ml-auto text-violet animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8">
            {/* Mobile Horizontal Tabs */}
            <div className="lg:hidden flex overflow-x-auto pb-6 gap-3 scrollbar-hide mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap border transition-all ${activeCategory === cat.id
                      ? 'bg-violet text-white border-violet shadow-lg shadow-violet/20'
                      : 'bg-white/5 text-white/60 border-white/10'
                    }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="min-h-[400px]">
              <Accordion type="single" collapsible className="space-y-4">
                {currentFaqs.map((faq, index) => (
                  <AccordionItem
                    key={`${activeCategory}-${index}`}
                    value={`item-${index}`}
                    className="group border-none mb-4 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden rounded-2xl transition-all duration-300">
                      {/* Glass Background */}
                      <div className="absolute inset-0 bg-[#0a0a0a]/40 backdrop-blur-md border border-white/5 rounded-2xl group-hover:border-white/10 transition-colors" />

                      {/* Active Glow */}
                      <div className="absolute inset-0 opacity-0 group-data-[state=open]:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet/10 to-transparent pointer-events-none" />

                      <AccordionTrigger className="relative px-6 lg:px-8 py-5 text-white text-base lg:text-lg font-medium hover:no-underline [&[data-state=open]]:text-violet-300 transition-colors gap-4">
                        <span className="text-left">{faq.question}</span>
                      </AccordionTrigger>

                      <AccordionContent className="relative px-6 lg:px-8 pb-6 text-white/60 text-base leading-relaxed max-w-2xl">
                        {faq.answer}
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
