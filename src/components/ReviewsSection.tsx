import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { REVIEWS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-28 px-6 md:px-10 bg-[#0C0C0C] relative overflow-hidden select-none">
      {/* Dynamic Bursting Flame Graphic Backdrop (matches reference image flame element!) */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#FF6B00]/20 via-[#FF8533]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Heading: Clean, Large, No Brackets */}
        <div className="text-center mb-16">
          <FadeIn delay={0} y={30}>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              What They <span className="text-[#FF6B00]">Say?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D7E2EA]/75 font-light mt-4 max-w-md mx-auto">
              Real community feedback from families and food lovers who regularly dine at Motu Patlu Food Point Kasur.
            </p>
          </FadeIn>
        </div>

        {/* 3 Review Cards matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review, index) => (
            <FadeIn
              key={review.id}
              delay={index * 0.12}
              y={30}
              className="rounded-3xl bg-[#131316]/90 border border-white/10 hover:border-[#FF6B00]/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-[#FF6B00]/10 group relative"
            >
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-[#FF6B00]/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div className="relative z-10">
                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#FF6B00]/30 shadow-md"
                  />
                  <div>
                    <h4 className="text-sm font-black text-white leading-tight tracking-tight">
                      {review.name}
                    </h4>
                    {/* 5 Stars matching Reference */}
                    <div className="flex text-[#FF6B00] gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text matching Reference Style */}
                <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed italic mt-2">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#FF6B00]/80 relative z-10">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FF6B00]" /> Verified Google Review
                </span>
                <span className="text-slate-400">Kasur Diner</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
