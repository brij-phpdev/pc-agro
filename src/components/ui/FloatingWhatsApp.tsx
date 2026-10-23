import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Show a gentle greeting tooltip after 3.5 seconds to attract interested prospects
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
    setHasInteracted(true);
  };

  const whatsappUrl = "https://wa.me/917252000711?text=Hello%20PC%20Agro%2C%20I%20would%20like%20to%20enquire%20about%20solar%20solutions";

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex flex-col items-end pointer-events-none select-none">
      
      {/* Interactive Tooltip Card (Desktop & Tablet) */}
      {showTooltip && (
        <div className="pointer-events-auto mb-3 max-w-[280px] sm:max-w-xs bg-white text-moss-ink rounded-3xl p-4 shadow-2xl border border-mist-grey/60 animate-fadeIn relative group transition-all">
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-fog hover:bg-mist-grey/50 text-moss-ink/60 flex items-center justify-center transition-colors"
            aria-label="Dismiss chat tooltip"
          >
            <X size={13} />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green flex items-center gap-1">
              <Sparkles size={11} />
              PC Agro Solar Advisory
            </span>
          </div>

          <p className="text-xs font-semibold text-moss-ink leading-snug">
            Have questions about Solar Panels, Inverters, or Rooftop EPC?
          </p>

          <p className="text-[11px] text-moss-ink/70 mt-1 leading-tight">
            Chat directly with our engineering team on WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setHasInteracted(true)}
            className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-sm transition-all"
          >
            <MessageCircle size={14} />
            <span>Chat +91-7252000711</span>
          </a>
        </div>
      )}

      {/* Main Circular Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setHasInteracted(true)}
        className="pointer-events-auto group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-108 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with PC Agro on WhatsApp at +91-7252000711"
        title="WhatsApp: +91-7252000711"
      >
        {/* Pulsing Aura Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:animate-none" />

        {/* WhatsApp Icon */}
        <MessageCircle size={30} className="relative z-10 transition-transform group-hover:scale-110" />

        {/* Online Indicator Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-xs">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
        </span>
      </a>
    </div>
  );
};
