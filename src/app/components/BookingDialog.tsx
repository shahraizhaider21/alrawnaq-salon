import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, User, Phone, CheckCircle } from 'lucide-react';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  'Hair Styling',
  'Bridal Makeup',
  'Facials & Skincare',
  'Nails & Spa'
];

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM'
];

export function BookingDialog({ isOpen, onClose }: BookingDialogProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: undefined as Date | undefined,
    time: '',
    name: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Format WhatsApp Message
    const formattedDate = formData.date?.toLocaleDateString() || 'N/A';
    const message = encodeURIComponent(
      `Hello! I would like to book an appointment.\n\n` +
      `*Service:* ${formData.service}\n` +
      `*Date:* ${formattedDate}\n` +
      `*Time:* ${formData.time}\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n\n` +
      `Please confirm my booking.`
    );

    // Open WhatsApp after a short delay for animation
    setTimeout(() => {
      window.open(`https://wa.me/?text=${message}`, '_blank');

      setIsSubmitted(false);
      setStep(1);
      setFormData({
        service: '',
        date: undefined,
        time: '',
        name: '',
        phone: ''
      });
      onClose();
    }, 2000);
  };

  const canProceedToStep2 = formData.service && formData.date && formData.time;
  const canSubmit = canProceedToStep2 && formData.name && formData.phone;

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md bg-ivory border-none">
          <motion.div
            className="flex flex-col items-center justify-center py-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <CheckCircle className="w-20 h-20 mb-6 text-rose-gold" />
            </motion.div>
            <h3 className="text-2xl mb-2 text-charcoal font-light">
              Booking Confirmed!
            </h3>
            <p className="text-center text-gray-500 font-light">
              Redirecting you to WhatsApp to finalize your appointment...
            </p>
          </motion.div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-ivory border-none"
      >
        <DialogHeader>
          <DialogTitle
            className="text-3xl text-center mb-2 text-charcoal font-light"
          >
            Book Your Experience
          </DialogTitle>
          <div
            className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-rose-gold to-transparent"
          />
        </DialogHeader>

        {/* Step Indicator */}
        <div className="flex justify-center gap-2 my-6">
          {[1, 2].map((s) => (
            <div
              key={s}
              className="flex items-center"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 font-normal ${step >= s
                    ? 'bg-gradient-to-br from-[#C9A961] to-rose-gold text-charcoal shadow-md'
                    : 'bg-gray-200 text-gray-400'
                  }`}
              >
                {s}
              </div>
              {s < 2 && (
                <div
                  className={`w-12 h-1 mx-2 ${step > s ? 'bg-rose-gold' : 'bg-gray-200'
                    }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Service Selection */}
              <div>
                <Label className="flex items-center gap-2 mb-2 text-charcoal">
                  <CalendarIcon className="w-4 h-4 text-rose-gold" />
                  Select Service
                </Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="border-gray-200 focus:ring-rose-gold">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Selection */}
              <div>
                <Label className="flex items-center gap-2 mb-2 text-charcoal">
                  <CalendarIcon className="w-4 h-4 text-rose-gold" />
                  Select Date
                </Label>
                <div className="border border-gray-200 rounded-md p-4">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => setFormData({ ...formData, date })}
                    disabled={(date) => date < new Date()}
                    className="mx-auto"
                  />
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <Label className="flex items-center gap-2 mb-2 text-charcoal">
                  <Clock className="w-4 h-4 text-rose-gold" />
                  Select Time
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`py-2 px-3 text-sm rounded transition-all duration-300 font-light border ${formData.time === time
                          ? 'bg-gradient-to-br from-[#C9A961] to-rose-gold text-charcoal border-transparent shadow-sm'
                          : 'bg-transparent text-gray-500 border-gray-200 hover:border-rose-gold/50'
                        }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!canProceedToStep2}
                className={`w-full py-3 rounded transition-all duration-300 font-normal ${canProceedToStep2
                    ? 'bg-gradient-to-br from-[#C9A961] to-rose-gold text-charcoal shadow-md hover:scale-[1.02]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <Label className="flex items-center gap-2 mb-2 text-charcoal">
                  <User className="w-4 h-4 text-rose-gold" />
                  Full Name
                </Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className="border-gray-200 focus:border-rose-gold focus:ring-rose-gold"
                />
              </div>

              {/* Phone */}
              <div>
                <Label className="flex items-center gap-2 mb-2 text-charcoal">
                  <Phone className="w-4 h-4 text-rose-gold" />
                  Phone Number
                </Label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+971 XX XXX XXXX"
                  required
                  className="border-gray-200 focus:border-rose-gold focus:ring-rose-gold"
                />
              </div>

              {/* Summary */}
              <div
                className="p-4 rounded bg-gray-50 border border-gray-200"
              >
                <h4 className="mb-3 text-charcoal font-normal">
                  Booking Summary
                </h4>
                <div className="space-y-2 text-sm text-gray-500">
                  <p><span className="font-normal">Service:</span> {formData.service}</p>
                  <p><span className="font-normal">Date:</span> {formData.date?.toLocaleDateString()}</p>
                  <p><span className="font-normal">Time:</span> {formData.time}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded transition-all duration-300 bg-transparent text-gray-500 border border-gray-200 font-normal hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`flex-1 py-3 rounded transition-all duration-300 font-normal ${canSubmit
                      ? 'bg-gradient-to-br from-[#C9A961] to-rose-gold text-charcoal shadow-md hover:scale-[1.02]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
