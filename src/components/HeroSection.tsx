import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import { Utensils, MessageCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        {/* Upper Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Radiant Attractive Headline - Larger & Punchy */}
            <FadeIn delay={0.1} y={30}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] mb-6">
                Experience the{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA447] to-[#FF4500] underline decoration-[#FF6B00]/60 drop-shadow-[0_0_35px_rgba(255,107,0,0.55)]">
                  Taste
                </span>{' '}
                <motion.span
                  animate={{
                    rotate: [0, 10, -8, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="inline-block text-4xl sm:text-6xl align-middle select-none origin-bottom"
                >
                  🍲
                </motion.span>{' '}
                of Kasur
              </h1>
            </FadeIn>

            {/* Subtext */}
            <FadeIn delay={0.2} y={20}>
              <p className="text-base sm:text-xl text-[#D7E2EA]/80 font-light max-w-xl leading-relaxed mb-8">
                From sizzling flame-grilled brioche burgers and artisan club sandwiches to our viral clay-pot Kulhad Pizza, experience Kasur&apos;s favorite late-night dining destination &amp; dedicated air-conditioned Family Hall.
              </p>
            </FadeIn>

            {/* CTAs: Learn More + Order on WhatsApp (exact match to orange button in reference) */}
            <FadeIn delay={0.3} y={20}>
              <div className="flex flex-wrap items-center gap-4">
                <Magnet padding={80} strength={3}>
                  <motion.a
                    href="#specials"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF6B00] hover:bg-[#FF8533] text-black font-extrabold text-sm tracking-wide shadow-xl shadow-[#FF6B00]/30 hover:shadow-2xl hover:shadow-[#FF6B00]/50 transition-colors group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center transition-transform"
                    >
                      <Utensils className="w-3 h-3 text-black" />
                    </motion.div>
                    <span>Learn More</span>
                  </motion.a>
                </Magnet>

                <Magnet padding={80} strength={3}>
                  <motion.a
                    href={RESTAURANT_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#161618] hover:bg-[#1E1E22] border border-white/15 hover:border-[#FF6B00] text-white hover:text-[#FF6B00] font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-[#FF6B00]/20 transition-colors cursor-pointer group"
                  >
                    <MessageCircle className="w-4 h-4 text-[#FF6B00] group-hover:scale-110 transition-transform" />
                    <span>Order / WhatsApp</span>
                  </motion.a>
                </Magnet>
              </div>
            </FadeIn>
          </div>

          {/* Right Hero Image (Clean Cutout Burger with Magnet Effect matching Reference) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <FadeIn delay={0.3} y={30} className="w-full flex justify-center">
              <Magnet padding={150} strength={4} className="relative z-10">
                <div className="relative w-[300px] sm:w-[420px] md:w-[480px] aspect-square flex items-center justify-center">
                  
                  {/* Subtle Warm Radial Glow Behind Burger */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#FF6B00]/25 via-[#FFA030]/15 to-transparent blur-3xl pointer-events-none" />

                  {/* Clean Cutout Burger Image (from media_1790146913629.png) */}
                  <motion.div
                    animate={{
                      y: [-8, 8, -8],
                      rotate: [-1.5, 1.5, -1.5],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative w-full h-full flex items-center justify-center select-none"
                  >
                    <img
                      src="/images/hero_burger.png"
                      alt="Kasuri Gourmet Flame Burger"
                      className="w-full h-full object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.85)] filter hover:scale-105 transition-transform duration-500 cursor-pointer"
                      draggable={false}
                    />
                  </motion.div>

                </div>
              </Magnet>
            </FadeIn>
          </div>
        </div>

        {/* Lower Floating Offer Card (EXACT RECREATION OF THE WHITE CARD WITH 2 CIRCULAR CUTOUTS IN REFERENCE) */}
        <FadeIn delay={0.4} y={30} className="mt-16 sm:mt-20">
          <div className="relative max-w-2xl mx-auto group">
            {/* Top Cutout Circle */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0C0C0C] z-20 border-b border-black/10" />
            {/* Bottom Cutout Circle */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0C0C0C] z-20 border-t border-black/10" />

            <div className="bg-white text-[#0C0C0C] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
              
              {/* Left Side: Text + Avatars */}
              <div className="flex flex-col items-start">
                <h3 className="text-xl sm:text-2xl font-black text-[#0C0C0C] leading-snug mb-3 tracking-tight">
                  Great food and lots <br className="hidden sm:inline" />
                  of discounted prices
                </h3>

                {/* Overlapping Avatars + 40+ badge */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                      alt="Customer"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                      alt="Customer"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=80&q=80"
                      alt="Customer"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                    <div className="w-8 h-8 rounded-full bg-[#FF6B00] text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                      40+
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  People grabbed the offer today
                </span>
              </div>

              {/* Right Side: 50% Offer + Round Food Plate Breaking Out */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <span className="block text-3xl sm:text-5xl font-black text-[#0C0C0C] leading-none tracking-tight">
                    50%
                  </span>
                  <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider block mt-1">
                    offer on Now
                  </span>
                </div>

                <motion.div
                  whileHover={{ rotate: 180, scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl shrink-0 cursor-pointer bg-[#141416] p-1 flex items-center justify-center"
                >
                  <img
                    src="/images/kulhad_pizza.png"
                    alt="Special Offer Kulhad Pizza"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
