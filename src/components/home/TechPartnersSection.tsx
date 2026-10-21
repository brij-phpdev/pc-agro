import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { technologyPartnersData, sourcingStandards } from '../../data/partnersData';
import { ShieldCheck, Award, Zap, Sun, ArrowUpRight, CheckCircle2, Star } from 'lucide-react';

export const TechPartnersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Solar Modules' | 'Inverters & Storage'>('All');

  const filteredPartners = activeTab === 'All'
    ? technologyPartnersData
    : technologyPartnersData.filter(p => p.category === activeTab);

  return (
    <section className="py-24 bg-white text-moss-ink border-b border-mist-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck size={14} className="text-moss-green" />
              <span>SOURCE OF PRODUCT & OEM ALLIANCES</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moss-ink tracking-tight leading-tight">
              Tier-1 Technology Partners.
              <br />
              <span className="text-moss-green">Direct Manufacturer Sourcing.</span>
            </h2>

            <p className="text-base text-moss-ink/80 leading-relaxed">
              We eliminate intermediaries by sourcing directly from world-class solar panel and inverter manufacturers. Every component supplied is authentic, BIS & ALMM certified, and backed by comprehensive OEM warranties.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Solar Modules', 'Inverters & Storage'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-moss-ink text-fog shadow-sm font-bold'
                    : 'bg-fog text-moss-ink/80 hover:bg-pistachio/40 border border-mist-grey'
                }`}
              >
                {tab === 'All' ? 'All Partners' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Distributor Spotlight Banner: Kehua Tech */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-moss-ink text-fog border border-mist-grey/20 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-pistachio text-xs font-bold uppercase tracking-wider">
                <Star size={13} className="text-pistachio fill-pistachio" />
                <span>OFFICIAL IMPORTER & DISTRIBUTOR (INDIA & NEPAL)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-fog">
                Kehua Tech On-Grid Inverters & Energy Storage
              </h3>

              <p className="text-sm text-fog/80 leading-relaxed">
                Kehua Tech is a renowned group company of <strong>Lenovo Computers</strong> and an established global leader in power electronics, UPS systems, and battery storage. PC Agro is proud to be the direct national importer and distributor for Kehua Tech across India and Nepal, providing local warranty support, rapid spare dispatches, and authorized field technical service.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pistachio">
                  Lenovo Group Company
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pistachio">
                  BIS Approved & Zero-Export Ready
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pistachio">
                  Utility & C&I String Inverters
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Link
                to="/products-list?category=inverters"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
              >
                <span>Explore Kehua Inverters</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map(partner => (
            <div
              key={partner.id}
              className="p-7 rounded-[32px] bg-fog border border-mist-grey/70 hover:border-moss-green/50 transition-all flex flex-col justify-between space-y-5 group hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-mist-grey text-moss-green">
                    {partner.category}
                  </span>
                  {partner.badge && (
                    <span className="text-[10px] font-bold text-moss-ink/70">
                      {partner.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-xl font-bold text-moss-ink group-hover:text-moss-green transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-xs font-semibold text-moss-green/90 mt-0.5">
                    {partner.relationship}
                  </p>
                </div>

                <p className="text-xs text-moss-ink/75 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="pt-3 border-t border-mist-grey/60 space-y-2">
                <div className="text-[10px] uppercase font-bold text-moss-ink/50 tracking-wider">
                  Quality Standards & Compliance
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {partner.certifications.map((cert, cIdx) => (
                    <span key={cIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white border border-mist-grey/60 text-moss-ink/80">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Quality & Sourcing Assurance Standards */}
        <div className="pt-6 border-t border-mist-grey/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sourcingStandards.map((std, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-moss-green">
                  <CheckCircle2 size={16} />
                  <h5 className="text-sm font-bold text-moss-ink">{std.title}</h5>
                </div>
                <p className="text-xs text-moss-ink/75 leading-relaxed pl-6">
                  {std.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechPartnersSection;
