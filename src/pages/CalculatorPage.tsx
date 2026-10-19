import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SolarCalculatorSection } from '../components/home/SolarCalculatorSection';
import { Sun, HelpCircle, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CalculatorPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Solar Calculator' }
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      {/* 1. Header Banner (Exact Copy) */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Sun size={14} className="text-moss-green" />
            <span>EXPLORE YOUR SOLAR POTENTIAL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            What Could Solar Mean for You?
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            Discover an initial estimate of your solar requirements, potential generation and electricity savings using your basic energy details.
          </p>
        </div>
      </section>

      {/* 2. Solar Calculator Interactive Section */}
      <SolarCalculatorSection />

      {/* 3. Helpful Guidance Notes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-moss-green">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-moss-ink">
              Understanding Your Solar Potential
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-moss-ink flex items-center gap-2">
                <Zap size={16} className="text-moss-green" />
                How is system size calculated?
              </h4>
              <p className="text-xs sm:text-sm text-moss-ink/80 leading-relaxed">
                By evaluating monthly electricity consumption and standard daily solar irradiation, we estimate the capacity in kilowatts (kW) needed to offset your power requirements.
              </p>
            </div>

            <div className="p-7 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-moss-ink flex items-center gap-2">
                <Sun size={16} className="text-moss-green" />
                How much rooftop area is required?
              </h4>
              <p className="text-xs sm:text-sm text-moss-ink/80 leading-relaxed">
                High-efficiency solar modules typically require approximately 80 to 100 square feet of shadow-free rooftop or ground space per 1 kW of installed solar capacity.
              </p>
            </div>

            <div className="p-7 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-moss-ink flex items-center gap-2">
                <ShieldCheck size={16} className="text-moss-green" />
                How do grid-connected systems work?
              </h4>
              <p className="text-xs sm:text-sm text-moss-ink/80 leading-relaxed">
                On-grid systems export daytime solar power into the utility grid via net metering, reducing your monthly electricity bills by offsetting grid power usage.
              </p>
            </div>

            <div className="p-7 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
              <h4 className="text-base font-bold text-moss-ink flex items-center gap-2">
                <HelpCircle size={16} className="text-moss-green" />
                Why are calculator results indicative?
              </h4>
              <p className="text-xs sm:text-sm text-moss-ink/80 leading-relaxed">
                Estimates are indicative only. Actual results depend on location, system design, tariffs, roof conditions and applicable regulations.
              </p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-moss-green text-fog text-xs font-bold uppercase tracking-wider hover:bg-moss-ink transition-colors shadow-soft"
            >
              <span>Request a Site Feasibility Discussion</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CalculatorPage;
