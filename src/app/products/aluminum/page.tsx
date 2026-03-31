import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';

// Data for Aluminum
const aluminumCategories = ['Casement', 'Sliding', 'Slide & Fold'];
const aluminumImages = [
  { id: 1, category: 'Casement', title: 'French Door', description: 'Elegant French door with a sleek aluminum frame.', src: '/Images/Casement-French-Door.png' },
  { id: 2, category: 'Sliding', title: 'Telescoping Sliding', description: 'Smooth telescoping sliding system for large openings.', src: '/Images/Sliding-Telescoping.png' },
  { id: 3, category: 'Slide & Fold', title: 'Slide & Fold', description: 'Versatile slide and fold window system.', src: '/Images/Slide-n-Fold.png' },
  { id: 4, category: 'Casement', title: 'Fix Door', description: 'Secure casement door with aluminum construction.', src: '/Images/Fix-Door.png' },
  { id: 5, category: 'Sliding', title: 'Decorative Arch Window', description: 'Beautiful decorative arch window with aluminum frame.', src: '/Images/Decorative-Arch-Window.png' },
  { id: 6, category: 'Casement', title: 'French Window', description: 'Classic French window design in aluminum.', src: '/Images/French-Window.png' },
  { id: 7, category: 'Sliding', title: '2 & 3Track Slider', description: 'Smooth 2-track & 3-track slider system.', src: '/Images/Sliding-2-n-3-Track.png' },
  { id: 8, category: 'Casement', title: 'Casement Window', description: 'Standard casement window with aluminum frame.', src: '/Images/Casement-Window.jpeg' },
  { id: 9, category: 'Sliding', title: 'Center Locking Sliding', description: 'Secure center locking sliding system.', src: '/Images/Sliding-Door.png' },
  { id: 10, category: 'Sliding', title: '3-Track Slider', description: 'Advanced 3-track slider for large openings.', src: '/Images/3-Track-Slider.png' },
];

export default function AluminumPage() {
  return (
    <main>
      <Navbar />
      <ProductGallery 
        title="Aluminum"
        description="Sleek, robust, and infinitely recyclable. Our Aluminum range offers ultra-slim sightlines with maximum structural integrity, perfect for modern architectural marvels."
        categories={aluminumCategories}
        images={aluminumImages}
      />
      <Footer />
    </main>
  );
}