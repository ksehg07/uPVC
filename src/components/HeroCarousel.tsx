'use client';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: 'Casement', type: 'uPVC', color: 'bg-white' },
  { id: 2, name: 'Sliding', type: 'Aluminum', color: 'bg-green-50' },
  { id: 3, name: 'Tilt & Turn', type: 'uPVC', color: 'bg-white' },
  { id: 4, name: 'Bi-Fold', type: 'Aluminum', color: 'bg-green-50' },
  { id: 5, name: 'Villa', type: 'uPVC', color: 'bg-white' },
  { id: 6, name: 'Lift & Slide', type: 'Aluminum', color: 'bg-green-50' },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive: Show 1 on mobile, 3 on desktop
  const getItemsPerScreen = () => (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3);
  
  // Animation Logic
  useEffect(() => {
    const ctx = gsap.context(() => {
      const itemsPerScreen = getItemsPerScreen();
      const percent = -(100 / itemsPerScreen) * index;
      
      gsap.to('.carousel-track', {
        xPercent: percent,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, [index]);

  // Auto Play Logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
        handleNext(false); 
    }, 3000);
    return () => clearInterval(interval);
  }, [index, isAutoPlaying]);

  const handleNext = (manual = true) => {
    if (manual) setIsAutoPlaying(false);
    const itemsPerScreen = getItemsPerScreen();
    const maxIndex = products.length - itemsPerScreen;
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    const itemsPerScreen = getItemsPerScreen();
    const maxIndex = products.length - itemsPerScreen;
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="h-[85vh] w-full flex flex-col justify-center items-center pt-20 overflow-hidden relative" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-white z-0" />
      
      <div className="z-10 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-gray-900">
          Precision in <span className="text-green-600">Motion</span>
        </h1>
        <p className="text-gray-600">Engineering Excellence in Aluminum & uPVC</p>
      </div>

      {/* Buttons */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 left-4 z-20"
        onMouseEnter={() => setIsAutoPlaying(false)}
      >
        <button onClick={handlePrev} className="p-3 rounded-full bg-white/70 border border-green-200 text-gray-900 hover:bg-green-600 hover:text-white transition">
          <ChevronLeft size={32} />
        </button>
      </div>
      <div 
        className="absolute top-1/2 -translate-y-1/2 right-4 z-20"
        onMouseEnter={() => setIsAutoPlaying(false)}
      >
        <button onClick={() => handleNext(true)} className="p-3 rounded-full bg-white/70 border border-green-200 text-gray-900 hover:bg-green-600 hover:text-white transition">
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Track */}
      <div className="w-full px-4 md:px-12 overflow-hidden">
        <div className="carousel-track flex w-full">
          {products.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-full md:w-1/3 p-4">
               <div className={`h-[40vh] ${item.color} rounded-2xl border border-green-100 p-6 flex flex-col justify-end relative overflow-hidden group hover:border-green-500/50 transition duration-300 shadow-lg`}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-dashed border-green-200 group-hover:border-green-500/30 transition duration-500 rounded"></div>
                  <div className="z-10">
                    <span className="text-green-600 text-[10px] font-bold uppercase tracking-widest">{item.type}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{item.name}</h3>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}