import { Header } from '@/components/Header';
import { GlobalFooter } from '@/components/GlobalFooter';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Download, Palette, Type, Layout, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const BrandGuidelines = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { toast } = useToast();

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast({
            title: "Copied to clipboard",
            description: `Color code ${text} copied.`,
        });
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
                                <span className="text-sm font-medium text-white/90 tracking-wide uppercase text-xs">Design System</span>
                            </div>

                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6">
                                Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-white italic">Guidelines</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                                The comprehensive guide to the Softraxa visual identity, ensuring consistency and excellence across every touchpoint.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Brand Assets */}
                <section className="py-20">
                    <div className="container">
                        {/* Logo Section */}
                        <div className="mb-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-violet-500/20 text-violet-300">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white">Logomark</h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="p-12 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-sm flex flex-col items-center justify-center min-h-[400px]">
                                    <img src="/logo1.png" alt="Softraxa Logo" className="w-64 h-auto brightness-0 invert" />
                                    <p className="mt-8 text-white/40 text-sm">Primary Wordmark (Light Mode)</p>
                                </div>
                                <div className="p-12 rounded-[2.5rem] bg-white text-dark border border-white/5 flex flex-col items-center justify-center min-h-[400px]">
                                    <img src="/logo1.png" alt="Softraxa Logo Dark" className="w-64 h-auto" />
                                    <p className="mt-8 text-dark/40 text-sm">Primary Wordmark (Dark Mode)</p>
                                </div>
                            </div>
                        </div>

                        {/* Colors Section */}
                        <div className="mb-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
                                    <Palette className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white">Color Palette</h2>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { name: 'Violet Accent', hex: '#8b5cf6', class: 'bg-violet-500' },
                                    { name: 'Dark Surface', hex: '#0f0f0f', class: 'bg-[#0f0f0f]' },
                                    { name: 'Pure White', hex: '#ffffff', class: 'bg-white' },
                                    { name: 'Fuchsia Glow', hex: '#d946ef', class: 'bg-fuchsia-500' },
                                ].map((color) => (
                                    <div key={color.name} className="group cursor-pointer" onClick={() => handleCopy(color.hex)}>
                                        <div className={`aspect-square rounded-3xl ${color.class} border border-white/10 mb-4 transition-transform group-hover:scale-105 shadow-xl relative overflow-hidden`}>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                                                <Copy className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-white">{color.name}</h3>
                                        <p className="text-white/40 font-mono text-sm">{color.hex}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Typography Section */}
                        <div className="mb-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-300">
                                    <Type className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white">Typography</h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12">
                                <div className="p-10 rounded-3xl bg-white/5 border border-white/5 space-y-8">
                                    <span className="text-sm font-mono text-violet-300 bg-violet-500/10 px-3 py-1 rounded-full">Display Font</span>
                                    <div>
                                        <h1 className="text-6xl font-display font-bold text-white mb-2">Aa</h1>
                                        <p className="text-2xl text-white/80 font-display">Plus Jakarta Sans</p>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-4xl font-display font-bold">Bold 700</p>
                                        <p className="text-4xl font-display font-medium">Medium 500</p>
                                        <p className="text-4xl font-display font-light">Light 300</p>
                                    </div>
                                </div>

                                <div className="p-10 rounded-3xl bg-white/5 border border-white/5 space-y-8">
                                    <span className="text-sm font-mono text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">Body Font</span>
                                    <div>
                                        <h1 className="text-6xl font-body font-bold text-white mb-2">Aa</h1>
                                        <p className="text-2xl text-white/80 font-body">Inter</p>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-lg text-white/60 leading-relaxed">
                                            Inter is designed for high legibility of small-to-medium sized text on computer screens. Features an x-height that is clear and distinct.
                                        </p>
                                        <p className="text-base text-white/40 italic">
                                            The quick brown fox jumps over the lazy dog.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Download Assets */}
                        <div className="p-12 rounded-[3rem] bg-gradient-to-r from-violet-900/50 to-fuchsia-900/50 border border-white/10 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Download Brand Assets</h2>
                                <p className="text-white/60 mb-8 max-w-xl mx-auto">
                                    Get access to our complete logo pack, including SVG, PNG, and EPS formats for both light and dark backgrounds.
                                </p>
                                <Button className="h-12 px-8 rounded-full bg-white text-dark hover:bg-white/90 font-bold transition-all hover:scale-105">
                                    <Download className="mr-2 w-4 h-4" /> Download Kit (ZIP)
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
            <GlobalFooter />
        </div>
    );
};

export default BrandGuidelines;
