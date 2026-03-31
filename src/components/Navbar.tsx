'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <div className="bg-white/90 backdrop-blur-md border border-sky-200 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-6xl shadow-md">
        
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-gray-900 tracking-tighter">
          <h2>A<span className="text-sky-600">WS</span></h2>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-900">
          <Link href="/" className="hover:text-sky-600 transition">Home</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-sky-600 transition">
              Products <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-48 bg-white border border-sky-200 rounded-xl p-4 flex flex-col gap-2 backdrop-blur-xl text-gray-900"
                >
                  <Link href="/products/aluminum" className="hover:text-sky-600">Aluminum Systems</Link>
                  <Link href="/products/upvc" className="hover:text-sky-600">uPVC Systems</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="hover:text-sky-600 transition">About Us</Link>
          <Link href="/contact" className="hover:text-sky-600 transition">Contact</Link>
          
          <Link 
            href="/quote" 
            className="bg-sky-600 text-black px-5 py-2 rounded-full font-bold hover:bg-sky-500 transition shadow-lg shadow-sky-900/50"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

        {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-white border border-sky-200 rounded-2xl p-6 flex flex-col gap-4 md:hidden text-gray-900"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/products/aluminum" onClick={() => setIsOpen(false)}>Aluminum</Link>
            <Link href="/products/upvc" onClick={() => setIsOpen(false)}>uPVC</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
