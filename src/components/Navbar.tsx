import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About Us', href: '#about' },
    { label: 'Specials', href: '#specials' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo - Styled like WorldPlate in Reference */}
        <a href="#home" className="flex items-center gap-1 group">
          <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-[#FF6B00] transition-colors">
            Motu<span className="text-[#FF6B00]">Patlu</span>
          </span>
        </a>

        {/* Navigation Links with Active Pill (matches reference) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#161616]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className={`px-5 py-1.5 rounded-full text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'bg-[#FF6B00] text-black font-semibold shadow-md shadow-[#FF6B00]/30'
                    : 'text-[#D7E2EA] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </motion.a>
            );
          })}
        </nav>

        {/* Right CTA - Styled like Sign In / Register in Reference */}
        <div className="flex items-center gap-4">
          <motion.a
            href={RESTAURANT_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="text-sm font-medium text-[#FF6B00] hover:text-[#FFA133] transition-colors flex items-center gap-1.5 cursor-pointer group"
          >
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Order / WhatsApp</span>
          </motion.a>

          <motion.a
            href={`tel:${RESTAURANT_DATA.phone}`}
            whileHover={{ scale: 1.06, borderColor: '#FF6B00' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white border border-white/20 hover:border-[#FF6B00] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer group"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF6B00] group-hover:scale-110 transition-transform" />
            <span>{RESTAURANT_DATA.phoneDisplay}</span>
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
