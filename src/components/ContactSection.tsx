import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Phone, Calendar, Users, Check, Sparkles, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    coupleNames: '',
    phone: '',
    email: '',
    weddingDate: '',
    city: '',
    guestCount: '150-300',
    preferredTheme: 'Royal Rajasthani',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.coupleNames.trim()) {
      err.coupleNames = "Please provide the couple's names.";
    }
    if (!formData.phone.trim()) {
      err.phone = 'Please provide your WhatsApp or mobile number.';
    } else if (formData.phone.trim().length < 8) {
      err.phone = 'Please enter a valid phone number.';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = 'Please enter a valid email address.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate safe client submission and prepare WhatsApp fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    const message = `Namaste ShaadiChitthi! Here are our wedding invitation enquiry details:\n\n` +
      `Couple: ${formData.coupleNames}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || 'Not specified'}\n` +
      `Wedding Date: ${formData.weddingDate || 'TBD'}\n` +
      `City: ${formData.city || 'TBD'}\n` +
      `Estimated Guests: ${formData.guestCount}\n` +
      `Preferred Style: ${formData.preferredTheme}\n` +
      (formData.notes ? `Special Notes: ${formData.notes}\n\n` : '\n') +
      `Looking forward to hearing from you!`;

    window.open(`https://wa.me/919157417895?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8ED] via-[#FFF5E6] to-[#FFF8ED] border-t border-[#C8A15A]/25 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C8A15A] font-semibold block mb-2">
            Let’s Begin
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#76283B]">
            Connect With Our Design Atelier
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C8A15A] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#35131F]/75">
            Share your celebration vision with our team. We respond within hours with custom options and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Business Contact Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="p-8 rounded-2xl bg-white border border-[#C8A15A]/40 shadow-luxury space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C8A15A]/50">
                  <img src="/logo.png" alt="ShaadiChitthi" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#76283B]">ShaadiChitthi</h3>
                  <p className="text-xs text-[#35131F]/70">Shaadi ka digital nimantran, dil se.</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#35131F]/80 leading-relaxed font-sans">
                Whether you have an exact vision in mind or need inspiration, we are here to guide you every step of the way.
              </p>

              {/* Direct WhatsApp Callout Card */}
              <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#35131F]/60 font-semibold block">
                      Instant WhatsApp Concierge
                    </span>
                    <span className="font-sans font-bold text-sm text-[#35131F]">
                      +91 91574 17895
                    </span>
                  </div>
                </div>

                <a
                  href={SITE_CONFIG.createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1ebc59] shadow-sm transition-all"
                >
                  Chat Now
                </a>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#35131F]/80">
                  <Mail className="w-4 h-4 text-[#76283B] shrink-0" />
                  <span>{SITE_CONFIG.email}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#35131F]/80">
                  <Phone className="w-4 h-4 text-[#76283B] shrink-0" />
                  <span>{SITE_CONFIG.whatsappNumber} (Mon - Sat, 10 AM - 8 PM IST)</span>
                </div>
              </div>

              {/* Turnaround Guarantee */}
              <div className="pt-4 border-t border-[#C8A15A]/20 flex items-center gap-2 text-xs text-[#76283B] font-medium">
                <Sparkles className="w-4 h-4 text-[#C8A15A]" />
                <span>Minimum 3 to 5 Days Handcrafted Artisanal Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Custom Invitation Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#C8A15A]/40 shadow-luxury">
            
            {isSubmitted ? (
              <div className="text-center py-10 animate-in fade-in zoom-in-95 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#9BA58A]/20 text-[#76283B] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-[#76283B]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#76283B]">
                  Enquiry Received With Warmth!
                </h3>
                <p className="text-xs sm:text-sm text-[#35131F]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#76283B]">{formData.coupleNames}</strong>. Our design team will contact you on WhatsApp ({formData.phone}) within a few hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1ebc59] shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open Pre-filled WhatsApp Chat Now</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        coupleNames: '',
                        phone: '',
                        email: '',
                        weddingDate: '',
                        city: '',
                        guestCount: '150-300',
                        preferredTheme: 'Royal Rajasthani',
                        notes: '',
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-[#76283B] underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#C8A15A]/20">
                  <h3 className="font-serif text-xl font-bold text-[#76283B]">
                    Custom Wedding Request Form
                  </h3>
                  <span className="text-[11px] text-[#35131F]/60">* Required fields</span>
                </div>

                {/* Couple Names */}
                <div>
                  <label className="block text-xs font-semibold text-[#76283B] mb-1">
                    Couple Names (Groom & Bride) *
                  </label>
                  <input
                    type="text"
                    value={formData.coupleNames}
                    onChange={(e) => {
                      setFormData({ ...formData, coupleNames: e.target.value });
                      if (errors.coupleNames) setErrors({ ...errors, coupleNames: '' });
                    }}
                    placeholder="e.g. Aarav Singhania & Meera Kapoor"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.coupleNames ? 'border-red-500 bg-red-50/20' : 'border-[#C8A15A]/40 bg-[#FFF8ED]/30'
                    } text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]`}
                  />
                  {errors.coupleNames && (
                    <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.coupleNames}
                    </span>
                  )}
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#76283B] mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#C8A15A]/40 bg-[#FFF8ED]/30'
                      } text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#76283B] mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. aarav.meera@gmail.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#C8A15A]/40 bg-[#FFF8ED]/30'
                      } text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Wedding Date & Venue City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#76283B] mb-1">
                      Tentative Wedding Date
                    </label>
                    <input
                      type="text"
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      placeholder="e.g. November 2026"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/30 text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#76283B] mb-1">
                      City / Destination
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Udaipur / Goa / Delhi"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/30 text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                    />
                  </div>
                </div>

                {/* Preferred Theme Selection & Guest Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#76283B] mb-1">
                      Preferred Style / Theme
                    </label>
                    <select
                      value={formData.preferredTheme}
                      onChange={(e) => setFormData({ ...formData, preferredTheme: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/30 text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                    >
                      <option value="Royal Rajasthani">Royal Rajasthani</option>
                      <option value="Modern Minimal">Modern Minimal</option>
                      <option value="Floral Romance">Floral Romance</option>
                      <option value="Traditional Indian">Traditional Indian</option>
                      <option value="Contemporary Luxury">Contemporary Luxury</option>
                      <option value="Festive Celebration">Festive Celebration</option>
                      <option value="100% Bespoke Custom Couture">100% Bespoke Custom Couture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#76283B] mb-1">
                      Estimated Guest Count
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/30 text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                    >
                      <option value="Under 100">Under 100 (Intimate)</option>
                      <option value="100-300">100 - 300 Guests</option>
                      <option value="300-600">300 - 600 Guests</option>
                      <option value="600+">600+ Grand Celebration</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-[#76283B] mb-1">
                    Special Wishes or Specific Ceremonies
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us if you have multiple wedding events, custom music preferences, or special venue requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/30 text-xs sm:text-sm text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                  />
                </div>

                {/* Dual Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3 px-6 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#76283B] hover:bg-[#581C2B] shadow-md transition-all flex items-center justify-center gap-2 border border-[#C8A15A]/40"
                  >
                    <Send className="w-4 h-4 text-[#DFC185]" />
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Custom Request'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto py-3 px-5 rounded-full font-semibold text-xs sm:text-sm text-[#35131F] bg-[#FFF8ED] hover:bg-[#FFF4E0] border border-[#C8A15A] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
