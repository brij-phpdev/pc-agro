import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Sun, ArrowUpRight, Zap, Leaf, IndianRupee, Home, Building2, Factory } from 'lucide-react';

export const SolarCalculatorSection: React.FC = () => {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial' | 'industrial'>('residential');
  const [monthlyBill, setMonthlyBill] = useState<number>(8000);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const monthlyBillInputId = useId();

  // Electricity tariff estimates
  const tariffRates = {
    residential: currency === 'INR' ? 8.0 : 0.12,
    commercial: currency === 'INR' ? 11.0 : 0.16,
    industrial: currency === 'INR' ? 9.5 : 0.14
  };

  const rate = tariffRates[propertyType];
  const monthlyUnitsConsumed = Math.round(monthlyBill / rate);
  // Average daily generation per kWp is ~4.2 kWh (units)
  const systemSizeKw = Math.max(1, Math.round((monthlyUnitsConsumed / (30 * 4.2)) * 10) / 10);
  const estimatedMonthlyGenKwh = Math.round(systemSizeKw * 4.2 * 30);
  const estimatedAnnualSavings = Math.round(estimatedMonthlyGenKwh * 12 * rate * 0.9); // 90% offset factor
  const roofAreaSqFt = Math.round(systemSizeKw * 90); // ~90 sq ft per kW with high-efficiency modules
  const co2AvoidedTons = Math.round((estimatedMonthlyGenKwh * 12 * 0.82) / 1000 * 10) / 10;

  return (
    <section id="calculator" className="py-24 bg-white text-moss-ink border-b border-mist-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Exact Copy) */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Calculator size={14} className="text-moss-green" />
            <span>EXPLORE YOUR SOLAR POTENTIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moss-ink tracking-tight leading-tight">
            What Could Solar Mean for You?
          </h2>
          <p className="text-base text-moss-ink/80 leading-relaxed">
            Discover an initial estimate of your solar requirements, potential generation and electricity savings using your basic energy details.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-[36px] bg-fog border border-mist-grey/70 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-base font-bold text-moss-ink uppercase tracking-wider mb-4">
                1. Select Property Type
              </h3>
              
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPropertyType('residential')}
                  className={`p-3.5 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-2 transition-all ${
                    propertyType === 'residential'
                      ? 'bg-moss-ink text-fog border-moss-ink shadow-sm'
                      : 'bg-white text-moss-ink border-mist-grey hover:border-moss-green'
                  }`}
                >
                  <Home size={18} />
                  <span>Residential</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType('commercial')}
                  className={`p-3.5 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-2 transition-all ${
                    propertyType === 'commercial'
                      ? 'bg-moss-ink text-fog border-moss-ink shadow-sm'
                      : 'bg-white text-moss-ink border-mist-grey hover:border-moss-green'
                  }`}
                >
                  <Building2 size={18} />
                  <span>Commercial</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType('industrial')}
                  className={`p-3.5 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-2 transition-all ${
                    propertyType === 'industrial'
                      ? 'bg-moss-ink text-fog border-moss-ink shadow-sm'
                      : 'bg-white text-moss-ink border-mist-grey hover:border-moss-green'
                  }`}
                >
                  <Factory size={18} />
                  <span>Industrial</span>
                </button>
              </div>

              {/* Slider: Monthly Bill */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={monthlyBillInputId} className="text-xs font-bold uppercase tracking-wider text-moss-ink">
                    2. Monthly Electricity Bill
                  </label>
                  <span className="text-xl font-extrabold text-moss-green">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>

                <input
                  id={monthlyBillInputId}
                  type="range"
                  min="2000"
                  max="150000"
                  step="1000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-mist-grey/50 rounded-lg appearance-none cursor-pointer accent-moss-green"
                />

                <div className="flex items-center justify-between text-[11px] text-moss-ink/60 font-mono">
                  <span>₹2,000 / mo</span>
                  <span>₹1,50,000 / mo</span>
                </div>
              </div>

              {/* Consumption Estimate */}
              <div className="mt-6 p-4 rounded-2xl bg-white border border-mist-grey/60 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-moss-ink/70">Estimated Monthly Units:</span>
                  <span className="font-bold text-moss-ink font-mono">{monthlyUnitsConsumed} kWh</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-moss-ink/70">Assumed Grid Tariff:</span>
                  <span className="font-bold text-moss-ink font-mono">₹{rate.toFixed(1)} / unit</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/calculator"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white hover:bg-moss-ink hover:text-fog text-moss-ink font-semibold text-xs border border-mist-grey transition-colors"
              >
                <span>Calculate Solar Potential</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Results Column (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-[36px] bg-moss-ink text-fog border border-mist-grey/20 shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-mist-grey/20 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-pistachio">
                  RECOMMENDED SOLAR SYSTEM
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-fog border border-white/10 capitalize">
                  {propertyType} Application
                </span>
              </div>

              {/* Main Headline Metric */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-fog/60 block">
                    Recommended Capacity
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-fog mt-1">
                    {systemSizeKw} <span className="text-2xl font-bold text-pistachio">kW</span>
                  </div>
                  <span className="text-[11px] text-fog/70 mt-1 block">
                    Ideal to offset ~90% of electricity bill
                  </span>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-fog/60 block">
                    Estimated Annual Savings
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-pistachio mt-1">
                    ₹{estimatedAnnualSavings.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[11px] text-fog/70 mt-1 block">
                    ~{Math.round(estimatedMonthlyGenKwh * 12).toLocaleString()} kWh generated / year
                  </span>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-fog/70 mb-1">
                    <Zap size={13} className="text-pistachio" />
                    <span>Monthly Output</span>
                  </div>
                  <span className="text-lg font-bold text-fog block">
                    ~{estimatedMonthlyGenKwh} kWh
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-fog/70 mb-1">
                    <Sun size={13} className="text-pistachio" />
                    <span>Roof Space</span>
                  </div>
                  <span className="text-lg font-bold text-fog block">
                    ~{roofAreaSqFt} sq. ft
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-xs text-fog/70 mb-1">
                    <Leaf size={13} className="text-pistachio" />
                    <span>CO₂ Avoided</span>
                  </div>
                  <span className="text-lg font-bold text-fog block">
                    {co2AvoidedTons} Tons/yr
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions & Exact Disclaimer */}
            <div className="pt-6 border-t border-mist-grey/20 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link
                  to={`/contact?capacity=${systemSizeKw}&property=${propertyType}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-all shadow-soft group"
                >
                  <span>Request a Quote ({systemSizeKw} kW)</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  to="/solutions"
                  className="text-xs text-fog/80 hover:text-pistachio transition-colors text-center sm:text-right"
                >
                  Explore Solar Solutions →
                </Link>
              </div>

              {/* Exact user disclaimer */}
              <p className="text-[11px] text-fog/60 leading-relaxed font-light">
                <strong className="text-fog/80">Disclaimer:</strong> Estimates are indicative only. Actual results depend on location, system design, tariffs, roof conditions and applicable regulations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SolarCalculatorSection;
