import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Clock, MessageCircle } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const LocationMapSection: React.FC = () => {
  return (
    <section id="location" className="py-28 px-6 md:px-10 bg-[#0C0C0C] relative select-none overflow-hidden">
      {/* Blurred Background Glow Elements */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#FF6B00]/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#FF8533]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Heading: Clean, Large, No Brackets */}
        <div className="text-center mb-16">
          <FadeIn delay={0} y={30}>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              Find Us <span className="text-[#FF6B00]">In Kasur</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D7E2EA]/75 font-light mt-4 max-w-md mx-auto">
              Visit Motu Patlu Food Point &amp; Family Hall on Dhor Kot Road, Main Bazar, Kasur. Open 7 days a week till 2:00 AM.
            </p>
          </FadeIn>
        </div>

        {/* Map & Info Card */}
        <FadeIn delay={0.2} y={30}>
          <div className="rounded-[40px] md:rounded-[50px] border border-white/10 hover:border-[#FF6B00]/40 bg-[#131316]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row gap-8 items-stretch transition-colors duration-300">
            
            {/* Left Info Panel */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] font-bold mb-2 block">
                  Kasur Fast Food Destination
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 tracking-tight">
                  Motu Patlu Food Point &amp; Family Hall
                </h3>

                {/* Details List */}
                <div className="space-y-5 text-xs sm:text-sm text-[#D7E2EA]/85 font-light mb-8">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 text-[#FF6B00]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block font-semibold text-sm">Physical Address</strong>
                      <p className="text-slate-300 mt-0.5 leading-relaxed">
                        {RESTAURANT_DATA.address}
                      </p>
                      <span className="text-[11px] font-mono text-[#FF6B00] block mt-1">
                        GPS Coordinates: 31.1156° N, 74.4503° E
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 text-[#FF6B00]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block font-semibold text-sm">Hours of Operation</strong>
                      <p className="font-mono text-[#FF6B00] mt-0.5 font-bold text-sm">
                        {RESTAURANT_DATA.hours} PKT
                      </p>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Open 7 Days a Week • Late-Night Dining
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 text-[#FF6B00]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block font-semibold text-sm">Telephone &amp; Delivery Orders</strong>
                      <a
                        href={`tel:${RESTAURANT_DATA.phone}`}
                        className="font-mono font-bold text-white hover:text-[#FF6B00] transition-colors block mt-0.5 text-sm"
                      >
                        {RESTAURANT_DATA.phone} ({RESTAURANT_DATA.phoneDisplay})
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
                <Magnet padding={50} strength={3}>
                  <motion.a
                    href="https://maps.google.com/?q=Motu+Patlu+Food+Point+Kasur"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-black font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#FF6B00]/30 hover:shadow-2xl hover:shadow-[#FF6B00]/50 transition-colors text-center cursor-pointer group"
                  >
                    <Navigation className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Get Directions</span>
                  </motion.a>
                </Magnet>

                <Magnet padding={50} strength={3}>
                  <motion.a
                    href={RESTAURANT_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-[#FF6B00] text-white hover:text-[#FF6B00] text-xs font-mono shadow-md hover:shadow-lg hover:shadow-[#FF6B00]/20 transition-colors text-center cursor-pointer group"
                  >
                    <MessageCircle className="w-4 h-4 text-[#FF6B00] group-hover:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </motion.a>
                </Magnet>
              </div>
            </div>

            {/* Right Map Embed Frame */}
            <div className="w-full lg:w-7/12 min-h-[420px] lg:min-h-[480px] h-[420px] lg:h-auto rounded-3xl overflow-hidden border border-white/15 relative bg-[#141416]">
              <iframe
                title="Google Maps Location for Motu Patlu Food Point & Family Hall Kasur"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s31.1156,74.4503!6i15!3m1!1sen!5m1!1sen"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen={true}
              />

              {/* Map Floating Location Pin Label */}
              <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-[#FF6B00]/50 px-4 py-2.5 rounded-2xl shadow-2xl pointer-events-none flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF6B00] text-black flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-white block">
                    Motu Patlu Food Point
                  </strong>
                  <span className="text-[10px] text-slate-300 font-mono block">
                    Dhor Kot Road, Kasur
                  </span>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LocationMapSection;
