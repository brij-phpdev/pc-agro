import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sun, ShieldCheck } from 'lucide-react';

export const ClosingCtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-moss-ink text-fog relative overflow-hidden">
      {/* Background soft ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-moss-green/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-pistachio text-xs font-semibold uppercase tracking-wider mb-6">
          <Sun size={14} className="text-pistachio" />
          <span>START YOUR SOLAR JOURNEY</span>
        </div>

        {/* Headline (Exact Copy) */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-fog tracking-tight leading-[1.12]">
          Ready to Explore Solar?
        </h2>

        {/* Description (Exact Copy) */}
        <p className="text-base sm:text-lg text-fog/80 mt-5 max-w-2xl mx-auto leading-relaxed">
          Tell us about your property or project. Let's explore the possibilities together.
        </p>

        {/* Buttons (Exact Copy: Request a Quote | Contact Us) */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider shadow-soft transition-all duration-200 group"
          >
            <span>Request a Quote</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-fog text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-md transition-all duration-200 group"
          >
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Reassurance pills */}
        <div className="mt-14 pt-8 border-t border-mist-grey/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-mist-grey">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-pistachio" /> Est. 1978 Trading Heritage
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-pistachio" /> Solar Experience Since 2015–16
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-pistachio" /> Certified Modules & Inverters
          </span>
        </div>

      </div>
    </section>
  );
};

export default ClosingCtaSection;
