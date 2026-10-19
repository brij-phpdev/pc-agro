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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none px-4 sm:px-8 lg:px-14 ${
          isScrolled ? 'pt-3 pb-2' : 'pt-5 sm:pt-7'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* 1. Left: Brand Logo */}
          <Link
            to="/"
            className="pointer-events-auto flex items-center gap-2 group focus:outline-none"
            aria-label="PC Agro Home"
          >
            <Logo className="h-8 sm:h-9" />
          </Link>

          {/* 2. Center: Translucent Floating Navigation Pill (matches screenshot media_1792409908612_3ac011e2.png) */}
          <nav className="pointer-events-auto hidden lg:flex items-center">
            <div
              className={`flex items-center gap-6 px-6 h-11 rounded-full border shadow-xs transition-all duration-300 ${
                isMegaMenuOpen
                  ? 'bg-white border-mist-grey/50 text-moss-ink'
                  : isScrolled
                  ? 'bg-white/95 backdrop-blur-md border-mist-grey/40 text-moss-ink shadow-soft'
                  : 'bg-white/90 backdrop-blur-md border-white/60 text-moss-ink'
              }`}
            >
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

          {/* 3. Right: Request a Quote Pill + Circular Search + WhatsApp Icon */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            {/* Request a Quote Button */}
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
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs backdrop-blur-md ${
                  isSearchOpen
                    ? 'bg-moss-ink text-fog ring-2 ring-moss-green/40'
                    : 'bg-white/90 hover:bg-fog text-moss-ink border border-mist-grey/50'
                }`}
                aria-label="Search equipment"
                title="Search products"
              >
                <Search size={15} />
              </button>

              {/* Animated Inline Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute right-0 top-12 w-80 bg-white text-moss-ink rounded-2xl p-3 shadow-2xl border border-mist-grey/50 animate-fadeIn z-50">
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
              href="https://wa.me/919876543210?text=Hello%20PC%20Agro%2C%20I%20would%20like%20to%20enquire%20about%20solar%20solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-fog text-moss-green border border-mist-grey/50 flex items-center justify-center transition-all shadow-xs backdrop-blur-md"
              aria-label="Chat on WhatsApp"
              title="Chat with PC Agro"
            >
              <MessageCircle size={16} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/90 text-moss-ink border border-mist-grey/50 flex items-center justify-center transition-all shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* MegaMenu Dropdown (Pure White with curved bottom, matching media_1792409908612_3ac011e2.png) */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white text-moss-ink p-6 pt-24 overflow-y-auto lg:hidden animate-fadeIn">
          <nav className="space-y-4">
            <Link
              to="/solutions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-lg font-bold border-b border-fog text-moss-ink hover:text-moss-green"
            >
              Solar Solutions
            </Link>
            <div className="pl-4 space-y-2 py-1 text-sm text-moss-ink/80">
              <Link to="/solutions#residential-solar" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-moss-green">Residential Solar</Link>
              <Link to="/solutions#commercial-solar" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-moss-green">Commercial Solar</Link>
              <Link to="/solutions#industrial-solar" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-moss-green">Industrial Solar</Link>
              <Link to="/solutions#institutional-solar" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-moss-green">Institutional Solar</Link>
            </div>

            <Link
              to="/products-list"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-lg font-bold border-b border-fog text-moss-ink hover:text-moss-green"
            >
              Products & Components
            </Link>
            <div className="pl-4 space-y-2 py-1 text-sm text-moss-ink/80">
              <Link to="/products-list?category=modules" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-moss-green">Solar Modules</Link>
              <Link to="/products-list?category=inverters" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-moss-green">Solar Inverters</Link>
              <Link to="/products-list?category=batteries" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-moss-green">Batteries & Storage</Link>
              <Link to="/products-list?category=accessories" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-moss-green">Solar Kits & Accessories</Link>
            </div>

            <Link
              to="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-lg font-bold border-b border-fog text-moss-ink hover:text-moss-green"
            >
              Projects Portfolio
            </Link>

            <Link
              to="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-lg font-bold border-b border-fog text-moss-ink hover:text-moss-green"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-lg font-bold text-moss-ink hover:text-moss-green"
            >
              Contact Us
            </Link>

            <div className="pt-6">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-moss-green text-fog font-semibold text-xs uppercase tracking-wider shadow-soft"
              >
                <span>Request a Quote</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
