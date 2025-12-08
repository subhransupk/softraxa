import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TermsOfService = () => {
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
                                Terms of Service
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
                                    Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Softraxa website (the "Service") operated by Softraxa ("us", "we", or "our").
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">1. Acceptance of Terms</h2>
                                    <p className="text-white/70 leading-relaxed">
                                        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10" />

                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">2. Use License</h2>
                                    <p className="text-white/70 leading-relaxed mb-4">
                                        Permission is granted to temporarily download one copy of the materials (information or software) on Softraxa's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                    </p>
                                    <ul className="space-y-4 list-disc pl-6 text-white/70">
                                        <li>Modify or copy the materials;</li>
                                        <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                        <li>Attempt to decompile or reverse engineer any software contained on Softraxa's website;</li>
                                        <li>Remove any copyright or other proprietary notations from the materials; or</li>
                                        <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                                    </ul>
                                </div>

                                <div className="w-full h-px bg-white/10" />

                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">3. Disclaimer</h2>
                                    <p className="text-white/70 leading-relaxed">
                                        The materials on Softraxa's website are provided on an 'as is' basis. Softraxa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10" />

                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">4. Limitations</h2>
                                    <p className="text-white/70 leading-relaxed">
                                        In no event shall Softraxa or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Softraxa's website, even if Softraxa or a Softraxa authorized representative has been notified orally or in writing of the possibility of such damage.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10" />

                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">5. Governing Law</h2>
                                    <p className="text-white/70 leading-relaxed">
                                        These terms and conditions are governed by and construed in accordance with the laws of Delaware, USA and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
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

export default TermsOfService;
