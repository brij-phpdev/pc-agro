import React from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Link } from 'react-router-dom';
import { Zap, Battery, Cpu, ArrowUpRight, CheckCircle2, XCircle } from 'lucide-react';

export const SystemTypesPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Solar Solutions', href: '/solutions' },
    { label: 'System Types' }
  ];

  const systems = [
    {
      id: 'on-grid',
      title: 'On-Grid Solar',
      tagline: 'Grid-Connected with Net Metering',
      icon: Zap,
      description: 'Connected to the utility grid to support electricity consumption through solar generation.',
      idealFor: 'Homes, offices, and factories with reliable grid access seeking the fastest financial payback and zero battery costs.',
      features: [
        'Exports surplus daytime solar power back to the grid for bill credits',
        'Lowest initial capital expenditure with fastest 3–4 year ROI',
        'Automatic grid synchronization and anti-islanding safety cutoff',
        'Zero battery maintenance or replacement expenses'
      ],
      drawback: 'Does not operate during grid power cuts due to mandatory anti-islanding safety protocols.'
    },
    {
      id: 'off-grid',
      title: 'Off-Grid Solar',
      tagline: 'Complete Energy Independence',
      icon: Battery,
      description: 'Designed to operate independently using compatible battery storage.',
      idealFor: 'Farmhouses, rural agricultural facilities, remote outposts, and areas with frequent and prolonged grid outages.',
      features: [
        '100% independent from local electricity grid infrastructure',
        'Heavy-duty LiFePO4 or tubular solar battery energy banks',
        'Integrated MPPT charge controllers maximizing daily sunlight',
        'Compatible with backup diesel generator (DG) auto-start'
      ],
      drawback: 'Requires higher upfront investment in battery storage and periodic battery lifecycle planning.'
    },
    {
      id: 'hybrid',
      title: 'Hybrid Solar',
      tagline: 'Combines Grid Connectivity + Battery Storage',
      icon: Cpu,
      description: 'Combines solar generation, grid connectivity and battery storage where supported.',
      idealFor: 'Modern residences, healthcare clinics, IT offices, and commercial facilities requiring both low electricity bills and uninterrupted backup.',
      features: [
        'Powers essential loads seamlessly during grid outages with sub-10ms transfer',
        'Exports excess solar energy to the grid after batteries are fully topped up',
        'Smart programmable energy management prioritizing solar first, then battery, then grid',
        'Supports lithium iron phosphate (LiFePO4) safety and 10+ year battery life'
      ],
      drawback: 'Requires smart hybrid inverter hardware and compatible energy storage systems.'
    }
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Zap size={14} className="text-moss-green" />
            <span>SOLAR ARCHITECTURES COMPARED</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            Understanding Solar System Types.
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            Choosing the right solar configuration depends on your local grid stability, daytime vs. nighttime consumption patterns, and backup power requirements. Explore On-Grid, Off-Grid, and Hybrid architectures below.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-sm font-semibold tracking-wider transition-colors shadow-soft"
            >
              <span>Find Your Solar Solution</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-fog hover:bg-mist-grey/40 text-moss-ink text-xs font-semibold border border-mist-grey transition-colors"
            >
              <span>Estimate Potential Savings</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THREE CONFIGURATION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {systems.map((sys) => {
            const Icon = sys.icon;
            return (
              <div
                key={sys.id}
                id={sys.id}
                className="p-8 rounded-[36px] bg-white border border-mist-grey/70 shadow-sm flex flex-col justify-between scroll-mt-28"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-fog text-moss-green flex items-center justify-center border border-mist-grey/60">
                    <Icon size={24} />
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-moss-green block">
                      {sys.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-moss-ink mt-0.5">
                      {sys.title}
                    </h3>
                  </div>

                  <p className="text-sm text-moss-ink/80 leading-relaxed">
                    {sys.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-fog border border-mist-grey/60 text-xs text-moss-ink/80">
                    <strong className="text-moss-ink block mb-1">Recommended Application:</strong>
                    {sys.idealFor}
                  </div>

                  <div className="space-y-2 pt-2">
                    {sys.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-moss-ink/80">
                        <CheckCircle2 size={15} className="text-moss-green flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-mist-grey/40">
                  <Link
                    to={`/contact?requirement=Inquiry for ${encodeURIComponent(sys.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-fog hover:bg-moss-ink hover:text-fog text-moss-ink text-xs font-semibold border border-mist-grey transition-colors"
                  >
                    <span>Enquire About {sys.title}</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. COMPARISON MATRIX TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="p-8 sm:p-12 rounded-[40px] bg-white border border-mist-grey/70 shadow-sm space-y-6">
          <div className="border-b border-mist-grey/50 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-moss-green block">
              ARCHITECTURE COMPARISON
            </span>
            <h3 className="text-2xl font-bold text-moss-ink mt-1">
              Side-by-Side Solar System Comparison
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-mist-grey bg-fog">
                  <th className="py-3 px-4 font-bold text-moss-ink uppercase tracking-wider">Feature</th>
                  <th className="py-3 px-4 font-bold text-moss-green uppercase tracking-wider">On-Grid Solar</th>
                  <th className="py-3 px-4 font-bold text-moss-ink uppercase tracking-wider">Off-Grid Solar</th>
                  <th className="py-3 px-4 font-bold text-moss-ink uppercase tracking-wider">Hybrid Solar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist-grey/40">
                <tr className="hover:bg-fog/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-moss-ink">Grid Connection</td>
                  <td className="py-3 px-4 text-moss-green font-semibold">Yes (Net Metering)</td>
                  <td className="py-3 px-4 text-moss-ink/70">No (Autonomous)</td>
                  <td className="py-3 px-4 text-moss-green font-semibold">Yes (Net Metering)</td>
                </tr>
                <tr className="hover:bg-fog/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-moss-ink">Battery Storage</td>
                  <td className="py-3 px-4 text-moss-ink/70">Not Required</td>
                  <td className="py-3 px-4 text-moss-ink font-semibold">Mandatory</td>
                  <td className="py-3 px-4 text-moss-ink font-semibold">Included (Lithium/Tubular)</td>
                </tr>
                <tr className="hover:bg-fog/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-moss-ink">Operates During Blackouts</td>
                  <td className="py-3 px-4 text-moss-ink/70">No (Safety Cutoff)</td>
                  <td className="py-3 px-4 text-moss-green font-semibold">Yes (100% Online)</td>
                  <td className="py-3 px-4 text-moss-green font-semibold">Yes (&lt;10ms Switchover)</td>
                </tr>
                <tr className="hover:bg-fog/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-moss-ink">Relative Upfront Cost</td>
                  <td className="py-3 px-4 text-moss-green font-semibold">Lowest (Fastest Payback)</td>
                  <td className="py-3 px-4 text-moss-ink/80">Moderate to High</td>
                  <td className="py-3 px-4 text-moss-ink/80">Moderate (Best Long-Term Value)</td>
                </tr>
                <tr className="hover:bg-fog/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-moss-ink">Surplus Power Export Credits</td>
                  <td className="py-3 px-4 text-moss-green font-semibold">Full Credit via DISCOM</td>
                  <td className="py-3 px-4 text-moss-ink/70">None (Local Storage Only)</td>
                  <td className="py-3 px-4 text-moss-green font-semibold">Full Credit After Battery Top-Up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-[48px] bg-moss-ink text-fog text-center space-y-5 border border-mist-grey/20">
          <span className="text-xs font-bold uppercase tracking-widest text-pistachio block">
            NEED RECOMMENDATION?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-fog tracking-tight">
            Not Sure Which System You Need?
          </h2>
          <p className="text-base text-fog/80 max-w-xl mx-auto leading-relaxed">
            Let's discuss your requirements. We evaluate your local grid reliability and load priority to recommend the ideal topology.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
            >
              <span>Find Your Solar Solution</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SystemTypesPage;
