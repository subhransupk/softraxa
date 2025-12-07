import { ArrowRight, Palette, Layers, Search, Zap, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const products = [
  {
    title: 'Design Systems',
    description: 'Scalable component libraries that ensure consistency across your entire product suite.',
    icon: Palette,
    gradient: 'from-blue-500 to-cyan-400',
    delay: 0
  },
  {
    title: 'Interactive Prototypes',
    description: 'High-fidelity demos that feel like the real product, perfect for user testing.',
    icon: Layers,
    gradient: 'from-violet-500 to-purple-400',
    delay: 100
  },
  {
    title: 'User Research',
    description: 'Deep insights into user behavior to validate assumptions and guide decisions.',
    icon: Search,
    gradient: 'from-pink-500 to-rose-400',
    delay: 200
  },
  {
    title: 'Motion Design',
    description: 'Engaging micro-interaction and transitions that delight users.',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-400',
    delay: 300
  },
];

export const ProductTiles = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-violet/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm">
            What We Ship
          </span>
          <h2 className="text-display-md lg:text-display-lg text-white mb-6">
            Tangible <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan-400">Deliverables</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We don't just deliver files; we deliver outcomes. Here's exactly what you'll get
            when we partner together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${product.delay}ms` }}
            >
              {/* Hover Gradient Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${product.gradient} shadow-lg`}>
                  <product.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                  {product.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                <div className="flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors mt-auto">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 flex justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-white/60">
            <CheckCircle2 className="w-4 h-4 text-green-accent" />
            <span>All assets delivered in Figma & formats of your choice</span>
          </div>
        </div>
      </div>
    </section>
  );
};
