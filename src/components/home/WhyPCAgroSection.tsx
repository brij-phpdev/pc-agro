import React from 'react';
import { History, SunMedium, Layers, Target, Headphones, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const advantages = [
  {
    icon: History,
    title: 'Business Heritage',
    description: 'Building on a trading legacy established in 1978.',
    label: 'Trading Roots',
    stat: 'Est. 1978'
  },
  {
    icon: SunMedium,
    title: 'Solar Experience',
    description: 'Working in the solar sector since approximately 2015–16.',
    label: 'Sector Track Record',
    stat: '2015–16'
  },
  {
    icon: Layers,
    title: 'Product Options',
    description: 'Solar modules, inverters, batteries and related system components, subject to availability.',
    label: 'Components',
    stat: 'Tier-1 Tech'
  },
  {
    icon: Target,
    title: 'Project-Focused Approach',
    description: 'Solutions discussed around actual site conditions and energy requirements.',
    label: 'Engineering',
    stat: 'Site Tailored'
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Assistance with product information, project coordination and relevant service enquiries.',
    label: 'Assistance',
    stat: 'End-to-End'
  }
];

export const WhyPCAgroSection: React.FC = () => {
  return (
    <section className="py-24 bg-white text-moss-ink border-b border-mist-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Copy) */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck size={14} className="text-moss-green" />
            <span>THE PC AGRO ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moss-ink tracking-tight leading-tight">
            Experience That Moves Energy Forward.
          </h2>
        </div>

        {/* 5 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-[32px] bg-fog border border-mist-grey/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-moss-green text-moss-ink group-hover:text-fog flex items-center justify-center transition-colors border border-mist-grey/50">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold text-moss-ink/50 tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-moss-ink group-hover:text-moss-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-moss-ink/80 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-mist-grey/40 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-moss-ink/60">
                    {item.label}
                  </span>
                  <span className="text-xs font-bold text-moss-green bg-white px-2.5 py-1 rounded-full border border-mist-grey/50">
                    {item.stat}
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Consultation Callout Card */}
          <div className="p-8 rounded-[32px] bg-moss-ink text-fog border border-mist-grey/20 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-pistachio block">
                LET'S EXPLORE
              </span>
              <h3 className="text-2xl font-bold text-fog leading-snug">
                Discuss Your Energy Requirements
              </h3>
              <p className="text-xs sm:text-sm text-fog/80 leading-relaxed font-light">
                Our specialists help evaluate your site conditions, load profile, and suitable solar product choices.
              </p>
            </div>

            <div className="pt-6">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog font-semibold text-xs uppercase tracking-wider transition-colors shadow-soft"
              >
                <span>Talk to Our Team</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyPCAgroSection;
