'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import ContactForm from './ContactForm';

// Define the shape of our product data
type ProductImage = {
  id: number;
  category: string;
  title: string;
  src: string; // In real app, this would be a path like '/images/alum-1.jpg'
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

  // Filter logic
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-25 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            {title} <span className="text-green-600">Collection</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{description}</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base font-medium
                ${activeCategory === cat 
                  ? 'bg-green-600 text-white border-green-600 font-bold' 
                  : 'bg-transparent text-gray-700 border-gray-300 hover:border-gray-400 hover:text-gray-900'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="group relative h-80 rounded-2xl overflow-hidden border border-green-200 bg-white cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                {/* Image */}
                <Image 
                  src={img.src}
                  alt={img.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <ZoomIn className="text-green-400 mb-2" size={32} />
                  <h3 className="text-xl font-bold text-white">{img.title}</h3>
                  <p className="text-green-300 text-sm uppercase tracking-wider">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modals */}
        <AnimatePresence>
          {/* Lightbox Modal */}
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
                className="absolute top-6 right-6 text-gray-300 hover:text-green-500 transition"
              >
                <X size={40} />
              </button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-gray-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-[60vh] bg-gray-100 flex items-center justify-center relative">
                  <Image 
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                  <p className="text-green-600 font-medium mb-4">{selectedImage.category} Series</p>
                  <p className="text-gray-600 mb-6">
                    Designed for modern architecture, offering superior durability and aesthetics. 
                    Perfect for both residential and commercial applications.
                  </p>
                  <button 
                    onClick={() => {
                      setSelectedImage(null);
                      setShowContactForm(true);
                    }}
                    className="mt-6 bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition w-full md:w-auto"
                  >
                    Enquire About This Design
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Contact Form Modal */}
          {showContactForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactForm(false)}
              className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button 
                onClick={() => setShowContactForm(false)}
                className="absolute top-6 right-6 text-gray-300 hover:text-green-500 z-10 transition"
              >
                <X size={40} />
              </button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-2xl w-full"
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