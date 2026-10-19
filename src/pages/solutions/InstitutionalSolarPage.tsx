import React from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Link } from 'react-router-dom';
import { GraduationCap, Zap, ShieldCheck, ArrowUpRight, CheckCircle2, Award } from 'lucide-react';

export const InstitutionalSolarPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Solar Solutions', href: '/solutions' },
    { label: 'Institutional Solar' }
  ];

  const applications = [
    { title: 'Schools, Colleges & University Campuses', desc: 'Solar installations that slash institutional utility bills while serving as live educational models for students.' },
    { title: 'Cold Storage Facilities & Rural Hubs', desc: 'Continuous temperature maintenance for perishable agro products with seamless hybrid solar storage.' },
    { title: 'Hospitals & Medical Research Centers', desc: 'Zero-tolerance power continuity for life support systems and diagnostic labs with sub-10ms switchover.' },
    { title: 'Government & Municipal Facilities', desc: 'Public infrastructure projects meeting mandated sustainability guidelines and state solar quotas.' },
  ];

  const specs = [
    { label: 'Typical System Sizes', value: '50 kW to 500 kW' },
    { label: 'Power Security', value: 'Hybrid Microgrid & UPS Redundancy' },
    { label: 'Educational Dashboard', value: 'Live Campus Display Telemetry' },
    { label: 'Warranty Coverage', value: '25-Year Certified Component Guarantees' },
    { label: 'Environmental Impact', value: '~100 to 500+ Tons CO₂ Abatement/yr' },
    { label: 'Financing Models', value: 'CAPEX & Institutional Consultation' },
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <GraduationCap size={14} className="text-moss-green" />
            <span>CAMPUSES & SPECIALISED FACILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            Supporting Institutions with Solar.
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            Solar options for schools, educational campuses, cold storage facilities and other suitable institutional or specialised applications where reliability and operational continuity are vital.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact?property=Institutional"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-sm font-semibold tracking-wider transition-colors shadow-soft"
            >
              <span>Enquire About Institutional Solar</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-fog hover:bg-mist-grey/40 text-moss-ink text-xs font-semibold border border-mist-grey transition-colors"
            >
              <span>Explore Campus Projects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & PHOTOGRAPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
              Operational Continuity Meets Long-Term Cost Predictability
            </h2>
            <p className="text-base text-moss-ink/80 leading-relaxed">
              Educational institutions, medical centers, and agricultural cold chain hubs require uninterrupted power to safeguard lives, research, and perishable inventory. Our institutional solar solutions provide dependable generation, hybrid storage, and transparent telemetry.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Public Education Impact:</strong> Interactive kiosks for students and visitors displaying clean energy generated in real time.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Cold Chain Security:</strong> Essential backup power ensuring chillers and temperature controllers operate without interruption.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-moss-ink/80">
                <CheckCircle2 size={18} className="text-moss-green flex-shrink-0 mt-0.5" />
                <span><strong>Long-Term Budget Stability:</strong> Protect institutional operating budgets from recurring electricity tariff increases over 25+ years.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden border border-mist-grey shadow-md relative group bg-fog">
              <img
                src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=1200&q=80"
                alt="Institutional Solar Installation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 bg-moss-ink/90 backdrop-blur-md text-fog px-5 py-3 rounded-2xl border border-mist-grey/30">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">Campus & Specialized</span>
                <span className="text-sm font-semibold">100 kWp Institutional Solar Installation</span>
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
              INSTITUTIONAL DOMAINS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-moss-ink">
              Reliable Solar for Campuses, Healthcare & Agri Infrastructure
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
              OPERATIONAL BENCHMARKS
            </span>
            <h3 className="text-2xl font-bold text-moss-ink mt-1">
              Institutional System Parameters
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
            CAMPUS CONSULTATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-fog tracking-tight">
            Consult on Institutional Solar Feasibility
          </h2>
          <p className="text-base text-fog/80 max-w-xl mx-auto leading-relaxed">
            We assist trustees, educational directors, and facility managers with phased engineering proposals and tender documentation.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?property=Institutional"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
            >
              <span>Enquire About Institutional Solar</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InstitutionalSolarPage;
