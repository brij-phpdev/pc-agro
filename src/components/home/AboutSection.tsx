import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, History, ShieldCheck, Sun } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white text-moss-ink border-b border-mist-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column (Exact Copy) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
              <Sun size={14} className="text-moss-green" />
              <span>OUR LEGACY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moss-ink tracking-tight leading-[1.12]">
              A Legacy of Trade.  
              <br />
              <span className="text-moss-green">A Future Powered by Solar.</span>
            </h2>

            <p className="text-base sm:text-lg text-moss-ink/80 font-normal leading-relaxed">
              With business roots dating back to 1978, PC Agro brings decades of trading experience to the evolving solar energy sector. Since entering solar around 2015–16, we have focused on helping customers explore suitable products and practical energy solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-fog border border-mist-grey/70">
                <span className="text-2xl sm:text-3xl font-bold text-moss-ink block">1978</span>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-moss-green mt-1">Heritage Established</h4>
                <p className="text-xs text-moss-ink/70 mt-0.5 leading-relaxed">Trading roots and enduring customer partnerships.</p>
              </div>

              <div className="p-5 rounded-2xl bg-fog border border-mist-grey/70">
                <span className="text-2xl sm:text-3xl font-bold text-moss-ink block">2015–16</span>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-moss-green mt-1">Solar Transition</h4>
                <p className="text-xs text-moss-ink/70 mt-0.5 leading-relaxed">Dedicated focus on solar products & engineering.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-moss-green hover:bg-moss-ink text-fog text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-soft group"
              >
                <span>Discover Our Story</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[36px] overflow-hidden shadow-md border border-mist-grey relative group">
              <img
                src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                alt="PC Agro Solar Legacy"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/50 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Overlapping badge */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-moss-ink text-fog p-6 rounded-3xl shadow-xl max-w-xs border border-mist-grey/20 hidden sm:block">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={18} className="text-pistachio" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-pistachio">Trade Roots</span>
              </div>
              <span className="text-xl font-bold text-fog block">Decades of Trust</span>
              <p className="text-xs text-mist-grey mt-1 leading-relaxed">
                Supplying verified solar technology with genuine warranty protection.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
