import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, Sun, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    propertyType: 'Residential',
    approximateCapacity: '',
    requirement: ''
  });

  // Pre-fill from query params if navigated from calculator, products or solutions
  useEffect(() => {
    const capacityParam = searchParams.get('capacity');
    const propertyParam = searchParams.get('property');
    const requirementParam = searchParams.get('requirement');

    if (capacityParam || propertyParam || requirementParam) {
      setFormData(prev => ({
        ...prev,
        approximateCapacity: capacityParam ? `${capacityParam} kW` : prev.approximateCapacity,
        propertyType: propertyParam
          ? propertyParam.charAt(0).toUpperCase() + propertyParam.slice(1)
          : prev.propertyType,
        requirement: requirementParam || prev.requirement
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const breadcrumbs = [
    { label: 'About & Contact' }
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* 1. HERO SECTION (Exact Copy) */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Sun size={14} className="text-moss-green" />
            <span>LET'S CONNECT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            Let's Talk About Your Solar Requirements.
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            Whether you're considering rooftop solar, a commercial installation or an industrial project, our team is ready to hear about your requirements.
          </p>
        </div>
      </section>

      {/* 2. FORM & CONTACT DETAILS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[40px] p-8 sm:p-12 border border-mist-grey/70 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-pistachio/60 text-moss-ink mx-auto flex items-center justify-center">
                  <CheckCircle2 size={36} className="text-moss-green" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-moss-ink">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-moss-ink/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our team will review your {formData.propertyType.toLowerCase()} requirements and get back to you with guidance shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-3 bg-moss-green text-fog text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-moss-ink transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-moss-ink">
                    Send Us an Enquiry
                  </h3>
                  <p className="text-xs text-moss-ink/70 mt-1">
                    Please provide your contact details and energy requirements below.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-moss-ink mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-fog rounded-2xl border border-mist-grey text-xs text-moss-ink focus:outline-none focus:ring-1 focus:ring-moss-green placeholder:text-moss-ink/40"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-moss-ink mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-fog rounded-2xl border border-mist-grey text-xs text-moss-ink focus:outline-none focus:ring-1 focus:ring-moss-green placeholder:text-moss-ink/40"
                    />
                  </div>

                  {/* City / Project Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-moss-ink mb-1.5">
                      City / Project Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmedabad, Gujarat"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-fog rounded-2xl border border-mist-grey text-xs text-moss-ink focus:outline-none focus:ring-1 focus:ring-moss-green placeholder:text-moss-ink/40"
                    />
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-moss-ink mb-1.5">
                      Property Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 bg-fog rounded-2xl border border-mist-grey text-xs text-moss-ink focus:outline-none focus:ring-1 focus:ring-moss-green"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Institutional">Institutional</option>
                    </select>
                  </div>

                  {/* Approximate System Capacity */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-moss-ink mb-1.5">
                      Approximate System Capacity
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5 kW, 50 kW, 500 kW, or Not Sure"
                      value={formData.approximateCapacity}
                      onChange={e => setFormData({ ...formData, approximateCapacity: e.target.value })}
                      className="w-full px-4 py-3 bg-fog rounded-2xl border border-mist-grey text-xs text-moss-ink focus:outline-none focus:ring-1 focus:ring-moss-green placeholder:text-moss-ink/40"
                    />
                  </div>

                  {/* Your Requirement */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-moss-ink mb-1.5">
                      Your Requirement *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your property, monthly electricity bill, or specific product enquiries..."
                      value={formData.requirement}
                      onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-4 py-3 bg-fog rounded-2xl border border-mist-grey text-xs text-moss-ink focus:outline-none focus:ring-1 focus:ring-moss-green placeholder:text-moss-ink/40 leading-relaxed"
                    />
                  </div>

                  {/* Submit Button (Exact Copy) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-8 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>Send My Enquiry</span>
                    </button>
                  </div>

                </form>
              </div>
            )}
          </div>

          {/* Right Column: Direct Contact & WhatsApp (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp CTA Card (Exact Copy) */}
            <div className="p-8 sm:p-10 rounded-[40px] bg-moss-ink text-fog border border-mist-grey/20 shadow-md space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-pistachio flex items-center justify-center border border-white/10">
                <MessageCircle size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">
                  FAST RESPONSE
                </span>
                <h3 className="text-2xl font-bold text-fog mt-1">
                  Prefer Instant Messaging?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-fog/80 leading-relaxed">
                Connect with our team directly on WhatsApp for quick product availability, technical inquiries, or preliminary project advice.
              </p>
              <div>
                <a
                  href="https://wa.me/918077429207?text=Hello%20PC%20Agro%2C%20I%20would%20like%20to%20discuss%20solar%20requirements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
                >
                  <MessageCircle size={15} />
                  <span>Talk to Our Team</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Details Card */}
            <div className="p-8 sm:p-10 rounded-[40px] bg-white border border-mist-grey/70 shadow-sm space-y-6">
              <h4 className="text-base font-bold text-moss-ink uppercase tracking-wider">
                Pooran Chand Agro LLP
              </h4>

              <div className="space-y-5 text-xs text-moss-ink/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-fog text-moss-green flex items-center justify-center flex-shrink-0 border border-mist-grey/60">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green block">Direct Lines</span>
                    <a href="tel:+918077429207" className="text-sm font-semibold text-moss-ink hover:text-moss-green transition-colors block">+91-8077429207</a>
                    <a href="tel:+919819982899" className="text-sm font-semibold text-moss-ink hover:text-moss-green transition-colors block">+91-9819982899</a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-fog text-moss-green flex items-center justify-center flex-shrink-0 border border-mist-grey/60">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green block">Email</span>
                    <a href="mailto:sales@pcagro.in" className="text-sm font-semibold text-moss-ink hover:text-moss-green transition-colors">sales@pcagro.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-fog text-moss-green flex items-center justify-center flex-shrink-0 border border-mist-grey/60">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green block">Corporate Office</span>
                    <span className="text-sm font-semibold text-moss-ink leading-relaxed block">
                      Office FF-186, Gaur City Centre, Greater Noida / Noida, UP
                    </span>
                    <span className="text-[11px] text-moss-ink/60 block mt-1">
                      Regd Office: Agra • Branch: Chandigarh
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-fog text-moss-green flex items-center justify-center flex-shrink-0 border border-mist-grey/60">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green block">Working Hours</span>
                    <span className="text-sm font-semibold text-moss-ink">Monday – Saturday: 9:30 AM – 6:30 PM</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactPage;
