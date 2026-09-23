import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, Flame, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import { BEST_DELIVERED_ITEMS, MenuItem } from '../data/restaurantData';

interface CardProps {
  item: MenuItem;
  index: number;
  totalCards: number;
  progress: any;
  range: [number, number];
  targetScale: number;
  onOrder: (item: MenuItem) => void;
}

const DeliveredCard: React.FC<CardProps> = ({
  item,
  index,
  totalCards,
  progress,
  range,
  targetScale,
  onOrder,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[80vh] min-h-[580px] flex items-center justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 26}px)`,
        }}
        className="relative w-full max-w-4xl rounded-[40px] md:rounded-[55px] border border-white/15 hover:border-[#FF6B00]/40 bg-[#121214]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-black flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 transition-colors duration-300 group"
      >
        {/* Left: Food Visual breaking out of the container (exact match to reference image!) */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-[240px] sm:w-[320px] md:w-[380px] aspect-square rounded-full flex items-center justify-center">
            {/* Background plate glow */}
            <div className="absolute inset-0 rounded-full bg-[#FF6B00]/25 blur-3xl pointer-events-none group-hover:bg-[#FF6B00]/40 transition-all duration-500" />

            {/* Circular/Angled Plated Food Image matching Reference */}
            <motion.div
              whileHover={{ scale: 1.06, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-2xl cursor-pointer bg-[#161619] flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className={`w-full h-full select-none ${
                  item.id === 'kulhad-pizza'
                    ? 'object-contain p-2 sm:p-4 drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]'
                    : 'object-cover scale-105'
                }`}
              />
            </motion.div>
          </div>
        </div>

        {/* Right: Content details matching Reference Layout */}
        <div className="w-full md:w-1/2 flex flex-col items-start z-10">
          <span className="text-xs font-mono text-[#FF6B00] uppercase tracking-widest font-semibold mb-2 block">
            {item.category}
          </span>

          <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-4 tracking-tight">
            {item.name}
          </h3>

          <p className="text-sm sm:text-base text-[#D7E2EA]/85 font-light leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Price matching reference: e.g. "$99/-" / "Rs. 300/-" */}
          <div className="font-black text-2xl sm:text-4xl text-white tracking-tight mb-6">
            <span className="text-[#FF6B00]">{item.priceDisplay}</span>
          </div>

          {/* Action Row matching Reference: Orange "Order Now" pill + Orange square bag icon */}
          <div className="flex items-center gap-3">
            <Magnet padding={60} strength={3}>
              <motion.button
                type="button"
                onClick={() => onOrder(item)}
                whileHover={{ scale: 1.07, y: -2 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-black font-extrabold text-sm tracking-wide shadow-xl shadow-[#FF6B00]/30 hover:shadow-2xl hover:shadow-[#FF6B00]/50 transition-colors cursor-pointer"
              >
                Order Now
              </motion.button>
            </Magnet>

            <Magnet padding={60} strength={3}>
              <motion.button
                type="button"
                onClick={() => onOrder(item)}
                whileHover={{ scale: 1.12, rotate: 6 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-12 h-12 rounded-2xl bg-[#FF6B00] hover:bg-[#FF8533] flex items-center justify-center text-black shadow-xl shadow-[#FF6B00]/30 hover:shadow-2xl hover:shadow-[#FF6B00]/50 transition-colors cursor-pointer group"
                aria-label="Add to cart"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>
            </Magnet>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const BestDeliveredSection: React.FC<{ onOrder: (item: MenuItem) => void }> = ({ onOrder }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="specials"
      ref={containerRef}
      className="relative pt-28 pb-36 px-6 md:px-10 bg-[#0C0C0C] select-none"
    >
      {/* Giant Circular Background Plate Glow (EXACT RECREATION OF THE CIRCULAR PLATE BACKDROP IN REFERENCE) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none blur-[1px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#FF6B00]/8 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Heading: Clean, Large, No Brackets */}
        <div className="text-center mb-16">
          <FadeIn delay={0} y={30}>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              Our Best <span className="text-[#FF6B00]">Delivered</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D7E2EA]/75 font-light mt-4 max-w-md mx-auto">
              Kasur&apos;s signature culinary masterpieces, freshly prepared and packaged in heat-sealed containers for fast pickup and delivery.
            </p>
          </FadeIn>
        </div>

        {/* Stacking Cards */}
        <div className="relative">
          {BEST_DELIVERED_ITEMS.map((item, index) => {
            const targetScale = 1 - (BEST_DELIVERED_ITEMS.length - 1 - index) * 0.03;
            return (
              <DeliveredCard
                key={item.id}
                item={item}
                index={index}
                totalCards={BEST_DELIVERED_ITEMS.length}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
                onOrder={onOrder}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestDeliveredSection;
