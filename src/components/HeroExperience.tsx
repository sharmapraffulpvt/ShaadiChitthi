import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowDown, ExternalLink, FastForward, Heart } from 'lucide-react';
import { soundManager } from '../utils/audioSystem';

interface HeroExperienceProps {
  onOpenDemo: () => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ onOpenDemo }) => {
  // Animation step: 0 = start, 1 = envelope up, 2 = wax glint, 3 = card slide out, 4 = text & CTA reveal
  const [animStep, setAnimStep] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Step progression for initial cinematic reveal
    const timer1 = setTimeout(() => {
      setAnimStep(1); // envelope rises
    }, 400);

    const timer2 = setTimeout(() => {
      setAnimStep(2); // wax seal glints
      soundManager.playSealGlint();
    }, 1300);

    const timer3 = setTimeout(() => {
      setAnimStep(3); // card slides out
      soundManager.playPaperSwoosh();
    }, 2200);

    const timer4 = setTimeout(() => {
      setAnimStep(4); // typography & actions reveal
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleSkipIntro = () => {
    setAnimStep(4);
    soundManager.playDelicateChime(784);
  };

  // 3D tilt calculation based on cursor relative to center of the invitation envelope
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current || window.innerWidth < 768) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Subtle restrained tilt limits (-10deg to +10deg)
    const tiltX = -(mouseY / (rect.height / 2)) * 7;
    const tiltY = (mouseX / (rect.width / 2)) * 9;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-paper-grain select-none"
    >
      {/* Soft warm studio background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] bg-gradient-to-tr from-[#C8A15A]/15 via-[#FFF8ED] to-[#76283B]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Skip Intro button (unobtrusive control top right) */}
      {animStep < 4 && (
        <button
          onClick={handleSkipIntro}
          className="absolute top-20 right-6 z-30 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-[#76283B] bg-white/70 hover:bg-white border border-[#C8A15A]/30 shadow-sm transition-all animate-pulse"
        >
          <FastForward className="w-3 h-3 text-[#C8A15A]" />
          <span>Skip Intro</span>
        </button>
      )}

      {/* Main Container */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center z-20">
        
        {/* Subtle Decorative Golden Shloka / Blessing Top Accent */}
        <div
          className={`flex items-center justify-center gap-3 mb-4 transition-all duration-1000 ${
            animStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
          }`}
        >
          <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A15A] to-transparent" />
          <span className="text-[#C8A15A] text-xs sm:text-sm tracking-[0.3em] font-serif uppercase font-semibold">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A15A] to-transparent" />
        </div>

        {/* 3D Interactive Invitation Envelope & Card Experience */}
        <div
          className="perspective-1500 my-4 sm:my-6 cursor-pointer group"
          onClick={() => {
            setHasInteracted(true);
            soundManager.playPaperSwoosh();
            onOpenDemo();
          }}
          title="Click to explore interactive digital invitation"
        >
          <div
            className="transform-style-3d transition-transform duration-300 ease-out relative"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
            }}
          >
            {/* The Envelope Base Container */}
            <div
              className={`relative w-[275px] xs:w-[320px] sm:w-[420px] md:w-[460px] h-[210px] xs:h-[230px] sm:h-[290px] rounded-2xl bg-[#FFF8ED] border border-[#C8A15A]/50 shadow-envelope transition-all duration-1000 ${
                animStep >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              {/* Envelope Inner Velvet Lining (Deep Burgundy) */}
              <div className="absolute inset-2 sm:inset-3 rounded-xl bg-gradient-to-b from-[#35131F] via-[#581C2B] to-[#76283B] overflow-hidden">
                {/* Traditional Jaali Gold Pattern inside envelope */}
                <div
                  className="w-full h-full opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(#C8A15A 1px, transparent 1px)`,
                    backgroundSize: '16px 16px',
                  }}
                />
              </div>

              {/* The Invitation Card (Sliding out of envelope) */}
              <div
                className={`absolute left-2.5 right-2.5 sm:left-5 sm:right-5 h-[225px] sm:h-[300px] rounded-xl bg-[#FFFCF7] border border-[#C8A15A]/60 shadow-card-elevated flex flex-col items-center justify-between p-3.5 sm:p-6 transition-all duration-1000 ease-out ${
                  animStep >= 3
                    ? '-translate-y-16 sm:-translate-y-28 shadow-2xl'
                    : 'translate-y-3 opacity-90'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Gold Foil Delicate Border */}
                <div className="absolute inset-1.5 sm:inset-2.5 rounded-lg border border-[#C8A15A]/40 pointer-events-none" />
                <div className="absolute inset-2 sm:inset-3 rounded-md border border-[#C8A15A]/20 pointer-events-none" />

                {/* Card Header Floral Motif & Shloka */}
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 sm:w-8 sm:h-8 text-[#C8A15A] opacity-90 mb-0.5 sm:mb-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M12 2C8 6 4 10 12 18C20 10 16 6 12 2Z" />
                      <circle cx="12" cy="10" r="2.5" />
                      <path d="M7 10C5 12 5 15 12 21C19 15 19 12 17 10" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[9px] sm:text-xs tracking-[0.25em] text-[#76283B] uppercase font-sans font-medium">
                    The Wedding Celebration Of
                  </span>
                </div>

                {/* Couple Names */}
                <div className="my-auto text-center">
                  <h3 className="font-serif text-xl sm:text-4xl text-[#76283B] font-semibold tracking-wide leading-tight">
                    Aarav <span className="font-serif text-[#C8A15A] italic text-lg sm:text-3xl">&</span> Meera
                  </h3>
                  <div className="w-14 sm:w-24 h-[1px] bg-[#C8A15A]/60 mx-auto my-1.5 sm:my-2" />
                  <p className="text-[11px] sm:text-sm font-sans text-[#35131F]/80 font-normal">
                    Saturday, November 28, 2026
                  </p>
                  <p className="text-[10px] sm:text-xs tracking-wider text-[#C8A15A] font-medium mt-0.5">
                    City Palace • Udaipur, Rajasthan
                  </p>

                  {/* Dummy Live Countdown Preview Badge */}
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFF8ED] border border-[#C8A15A]/40 text-[9px] sm:text-[10px] font-semibold text-[#76283B] shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A15A] animate-ping" />
                    <span>⏳ 224 Days to Auspicious Muhurat</span>
                  </div>
                </div>

                {/* Interactive Card Action Preview */}
                <div className="w-full flex items-center justify-between pt-1.5 sm:pt-2 border-t border-[#C8A15A]/20 text-[9px] sm:text-xs text-[#76283B]/80">
                  <span className="flex items-center gap-1 text-[#C8A15A]">
                    <Sparkles className="w-3 h-3" />
                    Interactive Digital Invite
                  </span>
                  <span className="font-medium underline group-hover:text-[#76283B] flex items-center gap-0.5">
                    Tap to open preview <ExternalLink className="w-2.5 h-2.5 inline" />
                  </span>
                </div>
              </div>

              {/* Envelope Lower Flap & Side Folds (100% responsive SVG, zero mobile overflow) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ zIndex: 10 }}
              >
                {/* Left side triangle fold */}
                <polygon points="0,0 50,54 0,100" fill="rgba(255, 248, 237, 0.98)" />
                {/* Right side triangle fold */}
                <polygon points="100,0 50,54 100,100" fill="rgba(255, 248, 237, 0.98)" />
                {/* Bottom flap triangle */}
                <polygon points="0,100 50,48 100,100" fill="#FFF8ED" />
                {/* Subtle fold line shadows */}
                <line x1="0" y1="0" x2="50" y2="54" stroke="rgba(200, 161, 90, 0.2)" strokeWidth="0.5" />
                <line x1="100" y1="0" x2="50" y2="54" stroke="rgba(200, 161, 90, 0.2)" strokeWidth="0.5" />
                <line x1="0" y1="100" x2="50" y2="48" stroke="rgba(53, 19, 31, 0.15)" strokeWidth="0.5" />
                <line x1="100" y1="100" x2="50" y2="48" stroke="rgba(53, 19, 31, 0.15)" strokeWidth="0.5" />
              </svg>

              {/* Handcrafted Wax Seal Centerpiece */}
              <div
                className={`wax-seal absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-20 cursor-pointer transition-all duration-500 ${
                  animStep >= 2 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}
                title="Bespoke Royal Wax Seal"
              >
                {/* Wax Seal Glint Sweep */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className="font-serif text-sm sm:text-base font-bold text-[#DFC185] tracking-tighter drop-shadow-sm select-none">
                    SC
                  </span>
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none transition-opacity duration-700 ${
                      animStep === 2 ? 'opacity-100 animate-pulse' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>

              {/* Delicate Botanical Baby's Breath / Jasmine sprig beside envelope */}
              <div className="absolute -right-4 -bottom-3 sm:-right-8 sm:-bottom-4 z-20 pointer-events-none select-none opacity-80 rotate-12">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                  <path d="M10 90 Q 50 60 85 15" stroke="#9BA58A" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="85" cy="15" r="4.5" fill="#FFF8ED" stroke="#C8A15A" strokeWidth="1.5" />
                  <circle cx="68" cy="30" r="3.5" fill="#FFF8ED" stroke="#C8A15A" strokeWidth="1.5" />
                  <circle cx="50" cy="48" r="4" fill="#FFF8ED" stroke="#C8A15A" strokeWidth="1.5" />
                  <circle cx="75" cy="45" r="3" fill="#FFF8ED" stroke="#C8A15A" strokeWidth="1" />
                  <circle cx="35" cy="65" r="3.5" fill="#FFF8ED" stroke="#C8A15A" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Name Sophisticated Reveal */}
        <div
          className={`mt-4 sm:mt-6 transition-all duration-1000 ${
            animStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#76283B] leading-none mb-3">
            Shaadi<span className="text-[#C8A15A]">Chitthi</span>
          </h1>

          {/* Official Tagline */}
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#35131F]/90 mb-4 tracking-wide">
            “Shaadi ka digital nimantran, dil se.”
          </p>

          {/* Supporting Brand Description */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#35131F]/75 font-sans leading-relaxed mb-8">
            Bespoke interactive wedding invitation websites and animated digital experiences crafted with Indian cultural traditions, royal aesthetics, and effortless WhatsApp sharing.
          </p>

          {/* Two Primary Conversion Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md mx-auto">
            {/* Primary Action 1: Explore Invitations */}
            <a
              href="#designs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#76283B] via-[#8B3045] to-[#76283B] hover:from-[#581C2B] hover:to-[#581C2B] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#C8A15A]/40"
            >
              <span>Explore Invitations</span>
              <ArrowDown className="w-4 h-4 text-[#DFC185]" />
            </a>

            {/* Primary Action 2: Create Your Wedding Invite */}
            <a
              href="#customizer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[#76283B] bg-[#FFF8ED] hover:bg-[#FFF4E0] border-2 border-[#C8A15A] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-[#C8A15A]" />
              <span>Create Your Invite</span>
            </a>
          </div>

          {/* Subtle Live Demo Hint */}
          <p className="text-xs text-[#35131F]/60 mt-4 flex items-center justify-center gap-1.5">
            <Heart className="w-3 h-3 text-[#76283B] fill-[#76283B]" />
            <span>Click the invitation envelope above to experience a live sample invite</span>
          </p>
        </div>
      </div>
    </section>
  );
};
