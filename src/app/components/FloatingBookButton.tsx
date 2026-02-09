import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingBookButton({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl group bg-gradient-to-br from-[#C9A961] to-rose-gold text-charcoal hover:scale-110 active:scale-95"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Calendar className="w-5 h-5" />
      <span className="hidden sm:inline font-medium">Book Now</span>

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-rose-gold"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.button>
  );
}
