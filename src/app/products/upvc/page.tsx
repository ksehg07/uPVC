import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';

// Data for uPVC
const upvcCategories = ['Casement', 'Sliding', 'Tilt & Turn'];
const upvcImages = [
  { id: 1, category: 'Casement', title: 'French Door', description: 'A elegant French door made of uPVC, perfect for adding style and functionality to your home.', src: '/Images/upvc-french-door.png' },
  { id: 2, category: 'Sliding', title: 'Telescoping Sliding', description: 'A modern telescoping sliding window that offers a seamless look and excellent performance.', src: '/Images/Telescoping-Sliding.png' },
  { id: 3, category: 'Tilt & Turn', title: 'European Tilt & Turn', description: 'A premium European tilt and turn window that provides superior security and energy efficiency.', src: '/Images/Tilt-N-Turn.png' },
  { id: 4, category: 'Casement', title: 'Casement Door', description: 'A durable casement door designed for both style and functionality.', src: '/Images/Casement-Door-upvc.png' },
  { id: 5, category: 'Sliding', title: 'Decorative Arch Window', description: 'Beautiful decorative arch window with aluminum frame.', src: '/Images/Decorative-Arch-Window.png' },
  { id: 6, category: 'Casement', title: 'French Window', description: 'Classic French window design in aluminum.', src: '/Images/French-Window.png' },
  { id: 7, category: 'Sliding', title: '2 & 3Track Slider', description: 'Smooth 2-track & 3-track slider system.', src: '/Images/Sliding-2-n-3-Track.png' },
  { id: 8, category: 'Casement', title: 'Casement Window', description: 'Standard casement window with aluminum frame.', src: '/Images/Casement-Window.jpeg' },
  { id: 9, category: 'Sliding', title: 'Center Locking Sliding', description: 'Secure center locking sliding system.', src: '/Images/Sliding-Door.png' },
  { id: 10, category: 'Sliding', title: '3-Track Slider', description: 'Advanced 3-track slider for large openings.', src: '/Images/3-Track-Slider.png' },
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