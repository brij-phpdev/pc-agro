import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products-list?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      {/* Floating Header Wrapper - exact match to ledup.pt design */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none px-3 sm:px-8 lg:px-14 ${
          isScrolled ? 'pt-2.5 pb-2' : 'pt-4 sm:pt-7'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 w-full">
          
          {/* 1. Left: Brand Logo */}
          <Link
            to="/"
            className="pointer-events-auto flex items-center gap-2 group focus:outline-none flex-shrink min-w-0"
            aria-label="Puran Chand Agro Home / Dashboard"
            title="Puran Chand Agro — Home / Dashboard"
          >
            <Logo className="h-9 sm:h-10" />
          </Link>

          {/* 2. Center: Translucent Floating Navigation Pill (matches screenshot media_1792409908612_3ac011e2.png) */}
          <nav className="pointer-events-auto hidden lg:flex items-center">
            <div
              className={`flex items-center gap-5 px-6 h-11 rounded-full border shadow-xs transition-all duration-300 ${
                isMegaMenuOpen
                  ? 'bg-white border-mist-grey/50 text-moss-ink'
                  : isScrolled
                  ? 'bg-white/95 backdrop-blur-md border-mist-grey/40 text-moss-ink shadow-soft'
                  : 'bg-white/90 backdrop-blur-md border-white/60 text-moss-ink'
              }`}
            >
              {/* Home / Dashboard */}
              <Link
                to="/"
                className={`text-xs font-medium tracking-wide transition-colors ${
                  location.pathname === '/'
                    ? 'text-moss-green font-bold'
                    : 'text-moss-ink hover:text-moss-green'
                }`}
              >
                Home
              </Link>

              {/* Solar Solutions with MegaMenu trigger & Active Grey Highlight */}
              <div
                className="relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
              >
                <button
                  type="button"
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className={`flex items-center gap-1.5 text-xs font-medium tracking-wide transition-all duration-200 px-3.5 py-1.5 rounded-full ${
                    isMegaMenuOpen || location.pathname.startsWith('/solutions')
                      ? 'bg-fog text-moss-ink font-semibold'
                      : 'text-moss-ink hover:text-moss-green'
                  }`}
                  aria-expanded={isMegaMenuOpen}
                >
                  <span>Solar Solutions</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 text-moss-ink/60 ${
                      isMegaMenuOpen ? 'rotate-180 text-moss-ink' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Products */}
              <Link
                to="/products-list"
                className={`text-xs font-medium tracking-wide transition-colors ${
                  location.pathname.startsWith('/products-list') || location.pathname.startsWith('/product/')
                    ? 'text-moss-green font-semibold'
                    : 'text-moss-ink hover:text-moss-green'
                }`}
              >
                Products
              </Link>

              {/* Projects */}
              <Link
                to="/projects"
                className={`text-xs font-medium tracking-wide transition-colors ${
                  location.pathname === '/projects'
                    ? 'text-moss-green font-semibold'
                    : 'text-moss-ink hover:text-moss-green'
                }`}
              >
                Projects
              </Link>

              {/* About Us */}
              <Link
                to="/about-us"
                className={`text-xs font-medium tracking-wide transition-colors ${
                  location.pathname === '/about-us'
                    ? 'text-moss-green font-semibold'
                    : 'text-moss-ink hover:text-moss-green'
                }`}
              >
                About Us
              </Link>
            </div>
          </nav>

          {/* 3. Right: Request a Quote Pill + Circular Search + WhatsApp Icon + Mobile Hamburger */}
          <div className="pointer-events-auto flex-shrink-0 flex items-center gap-1.5 sm:gap-2.5">
            {/* Request a Quote Button (Desktop & Tablet) */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 h-10 bg-moss-green hover:bg-moss-ink text-fog text-xs font-semibold rounded-full shadow-soft backdrop-blur-md transition-all duration-200 group"
            >
              <span>Request a Quote</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Circular Search Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all shadow-xs backdrop-blur-md ${
                  isSearchOpen
                    ? 'bg-moss-ink text-fog ring-2 ring-moss-green/40'
                    : 'bg-white/95 hover:bg-fog text-moss-ink border border-mist-grey/50'
                }`}
                aria-label="Search equipment"
                title="Search products"
              >
                <Search size={15} />
              </button>

              {/* Animated Inline Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute right-0 top-11 sm:top-12 w-72 sm:w-80 bg-white text-moss-ink rounded-2xl p-3 shadow-2xl border border-mist-grey/50 animate-fadeIn z-50">
                  <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search panels, inverters, kW..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-3 pr-8 py-2 text-xs bg-fog border border-mist-grey/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-moss-green text-moss-ink placeholder:text-moss-ink/50"
                    />
                    <button
                      type="submit"
                      className="absolute right-2.5 text-moss-ink hover:text-moss-green"
                    >
                      <Search size={14} />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* WhatsApp Quick Connect */}
            <a
              href="https://wa.me/917252000711?text=Hello%20PC%20Agro%2C%20I%20would%20like%20to%20enquire%20about%20solar%20solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-fog text-[#25D366] border border-mist-grey/50 flex items-center justify-center transition-all shadow-xs backdrop-blur-md"
              aria-label="Chat on WhatsApp (+91-7252000711)"
              title="Chat on WhatsApp (+91-7252000711)"
            >
              <MessageCircle size={17} />
            </a>

            {/* Mobile Hamburger Button - GUARANTEED ON SCREEN WITH HIGH VISIBILITY */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all shadow-xs border ${
                isMobileMenuOpen
                  ? 'bg-moss-ink text-pistachio border-moss-ink shadow-md scale-105'
                  : 'bg-white/95 text-moss-ink hover:text-moss-green border-mist-grey/60 hover:bg-fog shadow-sm'
              }`}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              title="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={19} className="text-pistachio" /> : <Menu size={19} />}
            </button>
          </div>

        </div>

        {/* MegaMenu Dropdown (Pure White with curved bottom, matching media_1792409908612_3ac011e2.png) */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </header>

      {/* Mobile Drawer Navigation Backdrop & Sheet */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-moss-ink/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`mobile-sheet fixed inset-x-0 top-0 z-40 max-h-[92vh] bg-white text-moss-ink px-6 pt-20 pb-8 overflow-y-auto lg:hidden shadow-2xl ${
          isMobileMenuOpen ? 'is-open' : ''
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Mobile Search Bar inside Drawer */}
        <div className="mb-5 pt-1">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input
              type="text"
              placeholder="Search solar panels, inverters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-fog border border-mist-grey/60 rounded-full focus:outline-none focus:ring-1 focus:ring-moss-green text-moss-ink placeholder:text-moss-ink/50"
            />
            <Search size={15} className="absolute left-3.5 text-moss-ink/50" />
          </form>
        </div>

        <nav className="space-y-0.5">
          {[
            { to: '/', label: 'Home / Dashboard' },
            { to: '/solutions', label: 'Solar Solutions' },
            { to: '/solutions/open-access', label: 'Open Access Energy' },
            { to: '/products-list', label: 'Products & Equipment' },
            { to: '/projects', label: 'Projects & Installations' },
            { to: '/about-us', label: 'About Us & Heritage' },
            { to: '/contact', label: 'Contact Us' },
          ].map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ '--i': i } as React.CSSProperties}
              className="sheet-item group flex items-center justify-between py-2.5 text-base font-semibold text-moss-ink hover:text-moss-green transition-colors border-b border-mist-grey/30"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={16} className="text-moss-green opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          ))}

          {/* Quick Actions in Mobile Drawer */}
          <div className="sheet-item pt-5 mt-2 flex flex-col gap-2.5" style={{ '--i': 7 } as React.CSSProperties}>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-between px-5 py-3 rounded-full bg-moss-green hover:bg-moss-ink text-fog font-semibold text-xs uppercase tracking-wider shadow-soft transition-colors"
            >
              <span>Request a Quote</span>
              <ArrowUpRight size={15} />
            </Link>

            <a
              href="https://wa.me/917252000711?text=Hello%20PC%20Agro%2C%20I%20would%20like%20to%20enquire%20about%20solar%20solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 text-[#128C7E] font-semibold text-xs border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle size={15} />
              <span>WhatsApp: +91-7252000711</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
