import React from 'react';
import { Sparkles, FileText, Send, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Design',
      description: 'Select your preferred aesthetic from our Royal, Minimal, Floral, or Traditional collections, or request a 100% custom couture theme.',
      icon: <Sparkles className="w-6 h-6 text-[#76283B]" />,
    },
    {
      num: '02',
      title: 'Share Your Wedding Details',
      description: 'Fill in your ceremony itinerary, dates, venue locations, couple photos, and dress codes through our simple online form or WhatsApp chat.',
      icon: <FileText className="w-6 h-6 text-[#C8A15A]" />,
    },
    {
      num: '03',
      title: 'Receive & Share With Love',
      description: 'Within a minimum of 3 to 5 days, your bespoke digital wedding invitation is meticulously perfected and ready to be shared with family and friends via WhatsApp.',
      icon: <Send className="w-6 h-6 text-[#76283B]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8ED] via-[#FFF5E6] to-[#FFF8ED] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-[#C8A15A] font-semibold block mb-2">
            Effortless Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#76283B]">
            How ShaadiChitthi Works
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C8A15A] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#35131F]/75">
            From your first message to your guests opening their invitations, our process is smooth, personal, and stress-free.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-24 right-24 h-[2px] bg-gradient-to-r from-[#C8A15A]/30 via-[#76283B]/40 to-[#C8A15A]/30 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#C8A15A]/40 shadow-luxury hover:shadow-xl transition-all duration-300"
              >
                {/* Step Number Badge */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#FFF8ED] to-[#EAD9B9] border-2 border-[#C8A15A] flex items-center justify-center shadow-md mb-6 relative">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#76283B] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#76283B] mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#35131F]/75 leading-relaxed font-sans">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-xs text-[#C8A15A] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A15A]" />
                  <span>Step 0{idx + 1} of 03</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <a
            href={SITE_CONFIG.createWhatsAppLink("Namaste! We're ready to start step 1 and choose our wedding invitation design.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#76283B] hover:bg-[#581C2B] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-[#C8A15A]/40"
          >
            <span>Begin Your Wedding Invitation</span>
            <Sparkles className="w-4 h-4 text-[#DFC185]" />
          </a>
        </div>

      </div>
    </section>
  );
};
