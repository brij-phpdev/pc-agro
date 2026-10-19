import React from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Link } from 'react-router-dom';
import { Factory, Zap, ShieldCheck, ArrowUpRight, CheckCircle2, Cog } from 'lucide-react';

export const IndustrialSolarPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Solar Solutions', href: '/solutions' },
    { label: 'Industrial Solar' }
  ];

  const applications = [
    { title: 'Manufacturing Plants & Metal Sheds', desc: 'Heavy-duty non-penetrative clamp mounting across expansive metal warehouse and factory roofs.' },
    { title: 'Logistics Hubs & Distribution Centers', desc: 'Megawatt-scale rooftop arrays generating millions of clean kilowatt-hours per year.' },
    { title: 'Chemical & Textile Processing Units', desc: 'Corrosion-resistant anodized structures and IP66 inverters built for harsh industrial environments.' },
    { title: 'Cold Storage & Agro Processing', desc: 'Continuous daytime solar offset shielding high-energy chilling compressors from peak utility rates.' },
  ];

  const specs = [
    { label: 'Typical System Sizes', value: '100 kW to 2 MW+' },
    { label: 'Levelized Cost of Electricity', value: 'Significantly lower than industrial grid tariffs' },
    { label: 'Voltage Synchronization', value: 'High Tension (11kV / 33kV) Utility Interconnection' },
    { label: 'Inverter Types', value: 'Central & High-Capacity Multi-MPPT String Inverters' },
    { label: 'Telemetry & Control', value: 'Industrial SCADA, Remote Curtailment & DG Sync' },
    { label: 'Structural Durability', value: 'Certified up to 180 km/h Wind Speeds' },
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Factory size={14} className="text-moss-green" />
            <span>HEAVY MANUFACTURING & PLANTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            Energy Solutions for Industry.
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            Explore solar installations for factories, warehouses and manufacturing facilities, with planning based on operational loads and available installation space.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact?property=Industrial"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-sm font-semibold tracking-wider transition-colors shadow-soft"
            >
              <span>Discuss an Industrial Project</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-fog hover:bg-mist-grey/40 text-moss-ink text-xs font-semibold border border-mist-grey transition-colors"
            >
              <span>View Industrial Projects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & PHOTOGRAPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
              Megawatt-Scale Engineering Built for Heavy Power Loads
            </h2>
            <p className="text-base text-moss-ink/80 leading-relaxed">
              Industrial manufacturing units carry heavy motor loads, continuous operational cycles, and high contracted maximum demand charges. We engineer high-yield photovoltaic systems to dramatically lower your levelized cost of energy (LCOE) while safeguarding grid stability.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Zero Roof Penetration:</strong> Custom standing seam and trapezoidal clamps that preserve roof waterproofing and integrity.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Diesel Generator Synchronization:</strong> Intelligent controllers that modulate solar generation seamlessly with backup DG sets to prevent reverse power damage.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Comprehensive SCADA Telemetry:</strong> String-level monitoring, inverter alarms, and weather station irradiance sensors.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden border border-mist-grey shadow-md relative group bg-fog">
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial Solar Installation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 bg-moss-ink/90 backdrop-blur-md text-fog px-5 py-3 rounded-2xl border border-mist-grey/30">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">Industrial Scale</span>
                <span className="text-sm font-semibold">500 kWp Industrial Rooftop Installation</span>
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
              OPERATIONAL SECTORS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-moss-ink">
              Engineered for Diverse Industrial Work Environments
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

      {/* 4. TECHNICAL SPECS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-12 rounded-[40px] bg-white border border-mist-grey/70 shadow-sm space-y-6">
          <div className="border-b border-mist-grey/50 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-moss-green block">
              ENGINEERING BENCHMARKS
            </span>
            <h3 className="text-2xl font-bold text-moss-ink mt-1">
              Industrial System Parameters
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
            LARGE-SCALE ADVISORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-fog tracking-tight">
            Schedule an Industrial Site Survey
          </h2>
          <p className="text-base text-fog/80 max-w-xl mx-auto leading-relaxed">
            Our engineering team conducts structural wind-load analysis and electrical grid audits before issuing an industrial proposal.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?property=Industrial"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
            >
              <span>Discuss an Industrial Project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndustrialSolarPage;
