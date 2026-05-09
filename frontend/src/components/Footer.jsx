import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

const LOGO = "https://customer-assets.emergentagent.com/job_yaazh-immersive-care/artifacts/lwezmiaz_Screenshot%202026-05-08%20194843.png";

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Diabetes Care',
  'Pediatrics',
  'Baby Vaccination',
  'General Medicine',
  "Women's Health",
  'Chronic Disease Management',
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{ background: 'linear-gradient(135deg, #0d2d38 0%, #1B4B5A 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E87722]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Top section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E87722]/40 bg-white flex-shrink-0">
                <img src={LOGO} alt="Yaazh Clinic Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-black text-white font-outfit text-base">YAAZH</div>
                <div className="text-[#E87722] text-xs font-semibold">SPECIALITY CLINIC</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Compassionate healthcare serving Ganapathy, Coimbatore. Your health, our priority.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917904203074"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                style={{ background: '#25D366' }}
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a
                href="https://maps.app.goo.gl/Qzg9ZoMNb2CzUXAp9"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-maps"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-[#E87722] transition-all duration-300 hover:scale-110"
                aria-label="Google Maps"
              >
                <MapPin size={16} />
              </a>
              <a
                href="mailto:YAAZHSPECIALITYCLINIC@gmail.com"
                data-testid="footer-email"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-[#E87722] transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-outfit mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-white/60 hover:text-[#E87722] text-sm transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E87722]/40 group-hover:bg-[#E87722] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold font-outfit mb-4 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNav('#services'); }}
                    className="text-white/60 hover:text-[#E87722] text-sm transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E87722]/40 group-hover:bg-[#E87722] transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold font-outfit mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:07904203074" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                <Phone size={15} className="mt-0.5 text-[#E87722] flex-shrink-0" />
                <span className="text-sm">079042 03074</span>
              </a>
              <a href="mailto:YAAZHSPECIALITYCLINIC@gmail.com" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors">
                <Mail size={15} className="mt-0.5 text-[#E87722] flex-shrink-0" />
                <span className="text-sm break-all">YAAZHSPECIALITYCLINIC@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin size={15} className="mt-0.5 text-[#E87722] flex-shrink-0" />
                <span className="text-sm">IG Garden, near Raja Ganapathy Temple, VNS Nagar, Ganapathy, Coimbatore 641006</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Yaazh Speciality Clinic. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-[#E87722]" /> for the people of Coimbatore
          </p>
        </div>
      </div>
    </footer>
  );
}
