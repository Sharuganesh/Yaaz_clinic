import { motion } from 'framer-motion';
import { Award, CheckCircle, MessageCircle } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Karthik',
    title: 'General Physician & Diabetologist',
    image: 'https://images.pexels.com/photos/14558560/pexels-photo-14558560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    specialities: ['General Medicine', 'Diabetology', 'Internal Medicine', 'Fever & Infections'],
    bio: 'Dr. Karthik is known for his patient and thorough approach to medicine. Patients and their families consistently praise his ability to explain treatments clearly and ensure complete recovery. His expertise in diabetes management and infectious diseases makes him a trusted physician for the Coimbatore community.',
    highlights: ['Thorough examinations', 'Continuous monitoring', 'Patient-first approach'],
    color: '#1B4B5A',
    accent: 'rgba(27,75,90,0.08)',
  },
  {
    name: 'Dr. Shivani',
    title: 'Pediatrician & Women\'s Health Specialist',
    image: 'https://images.unsplash.com/photo-1632052998047-1faea5c31145?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxwZWRpYXRyaWNpYW4lMjBiYWJ5fGVufDB8fHx8MTc3ODI1MDEzNnww&ixlib=rb-4.1.0&q=85',
    specialities: ['Pediatrics', 'Baby Vaccination', "Women's Health", 'Child Wellness'],
    bio: "Dr. Shivani is highly recommended for pediatric care and baby vaccinations. Parents appreciate her gentle, caring approach with children. She makes vaccinations a hassle-free experience and is known for her ability to diagnose and treat children's conditions with expert precision and a warm demeanor.",
    highlights: ['Hassle-free vaccinations', 'Gentle with children', 'Expert diagnostics'],
    color: '#E87722',
    accent: 'rgba(232,119,34,0.08)',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-1/3 w-96 h-96 rounded-full bg-[#1B4B5A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 mx-auto w-fit">Our Team</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4B5A] font-outfit leading-tight mb-4">
            Meet Our <span className="text-[#E87722]">Expert Doctors</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Passionate healers with a commitment to your health. Our doctors combine expertise with genuine care.
          </p>
        </motion.div>

        {/* Doctor Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              data-testid={`doctor-card-${i}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#1B4B5A]/8 border border-[#1B4B5A]/6 hover:shadow-2xl hover:shadow-[#1B4B5A]/15 transition-all duration-500 card-3d"
            >
              {/* Image area */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <motion.img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${doc.color}dd 0%, ${doc.color}44 40%, transparent 70%)`,
                  }}
                />
                {/* Name overlay */}
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <div className="text-xl sm:text-2xl font-bold font-outfit">{doc.name}</div>
                  <div className="text-sm font-medium opacity-90 mt-0.5">{doc.title}</div>
                </div>
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-1.5">
                  <Award size={14} style={{ color: doc.color }} />
                  <span className="text-xs font-bold" style={{ color: doc.color }}>Specialist</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Bio */}
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                  {doc.bio}
                </p>

                {/* Specialities */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-[#1B4B5A] uppercase tracking-wider mb-2">Specialities</div>
                  <div className="flex flex-wrap gap-2">
                    {doc.specialities.map((s, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-lg text-xs font-semibold"
                        style={{ background: doc.accent, color: doc.color }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-7">
                  {doc.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <CheckCircle size={15} style={{ color: doc.color }} className="flex-shrink-0" />
                      <span className="text-sm text-[#475569] font-medium">{h}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/917904203074"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`doctor-consult-btn-${i}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: doc.color }}
                >
                  <MessageCircle size={16} />
                  Consult {doc.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
