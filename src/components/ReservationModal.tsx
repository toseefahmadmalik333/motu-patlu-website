import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Clock, Users, MessageCircle, Phone } from 'lucide-react';
import { RESTAURANT_DATA, MenuItem } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: MenuItem | null;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialItem,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('3-4 Guests');
  const [notes, setNotes] = useState(
    initialItem ? `Order request: ${initialItem.name} (${initialItem.priceDisplay})` : ''
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*RESERVATION / ORDER - MOTU PATLU KASUR*
----------------------------------------
*Name:* ${name}
*Phone:* ${phone}
*Date:* ${date || 'Today'}
*Time:* ${time || 'Evening'}
*Guests:* ${guests}
*Notes / Items:* ${notes || 'Table Seating in Family Hall'}
----------------------------------------
Please confirm table availability. Thank you!`;

    window.open(`https://wa.me/923054000033?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#141416] border border-white/15 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          type="button"
          onClick={onClose}
          whileHover={{ scale: 1.15, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </motion.button>

        <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] block mb-1">
          Direct Booking
        </span>
        <h3 className="text-2xl font-extrabold text-white mb-2">
          Reserve Seating or Order
        </h3>
        <p className="text-xs text-slate-400 font-light mb-6">
          Dine in our dedicated air-conditioned Family Hall or order hot takeaways in Kasur.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block text-slate-300 uppercase font-mono tracking-wider mb-1">Full Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0C0C0C] border border-white/10 text-white outline-none focus:border-[#FF6B00]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 uppercase font-mono tracking-wider mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0C0C0C] border border-white/10 text-white outline-none focus:border-[#FF6B00]"
              />
            </div>
            <div>
              <label className="block text-slate-300 uppercase font-mono tracking-wider mb-1">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0C0C0C] border border-white/10 text-white outline-none focus:border-[#FF6B00]"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 uppercase font-mono tracking-wider mb-1">Seating Area</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0C0C0C] border border-white/10 text-white outline-none focus:border-[#FF6B00]"
            >
              <option value="Family Hall (Upstairs AC)">Family Hall (Upstairs Air-Conditioned)</option>
              <option value="Main Dining / Food Point">Main Dining / Food Point Area</option>
              <option value="Takeaway Fast Pickup">Takeaway Fast Pickup</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 uppercase font-mono tracking-wider mb-1">Special Notes / Items</label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Dishes to prepare, family high-chairs, birthday notes..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#0C0C0C] border border-white/10 text-white outline-none focus:border-[#FF6B00] resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-black bg-[#FF6B00] hover:bg-[#FF8533] shadow-lg shadow-[#FF6B00]/30 hover:shadow-xl hover:shadow-[#FF6B00]/50 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer mt-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send WhatsApp Confirmation</span>
          </motion.button>
        </form>

        <div className="pt-4 mt-4 border-t border-white/5 text-center text-xs text-slate-400">
          <span>Or call our Kasur front desk directly: </span>
          <a href={`tel:${RESTAURANT_DATA.phone}`} className="text-[#FF6B00] font-mono font-bold">
            {RESTAURANT_DATA.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
