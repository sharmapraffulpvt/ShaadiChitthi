import React, { useState, useEffect } from 'react';
import { Sparkles, RotateCcw, Share2, Heart, Calendar, MapPin, Check, MessageCircle, Clock, Eye, Edit3 } from 'lucide-react';
import { SITE_CONFIG, InvitationDesign } from '../config/siteConfig';
import { soundManager } from '../utils/audioSystem';

interface CustomizationPanelProps {
  initialDesign?: InvitationDesign | null;
}

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ initialDesign }) => {
  const defaultValues = {
    groom: 'Aarav Singhania',
    bride: 'Meera Kapoor',
    date: 'November 28, 2026',
    city: 'Udaipur, Rajasthan',
    message: 'We request the honour of your gracious presence as we step into our forever journey together.',
    theme: initialDesign?.title || 'Royal Rajasthani',
    accentColor: '#76283B',
    includeCountdown: true, // Default ON so visitors know countdown can be included!
  };

  const [formState, setFormState] = useState(defaultValues);
  const [selectedThemeId, setSelectedThemeId] = useState<string>(initialDesign?.id || 'royal-rajasthani');
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form');

  // Dummy Countdown Timer state for real-time live preview
  const [countdownTime, setCountdownTime] = useState({
    days: 224,
    hours: 14,
    minutes: 36,
    seconds: 42,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownTime((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else {
          return { ...prev, seconds: 59, minutes: prev.minutes > 0 ? prev.minutes - 1 : 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const themes = [
    { id: 'royal-rajasthani', name: 'Royal Rajasthani', defaultColor: '#76283B', bg: '#FFF8ED', border: '#C8A15A' },
    { id: 'modern-minimal', name: 'Modern Minimal', defaultColor: '#35131F', bg: '#FFFCF7', border: '#EAD9B9' },
    { id: 'floral-romance', name: 'Floral Romance', defaultColor: '#76283B', bg: '#FFFBF5', border: '#DFC185' },
    { id: 'traditional-indian', name: 'Traditional Indian', defaultColor: '#76283B', bg: '#FFF8ED', border: '#C8A15A' },
    { id: 'contemporary-luxury', name: 'Contemporary Luxury', defaultColor: '#35131F', bg: '#210B13', border: '#C8A15A' },
    { id: 'festive-celebration', name: 'Festive Celebration', defaultColor: '#76283B', bg: '#FFF9F0', border: '#C8A15A' },
  ];

  const colorPalettes = [
    { name: 'Royal Burgundy', hex: '#76283B' },
    { name: 'Antique Gold', hex: '#C8A15A' },
    { name: 'Dark Wine', hex: '#35131F' },
    { name: 'Muted Sage', hex: '#9BA58A' },
    { name: 'Peacock Emerald', hex: '#2C5E4F' },
    { name: 'Sunset Terracotta', hex: '#B85D43' },
  ];

  const handleReset = () => {
    setFormState(defaultValues);
    setSelectedThemeId('royal-rajasthani');
    soundManager.playDelicateChime(660);
  };

  const currentTheme = themes.find((t) => t.id === selectedThemeId) || themes[0];
  const isDarkTheme = selectedThemeId === 'contemporary-luxury';

  return (
    <section id="customizer" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8ED] via-[#FFF5E6] to-[#FFF8ED] border-y border-[#C8A15A]/25 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-[#76283B] bg-[#C8A15A]/15 border border-[#C8A15A]/40 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A15A]" />
            <span>Interactive Customization Studio</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#76283B] tracking-tight">
            See Your Wedding Card Come Alive
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-[#35131F]/75 max-w-xl mx-auto">
            Personalize names, wedding date, blessing text, and theme below to preview your bespoke invitation in real time.
          </p>

          {/* Mobile Tab Switcher (Visible only on mobile devices) */}
          <div className="flex lg:hidden items-center justify-center p-1 bg-white rounded-full border border-[#C8A15A]/40 shadow-sm max-w-xs mx-auto mt-6">
            <button
              onClick={() => {
                setMobileTab('form');
                soundManager.playDelicateChime(700);
              }}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                mobileTab === 'form'
                  ? 'bg-[#76283B] text-white shadow-sm'
                  : 'text-[#35131F]/70 hover:text-[#76283B]'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>1. Edit Details</span>
            </button>
            <button
              onClick={() => {
                setMobileTab('preview');
                soundManager.playDelicateChime(850);
              }}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                mobileTab === 'preview'
                  ? 'bg-[#76283B] text-white shadow-sm'
                  : 'text-[#35131F]/70 hover:text-[#76283B]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>2. View Card</span>
            </button>
          </div>
        </div>

        {/* Studio Grid: Left Form Controls, Right Live Responsive Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Form Editor Controls (5 cols) */}
          <div
            className={`lg:col-span-5 bg-white p-5 sm:p-8 rounded-2xl border border-[#C8A15A]/40 shadow-luxury space-y-5 sm:space-y-6 ${
              mobileTab === 'preview' ? 'hidden lg:block' : 'block'
            }`}
          >
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#C8A15A]/20">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#76283B]">
                Invitation Details
              </h3>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs text-[#35131F]/60 hover:text-[#76283B] transition-colors p-1"
                title="Reset to default sample details"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Preview</span>
              </button>
            </div>

            {/* Couple Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#76283B] mb-1">
                  Groom's Name
                </label>
                <input
                  type="text"
                  value={formState.groom}
                  onChange={(e) => setFormState({ ...formState, groom: e.target.value })}
                  placeholder="e.g. Aarav"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/30 text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#76283B] mb-1">
                  Bride's Name
                </label>
                <input
                  type="text"
                  value={formState.bride}
                  onChange={(e) => setFormState({ ...formState, bride: e.target.value })}
                  placeholder="e.g. Meera"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/30 text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                />
              </div>
            </div>

            {/* Wedding Date & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#76283B] mb-1">
                  Wedding Date
                </label>
                <input
                  type="text"
                  value={formState.date}
                  onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                  placeholder="e.g. November 28, 2026"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/30 text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#76283B] mb-1">
                  City / Venue
                </label>
                <input
                  type="text"
                  value={formState.city}
                  onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                  placeholder="e.g. Udaipur, Rajasthan"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/30 text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                />
              </div>
            </div>

            {/* Dummy Countdown Option Toggle (User requested feature!) */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#FFF8ED] via-[#FFF3DF] to-[#FFF8ED] border border-[#C8A15A]/50 shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#76283B]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#76283B]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#76283B]">Live Muhurat Countdown</span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#C8A15A] text-[#35131F] uppercase">
                      Included
                    </span>
                  </div>
                  <p className="text-[11px] text-[#35131F]/70 leading-snug">
                    Display live ticking days, hours & minutes till the wedding!
                  </p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={formState.includeCountdown}
                  onChange={(e) => {
                    setFormState({ ...formState, includeCountdown: e.target.checked });
                    soundManager.playDelicateChime(750);
                  }}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#76283B]"></div>
              </label>
            </div>

            {/* Invitation Message */}
            <div>
              <label className="block text-xs font-semibold text-[#76283B] mb-1">
                Custom Invitation Message / Blessing
              </label>
              <textarea
                rows={2}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Write your welcoming invitation words..."
                className="w-full px-3.5 py-2 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/30 text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
              />
            </div>

            {/* Theme Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#76283B] mb-2">
                Aesthetic Theme Collection
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setSelectedThemeId(t.id);
                      setFormState({ ...formState, theme: t.name, accentColor: t.defaultColor });
                      soundManager.playDelicateChime(800);
                    }}
                    className={`p-2.5 rounded-xl text-left border text-xs font-medium transition-all ${
                      selectedThemeId === t.id
                        ? 'border-[#76283B] bg-[#76283B]/10 text-[#76283B] font-semibold ring-1 ring-[#76283B]'
                        : 'border-[#C8A15A]/30 text-[#35131F]/80 hover:border-[#C8A15A]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate">{t.name}</span>
                      {selectedThemeId === t.id && <Check className="w-3 h-3 text-[#76283B] shrink-0" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Color Palette */}
            <div>
              <label className="block text-xs font-semibold text-[#76283B] mb-2">
                Primary Accent Color
              </label>
              <div className="flex items-center gap-3">
                {colorPalettes.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setFormState({ ...formState, accentColor: c.hex })}
                    className={`w-7 h-7 rounded-full transition-transform border border-white shadow-sm flex items-center justify-center ${
                      formState.accentColor === c.hex ? 'scale-125 ring-2 ring-[#76283B]' : 'hover:scale-110'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {formState.accentColor === c.hex && <Check className="w-3 h-3 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Important Notice Regarding Delivery Timeline (Minimum 3 Days) */}
            <div className="p-3.5 rounded-xl bg-[#FFF8ED] border border-[#C8A15A]/30 text-[11px] text-[#35131F]/75 leading-relaxed">
              <span className="font-semibold text-[#76283B]">Delivery Timeline:</span> Minimum 3 to 5 days. Our design atelier handcrafts and personalizes every schedule, sacred shloka, and Google Maps direction with utmost royal care.
            </div>

            {/* Mobile View Card Jump Button */}
            <div className="block lg:hidden pt-1">
              <button
                type="button"
                onClick={() => setMobileTab('preview')}
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-[#76283B] bg-[#FFF8ED] border border-[#C8A15A] hover:bg-[#FFF4E0] transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-[#C8A15A]" />
                <span>Preview Customized Card Above</span>
              </button>
            </div>

            {/* Order On WhatsApp Action */}
            <div className="pt-2">
              <a
                href={SITE_CONFIG.createCustomizerInquiryLink(formState)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#76283B] via-[#8B3045] to-[#76283B] hover:from-[#581C2B] hover:to-[#581C2B] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-[#C8A15A]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Send to WhatsApp (+91 91574 17895)</span>
              </a>
            </div>

          </div>

          {/* Right Live Invitation Card Preview (7 cols) */}
          <div
            className={`lg:col-span-7 flex flex-col items-center w-full ${
              mobileTab === 'form' ? 'hidden lg:flex' : 'flex'
            }`}
          >
            {/* Live Indicator Tag */}
            <div className="flex items-center justify-between w-full max-w-lg mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold text-[#76283B] bg-white border border-[#C8A15A]/40 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Interactive Preview</span>
              </div>

              {/* Mobile back to editor button */}
              <button
                onClick={() => setMobileTab('form')}
                className="lg:hidden text-xs font-semibold text-[#76283B] flex items-center gap-1 underline"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Info</span>
              </button>
            </div>

            {/* The Live Card Composition */}
            <div
              className="w-full max-w-lg min-h-[460px] sm:min-h-[540px] rounded-2xl border-2 shadow-2xl p-5 sm:p-9 flex flex-col items-center justify-between transition-all duration-500 relative overflow-hidden"
              style={{
                backgroundColor: currentTheme.bg,
                borderColor: formState.accentColor,
              }}
            >
              {/* Gold Foil Inner Framing */}
              <div
                className="absolute inset-2.5 sm:inset-4 rounded-xl border pointer-events-none"
                style={{ borderColor: `${formState.accentColor}40` }}
              />
              <div
                className="absolute inset-3.5 sm:inset-5 rounded-lg border pointer-events-none"
                style={{ borderColor: `${formState.accentColor}20` }}
              />

              {/* Card Header Shloka & Auspicious Motif */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <span
                  className="text-xs sm:text-sm font-serif font-bold tracking-[0.3em] uppercase mb-1"
                  style={{ color: formState.accentColor }}
                >
                  ॥ श्री गणेशाय नमः ॥
                </span>
                <span
                  className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans font-medium"
                  style={{ color: isDarkTheme ? '#FFF8ED80' : '#35131F80' }}
                >
                  Together with their families
                </span>
              </div>

              {/* Couple Names Centerpiece */}
              <div className="relative z-10 text-center my-auto px-2 sm:px-4 w-full">
                <p
                  className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-sans mb-2"
                  style={{ color: formState.accentColor }}
                >
                  The Wedding Celebration Of
                </p>

                <h3
                  className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight"
                  style={{ color: isDarkTheme ? '#FFF8ED' : '#76283B' }}
                >
                  {formState.groom || 'Groom'}
                </h3>

                <div className="flex items-center justify-center gap-3 my-1.5 sm:my-2">
                  <div className="w-10 sm:w-12 h-[1px]" style={{ backgroundColor: `${formState.accentColor}60` }} />
                  <span
                    className="font-serif italic text-xl sm:text-2xl"
                    style={{ color: formState.accentColor }}
                  >
                    &
                  </span>
                  <div className="w-10 sm:w-12 h-[1px]" style={{ backgroundColor: `${formState.accentColor}60` }} />
                </div>

                <h3
                  className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight"
                  style={{ color: isDarkTheme ? '#FFF8ED' : '#76283B' }}
                >
                  {formState.bride || 'Bride'}
                </h3>

                {/* Personalized Message */}
                <p
                  className="font-serif italic text-xs sm:text-sm max-w-sm mx-auto mt-3 leading-relaxed"
                  style={{ color: isDarkTheme ? '#FFF8EDBF' : '#35131FBF' }}
                >
                  “{formState.message}”
                </p>

                {/* Dummy Countdown Option Rendered Live on the Card */}
                {formState.includeCountdown && (
                  <div className="mt-4 pt-3 border-t border-[#C8A15A]/25 max-w-xs mx-auto animate-in fade-in zoom-in-95 duration-300">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest block mb-1.5"
                      style={{ color: formState.accentColor }}
                    >
                      ⏳ Auspicious Muhurat Countdown
                    </span>
                    <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                      {[
                        { label: 'Days', val: countdownTime.days },
                        { label: 'Hours', val: countdownTime.hours },
                        { label: 'Mins', val: countdownTime.minutes },
                        { label: 'Secs', val: countdownTime.seconds },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex flex-col items-center justify-center p-1.5 rounded-lg border shadow-xs"
                          style={{
                            backgroundColor: isDarkTheme ? '#35131F' : '#FFFFFF',
                            borderColor: `${formState.accentColor}40`,
                          }}
                        >
                          <span
                            className="font-serif text-sm sm:text-base font-bold leading-tight"
                            style={{ color: isDarkTheme ? '#FFF8ED' : '#76283B' }}
                          >
                            {item.val}
                          </span>
                          <span
                            className="text-[8px] uppercase tracking-wider"
                            style={{ color: isDarkTheme ? '#DFC185' : '#35131F90' }}
                          >
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Date and Location Details */}
              <div className="relative z-10 w-full text-center pt-3 border-t" style={{ borderColor: `${formState.accentColor}30` }}>
                <div className="flex items-center justify-center gap-2 mb-0.5">
                  <Calendar className="w-3.5 h-3.5" style={{ color: formState.accentColor }} />
                  <span
                    className="text-xs sm:text-sm font-sans font-medium"
                    style={{ color: isDarkTheme ? '#FFF8ED' : '#35131F' }}
                  >
                    {formState.date || 'Date TBD'}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-3.5 h-3.5" style={{ color: formState.accentColor }} />
                  <span
                    className="text-xs font-sans"
                    style={{ color: formState.accentColor }}
                  >
                    {formState.city || 'Venue TBD'}
                  </span>
                </div>

                <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[9px] sm:text-[10px] uppercase tracking-widest text-[#C8A15A]">
                  <Sparkles className="w-3 h-3" />
                  <span>ShaadiChitthi Digital Experience</span>
                </div>
              </div>

            </div>

            {/* Quick WhatsApp Action on mobile */}
            <div className="w-full max-w-lg mt-3 block lg:hidden">
              <a
                href={SITE_CONFIG.createCustomizerInquiryLink(formState)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full font-semibold text-xs text-white bg-[#25D366] hover:bg-[#1ebc59] shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp (+91 91574 17895)</span>
              </a>
            </div>

            <p className="text-xs text-[#35131F]/60 mt-3 text-center hidden lg:block">
              Ready to order this customized design? Click "Send to WhatsApp" to connect directly with our studio.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
