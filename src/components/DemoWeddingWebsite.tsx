import React, { useState, useEffect } from 'react';
import { 
  X, Calendar, Clock, MapPin, Heart, Music, Check, Share2, 
  Send, ChevronDown, Sparkles, Navigation, CalendarPlus 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG } from '../config/siteConfig';

interface DemoWeddingWebsiteProps {
  isOpen: boolean;
  onClose: () => void;
  initialTheme?: string;
}

export const DemoWeddingWebsite: React.FC<DemoWeddingWebsiteProps> = ({ isOpen, onClose, initialTheme = 'Royal Rajasthani' }) => {
  const [isOpenState, setIsOpenState] = useState(false);
  const [activeTab, setActiveTab] = useState<'invite' | 'schedule' | 'venue' | 'gallery' | 'rsvp'>('invite');
  
  // RSVP Form State
  const [rsvpData, setRsvpData] = useState({
    guestName: '',
    phone: '',
    guestsCount: '2',
    ceremonies: ['All Ceremonies'],
    message: '',
  });
  const [isRsvpSubmitted, setIsRsvpSubmitted] = useState(false);

  // Countdown timer state for November 28, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Trigger opening animation
      const timer = setTimeout(() => setIsOpenState(true), 150);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      setIsOpenState(false);
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Target date: November 28, 2026 10:00 AM IST
  useEffect(() => {
    const targetDate = new Date('2026-11-28T10:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpData.guestName.trim()) return;

    setIsRsvpSubmitted(true);
    // Luxury confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#76283B', '#C8A15A', '#EAD9B9', '#FFF8ED'],
      });
    } catch {
      // ignore
    }
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Aarav & Meera's Royal Wedding");
    const details = encodeURIComponent("Celebration of the holy union of Aarav & Meera in Udaipur, Rajasthan.");
    const location = encodeURIComponent("City Palace Complex, Udaipur, Rajasthan, India");
    const dates = "20261128T043000Z/20261129T183000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Interactive Wedding Website Demo"
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-[#35131F]/80 backdrop-blur-md transition-opacity duration-300 overflow-y-auto"
    >
      {/* Main Wedding Website Container */}
      <div className="relative w-full max-w-4xl min-h-screen sm:min-h-0 sm:max-h-[92vh] bg-[#FFF8ED] text-[#35131F] sm:rounded-2xl shadow-2xl border border-[#C8A15A]/40 overflow-y-auto flex flex-col font-sans">
        
        {/* Top Floating Demo Banner & Close Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3 bg-[#35131F] text-[#FFF8ED] border-b border-[#C8A15A]/40 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8A15A] animate-ping" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#DFC185]">
              Live Interactive Demo • {initialTheme}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.createDesignInquiryLink(initialTheme, 'Aarav & Meera')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C8A15A] text-[#35131F] hover:bg-[#DFC185] transition-colors"
            >
              <span>Get This Invite for Your Wedding</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#FFF8ED]/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Microsite Hero Cover */}
        <div className="relative py-12 px-6 sm:px-12 text-center bg-gradient-to-b from-[#FFF8ED] via-[#FFF5E6] to-[#FFF8ED] border-b border-[#C8A15A]/30 overflow-hidden">
          {/* Subtle Decorative Arch Motif */}
          <div className="max-w-xl mx-auto flex flex-col items-center">
            
            <p className="font-serif text-[#C8A15A] text-sm tracking-[0.25em] uppercase font-semibold mb-2">
              ॥ ॐ श्री गणेशाय नमः ॥
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-[#76283B]/80 max-w-md mx-auto mb-4">
              "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"
            </p>

            <span className="text-xs uppercase tracking-[0.2em] text-[#35131F]/60 font-medium mb-1">
              Together with their families
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#76283B] my-2 tracking-wide">
              Aarav <span className="text-[#C8A15A] font-serif italic text-2xl sm:text-4xl">&</span> Meera
            </h1>

            <p className="font-serif text-sm sm:text-base text-[#35131F]/80 max-w-lg mx-auto italic mt-1 mb-5">
              cordially invite you to celebrate the joyous union of love, tradition, and lifelong companionship.
            </p>

            {/* Date and Venue Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-xl bg-white/70 border border-[#C8A15A]/40 shadow-sm text-xs sm:text-sm">
              <span className="flex items-center gap-1.5 font-medium text-[#76283B]">
                <Calendar className="w-4 h-4 text-[#C8A15A]" />
                November 27–29, 2026
              </span>
              <span className="text-[#C8A15A]">•</span>
              <span className="flex items-center gap-1.5 font-medium text-[#35131F]">
                <MapPin className="w-4 h-4 text-[#C8A15A]" />
                The City Palace • Udaipur
              </span>
            </div>

            {/* Live Wedding Countdown */}
            <div className="mt-8 pt-6 border-t border-[#C8A15A]/20 w-full">
              <span className="text-[11px] uppercase tracking-widest text-[#76283B] font-semibold block mb-3">
                Counting down to the auspicious moment
              </span>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm mx-auto">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.minutes },
                  { label: 'Secs', value: timeLeft.seconds },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white border border-[#C8A15A]/30 shadow-sm"
                  >
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#76283B]">
                      {item.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#35131F]/60">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons: Add to Calendar & RSVP Quick Jump */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleAddToCalendar}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#76283B] bg-white hover:bg-[#FFF4E0] border border-[#C8A15A]/50 shadow-sm transition-all"
              >
                <CalendarPlus className="w-4 h-4 text-[#C8A15A]" />
                <span>Add to Calendar</span>
              </button>
              <button
                onClick={() => {
                  const rsvpSection = document.getElementById('demo-rsvp-section');
                  rsvpSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#76283B] hover:bg-[#581C2B] shadow-md transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#DFC185]" />
                <span>RSVP Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Wedding Ceremonies Timeline Section */}
        <div className="py-10 px-6 sm:px-12 bg-[#FFF8ED]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#C8A15A] font-semibold">
                Celebration Itinerary
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#76283B] mt-1">
                Ceremonies & Functions
              </h2>
              <div className="w-16 h-[1.5px] bg-[#C8A15A] mx-auto mt-2" />
            </div>

            <div className="space-y-4">
              {[
                {
                  day: 'Day 1 • Nov 27',
                  name: 'Mehendi & Chooda Rasam',
                  time: '04:00 PM onwards',
                  venue: 'Zenana Mahal Courtyard',
                  attire: 'Vibrant Floral or Pastel Traditional',
                  icon: '🌸',
                  description: 'An evening of henna artistry, dhol folk music, traditional chaat counters, and laughter.',
                },
                {
                  day: 'Day 1 • Nov 27',
                  name: 'The Royal Sangeet Gala',
                  time: '08:00 PM onwards',
                  venue: 'Manek Chowk Grand Stage',
                  attire: 'Glitz, Glamour & Indo-Western Formal',
                  icon: '✨',
                  description: 'A night of choreographed family performances, live Sufi band, and celebration under the stars.',
                },
                {
                  day: 'Day 2 • Nov 28',
                  name: 'Haldi & Phoolon Ki Holi',
                  time: '10:00 AM onwards',
                  venue: 'Shiv Niwas Palace Lawns',
                  attire: 'Traditional Shades of Turmeric Yellow',
                  icon: '🌼',
                  description: 'Blessing the couple with auspicious haldi paste, marigold petals shower, and joyful folk songs.',
                },
                {
                  day: 'Day 2 • Nov 28',
                  name: 'Baraat, Varmala & Pheras',
                  time: '05:30 PM (Baraat) • 07:00 PM (Pheras)',
                  venue: 'Jagmandir Island Palace',
                  attire: 'Royal Ethnic Indian / Formal Sherwani & Lehengas',
                  icon: '👑',
                  description: 'The royal wedding procession arriving by decorated boats followed by the sacred Vedic vows around the Agni.',
                },
                {
                  day: 'Day 3 • Nov 29',
                  name: 'The Grand Reception Dinner',
                  time: '07:30 PM onwards',
                  venue: 'Fateh Prakash Palace Durbar Hall',
                  attire: 'Black Tie or Royal Indian Regal Wear',
                  icon: '🥂',
                  description: 'A formal banquet dinner welcoming the newlyweds with royal Rajasthani and global gourmet delicacies.',
                },
              ].map((ceremony, idx) => (
                <div
                  key={ceremony.name}
                  className="p-5 rounded-xl bg-white border border-[#C8A15A]/30 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 sm:items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFF8ED] border border-[#C8A15A]/40 flex items-center justify-center text-2xl shrink-0">
                    {ceremony.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="text-[11px] font-semibold text-[#C8A15A] uppercase tracking-wider">
                        {ceremony.day}
                      </span>
                      <span className="text-xs text-[#35131F]/70 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#76283B]" />
                        {ceremony.time}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#76283B]">
                      {ceremony.name}
                    </h3>
                    <p className="text-xs text-[#35131F]/80 my-1">
                      {ceremony.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[#35131F]/70">
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#C8A15A]" />
                        {ceremony.venue}
                      </span>
                      <span className="text-[#C8A15A]">•</span>
                      <span className="italic text-[#76283B]">
                        Dress Code: {ceremony.attire}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Venue Information & Interactive Map */}
        <div className="py-10 px-6 sm:px-12 bg-[#FFF5E6] border-y border-[#C8A15A]/30">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs uppercase tracking-widest text-[#C8A15A] font-semibold">
              Venue & Directions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#76283B] mt-1 mb-2">
              The City Palace, Udaipur
            </h2>
            <p className="text-xs sm:text-sm text-[#35131F]/80 mb-6">
              Old City, Udaipur, Rajasthan 313001, India • Boat transfers provided from Bansi Ghat jetty.
            </p>

            {/* Sample Map Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#C8A15A]/50 shadow-md bg-white">
              <iframe
                title="Sample Wedding Venue Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.2709669527014!2d73.6811234759604!3d24.57643507811604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e564871d3795%3A0x6b5336bf9bf95e92!2sCity%20Palace%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-56 sm:h-64 border-0"
                loading="lazy"
              />
              <div className="p-3 bg-white flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[#35131F]/70 flex items-center gap-1">
                  <Navigation className="w-3.5 h-3.5 text-[#76283B]" />
                  Direct navigation for outstation guests
                </span>
                <a
                  href="https://maps.google.com/?q=City+Palace+Udaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#76283B] hover:text-[#581C2B] underline flex items-center gap-1"
                >
                  Open in Google Maps App
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Romantic Photo Gallery Preview */}
        <div className="py-10 px-6 sm:px-12 bg-[#FFF8ED]">
          <div className="max-w-2xl mx-auto text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-[#C8A15A] font-semibold">
              Moments of Love
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#76283B] mt-1">
              Glimpses of Togetherness
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C8A15A] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {[
              {
                title: 'The Proposal',
                desc: 'Lake Pichola sunset',
                bg: 'from-[#76283B]/20 to-[#C8A15A]/30',
              },
              {
                title: 'Roka Ceremony',
                desc: 'Family blessings',
                bg: 'from-[#C8A15A]/25 to-[#9BA58A]/30',
              },
              {
                title: 'Pre-Wedding Shoot',
                desc: 'Jagmandir heritage',
                bg: 'from-[#581C2B]/20 to-[#DFC185]/35',
              },
            ].map((photo, i) => (
              <div
                key={photo.title}
                className={`relative h-44 rounded-xl border border-[#C8A15A]/30 overflow-hidden shadow-sm flex flex-col justify-end p-3 bg-gradient-to-br ${photo.bg}`}
              >
                <div className="absolute inset-0 bg-[#35131F]/10" />
                <div className="relative z-10 bg-white/90 backdrop-blur-xs p-2 rounded-lg border border-[#C8A15A]/20">
                  <p className="font-serif font-bold text-xs text-[#76283B] leading-tight">
                    {photo.title}
                  </p>
                  <p className="text-[10px] text-[#35131F]/70">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guest RSVP Interface */}
        <div id="demo-rsvp-section" className="py-10 px-6 sm:px-12 bg-[#FFF5E6] border-t border-[#C8A15A]/30">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-[#C8A15A] font-semibold">
                Will You Join Us?
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#76283B] mt-1">
                Kindly Respond (RSVP)
              </h2>
              <p className="text-xs text-[#35131F]/70 mt-1">
                Please confirm your gracious presence by November 10, 2026.
              </p>
            </div>

            {isRsvpSubmitted ? (
              <div className="p-6 rounded-2xl bg-white border-2 border-[#C8A15A] shadow-md text-center animate-in fade-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-[#9BA58A]/20 text-[#76283B] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-[#76283B]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#76283B]">
                  Thank You, {rsvpData.guestName}!
                </h3>
                <p className="text-xs text-[#35131F]/80 mt-1 mb-4">
                  Your response for {rsvpData.guestsCount} {parseInt(rsvpData.guestsCount) === 1 ? 'guest' : 'guests'} has been warmly recorded. The family looks forward to celebrating with you!
                </p>
                <button
                  onClick={() => setIsRsvpSubmitted(false)}
                  className="text-xs font-semibold text-[#76283B] underline hover:text-[#581C2B]"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="p-6 rounded-2xl bg-white border border-[#C8A15A]/40 shadow-md space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#76283B] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh & Sunita Sharma"
                    value={rsvpData.guestName}
                    onChange={(e) => setRsvpData({ ...rsvpData, guestName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/40 text-xs text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#76283B] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={rsvpData.phone}
                      onChange={(e) => setRsvpData({ ...rsvpData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/40 text-xs text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#76283B] mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={rsvpData.guestsCount}
                      onChange={(e) => setRsvpData({ ...rsvpData, guestsCount: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/40 text-xs text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4+ Persons (Family)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#76283B] mb-1">
                    Heartfelt Wishes for the Couple
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Share your blessings and congratulations..."
                    value={rsvpData.message}
                    onChange={(e) => setRsvpData({ ...rsvpData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#C8A15A]/40 bg-[#FFF8ED]/40 text-xs text-[#35131F] focus:outline-none focus:ring-2 focus:ring-[#76283B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-[#76283B] hover:bg-[#581C2B] shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4 text-[#DFC185]" />
                  <span>Confirm RSVP Attendance</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Personalized Family Closing Blessing */}
        <div className="py-8 px-6 text-center bg-[#FFF8ED] border-t border-[#C8A15A]/20">
          <p className="font-serif italic text-sm text-[#76283B] max-w-md mx-auto">
            “With the heavenly blessings of our beloved elders, we await your presence to make our celebration truly complete.”
          </p>
          <p className="font-serif text-xs font-semibold text-[#C8A15A] uppercase tracking-widest mt-2">
            The Singhania & Kapoor Families
          </p>
        </div>

        {/* Bottom Action Footer */}
        <div className="sticky bottom-0 z-20 p-4 bg-[#FFF8ED]/95 backdrop-blur-md border-t border-[#C8A15A]/40 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-2 text-xs text-[#35131F]/80">
            <span className="font-semibold text-[#76283B]">Love this experience?</span>
            <span className="hidden sm:inline">Get a custom invite just like this for your wedding.</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-full text-xs font-medium border border-[#C8A15A]/60 text-[#35131F] hover:bg-[#FFF4E0] transition-colors"
            >
              Back to ShaadiChitthi
            </button>
            <a
              href={SITE_CONFIG.createDesignInquiryLink(initialTheme, 'Aarav & Meera')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#76283B] hover:bg-[#581C2B] shadow-md transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFC185]" />
              <span>Customize on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
