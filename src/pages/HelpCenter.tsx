import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, HelpCircle, FileText, User, CreditCard, Shield, ChevronDown, Mail, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Help Categories
const categories = [
    { icon: FileText, title: 'Getting Started', desc: 'Everything you need to know to get up and running.' },
    { icon: User, title: 'Account & Profile', desc: 'Manage your account settings and preferences.' },
    { icon: CreditCard, title: 'Billing & Plans', desc: 'Understanding your subscription and payment methods.' },
    { icon: Shield, title: 'Privacy & Security', desc: 'How we keep you and your data safe.' },
];

// FAQs
const faqs = [
    {
        question: "What services does Softraxa offer?",
        answer: "Softraxa differs offers a comprehensive suite of digital services including UI/UX Design, Web Development, Mobile App Development, and Digital Strategy consulting. We specialize in building scalable, premium digital products."
    },
    {
        question: "How do you handle project pricing?",
        answer: "We offer both fixed-price project based models and retainer models. Our pricing is transparent and based on the scope, complexity, and timeline of your project. Contact us for a detailed quote."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary depending on scope. A typical branding and website project takes 4-8 weeks, while complex web applications may take 3-6 months. We provide a detailed timeline during our initial consultation."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, we offer various support and maintenance packages to ensure your digital product remains secure, up-to-date, and performs optimally after launch."
    },
];

const HelpCenter = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

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
                            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in mx-auto">
                                <HelpCircle className="w-4 h-4 text-violet-400" />
                                <span className="text-sm font-medium text-white/90 tracking-wide uppercase text-xs">Support Center</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8">
                                How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-white italic">help?</span>
                            </h1>

                            {/* Search Bar */}
                            <div className="relative max-w-xl mx-auto group">
                                <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5 pointer-events-none" />
                                    <Input
                                        placeholder="Search for answers..."
                                        className="h-14 pl-12 rounded-full bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-500/50 focus:ring-violet-500/20 text-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="py-12">
                    <div className="container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {categories.map((cat, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group cursor-pointer backdrop-blur-sm">
                                    <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6 text-violet-300 group-hover:scale-110 transition-transform">
                                        <cat.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">{cat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 lg:py-32">
                    <div className="container max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
                            <p className="text-white/60">Find quick answers to common questions about our services.</p>
                        </div>

                        <div className="space-y-4">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`item-${i}`} className="border-white/10 mb-4 px-6 rounded-2xl bg-white/5 data-[state=open]:bg-white/10 transition-all">
                                        <AccordionTrigger className="text-lg font-medium text-white hover:no-underline hover:text-violet-300 py-6">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/60 text-base leading-relaxed pb-6">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-r from-violet-900/40 to-fuchsia-900/40 border border-white/10 text-center relative overflow-hidden">
                            {/* Cinematic noise overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
                                <p className="text-white/60 mb-8 max-w-md mx-auto">
                                    Our support team is always ready to assist you. Reach out to us and we'll get back to you within 24 hours.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button className="h-12 px-8 rounded-full bg-white text-dark hover:bg-white/90 font-bold transition-all hover:scale-105 gap-2">
                                        <MessageSquare className="w-4 h-4" /> Live Chat
                                    </Button>
                                    <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 text-white hover:bg-white/10 gap-2 bg-transparent">
                                        <Mail className="w-4 h-4" /> Email Support
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <GlobalFooter />
        </div>
    );
};

export default HelpCenter;
