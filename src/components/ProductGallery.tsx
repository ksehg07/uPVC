'use client';
import { useState, useEffect } from 'react'; // Added useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import ContactForm from './ContactForm';

// 1. UPDATED DATA STRUCTURE
// We need to know which colors are available and their corresponding image paths
export type ProductImage = {
  id: number;
  category: string;
  title: string;
  src: string; // Default image
  description: string;
  specs?: string[];
  // New: Color Options
  colors?: {
    name: string;
    class: string; // Tailwind class for the circle (e.g., 'bg-gray-900')
    imageSrc: string; // The image showing the product in this color
  }[];
};

interface GalleryProps {
  title: string;
  description: string;
  categories: string[];
  images: ProductImage[];
}

export default function ProductGallery({ title, description, categories, images }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  
  // New State for the currently displayed image inside the modal
  // This allows us to swap the image when a color is clicked without changing the base product
  const [activeModalImage, setActiveModalImage] = useState<string>('');

  // Reset active image when opening a new product
  useEffect(() => {
    if (selectedImage) {
        setActiveModalImage(selectedImage.src);
    }
  }, [selectedImage]);

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-25 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filters (Unchanged) */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            {title} <span className="text-sky-600">Collection</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base font-medium
                ${activeCategory === cat 
                  ? 'bg-sky-600 text-white border-sky-600 font-bold' 
                  : 'bg-transparent text-gray-700 border-gray-300 hover:border-gray-400 hover:text-gray-900'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Unchanged) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="group relative h-80 rounded-2xl overflow-hidden border border-sky-200 bg-white cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <Image 
                  src={img.src}
                  alt={img.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <ZoomIn className="text-sky-400 mb-2" size={32} />
                  <h3 className="text-xl font-bold text-white">{img.title}</h3>
                  <p className="text-sky-300 text-sm uppercase tracking-wider">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MODAL SECTION */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-gray-300 hover:text-sky-500 transition z-50"
              >
                <X size={40} />
              </button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 2. Main Image Container */}
                <div className="h-[50vh] md:h-[65vh] bg-gray-100 flex items-center justify-center relative p-4 group overflow-hidden">
                  
                  {/* SMOOTH TRANSITION IMAGE */}
                  <AnimatePresence mode="wait">
                    <motion.div
                        key={activeModalImage} // Key change triggers animation
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full"
                    >
                        <Image 
                            src={activeModalImage || selectedImage.src}
                            alt={selectedImage.title}
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* 3. OVERLAPPING CONTROLS (Colors + Specs) */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col md:flex-row gap-6 justify-between items-end">
                    
                    {/* A. Specs Strip (Left Side) */}
                    {selectedImage.specs && selectedImage.specs.length > 0 && (
                        <div>
                            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider bg-white/80 inline-block px-2 py-1 rounded backdrop-blur">
                                Tech Specs
                            </p>
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                {selectedImage.specs.map((spec, idx) => (
                                    <div 
                                        key={idx} 
                                        className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 bg-white rounded-xl border-2 border-white shadow-lg overflow-hidden cursor-pointer hover:border-sky-500 transition-colors"
                                    >
                                        <Image src={spec} alt={`Spec ${idx}`} fill className="object-cover p-1" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* B. Color Swatches (Right Side) */}
                    {selectedImage.colors && selectedImage.colors.length > 0 && (
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-xl">
                            <p className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">
                                Select Finish
                            </p>
                            <div className="flex gap-3">
                                {selectedImage.colors.map((color) => {
                                    const isActive = activeModalImage === color.imageSrc;
                                    return (
                                        <button
                                            key={color.name}
                                            onClick={() => setActiveModalImage(color.imageSrc)}
                                            className={`w-10 h-10 rounded-full border-2 transition-all duration-300 relative group
                                                ${isActive ? 'border-sky-500 scale-110 shadow-md' : 'border-gray-200 hover:scale-105'}`}
                                            title={color.name}
                                        >
                                            {/* The Color Circle */}
                                            <div className={`w-full h-full rounded-full ${color.class}`} />
                                            
                                            {/* Checkmark if active */}
                                            {isActive && (
                                                <div className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md">
                                                    <Check size={16} strokeWidth={3} />
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                            <p className="text-xs text-gray-400 mt-2 font-medium text-center">
                                {selectedImage.colors.find(c => c.imageSrc === activeModalImage)?.name || "Default"}
                            </p>
                        </div>
                    )}

                  </div>
                </div>

                {/* Text Content */}
                <div className="p-8 relative z-10 bg-white border-t border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">{selectedImage.title}</h3>
                        <p className="text-sky-600 font-medium">{selectedImage.category} Series</p>
                    </div>
                    <button 
                        onClick={() => {
                        setSelectedImage(null);
                        setShowContactForm(true);
                        }}
                        className="mt-4 md:mt-0 bg-sky-600 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-700 transition shadow-lg shadow-sky-200 flex items-center gap-2"
                    >
                        Get Quote <ArrowRight size={18} />
                    </button>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {selectedImage.description || "Premium quality finish designed for modern architectural needs."}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Contact Form Modal (Unchanged) */}
          {showContactForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactForm(false)}
              className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button onClick={() => setShowContactForm(false)} className="absolute top-6 right-6 text-gray-300 hover:text-sky-500 z-10">
                <X size={40} />
              </button>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <ContactForm />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}