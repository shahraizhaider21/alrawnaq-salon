import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Award, Heart, Crown } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Expert Stylists',
    description: 'Personalized care from certified beauty professionals'
  },
  {
    icon: Award,
    title: 'Premium Products',
    description: 'Only the finest luxury beauty brands'
  },
  {
    icon: Heart,
    title: 'Comfort & Confidence',
    description: 'Your wellbeing is our priority'
  },
  {
    icon: Crown,
    title: 'Luxury Experience',
    description: 'Indulge in an atmosphere of elegance'
  }
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
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
            Why Choose Alrawnaq
          </h2>
          <div className="w-24 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          <p className="text-lg max-w-2xl mx-auto text-gray-500 font-light">
            Experience the perfect blend of luxury, expertise, and personalized care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 text-center transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)]"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#C9A961] to-rose-gold"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-8 h-8 text-charcoal" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl mb-3 tracking-wide text-charcoal font-normal">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-500 font-light">
                {feature.description}
              </p>

              {/* Decorative element */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-gold to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
