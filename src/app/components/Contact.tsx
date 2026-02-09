import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Clock } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-ivory"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-charcoal font-light">
            Visit Us
          </h2>
          <div className="w-24 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          <p className="text-lg max-w-2xl mx-auto text-gray-500 font-light">
            We look forward to welcoming you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-8 tracking-wide text-charcoal font-light">
              Get In Touch
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#C9A961] to-rose-gold">
                  <MapPin className="w-5 h-5 text-charcoal" />
                </div>
                <div>
                  <h4 className="mb-1 text-charcoal font-normal">
                    Address
                  </h4>
                  <p className="text-gray-500 font-light">
                    Al Manama - Ras Al Khaimah Rd<br />
                    Shamal - Ras Al-Khaimah, UAE
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#C9A961] to-rose-gold">
                  <Phone className="w-5 h-5 text-charcoal" />
                </div>
                <div>
                  <h4 className="mb-1 text-charcoal font-normal">
                    Phone
                  </h4>
                  <a
                    href="tel:+971501234567"
                    className="hover:underline text-gray-500 font-light"
                  >
                    +971 50 123 4567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#C9A961] to-rose-gold">
                  <Mail className="w-5 h-5 text-charcoal" />
                </div>
                <div>
                  <h4 className="mb-1 text-charcoal font-normal">
                    Email
                  </h4>
                  <a
                    href="mailto:info@alrawnaq.ae"
                    className="hover:underline text-gray-500 font-light"
                  >
                    info@alrawnaq.ae
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#C9A961] to-rose-gold">
                  <Clock className="w-5 h-5 text-charcoal" />
                </div>
                <div>
                  <h4 className="mb-1 text-charcoal font-normal">
                    Opening Hours
                  </h4>
                  <p className="text-gray-500 font-light">
                    Saturday - Thursday: 10:00 AM - 9:00 PM<br />
                    Friday: 2:00 PM - 9:00 PM
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded transition-all duration-300 mt-8 inline-flex bg-gradient-to-br from-[#C9A961] to-rose-gold text-charcoal font-normal"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </motion.a>

              {/* Social Media */}
              <div className="pt-6">
                <h4 className="mb-4 text-charcoal font-normal">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-rose-gold"
                    whileHover={{ scale: 1.1, backgroundColor: '#D4AF37', color: '#1A1A1A' }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-rose-gold"
                    whileHover={{ scale: 1.1, backgroundColor: '#D4AF37', color: '#1A1A1A' }}
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 rounded bg-white border border-gray-200">
              <h3 className="text-2xl mb-6 tracking-wide text-charcoal font-light">
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div>
                  <Label className="text-charcoal">Name</Label>
                  <Input
                    placeholder="Your name"
                    className="mt-2 border-gray-200"
                  />
                </div>
                <div>
                  <Label className="text-charcoal">Email</Label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2 border-gray-200"
                  />
                </div>
                <div>
                  <Label className="text-charcoal">Message</Label>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full mt-2 px-3 py-2 rounded-md border resize-none border-gray-200 font-light"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3 rounded transition-all duration-300 bg-gradient-to-br from-[#C9A961] to-rose-gold text-charcoal font-normal"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="mt-16 h-96 rounded overflow-hidden border-2 border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Alrawnaq%20Ladies%20Salon%20Ras%20Al%20Khaimah&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
