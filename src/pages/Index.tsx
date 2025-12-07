import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesCards } from '@/components/ServicesCards';
import { KpiBand } from '@/components/KpiBand';
import MarqueeSection from '@/components/MarqueeSection';
import { AiPoweredSection } from '@/components/AiPoweredSection';
import { PortfolioMosaic } from '@/components/PortfolioMosaic';
import { ProductTiles } from '@/components/ProductTiles';
import { BenefitsSection } from '@/components/BenefitsSection';
import { PricingSection } from '@/components/PricingSection';
import { FaqSection } from '@/components/FaqSection';
import { FooterCta } from '@/components/FooterCta';
import { GlobalFooter } from '@/components/GlobalFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesCards />
        <KpiBand />
        <MarqueeSection />
        <AiPoweredSection />
        <PortfolioMosaic />
        <ProductTiles />
        <BenefitsSection />
        <PricingSection />
        <FaqSection />
        <FooterCta />
      </main>
      <GlobalFooter />
    </div>
  );
};

export default Index;
