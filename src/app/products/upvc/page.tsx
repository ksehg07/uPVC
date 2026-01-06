import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';

// Data for uPVC
const upvcCategories = ['Casement', 'Sliding', 'Tilt & Turn', 'Bi-Fold'];
const upvcImages = [
  { id: 1, category: 'Casement', title: 'Classic White Casement', src: '/img1.jpeg' },
  { id: 2, category: 'Sliding', title: 'Balcony Slider', src: '/img2.jpeg' },
  { id: 3, category: 'Tilt & Turn', title: 'European Tilt & Turn', src: '/img3.jpeg' },
  { id: 4, category: 'Villa', title: 'Twin Sash Villa Window', src: '/img4.jpeg' },
  { id: 5, category: 'Arch', title: 'Decorative Arch Window', src: '/img5.jpeg' },
  { id: 6, category: 'Casement', title: 'Wood Finish Casement', src: '/img6.jpeg' },
  { id: 7, category: 'Sliding', title: 'Mesh Integrated Slider', src: '/img7.jpeg' },
  { id: 8, category: 'Villa', title: 'Secure Grill Villa System', src: '/img8.jpeg' },
  { id: 9, category: 'Bi-Fold', title: 'Panoramic Bi-Fold', src: '/img9.jpeg' },
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