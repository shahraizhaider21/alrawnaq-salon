import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingBookButton } from './components/FloatingBookButton';
import { BookingDialog } from './components/BookingDialog';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Navigation onBookNowClick={handleBookNowClick} />
      <Hero onBookNowClick={handleBookNowClick} />
      <WhyChooseUs />
      <Services onBookNowClick={handleBookNowClick} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingBookButton onClick={handleBookNowClick} />
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
