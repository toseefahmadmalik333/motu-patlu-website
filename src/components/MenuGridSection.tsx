import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import { MENU_GRID_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuGridProps {
  onOrder: (item: MenuItem) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'burgers-sandwiches', label: 'Burgers & Sandwiches', sub: ['burgers', 'sandwiches'] },
  { id: 'pizza', label: 'Pizzas & Kulhad', sub: ['pizza'] },
  { id: 'shawarma', label: 'Shawarma & Rolls', sub: ['shawarma'] },
  { id: 'sides', label: 'Sides & Shakes', sub: ['sides'] },
];

export const MenuGridSection: React.FC<MenuGridProps> = ({ onOrder }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = MENU_GRID_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    const cat = CATEGORIES.find((c) => c.id === activeCategory);
    return cat?.sub?.includes(item.subCategory || '');
  });

  return (
    <section id="menu" className="py-28 px-6 md:px-10 bg-[#0C0C0C] relative select-none">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header: Clean, Large, No Brackets */}
        <div className="text-center mb-12">
          <FadeIn delay={0} y={30}>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              Featured <span className="text-[#FF6B00]">Menu</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D7E2EA]/75 font-light mt-4 max-w-lg mx-auto">
              Prepared fresh to order in Kasur with prime ingredients, artisan brioche buns, toasted bread, and authentic melted mozzarella.
            </p>
          </FadeIn>
        </div>

        {/* Category Filter Tabs */}
        <FadeIn delay={0.15} y={20} className="mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#141416]/90 border border-white/10 max-w-2xl mx-auto backdrop-blur-md">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                    isActive ? 'text-black font-bold' : 'text-[#D7E2EA]/70 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMenuFilter"
                      className="absolute inset-0 rounded-xl bg-[#FF6B00] shadow-lg shadow-[#FF6B00]/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </motion.button>
              );
            })}
          </div>
        </FadeIn>

        {/* 3-Column Animated Grid matching Reference Image */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-3xl bg-[#131316]/90 border border-white/10 hover:border-[#FF6B00]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-[#FF6B00]/15 group relative overflow-hidden"
              >
                {/* Subtle Card Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Circular Food Plate Image at the top (exact match to reference card design!) */}
                  <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#FF6B00]/60 mb-5 shadow-lg group-hover:scale-105 transition-all duration-500 bg-[#1c1c20] relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className={`w-full h-full ${
                        item.id.includes('kulhad')
                          ? 'object-contain p-3 group-hover:scale-110'
                          : 'object-cover scale-105 group-hover:rotate-6'
                      } transition-transform duration-700`}
                    />
                  </div>

                  {/* Dish Name */}
                  <h4 className="text-lg font-black text-white text-center group-hover:text-[#FF6B00] transition-colors mb-2 tracking-tight">
                    {item.name}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-[#D7E2EA]/65 text-center font-light leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Price + Small Orange Cart Button (exact match to reference card!) */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 relative z-10">
                  <span className="font-black text-xl text-white font-mono tracking-tight">
                    <span className="text-[#FF6B00]">{item.priceDisplay}</span>
                  </span>

                  <Magnet padding={40} strength={3}>
                    <motion.button
                      type="button"
                      onClick={() => onOrder(item)}
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      className="w-10 h-10 rounded-xl bg-[#FF6B00] hover:bg-[#FF8533] flex items-center justify-center text-black shadow-lg shadow-[#FF6B00]/25 hover:shadow-xl hover:shadow-[#FF6B00]/50 transition-colors cursor-pointer group/btn"
                      aria-label={`Order ${item.name}`}
                    >
                      <ShoppingBag className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </motion.button>
                  </Magnet>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default MenuGridSection;
