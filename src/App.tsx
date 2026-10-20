import React, { useState } from 'react';
import { PetalBackground } from './components/PetalBackground';
import { Navbar } from './components/Navbar';
import { HeroExperience } from './components/HeroExperience';
import { InvitationShowcase } from './components/InvitationShowcase';
import { CustomizationPanel } from './components/CustomizationPanel';
import { WhyShaadiChitthi } from './components/WhyShaadiChitthi';
import { HowItWorks } from './components/HowItWorks';
import { BrandStory } from './components/BrandStory';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { DemoWeddingWebsite } from './components/DemoWeddingWebsite';
import { InvitationDesign, SITE_CONFIG } from './config/siteConfig';

export const App: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedDemoTheme, setSelectedDemoTheme] = useState('Royal Rajasthani');
  const [customizerDesign, setCustomizerDesign] = useState<InvitationDesign | null>(null);

  const handleOpenDemo = (themeName: string = 'Royal Rajasthani') => {
    setSelectedDemoTheme(themeName);
    setIsDemoOpen(true);
  };

  const handleSelectDesignForCustomizer = (design: InvitationDesign) => {
    setCustomizerDesign(design);
    const customizerElem = document.getElementById('customizer');
    customizerElem?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenDemoForDesign = (design: InvitationDesign) => {
    setSelectedDemoTheme(design.title);
    setIsDemoOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#35131F] flex flex-col relative selection:bg-[#C8A15A]/30 selection:text-[#35131F]">
      
      {/* Floating Petal Ambiance (Canvas) */}
      <PetalBackground />

      {/* Luxury Sticky Navbar */}
      <Navbar onOpenDemo={() => handleOpenDemo('Royal Rajasthani')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic 3D Hero Experience */}
        <HeroExperience onOpenDemo={() => handleOpenDemo('Royal Rajasthani')} />

        {/* 2. Interactive Invitation Atelier Showcase (6+ concepts) */}
        <InvitationShowcase
          onSelectDesignForCustomizer={handleSelectDesignForCustomizer}
          onOpenDemoForDesign={handleOpenDemoForDesign}
        />

        {/* 3. Real-Time Customization Atelier Studio */}
        <CustomizationPanel initialDesign={customizerDesign} />

        {/* 4. Why ShaadiChitthi (4 Pillars) */}
        <WhyShaadiChitthi />

        {/* 5. How It Works (3-Step Timeline) */}
        <HowItWorks />

        {/* 6. Brand Story & Cultural Roots */}
        <BrandStory />

        {/* 7. Social Proof & Testimonials */}
        <Testimonials />

        {/* 8. Frequently Asked Questions (8 Questions Accordion) */}
        <FAQSection />

        {/* 9. Contact & Custom Request Form (with WhatsApp fallback) */}
        <ContactSection />

        {/* 10. Cinematic Final CTA */}
        <FinalCTA />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Mobile Sticky Thumb-Friendly Quick Bar */}
      <MobileBottomBar />

      {/* Interactive Full Digital Wedding Website Demo Modal */}
      <DemoWeddingWebsite
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        initialTheme={selectedDemoTheme}
      />

    </div>
  );
};

export default App;
