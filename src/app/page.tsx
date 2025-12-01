import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import WhoWeAre from '@/components/we-are';
import Expertise from '@/components/expertise';
import Comparison from '@/components/Comparison';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Sections */}
      <HeroCarousel />
      
      <WhoWeAre />

      <Expertise />

      <Comparison />
      <ContactForm />
      
      <Footer />
    </main>
  );
}