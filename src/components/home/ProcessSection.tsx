import React from 'react';
import { Compass, Search, Wrench, CheckCheck, Sun } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Understand',
    icon: Compass,
    description: 'We learn about your energy requirements.'
  },
  {
    step: '02',
    title: 'Assess',
    icon: Search,
    description: 'We consider your site, consumption and system needs.'
  },
  {
    step: '03',
    title: 'Recommend',
    icon: Wrench,
    description: 'We discuss suitable products and system options.'
  },
  {
    step: '04',
    title: 'Coordinate',
    icon: CheckCheck,
    description: 'We help plan the next steps according to the agreed project scope.'
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-fog text-moss-ink border-b border-mist-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Exact Headline: Your Solar Journey, Made Simpler.) */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Sun size={14} className="text-moss-green" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moss-ink tracking-tight leading-tight">
            Your Solar Journey, Made Simpler.
          </h2>
        </div>

        {/* 4 Process Steps (Exact Copy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-extrabold text-moss-ink group-hover:text-moss-green transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-fog group-hover:bg-moss-green text-moss-ink group-hover:text-fog flex items-center justify-center transition-colors border border-mist-grey/50">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-moss-ink mb-2">
                    {item.step} — {item.title}
                  </h3>
                  
                  <p className="text-sm text-moss-ink/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-mist-grey/40">
                  <div className="w-full h-1 bg-fog rounded-full overflow-hidden">
                    <div
                      className="h-full bg-moss-green rounded-full transition-all duration-500"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
