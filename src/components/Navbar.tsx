import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { soundManager } from '../utils/audioSystem';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = soundManager.subscribe((muted) => {
      setIsMuted(muted);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSoundToggle = () => {
    soundManager.toggleMute();
  };

  const navLinks = [
    { name: 'Designs', href: '#designs' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Live Customizer', href: '#customizer' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Our Story', href: '#story' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF8ED]/90 backdrop-blur-md shadow-sm border-b border-[#C8A15A]/20 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Typography */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C8A15A] rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#C8A15A]/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="ShaadiChitthi Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-[#76283B] leading-none group-hover:text-[#581C2B] transition-colors">
                Shaadi<span className="text-[#C8A15A]">Chitthi</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#35131F]/70 uppercase font-sans font-medium mt-0.5 hidden sm:inline-block">
                Digital Wedding Invitations
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#35131F]/80 hover:text-[#76283B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8A15A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Ambient Relaxing Piano Toggle Button */}
            <button
              onClick={handleSoundToggle}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
                !isMuted
                  ? 'bg-[#C8A15A]/20 text-[#76283B] border-[#C8A15A] shadow-xs'
                  : 'bg-white/70 text-[#35131F]/70 border-[#C8A15A]/30 hover:border-[#C8A15A] hover:text-[#76283B]'
              }`}
              title={isMuted ? 'Turn on relaxing piano music' : 'Mute piano music'}
              aria-label={isMuted ? 'Unmute piano music' : 'Mute piano music'}
            >
              {!isMuted ? (
                <>
                  <Volume2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#76283B] animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-semibold text-[#76283B]">Piano ♫</span>
                  <span className="flex space-x-0.5 items-center h-3">
                    <span className="w-0.5 h-2 bg-[#C8A15A] rounded-full animate-pulse" />
                    <span className="w-0.5 h-3 bg-[#76283B] rounded-full animate-pulse delay-75" />
                    <span className="w-0.5 h-1.5 bg-[#C8A15A] rounded-full animate-pulse delay-150" />
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#35131F]/60" />
                  <span className="text-[11px] sm:text-xs">Muted</span>
                </>
              )}
            </button>

            {/* Quick WhatsApp Action */}
            <a
              href={SITE_CONFIG.createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center p-2 rounded-full text-[#76283B] hover:text-[#581C2B] hover:bg-[#C8A15A]/15 transition-all"
              title="Chat with ShaadiChitthi on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Primary Action Button */}
            <a
              href="#customizer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#76283B] via-[#8B3045] to-[#76283B] hover:from-[#581C2B] hover:to-[#581C2B] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-[#C8A15A]/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFC185]" />
              <span>Create Your Invite</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#35131F] hover:bg-[#C8A15A]/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF8ED] border-b border-[#C8A15A]/30 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif font-medium text-[#35131F] hover:text-[#76283B] border-b border-[#C8A15A]/10 pb-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#C8A15A]/40 text-[#76283B] bg-[#FFF8ED] hover:bg-[#C8A15A]/10 text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +91 91574 17895</span>
              </a>
              <a
                href="#customizer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white bg-[#76283B] text-sm font-semibold shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#DFC185]" />
                <span>Create Your Wedding Invite</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
