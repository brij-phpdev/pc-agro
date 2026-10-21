import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { solarProductsData } from '../data/solarProductsData';
import { technologyPartnersData, sourcingStandards } from '../data/partnersData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Sun, Search, ArrowUpRight, ArrowRight, Zap, Battery, Wrench, ShieldCheck, Check, Award, Star, CheckCircle2 } from 'lucide-react';

export const ProductsListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get('category') || '';
  const searchParam = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState<string>(categoryParam);
  const [searchQuery, setSearchQuery] = useState<string>(searchParam);

  const categories = [
    { id: '', label: 'All Products', icon: Sun },
    { id: 'modules', label: 'Solar Modules', icon: Sun },
    { id: 'inverters', label: 'Solar Inverters', icon: Zap },
    { id: 'batteries', label: 'Batteries & Storage', icon: Battery },
    { id: 'accessories', label: 'Solar Kits & Accessories', icon: Wrench },
  ];

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    const next = new URLSearchParams(searchParams);
    if (catId) {
      next.set('category', catId);
    } else {
      next.delete('category');
    }
    setSearchParams(next);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    const next = new URLSearchParams(searchParams);
    if (val.trim()) {
      next.set('search', val.trim());
    } else {
      next.delete('search');
    }
    setSearchParams(next);
  };

  // Section 03 Category Showcases
  const categoryHighlights = [
    {
      id: 'modules',
      title: 'Solar Modules',
      headline: 'Capture More of the Sun.',
      description: 'Explore solar modules for different capacities and installation requirements. Product selection depends on specifications, available space and system design.',
      cta: 'Enquire About Modules',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'inverters',
      title: 'Solar Inverters',
      headline: 'Converting Solar Power into Usable Energy.',
      description: 'Explore inverter options for on-grid, off-grid and hybrid systems, subject to technical suitability and availability.',
      cta: 'Explore Inverters',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'batteries',
      title: 'Batteries & Storage',
      headline: 'Power When It Matters.',
      description: 'Discover compatible battery solutions for backup and energy storage requirements.',
      cta: 'Enquire About Batteries',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'accessories',
      title: 'Solar Kits & Accessories',
      headline: 'Every Component. Working Together.',
      description: 'Explore solar system components, including mounting structures, cables, electrical protection and other installation accessories.',
      cta: 'Enquire About System Components',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Filtered list
  const filteredProducts = useMemo(() => {
    return solarProductsData.filter(prod => {
      if (activeCategory && prod.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(q);
        const matchesSku = prod.sku.toLowerCase().includes(q);
        const matchesDesc = prod.shortDescription.toLowerCase().includes(q);
        const matchesCap = prod.capacityOrPower.toLowerCase().includes(q);
        if (!matchesName && !matchesSku && !matchesDesc && !matchesCap) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const breadcrumbs = [
    { label: 'Products' }
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Sun size={14} className="text-moss-green" />
            <span>SOLAR TECHNOLOGY & COMPONENTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            The Technology Behind Better Energy Choices.
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            Explore solar products and system components for residential, commercial and industrial applications.
          </p>

          <div className="pt-4">
            <Link
              to="/contact?requirement=General Product Enquiry"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-sm font-semibold tracking-wider transition-colors shadow-soft"
            >
              <span>Enquire About Products</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FOUR CORE CATEGORIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categoryHighlights.map((cat) => (
            <div
              key={cat.id}
              className="p-8 rounded-[36px] bg-white border border-mist-grey/80 shadow-sm flex flex-col justify-between hover:border-moss-green/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fog border border-mist-grey text-moss-green text-xs font-semibold uppercase tracking-wider">
                  <span>{cat.title}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-moss-ink tracking-tight">
                  {cat.headline}
                </h3>
                <p className="text-sm text-moss-ink/80 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-mist-grey/40 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleCategorySelect(cat.id)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-moss-green hover:text-moss-ink transition-colors"
                >
                  <span>Filter by {cat.title}</span>
                  <ArrowRight size={14} />
                </button>
                <Link
                  to={`/contact?requirement=${encodeURIComponent(cat.title)}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-fog hover:bg-pistachio/50 text-moss-ink text-xs font-semibold border border-mist-grey transition-colors"
                >
                  <span>{cat.cta}</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRODUCT CATALOGUE & SEARCH */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Filter & Search Bar */}
        <div className="p-4 rounded-3xl bg-white border border-mist-grey shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-moss-ink text-fog shadow-sm font-bold'
                      : 'bg-fog text-moss-ink/80 hover:bg-pistachio/40 border border-mist-grey'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-pistachio' : 'text-moss-green'} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by product name, capacity..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-9 pr-4 py-2 bg-fog border border-mist-grey rounded-full text-xs text-moss-ink focus:outline-none focus:ring-1 focus:ring-moss-green placeholder:text-moss-ink/50"
            />
            <Search size={14} className="absolute left-3.5 top-3 text-moss-ink/50" />
          </div>

        </div>

        {/* Products Grid */}
        <div className="pt-10">
          <div className="flex items-center justify-between mb-6 text-xs text-moss-ink/70">
            <span>Showing <strong>{filteredProducts.length}</strong> certified equipment items</span>
            <span className="text-moss-green font-semibold">• Subject to availability</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(prod => (
              <div
                key={prod.id}
                className="rounded-[36px] bg-white border border-mist-grey/70 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden relative bg-fog p-6 flex items-center justify-center border-b border-mist-grey/50">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/hero-solar-1.jpg';
                      }}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {prod.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-moss-ink text-fog backdrop-blur-md border border-moss-ink">
                          {prod.badge}
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white text-moss-ink border border-mist-grey">
                        {prod.warrantyYears} Yrs Warranty
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green">
                        {prod.categoryLabel}
                      </span>
                      <span className="font-mono text-[11px] text-moss-ink/60">
                        {prod.sku}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-moss-ink group-hover:text-moss-green transition-colors leading-snug">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-moss-ink/70 leading-relaxed line-clamp-2">
                      {prod.shortDescription}
                    </p>

                    {/* Key Specs Pills */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-fog border border-mist-grey/60 text-moss-ink text-[11px] font-semibold">
                        {prod.capacityOrPower}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-fog border border-mist-grey/60 text-moss-ink text-[11px] font-semibold">
                        {prod.efficiencyOrRating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Link & Action */}
                <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                  <Link
                    to={`/product/${prod.slug}`}
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full bg-moss-ink group-hover:bg-moss-green text-fog text-xs font-semibold tracking-wider transition-colors shadow-soft"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowRight size={13} className="text-pistachio group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to={`/contact?requirement=Inquiry for ${encodeURIComponent(prod.name)} (${prod.sku})`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-fog hover:bg-mist-grey/30 text-moss-ink text-xs font-medium border border-mist-grey transition-colors"
                  >
                    <span>Enquire Availability & Specs</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-mist-grey">
              <Sun size={36} className="text-moss-green mx-auto mb-3" />
              <h3 className="text-lg font-bold text-moss-ink">No solar equipment found</h3>
              <p className="text-xs text-moss-ink/70 mt-1">Try clearing your search query or switching categories.</p>
              <button
                type="button"
                onClick={() => { setActiveCategory(''); setSearchQuery(''); }}
                className="mt-4 px-5 py-2 rounded-full bg-moss-green text-fog text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>

      </div>

      {/* 4. SOURCE OF PRODUCTS & TECHNOLOGY PARTNERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="p-8 sm:p-12 rounded-[40px] bg-white border border-mist-grey shadow-sm space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-mist-grey/60">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fog border border-mist-grey text-moss-green text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>AUTHORIZED SOURCING & OEM ALLIANCES</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
                Source of Products & Technology Partners
              </h3>
              <p className="text-sm text-moss-ink/80 leading-relaxed">
                We supply genuine, certified equipment directly from global and Indian Tier-1 manufacturers. Zero unauthorized grey-market products, full OEM warranties, and verified bankability.
              </p>
            </div>

            <div className="shrink-0">
              <span className="text-xs font-bold px-4 py-2 rounded-full bg-pistachio/50 text-moss-ink border border-pistachio">
                100% ALMM & BIS Compliant
              </span>
            </div>
          </div>

          {/* OEM Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyPartnersData.map((partner) => (
              <div
                key={partner.id}
                className="p-6 rounded-3xl bg-fog border border-mist-grey/80 flex flex-col justify-between space-y-4 hover:border-moss-green/40 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-mist-grey text-moss-green">
                      {partner.category}
                    </span>
                    {partner.badge && (
                      <span className="text-[10px] font-bold text-moss-ink/70">
                        {partner.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-moss-ink">
                    {partner.name}
                  </h4>
                  <p className="text-xs font-semibold text-moss-green">
                    {partner.relationship}
                  </p>
                  <p className="text-xs text-moss-ink/75 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-mist-grey/60 flex flex-wrap gap-1.5">
                  {partner.certifications.map((cert, cIdx) => (
                    <span key={cIdx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-white text-moss-ink/80 border border-mist-grey/50">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Standards 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-mist-grey/60">
            {sourcingStandards.map((std, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-moss-green font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 size={15} />
                  <span>{std.title}</span>
                </div>
                <p className="text-xs text-moss-ink/70 leading-relaxed pl-5">
                  {std.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PRODUCT ENQUIRY CTA SECTION (Exact Copy) */}
      <section className="mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-[48px] bg-moss-ink text-fog text-center space-y-5 border border-mist-grey/20">
          <span className="text-xs font-bold uppercase tracking-widest text-pistachio block">
            NEED EQUIPMENT ASSISTANCE?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fog tracking-tight">
            Looking for a Specific Solar Product?
          </h2>
          <p className="text-base text-fog/80 max-w-2xl mx-auto leading-relaxed">
            Tell us your required capacity, application and location. Our team can help you check suitable product options and availability.
          </p>
          <div className="pt-4">
            <Link
              to="/contact?requirement=Specific Solar Product Assistance"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
            >
              <span>Request Product Information</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductsListPage;
