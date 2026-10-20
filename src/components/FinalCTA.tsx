import React from 'react';
import { Sparkles, MessageCircle, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-paper-grain relative overflow-hidden text-center select-none">
      
      {/* Background Soft Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-gradient-to-tr from-[#C8A15A]/20 via-[#FFF8ED] to-[#76283B]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Brand Circular Emblem Motif */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-6 p-1 bg-white border-2 border-[#C8A15A] shadow-xl flex items-center justify-center transform hover:rotate-6 transition-transform">
          <img src="/logo.png" alt="ShaadiChitthi Seal" className="w-full h-full object-cover rounded-full" />
        </div>

        {/* Auspicious Shloka / Headline */}
        <p className="font-serif text-xs sm:text-sm text-[#C8A15A] tracking-[0.3em] uppercase font-semibold mb-3">
          ॥ शुभ विवाह ॥
        </p>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#76283B] tracking-tight leading-tight mb-4">
          “Your story deserves <br />
          <span className="text-[#35131F] font-normal italic">a beautiful invitation.”</span>
        </h2>

        <p className="font-serif italic text-lg sm:text-2xl text-[#35131F]/80 max-w-xl mx-auto mb-8">
          Let’s create something your family and friends will remember forever.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#customizer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#76283B] via-[#8B3045] to-[#76283B] hover:from-[#581C2B] hover:to-[#581C2B] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 border border-[#C8A15A]/40"
          >
            <Sparkles className="w-4 h-4 text-[#DFC185]" />
            <span>Create Your Invite</span>
          </a>

          <a
            href={SITE_CONFIG.createWhatsAppLink("Namaste ShaadiChitthi! We'd love to talk to you about creating our wedding invitation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-[#76283B] bg-white hover:bg-[#FFF4E0] border-2 border-[#C8A15A] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Talk to Us on WhatsApp</span>
          </a>
        </div>

        {/* Reassurance */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#35131F]/70">
          <Heart className="w-3.5 h-3.5 text-[#76283B] fill-[#76283B]" />
          <span>Handcrafted for couples across India & the global Indian diaspora</span>
        </div>

      </div>
    </section>
  );
};
