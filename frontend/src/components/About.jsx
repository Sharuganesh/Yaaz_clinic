import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Heart, Award, Users } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Compassionate Care', desc: 'Every patient is treated with warmth, dignity and genuine concern for their wellbeing.' },
  { icon: Shield, title: 'Expert Diagnosis', desc: 'Thorough examinations and precise diagnoses backed by medical expertise and experience.' },
  { icon: Award, title: 'Trusted Results', desc: 'Consistent 5-star reviews reflect our commitment to quality healthcare outcomes.' },
];

const stats = [
  { label: 'Google Rating', value: 5.0, display: '5.0 ★', suffix: '' },
  { label: 'Patient Reviews', value: 19, display: '19+', suffix: '' },
  { label: 'Years of Service', value: 2, display: '2+', suffix: '' },
  { label: 'Specialities', value: 4, display: '4+', suffix: '' },
];

function AnimatedNumber({ value, display, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-black text-[#1B4B5A] font-outfit">
        {inView ? display.replace(String(Math.floor(value)), String(count)) : '0'}
      </div>
      <div className="text-sm text-[#475569] mt-1 font-medium">{label}</div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1B4B5A]/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#E87722]/6 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 mx-auto w-fit">About Us</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4B5A] font-outfit leading-tight mb-4">
            We Are Yaazh{' '}
            <span className="text-[#E87722]">Speciality Clinic</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Established in the heart of Ganapathy, Coimbatore, we are dedicated to delivering patient-first healthcare with the highest medical standards.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label mb-4">Our Story</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1B4B5A] font-outfit mb-5">
              Healthcare with Heart
            </h3>
            <p className="text-[#475569] leading-relaxed mb-4">
              Yaazh Speciality Clinic was founded with a singular mission: to provide world-class healthcare in a warm, welcoming environment. Named after the ancient Tamil musical instrument symbolizing harmony, our clinic blends modern medicine with compassionate care.
            </p>
            <p className="text-[#475569] leading-relaxed mb-8">
              Located near Raja Ganapathy Temple in VNS Nagar, we serve the communities of Ganapathy and the surrounding areas. Our team of dedicated doctors ensures every patient receives personalized attention, thorough examination, and effective treatment.
            </p>

            {/* Values */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              {values.map((v, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4B5A]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E87722]/15 transition-colors duration-300">
                    <v.icon size={20} className="text-[#E87722]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1B4B5A] mb-0.5">{v.title}</div>
                    <div className="text-sm text-[#475569] leading-relaxed">{v.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1B4B5A]/15 card-3d">
              <img
                src="https://images.pexels.com/photos/14558557/pexels-photo-14558557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Clinic consultation"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4B5A]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-lg font-bold font-outfit">Ganapathy, Coimbatore</div>
                <div className="text-sm text-white/80">IG Garden, VNS Nagar</div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-4 bg-white rounded-2xl shadow-xl shadow-[#1B4B5A]/12 px-5 py-3 border border-[#1B4B5A]/8"
            >
              <div className="text-2xl font-black text-[#E87722] font-outfit">5.0 ★</div>
              <div className="text-xs text-[#475569] font-medium">Google Rated</div>
            </motion.div>

            {/* Second floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-xl shadow-[#1B4B5A]/12 px-5 py-3 border border-[#1B4B5A]/8"
            >
              <div className="flex items-center gap-2">
                <Users size={20} className="text-[#1B4B5A]" />
                <div>
                  <div className="text-lg font-black text-[#1B4B5A] font-outfit">19+</div>
                  <div className="text-xs text-[#475569] font-medium">Happy Patients</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-3xl p-8 shadow-lg shadow-[#1B4B5A]/8 border border-[#1B4B5A]/6"
        >
          {stats.map((s, i) => (
            <AnimatedNumber key={i} value={s.value} display={s.display} label={s.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
