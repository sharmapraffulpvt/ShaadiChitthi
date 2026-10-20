import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { soundManager } from '../utils/audioSystem';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
    soundManager.playDelicateChime(700);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF8ED] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C8A15A] font-semibold block mb-2">
            Clear Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#76283B]">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C8A15A] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#35131F]/75">
            Everything you need to know about crafting your digital wedding invitation with ShaadiChitthi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white border border-[#C8A15A]/30 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#76283B] flex-1">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#C8A15A]/40 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#76283B] text-white' : 'bg-[#FFF8ED] text-[#76283B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#35131F]/80 leading-relaxed font-sans border-t border-[#C8A15A]/15 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#C8A15A]/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-[#76283B]">
              Have a special custom request?
            </h4>
            <p className="text-xs text-[#35131F]/70">
              Speak directly with our concierge team on WhatsApp for prompt assistance.
            </p>
          </div>
          <a
            href={SITE_CONFIG.createWhatsAppLink("Namaste ShaadiChitthi! I have a question regarding my wedding invitation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#76283B] hover:bg-[#581C2B] shadow-md transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
