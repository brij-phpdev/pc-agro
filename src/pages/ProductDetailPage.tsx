import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { solarProductsData } from '../data/solarProductsData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import {
  ShieldCheck,
  Share2,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = solarProductsData.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products-list" replace />;
  }

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const relatedProducts = solarProductsData
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const breadcrumbs = [
    { label: 'Products', href: '/products-list' },
    { label: product.categoryLabel, href: `/products-list?category=${product.category}` },
    { label: product.name }
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* Top Breadcrumb Bar */}
      <div className="pt-32 pb-4 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/50 bg-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Main Product Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 bg-white rounded-[40px] p-6 sm:p-10 border border-mist-grey/70 shadow-sm">
          
          {/* Left Column: Image & Gallery (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-fog border border-mist-grey flex items-center justify-center p-8">
              <img
                src={selectedImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/hero-solar-1.jpg';
                }}
                className="w-full h-full object-contain transition-all duration-300"
              />
              
              {product.badge && (
                <span className="absolute top-4 left-4 px-3.5 py-1 bg-moss-ink text-fog text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md border border-moss-ink">
                  {product.badge}
                </span>
              )}

              <span className="absolute bottom-4 right-4 px-3 py-1 bg-white text-moss-ink text-xs font-bold rounded-lg border border-mist-grey shadow-xs">
                {product.warrantyYears} Years Warranty
              </span>
            </div>

            {/* Thumbnail Row */}
            {product.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden bg-fog border-2 p-2 flex-shrink-0 transition-all ${
                      selectedImage === img
                        ? 'border-moss-green shadow-sm scale-105'
                        : 'border-mist-grey hover:border-moss-green/40'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Inquiry (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category & SKU */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-moss-green bg-fog px-3 py-1 rounded-full border border-mist-grey">
                  {product.categoryLabel}
                </span>
                <span className="font-mono text-xs text-moss-ink/60">
                  SKU: {product.sku}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-moss-ink tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Key Capacity & Rating */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="px-3.5 py-1.5 rounded-xl bg-moss-ink text-fog text-xs font-bold">
                  {product.capacityOrPower}
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-pistachio text-moss-ink font-bold text-xs border border-moss-green/30">
                  {product.efficiencyOrRating}
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-fog text-moss-ink/80 text-xs font-semibold border border-mist-grey">
                  {product.warrantyYears} Years Performance Guarantee
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-moss-ink/80 leading-relaxed pt-2">
                {product.description}
              </p>

              {/* Feature Bullets */}
              <div className="space-y-2 pt-2 border-t border-mist-grey/50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-moss-ink">
                  Engineered Features:
                </h4>
                {product.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-moss-ink/80">
                    <CheckCircle2 size={15} className="text-moss-green flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry CTAs */}
            <div className="pt-6 border-t border-mist-grey/50 space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to={`/contact?requirement=Inquiry for ${encodeURIComponent(product.name)} (SKU: ${product.sku})`}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-moss-green hover:bg-moss-ink text-fog font-bold text-xs uppercase tracking-wider transition-all shadow-soft group"
                >
                  <span>Request Availability & Pricing</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={handleShare}
                  className="w-full sm:w-auto p-3.5 rounded-full bg-fog hover:bg-mist-grey/30 border border-mist-grey text-moss-ink transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
                  title="Share product link"
                >
                  <Share2 size={16} />
                  <span className="sm:hidden">Share Product</span>
                  {copiedLink && <span className="text-[10px] text-moss-green font-bold">Link Copied!</span>}
                </button>
              </div>

              <a
                href={`https://wa.me/917252000711?text=Hello%20PC%20Agro%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-moss-ink hover:bg-moss-green text-fog text-xs font-semibold transition-colors"
              >
                <MessageCircle size={15} className="text-pistachio" />
                <span>Talk to Our Team via WhatsApp (+91-7252000711)</span>
              </a>
            </div>

          </div>

        </div>

        {/* Technical Specifications Table */}
        <div className="mt-12 bg-white rounded-[40px] p-6 sm:p-10 border border-mist-grey/70 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-mist-grey/50 pb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-moss-green">
                TECHNICAL DATA SHEET
              </span>
              <h3 className="text-xl font-bold text-moss-ink mt-0.5">
                Technical Specifications & Testing Standards
              </h3>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-mist-grey bg-fog">
                  <th className="py-3 px-4 font-bold text-moss-ink uppercase tracking-wider">Parameter</th>
                  <th className="py-3 px-4 font-bold text-moss-ink uppercase tracking-wider">Verified Value / Rating</th>
                  <th className="py-3 px-4 font-bold text-moss-ink uppercase tracking-wider">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist-grey/40">
                {product.specifications.map((spec, sIdx) => (
                  <tr key={sIdx} className="hover:bg-fog/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-moss-ink/80">{spec.label}</td>
                    <td className="py-3 px-4 font-semibold text-moss-ink font-mono">{spec.value}</td>
                    <td className="py-3 px-4 text-moss-ink/60 capitalize">{spec.category || 'General'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-6">
            <h3 className="text-xl font-bold text-moss-ink">
              Related Equipment & System Components
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(rel => (
                <Link
                  key={rel.id}
                  to={`/product/${rel.slug}`}
                  className="p-6 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm hover:border-moss-green transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-20 h-20 rounded-2xl bg-fog p-2 flex items-center justify-center flex-shrink-0 border border-mist-grey/50">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/hero-solar-1.jpg';
                      }}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-moss-green">{rel.categoryLabel}</span>
                    <h4 className="text-sm font-bold text-moss-ink group-hover:text-moss-green transition-colors line-clamp-1">
                      {rel.name}
                    </h4>
                    <span className="text-xs text-moss-ink/70 font-semibold block mt-1">{rel.capacityOrPower}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default ProductDetailPage;
