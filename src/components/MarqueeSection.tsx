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
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Triple-Decker Club Sandwich',
    tag: 'Golden Toasted Bread & Egg',
    src: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Kasur Live Kitchen Counter',
    tag: 'Dhor Kot Road Preparation',
    src: '/images/real_kitchen_kasur.jpg',
  },
  {
    name: 'Zinger Crunch Master',
    tag: 'Crispy Fried Fillet & Aioli',
    src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Chicken Shawarma Platter',
    tag: 'Spit-Roasted & Garlic Toum',
    src: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Kasuri Stone-Baked Pizza',
    tag: 'Gooey Mozzarella Melt',
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Loaded Cheesy Lava Fries',
    tag: 'Crispy Crinkle Cut & Sauce',
    src: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dedicated AC Family Hall',
    tag: 'Upstairs Private Seating',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Thick Belgian Chocolate Shake',
    tag: 'Chilled Sweet Blend',
    src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
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
