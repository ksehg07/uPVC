import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';

// Data for uPVC
const upvcCategories = ['Casement', 'Sliding', 'Tilt & Turn', 'Villa', 'Arch'];
const upvcImages = [
  { id: 1, category: 'Casement', title: 'Classic White Casement', src: '/upvc1.jpg' },
  { id: 2, category: 'Sliding', title: 'Balcony Slider', src: '/upvc2.jpg' },
  { id: 3, category: 'Tilt & Turn', title: 'European Tilt & Turn', src: '/upvc3.jpg' },
  { id: 4, category: 'Villa', title: 'Twin Sash Villa Window', src: '/upvc4.jpg' },
  { id: 5, category: 'Arch', title: 'Decorative Arch Window', src: '/upvc5.jpg' },
  { id: 6, category: 'Casement', title: 'Wood Finish Casement', src: '/upvc6.jpg' },
  { id: 7, category: 'Sliding', title: 'Mesh Integrated Slider', src: '/upvc7.jpg' },
  { id: 8, category: 'Villa', title: 'Secure Grill Villa System', src: '/upvc8.jpg' },
];

export default function UpvcPage() {
  return (
    <main>
      <Navbar />
      <ProductGallery 
        title="uPVC"
        description="Energy efficient, sound-insulating, and low maintenance. Our uPVC systems are engineered to withstand harsh weather conditions while keeping your home peaceful and cool."
        categories={upvcCategories}
        images={upvcImages}
      />
      <Footer />
    </main>
  );
}