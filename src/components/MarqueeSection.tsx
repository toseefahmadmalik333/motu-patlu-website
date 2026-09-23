import React, { useRef, useState, useEffect } from 'react';
import { Flame, Sparkles } from 'lucide-react';

const MARQUEE_DISHES = [
  {
    name: 'Kasuri Kulhad Pizza',
    tag: 'Baked in Terracotta Clay Pot',
    src: '/images/kulhad_pizza.png',
  },
  {
    name: 'Royal Kasuri Flame Burger',
    tag: 'Double Flame-Grilled Patty',
    src: '/images/food/flame-burger.jpg',
  },
  {
    name: 'Triple-Decker Club Sandwich',
    tag: 'Golden Toasted Bread & Egg',
    src: '/images/food/club-sandwich.jpg',
  },
  {
    name: 'Kasur Live Kitchen Counter',
    tag: 'Dhor Kot Road Preparation',
    src: '/images/real_kitchen_kasur.jpg',
  },
  {
    name: 'Zinger Crunch Master',
    tag: 'Crispy Fried Fillet & Aioli',
    src: '/images/food/zinger-master.jpg',
  },
  {
    name: 'Chicken Shawarma Platter',
    tag: 'Spit-Roasted & Garlic Toum',
    src: '/images/food/shawarma-platter.jpg',
  },
  {
    name: 'Kasuri Stone-Baked Pizza',
    tag: 'Gooey Mozzarella Melt',
    src: '/images/food/supreme-pizza.jpg',
  },
  {
    name: 'Loaded Cheesy Lava Fries',
    tag: 'Crispy Crinkle Cut & Sauce',
    src: '/images/food/loaded-fries.jpg',
  },
  {
    name: 'Dedicated AC Family Hall',
    tag: 'Upstairs Private Seating',
    src: '/images/food/family-hall.jpg',
  },
  {
    name: 'Thick Belgian Chocolate Shake',
    tag: 'Chilled Sweet Blend',
    src: '/images/food/chocolate-shake.jpg',
  },
];

const ROW_1 = [...MARQUEE_DISHES, ...MARQUEE_DISHES, ...MARQUEE_DISHES];
const ROW_2 = [...MARQUEE_DISHES.slice().reverse(), ...MARQUEE_DISHES.slice().reverse(), ...MARQUEE_DISHES.slice().reverse()];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] py-16 overflow-hidden select-none border-t border-b border-white/5 relative"
    >
      <div className="flex flex-col gap-4">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          style={{
            transform: `translate3d(${offset - 200}px, 0, 0)`,
            willChange: 'transform',
          }}
          className="flex gap-4 w-max"
        >
          {ROW_1.map((dish, index) => (
            <div
              key={`row1-${index}`}
              className="w-[360px] sm:w-[420px] h-[230px] sm:h-[270px] rounded-3xl overflow-hidden shrink-0 bg-[#161616] border border-white/10 hover:border-[#FF6B00]/50 relative group transition-all duration-300 shadow-xl"
            >
              <img
                src={dish.src}
                alt={dish.name}
                loading="lazy"
                className="w-full h-full object-cover rounded-3xl group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider block font-bold mb-1">
                  {dish.tag}
                </span>
                <strong className="text-lg text-white font-black tracking-tight">
                  {dish.name}
                </strong>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          style={{
            transform: `translate3d(${-(offset - 200)}px, 0, 0)`,
            willChange: 'transform',
          }}
          className="flex gap-4 w-max"
        >
          {ROW_2.map((dish, index) => (
            <div
              key={`row2-${index}`}
              className="w-[360px] sm:w-[420px] h-[230px] sm:h-[270px] rounded-3xl overflow-hidden shrink-0 bg-[#161616] border border-white/10 hover:border-[#FF6B00]/50 relative group transition-all duration-300 shadow-xl"
            >
              <img
                src={dish.src}
                alt={dish.name}
                loading="lazy"
                className="w-full h-full object-cover rounded-3xl group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider block font-bold mb-1">
                  {dish.tag}
                </span>
                <strong className="text-lg text-white font-black tracking-tight">
                  {dish.name}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
