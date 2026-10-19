import React from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Link } from 'react-router-dom';
import { Home, Zap, ShieldCheck, Sun, ArrowUpRight, CheckCircle2, Battery, HelpCircle } from 'lucide-react';

export const ResidentialSolarPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Solar Solutions', href: '/solutions' },
    { label: 'Residential Solar' }
  ];

  const applications = [
    { title: 'Independent Bungalows & Villas', desc: 'Custom rooftop arrays engineered for high aesthetic appeal and maximum daytime output.' },
    { title: 'Row Houses & Duplexes', desc: 'Space-optimized designs maximizing limited roof areas with high-efficiency TopCon modules.' },
    { title: 'Apartments & Gated Communities', desc: 'Shared rooftop setups powering common area lighting, elevators, and water pumps.' },
    { title: 'Farmhouses & Rural Homesteads', desc: 'Off-grid and hybrid energy independence with dependable lithium battery backup.' },
  ];

  const specs = [
    { label: 'Typical System Sizes', value: '3 kW to 15 kW' },
    { label: 'Annual Electricity Bill Offset', value: 'Up to 90%' },
    { label: 'Roof Area Required', value: '~80 to 90 sq. ft per kW' },
    { label: 'Module Warranty', value: '25 Years Linear Performance' },
    { label: 'Inverter Warranty', value: '5 to 10 Years Manufacturer Warranty' },
    { label: 'Grid Interaction', value: 'Bi-directional Net Metering' },
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Home size={14} className="text-moss-green" />
            <span>ROOFTOP SOLAR FOR HOMES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            Make Your Rooftop Work Smarter.
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            Explore rooftop solar options designed around your household electricity use, available roof space and grid requirements. Cut monthly utility bills, gain power security, and enjoy clean energy year-round.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact?property=Residential"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-sm font-semibold tracking-wider transition-colors shadow-soft"
            >
              <span>Explore Residential Solar Quote</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-fog hover:bg-mist-grey/40 text-moss-ink text-xs font-semibold border border-mist-grey transition-colors"
            >
              <span>Calculate Home Solar Savings</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & PHOTOGRAPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
              Designed for Daily Household Energy Demand
            </h2>
            <p className="text-base text-moss-ink/80 leading-relaxed">
              Every home has a unique rooftop structure and distinct electricity patterns. Whether you want to eliminate monthly power bills via net metering or require battery backup to protect against grid outages, our team helps plan a dependable residential system.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Net Metering Integration:</strong> Export surplus daytime generation back to your utility provider for bill credits.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Tier-1 Solar Modules:</strong> High-efficiency TopCon cells generating high output even in diffuse morning or evening light.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Elevated Structures:</strong> Hot-dip galvanized or anodized aluminum structures engineered to preserve rooftop living space.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Mobile App Monitoring:</strong> Real-time tracking of solar generation, home consumption, and battery reserves.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden border border-mist-grey shadow-md relative group bg-fog">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
                alt="Residential Rooftop Solar Installation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 bg-moss-ink/90 backdrop-blur-md text-fog px-5 py-3 rounded-2xl border border-mist-grey/30">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">Verified Household Solution</span>
                <span className="text-sm font-semibold">Residential On-Grid & Hybrid Solar</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROPERTY TYPES & APPLICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="p-8 sm:p-12 rounded-[40px] bg-white border border-mist-grey/70 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-moss-green block">
              SUITABLE PROPERTY TYPES
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-moss-ink">
              Rooftop Solutions Engineered for Every Home Architecture
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

      {/* 4. TECHNICAL SPECIFICATIONS MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-12 rounded-[40px] bg-white border border-mist-grey/70 shadow-sm space-y-6">
          <div className="border-b border-mist-grey/50 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-moss-green block">
              BENCHMARK SPECIFICATIONS
            </span>
            <h3 className="text-2xl font-bold text-moss-ink mt-1">
              Residential System Parameters
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
            GET STARTED
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-fog tracking-tight">
            Ready to Plan Your Home Solar System?
          </h2>
          <p className="text-base text-fog/80 max-w-xl mx-auto leading-relaxed">
            Share your roof dimensions or monthly electricity bill to receive an initial solar feasibility assessment.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?property=Residential"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
            >
              <span>Explore Residential Solar</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ResidentialSolarPage;
