import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-charcoal border-t border-rose-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl tracking-wider mb-3 text-ivory font-light tracking-[0.1em]">
              ALRAWNAQ
            </div>
            <div className="text-sm mb-4 text-rose-gold font-light">
              صالون الرونق
            </div>
            <p className="text-sm leading-relaxed text-gray-400 font-light">
              Experience luxury beauty services tailored exclusively for you.
              Where elegance meets expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-ivory font-normal">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-rose-gold transition-colors duration-300 text-gray-400 font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-ivory font-normal">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li>Sheikh Zayed Road, Dubai</li>
              <li>
                <a href="tel:+971501234567" className="hover:text-rose-gold transition-colors">
                  +971 50 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@alrawnaq.ae" className="hover:text-rose-gold transition-colors">
                  info@alrawnaq.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-rose-gold/10">
          <p className="text-sm flex items-center gap-2 text-gray-400 font-light">
            Made with <Heart className="w-4 h-4 text-rose-gold" /> by Alrawnaq Ladies Salon
          </p>
          <p className="text-sm text-gray-400 font-light">
            © 2026 Alrawnaq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
