import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Zap, 
  IndianRupee, 
  Maximize2, 
  TrendingUp, 
  ArrowUpRight, 
  Leaf, 
  Clock, 
  MessageCircle,
  Home,
  Building2,
  Factory
} from 'lucide-react';

type PropertyCategory = 'Residential' | 'Commercial' | 'Industrial';

export const CompactSolarCalculator: React.FC = () => {
  const [propertyType, setPropertyType] = useState<PropertyCategory>('Commercial');
  const [monthlyBill, setMonthlyBill] = useState<number>(35000);
  const [roofArea, setRoofArea] = useState<number>(3000);

  const billInputId = useId();
  const roofInputId = useId();

  // Electricity tariff benchmarks
  const tariffs: Record<PropertyCategory, number> = {
    Residential: 8.0,
    Commercial: 11.5,
    Industrial: 9.5
  };

  const rate = tariffs[propertyType];
  const monthlyUnits = Math.round(monthlyBill / rate);
  
  // ~4.2 kWh daily generation per kWp in North India
  const theoreticalKw = Math.max(1, Math.round((monthlyUnits / (30 * 4.2)) * 10) / 10);
  
  // 1 kW needs ~90 sq ft of shadow-free area with 550W+ TopCon modules
  const maxKwFromRoof = Math.max(1, Math.round((roofArea / 90) * 10) / 10);
  const systemSizeKw = Math.min(theoreticalKw, maxKwFromRoof);

  const annualGenKwh = Math.round(systemSizeKw * 4.2 * 365);
  const annualSavingsInr = Math.round(annualGenKwh * rate * 0.92); // 92% direct offset factor
  const cumulative25YrSavings = Math.round(annualSavingsInr * 25 * 0.88); // account for minor degradation
  
  // Estimated payback period
  const avgCostPerKw = propertyType === 'Residential' ? 58000 : 46000;
  const estimatedCapex = systemSizeKw * avgCostPerKw;
  const paybackYears = Math.max(2.1, Math.round((estimatedCapex / annualSavingsInr) * 10) / 10);
  const co2AvoidedTons = Math.round((annualGenKwh * 0.82) / 1000 * 10) / 10;

  // Format savings for executive presentation
  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const whatsappMessage = encodeURIComponent(
    `Hello PC Agro, I calculated my solar potential: Property: ${propertyType}, Monthly Bill: ₹${monthlyBill}, Roof: ${roofArea} sq ft. Estimated System: ${systemSizeKw} kW. Please share an official technical quotation.`
  );

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-white text-moss-ink border-b border-mist-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
              <Calculator size={13} className="text-moss-green" />
              <span>DYNAMIC ROI & CAPACITY ESTIMATOR</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-moss-ink tracking-tight leading-[1.12]">
              Calculate Your Solar Potential.
              <br />
              <span className="text-moss-green">Instant Real-Time ROI Engine.</span>
            </h2>

            <p className="text-sm sm:text-base text-moss-ink/80 leading-relaxed">
              Adjust your monthly electricity expense and available roof space to compute recommended capacity, projected generation, and 25-year financial savings.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-moss-ink/70 bg-fog px-4 py-2 rounded-full border border-mist-grey self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-moss-green animate-pulse" />
            <span>DISCOM Net-Metering Benchmarks Applied</span>
          </div>
        </div>

        {/* 2-Column High-Conversion Split Card */}
        <div className="rounded-[40px] bg-fog border border-mist-grey/80 shadow-md p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* LEFT COLUMN: 3 Interactive Inputs (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-mist-grey/70 shadow-xs flex flex-col justify-between space-y-8">
              
              {/* Input 1: Property Connection Type */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-moss-ink flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-moss-green/10 text-moss-green flex items-center justify-center text-[10px]">1</span>
                    Connection Type
                  </label>
                  <span className="text-[11px] text-moss-ink/60 font-semibold">Tariff: ₹{rate}/kWh</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'Residential', label: 'Residential', icon: Home },
                    { id: 'Commercial', label: 'Commercial', icon: Building2 },
                    { id: 'Industrial', label: 'Industrial', icon: Factory }
                  ].map((item) => {
                    const ItemIcon = item.icon;
                    const isSelected = propertyType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPropertyType(item.id as PropertyCategory)}
                        className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-moss-ink text-fog border-moss-ink shadow-sm'
                            : 'bg-fog hover:bg-mist-grey/30 border-mist-grey/70 text-moss-ink'
                        }`}
                      >
                        <ItemIcon size={16} className={isSelected ? 'text-pistachio' : 'text-moss-green'} />
                        <span className="text-xs font-bold">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input 2: Monthly Electricity Bill Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={billInputId} className="text-xs font-bold uppercase tracking-wider text-moss-ink flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-moss-green/10 text-moss-green flex items-center justify-center text-[10px]">2</span>
                    Monthly Electricity Bill
                  </label>
                  <span className="text-base font-extrabold text-moss-green font-display">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>

                <input
                  id={billInputId}
                  type="range"
                  min={propertyType === 'Residential' ? 2000 : 10000}
                  max={propertyType === 'Industrial' ? 500000 : 150000}
                  step={propertyType === 'Residential' ? 500 : 2500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-fog rounded-lg appearance-none cursor-pointer accent-moss-green"
                />

                <div className="flex justify-between text-[11px] text-moss-ink/50 font-semibold">
                  <span>{propertyType === 'Residential' ? '₹2K' : '₹10K'} Min</span>
                  <span>Est. Monthly Units: {monthlyUnits.toLocaleString('en-IN')} kWh</span>
                  <span>{propertyType === 'Industrial' ? '₹5 Lakh+' : '₹1.5 Lakh+'}</span>
                </div>
              </div>

              {/* Input 3: Shadow-Free Roof Area Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={roofInputId} className="text-xs font-bold uppercase tracking-wider text-moss-ink flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-moss-green/10 text-moss-green flex items-center justify-center text-[10px]">3</span>
                    Shadow-Free Roof Area
                  </label>
                  <span className="text-base font-extrabold text-moss-ink font-display flex items-center gap-1">
                    <Maximize2 size={14} className="text-moss-green" />
                    {roofArea.toLocaleString('en-IN')} sq. ft.
                  </span>
                </div>

                <input
                  id={roofInputId}
                  type="range"
                  min={150}
                  max={propertyType === 'Industrial' ? 50000 : 10000}
                  step={propertyType === 'Industrial' ? 500 : 100}
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="w-full h-2 bg-fog rounded-lg appearance-none cursor-pointer accent-moss-green"
                />

                <div className="flex justify-between text-[11px] text-moss-ink/50 font-semibold">
                  <span>150 sq ft</span>
                  <span>Roof Ceiling Cap: {maxKwFromRoof} kW</span>
                  <span>{propertyType === 'Industrial' ? '50,000 sq ft+' : '10,000 sq ft'}</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Real-Time Dynamic Readout & One-Click Lead Trigger (6 cols) */}
            <div className="lg:col-span-6 bg-moss-ink text-fog rounded-3xl p-6 sm:p-8 border border-white/10 shadow-md flex flex-col justify-between space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">
                    Calculated Energy Model
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-fog">
                    Projected Financial Yield
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-fog/60 block">Recommended Capacity</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-pistachio font-display">
                    {systemSizeKw} <span className="text-sm font-semibold text-fog">kWp</span>
                  </span>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-fog/60 block flex items-center gap-1">
                    <TrendingUp size={12} className="text-pistachio" />
                    Annual Bill Savings
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-fog font-display block">
                    {formatCurrency(annualSavingsInr)}
                  </span>
                  <span className="text-[10px] text-mist-grey block">Est. 1st Year Net Reduction</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-fog/60 block flex items-center gap-1">
                    <IndianRupee size={12} className="text-pistachio" />
                    25-Year Net Savings
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-pistachio font-display block">
                    {formatCurrency(cumulative25YrSavings)}
                  </span>
                  <span className="text-[10px] text-mist-grey block">Cumulative Guaranteed Life</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-fog/60 block flex items-center gap-1">
                    <Clock size={12} className="text-pistachio" />
                    Estimated Payback
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-fog font-display block">
                    {paybackYears} Years
                  </span>
                  <span className="text-[10px] text-mist-grey block">Then 100% Free Power</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-fog/60 block flex items-center gap-1">
                    <Leaf size={12} className="text-pistachio" />
                    Carbon Offset
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-fog font-display block">
                    {co2AvoidedTons} Tons/Yr
                  </span>
                  <span className="text-[10px] text-mist-grey block">CO₂ Clean Abatement</span>
                </div>
              </div>

              {/* Instant One-Click Pre-Filled Lead Triggers */}
              <div className="space-y-2.5 pt-2">
                <Link
                  to={`/contact?property=${propertyType}&bill=${monthlyBill}&capacity=${systemSizeKw}kW`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-moss-green hover:bg-moss-green-600 text-fog font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-200"
                >
                  <span>Get Official Quotation for {systemSizeKw} kW</span>
                  <ArrowUpRight size={15} />
                </Link>

                <a
                  href={`https://wa.me/917252000711?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-fog font-semibold text-xs border border-white/20 transition-all duration-200"
                >
                  <MessageCircle size={15} className="text-[#25D366]" />
                  <span>Send Estimate to WhatsApp (+91-7252000711)</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CompactSolarCalculator;
