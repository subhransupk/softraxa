import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Cookies = () => {
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
                                Cookie Policy
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
                                    This Cookie Policy explains how Softraxa ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">1. What are cookies?</h2>
                                    <p className="text-white/70 leading-relaxed">
                                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10" />

                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">2. Why do we use cookies?</h2>
                                    <p className="text-white/70 leading-relaxed mb-4">
                                        We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10" />

                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">3. Types of Cookies We Use</h2>
                                    <ul className="space-y-4 list-disc pl-6 text-white/70">
                                        <li><strong className="text-white">Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website and to use some of its features.</li>
                                        <li><strong className="text-white">Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use.</li>
                                        <li><strong className="text-white">Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.</li>
                                    </ul>
                                </div>

                                <div className="w-full h-px bg-white/10" />

                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">4. How can I control cookies?</h2>
                                    <p className="text-white/70 leading-relaxed">
                                        You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
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

export default Cookies;
