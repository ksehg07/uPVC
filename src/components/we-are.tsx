export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 px-6 md:px-20 max-w-7xl mx-auto space-y-20">
        
        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-5xl font-bold mb-8 text-gray-900">Who <span className="text-green-600">We Are</span></h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                    We are the premier fabricators of high-performance fenestration systems. 
                    Combining architectural aesthetics with structural integrity, we specialize in 
                    custom aluminum and uPVC solutions tailored for modern living.
                </p>
            </div>
            {/* Image Placeholder */}
            <div className="h-[400px] w-full bg-green-100 rounded-3xl border border-green-200 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-green-200/20 group-hover:bg-green-200/40 transition duration-500"></div>
                <span className="text-gray-500 font-bold text-lg">[Image: Workshop/Team]</span>
            </div>
        </div>

        {/* Section 2: Image Left, Text Right (Inversed) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder (Order changes on desktop) */}
            <div className="h-[400px] w-full bg-green-100 rounded-3xl border border-green-200 flex items-center justify-center relative overflow-hidden group order-2 md:order-1">
                <div className="absolute inset-0 bg-green-200/20 group-hover:bg-green-200/40 transition duration-500"></div>
                <span className="text-gray-500 font-bold text-lg">[Image: Finished Project]</span>
            </div>
            
            <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Our <span className="text-green-600">Vision</span></h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                    We don't just build windows; we frame your view of the world. 
                    From the initial design consultation to the final installation, 
                    our focus remains on precision, durability, and customer satisfaction.
                </p>
            </div>
        </div>

    </section>
  );
}