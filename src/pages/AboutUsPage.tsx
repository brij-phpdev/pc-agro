import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Link } from 'react-router-dom';
import { 
  Sun, CheckCircle2, ArrowUpRight, History, ShieldCheck, 
  FileText, Wrench, Building, Award, Sparkles, Compass, 
  Target, HeartHandshake, Layers, Factory, MapPin 
} from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'About Us' }
  ];

  const sisterConcerns = [
    {
      name: 'Pooran Chand Agro LLP',
      role: 'Principal Operating Parent Entity',
      locations: 'Noida (HQ) • Agra (Regd) • Chandigarh (Branch)',
      description: 'The core commercial vehicle for integrated solar EPC, project coordination, and industrial clean power distribution.',
      badge: 'Main Brand'
    },
    {
      name: 'Solar Panda®',
      role: 'Consumer & Retail Solar Division',
      locations: 'Pan-India Active Network',
      description: 'Dedicated consumer and distributed rooftop solar division operating under the brand motto "Service is our strength".',
      badge: 'Brand Division'
    },
    {
      name: 'Sumitra Clean Tech Pvt Ltd',
      role: 'Clean Energy & EPC Engineering',
      locations: 'Agra / Noida',
      description: 'Specialized sister company focusing on advanced clean technology innovations, engineering procurement, and sustainable systems.',
      badge: 'Sister Concern'
    },
    {
      name: 'Arna Energies Pvt Ltd',
      role: 'Renewable Power Asset Development',
      locations: 'Agra, Uttar Pradesh',
      description: 'Strategic sister company engaged in utility-scale renewable power development and solar energy asset management.',
      badge: 'Sister Concern'
    }
  ];

  const historicalBrands = [
    {
      brand: 'Kehua Tech',
      role: 'Importer & National Distributor (India & Nepal)',
      detail: 'On-Grid Inverters & Energy Storage Systems. Kehua is a group company of renowned Lenovo Computers and a global leader in power electronics and UPS.'
    },
    {
      brand: 'Chetak & Olympic',
      role: 'Generator Manufacturing Unit',
      detail: 'Established at Foundry Nagar, Agra, producing heavy-duty diesel generator systems for industrial and agricultural power backup.'
    },
    {
      brand: 'Field Marshall',
      role: 'Authorized Dealers (Est. 1978)',
      detail: 'The genesis of PC Agro’s trading legacy, supplying robust diesel engines across agricultural heartlands.'
    },
    {
      brand: 'Reliance Pipes & Shakti Pumps',
      role: 'Leading Regional Distributors',
      detail: 'Primary distribution partner for Western UP, serving water infrastructure, agricultural tubewells, and industrial pumping.'
    }
  ];

  const coreValues = [
    { title: 'Service', desc: '"Service is our strength." Dedicated lifecycle support for the entire 25+ year plant lifespan.' },
    { title: 'Sustainability', desc: 'Accelerating the adoption of zero-emission solar power for industries and communities.' },
    { title: 'Transparency', desc: 'Clear component datasheets, genuine Tier-1 certifications, and zero exaggerated yield claims.' },
    { title: 'Perseverance', desc: 'Overcoming intricate site constraints, structural limitations, and complex grid synchronization.' },
    { title: 'Persistence', desc: 'Consistent engineering precision and prompt customer care at every stage of project execution.' }
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="flex justify-center">
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Sun size={14} className="text-moss-green" />
            <span>OUR STORY & HERITAGE</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-moss-ink tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Rooted in Experience.  
            <br />
            <span className="text-moss-green">Focused on Solar.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-moss-ink/80 max-w-3xl mx-auto leading-relaxed pt-2">
            PC Agro (Pooran Chand Agro LLP) builds on a rich engineering and trading heritage dating back to 1978. Since entering the solar sector around 2015–16, we have spearheaded dependable solar EPC, distributed rooftop installations, and Open Access energy solutions across India.
          </p>

          {/* Certifications and Key Highlights Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fog border border-mist-grey text-xs font-semibold text-moss-ink">
              <Award size={14} className="text-moss-green" />
              ISO 9001:14001 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fog border border-mist-grey text-xs font-semibold text-moss-ink">
              <History size={14} className="text-moss-green" />
              50+ Years Founder Experience
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fog border border-mist-grey text-xs font-semibold text-moss-ink">
              <Building size={14} className="text-moss-green" />
              Corporate HQ: Gaur City Centre, Noida
            </span>
          </div>
        </div>

        {/* Floating Overlapping Rounded Image Banner */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16">
          <div className="aspect-[16/9] sm:aspect-[21/9] rounded-[40px] overflow-hidden border border-mist-grey shadow-md relative group">
            <img
              src="/images/hero-solar-2.jpg"
              alt="PC Agro Solar Energy Heritage"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/hero-solar-1.jpg';
              }}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/70 via-transparent to-transparent pointer-events-none" />
            
            {/* Floating badge inside image */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-moss-ink/90 backdrop-blur-md text-fog px-5 py-3 rounded-2xl border border-mist-grey/30 shadow-xl flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-moss-green/40 border border-moss-green flex items-center justify-center text-pistachio">
                <History size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">Group Heritage</span>
                <span className="text-sm font-bold text-fog">Est. 1978 • Solar Since 2015–16</span>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md text-moss-ink px-4 py-2.5 rounded-xl border border-mist-grey/50 shadow-lg text-xs font-bold">
              <Sparkles size={15} className="text-moss-green" />
              <span>Service is our strength</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION, MISSION & VALUES (From Profile Page 4) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-mist-grey text-moss-green text-xs font-semibold uppercase tracking-wider">
            <Target size={14} />
            <span>PURPOSE & PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
            Our Vision, Mission & Values
          </h2>
          <p className="text-base text-moss-ink/80 leading-relaxed">
            Committed to high performance standards, ethical execution, and transformative solar power across India.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-[36px] bg-moss-ink text-fog border border-mist-grey/30 shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-moss-green/30 border border-moss-green/50 flex items-center justify-center text-pistachio mb-6">
              <Compass size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-pistachio block mb-2">OUR VISION</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-fog leading-snug">
              "To Be The Company Of Choice For A Transforming Bharat."
            </h3>
            <p className="text-sm text-fog/80 mt-4 leading-relaxed">
              Empowering homes, agricultural cold chains, and heavy manufacturing with reliable, homegrown renewable energy that fuels India’s industrial leap.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-[36px] bg-white border border-mist-grey/80 shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-pistachio/50 border border-pistachio flex items-center justify-center text-moss-ink mb-6">
              <Target size={24} className="text-moss-green" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-moss-green block mb-2">OUR MISSION</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-moss-ink leading-snug">
              "Committed To Provide Innovative, Sustainable and Customized Renewable Solutions."
            </h3>
            <p className="text-sm text-moss-ink/80 mt-4 leading-relaxed">
              Delivering precision engineering, Tier-1 solar modules, and intelligent power electronics designed around actual site conditions and long-term client goals.
            </p>
          </div>

        </div>

        {/* 5 Core Values */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-white border border-mist-grey/70 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <HeartHandshake size={22} className="text-moss-green" />
            <h4 className="text-xl font-bold text-moss-ink">Core Organizational Values</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-fog border border-mist-grey/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-moss-green block">
                  0{idx + 1}. {val.title}
                </span>
                <p className="text-xs text-moss-ink/80 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORPORATE ECOSYSTEM & SISTER CONCERNS (User Requested Bifurcation) */}
      <section className="py-20 bg-white border-y border-mist-grey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fog border border-mist-grey text-moss-green text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers size={14} />
              <span>GROUP COMPANIES & BRANDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moss-ink tracking-tight">
              Our Corporate Ecosystem & Sister Concerns
            </h2>
            <p className="text-base sm:text-lg text-moss-ink/80 mt-4 leading-relaxed">
              While <strong>PC Agro (Pooran Chand Agro LLP)</strong> stands as our primary brand and operating umbrella, our broader corporate footprint encompasses specialized sister concerns and brand divisions created to serve distinct sectors of the energy transition.
            </p>
          </div>

          {/* Sister Concerns & Operating Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sisterConcerns.map((entity, idx) => (
              <div key={idx} className="p-8 rounded-[32px] bg-fog border border-mist-grey/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-moss-green text-fog">
                    {entity.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-moss-ink/70">
                    <MapPin size={13} className="text-moss-green" />
                    <span>{entity.locations}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-moss-ink">{entity.name}</h3>
                  <p className="text-xs font-semibold text-moss-green uppercase tracking-wider mt-1">{entity.role}</p>
                </div>

                <p className="text-sm text-moss-ink/80 leading-relaxed border-t border-mist-grey/60 pt-3">
                  {entity.description}
                </p>
              </div>
            ))}
          </div>

          {/* Historical Alliances & Distribution Tie-ups */}
          <div className="p-8 sm:p-10 rounded-[36px] bg-moss-ink text-fog border border-mist-grey/20 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-pistachio block mb-1">
                MANUFACTURING & IMPORT ALLIANCES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-fog">
                Industrial Partnerships & Legacy Brands
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {historicalBrands.map((brand, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-base font-bold text-pistachio">{brand.brand}</div>
                  <div className="text-xs font-semibold text-fog/90">{brand.role}</div>
                  <p className="text-[11px] text-fog/70 leading-relaxed pt-1">
                    {brand.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR JOURNEY SECTION (Exact Milestones from Profile Page 3) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky Intro) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-mist-grey text-moss-green text-xs font-semibold uppercase tracking-wider">
              <span>OUR JOURNEY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight leading-tight">
              A 50-Year Business Journey of Continuous Evolution.
            </h2>

            <p className="text-base text-moss-ink/80 leading-relaxed">
              From diesel engines and generator manufacturing in Western UP to nationwide solar distribution and multi-megawatt EPC, PC Agro's journey mirrors the technological progress of Indian industry.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-xs font-semibold uppercase tracking-wider transition-colors shadow-soft"
              >
                <span>Talk to Our Leadership</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Timeline Milestones (Page 3) */}
          <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-6">
            
            {/* Milestone 1: 1978 */}
            <div className="relative pl-8 sm:pl-10 border-l-2 border-moss-green/40 pb-8 last:pb-0">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-moss-ink text-pistachio flex items-center justify-center font-bold text-xs ring-4 ring-fog">
                01
              </div>
              <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-moss-green">
                  1978 — FOUNDATIONS IN POWER
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-moss-ink">
                  Field Marshall Diesel Engines Dealership
                </h3>
                <p className="text-sm text-moss-ink/80 leading-relaxed">
                  Established in 1978 as authorized dealers of renowned Field Marshall diesel engines, building deep roots in agricultural and industrial power machinery across Northern India.
                </p>
              </div>
            </div>

            {/* Milestone 2: 1980s-90s */}
            <div className="relative pl-8 sm:pl-10 border-l-2 border-moss-green/40 pb-8 last:pb-0">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-moss-ink text-pistachio flex items-center justify-center font-bold text-xs ring-4 ring-fog">
                02
              </div>
              <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-moss-green">
                  1980s–90s — HEAVY GENERATOR MANUFACTURING
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-moss-ink">
                  Foundry Nagar Generator Unit (Chetak & Olympic)
                </h3>
                <p className="text-sm text-moss-ink/80 leading-relaxed">
                  Commissioned a dedicated generator manufacturing facility at Foundry Nagar, Agra, engineering diesel gensets under the trusted brand names of <strong>Chetak</strong> and <strong>Olympic</strong>.
                </p>
              </div>
            </div>

            {/* Milestone 3: 2000s */}
            <div className="relative pl-8 sm:pl-10 border-l-2 border-moss-green/40 pb-8 last:pb-0">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-moss-ink text-pistachio flex items-center justify-center font-bold text-xs ring-4 ring-fog">
                03
              </div>
              <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-moss-green">
                  2000s — REGIONAL INFRASTRUCTURE DISTRIBUTION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-moss-ink">
                  Distributors for Reliance Pipes & Shakti Pumps
                </h3>
                <p className="text-sm text-moss-ink/80 leading-relaxed">
                  Served as primary distributors for Reliance Pipes and Shakti Pumps across Western UP, powering tubewell, agricultural irrigation, and municipal water handling.
                </p>
              </div>
            </div>

            {/* Milestone 4: 2015-16 */}
            <div className="relative pl-8 sm:pl-10 border-l-2 border-moss-green/40 pb-8 last:pb-0">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-moss-ink text-pistachio flex items-center justify-center font-bold text-xs ring-4 ring-fog">
                04
              </div>
              <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-moss-green">
                  2015–16 — STRATEGIC SOLAR ENTRY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-moss-ink">
                  Solar Sector Entry & Kehua Tech Import Alliances
                </h3>
                <p className="text-sm text-moss-ink/80 leading-relaxed">
                  Entered solar energy with high-voltage capabilities. Appointed Importer and Distributor of <strong>Kehua Tech On-Grid Inverters</strong> (Lenovo group company) across India and Nepal.
                </p>
              </div>
            </div>

            {/* Milestone 5: Today */}
            <div className="relative pl-8 sm:pl-10 border-l-2 border-moss-green/40 pb-8 last:pb-0">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-moss-ink text-pistachio flex items-center justify-center font-bold text-xs ring-4 ring-fog">
                05
              </div>
              <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-moss-green">
                  TODAY & BEYOND
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-moss-ink">
                  Pan-India Solar EPC, Cold Chain & Open Access (4.6 MWp+)
                </h3>
                <p className="text-sm text-moss-ink/80 leading-relaxed">
                  Executing landmark solar plants including the 4.6 MWp installation for Mahesh Edible Oil, specialized solar cold storage across Punjab & MP, and Open Access power wheeling for conglomerates like Ultratech Cement and Rimjhim Ispat.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. QUALITY & SUPPORT SECTION */}
      <section className="py-20 bg-white border-t border-mist-grey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-[40px] bg-moss-ink text-fog space-y-8 border border-mist-grey/20">
            
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-pistachio block">
                COMPREHENSIVE ASSISTANCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fog tracking-tight">
                Engineering Support Beyond Product Supply.
              </h2>
              <p className="text-base text-fog/80 leading-relaxed">
                We assist industrial, commercial, and residential clients with site feasibility studies, Net Metering approvals, Open Access wheeling liaison, and continuous 25-year O&M support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
                <FileText size={22} className="text-pistachio" />
                <h4 className="text-base font-bold text-fog">Product Enquiries</h4>
                <p className="text-xs text-fog/70 leading-relaxed">
                  Fast guidance on equipment availability, module wattage ratings, and system configurations.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
                <FileText size={22} className="text-pistachio" />
                <h4 className="text-base font-bold text-fog">Technical Documentation</h4>
                <p className="text-xs text-fog/70 leading-relaxed">
                  Access to equipment datasheets, single-line diagrams, and testing standard certifications.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
                <ShieldCheck size={22} className="text-pistachio" />
                <h4 className="text-base font-bold text-fog">Warranty Support</h4>
                <p className="text-xs text-fog/70 leading-relaxed">
                  Transparent manufacturer warranty support for Tier-1 panels, inverters, and battery banks.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
                <Wrench size={22} className="text-pistachio" />
                <h4 className="text-base font-bold text-fog">Project Coordination</h4>
                <p className="text-xs text-fog/70 leading-relaxed">
                  Assistance with timeline alignment, site feasibility, DISCOM liaison, and reliable dispatch.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-fog/70">
                Have an upcoming project or need technical consultation?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
              >
                <span>Connect with Our Leadership Team</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
