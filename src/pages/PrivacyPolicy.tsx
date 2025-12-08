import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PrivacyPolicy = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

    return (
        <div className="min-h-screen bg-dark text-white overflow-hidden relative">
            {/* Cinematic noise overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none fixed" />

            <Header />
            <main className="relative z-10">

                {/* Hero Section */}
                <section className="pt-32 pb-20 relative">
                    <FloatingParticles count={20} className="z-0" />
                    {/* Ambient Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />

                    <div className="container relative z-10">
                        <div
                            ref={headerRef}
                            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                                Privacy Policy
                            </h1>
                            <p className="text-white/60 text-lg">
                                Last Updated: December 8, 2025
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="pb-32">
                    <div className="container max-w-4xl px-4 md:px-6">
                        <div className="prose prose-lg prose-invert max-w-none space-y-12">

                            {/* Introduction */}
                            <div className="p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-sm">
                                <p className="text-xl text-white/80 leading-relaxed font-light">
                                    At Softraxa, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">1. Information We Collect</h2>
                                    <ul className="space-y-4 list-disc pl-6 text-white/70">
                                        <li><strong className="text-white">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                        <li><strong className="text-white">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                        <li><strong className="text-white">Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                                        <li><strong className="text-white">Usage Data:</strong> includes information about how you use our website, products and services.</li>
                                    </ul>
                                </div>

                                <div className="w-full h-px bg-white/10" />

                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">2. How We Use Your Data</h2>
                                    <p className="text-white/70 leading-relaxed mb-4">
                                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                    </p>
                                    <ul className="space-y-4 list-disc pl-6 text-white/70">
                                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                        <li>Where we need to comply with a legal obligation.</li>
                                    </ul>
                                </div>

                                <div className="w-full h-px bg-white/10" />

                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">3. Data Security</h2>
                                    <p className="text-white/70 leading-relaxed">
                                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10" />

                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">4. Contact Us</h2>
                                    <p className="text-white/70 leading-relaxed">
                                        If you have any questions about this privacy policy or our privacy practices, please contact our support team at <a href="mailto:support@softraxa.com" className="text-violet-400 hover:text-violet-300 transition-colors">support@softraxa.com</a>.
                                    </p>
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

export default PrivacyPolicy;
