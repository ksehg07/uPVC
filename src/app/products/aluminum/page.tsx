import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';

// Data for Aluminum
const aluminumCategories = ['Casement', 'Sliding', 'Bi-Fold', 'Lift & Slide', 'Fixed', 'Slide & Fold'];
const aluminumImages = [
  { id: 1, category: 'Casement', title: 'French Casement Window', src: '/img1.jpeg' },
  { id: 2, category: 'Sliding', title: 'Slimline Slider', src: '/img2.jpeg' },
  { id: 3, category: 'Bi-Fold', title: 'Panoramic Bi-Fold Door', src: '/img3.jpeg' },
  { id: 4, category: 'Lift & Slide', title: 'Heavy Duty Balcony Door', src: '/img4.jpeg' },
  { id: 5, category: 'Fixed', title: 'Floor to Ceiling Facade', src: '/img5.jpeg' },
  { id: 6, category: 'Casement', title: 'Ventilator Top Hung', src: '/img6.jpeg' },
  { id: 7, category: 'Sliding', title: '3-Track Sliding System', src: '/img7.jpeg' },
  { id: 8, category: 'Bi-Fold', title: 'Corner Bi-Fold', src: '/img8.jpeg' },
  { id: 9, category: 'Slide & Fold', title: 'Panoramic Slide & Fold', src: '/img9.jpeg' },
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