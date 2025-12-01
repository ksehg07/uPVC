import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ALU<span className="text-green-500">PVC</span></h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Elevating modern architecture with premium aluminum and uPVC fenestration solutions. Built for durability, designed for elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-green-500 transition">Home</Link></li>
                <li><Link href="/#aluminum" className="hover:text-green-500 transition">Aluminum Systems</Link></li>
                <li><Link href="/#upvc" className="hover:text-green-500 transition">uPVC Systems</Link></li>
                <li><Link href="/quote" className="hover:text-green-500 transition">Get a Quote</Link></li>
                <li><Link href="/contact" className="hover:text-green-500 transition">Contact Partners</Link></li>
            </ul>
        </div>

        {/* Social & Contact */}
        <div>
            <h3 className="text-white font-bold mb-6">Connect</h3>
            <div className="flex gap-4 mb-6">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-green-500 hover:text-black transition"><Instagram size={20}/></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-green-500 hover:text-black transition"><Facebook size={20}/></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-green-500 hover:text-black transition"><Linkedin size={20}/></a>
            </div>
            <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Accurate Windows Solutions. All rights reserved.
            </p>
        </div>
      </div>
      
      <div className="text-center border-t border-white/5 pt-8 text-xs text-gray-600">
        Designed by LMS Traverse
      </div>
    </footer>
  );
}