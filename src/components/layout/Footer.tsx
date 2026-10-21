import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Sun, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-moss-ink text-mist-grey pt-16 pb-12 border-t border-moss-ink/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Value Proposition Banner */}
        <div className="bg-moss-ink/90 rounded-[36px] p-8 sm:p-10 mb-14 border border-mist-grey/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-pistachio text-[11px] font-semibold uppercase tracking-wider">
              <Sun size={13} className="text-pistachio" />
              <span>SOLAR ENERGY • BUILT ON EXPERIENCE</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-fog tracking-tight">
              Ready to Explore Solar Solutions for Your Property?
            </h3>
            <p className="text-xs sm:text-sm text-mist-grey max-w-xl leading-relaxed">
              From homes to industries, PC Agro helps customers explore dependable solar configurations designed around real site conditions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider rounded-full transition-colors shadow-soft"
            >
              <span>Solar Calculator</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-fog text-xs font-semibold uppercase tracking-wider rounded-full transition-colors border border-white/20"
            >
              <span>Request a Quote</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-mist-grey/20">
          
          {/* Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5 space-y-4 pr-6">
            <Link to="/" className="inline-block">
              <Logo className="h-10" variant="light" />
            </Link>
            
            <p className="text-sm font-medium text-fog">
              Solar Products & Solutions for Homes, Businesses and Industry.
            </p>

            <p className="text-xs text-mist-grey leading-relaxed max-w-sm">
              Building on a trading legacy established in 1978 and dedicated to solar energy since 2015–16. Practical guidance, verified components, and dependable project support.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-mist-grey">
              <span className="flex items-center gap-1.5 text-pistachio">
                <ShieldCheck size={16} />
                Est. 1978 Heritage
              </span>
              <span>•</span>
              <span>Solar Since 2015–16</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-fog mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-pistachio transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-pistachio transition-colors">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link to="/products-list" className="hover:text-pistachio transition-colors">
                  Products & Components
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-pistachio transition-colors">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-pistachio transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pistachio transition-colors">
                  About & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-fog mb-4">
              POORAN CHAND AGRO LLP
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3 text-mist-grey">
                <Phone size={15} className="text-pistachio flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-fog/60 block">Direct Lines</span>
                  <a href="tel:+918077429207" className="text-fog font-medium hover:text-pistachio transition-colors block">+91-8077429207</a>
                  <a href="tel:+919819982899" className="text-fog font-medium hover:text-pistachio transition-colors block">+91-9819982899</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-mist-grey">
                <Mail size={15} className="text-pistachio flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-fog/60 block">Official Enquiries</span>
                  <a href="mailto:sales@pcagro.in" className="text-fog font-medium hover:text-pistachio transition-colors">sales@pcagro.in</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-mist-grey">
                <MapPin size={15} className="text-pistachio flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-fog/60 block">Corporate Office</span>
                  <span className="text-fog font-medium">Office FF-186, Gaur City Centre, Greater Noida / Noida, UP</span>
                  <span className="text-[10px] text-mist-grey block mt-0.5">Regd Office: Agra • Branch: Chandigarh</span>
                </div>
              </li>
            </ul>

            <div className="pt-2 text-[10px] text-mist-grey/80 border-t border-mist-grey/10">
              <span className="text-pistachio font-semibold">Sister Concerns:</span> Sumitra Clean Tech Pvt Ltd • Arna Energies Pvt Ltd
            </div>
          </div>

        </div>

        {/* Bottom Bar (Exact Copy) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mist-grey">
          <p>© PC Agro. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-pistachio transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-pistachio transition-colors">
              Support & Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
