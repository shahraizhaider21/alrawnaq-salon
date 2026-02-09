import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Fatima Al-Mansoori',
    review: 'The most luxurious salon experience in the city. The attention to detail and personalized service is unmatched. I always leave feeling absolutely beautiful and confident.',
    image: 'https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMGhhaXIlMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NzAzMDI5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Mariam Hassan',
    review: 'My bridal makeup was absolutely perfect! The team understood exactly what I wanted and brought my vision to life. I felt like a princess on my special day.',
    image: 'https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHl8ZW58MXx8fHwxNzcwMjgxODU2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Layla Ahmed',
    review: 'The expert stylists at Alrawnaq transformed my hair beyond my expectations. The premium products and luxurious atmosphere make every visit a treat.',
    image: 'https://images.unsplash.com/photo-1760551937886-6dcf2099204f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWFrZXVwJTIwbG9vayUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcwMzAyOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Sara Abdullah',
    review: 'From facials to nail art, every service is performed with precision and care. This is not just a salon, it is a sanctuary of beauty and relaxation.',
    image: 'https://images.unsplash.com/photo-1698308233758-d55c98fd7444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuYWlsJTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc3MDMwMjk3NHww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    fade: true,
    arrows: false,
    customPaging: () => (
      <div className="w-3 h-3 rounded-full transition-all duration-300 bg-rose-gold opacity-50 hover:opacity-100" />
    ),
    dotsClass: 'slick-dots !bottom-8',
  };

  return (
    <section
      id="testimonials"
      className="py-24 px-4 relative overflow-hidden bg-charcoal"
      ref={ref}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_var(--color-rose-gold)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,_var(--color-rose-gold)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-ivory font-light">
            Client Testimonials
          </h2>
          <div className="w-24 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          <p className="text-lg max-w-2xl mx-auto text-gray-400 font-light">
            Hear what our valued clients have to say
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="flex flex-col items-center text-center py-12">
                  {/* Quote Icon */}
                  <motion.div
                    className="mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Quote className="w-12 h-12 text-rose-gold" />
                  </motion.div>

                  {/* Review Text */}
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed italic text-gray-200 font-light">
                    "{testimonial.review}"
                  </p>

                  {/* Client Image */}
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-rose-gold mx-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Client Name */}
                  <h4 className="text-lg tracking-wide text-ivory font-normal">
                    {testimonial.name}
                  </h4>

                  {/* Decorative Stars */}
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-rose-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style>{`
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li {
          margin: 0 8px;
        }
        .slick-dots li.slick-active div {
          opacity: 1 !important;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
