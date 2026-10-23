import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Cpu, 
  Activity, 
  FileCheck2, 
  Radio, 
  Sparkles, 
  Layers, 
  Check, 
  ArrowUpRight,
  TrendingUp,
  Leaf,
  Clock
} from 'lucide-react';

interface AnatomyLayer {
  id: number;
  title: string;
  subtitle: string;
  metric: string;
  description: string;
}

const anatomyLayers: AnatomyLayer[] = [
  {
    id: 1,
    title: '3.2mm Arc-Tempered Glass',
    subtitle: 'Front Surface Layer',
    metric: '94.8% Transmittance',
    description: 'High-transmittance tempered solar glass with anti-reflective nanocoating, rated for severe hailstorms and heavy wind-shear loads.'
  },
  {
    id: 2,
    title: 'N-Type TOPCon Dual-Glass Cells',
    subtitle: 'Active Photovoltaic Core',
    metric: '22.8%+ Efficiency',
    description: 'Bifacial energy capture utilizing rear reflected albedo light with near-zero Light-Induced Degradation (LID) over 25+ years.'
  },
  {
    id: 3,
    title: 'Aerospace-Grade Anodized Frame',
    subtitle: 'Structural Skeleton',
    metric: '5400 Pa Load Rating',
    description: 'Corrosion-resistant anodized aluminum alloy engineered for industrial chemical atmospheres, heavy monsoons, and extreme thermal cycling.'
  },
  {
    id: 4,
    title: 'IP68 Split Bypass Junction Box',
    subtitle: 'Electrical Protection',
    metric: 'Genuine MC4-EVO2',
    description: 'Hermetically sealed split junction box with integrated Schottky bypass diodes minimizing hot-spot formation under partial shading.'
  }
];

export const BentoGridWhyUs: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(2);
  const [liveKwhCounter, setLiveKwhCounter] = useState<number>(128450);

  // Subtle real-time increment simulation (adds realistic clean-tech telemetry feel)
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveKwhCounter(prev => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentLayer = anatomyLayers.find(l => l.id === activeLayer) || anatomyLayers[1];

  return (
    <section className="py-20 sm:py-24 bg-chalk text-moss-ink border-b border-mist-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck size={14} className="text-moss-green" />
            <span>ENGINEERING RIGOR & VERIFIED METRICS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-moss-ink tracking-tight leading-[1.12]">
            Built for 25 Years of
            <br />
            <span className="text-moss-green">Uncompromising Power Yield.</span>
          </h2>

          <p className="text-sm sm:text-base text-moss-ink/80 leading-relaxed">
            We reject cut-corner installations. Every megawatt and rooftop deployed by PC Agro combines tier-1 Bill-of-Materials, CEIG-compliant electrical balance, and continuous digital telemetry.
          </p>
        </div>

        {/* 4-Tile High-Density Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* TILE A (Large, 8 Cols): Tier-1 Panel Anatomy & Engineering Precision */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-[36px] bg-white border border-mist-grey/80 shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-mist-grey/50 pb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green flex items-center gap-1.5">
                  <Layers size={13} />
                  Tier-1 Material Anatomy
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-moss-ink mt-1">
                  Engineering Precision Under the Glass
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fog border border-mist-grey text-[11px] font-bold text-moss-ink self-start sm:self-auto">
                <Sparkles size={12} className="text-moss-green" />
                Zero-Defect Standard
              </span>
            </div>

            {/* Interactive Layer Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {anatomyLayers.map((layer) => {
                const isSelected = activeLayer === layer.id;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayer(layer.id)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-moss-ink text-fog border-moss-ink shadow-sm'
                        : 'bg-fog hover:bg-mist-grey/30 border-mist-grey/70 text-moss-ink'
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                      isSelected ? 'text-pistachio' : 'text-moss-green'
                    }`}>
                      Layer 0{layer.id}
                    </span>
                    <span className="text-xs font-bold line-clamp-1 mt-0.5">{layer.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Exploded Spec Detail Display */}
            <div className="p-5 sm:p-6 rounded-3xl bg-fog border border-mist-grey/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase text-moss-green">{currentLayer.subtitle}</span>
                  <span className="text-xs text-moss-ink/40">•</span>
                  <span className="text-xs font-extrabold text-moss-ink bg-white px-2.5 py-0.5 rounded-full border border-mist-grey">
                    {currentLayer.metric}
                  </span>
                </div>
                <h4 className="text-base font-bold text-moss-ink">{currentLayer.title}</h4>
                <p className="text-xs text-moss-ink/75 leading-relaxed">{currentLayer.description}</p>
              </div>

              <div className="hidden sm:flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-mist-grey/60 text-center min-w-[120px]">
                <Cpu size={24} className="text-moss-green mb-1" />
                <span className="text-[10px] font-bold uppercase text-moss-ink/60">IEC 61215</span>
                <span className="text-[11px] font-extrabold text-moss-ink">BIS Certified</span>
              </div>
            </div>

          </div>

          {/* TILE B (Tall, 4 Cols): Live Energy Output Counter */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-[36px] bg-moss-ink text-fog border border-mist-grey/20 shadow-md flex flex-col justify-between space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-pistachio animate-pulse" />
                  Live Portfolio Telemetry
                </span>
                <span className="text-[10px] font-semibold text-fog/60">Updated Live</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-fog">
                Clean Energy Output
              </h3>
            </div>

            {/* Dynamic Counter Readout */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-fog/70 block">
                Cumulative Generation
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-display text-pistachio tracking-tight">
                {liveKwhCounter.toLocaleString()}+
                <span className="text-xl sm:text-2xl font-semibold text-fog ml-1">MWh</span>
              </div>
              <p className="text-[11px] text-mist-grey leading-tight">
                Generated across Northern India industrial & residential installations.
              </p>
            </div>

            {/* Carbon & Environmental Equivalencies */}
            <div className="space-y-3 pt-2 border-t border-white/10 text-xs">
              <div className="flex items-center justify-between text-mist-grey">
                <span className="flex items-center gap-1.5">
                  <Leaf size={14} className="text-pistachio" />
                  CO₂ Abated
                </span>
                <span className="font-bold text-fog">105,320+ Metric Tons</span>
              </div>
              <div className="flex items-center justify-between text-mist-grey">
                <span className="flex items-center gap-1.5">
                  <TrendingUp size={14} className="text-pistachio" />
                  Equivalent Trees Planted
                </span>
                <span className="font-bold text-fog">4.8 Million+</span>
              </div>
            </div>

          </div>

          {/* TILE C (6 Cols): Government Subsidies & Net Metering Timeline */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-[36px] bg-white border border-mist-grey/80 shadow-sm flex flex-col justify-between space-y-6">
            
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green flex items-center gap-1.5">
                <FileCheck2 size={13} />
                Regulatory & Discom Compliance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-moss-ink mt-1">
                Hassle-Free Approval Timeline
              </h3>
              <p className="text-xs text-moss-ink/75 mt-1 leading-relaxed">
                PC Agro manages all discom documentation, CEIG inspections, net-meter issuance, and government subsidy filings on your behalf.
              </p>
            </div>

            {/* 4 Step Timeline */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { step: '01', title: 'DISCOM Sanction', time: '3–5 Days' },
                { step: '02', title: 'EPC Installation', time: 'Precision Array' },
                { step: '03', title: 'Net Meter Setup', time: 'Grid Connected' },
                { step: '04', title: 'Subsidy Credit', time: 'Direct to Bank' }
              ].map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-fog border border-mist-grey/60 space-y-1">
                  <span className="text-[10px] font-extrabold text-moss-green block">{s.step}</span>
                  <h4 className="text-xs font-bold text-moss-ink leading-tight">{s.title}</h4>
                  <span className="text-[10px] text-moss-ink/60 font-medium block">{s.time}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-mist-grey/50 flex items-center justify-between text-xs">
              <span className="text-[11px] font-semibold text-moss-ink/80 flex items-center gap-1">
                <Check size={14} className="text-moss-green" />
                PV Portal & PM Surya Ghar Compliant
              </span>
              <span className="text-[10px] font-bold uppercase text-moss-green">Zero Customer Hassle</span>
            </div>

          </div>

          {/* TILE D (6 Cols): 24/7 Cloud SCADA & Telematics Badge */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-[36px] bg-white border border-mist-grey/80 shadow-sm flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green flex items-center gap-1.5">
                  <Radio size={13} />
                  IoT Performance Telematics
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <Activity size={11} className="animate-pulse" />
                  Real-Time
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-moss-ink mt-1">
                24/7 Remote Monitoring & String SCADA
              </h3>
              <p className="text-xs text-moss-ink/75 mt-1 leading-relaxed">
                Cloud-connected telemetry tracks inverter performance, detects soiling or grid outages instantly, and triggers preventive maintenance.
              </p>
            </div>

            {/* 3 Telematics Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-fog border border-mist-grey/60 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-moss-ink/50 block">Uptime Guarantee</span>
                <span className="text-lg font-bold text-moss-ink font-display">99.4%</span>
                <span className="text-[10px] text-moss-ink/70 block">Annualized Availability</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-fog border border-mist-grey/60 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-moss-ink/50 block">String Level</span>
                <span className="text-lg font-bold text-moss-green font-display">Multi-MPPT</span>
                <span className="text-[10px] text-moss-ink/70 block">Real-Time Yield Curve</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-fog border border-mist-grey/60 space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-moss-ink/50 block">Support SLA</span>
                <span className="text-lg font-bold text-moss-ink font-display">&lt;15 Mins</span>
                <span className="text-[10px] text-moss-ink/70 block">Engineer Telemetry Alert</span>
              </div>
            </div>

            <div className="pt-2 border-t border-mist-grey/50 flex items-center justify-between text-xs">
              <span className="text-[11px] font-semibold text-moss-ink/80">
                Native Mobile App + Executive Web Dashboard
              </span>
              <Link to="/contact" className="text-xs font-bold text-moss-green hover:underline flex items-center gap-1">
                <span>Request Telemetry Demo</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BentoGridWhyUs;
