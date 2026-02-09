import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMGhhaXIlMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NzAzMDI5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'hair'
  },
  {
    url: 'https://images.unsplash.com/photo-1760551937886-6dcf2099204f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWFrZXVwJTIwbG9vayUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcwMzAyOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'makeup'
  },
  {
    url: 'https://images.unsplash.com/photo-1698308233758-d55c98fd7444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuYWlsJTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc3MDMwMjk3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'nails'
  },
  {
    url: 'https://images.unsplash.com/photo-1761931403671-d020a14928d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyc3R5bGlzdCUyMGN1dHRpbmclMjBoYWlyfGVufDF8fHx8MTc3MDIxMjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'hair'
  },
  {
    url: 'https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHl8ZW58MXx8fHwxNzcwMjgxODU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'makeup'
  },
  {
    url: 'https://images.unsplash.com/photo-1731644139982-b75487df663e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBsdXh1cnl8ZW58MXx8fHwxNzcwMzAyOTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'nails'
  }
];

const categories = ['all', 'hair', 'makeup', 'nails'];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-24 px-4 bg-ivory"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-charcoal font-light">
            Our Portfolio
          </h2>
          <div className="w-24 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          <p className="text-lg max-w-2xl mx-auto text-gray-500 font-light">
            Witness the transformations that define our excellence
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 text-sm tracking-wider uppercase transition-all duration-300 border rounded-sm font-normal ${selectedCategory === category
                ? 'bg-gradient-to-br from-[#C9A961] to-rose-gold text-charcoal border-transparent'
                : 'bg-transparent text-gray-500 border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.url}-${index}`}
              className="group relative overflow-hidden cursor-pointer h-[400px] bg-gray-50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setLightboxImage(image.url)}
              whileHover={{ y: -8 }}
            >
              <img
                src={image.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/15 to-[#C9A961]/15 backdrop-blur-[1px] opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full border-2 border-charcoal flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <svg
                    className="w-8 h-8 text-charcoal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightboxImage(null)}
        >
          <motion.button
            className="absolute top-4 right-4 p-2 text-white text-4xl hover:text-rose-gold transition-colors"
            onClick={() => setLightboxImage(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ×
          </motion.button>
          <motion.img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </section>
  );
}
