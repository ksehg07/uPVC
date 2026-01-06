import Image from 'next/image';

// src/components/we-are.tsx
export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 px-6 md:px-20 max-w-7xl mx-auto space-y-20 bg-white text-gray-900">
        
        {/* Section 1: Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                    Premium Fenestration Systems
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    Who <span className="text-green-600">We Are</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    <strong>Accurate Windoor Solutions (AWS)</strong> specializes in premium Aluminium and uPVC doors and windows crafted with meticulous precision. 
                    We deliver a perfect blend of durability, aesthetic excellence, and superior craftsmanship.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Our commitment to service excellence and unwavering quality ensures we enhance your living spaces with innovative fenestration solutions 
                    that surpass expectations and stand the test of time.
                </p>
            </div>
            {/* Image Placeholder */}
            <div className="h-[400px] w-full bg-gray-100 rounded-3xl border border-green-100 flex items-center justify-center relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-green-600/5 group-hover:bg-green-600/10 transition duration-500"></div>
                <img src="/aws-workshop-team.jpg" alt="AWS Workshop Team" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Section 2: Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="h-[400px] w-full bg-gray-100 rounded-3xl border border-green-100 flex items-center justify-center relative overflow-hidden group order-2 md:order-1 shadow-lg">
                <div className="absolute inset-0 bg-green-600/5 group-hover:bg-green-600/10 transition duration-500"></div>
                <img src="/elegant-window-installation.jpg" alt="Elegant Window Installation" className="w-full h-full object-cover" />
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Our <span className="text-green-600">Vision</span></h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        To redefine living spaces with innovative, high-quality door and window solutions, 
                        ensuring lifelong durability and total customer satisfaction.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Our <span className="text-green-600">Mission</span></h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        To deliver top-tier, energy-efficient doors and windows with exceptional service—fostering 
                        innovation, quality, and lasting trust with every customer.
                    </p>
                </div>
            </div>
        </div>

    </section>
  );
}