import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

const services = [
  {
    title: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1761931403671-d020a14928d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyc3R5bGlzdCUyMGN1dHRpbmclMjBoYWlyfGVufDF8fHx8MTc3MDIxMjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Expert cuts, coloring, and styling',
    price: 'From AED 150'
  },
  {
    title: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHl8ZW58MXx8fHwxNzcwMjgxODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Complete bridal packages with trial',
    price: 'From AED 800'
  },
  {
    title: 'Facials & Skincare',
    image: 'https://images.unsplash.com/photo-1739981193097-5e4ff4e36608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWNpYWwlMjBza2luY2FyZSUyMHNwYXxlbnwxfHx8fDE3NzAzMDI5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Rejuvenating treatments for glowing skin',
    price: 'From AED 250'
  },
  {
    title: 'Nails & Spa',
    image: 'https://images.unsplash.com/photo-1731644139982-b75487df663e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBsdXh1cnl8ZW58MXx8fHwxNzcwMzAyOTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Manicures, pedicures & nail art',
    price: 'From AED 100'
  }
];

export function Services({ onBookNowClick }: { onBookNowClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-24 px-4 bg-charcoal"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-ivory font-light">
            Our Services
          </h2>
          <div className="w-24 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          <p className="text-lg max-w-2xl mx-auto text-gray-400 font-light">
            Discover our range of premium beauty treatments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden cursor-pointer h-[400px] bg-charcoal-light"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.6 }}
                />
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${hoveredIndex === index
                      ? 'bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/30'
                      : 'bg-gradient-to-t from-charcoal/80 to-charcoal/40'
                    }`}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <motion.h3
                  className="text-3xl mb-3 tracking-wide text-ivory font-light"
                  animate={{
                    y: hoveredIndex === index ? -10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-base mb-4 text-rose-gold font-light"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.8,
                    y: hoveredIndex === index ? -10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.price}
                </motion.p>

                <motion.p
                  className="text-sm mb-6 text-gray-400 font-light"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? -10 : 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>

                <motion.button
                  onClick={onBookNowClick}
                  className={`self-start px-6 py-3 text-sm tracking-wide border rounded-sm transition-all duration-300 ${hoveredIndex === index
                      ? 'bg-gradient-to-br from-[#C9A961] to-rose-gold border-transparent text-charcoal'
                      : 'border-rose-gold text-rose-gold bg-transparent'
                    }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? -10 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>

                {/* Decorative Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-gold to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
