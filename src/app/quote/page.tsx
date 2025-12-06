import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="text-center mb-10 px-4">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Request a <span className="text-green-600">Quote</span></h1>
            <p className="text-gray-600">Fill out the form below and our engineers will calculate the best price for you.</p>
        </div>
        
        {/* Reusing the ContactForm component here */}
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}