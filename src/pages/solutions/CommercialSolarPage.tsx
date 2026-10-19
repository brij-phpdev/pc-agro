import React from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Link } from 'react-router-dom';
import { Building2, Zap, ShieldCheck, ArrowUpRight, CheckCircle2, TrendingDown } from 'lucide-react';

export const CommercialSolarPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Solar Solutions', href: '/solutions' },
    { label: 'Commercial Solar' }
  ];

  const applications = [
    { title: 'Corporate Office Parks & IT Hubs', desc: 'Lowering massive daytime air-conditioning and workstation power consumption during peak hours.' },
    { title: 'Retail Malls, Showrooms & Supermarkets', desc: 'Hedge against commercial tariff tiers and showcase ESG sustainability credentials to shoppers.' },
    { title: 'Hotels, Resorts & Hospitality', desc: 'Continuous hot-water solar thermal and power generation for laundry, kitchen, and guest rooms.' },
    { title: 'Commercial EV Charging Carports', desc: 'Dual-purpose solar shade canopies protecting vehicles while delivering clean EV charging.' },
  ];

  const specs = [
    { label: 'Typical System Sizes', value: '25 kW to 200 kW' },
    { label: 'Primary Economic Benefit', value: 'Peak Daytime Tariff Arbitrage' },
    { label: 'Tax Advantages', value: 'Accelerated Depreciation (AD)' },
    { label: 'Inverter Topology', value: 'Three-Phase Smart String Inverters' },
    { label: 'Monitoring Infrastructure', value: 'Cloud SCADA & Telemetry Dashboard' },
    { label: 'Estimated Payback Period', value: '3 to 4 Years' },
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Building2 size={14} className="text-moss-green" />
            <span>COMMERCIAL & BUSINESS SOLAR</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            Smarter Energy for Growing Businesses.
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            Evaluate solar solutions for offices, shops, commercial buildings and business facilities looking to manage their electricity consumption, hedge against rising commercial power tariffs, and meet ESG goals.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact?property=Commercial"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-sm font-semibold tracking-wider transition-colors shadow-soft"
            >
              <span>Discuss Commercial Solar Project</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-fog hover:bg-mist-grey/40 text-moss-ink text-xs font-semibold border border-mist-grey transition-colors"
            >
              <span>Calculate Commercial Savings</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & PHOTOGRAPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
              Drastically Reduce Peak Commercial Power Tariffs
            </h2>
            <p className="text-base text-moss-ink/80 leading-relaxed">
              Commercial facilities draw the majority of their power during the daytime—coinciding exactly with peak solar irradiance hours. By deploying commercial rooftop solar and shade canopies, enterprises convert high-rate daytime utility consumption into low-cost self-generation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Fast Payback:</strong> High daytime consumption produces immediate utility reductions with typical payback in 3–4 years.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Corporate Sustainability:</strong> Substantially reduce Scope 2 greenhouse gas emissions and enhance green building certifications.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Multi-Roof Engineering:</strong> Specialized structural engineering for concrete RCC rooftops, trapezoidal metal sheets, and elevated carports.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden border border-mist-grey shadow-md relative group bg-fog">
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
                alt="Commercial Solar Installation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 bg-moss-ink/90 backdrop-blur-md text-fog px-5 py-3 rounded-2xl border border-mist-grey/30">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">Business & Office Solutions</span>
                <span className="text-sm font-semibold">150 kWp Commercial Solar Installation</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. APPLICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="p-8 sm:p-12 rounded-[40px] bg-white border border-mist-grey/70 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-moss-green block">
              COMMERCIAL SECTORS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-moss-ink">
              Solar Tailored to Diverse Commercial Infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-fog border border-mist-grey/60 space-y-2.5">
                <span className="text-xs font-bold text-moss-green">0{idx + 1}</span>
                <h4 className="text-base font-bold text-moss-ink">{app.title}</h4>
                <p className="text-xs text-moss-ink/75 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPECS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-12 rounded-[40px] bg-white border border-mist-grey/70 shadow-sm space-y-6">
          <div className="border-b border-mist-grey/50 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-moss-green block">
              FINANCIAL & TECHNICAL BENCHMARKS
            </span>
            <h3 className="text-2xl font-bold text-moss-ink mt-1">
              Commercial System Parameters
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-fog border border-mist-grey/60">
                <span className="text-xs font-medium text-moss-ink/70 block">{item.label}</span>
                <span className="text-lg font-bold text-moss-ink mt-1 block">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-[48px] bg-moss-ink text-fog text-center space-y-5 border border-mist-grey/20">
          <span className="text-xs font-bold uppercase tracking-widest text-pistachio block">
            NEXT STEPS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-fog tracking-tight">
            Discuss Your Commercial Facility Solar Plan
          </h2>
          <p className="text-base text-fog/80 max-w-xl mx-auto leading-relaxed">
            Our engineers assess your building drawings and utility bills to deliver a comprehensive commercial feasibility report.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?property=Commercial"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
            >
              <span>Discuss Commercial Solar</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CommercialSolarPage;
