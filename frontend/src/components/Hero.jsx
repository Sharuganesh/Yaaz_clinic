import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { MessageCircle, ArrowRight, Star, ChevronDown } from 'lucide-react';

const BG_IMAGE = "https://static.prod-images.emergentagent.com/jobs/8085276d-30f9-4674-8efa-761575ebd0f4/images/a9bc134f87176e79926ec5d212e12ae19c10abe0a994f1b7062135663ab72921.png";
const STETHOSCOPE = "https://static.prod-images.emergentagent.com/jobs/8085276d-30f9-4674-8efa-761575ebd0f4/images/80c09712fa5efbee2b0afbec9a068afc821be06ae59c895461cb87e65b6e6158.png";
const CROSS = "https://static.prod-images.emergentagent.com/jobs/8085276d-30f9-4674-8efa-761575ebd0f4/images/88939e07063faf69c29b58673a2d1f1d5a522dde602f4e3ef11af58daf20ddc9.png";
const PILL = "https://static.prod-images.emergentagent.com/jobs/8085276d-30f9-4674-8efa-761575ebd0f4/images/225e8a7e4d922848cfd2d7a40efc19852f5726b6d4ac59d33d5b513686304a89.png";

const stats = [
  { value: '5.0', label: 'Google Rating', icon: '★' },
  { value: '19+', label: 'Happy Patients', icon: '♥' },
  { value: '2+', label: 'Years of Service', icon: '◆' },
  { value: '24/7', label: 'Patient Care', icon: '●' },
];

export default function Hero() {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 150 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const el1Y = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const el2Y = useTransform(scrollYProgress, [0, 1], [0, -310]);
  const el3Y = useTransform(scrollYProgress, [0, 1], [0, -160]);

  const x1 = useTransform(smoothX, [-100, 100], [-18, 18]);
  const y1m = useTransform(smoothY, [-100, 100], [-18, 18]);
  const x2 = useTransform(smoothX, [-100, 100], [-30, 30]);
  const y2m = useTransform(smoothY, [-100, 100], [-30, 30]);
  const x3 = useTransform(smoothX, [-100, 100], [-12, 12]);
  const y3m = useTransform(smoothY, [-100, 100], [-12, 12]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 100);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 100);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image (parallax) */}
      <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: bgY }}>
        <img
          src={BG_IMAGE}
          alt="Clinic Interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Overlay layers */}
      <div className="absolute inset-0 z-[1] hero-mesh opacity-90" />
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(ellipse 70% 90% at 90% 10%, rgba(232,119,34,0.18) 0%, transparent 55%)',
        }}
      />

      {/* Floating 3D Element 1 - Stethoscope */}
      <motion.div
        className="absolute top-24 right-4 lg:right-24 z-10 w-28 sm:w-36 lg:w-56 pointer-events-none"
        style={{ y: el1Y, x: x1, translateY: y1m }}
      >
        <motion.img
          src={STETHOSCOPE}
          alt="3D Stethoscope"
          className="w-full drop-shadow-2xl float-1"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}
        />
      </motion.div>

      {/* Floating 3D Element 2 - Medical Cross */}
      <motion.div
        className="absolute top-1/3 left-4 lg:left-16 z-10 w-14 sm:w-20 lg:w-28 pointer-events-none"
        style={{ y: el2Y, x: x2, translateY: y2m }}
      >
        <motion.img
          src={CROSS}
          alt="3D Medical Cross"
          className="w-full drop-shadow-2xl float-2"
          style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.35))' }}
        />
      </motion.div>

      {/* Floating 3D Element 3 - Pill */}
      <motion.div
        className="absolute bottom-36 right-8 lg:right-48 z-10 w-10 sm:w-16 lg:w-20 pointer-events-none"
        style={{ y: el3Y, x: x3, translateY: y3m }}
      >
        <motion.img
          src={PILL}
          alt="3D Pill"
          className="w-full drop-shadow-2xl float-3"
          style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))' }}
        />
      </motion.div>

      {/* Extra decorative orbs */}
      <div className="absolute top-40 left-1/3 w-64 h-64 rounded-full bg-[#E87722]/8 blur-3xl pointer-events-none z-[2]" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none z-[2]" />

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center lg:items-start justify-center min-h-screen max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pt-24 pb-24"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#E87722] pulse-glow" />
          <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-widest uppercase font-manrope">
            Trusted Speciality Clinic in Coimbatore
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 font-outfit text-center lg:text-left max-w-3xl"
        >
          Yaazh Speciality Clinic —
          <span
            style={{
              background: 'linear-gradient(90deg, #E87722, #f5a05a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Best Clinic in Coimbatore.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-base sm:text-lg text-white/75 max-w-xl mb-10 text-center lg:text-left leading-relaxed font-manrope"
        >
          Expert care in General Medicine, Diabetes Management & Pediatrics. Serving families across Ganapathy, Coimbatore with compassionate speciality clinic services for children, adults and seniors.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
        >
          <a
            href="https://wa.me/917904203074"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-btn"
            className="flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E87722] text-white rounded-2xl font-bold text-base hover:brightness-110 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[#E87722]/30 pulse-glow"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
          <a
            href="#services"
            data-testid="hero-services-btn"
            onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-bold text-base hover:bg-white/15 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            Explore Services
            <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-2xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="text-center py-4 px-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 cursor-default"
            >
              <div className="text-2xl sm:text-3xl font-black text-white font-outfit">{stat.value}</div>
              <div className="text-xs text-white/65 mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center gap-2 mt-6"
        >
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-white/70 text-sm font-manrope">
            Rated 5.0 on Google · 19 reviews
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} className="text-white/50" />
      </motion.div>
    </section>
  );
}
