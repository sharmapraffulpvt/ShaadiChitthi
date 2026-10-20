export interface InvitationDesign {
  id: string;
  title: string;
  subtitle: string;
  category: 'Royal' | 'Minimal' | 'Floral' | 'Traditional' | 'Contemporary' | 'Festive';
  palette: {
    primary: string;
    secondary: string;
    background: string;
    border: string;
    accent: string;
    text: string;
  };
  tag: string;
  description: string;
  features: string[];
  sampleCouple: string;
  sampleDate: string;
  sampleCity: string;
  ornamentStyle: 'jaali' | 'minimal-line' | 'botanical' | 'mandala' | 'geometric-gold' | 'festive-rangoli';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  brandName: 'ShaadiChitthi',
  tagline: 'Shaadi ka digital nimantran, dil se.',
  subTagline: 'Bespoke digital wedding invitations and interactive wedding websites for modern Indian celebrations.',
  
  // Real business contact information
  whatsappNumber: '+91 91574 17895',
  whatsappCleanNumber: '919157417895',
  email: 'shaadichitthi@gmail.com',
  instagram: 'https://instagram.com/shaadichitthi',
  instagramHandle: '@shaadichitthi',
  
  brandColors: {
    burgundy: '#76283B',
    antiqueGold: '#C8A15A',
    warmIvory: '#FFF8ED',
    softChampagne: '#EAD9B9',
    darkWine: '#35131F',
    mutedSage: '#9BA58A',
  },

  // WhatsApp Message Generator
  createWhatsAppLink: (customMessage?: string) => {
    const text = customMessage || "Namaste ShaadiChitthi team! I would like to explore creating a custom digital wedding invitation for our upcoming celebration.";
    return `https://wa.me/919157417895?text=${encodeURIComponent(text)}`;
  },

  createDesignInquiryLink: (designTitle: string, coupleName?: string) => {
    const coupleText = coupleName ? ` for ${coupleName}` : '';
    const text = `Namaste ShaadiChitthi! I love your "${designTitle}" digital wedding invitation design${coupleText}. I'd love to know more about customization options, pricing, and timeline (minimum 3 days delivery).`;
    return `https://wa.me/919157417895?text=${encodeURIComponent(text)}`;
  },

  createCustomizerInquiryLink: (details: {
    groom: string;
    bride: string;
    date: string;
    city: string;
    theme: string;
    accentColor: string;
    includeCountdown?: boolean;
  }) => {
    const countdownText = details.includeCountdown ? 'Yes (Live Muhurat Countdown included)' : 'Standard';
    const text = `Namaste ShaadiChitthi! We just customized our wedding invitation on your website:\n\n` +
      `Couple: ${details.groom || 'Groom'} & ${details.bride || 'Bride'}\n` +
      `Wedding Date: ${details.date || 'TBD'}\n` +
      `City: ${details.city || 'TBD'}\n` +
      `Selected Theme: ${details.theme}\n` +
      `Color Accent: ${details.accentColor}\n` +
      `Live Wedding Countdown: ${countdownText}\n` +
      `Delivery Timeline: Minimum 3 Days\n\n` +
      `Could you please share how we can finalize this design into our full digital invitation?`;
    return `https://wa.me/919157417895?text=${encodeURIComponent(text)}`;
  },

  invitationDesigns: [
    {
      id: 'royal-rajasthani',
      title: 'Royal Rajasthani',
      subtitle: 'The Grand Heritage Collection',
      category: 'Royal',
      palette: {
        primary: '#76283B',
        secondary: '#C8A15A',
        background: '#FFF8ED',
        border: '#C8A15A',
        accent: '#581C2B',
        text: '#35131F',
      },
      tag: 'Heritage Luxury',
      description: 'Inspired by the regal palaces of Udaipur and Jaipur. Intricate jharokha arches, gold foil filigree, deep royal burgundy velvet textures, and ceremonial typography.',
      features: ['Palace Arch Framing', 'Antique Gold Foil Trim', 'Regal Shloka Reveal', 'Multi-day Royal Itinerary'],
      sampleCouple: 'Aarav & Meera',
      sampleDate: 'November 28, 2026',
      sampleCity: 'Udaipur, Rajasthan',
      ornamentStyle: 'jaali',
    },
    {
      id: 'modern-minimal',
      title: 'Modern Minimal',
      subtitle: 'The Editorial Romance',
      category: 'Minimal',
      palette: {
        primary: '#35131F',
        secondary: '#C8A15A',
        background: '#FFFCF7',
        border: '#EAD9B9',
        accent: '#9BA58A',
        text: '#35131F',
      },
      tag: 'Quiet Luxury',
      description: 'For couples who appreciate refined restraint. Generous whitespace, high-fashion editorial serif typography, delicate hairline gold dividers, and gentle deckled paper edging.',
      features: ['Editorial Serif Typography', 'Subtle Gold Accents', 'Minimalist Event Timeline', 'Smooth Aesthetic Transitions'],
      sampleCouple: 'Dev & Natasha',
      sampleDate: 'December 12, 2026',
      sampleCity: 'Goa, India',
      ornamentStyle: 'minimal-line',
    },
    {
      id: 'floral-romance',
      title: 'Floral Romance',
      subtitle: 'The Botanical Whispers',
      category: 'Floral',
      palette: {
        primary: '#76283B',
        secondary: '#9BA58A',
        background: '#FFFBF5',
        border: '#DFC185',
        accent: '#D5C19B',
        text: '#35131F',
      },
      tag: 'Ethereal & Poetic',
      description: 'Handcrafted watercolor jasmine, blush garden roses, and tender sage leaves framing your wedding story. Soft pastel elegance evoking a blooming spring courtyard.',
      features: ['Handcrafted Botanical Motifs', 'Muted Sage & Rose Accents', 'Subtle Petal Drop Motion', 'Bespoke Floral Borders'],
      sampleCouple: 'Kabir & Rhea',
      sampleDate: 'January 18, 2027',
      sampleCity: 'Jaipur, Rajasthan',
      ornamentStyle: 'botanical',
    },
    {
      id: 'traditional-indian',
      title: 'Traditional Indian',
      subtitle: 'The Sacred Auspicious',
      category: 'Traditional',
      palette: {
        primary: '#76283B',
        secondary: '#C8A15A',
        background: '#FFF8ED',
        border: '#C8A15A',
        accent: '#A6823B',
        text: '#35131F',
      },
      tag: 'Sacred Traditions',
      description: 'Rich with auspicious cultural symbols. Divine shlokas, sacred kalash, peacock feather subtleties, and timeless mandala motifs wrapped in warm turmeric and crimson tones.',
      features: ['Sanskrit Shloka Header', 'Intricate Mandala Centerpiece', 'Auspicious Ritual Icons', 'Blessings Section for Elders'],
      sampleCouple: 'Rohan & Ananya',
      sampleDate: 'February 14, 2027',
      sampleCity: 'Varanasi, Uttar Pradesh',
      ornamentStyle: 'mandala',
    },
    {
      id: 'contemporary-luxury',
      title: 'Contemporary Luxury',
      subtitle: 'The Midnight Velvet',
      category: 'Contemporary',
      palette: {
        primary: '#35131F',
        secondary: '#DFC185',
        background: '#210B13',
        border: '#C8A15A',
        accent: '#76283B',
        text: '#FFF8ED',
      },
      tag: 'Evening Gala',
      description: 'A striking dark wine velvet aesthetic designed for sophisticated evening celebrations, destination weddings, and glamorous sangeet & reception galas.',
      features: ['Luminous Gold on Dark Velvet', 'Cinematic Glass Layering', 'Interactive Light Reflections', 'Modern Cocktail RSVP'],
      sampleCouple: 'Vihaan & Tara',
      sampleDate: 'March 06, 2027',
      sampleCity: 'Mumbai, Maharashtra',
      ornamentStyle: 'geometric-gold',
    },
    {
      id: 'festive-celebration',
      title: 'Festive Celebration',
      subtitle: 'The Joyful Bandhan',
      category: 'Festive',
      palette: {
        primary: '#76283B',
        secondary: '#C8A15A',
        background: '#FFF9F0',
        border: '#C8A15A',
        accent: '#9BA58A',
        text: '#35131F',
      },
      tag: 'Vibrant & Heartfelt',
      description: 'Infused with the joyous spirit of Haldi, Mehendi, and Sangeet celebrations. Playful dhol beats, vibrant floral garlands, and celebratory motifs woven into luxury paper textures.',
      features: ['Multi-event Color Themes', 'Interactive Dhol & Sangeet Motifs', 'Dress Code Guidance Cards', 'Guest Song Request Module'],
      sampleCouple: 'Arjun & Sanjana',
      sampleDate: 'April 22, 2027',
      sampleCity: 'Chandigarh, Punjab',
      ornamentStyle: 'festive-rangoli',
    },
  ] as InvitationDesign[],

  benefits: [
    {
      title: 'Made for Your Story',
      description: 'Every love story is unique. We craft bespoke designs that reflect your personal journey, cultural roots, family heritage, and celebration style.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Beautifully Digital',
      description: 'High-definition responsive wedding websites and animated e-cards that load instantaneously on smartphones, tablets, and laptops worldwide.',
      icon: 'Sparkles',
    },
    {
      title: 'Every Detail Matters',
      description: 'Interactive Google Maps, multi-ceremony calendars, dress codes, countdown timers, and streamlined digital RSVPs tailored for your guests.',
      icon: 'Compass',
    },
    {
      title: 'Instant WhatsApp Sharing',
      description: 'One-click guest sharing with personalized preview cards, WhatsApp invitations, and calendar sync so no loved one misses a sacred moment.',
      icon: 'Share2',
    },
  ],

  howItWorksSteps: [
    {
      step: '01',
      title: 'Choose Your Aesthetic',
      description: 'Explore our curated library of Royal, Minimal, Floral, and Traditional collections, or request a 100% custom couture theme.',
    },
    {
      step: '02',
      title: 'Share Wedding Details',
      description: 'Provide your event dates, ceremony venues, photos, love story, and dress codes through our seamless questionnaire or on WhatsApp.',
    },
    {
      step: '03',
      title: 'Receive & Share With Love',
      description: 'Within a minimum of 3 to 5 days, your bespoke digital wedding invitation is meticulously crafted and ready to be shared with family and friends around the world.',
    },
  ],

  faqs: [
    {
      question: 'What exactly is a ShaadiChitthi digital wedding invitation?',
      answer: 'A ShaadiChitthi invitation is an interactive, mobile-optimized digital wedding experience. Unlike static PDFs or basic image cards, your guests receive an elegant digital envelope that opens dynamically with relaxing piano melodies, live countdowns, interactive Google Maps directions to every ceremony, multi-day schedules, photo galleries, and direct RSVP tracking.',
    },
    {
      question: 'Can we personalize all our event ceremonies (Haldi, Mehendi, Sangeet, Shaadi)?',
      answer: 'Yes, absolutely! Every invitation is customized with your complete multi-day itinerary. We include distinct sections for each ritual with venue addresses, timing, dress codes (e.g. Traditional Yellow for Haldi, Indo-Western for Sangeet), and direct Google Maps navigation links.',
    },
    {
      question: 'How do our guests open the invitation on WhatsApp?',
      answer: 'We provide you with a beautifully formatted WhatsApp invitation message featuring an elegant preview thumbnail of your card and your personalized link. When your guests tap the link, it opens seamlessly in their mobile browser with smooth animations and zero app installation required.',
    },
    {
      question: 'How long does it take to create our custom wedding invite?',
      answer: 'Our standard bespoke collections are delivered within a minimum of 3 to 5 business days after you share your wedding details. For completely original hand-illustrated or custom couture designs, our creative studio delivers the first look in 5 to 7 business days to ensure impeccable luxury quality.',
    },
    {
      question: 'Can we request changes after the initial preview is ready?',
      answer: 'Yes! We offer multiple rounds of revisions for text, dates, ceremony timings, and photo swaps until your digital invitation looks absolutely perfect.',
    },
    {
      question: 'How do RSVPs work for our guests?',
      answer: 'Guests can easily RSVP directly on the invitation website with their attendance count, ceremony preferences, dietary notes, and heartfelt wishes. Responses can be routed directly to your personal WhatsApp or compiled into an organized sheet.',
    },
    {
      question: 'Can we include traditional Sanskrit shlokas and family elders’ names?',
      answer: 'Of course! Honoring family traditions and blessings is at the heart of ShaadiChitthi. We can incorporate sacred shlokas (such as "Vakratunda Mahakaya", "Mangalam Bhagwan Vishnu"), personalized poetic couplets, and family elder acknowledgments in Hindi, English, Gujarati, or regional languages.',
    },
    {
      question: 'How do we get started and what is the pricing?',
      answer: 'Getting started is as simple as sending us a message on WhatsApp at +91 91574 17895 or clicking "Create Your Invite". Our curated collections start at very accessible packages, and we provide a transparent, customized quote based on your selected features.',
    },
  ] as FAQItem[],

  testimonials: [
    {
      couple: 'Pooja & Siddharth',
      weddingDate: 'December 2025',
      location: 'Udaipur, Rajasthan',
      quote: 'Our guests across 6 different countries were blown away by the royal envelope opening animation. Even our grandparents found the venue directions and ceremony timings so effortless to follow on WhatsApp!',
      design: 'Royal Rajasthani Collection',
      rating: 5,
    },
    {
      couple: 'Tanvi & Aditya',
      weddingDate: 'January 2026',
      location: 'Goa Destination Wedding',
      quote: 'We wanted a chic, editorial design that didn’t look like every other generic wedding card. ShaadiChitthi captured our personal style with understated gold accents and flawless mobile experience.',
      design: 'Modern Minimal Collection',
      rating: 5,
    },
    {
      couple: 'Meghna & Arjun',
      weddingDate: 'February 2026',
      location: 'Bengaluru Palace Grounds',
      quote: 'The team was incredibly attentive with our multiple ceremony details and last-minute venue update. The RSVP collection saved us countless phone calls!',
      design: 'Floral Romance Collection',
      rating: 5,
    },
  ],
};
