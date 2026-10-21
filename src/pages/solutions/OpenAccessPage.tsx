import React from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Link } from 'react-router-dom';
import { Network, Zap, ShieldCheck, ArrowUpRight, CheckCircle2, TrendingDown, Building2, Factory } from 'lucide-react';

export const OpenAccessPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Solar Solutions', href: '/solutions' },
    { label: 'Open Access Solar' }
  ];

  const clientHighlights = [
    { name: 'Ultratech Cement', location: 'Sikandrabad, UP', industry: 'Cement & Building Materials' },
    { name: 'Rimjhim Ispat', location: 'Kanpur, UP', industry: 'Stainless Steel & Rolling Mills' },
    { name: 'Umang Dairy', location: 'Gajraula, UP', industry: 'Continuous Dairy & Food Processing' },
    { name: 'Atul Engineering Udyog', location: 'Agra, UP', industry: 'Heavy Precision Engineering' },
    { name: 'Mahesh Edible Oil Industries', location: 'Agra, UP', industry: 'Large-Scale Edible Oil Extraction' },
  ];

  const models = [
    {
      title: 'Group Captive Model',
      tagline: 'Maximum Tariff Arbitrage (Exempt from CSS & AS)',
      desc: 'The corporate consumer holds 26% equity in the SPV and consumes at least 51% of generated power. Fully exempt from Cross Subsidy Surcharge (CSS) and Additional Surcharge (AS) under the Indian Electricity Act 2003.',
      badge: 'Most Popular for Heavy Industry',
      points: [
        'Net savings of ₹3.00 to ₹4.50 per unit over DISCOM grid tariffs',
        'Exempted from Cross Subsidy Surcharge (CSS) in most states',
        'High return on equity investment within 24 to 36 months',
        '100% compliance with state SERC captive norms'
      ]
    },
    {
      title: 'Third-Party PPA (RESCO)',
      tagline: 'Zero Capital Expenditure, Immediate Savings',
      desc: 'Procure clean solar power generated at utility solar farms under a bilateral Power Purchase Agreement (PPA) with zero upfront equity investment. Pay only for actual units delivered at a pre-agreed low tariff.',
      badge: 'Zero Upfront CAPEX',
      points: [
        'Zero capital investment required from the consumer',
        'Immediate tariff discounts over standard utility industrial rates',
        'Predictable 10 to 25 year power tariff hedge',
        'No operations, maintenance, or asset risks on consumer balance sheet'
      ]
    }
  ];

  const specs = [
    { label: 'Minimum Contract Demand', value: '1 MW+ (100 kW under Green Energy Open Access)' },
    { label: 'Interconnection Voltage', value: '11 kV / 33 kV / 66 kV / 132 kV HT Lines' },
    { label: 'Typical Tariff Savings', value: '30% to 50% vs Commercial DISCOM Tariffs' },
    { label: 'Rooftop Space Required', value: 'Zero (Wheeled via State Transmission STU/CTU)' },
    { label: 'Regulatory Framework', value: 'Electricity Act 2003 & MoP Green Energy OA Rules' },
    { label: 'Target Clients', value: 'Steel, Cement, Textile, Heavy Chemicals & Foundries' },
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Network size={14} className="text-moss-green" />
            <span>MEGAWATT POWER WHEELING (1 MW+)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            Open Access Solar Solutions.
            <br />
            <span className="text-moss-green">Clean Energy for Heavy Industry.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            Procure bulk renewable power directly from off-site utility solar farms over the grid with zero rooftop space limitations. Designed for large industrial and commercial consumers seeking 30% to 50% tariff savings.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact?requirement=Open Access Feasibility Assessment"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-sm font-semibold tracking-wider transition-colors shadow-soft"
            >
              <span>Request Open Access Feasibility</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-fog hover:bg-mist-grey/40 text-moss-ink text-xs font-semibold border border-mist-grey transition-colors"
            >
              <span>View Open Access Track Record</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS OPEN ACCESS & VALUE PROP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-mist-grey text-moss-green text-xs font-semibold uppercase tracking-wider">
              <span>HOW IT WORKS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
              Unlock Clean Megawatt Power Without Rooftop Constraints
            </h2>
            
            <p className="text-base text-moss-ink/80 leading-relaxed">
              Heavy industries such as steel rolling, foundries, cement grinding, and large-scale dairies consume millions of units every month. For these facilities, on-site rooftop space is often insufficient to offset more than 10–15% of their total power load.
            </p>

            <p className="text-base text-moss-ink/80 leading-relaxed">
              <strong>Open Access</strong> solves this limitation. Electricity generated at large utility solar farms is transmitted ("wheeled") through the state (STU) or central (CTU) transmission grid directly to your plant's existing HT connection.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-moss-green shrink-0 mt-1" />
                <span className="text-sm text-moss-ink/90">
                  <strong>Zero Space Limits:</strong> Power up to 100% of your energy requirement without taking a single square foot of factory ground.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-moss-green shrink-0 mt-1" />
                <span className="text-sm text-moss-ink/90">
                  <strong>Immediate Tariff Arbitrage:</strong> Lower your blended unit cost from ₹8–10/unit DISCOM tariffs down to ₹4.50–5.50/unit.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-moss-green shrink-0 mt-1" />
                <span className="text-sm text-moss-ink/90">
                  <strong>Regulatory & Banking Management:</strong> End-to-end liaison with SLDC, DISCOMs, and STU authorities handled by PC Agro.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-[36px] overflow-hidden border border-mist-grey/80 shadow-md relative group">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80"
                alt="Utility Scale Solar Open Access Grid"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-mist-grey/40 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-moss-green block">Grid-Synchronized Wheeling</span>
                    <span className="text-lg font-bold text-moss-ink">Up to 50% Savings on Industrial Power Bills</span>
                  </div>
                  <TrendingDown size={28} className="text-moss-green" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BUSINESS MODELS: GROUP CAPTIVE vs THIRD PARTY PPA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-moss-green block">STRUCTURED PROCUREMENT</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
            Flexible Open Access Delivery Frameworks
          </h2>
          <p className="text-base text-moss-ink/80 leading-relaxed">
            Choose the regulatory structure that aligns best with your balance sheet, corporate capital strategy, and energy volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((m, idx) => (
            <div key={idx} className="p-8 sm:p-10 rounded-[36px] bg-white border border-mist-grey/70 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-bold uppercase tracking-wider">
                  {m.badge}
                </div>
                <h3 className="text-2xl font-bold text-moss-ink">{m.title}</h3>
                <p className="text-xs font-semibold text-moss-green uppercase tracking-wider">{m.tagline}</p>
                <p className="text-sm text-moss-ink/80 leading-relaxed">{m.desc}</p>
                
                <div className="pt-4 border-t border-mist-grey/50 space-y-2.5">
                  {m.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-moss-ink/90">
                      <CheckCircle2 size={15} className="text-moss-green shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to={`/contact?model=${encodeURIComponent(m.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-fog hover:bg-moss-green hover:text-fog text-moss-ink text-xs font-semibold transition-colors border border-mist-grey"
                >
                  <span>Evaluate {m.title}</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VERIFIED OPEN ACCESS CLIENT TRACK RECORD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="p-10 sm:p-12 rounded-[40px] bg-moss-ink text-fog space-y-8 border border-mist-grey/20">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-pistachio block">PROVEN TRACK RECORD</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-fog tracking-tight">
              Trusted by Premier Industrial Leaders
            </h2>
            <p className="text-sm text-fog/80 leading-relaxed">
              PC Agro facilitates and executes Open Access power supply for industry-leading conglomerates across Uttar Pradesh and Northern India:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientHighlights.map((client, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <Factory size={20} className="text-pistachio" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio bg-white/10 px-2 py-0.5 rounded-full">
                    {client.location}
                  </span>
                </div>
                <h4 className="text-base font-bold text-fog">{client.name}</h4>
                <p className="text-xs text-fog/70">{client.industry}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-fog/70">
              Does your manufacturing plant have a connected HT load of 1 MW or higher?
            </p>
            <Link
              to="/contact?requirement=Industrial Tariff Audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
            >
              <span>Get Free Industrial Tariff Audit</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATIONS & CRITERIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-moss-green block">ELIGIBILITY CRITERIA</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
            Key Open Access Technical Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-mist-grey/70 shadow-sm space-y-2">
              <span className="text-xs font-semibold text-moss-green uppercase tracking-wider block">
                {item.label}
              </span>
              <div className="text-base font-bold text-moss-ink">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default OpenAccessPage;
