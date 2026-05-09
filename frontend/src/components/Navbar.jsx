import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const LOGO = "https://customer-assets.emergentagent.com/job_yaazh-immersive-care/artifacts/lwezmiaz_Screenshot%202026-05-08%20194843.png";

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-[#1B4B5A]/8 border-b border-[#1B4B5A]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3 group" data-testid="nav-logo">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-[#E87722]/30 group-hover:border-[#E87722] transition-all duration-300 flex-shrink-0 bg-white">
                <img src={LOGO} alt="Yaazh Clinic Logo" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <div className={`font-bold text-base lg:text-lg leading-tight font-outfit transition-colors duration-300 ${scrolled ? 'text-[#1B4B5A]' : 'text-white'}`}>
                  YAAZH
                </div>
                <div className={`text-xs font-medium leading-tight tracking-wide transition-colors duration-300 ${scrolled ? 'text-[#E87722]' : 'text-orange-200'}`}>
                  SPECIALITY CLINIC
                </div>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeLink === link.href
                      ? 'text-[#E87722] bg-[#E87722]/10'
                      : scrolled
                      ? 'text-[#1B4B5A] hover:text-[#E87722] hover:bg-[#E87722]/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:07904203074"
                data-testid="nav-phone-btn"
                className={`hidden sm:flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                  scrolled ? 'text-[#1B4B5A]' : 'text-white/90'
                }`}
              >
                <Phone size={14} />
                <span className="hidden md:inline">079042 03074</span>
              </a>
              <a
                href="https://wa.me/917904203074"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-whatsapp-btn"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#E87722] text-white rounded-xl text-sm font-bold hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-md shadow-[#E87722]/20"
              >
                Book Now
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-[#1B4B5A]' : 'text-white'}`}
                data-testid="nav-mobile-toggle"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-xl border-b border-[#1B4B5A]/10 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    activeLink === link.href
                      ? 'text-[#E87722] bg-[#E87722]/10 font-semibold'
                      : 'text-[#1B4B5A] hover:bg-[#1B4B5A]/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/917904203074"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 py-3 bg-[#E87722] text-white rounded-xl font-bold"
              >
                Book via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
