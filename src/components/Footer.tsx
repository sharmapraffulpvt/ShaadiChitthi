import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Heart, Sparkles, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#210B13] text-[#FFF8ED] pt-16 pb-12 border-t border-[#C8A15A]/30 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#C8A15A]/20">
          
          {/* Brand Identity & Tagline (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C8A15A]/60 shadow-md">
                <img src="/logo.png" alt="ShaadiChitthi" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FFF8ED]">
                  Shaadi<span className="text-[#C8A15A]">Chitthi</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#DFC185] uppercase font-sans">
                  Digital Wedding Atelier
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#EAD9B9]">
              “Shaadi ka digital nimantran, dil se.”
            </p>

            <p className="text-xs text-[#FFF8ED]/70 leading-relaxed font-sans max-w-sm">
              Creating unforgettable digital wedding invitation websites, animated e-invites, and bespoke RSVP experiences infused with Indian soul and royal heritage.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8A15A] text-[#FFF8ED] hover:text-[#210B13] border border-[#C8A15A]/30 flex items-center justify-center transition-all"
                title="Follow ShaadiChitthi on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={SITE_CONFIG.createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-[#FFF8ED] hover:text-white border border-[#C8A15A]/30 flex items-center justify-center transition-all"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8A15A] text-[#FFF8ED] hover:text-[#210B13] border border-[#C8A15A]/30 flex items-center justify-center transition-all"
                title="Email ShaadiChitthi Atelier"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#DFC185] uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFF8ED]/75">
              <li>
                <a href="#designs" className="hover:text-[#DFC185] transition-colors">
                  Invitation Atelier
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#DFC185] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#customizer" className="hover:text-[#DFC185] transition-colors">
                  Live Customizer
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#DFC185] transition-colors">
                  Why ShaadiChitthi
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#DFC185] transition-colors">
                  Our Heritage Story
                </a>
              </li>
            </ul>
          </div>

          {/* Invitation Themes */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#DFC185] uppercase tracking-widest mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFF8ED]/75">
              <li>
                <a href="#designs" className="hover:text-[#DFC185] transition-colors">
                  Royal Rajasthani
                </a>
              </li>
              <li>
                <a href="#designs" className="hover:text-[#DFC185] transition-colors">
                  Modern Minimal
                </a>
              </li>
              <li>
                <a href="#designs" className="hover:text-[#DFC185] transition-colors">
                  Floral Romance
                </a>
              </li>
              <li>
                <a href="#designs" className="hover:text-[#DFC185] transition-colors">
                  Traditional Auspicious
                </a>
              </li>
              <li>
                <a href="#designs" className="hover:text-[#DFC185] transition-colors">
                  Contemporary Velvet
                </a>
              </li>
            </ul>
          </div>

          {/* Business Contact */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#DFC185] uppercase tracking-widest mb-4">
              Concierge
            </h4>
            <ul className="space-y-3 text-xs text-[#FFF8ED]/75">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={SITE_CONFIG.createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DFC185] transition-colors"
                >
                  WhatsApp: +91 91574 17895
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C8A15A] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#DFC185] transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="text-[11px] text-[#FFF8ED]/60 pt-1">
                Mon – Sat: 10:00 AM – 8:00 PM IST
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8ED]/60">
          <p>
            © {new Date().getFullYear()} ShaadiChitthi. All rights reserved. Handcrafted with love in India.
          </p>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-[#DFC185] transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActivePolicy('terms')}
              className="hover:text-[#DFC185] transition-colors focus:outline-none"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#FFF8ED] text-[#35131F] rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#C8A15A]/40 shadow-2xl relative">
            <button
              onClick={() => setActivePolicy(null)}
              className="absolute top-4 right-4 p-1.5 text-[#35131F]/70 hover:text-[#76283B]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#76283B] mb-4">
              {activePolicy === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <div className="text-xs text-[#35131F]/80 space-y-3 max-h-72 overflow-y-auto pr-2">
              {activePolicy === 'privacy' ? (
                <>
                  <p>
                    At ShaadiChitthi, we respect your sacred wedding moments. Personal details (such as names, phone numbers, venue addresses, and guest lists) provided for your digital invitations are strictly confidential.
                  </p>
                  <p>
                    We never sell, rent, or trade your wedding details or guest contact information to third parties or marketing platforms.
                  </p>
                  <p>
                    You retain full control over your invitations and can request deletion or archival of your digital invitation data at any time.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Custom invitation deliverables are initiated upon mutual confirmation via WhatsApp or formal order.
                  </p>
                  <p>
                    Revisions for event timings, venue updates, and couple photos are provided promptly during the design and proofing stage.
                  </p>
                  <p>
                    All proprietary code, templates, and 3D web presentation frameworks remain the intellectual property of ShaadiChitthi.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#C8A15A]/20 text-right">
              <button
                onClick={() => setActivePolicy(null)}
                className="px-5 py-2 rounded-full text-xs font-semibold bg-[#76283B] text-white hover:bg-[#581C2B]"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
