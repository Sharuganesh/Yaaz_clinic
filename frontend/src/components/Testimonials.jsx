import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sivaram Kumar',
    role: 'Local Guide · 55 reviews',
    initials: 'SK',
    color: '#1B4B5A',
    stars: 5,
    text: 'We visited for viral fever treatment for my mom and me on two different occasions, and on both counts, the doctors — especially Dr. Karthik — were incredibly patient and thorough. He made sure we recovered fully. It\'s comforting to be treated by doctors who genuinely care.',
    time: '8 months ago',
  },
  {
    name: 'Nandhana Jayaprakash',
    role: 'Patient · Verified',
    initials: 'NJ',
    color: '#E87722',
    stars: 5,
    text: 'I strongly recommend this clinic as one of the best options for diabetic patients. The care and continuous monitoring provided by Dr. Karthik are truly commendable. His expertise and dedication have made a huge difference in managing my condition.',
    time: '8 months ago',
  },
  {
    name: 'Santhosh Nagarajan',
    role: 'Patient · 6 reviews',
    initials: 'SN',
    color: '#1B4B5A',
    stars: 5,
    text: 'I am highly satisfied with the consulting guidance provided by Karthik sir and Shivani mam. They clearly explain the treatment procedure and take great care of their patients. I vaccinated my baby at Yaazh Clinic — a completely hassle-free experience!',
    time: '8 months ago',
  },
  {
    name: 'Priya Ramesh',
    role: 'Patient · Verified',
    initials: 'PR',
    color: '#E87722',
    stars: 5,
    text: 'We had a very good experience with the doctor for our child. The clinic is clean, the staff is friendly, and Dr. Shivani is absolutely wonderful with babies. We will definitely continue coming here for all our child\'s healthcare needs.',
    time: '6 months ago',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Patient · Verified',
    initials: 'RK',
    color: '#1B4B5A',
    stars: 5,
    text: 'Please continue your great service — I will definitely recommend you to others. The doctors are knowledgeable and take time to listen. The facilities are clean and accessible. Truly one of the best clinics in Coimbatore.',
    time: '5 months ago',
  },
  {
    name: 'Meera Suresh',
    role: 'Parent · Verified',
    initials: 'MS',
    color: '#E87722',
    stars: 5,
    text: 'I would definitely recommend her for babies. Dr. Shivani handled my little one with such patience and expertise. The vaccination schedule was well-managed and the doctor clearly explained everything to us as first-time parents.',
    time: '4 months ago',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, transition: { duration: 0.35, ease: 'easeIn' } }),
  };

  const review = reviews[current];

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B4B5A 0%, #0d2d38 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#E87722]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-4 mx-auto w-fit" style={{ background: 'rgba(232,119,34,0.2)', color: '#f5a05a' }}>
            Patient Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit leading-tight mb-4">
            What Our Patients <span className="text-[#E87722]">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-white/60 text-sm">Rated 5.0 on Google with 19 reviews</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonial-card p-8 sm:p-10 relative"
                data-testid="testimonial-card"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-8 opacity-15">
                  <Quote size={60} className="text-[#1B4B5A]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-[#1B4B5A] text-base sm:text-lg leading-relaxed font-medium mb-7 relative z-10">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: review.color }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#1B4B5A] font-outfit">{review.name}</div>
                    <div className="text-sm text-[#475569]">{review.role} · {review.time}</div>
                  </div>
                  <div className="ml-auto text-xs text-[#475569] bg-[#1B4B5A]/5 px-3 py-1 rounded-lg">
                    via Google
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              data-testid="testimonial-prev"
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  data-testid={`testimonial-dot-${i}`}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    background: i === current ? '#E87722' : 'rgba(255,255,255,0.3)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              data-testid="testimonial-next"
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom: All reviews summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://maps.app.goo.gl/Qzg9ZoMNb2CzUXAp9"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="read-all-reviews-btn"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-xl text-sm font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Read All 19 Reviews on Google
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
