import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import BestDeliveredSection from './components/BestDeliveredSection';
import MenuGridSection from './components/MenuGridSection';
import ReviewsSection from './components/ReviewsSection';
import MeetChefsSection from './components/MeetChefsSection';
import LocationMapSection from './components/LocationMapSection';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import BackgroundGlows from './components/BackgroundGlows';
import { MenuItem } from './data/restaurantData';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleOrder = (item: MenuItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleOpenReserve = () => {
    setSelectedItem(null);
    setModalOpen(true);
  };

  return (
    <div
      style={{ overflowX: 'clip' }}
      className="bg-[#0C0C0C] text-[#D7E2EA] font-sans min-h-screen selection:bg-[#FF6B00] selection:text-black relative"
    >
      {/* Dynamic Blurred Background Ambient Elements & Glows */}
      <BackgroundGlows />

      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="relative z-10">
        {/* 2. Hero Section with Floating 50% Promo Card */}
        <HeroSection />

        {/* 3. Marquee Section */}
        <MarqueeSection />

        {/* 4. Our Best Delivered Stacking Cards Section */}
        <BestDeliveredSection onOrder={handleOrder} />

        {/* 5. Featured Menu Grid */}
        <MenuGridSection onOrder={handleOrder} />

        {/* 6. What They Say? Reviews Section */}
        <ReviewsSection />

        {/* 7. Meet Our Chefs & Family Hall */}
        <MeetChefsSection onReserve={handleOpenReserve} />

        {/* 8. Google Maps & Direct Navigation */}
        <LocationMapSection />
      </main>

      {/* 9. Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Reservation & Quick Order Modal */}
      <ReservationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialItem={selectedItem}
      />
    </div>
  );
};

export default App;
