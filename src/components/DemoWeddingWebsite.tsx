import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Calendar, Clock, MapPin, Heart, Check, 
  Send, Sparkles, Navigation, CalendarPlus, ChevronDown, CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG } from '../config/siteConfig';
import { soundManager } from '../utils/audioSystem';

export interface CeremonyItem {
  day: string;
  name: string;
  time: string;
  venue: string;
  attire: string;
  icon: string;
  description: string;
}

export interface DemoThemeConfig {
  id: string;
  title: string;
  tagline: string;
  category: string;
  couple: {
    groom: string;
    bride: string;
    displayNames: string;
    subheading: string;
  };
  blessing: {
    header: string;
    verse: string;
  };
  eventDates: string;
  targetCountdownDate: string;
  venue: {
    name: string;
    city: string;
    address: string;
    mapQuery: string;
  };
  palette: {
    isDark: boolean;
    headerBg: string;
    headerText: string;
    pageBg: string;
    cardBg: string;
    primaryText: string;
    secondaryText: string;
    accentColor: string;
    borderColor: string;
    bannerGradient: string;
    badgeBg: string;
    badgeText: string;
    btnPrimaryBg: string;
    btnPrimaryText: string;
  };
  ceremonies: CeremonyItem[];
  gallery: Array<{ title: string; desc: string; gradient: string }>;
  familyBlessing: {
    quote: string;
    families: string;
  };
}

export const DEMO_THEMES: DemoThemeConfig[] = [
  {
    id: 'royal-rajasthani',
    title: 'Royal Rajasthani',
    tagline: 'The Grand Heritage Collection',
    category: 'Royal',
    couple: {
      groom: 'Aarav',
      bride: 'Meera',
      displayNames: 'Aarav & Meera',
      subheading: 'Together with their families, cordially invite you to celebrate the joyous royal union.',
    },
    blessing: {
      header: '॥ ॐ श्री गणेशाय नमः ॥',
      verse: '“वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥”',
    },
    eventDates: 'November 27–29, 2026',
    targetCountdownDate: '2026-11-28T10:00:00+05:30',
    venue: {
      name: 'The City Palace, Udaipur',
      city: 'Udaipur, Rajasthan',
      address: 'Old City, Udaipur, Rajasthan 313001 • Royal boat transfers from Bansi Ghat Jetty',
      mapQuery: 'City+Palace+Udaipur',
    },
    palette: {
      isDark: false,
      headerBg: '#35131F',
      headerText: '#FFF8ED',
      pageBg: '#FFF8ED',
      cardBg: '#FFFFFF',
      primaryText: '#76283B',
      secondaryText: '#35131F',
      accentColor: '#C8A15A',
      borderColor: '#C8A15A',
      bannerGradient: 'from-[#FFF8ED] via-[#FFF5E6] to-[#FFF8ED]',
      badgeBg: '#C8A15A20',
      badgeText: '#76283B',
      btnPrimaryBg: '#76283B',
      btnPrimaryText: '#FFFFFF',
    },
    ceremonies: [
      {
        day: 'Day 1 • Nov 27',
        name: 'Mehendi & Chooda Rasam',
        time: '04:00 PM onwards',
        venue: 'Zenana Mahal Courtyard',
        attire: 'Vibrant Floral or Pastel Traditional',
        icon: '🌸',
        description: 'An auspicious evening of henna artistry, dhol folk melodies, traditional chaat counters, and laughter.',
      },
      {
        day: 'Day 1 • Nov 27',
        name: 'The Royal Sangeet Gala',
        time: '08:00 PM onwards',
        venue: 'Manek Chowk Grand Stage',
        attire: 'Glitz, Glamour & Indo-Western Formal',
        icon: '✨',
        description: 'A grand night of choreographed family performances, live Sufi ensemble, and celebration under the stars.',
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
        attire: 'Royal Ethnic Indian / Sherwani & Lehengas',
        icon: '👑',
        description: 'The royal wedding procession arriving by decorated boats followed by sacred Vedic vows around the Agni.',
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
    ],
    gallery: [
      { title: 'The Royal Proposal', desc: 'Sunset at Lake Pichola', gradient: 'from-[#76283B]/20 to-[#C8A15A]/30' },
      { title: 'Roka Ceremony', desc: 'Family blessings & joy', gradient: 'from-[#C8A15A]/25 to-[#9BA58A]/30' },
      { title: 'Pre-Wedding Glimpses', desc: 'Heritage moments at Jagmandir', gradient: 'from-[#581C2B]/20 to-[#DFC185]/35' },
    ],
    familyBlessing: {
      quote: '“With the heavenly blessings of our beloved elders, we await your presence to make our royal celebration truly complete.”',
      families: 'The Singhania & Kapoor Families',
    },
  },
  {
    id: 'modern-minimal',
    title: 'Modern Minimal',
    tagline: 'The Editorial Romance',
    category: 'Minimal',
    couple: {
      groom: 'Dev',
      bride: 'Natasha',
      displayNames: 'Dev & Natasha',
      subheading: 'Request the honour of your presence as they exchange vows under the sun-kissed Goan horizon.',
    },
    blessing: {
      header: 'LOVE • ETERNITY • DEVOTION',
      verse: '“Two lives, two hearts, joined in friendship and united forever in love under the endless ocean sky.”',
    },
    eventDates: 'December 11–13, 2026',
    targetCountdownDate: '2026-12-12T16:30:00+05:30',
    venue: {
      name: 'Cabo Serai Cliffside Estate, Goa',
      city: 'South Goa, India',
      address: 'Cabo de Rama, Canacona, South Goa 403702 • Private chauffeur transfers from Dabolim & MOPA airports',
      mapQuery: 'Cabo+Serai+Goa',
    },
    palette: {
      isDark: false,
      headerBg: '#1F1A1C',
      headerText: '#FCFBF7',
      pageBg: '#FCFBF7',
      cardBg: '#FFFFFF',
      primaryText: '#1F1A1C',
      secondaryText: '#4A4345',
      accentColor: '#C8A15A',
      borderColor: '#E6E0D5',
      bannerGradient: 'from-[#FCFBF7] via-[#F4F1EA] to-[#FCFBF7]',
      badgeBg: '#C8A15A15',
      badgeText: '#1F1A1C',
      btnPrimaryBg: '#1F1A1C',
      btnPrimaryText: '#FCFBF7',
    },
    ceremonies: [
      {
        day: 'Day 1 • Dec 11',
        name: 'Golden Hour Welcome Cocktails',
        time: '05:00 PM onwards',
        venue: 'The Sunset Cliff Deck',
        attire: 'Coastal Chic, White Linen & Pastels',
        icon: '🍸',
        description: 'Chilled sangrias, fresh coastal grills, and live saxophone as we greet family and friends arriving from across the globe.',
      },
      {
        day: 'Day 2 • Dec 12',
        name: 'Citrus Haldi & Poolside Brunch',
        time: '10:30 AM onwards',
        venue: 'The Coconut Grove Lawn',
        attire: 'Warm Ochre, Crisp White & Florals',
        icon: '☀️',
        description: 'A relaxed sun-drenched morning with fragrant turmeric pastes, artisanal brunch bars, and acoustic guitar covers.',
      },
      {
        day: 'Day 2 • Dec 12',
        name: 'Sunset Vows & Oceanfront Pheras',
        time: '04:30 PM onwards',
        venue: 'Private Bay Beachfront',
        attire: 'Modern Pastel Indian / Kurta & Flowing Drapes',
        icon: '🌊',
        description: 'Barefoot by the gentle tides as the crimson sunset illuminates our sacred vows and seven steps.',
      },
      {
        day: 'Day 3 • Dec 13',
        name: 'The Starlit Coastal Dinner',
        time: '07:30 PM onwards',
        venue: 'The Seaside Glasshouse Pavilion',
        attire: 'Black Tie Optional / Contemporary Evening',
        icon: '🥂',
        description: 'An intimate multi-course culinary dinner, heartfelt toasts, champagne flowing, and dancing beneath the coastal stars.',
      },
    ],
    gallery: [
      { title: 'The Coastal Proposal', desc: 'At Vagator Cliff, Goa', gradient: 'from-[#1F1A1C]/15 to-[#C8A15A]/25' },
      { title: 'Golden Hour Memories', desc: 'South Goa sands', gradient: 'from-[#8A9685]/20 to-[#E6E0D5]/50' },
      { title: 'The Journey Began', desc: 'Bespoke pre-wedding session', gradient: 'from-[#C8A15A]/20 to-[#1F1A1C]/20' },
    ],
    familyBlessing: {
      quote: '“Surrounded by the whispering sea and the warmth of those who hold us dearest, our forever begins.”',
      families: 'The Malhotra & Varma Families',
    },
  },
  {
    id: 'floral-romance',
    title: 'Floral Romance',
    tagline: 'The Botanical Whispers',
    category: 'Floral',
    couple: {
      groom: 'Kabir',
      bride: 'Rhea',
      displayNames: 'Kabir & Rhea',
      subheading: 'Invite you to celebrate their union amidst the fragrant blooming courtyards of the Pink City.',
    },
    blessing: {
      header: '॥ शुभम भवतु ॥',
      verse: '“Like tender jasmine blossoms opening to the morning sun, love has woven our destinies together.”',
    },
    eventDates: 'January 17–19, 2027',
    targetCountdownDate: '2027-01-18T11:00:00+05:30',
    venue: {
      name: 'Rambagh Palace Gardens, Jaipur',
      city: 'Jaipur, Rajasthan',
      address: 'Bhawani Singh Road, Jaipur 302005 • Traditional rose petal welcome at the Royal Lotus Fountain',
      mapQuery: 'Rambagh+Palace+Jaipur',
    },
    palette: {
      isDark: false,
      headerBg: '#4A1C29',
      headerText: '#FFF7F2',
      pageBg: '#FFF9F5',
      cardBg: '#FFFFFF',
      primaryText: '#76283B',
      secondaryText: '#4A3B40',
      accentColor: '#788C6F',
      borderColor: '#E8D4C8',
      bannerGradient: 'from-[#FFF7F2] via-[#FFF0E6] to-[#FFF7F2]',
      badgeBg: '#788C6F20',
      badgeText: '#4A1C29',
      btnPrimaryBg: '#76283B',
      btnPrimaryText: '#FFFFFF',
    },
    ceremonies: [
      {
        day: 'Day 1 • Jan 17',
        name: 'Gulab & Jasmine Mehendi',
        time: '03:30 PM onwards',
        venue: 'The Sunken Botanical Terrace',
        attire: 'Blush Pastels & Organza Florals',
        icon: '🌺',
        description: 'Fragrant mogra garlands, artisanal natural henna, Rajasthani folk qawwali, and gourmet herbal infusions.',
      },
      {
        day: 'Day 1 • Jan 17',
        name: 'Sangeet Under The Blossoms',
        time: '07:30 PM onwards',
        venue: 'The Palace Rose Garden',
        attire: 'Shimmering Rose Gold & Metallic Sage',
        icon: '✨',
        description: 'Choreographed dances beneath fairy-lit bougainvillea canopies with live folk-fusion music.',
      },
      {
        day: 'Day 2 • Jan 18',
        name: 'Phoolon Ki Haldi Utsav',
        time: '10:00 AM onwards',
        venue: 'The Marigold Courtyard',
        attire: 'Tender Shades of Sunshine & Ivory',
        icon: '🌼',
        description: 'A celebration shower of fragrant marigold and rose petals blessing the bride and groom.',
      },
      {
        day: 'Day 2 • Jan 18',
        name: 'The Botanical Mandap Vivah',
        time: '04:30 PM onwards',
        venue: 'The Lotus Cascade Garden',
        attire: 'Heritage Pastel Lehengas & Silk Sherwanis',
        icon: '🌸',
        description: 'Vedic rituals performed beneath a hand-crafted canopy of 10,000 fresh tuberoses and garden roses.',
      },
      {
        day: 'Day 3 • Jan 19',
        name: 'The Grand Garden Soirée',
        time: '07:30 PM onwards',
        venue: 'The Maharani Palace Lawns',
        attire: 'Formal Regal Elegance',
        icon: '🥂',
        description: 'A starlit reception banquet welcoming the newlyweds with royal Rajasthani delicacies and vintage wines.',
      },
    ],
    gallery: [
      { title: 'Jasmine Courtyard Proposal', desc: 'In bloom, Jaipur', gradient: 'from-[#76283B]/20 to-[#788C6F]/30' },
      { title: 'Blush Roka Blessing', desc: 'Family joy', gradient: 'from-[#788C6F]/25 to-[#E8D4C8]/50' },
      { title: 'Garden Glimpses', desc: 'Pre-wedding editorial', gradient: 'from-[#4A1C29]/15 to-[#D4AF37]/25' },
    ],
    familyBlessing: {
      quote: '“May your love blossom endlessly like the sacred royal gardens, forever fragrant with laughter, grace, and devotion.”',
      families: 'The Oberoi & Mathur Families',
    },
  },
  {
    id: 'traditional-indian',
    title: 'Traditional Indian',
    tagline: 'The Sacred Auspicious',
    category: 'Traditional',
    couple: {
      groom: 'Rohan',
      bride: 'Ananya',
      displayNames: 'Rohan & Ananya',
      subheading: 'Cordially invite your gracious blessings for their sacred Vedic marriage ceremony.',
    },
    blessing: {
      header: '॥ ॐ श्री गणेशाय नमः ॥',
      verse: '“मंगलम् भगवान विष्णुः मंगलम् गरुडध्वजः। मंगलम् पुण्डरीकाक्षः मंगलाय तनो हरिः॥”',
    },
    eventDates: 'February 13–15, 2027',
    targetCountdownDate: '2027-02-14T09:30:00+05:30',
    venue: {
      name: 'BrijRama Palace & Darbhanga Ghat, Varanasi',
      city: 'Varanasi, Uttar Pradesh',
      address: 'Munshi Ghat, Darbhanga Ghat, Dashashwamedh, Varanasi 221001 • Holy Bajra boat transfers from Assi Ghat',
      mapQuery: 'BrijRama+Palace+Varanasi',
    },
    palette: {
      isDark: false,
      headerBg: '#590E17',
      headerText: '#FFF6E5',
      pageBg: '#FFF7E8',
      cardBg: '#FFFFFF',
      primaryText: '#871822',
      secondaryText: '#3B181C',
      accentColor: '#D49B28',
      borderColor: '#E0B554',
      bannerGradient: 'from-[#FFF7E8] via-[#FFEFD2] to-[#FFF7E8]',
      badgeBg: '#D49B2822',
      badgeText: '#871822',
      btnPrimaryBg: '#871822',
      btnPrimaryText: '#FFFFFF',
    },
    ceremonies: [
      {
        day: 'Day 1 • Feb 13',
        name: 'Ganga Aarti & Mangal Paath',
        time: '05:00 PM onwards',
        venue: 'Darbhanga Ghat Terrace',
        attire: 'Traditional Kurta-Pajama & Silk Sarees',
        icon: '🪔',
        description: 'Auspicious Vedic chants, conch blowing, and sacred Ganga Aarti invokes divine blessings upon the families.',
      },
      {
        day: 'Day 2 • Feb 14',
        name: 'Shubh Haldi Utsav & Tel Baan',
        time: '09:00 AM onwards',
        venue: 'BrijRama Central Courtyard',
        attire: 'Auspicious Turmeric Yellow & Red Border',
        icon: '☀️',
        description: 'Traditional rituals with pure sandalwood paste, organic turmeric, and soulful regional wedding songs.',
      },
      {
        day: 'Day 2 • Feb 14',
        name: 'Vedic Vivah & Sapta Padi (Pheras)',
        time: '04:00 PM onwards',
        venue: 'The Holy Mandapam on the Ganga',
        attire: 'Banarasi Katan Silk & Brocade Sherwani',
        icon: '🕉️',
        description: 'The holy seven sacred vows around the Agni with Vedic pandits reciting ancient Sanskrit shlokas.',
      },
      {
        day: 'Day 3 • Feb 15',
        name: 'Mahabhoj & Vadhu Pravesh',
        time: '07:00 PM onwards',
        venue: 'The Grand Darbar Hall',
        attire: 'Grand Indian Traditional Wear',
        icon: '🌾',
        description: 'A traditional royal Satvik feast celebrating the bride’s auspicious entry into her new home.',
      },
    ],
    gallery: [
      { title: 'Ganga Ghat Blessings', desc: 'At Varanasi ghats', gradient: 'from-[#871822]/20 to-[#D49B28]/35' },
      { title: 'Sacred Tilak Ceremony', desc: 'Ancestral blessings', gradient: 'from-[#D49B28]/25 to-[#E0B554]/40' },
      { title: 'Banaras Glimpses', desc: 'Spiritual heritage album', gradient: 'from-[#590E17]/20 to-[#D49B28]/30' },
    ],
    familyBlessing: {
      quote: '“सप्तपदे सप्त पदानि गत्वा सखा सप्तपदा भव। धर्मे च अर्थे च कामे च नातिचरामि॥”',
      families: 'The Trivedi & Dwivedi Families',
    },
  },
  {
    id: 'contemporary-luxury',
    title: 'Contemporary Luxury',
    tagline: 'The Midnight Velvet',
    category: 'Contemporary',
    couple: {
      groom: 'Vihaan',
      bride: 'Tara',
      displayNames: 'Vihaan & Tara',
      subheading: 'Invite you to an evening of haute couture, timeless glamour, and starlit celebration.',
    },
    blessing: {
      header: 'AN ODE TO TIMELESS GLAMOUR',
      verse: '“Where modern romance meets starlit skylines and gold-lit velvet nights.”',
    },
    eventDates: 'March 05–07, 2027',
    targetCountdownDate: '2027-03-06T19:00:00+05:30',
    venue: {
      name: 'The Taj Mahal Palace & Ballroom, Mumbai',
      city: 'Mumbai, Maharashtra',
      address: 'Apollo Bandar, Colaba, Mumbai 400001 • VIP valet entrance at the Gateway Pavilion',
      mapQuery: 'Taj+Mahal+Palace+Mumbai',
    },
    palette: {
      isDark: true,
      headerBg: '#12050A',
      headerText: '#DFC185',
      pageBg: '#180710',
      cardBg: '#250E1A',
      primaryText: '#F5E6CC',
      secondaryText: '#D6C0B0',
      accentColor: '#DFC185',
      borderColor: '#C8A15A60',
      bannerGradient: 'from-[#180710] via-[#2A0C1D] to-[#180710]',
      badgeBg: '#DFC18520',
      badgeText: '#DFC185',
      btnPrimaryBg: '#DFC185',
      btnPrimaryText: '#16080E',
    },
    ceremonies: [
      {
        day: 'Day 1 • Mar 05',
        name: 'The Midnight Velvet Cocktail Soirée',
        time: '07:30 PM onwards',
        venue: 'The Crystal Room, Colaba',
        attire: 'Black Tie, Tuxedos & Velvet Gowns',
        icon: '🍸',
        description: 'Artisanal cocktails, live jazz quartet, and skyline panoramas over Mumbai harbour.',
      },
      {
        day: 'Day 2 • Mar 06',
        name: 'Glitz & Glamour Sangeet Gala',
        time: '08:00 PM onwards',
        venue: 'The Grand Ballroom',
        attire: 'Red Carpet High-Fashion / Metallic Indo-Western',
        icon: '✨',
        description: 'High-octane choreographed performances, celebrity DJ, and immersive dynamic laser projection mapping.',
      },
      {
        day: 'Day 2 • Mar 06',
        name: 'The Moonlit Vows & Pheras',
        time: '11:30 PM onwards',
        venue: 'The Sea Lounge Terrace',
        attire: 'Midnight Blue & Champagne Gold Couture',
        icon: '🌙',
        description: 'Vedic vows exchanged under illuminated crystal chandeliers overlooking the Arabian Sea.',
      },
      {
        day: 'Day 3 • Mar 07',
        name: 'The Imperial Reception Banquet',
        time: '08:00 PM onwards',
        venue: 'The Gateway Grand Pavilion',
        attire: 'Ultra-Luxe Formal Regal Wear',
        icon: '🥂',
        description: 'A 7-course global gourmet dining experience welcoming the couple into their shared tomorrow.',
      },
    ],
    gallery: [
      { title: 'The Penthouse Proposal', desc: 'Overlooking Mumbai Skyline', gradient: 'from-[#DFC185]/25 to-[#250E1A]/80' },
      { title: 'Cocktail Gala Moments', desc: 'Colaba, Mumbai', gradient: 'from-[#12050A]/80 to-[#DFC185]/20' },
      { title: 'Midnight Editorial', desc: 'The Taj Marine Drive', gradient: 'from-[#76283B]/40 to-[#DFC185]/30' },
    ],
    familyBlessing: {
      quote: '“An extraordinary night of laughter, high spirits, and eternal love surrounded by our closest circle.”',
      families: 'The Singhania & Merchant Families',
    },
  },
  {
    id: 'festive-celebration',
    title: 'Festive Celebration',
    tagline: 'The Joyful Bandhan',
    category: 'Festive',
    couple: {
      groom: 'Arjun',
      bride: 'Sanjana',
      displayNames: 'Arjun & Sanjana',
      subheading: 'Invite you to sing, dance, and celebrate two hearts uniting with boundless energy and joy!',
    },
    blessing: {
      header: '॥ लख लख बधाइयाँ ॥',
      verse: '“ढोल दे डग्गे ते, भंगड़े दी ताल! Two hearts dancing to the eternal rhythm of love and celebration!”',
    },
    eventDates: 'April 21–23, 2027',
    targetCountdownDate: '2027-04-22T10:30:00+05:30',
    venue: {
      name: 'The Oberoi Sukhvilas Resort, Chandigarh',
      city: 'Chandigarh, Punjab',
      address: 'Pallanpur, P.O. Sialba Majri, New Chandigarh 140110 • Valet & buggy transfers available',
      mapQuery: 'Oberoi+Sukhvilas+Chandigarh',
    },
    palette: {
      isDark: false,
      headerBg: '#4A1504',
      headerText: '#FFF8EB',
      pageBg: '#FFFBF2',
      cardBg: '#FFFFFF',
      primaryText: '#942D05',
      secondaryText: '#421E0F',
      accentColor: '#D97706',
      borderColor: '#F59E0B',
      bannerGradient: 'from-[#FFFBF2] via-[#FFF3D6] to-[#FFFBF2]',
      badgeBg: '#F59E0B20',
      badgeText: '#942D05',
      btnPrimaryBg: '#942D05',
      btnPrimaryText: '#FFFFFF',
    },
    ceremonies: [
      {
        day: 'Day 1 • Apr 21',
        name: 'Dhol & Boliyan Mehendi Fiesta',
        time: '03:00 PM onwards',
        venue: 'The Mango Orchard Courtyard',
        attire: 'Bright Phulkari, Mustard Yellow & Rani Pink',
        icon: '🥁',
        description: 'Live traditional dhol players, Punjabi folk boliyan, tandoori treats, and joyful henna celebrations.',
      },
      {
        day: 'Day 1 • Apr 21',
        name: 'Rocking Sangeet & Bhangra Night',
        time: '08:00 PM onwards',
        venue: 'The Grand Durbar Hall',
        attire: 'Shimmering Gold & Punjabi Regal',
        icon: '🔥',
        description: 'Unstoppable bhangra battles, powerhouse live Punjabi band, and celebration till the early hours.',
      },
      {
        day: 'Day 2 • Apr 22',
        name: 'Rang-Birangi Haldi & Chooda Rasam',
        time: '10:00 AM onwards',
        venue: 'The Central Poolside Lawn',
        attire: 'Floral Yellow & Joyful Orange',
        icon: '🌼',
        description: 'Emotional Chooda and Kalire ceremonies followed by a vibrant flower petals and water splash haldi.',
      },
      {
        day: 'Day 2 • Apr 22',
        name: 'Anand Karaj & Sacred Vows',
        time: '12:00 PM onwards',
        venue: 'The Gurdwara Sahib & Heritage Mandap',
        attire: 'Traditional Royal Sherwani & Pastel Lehengas',
        icon: '🌸',
        description: 'Sacred spiritual Laavan ceremony amidst fragrant rose petals and soulful divine kirtan.',
      },
      {
        day: 'Day 3 • Apr 23',
        name: 'The Royal Punjabi Reception',
        time: '07:30 PM onwards',
        venue: 'The Grand Sukhvilas Lawns',
        attire: 'Formal Velvet & Regal Ethnic',
        icon: '🥂',
        description: 'A lavish Punjabi royal banquet with live live culinary stations, fireworks, and heartfelt toasts.',
      },
    ],
    gallery: [
      { title: 'The Mustard Fields Proposal', desc: 'Punjab countryside', gradient: 'from-[#942D05]/20 to-[#D97706]/35' },
      { title: 'Roka & Dhol Celebrations', desc: 'Chandigarh joy', gradient: 'from-[#D97706]/25 to-[#F59E0B]/40' },
      { title: 'Festive Pre-Wedding Shoot', desc: 'Sukhvilas heritage', gradient: 'from-[#4A1504]/20 to-[#D97706]/30' },
    ],
    familyBlessing: {
      quote: '“रब्ब दी मेहर ते वड्डियां दा प्यार! Blessed with joy, loud laughter, and lifelong togetherness.”',
      families: 'The Dhillon & Grewal Families',
    },
  },
];

interface DemoWeddingWebsiteProps {
  isOpen: boolean;
  onClose: () => void;
  initialTheme?: string;
}

export const DemoWeddingWebsite: React.FC<DemoWeddingWebsiteProps> = ({ 
  isOpen, 
  onClose, 
  initialTheme = 'Royal Rajasthani' 
}) => {
  const [selectedThemeId, setSelectedThemeId] = useState<string>('royal-rajasthani');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // RSVP Form State
  const [rsvpData, setRsvpData] = useState({
    guestName: '',
    phone: '',
    guestsCount: '2',
    ceremonies: ['All Ceremonies'],
    message: '',
  });
  const [isRsvpSubmitted, setIsRsvpSubmitted] = useState(false);

  // Match initialTheme to available themes
  useEffect(() => {
    if (initialTheme) {
      const cleanTarget = initialTheme.trim().toLowerCase();
      const matched = DEMO_THEMES.find(
        (t) => t.title.toLowerCase() === cleanTarget || 
               t.id.toLowerCase() === cleanTarget ||
               cleanTarget.includes(t.title.toLowerCase())
      );
      if (matched) {
        setSelectedThemeId(matched.id);
      }
    }
  }, [initialTheme, isOpen]);

  // Lock body scroll and reset container scroll position to top (prevents mobile cropping!)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Ensure scroll container starts at absolute top (scrollTop = 0)
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
      const timer = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = 0;
        }
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, selectedThemeId]);

  // Active theme object
  const currentTheme = DEMO_THEMES.find((t) => t.id === selectedThemeId) || DEMO_THEMES[0];
  const p = currentTheme.palette;

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(currentTheme.targetCountdownDate).getTime();

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
  }, [currentTheme]);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpData.guestName.trim()) return;

    setIsRsvpSubmitted(true);
    soundManager.playDelicateChime(1100);
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: [p.accentColor, p.primaryText, '#FFFFFF'],
      });
    } catch {
      // ignore
    }
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`${currentTheme.couple.displayNames}'s Wedding Celebration`);
    const details = encodeURIComponent(`Celebration of the marriage of ${currentTheme.couple.displayNames} in ${currentTheme.venue.city}.`);
    const location = encodeURIComponent(`${currentTheme.venue.name}, ${currentTheme.venue.city}`);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const handleThemeChange = (themeId: string) => {
    setSelectedThemeId(themeId);
    soundManager.playDelicateChime(1200);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${currentTheme.title} Demo Wedding Website`}
      className="fixed inset-0 z-50 flex flex-col sm:items-center sm:justify-center p-0 sm:p-4 md:p-6 bg-[#35131F]/90 backdrop-blur-md overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* Main Wedding Website Container - Flex Column Layout with Fixed Header & Footer */}
      <div 
        className="relative w-full max-w-4xl h-[100dvh] sm:h-[92vh] flex flex-col sm:rounded-2xl shadow-2xl border sm:border-[#C8A15A]/40 overflow-hidden font-sans transition-colors duration-500"
        style={{
          backgroundColor: p.pageBg,
          color: p.primaryText,
        }}
      >
        
        {/* ========================================================
            FIXED TOP HEADER BAR - NEVER CROPPED, TOUCH-FRIENDLY
           ======================================================== */}
        <header 
          className="shrink-0 z-30 flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 border-b shadow-sm"
          style={{
            backgroundColor: p.headerBg,
            borderColor: `${p.borderColor}40`,
            color: p.headerText,
          }}
        >
          {/* Left: Template Switcher & Active Indicator */}
          <div className="flex items-center gap-2 min-w-0">
            <span 
              className="w-2.5 h-2.5 rounded-full animate-ping shrink-0"
              style={{ backgroundColor: p.accentColor }} 
            />
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-80 shrink-0">
                Template:
              </span>
              {/* Dropdown theme switcher directly in the modal header */}
              <div className="relative inline-block">
                <select
                  value={selectedThemeId}
                  onChange={(e) => handleThemeChange(e.target.value)}
                  className="text-xs sm:text-sm font-semibold rounded-lg px-2 py-1 pr-6 cursor-pointer border bg-black/25 text-white focus:outline-none appearance-none"
                  style={{
                    borderColor: `${p.borderColor}60`,
                    color: p.accentColor,
                  }}
                  aria-label="Select invitation template"
                >
                  {DEMO_THEMES.map((theme) => (
                    <option key={theme.id} value={theme.id} className="bg-[#35131F] text-white">
                      {theme.title} ({theme.couple.displayNames})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-70 text-white" />
              </div>
            </div>
          </div>

          {/* Right: Quick Action & Big Touch Close Button */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={SITE_CONFIG.createDesignInquiryLink(currentTheme.title, currentTheme.couple.displayNames)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-all transform hover:scale-105"
              style={{
                backgroundColor: p.accentColor,
                color: p.btnPrimaryText === '#FFFFFF' ? '#35131F' : p.btnPrimaryText,
              }}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Get This Template</span>
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors focus:outline-none"
              aria-label="Close invitation demo"
            >
              <X className="w-5 h-5" style={{ color: p.headerText }} />
            </button>
          </div>
        </header>

        {/* Quick Horizontal Theme Switcher Pills for Mobile & Tablet */}
        <div 
          className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 border-b overflow-x-auto no-scrollbar text-xs"
          style={{
            backgroundColor: p.isDark ? '#200B16' : '#FAF3E8',
            borderColor: `${p.borderColor}30`,
          }}
        >
          <span className="text-[10px] uppercase font-bold tracking-wider opacity-60 shrink-0 mr-1">
            Browse All 6:
          </span>
          {DEMO_THEMES.map((t) => {
            const isActive = t.id === selectedThemeId;
            return (
              <button
                key={t.id}
                onClick={() => handleThemeChange(t.id)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? 'shadow-xs font-bold scale-105'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: isActive ? p.accentColor : 'transparent',
                  color: isActive 
                    ? (p.isDark ? '#16080E' : '#35131F')
                    : (p.isDark ? '#FFF5EB' : '#35131F'),
                  border: `1px solid ${isActive ? p.accentColor : `${p.borderColor}40`}`,
                }}
              >
                {t.title}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            SCROLLABLE BODY - PROPER VERTICAL SCROLL FROM TOP (0)
           ======================================================== */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain"
        >

          {/* 1. Microsite Hero Cover */}
          <section 
            className={`relative py-8 sm:py-12 px-4 sm:px-12 text-center bg-gradient-to-b ${currentTheme.palette.bannerGradient} border-b overflow-hidden`}
            style={{ borderColor: `${p.borderColor}30` }}
          >
            <div className="max-w-xl mx-auto flex flex-col items-center">
              
              {/* Auspicious Shloka / Blessing Header */}
              <p 
                className="font-serif text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-1.5"
                style={{ color: p.accentColor }}
              >
                {currentTheme.blessing.header}
              </p>
              
              <p 
                className="font-serif italic text-xs sm:text-sm max-w-md mx-auto mb-4 leading-relaxed"
                style={{ color: p.isDark ? '#EAD9B9' : `${p.primaryText}CC` }}
              >
                {currentTheme.blessing.verse}
              </p>

              {/* Subheading */}
              <span 
                className="text-[11px] uppercase tracking-[0.2em] font-medium mb-1"
                style={{ color: p.isDark ? '#C7B198' : `${p.secondaryText}99` }}
              >
                Together with their families
              </span>

              {/* Couple Names - Custom per theme */}
              <h1 
                className="font-serif text-3xl sm:text-5xl font-bold my-2 tracking-wide"
                style={{ color: p.primaryText }}
              >
                {currentTheme.couple.groom} <span className="font-serif italic text-2xl sm:text-4xl" style={{ color: p.accentColor }}>&</span> {currentTheme.couple.bride}
              </h1>

              {/* Invitation Subtext */}
              <p 
                className="font-serif text-xs sm:text-sm max-w-lg mx-auto italic mt-1 mb-5 leading-relaxed"
                style={{ color: p.isDark ? '#E5D4C0' : `${p.secondaryText}CC` }}
              >
                {currentTheme.couple.subheading}
              </p>

              {/* Date and Venue Pill */}
              <div 
                className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-xl border shadow-xs text-xs sm:text-sm"
                style={{
                  backgroundColor: p.cardBg,
                  borderColor: `${p.borderColor}50`,
                }}
              >
                <span className="flex items-center gap-1.5 font-medium" style={{ color: p.primaryText }}>
                  <Calendar className="w-4 h-4 shrink-0" style={{ color: p.accentColor }} />
                  {currentTheme.eventDates}
                </span>
                <span style={{ color: p.accentColor }}>•</span>
                <span className="flex items-center gap-1.5 font-medium" style={{ color: p.secondaryText }}>
                  <MapPin className="w-4 h-4 shrink-0" style={{ color: p.accentColor }} />
                  {currentTheme.venue.name}
                </span>
              </div>

              {/* Live Wedding Countdown */}
              <div 
                className="mt-7 pt-5 border-t w-full"
                style={{ borderColor: `${p.borderColor}25` }}
              >
                <span 
                  className="text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold block mb-3"
                  style={{ color: p.accentColor }}
                >
                  Counting down to the auspicious Muhurat
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
                      className="flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl border shadow-xs"
                      style={{
                        backgroundColor: p.cardBg,
                        borderColor: `${p.borderColor}40`,
                      }}
                    >
                      <span className="font-serif text-lg sm:text-2xl font-bold" style={{ color: p.primaryText }}>
                        {item.value}
                      </span>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-70">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Add to Calendar & RSVP Quick Jump */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <button
                  onClick={handleAddToCalendar}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border shadow-xs transition-transform active:scale-95"
                  style={{
                    backgroundColor: p.cardBg,
                    borderColor: `${p.borderColor}60`,
                    color: p.primaryText,
                  }}
                >
                  <CalendarPlus className="w-3.5 h-3.5 shrink-0" style={{ color: p.accentColor }} />
                  <span>Add to Calendar</span>
                </button>

                <button
                  onClick={() => {
                    const rsvpSection = document.getElementById('demo-rsvp-section');
                    rsvpSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold shadow-md transition-transform active:scale-95"
                  style={{
                    backgroundColor: p.btnPrimaryBg,
                    color: p.btnPrimaryText,
                  }}
                >
                  <Send className="w-3.5 h-3.5 shrink-0" />
                  <span>RSVP Now</span>
                </button>
              </div>

            </div>
          </section>

          {/* 2. Wedding Ceremonies Timeline Section */}
          <section className="py-8 sm:py-10 px-4 sm:px-12">
            <div className="max-w-2xl mx-auto">
              
              <div className="text-center mb-6 sm:mb-8">
                <span 
                  className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold"
                  style={{ color: p.accentColor }}
                >
                  Celebration Itinerary
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1" style={{ color: p.primaryText }}>
                  Ceremonies & Functions
                </h2>
                <div className="w-16 h-[1.5px] mx-auto mt-2" style={{ backgroundColor: p.accentColor }} />
              </div>

              {/* Ceremony Cards */}
              <div className="space-y-3.5 sm:space-y-4">
                {currentTheme.ceremonies.map((ceremony) => (
                  <div
                    key={ceremony.name}
                    className="p-3.5 sm:p-5 rounded-xl border shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-start"
                    style={{
                      backgroundColor: p.cardBg,
                      borderColor: `${p.borderColor}35`,
                    }}
                  >
                    {/* Icon Box */}
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl shrink-0 border"
                      style={{
                        backgroundColor: p.isDark ? '#1C0B14' : `${p.accentColor}15`,
                        borderColor: `${p.borderColor}40`,
                      }}
                    >
                      {ceremony.icon}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span 
                          className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider"
                          style={{ color: p.accentColor }}
                        >
                          {ceremony.day}
                        </span>
                        <span className="text-[11px] sm:text-xs opacity-75 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: p.accentColor }} />
                          {ceremony.time}
                        </span>
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold" style={{ color: p.primaryText }}>
                        {ceremony.name}
                      </h3>

                      <p className="text-xs opacity-85 my-1.5 leading-relaxed">
                        {ceremony.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-[11px] sm:text-xs opacity-80">
                        <span className="flex items-center gap-1 font-medium truncate">
                          <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: p.accentColor }} />
                          {ceremony.venue}
                        </span>
                        <span style={{ color: p.accentColor }} className="hidden xs:inline">•</span>
                        <span className="italic block xs:inline" style={{ color: p.primaryText }}>
                          Dress Code: {ceremony.attire}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* 3. Venue & Directions Section */}
          <section 
            className="py-8 sm:py-10 px-4 sm:px-12 border-y"
            style={{ 
              backgroundColor: p.isDark ? '#14060E' : '#FFF5E6',
              borderColor: `${p.borderColor}30`,
            }}
          >
            <div className="max-w-2xl mx-auto text-center">
              <span 
                className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold"
                style={{ color: p.accentColor }}
              >
                Venue & Directions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 mb-2" style={{ color: p.primaryText }}>
                {currentTheme.venue.name}
              </h2>
              <p className="text-xs sm:text-sm opacity-80 mb-5 leading-relaxed">
                {currentTheme.venue.address}
              </p>

              {/* Interactive Map Card */}
              <div 
                className="relative rounded-2xl overflow-hidden border shadow-sm w-full"
                style={{
                  backgroundColor: p.cardBg,
                  borderColor: `${p.borderColor}40`,
                }}
              >
                <iframe
                  title={`Map for ${currentTheme.venue.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(currentTheme.venue.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-52 sm:h-64 border-0"
                  loading="lazy"
                />
                <div 
                  className="p-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
                  style={{ backgroundColor: p.cardBg }}
                >
                  <span className="opacity-75 flex items-center gap-1 text-[11px] sm:text-xs text-center sm:text-left">
                    <Navigation className="w-3.5 h-3.5 shrink-0" style={{ color: p.accentColor }} />
                    Direct navigation for outstation and local guests
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(currentTheme.venue.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline flex items-center gap-1 text-xs"
                    style={{ color: p.accentColor }}
                  >
                    Open in Google Maps App
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Photo Gallery Preview */}
          <section className="py-8 sm:py-10 px-4 sm:px-12">
            <div className="max-w-2xl mx-auto text-center mb-5 sm:mb-6">
              <span 
                className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold"
                style={{ color: p.accentColor }}
              >
                Moments of Love
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1" style={{ color: p.primaryText }}>
                Glimpses of Togetherness
              </h2>
              <div className="w-16 h-[1.5px] mx-auto mt-2" style={{ backgroundColor: p.accentColor }} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-2xl mx-auto">
              {currentTheme.gallery.map((photo) => (
                <div
                  key={photo.title}
                  className={`relative h-36 sm:h-44 rounded-xl border overflow-hidden shadow-xs flex flex-col justify-end p-2.5 sm:p-3 bg-gradient-to-br ${photo.gradient}`}
                  style={{ borderColor: `${p.borderColor}30` }}
                >
                  <div className="relative z-10 p-1.5 sm:p-2 rounded-lg border backdrop-blur-xs"
                    style={{
                      backgroundColor: p.isDark ? '#1C0B14DD' : '#FFFFFFE6',
                      borderColor: `${p.borderColor}25`,
                    }}
                  >
                    <p className="font-serif font-bold text-[11px] sm:text-xs leading-tight truncate" style={{ color: p.primaryText }}>
                      {photo.title}
                    </p>
                    <p className="text-[9px] sm:text-[10px] opacity-75 truncate">{photo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Guest RSVP Interface */}
          <section 
            id="demo-rsvp-section" 
            className="py-8 sm:py-10 px-4 sm:px-12 border-t"
            style={{ 
              backgroundColor: p.isDark ? '#14060E' : '#FFF5E6',
              borderColor: `${p.borderColor}30`,
            }}
          >
            <div className="max-w-md mx-auto">
              <div className="text-center mb-5 sm:mb-6">
                <span 
                  className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold"
                  style={{ color: p.accentColor }}
                >
                  Will You Join Us?
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1" style={{ color: p.primaryText }}>
                  Kindly Respond (RSVP)
                </h2>
                <p className="text-xs opacity-75 mt-1">
                  Please confirm your gracious presence for {currentTheme.couple.displayNames}'s wedding.
                </p>
              </div>

              {isRsvpSubmitted ? (
                <div 
                  className="p-5 sm:p-6 rounded-2xl border-2 shadow-md text-center"
                  style={{
                    backgroundColor: p.cardBg,
                    borderColor: p.accentColor,
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${p.accentColor}25` }}
                  >
                    <CheckCircle2 className="w-6 h-6" style={{ color: p.accentColor }} />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold" style={{ color: p.primaryText }}>
                    Thank You, {rsvpData.guestName}!
                  </h3>
                  <p className="text-xs opacity-80 mt-1 mb-4 leading-relaxed">
                    Your attendance for {rsvpData.guestsCount} {parseInt(rsvpData.guestsCount) === 1 ? 'guest' : 'guests'} has been warmly recorded. The family looks forward to celebrating with you!
                  </p>
                  <button
                    onClick={() => setIsRsvpSubmitted(false)}
                    className="text-xs font-semibold underline"
                    style={{ color: p.accentColor }}
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleRsvpSubmit} 
                  className="p-4 sm:p-6 rounded-2xl border shadow-md space-y-3.5"
                  style={{
                    backgroundColor: p.cardBg,
                    borderColor: `${p.borderColor}40`,
                  }}
                >
                  <div>
                    <label className="block text-xs font-semibold mb-1" style={{ color: p.primaryText }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh & Sunita Sharma"
                      value={rsvpData.guestName}
                      onChange={(e) => setRsvpData({ ...rsvpData, guestName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border text-xs focus:outline-none"
                      style={{
                        backgroundColor: p.isDark ? '#2D1220' : '#FFFDF7',
                        borderColor: `${p.borderColor}50`,
                        color: p.isDark ? '#FFF' : '#35131F',
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1" style={{ color: p.primaryText }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={rsvpData.phone}
                        onChange={(e) => setRsvpData({ ...rsvpData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border text-xs focus:outline-none"
                        style={{
                          backgroundColor: p.isDark ? '#2D1220' : '#FFFDF7',
                          borderColor: `${p.borderColor}50`,
                          color: p.isDark ? '#FFF' : '#35131F',
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1" style={{ color: p.primaryText }}>
                        Number of Guests
                      </label>
                      <select
                        value={rsvpData.guestsCount}
                        onChange={(e) => setRsvpData({ ...rsvpData, guestsCount: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border text-xs focus:outline-none"
                        style={{
                          backgroundColor: p.isDark ? '#2D1220' : '#FFFDF7',
                          borderColor: `${p.borderColor}50`,
                          color: p.isDark ? '#FFF' : '#35131F',
                        }}
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4+ Persons (Family)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1" style={{ color: p.primaryText }}>
                      Heartfelt Wishes for {currentTheme.couple.displayNames}
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share your blessings and congratulations..."
                      value={rsvpData.message}
                      onChange={(e) => setRsvpData({ ...rsvpData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border text-xs focus:outline-none"
                      style={{
                        backgroundColor: p.isDark ? '#2D1220' : '#FFFDF7',
                        borderColor: `${p.borderColor}50`,
                        color: p.isDark ? '#FFF' : '#35131F',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl font-semibold text-xs shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: p.btnPrimaryBg,
                      color: p.btnPrimaryText,
                    }}
                  >
                    <Check className="w-4 h-4" />
                    <span>Confirm RSVP Attendance</span>
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* 6. Personalized Family Closing Blessing */}
          <section 
            className="py-6 sm:py-8 px-4 text-center border-t shrink-0"
            style={{ 
              backgroundColor: p.pageBg,
              borderColor: `${p.borderColor}20`,
            }}
          >
            <p className="font-serif italic text-xs sm:text-sm max-w-md mx-auto leading-relaxed" style={{ color: p.primaryText }}>
              {currentTheme.familyBlessing.quote}
            </p>
            <p 
              className="font-serif text-[11px] sm:text-xs font-semibold uppercase tracking-widest mt-2"
              style={{ color: p.accentColor }}
            >
              {currentTheme.familyBlessing.families}
            </p>
          </section>

        </div>

        {/* ========================================================
            FIXED BOTTOM FOOTER - EASY WHATSAPP ACTION, NEVER BLOCKED
           ======================================================== */}
        <footer 
          className="shrink-0 z-20 p-3 sm:p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-2.5 shadow-lg backdrop-blur-md"
          style={{
            backgroundColor: p.headerBg,
            borderColor: `${p.borderColor}40`,
            color: p.headerText,
          }}
        >
          <div className="flex items-center gap-2 text-[11px] sm:text-xs opacity-90 text-center sm:text-left">
            <span className="font-bold" style={{ color: p.accentColor }}>
              {currentTheme.title} Template:
            </span>
            <span className="hidden sm:inline">
              Delivery in 3 to 5 days with your custom music, photos, & countdown.
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-full text-xs font-medium border transition-colors hover:bg-white/10"
              style={{ borderColor: `${p.borderColor}60` }}
            >
              Close Preview
            </button>
            <a
              href={SITE_CONFIG.createDesignInquiryLink(currentTheme.title, currentTheme.couple.displayNames)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold shadow-md transition-all truncate"
              style={{
                backgroundColor: p.accentColor,
                color: p.btnPrimaryText === '#FFFFFF' ? '#35131F' : p.btnPrimaryText,
              }}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Get This on WhatsApp</span>
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
};
