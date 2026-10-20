import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/audioSystem';
import { SITE_CONFIG } from '../config/siteConfig';

export const MobileBottomBar: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const unsub = soundManager.subscribe((muted) => setIsMuted(muted));
    return () => unsub();
  }, []);

  return (
    <aside aria-label="Quick mobile actions" className="lg:hidden fixed bottom-3 left-3 right-3 z-40 max-w-md mx-auto">
      <div className="bg-[#FFF8ED]/95 backdrop-blur-md border border-[#C8A15A]/60 rounded-full px-3 py-2 shadow-2xl flex items-center justify-between gap-2">
        {/* WhatsApp Button */}
        <a
          href={SITE_CONFIG.createWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-full bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">WhatsApp Us</span>
        </a>

        {/* Customize Invite Button */}
        <a
          href="#customizer"
          className="flex-1 py-2 px-3 rounded-full bg-[#76283B] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform border border-[#C8A15A]/40"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#DFC185] shrink-0" />
          <span className="truncate">Customize</span>
        </a>

        {/* Mini Piano Sound Controller */}
        <button
          onClick={() => soundManager.toggleMute()}
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all ${
            !isMuted
              ? 'bg-[#C8A15A]/25 border-[#C8A15A] text-[#76283B]'
              : 'bg-white/80 border-[#C8A15A]/40 text-[#35131F]/60'
          }`}
          title={isMuted ? 'Turn on relaxing piano' : 'Mute piano'}
          aria-label={isMuted ? 'Unmute relaxing piano' : 'Mute relaxing piano'}
        >
          {!isMuted ? (
            <Volume2 className="w-4 h-4 text-[#76283B] animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </button>
      </div>
    </aside>
  );
};
