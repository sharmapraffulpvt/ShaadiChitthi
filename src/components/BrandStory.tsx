import React from 'react';
import { Heart, Sparkles, Feather } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF8ED] relative overflow-hidden">
      
      {/* Decorative Arch Backdrop */}
      <div className="max-w-4xl mx-auto relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-white via-[#FFF8ED] to-white border border-[#C8A15A]/40 shadow-luxury text-center">
        
        {/* Subtle Ornamental Flourish */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-[1px] bg-[#C8A15A]" />
          <Feather className="w-5 h-5 text-[#C8A15A]" />
          <div className="w-12 h-[1px] bg-[#C8A15A]" />
        </div>

        <span className="text-xs uppercase tracking-widest text-[#C8A15A] font-semibold block mb-3">
          Our Heritage & Philosophy
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#76283B] leading-tight mb-8">
          Shaadi ka digital nimantran, <br />
          <span className="text-[#C8A15A] italic">dil se.</span>
        </h2>

        {/* Narrative Paragraphs */}
        <div className="space-y-6 text-sm sm:text-base text-[#35131F]/80 leading-relaxed font-sans max-w-2xl mx-auto">
          <p className="font-serif italic text-lg sm:text-xl text-[#76283B]">
            “Some invitations are more than a date and a venue. They carry blessings, memories, family traditions, and the excitement of a new beginning.”
          </p>

          <p>
            In Indian culture, a wedding invitation is not merely an announcement; it is the sacred first step of hospitality, respect, and unconditional love. For generations, families hand-delivered mithai boxes and handwritten chitthiyan to seek the blessings of elders.
          </p>

          <p>
            <strong className="text-[#76283B] font-semibold">ShaadiChitthi</strong> was born from a desire to preserve that profound warmth in today’s connected world. We combine timeless Indian aesthetics—the regal arches of Rajasthan, sacred Vedic shlokas, and delicate floral motifs—with effortless digital technology.
          </p>

          <p>
            Whether your loved ones are just down the street or celebrating across the globe, your invitation opens with the exact same emotional grace: deeply personal, culturally rooted, and made to be cherished.
          </p>
        </div>

        {/* Signature Element */}
        <div className="mt-10 pt-8 border-t border-[#C8A15A]/25 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C8A15A]/50 mb-2 shadow-sm">
            <img src="/logo.png" alt="ShaadiChitthi Seal" className="w-full h-full object-cover" />
          </div>
          <span className="font-serif text-lg font-bold text-[#76283B]">The ShaadiChitthi Atelier</span>
          <span className="text-xs tracking-wider text-[#C8A15A] font-medium">Handcrafted with love in India</span>
        </div>

      </div>
    </section>
  );
};
