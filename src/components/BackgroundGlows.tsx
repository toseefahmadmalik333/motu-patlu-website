import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGlows: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Hero Glow (Top Left - Brand Orange) */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#FF6B00]/18 via-[#FF8533]/10 to-transparent blur-[140px] will-change-transform"
      />

      {/* 2. Hero Dish Backlight (Top Right - Warm Amber) */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-20 right-0 sm:right-10 w-[450px] h-[450px] rounded-full bg-[#FFA040]/12 blur-[130px] will-change-transform"
      />

      {/* 3. Middle Glow (Center - Behind Stacking Best Delivered Section) */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-20, 20, -20],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#FF6B00]/10 blur-[180px] will-change-transform"
      />

      {/* 4. Menu & Reviews Glow (Left Side - Deep Flame) */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute top-[65%] -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FF5500]/12 to-[#FF8533]/5 blur-[160px] will-change-transform"
      />

      {/* 5. Map & Footer Glow (Bottom Right - Golden Ember) */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-32 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-[#FF6B00]/15 via-[#FFAA33]/8 to-transparent blur-[160px] will-change-transform"
      />

      {/* 6. Subtle Floating Blurred Bokeh Elements */}
      <motion.div
        animate={{
          y: [-10, 25, -10],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[25%] left-[20%] w-24 h-24 rounded-full bg-[#FF6B00]/25 blur-3xl"
      />

      <motion.div
        animate={{
          y: [20, -15, 20],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute top-[55%] right-[25%] w-32 h-32 rounded-full bg-[#FFAA33]/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [-15, 20, -15],
          opacity: [0.1, 0.35, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5,
        }}
        className="absolute top-[80%] left-[45%] w-28 h-28 rounded-full bg-[#FF5500]/20 blur-3xl"
      />
    </div>
  );
};

export default BackgroundGlows;
