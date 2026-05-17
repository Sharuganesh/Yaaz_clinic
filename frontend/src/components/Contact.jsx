import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';

const supportEmail = 'YAAZHSPECIALITYCLINIC@gmail.com';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '079042 03074',
    href: 'tel:07904203074',
    color: '#1B4B5A',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'YAAZHSPECIALITYCLINIC@gmail.com',
    href: 'mailto:YAAZHSPECIALITYCLINIC@gmail.com',
    color: '#E87722',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'IG Garden, near Raja Ganapathy Temple, VNS Nagar, Ganapathy, Coimbatore 641006',
    href: 'https://maps.app.goo.gl/Qzg9ZoMNb2CzUXAp9',
    color: '#1B4B5A',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in Name, Email, and Message.');
      return;
    }
    setError('');
    const subject = `Contact request from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\nMessage:\n${form.message}`;
    const mailtoUrl = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setStatus('success');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E87722]/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1B4B5A]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-4 mx-auto w-fit">Get in Touch</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4B5A] font-outfit leading-tight mb-4">
            We're Here to <span className="text-[#E87722]">Help You</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Reach out to us for consultations, queries, or to know more about our services. We'll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 4, scale: 1.01 }}
                data-testid={`contact-info-${i}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#1B4B5A]/8 shadow-sm hover:shadow-lg hover:shadow-[#1B4B5A]/8 transition-all duration-300 group block"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: info.color === '#1B4B5A' ? 'rgba(27,75,90,0.08)' : 'rgba(232,119,34,0.08)' }}
                >
                  <info.icon size={20} style={{ color: info.color }} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#475569] uppercase tracking-wider mb-0.5">{info.label}</div>
                  <div className="text-sm font-semibold text-[#1B4B5A] leading-relaxed">{info.value}</div>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917904203074"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-btn"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <MessageCircle size={18} />
              Chat Directly on WhatsApp
            </a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-48 border border-[#1B4B5A]/8">
              <iframe
                title="Yaazh Clinic Location"
                src="https://www.google.com/maps?q=Yaazh+Speciality+Clinic,+VNS+Nagar,+Ganapathy,+Coimbatore,+Tamil+Nadu+641006&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-[#1B4B5A]/10 border border-[#1B4B5A]/6 p-7 sm:p-10">
              <h3 className="text-2xl font-bold text-[#1B4B5A] font-outfit mb-2">Send us a Message</h3>
              <p className="text-[#475569] text-sm mb-8">Fill in the form below and we'll respond within 24 hours.</p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-14 text-center"
                  data-testid="contact-success"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1B4B5A] font-outfit mb-2">Message Received!</h4>
                  <p className="text-[#475569] text-sm max-w-sm">
                    Thank you for reaching out. We'll get back to you shortly. For urgent queries, please call us directly.
                  </p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-6 px-6 py-2.5 bg-[#1B4B5A]/8 text-[#1B4B5A] rounded-xl text-sm font-semibold hover:bg-[#1B4B5A]/15 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#1B4B5A] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        data-testid="contact-name-input"
                        className="w-full px-4 py-3 rounded-xl border border-[#1B4B5A]/15 focus:border-[#E87722] focus:ring-2 focus:ring-[#E87722]/20 outline-none text-[#1B4B5A] placeholder:text-[#475569]/50 text-sm bg-[#F8FAFC] focus:bg-white transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1B4B5A] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        data-testid="contact-email-input"
                        className="w-full px-4 py-3 rounded-xl border border-[#1B4B5A]/15 focus:border-[#E87722] focus:ring-2 focus:ring-[#E87722]/20 outline-none text-[#1B4B5A] placeholder:text-[#475569]/50 text-sm bg-[#F8FAFC] focus:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B4B5A] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      data-testid="contact-phone-input"
                      className="w-full px-4 py-3 rounded-xl border border-[#1B4B5A]/15 focus:border-[#E87722] focus:ring-2 focus:ring-[#E87722]/20 outline-none text-[#1B4B5A] placeholder:text-[#475569]/50 text-sm bg-[#F8FAFC] focus:bg-white transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B4B5A] uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you? Describe your concern or query..."
                      rows={5}
                      data-testid="contact-message-input"
                      className="w-full px-4 py-3 rounded-xl border border-[#1B4B5A]/15 focus:border-[#E87722] focus:ring-2 focus:ring-[#E87722]/20 outline-none text-[#1B4B5A] placeholder:text-[#475569]/50 text-sm bg-[#F8FAFC] focus:bg-white transition-all duration-300 resize-none"
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-500 text-sm bg-red-50 px-4 py-2.5 rounded-xl"
                    >
                      <AlertCircle size={16} />
                      {error}
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 px-4 py-2.5 rounded-xl">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid="contact-submit-btn"
                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#E87722] text-white rounded-2xl font-bold text-base hover:brightness-110 transition-all duration-300 shadow-lg shadow-[#E87722]/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
