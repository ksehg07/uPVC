import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="pt-32 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center">Contact <span className="text-green-600">Us</span></h1>
        
        <div className="grid md:grid-cols-2 gap-8">
            {/* Owner 1 */}
            <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Partner: John Doe</h2>
                <div className="space-y-4 text-gray-700">
                    <p className="flex items-center gap-3"><Phone className="text-green-600"/> +91 98765 43210</p>
                    <p className="flex items-center gap-3"><Mail className="text-green-600"/> john@company.com</p>
                </div>
            </div>

            {/* Owner 2 */}
            <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Partner: Jane Smith</h2>
                <div className="space-y-4 text-gray-700">
                    <p className="flex items-center gap-3"><Phone className="text-green-600"/> +91 12345 67890</p>
                    <p className="flex items-center gap-3"><Mail className="text-green-600"/> jane@company.com</p>
                </div>
            </div>
        </div>

        <div className="mt-12 bg-green-100/50 p-8 rounded-2xl border border-green-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><MapPin className="text-green-600"/> Workshop Address</h3>
            <p className="text-gray-700 mb-6">123 Industrial Area, Phase 1, City Name, State, Zip Code</p>
            
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><Clock className="text-green-600"/> Timings</h3>
            <p className="text-gray-700">Monday - Saturday: 09:00 AM - 08:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
        </div>
      </div>
    </main>
  );
}