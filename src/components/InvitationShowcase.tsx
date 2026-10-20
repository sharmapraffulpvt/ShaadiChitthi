import React, { useState } from 'react';
import { Sparkles, Eye, Edit3, ArrowRight, Check } from 'lucide-react';
import { SITE_CONFIG, InvitationDesign } from '../config/siteConfig';
import { soundManager } from '../utils/audioSystem';

interface InvitationShowcaseProps {
  onSelectDesignForCustomizer: (design: InvitationDesign) => void;
  onOpenDemoForDesign: (design: InvitationDesign) => void;
}

export const InvitationShowcase: React.FC<InvitationShowcaseProps> = ({
  onSelectDesignForCustomizer,
  onOpenDemoForDesign,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const categories = ['All', 'Royal', 'Minimal', 'Floral', 'Traditional', 'Contemporary', 'Festive'];

  const filteredDesigns =
    selectedCategory === 'All'
      ? SITE_CONFIG.invitationDesigns
      : SITE_CONFIG.invitationDesigns.filter((d) => d.category === selectedCategory);

  return (
    <section id="designs" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF8ED] relative select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest text-[#76283B] bg-[#C8A15A]/15 border border-[#C8A15A]/40 uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A15A]" />
            <span>The Signature Atelier</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold text-[#76283B] tracking-tight leading-tight">
            “Every wedding has a story. <br className="hidden sm:inline" />
            <span className="text-[#35131F] font-normal italic">Let’s invite the world to yours.”</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#35131F]/75 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collections, each deeply rooted in Indian wedding aesthetics and thoughtfully engineered for seamless mobile viewing and instant RSVP interactions.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  soundManager.playDelicateChime(950);
                }}
                className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#76283B] text-white shadow-md border border-[#C8A15A]'
                    : 'bg-white/70 text-[#35131F]/70 border border-[#C8A15A]/30 hover:border-[#C8A15A] hover:text-[#76283B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6+ Distinct Invitation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredDesigns.map((design) => {
            const isHovered = hoveredCardId === design.id;

            return (
              <div
                key={design.id}
                onMouseEnter={() => {
                  setHoveredCardId(design.id);
                  soundManager.playPaperSwoosh();
                }}
                onMouseLeave={() => setHoveredCardId(null)}
                className="group relative flex flex-col rounded-2xl bg-white border border-[#C8A15A]/30 shadow-luxury hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                }}
              >
                {/* Visual Invitation Canvas Area */}
                <div
                  className="relative h-72 sm:h-80 w-full flex flex-col items-center justify-between p-6 overflow-hidden transition-all duration-500"
                  style={{
                    backgroundColor: design.palette.background,
                    borderBottom: `1px solid ${design.palette.border}40`,
                  }}
                >
                  {/* Subtle Ornamental Background Patterns based on design type */}
                  {design.ornamentStyle === 'jaali' && (
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(${design.palette.secondary} 1.5px, transparent 1.5px)`,
                        backgroundSize: '18px 18px',
                      }}
                    />
                  )}
                  {design.ornamentStyle === 'mandala' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <div className="w-56 h-56 rounded-full border-4 border-dashed border-[#C8A15A] animate-spin" style={{ animationDuration: '60s' }} />
                    </div>
                  )}

                  {/* Top Tag & Auspicious Blessing */}
                  <div className="w-full flex items-center justify-between z-10">
                    <span
                      className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border"
                      style={{
                        color: design.palette.primary,
                        borderColor: `${design.palette.secondary}60`,
                        backgroundColor: `${design.palette.background}`,
                      }}
                    >
                      {design.tag}
                    </span>

                    <span
                      className="text-[11px] font-serif font-semibold tracking-wider"
                      style={{ color: design.palette.secondary }}
                    >
                      ॥ श्री ॥
                    </span>
                  </div>

                  {/* Invitation Center Piece */}
                  <div className="relative z-10 text-center my-auto px-4">
                    <div className="w-8 h-8 mx-auto mb-2 opacity-80" style={{ color: design.palette.secondary }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 3v18M3 12h18" strokeDasharray="2 2" />
                      </svg>
                    </div>

                    <p
                      className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium mb-1"
                      style={{ color: design.palette.primary }}
                    >
                      Wedding Invitation
                    </p>

                    <h3
                      className="font-serif text-2xl sm:text-3xl font-bold tracking-wide"
                      style={{ color: design.palette.text }}
                    >
                      {design.sampleCouple}
                    </h3>

                    <div
                      className="w-16 h-[1px] mx-auto my-2"
                      style={{ backgroundColor: design.palette.secondary }}
                    />

                    <p
                      className="text-xs font-sans tracking-wide"
                      style={{ color: `${design.palette.text}CC` }}
                    >
                      {design.sampleDate}
                    </p>

                    <p
                      className="text-[11px] font-sans font-medium mt-0.5"
                      style={{ color: design.palette.secondary }}
                    >
                      {design.sampleCity}
                    </p>

                    {/* Dummy Countdown Option Tag */}
                    <div
                      className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold border"
                      style={{
                        backgroundColor: `${design.palette.background}`,
                        borderColor: `${design.palette.secondary}80`,
                        color: design.palette.primary,
                      }}
                    >
                      <span>⏳ Live Countdown Included</span>
                    </div>
                  </div>

                  {/* Card Subtle Bottom Foil Bar */}
                  <div
                    className="w-full flex items-center justify-center pt-2 border-t text-[10px] tracking-wider uppercase font-semibold"
                    style={{
                      borderColor: `${design.palette.border}30`,
                      color: design.palette.primary,
                    }}
                  >
                    <span>ShaadiChitthi Signature Edition</span>
                  </div>

                  {/* Hover Overlay with Quick Preview Action */}
                  <div
                    className={`absolute inset-0 bg-[#35131F]/40 backdrop-blur-xs flex flex-col items-center justify-center gap-3 p-4 transition-all duration-300 ${
                      isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <button
                      onClick={() => onOpenDemoForDesign(design)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-[#76283B] hover:bg-[#FFF8ED] shadow-lg flex items-center gap-2 transform hover:scale-105 transition-all"
                    >
                      <Eye className="w-4 h-4 text-[#C8A15A]" />
                      <span>Preview Full Invitation</span>
                    </button>
                    <button
                      onClick={() => onSelectDesignForCustomizer(design)}
                      className="px-5 py-2 rounded-full text-xs font-semibold bg-[#C8A15A] text-[#35131F] hover:bg-[#DFC185] shadow-md flex items-center gap-2 transform hover:scale-105 transition-all"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-[#35131F]" />
                      <span>Customize in Atelier</span>
                    </button>
                  </div>
                </div>

                {/* Card Information & Feature List */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-serif text-xl font-bold text-[#76283B]">
                        {design.title}
                      </h4>
                      <span className="text-xs text-[#C8A15A] font-semibold">
                        {design.category}
                      </span>
                    </div>

                    <p className="text-xs text-[#35131F]/70 font-sans leading-relaxed line-clamp-2 mb-4">
                      {design.description}
                    </p>

                    {/* Features Tags */}
                    <div className="space-y-1.5 mb-6">
                      {design.features.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-[#35131F]/80">
                          <Check className="w-3.5 h-3.5 text-[#C8A15A] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Dual Action Buttons */}
                  <div className="pt-4 border-t border-[#C8A15A]/20 flex items-center gap-2.5">
                    <button
                      onClick={() => onOpenDemoForDesign(design)}
                      className="flex-1 py-2 rounded-xl text-xs font-semibold text-[#76283B] bg-[#FFF8ED] hover:bg-[#FFF4E0] border border-[#C8A15A]/40 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C8A15A]" />
                      <span>Preview</span>
                    </button>

                    <button
                      onClick={() => onSelectDesignForCustomizer(design)}
                      className="flex-1 py-2 rounded-xl text-xs font-semibold text-white bg-[#76283B] hover:bg-[#581C2B] shadow-sm transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Customize</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DFC185]" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Design Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#76283B] via-[#8B3045] to-[#76283B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#C8A15A]/40">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF8ED]">
              Dreaming of a 100% Bespoke Couture Invitation?
            </h3>
            <p className="text-xs sm:text-sm text-[#EAD9B9] mt-1 max-w-xl">
              Our lead designers can illustrate your personal love story, venue watercolor sketches, pet cameos, and custom family monograms.
            </p>
          </div>

          <a
            href={SITE_CONFIG.createWhatsAppLink("Namaste! We are looking for a 100% custom couture wedding invitation design with bespoke illustrations and personalized story.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#35131F] bg-[#C8A15A] hover:bg-[#DFC185] shadow-md transition-all transform hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-[#35131F]" />
            <span>Request Couture Design</span>
          </a>
        </div>

      </div>
    </section>
  );
};
