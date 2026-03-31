import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import WhoWeAre from '@/components/we-are';
import WhyChooseUs from '@/components/Why-choose-us';
import Expertise from '@/components/expertise';
import Comparison from '@/components/Comparison';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <HeroCarousel />
      
      <WhoWeAre />

      <WhyChooseUs />

      <Expertise />

      <Comparison />
      <ContactForm />
      
      <Footer />
    </main>
  );
}