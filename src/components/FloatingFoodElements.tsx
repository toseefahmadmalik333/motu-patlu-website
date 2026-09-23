import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const FloatingFoodElements: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax
  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 35;
      const y = (e.clientY / innerHeight - 0.5) * 35;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-1 select-none">
      
      {/* 1. FLOATING GOURMET BURGER (Top Right - Near Hero / Transition) */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-[18%] right-[4%] md:right-[7%] z-0"
      >
        <motion.div
          animate={{
            y: [-14, 14, -14],
            rotate: [-6, 8, -6],
            scale: [0.96, 1.03, 0.96],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative group"
        >
          {/* Subtle Orange Aura Glow Behind Burger */}
          <div className="absolute inset-0 bg-[#FF6B00]/25 rounded-full blur-2xl transform scale-110" />

          {/* Burger Cutout Container */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-sm bg-black/40">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80"
              alt="Gourmet Burger Floating"
              className="w-full h-full object-cover scale-110"
              draggable={false}
            />
          </div>

          {/* Floating Pill Tag */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-3 -right-2 bg-black/85 backdrop-blur-md border border-[#FF6B00]/40 px-2.5 py-1 rounded-full text-[10px] font-mono text-white flex items-center gap-1 shadow-lg"
          >
            <span>🍔</span>
            <span className="text-[#FF6B00] font-bold">Flame Burger</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 2. FLOATING CLUB SANDWICH (Mid Left - Near Marquee / Stacking Cards) */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute top-[42%] left-[3%] md:left-[5%] z-0"
      >
        <motion.div
          animate={{
            y: [16, -16, 16],
            rotate: [8, -7, 8],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="relative"
        >
          {/* Warm Amber Halo */}
          <div className="absolute inset-0 bg-[#FFA040]/20 rounded-full blur-2xl transform scale-110" />

          {/* Sandwich Cutout Container */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-sm bg-black/40">
            <img
              src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80"
              alt="Toasted Club Sandwich"
              className="w-full h-full object-cover scale-110"
              draggable={false}
            />
          </div>

          {/* Floating Pill Tag */}
          <div className="absolute -top-3 -left-2 bg-black/85 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full text-[10px] font-mono text-white flex items-center gap-1 shadow-lg">
            <span>🥪</span>
            <span className="text-amber-400 font-bold">Club Sandwich</span>
          </div>
        </motion.div>
      </motion.div>

      {/* 3. FLOATING KULHAD CLAY PIZZA (Mid Right - Beside Menu Grid) */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-[62%] right-[3%] md:right-[6%] z-0"
      >
        <motion.div
          animate={{
            y: [-12, 14, -12],
            rotate: [-5, 6, -5],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="relative"
        >
          {/* Flame Glow */}
          <div className="absolute inset-0 bg-[#FF6B00]/25 rounded-full blur-2xl transform scale-110" />

          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#FF6B00]/50 shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-sm bg-black/40">
            <img
              src="/images/kulhad_pizza_real.jpg"
              alt="Kasuri Kulhad Pizza"
              className="w-full h-full object-cover scale-110"
              draggable={false}
            />
          </div>

          <div className="absolute -bottom-2 -left-3 bg-black/90 backdrop-blur-md border border-[#FF6B00]/50 px-2.5 py-1 rounded-full text-[10px] font-mono text-[#FF6B00] font-bold shadow-lg flex items-center gap-1">
            <span>🍕</span>
            <span>Kulhad Clay</span>
          </div>
        </motion.div>
      </motion.div>

      {/* 4. FLOATING GOLDEN CRISPY FRIES (Lower Left - Beside Reviews / Chefs) */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-[78%] left-[4%] md:left-[7%] z-0"
      >
        <motion.div
          animate={{
            y: [12, -14, 12],
            rotate: [-6, 6, -6],
            scale: [0.95, 1.02, 0.95],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#FFB020]/20 rounded-full blur-2xl transform scale-110" />

          <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-sm bg-black/40">
            <img
              src="https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=300&q=80"
              alt="Crispy Golden Fries"
              className="w-full h-full object-cover scale-110"
              draggable={false}
            />
          </div>

          <div className="absolute -bottom-2 -right-2 bg-black/85 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full text-[10px] font-mono text-yellow-400 font-bold shadow-lg flex items-center gap-1">
            <span>🍟</span>
            <span>Cheesy Fries</span>
          </div>
        </motion.div>
      </motion.div>

      {/* 5. FLOATING SPICE & CULINARY CHIPS (Scattered Across Viewport) */}
      <motion.div
        animate={{
          y: [-18, 18, -18],
          rotate: [0, 15, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex items-center gap-1.5 absolute top-[28%] left-[12%] bg-black/60 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] font-mono text-slate-300"
      >
        <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
        <span>100% Halal Fresh Beef &amp; Chicken</span>
      </motion.div>

      <motion.div
        animate={{
          y: [15, -15, 15],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="hidden lg:flex items-center gap-1.5 absolute top-[52%] right-[10%] bg-black/60 border border-[#FF6B00]/30 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] font-mono text-[#FF6B00]"
      >
        <span>🔥</span>
        <span>Late Night Grill till 2:00 AM</span>
      </motion.div>

      <motion.div
        animate={{
          y: [-12, 14, -12],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="hidden lg:flex items-center gap-1.5 absolute top-[88%] right-[14%] bg-black/60 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] font-mono text-slate-300"
      >
        <span>👨‍🍳</span>
        <span>Family Hall Dining Upstairs</span>
      </motion.div>

      {/* 6. GLOWING AMBIENT EMBER PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -120, -240],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              opacity: [0, 0.8, 0],
              scale: [0.6, 1.2, 0.4],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: 'easeOut',
              delay: i * 1.2,
            }}
            style={{
              left: `${15 + i * 14}%`,
              bottom: `${10 + (i % 3) * 20}%`,
            }}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-t from-[#FF6B00] to-yellow-400 blur-[1px] shadow-[0_0_8px_#FF6B00]"
          />
        ))}
      </div>

    </div>
  );
};

export default FloatingFoodElements;
