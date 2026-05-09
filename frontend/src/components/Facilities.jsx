import { motion } from 'framer-motion';
import { Accessibility, Baby, CreditCard, Car, CheckCircle, Clock, MapPin, Wifi } from 'lucide-react';

const facilities = [
  { icon: Accessibility, title: 'Wheelchair Accessible', desc: 'Fully accessible seating and pathways for differently-abled patients.', color: '#1B4B5A' },
  { icon: Baby, title: 'Nursing Room', desc: 'Private, comfortable nursing space for mothers and infants.', color: '#E87722' },
  { icon: CreditCard, title: 'Digital Payments', desc: 'Google Pay, NFC & contactless payments accepted for convenience.', color: '#1B4B5A' },
  { icon: Car, title: 'On-Site Parking', desc: 'Convenient and spacious on-site parking available for all patients.', color: '#E87722' },
  { icon: CheckCircle, title: 'On-Site Services', desc: 'All medical consultations and treatments available at the clinic.', color: '#1B4B5A' },
  { icon: Clock, title: 'Extended Hours', desc: 'Open till 10 PM to serve patients at their convenience.', color: '#E87722' },
  { icon: MapPin, title: 'Central Location', desc: 'Conveniently located near Raja Ganapathy Temple, VNS Nagar.', color: '#1B4B5A' },
  { icon: Wifi, title: 'Modern Equipment', desc: 'State-of-the-art diagnostic tools for accurate health assessments.', color: '#E87722' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#E87722]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-4 mx-auto w-fit">Our Facilities</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4B5A] font-outfit leading-tight mb-4">
            World-Class <span className="text-[#E87722]">Amenities</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            We've created a welcoming, accessible, and fully-equipped environment so your visit is as comfortable as possible.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              data-testid={`facility-card-${i}`}
              className="group p-6 rounded-2xl bg-[#F8FAFC] border border-[#1B4B5A]/6 hover:bg-white hover:shadow-xl hover:shadow-[#1B4B5A]/10 transition-all duration-400 cursor-default text-center"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: f.color === '#1B4B5A' ? 'rgba(27,75,90,0.08)' : 'rgba(232,119,34,0.08)',
                }}
              >
                <f.icon size={24} style={{ color: f.color }} />
              </div>
              <h3 className="font-bold text-[#1B4B5A] text-sm mb-2 font-outfit group-hover:text-[#E87722] transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Hours highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1B4B5A 0%, #0d2d38 100%)' }}
        >
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { label: 'Opening Hours', value: 'Mon – Sun', sub: 'Open till 10:00 PM' },
              { label: 'Location', value: 'VNS Nagar', sub: 'Ganapathy, Coimbatore 641006' },
              { label: 'Phone', value: '079042 03074', sub: 'Call for appointments' },
            ].map((item, i) => (
              <div key={i} className="px-8 py-6 text-center">
                <div className="text-xs font-bold text-[#E87722] uppercase tracking-widest mb-2">{item.label}</div>
                <div className="text-xl font-black text-white font-outfit">{item.value}</div>
                <div className="text-sm text-white/60 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
