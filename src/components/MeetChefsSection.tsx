import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import AnimatedText from './AnimatedText';
import { Calendar, Phone } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface MeetChefsProps {
  onReserve: () => void;
}

export const MeetChefsSection: React.FC<MeetChefsProps> = ({ onReserve }) => {
  const chefStoryText =
    "Our expert grill masters bring genuine Kasuri heritage, skill, and temperature discipline to every flame-seared patty and clay-pot pizza, ensuring an unforgettable dining experience for you and your family on Dhor Kot Road.";

  return (
    <section id="about" className="py-28 px-6 md:px-10 bg-[#0C0C0C] relative select-none">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Heading: Clean, Large, No Brackets */}
        <div className="text-center mb-16">
          <FadeIn delay={0} y={30}>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              Meet Our <span className="text-[#FF6B00]">Chefs</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D7E2EA]/75 font-light mt-4 max-w-md mx-auto">
              Behind every hot dish at Motu Patlu Food Point is our dedicated kitchen team and comfortable family hall in Kasur.
            </p>
          </FadeIn>
        </div>

        {/* Large Rounded Card matching Reference (Chef on Left, Text & Button on Right) */}
        <FadeIn delay={0.2} y={30}>
          <div className="rounded-[40px] md:rounded-[50px] border border-white/10 hover:border-[#FF6B00]/40 bg-[#131316]/90 backdrop-blur-2xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-2xl transition-colors duration-300">
            {/* Left: Chef / Kitchen Visual */}
            <div className="w-full md:w-5/12 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-black group">
                <img
                  src="/images/real_kitchen_kasur.jpg"
                  alt="Authentic Live Kitchen at Motu Patlu Food Point Kasur"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[11px] font-mono text-[#FF6B00] uppercase tracking-wider block font-bold">
                    Kasur Main Kitchen
                  </span>
                  <strong className="text-base font-black text-white block tracking-tight">
                    Live Flame Griddle &amp; Prep
                  </strong>
                </div>
              </div>
            </div>

            {/* Right: Content matching Reference */}
            <div className="w-full md:w-7/12 flex flex-col items-start">
              <span className="text-xs font-mono text-[#FF6B00] uppercase tracking-widest font-semibold mb-3 block">
                Dedicated Family Hospitality
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug mb-4 tracking-tight">
                Passion, Heritage &amp; Air-Conditioned Hall
              </h3>

              {/* Character-by-character scroll-driven text reveal */}
              <div className="mb-6">
                <AnimatedText
                  text={chefStoryText}
                  className="text-sm sm:text-base text-[#D7E2EA]/85 font-light leading-relaxed max-w-xl"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-8">
                In addition to our dynamic fast food kitchen on the ground floor, we take great pride in our dedicated upstairs <strong className="text-white">air-conditioned Family Dining Hall</strong>, designed to give ladies, children, and celebrations a peaceful, cool sanctuary.
              </p>

              {/* Action Buttons with Magnet Effect */}
              <div className="flex flex-wrap items-center gap-4">
                <Magnet padding={50} strength={3}>
                  <motion.button
                    type="button"
                    onClick={onReserve}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#FF6B00]/25 hover:shadow-xl hover:shadow-[#FF6B00]/50 transition-colors cursor-pointer group"
                  >
                    <Calendar className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
                    <span>Reserve Family Hall</span>
                  </motion.button>
                </Magnet>

                <Magnet padding={50} strength={3}>
                  <motion.a
                    href={`tel:${RESTAURANT_DATA.phone}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-[#FF6B00] text-white hover:text-[#FF6B00] text-xs font-mono shadow-md hover:shadow-lg hover:shadow-[#FF6B00]/20 transition-colors cursor-pointer group"
                  >
                    <Phone className="w-4 h-4 text-[#FF6B00] group-hover:scale-110 transition-transform" />
                    <span>{RESTAURANT_DATA.phoneDisplay}</span>
                  </motion.a>
                </Magnet>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default MeetChefsSection;
