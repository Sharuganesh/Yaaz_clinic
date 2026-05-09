import { motion } from 'framer-motion';
import { Activity, Baby, Thermometer, Stethoscope, Shield, Heart } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Diabetes Care',
    desc: 'Expert management and continuous monitoring of diabetes with personalized treatment plans by Dr. Karthik.',
    color: '#E87722',
    bg: 'rgba(232,119,34,0.08)',
    tags: ['Type 1 & 2', 'HbA1c Monitoring', 'Diet Counseling'],
  },
  {
    icon: Baby,
    title: 'Pediatrics & Vaccination',
    desc: 'Comprehensive child healthcare and hassle-free baby vaccination programs under expert pediatric guidance.',
    color: '#1B4B5A',
    bg: 'rgba(27,75,90,0.07)',
    tags: ['Baby Vaccines', 'Growth Monitoring', 'Child Wellness'],
  },
  {
    icon: Thermometer,
    title: 'Fever & Viral Infections',
    desc: 'Prompt diagnosis and effective treatment of viral fevers, infections and acute illnesses with thorough follow-up.',
    color: '#E87722',
    bg: 'rgba(232,119,34,0.08)',
    tags: ['Viral Fever', 'Infections', 'Recovery Care'],
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    desc: 'Holistic medical consultations for all ages with careful examination and evidence-based treatment protocols.',
    color: '#1B4B5A',
    bg: 'rgba(27,75,90,0.07)',
    tags: ['Consultations', 'Health Checkup', 'Follow-up'],
  },
  {
    icon: Heart,
    title: "Women's Health",
    desc: 'Dedicated healthcare for women including general health concerns, preventive care and specialist referrals.',
    color: '#E87722',
    bg: 'rgba(232,119,34,0.08)',
    tags: ['Preventive Care', 'Wellness', 'Specialist Referrals'],
  },
  {
    icon: Shield,
    title: 'Chronic Disease Management',
    desc: 'Long-term management and monitoring of chronic conditions ensuring quality of life and optimal health outcomes.',
    color: '#1B4B5A',
    bg: 'rgba(27,75,90,0.07)',
    tags: ['Long-term Care', 'Monitoring', 'Lifestyle Guidance'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#1B4B5A]/4 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-[#E87722]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-4 mx-auto w-fit">Our Services</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4B5A] font-outfit leading-tight mb-4">
            Comprehensive <span className="text-[#E87722]">Healthcare</span> Solutions
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            From preventive care to specialized treatments, we offer a wide range of medical services tailored to your individual needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              data-testid={`service-card-${i}`}
              className="group relative p-7 rounded-2xl border border-[#1B4B5A]/8 bg-white hover:shadow-2xl hover:shadow-[#1B4B5A]/10 transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Background color hint */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: service.bg }}
              />

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: service.bg }}
              >
                <service.icon size={26} style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-bold text-[#1B4B5A] font-outfit mb-2 group-hover:text-[#E87722] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-sm text-[#475569] leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-1.5">
                {service.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors duration-300"
                    style={{
                      background: service.bg,
                      color: service.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://wa.me/917904203074"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="services-whatsapp-btn"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#1B4B5A] text-white rounded-2xl font-bold hover:bg-[#E87722] hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#1B4B5A]/20"
          >
            Book a Consultation
            <Activity size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
