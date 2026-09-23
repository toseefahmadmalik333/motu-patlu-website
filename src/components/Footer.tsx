import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Send, Check } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#090909] border-t border-white/10 pt-20 pb-10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Footer Grid matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand Info & Orange Social Circles (matches reference!) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="font-extrabold text-2xl tracking-tight text-white mb-3">
              Motu<span className="text-[#FF6B00]">Patlu</span>
            </span>
            <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed max-w-sm mb-6">
              At Motu Patlu Food Point &amp; Family Hall, we bring Kasur together over flame-grilled burgers, authentic shawarma, and clay-pot Kulhad Pizza in our air-conditioned family hall.
            </p>

            {/* Orange Circular Social Icons (exact match to reference circles!) */}
            <div className="flex items-center gap-2.5">
              <motion.a
                href={RESTAURANT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-9 h-9 rounded-full bg-[#FF6B00] text-black flex items-center justify-center hover:bg-[#FF8533] shadow-md hover:shadow-lg hover:shadow-[#FF6B00]/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={`tel:${RESTAURANT_DATA.phone}`}
                whileHover={{ scale: 1.15, rotate: -6 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-9 h-9 rounded-full bg-[#FF6B00] text-black flex items-center justify-center hover:bg-[#FF8533] shadow-md hover:shadow-lg hover:shadow-[#FF6B00]/40 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://maps.google.com/?q=Motu+Patlu+Food+Point+Kasur"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-9 h-9 rounded-full bg-[#FF6B00] text-black flex items-center justify-center hover:bg-[#FF8533] shadow-md hover:shadow-lg hover:shadow-[#FF6B00]/40 transition-colors"
                aria-label="Directions"
              >
                <MapPin className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Col 2: Quick Links 1 (matches reference) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#D7E2EA]/60 font-light">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Services &amp; Menu</a></li>
              <li><a href="#specials" className="hover:text-white transition-colors">Specials</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Google Maps / Directions</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links 2 / Info (matches reference) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] font-bold mb-4">
              Kasur Details
            </h4>
            <div className="space-y-2 text-xs text-[#D7E2EA]/60 font-light">
              <p className="text-white font-medium">Operating Hours</p>
              <p className="font-mono text-[#FF6B00]">3:00 PM – 2:00 AM</p>
              <p className="pt-1">Open 7 Days a Week</p>
              <p className="text-[11px] text-slate-400">Dhor Kot Road, Kasur</p>
            </div>
          </div>

          {/* Col 4: Newsletter Signup (matches reference) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] font-bold mb-2">
              Sign Up Our Newsletters
            </h4>
            <p className="text-xs text-[#D7E2EA]/60 font-light mb-4">
              Stay connected for special discounts and late-night deals in Kasur.
            </p>

            <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-2.5 rounded-lg bg-[#141416] border border-white/15 text-xs text-white placeholder-slate-500 outline-none focus:border-[#FF6B00]"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-full py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF8533] text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#FF6B00]/20 hover:shadow-lg hover:shadow-[#FF6B00]/40 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Subscribe Now</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright line matching reference */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#D7E2EA]/40 gap-3">
          <p>&copy; 2026 Motu Patlu Food Point &amp; Family Hall. All Rights Reserved.</p>
          <p>Verified 4.2★ Google Profile • Dhor Kot Road, Kasur, Punjab</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
