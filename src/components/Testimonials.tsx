import React from 'react';
import { Star, Heart, MapPin, Quote } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8ED] via-[#FFF5E6] to-[#FFF8ED] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C8A15A] font-semibold block mb-2">
            Heartfelt Words
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#76283B]">
            Stories of Joy & Celebration
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C8A15A] mx-auto mt-4" />
          <p className="mt-3 text-xs sm:text-sm text-[#35131F]/65 italic">
            (Sample demonstration reviews illustrating customer experiences)
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.testimonials.map((item) => (
            <div
              key={item.couple}
              className="p-8 rounded-2xl bg-white border border-[#C8A15A]/30 shadow-luxury hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#C8A15A]/40 mb-4" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#C8A15A]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C8A15A]" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="font-serif italic text-sm sm:text-base text-[#35131F]/85 leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              {/* Author & Wedding Details */}
              <div className="pt-4 border-t border-[#C8A15A]/20">
                <h4 className="font-serif text-lg font-bold text-[#76283B]">
                  {item.couple}
                </h4>
                <div className="flex items-center gap-2 text-xs text-[#35131F]/70 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A15A]" />
                  <span>{item.location}</span>
                </div>
                <span className="inline-block mt-2 text-[11px] font-medium text-[#C8A15A] bg-[#FFF8ED] px-2.5 py-0.5 rounded-full border border-[#C8A15A]/30">
                  {item.design}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
