import React from 'react';
import { HeartHandshake, Sparkles, Compass, Share2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const WhyShaadiChitthi: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#76283B]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#C8A15A]" />,
    Compass: <Compass className="w-6 h-6 text-[#76283B]" />,
    Share2: <Share2 className="w-6 h-6 text-[#C8A15A]" />,
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF8ED] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C8A15A] font-semibold block mb-2">
            The ShaadiChitthi Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#76283B]">
            Why Couples Choose Us
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C8A15A] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#35131F]/75">
            Crafted for families who believe wedding invitations should be as unforgettable as the ceremony itself.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_CONFIG.benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className="p-8 rounded-2xl bg-white border border-[#C8A15A]/30 shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-[#FFF8ED] border border-[#C8A15A]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {iconMap[benefit.icon]}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#76283B] mb-3">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#35131F]/75 leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C8A15A]/15 flex items-center justify-between text-xs text-[#C8A15A] font-semibold">
                <span>0{idx + 1}</span>
                <span className="w-8 h-[1px] bg-[#C8A15A]/40" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
