// src/components/why-choose-us.tsx
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { label: "Service Quality", aws: "High", mnc: "High", local: "Low", localBad: true },
    { label: "Delivery Time", aws: "15-30 Days", mnc: "60-90 Days", local: "15-30 Days", mncWarn: true },
    { label: "Cost Effectiveness", aws: "Best Value (X)", mnc: "Expensive (2x-3x)", local: "Cheap (0.9x)", mncBad: true },
    { label: "Workmanship", aws: "Trained & Skilled", mnc: "Trained & Skilled", local: "Unskilled", localBad: true },
    { label: "Machine Quality", aws: "Excellent", mnc: "Excellent", local: "Low", localBad: true },
  ];

  return (
    <section className="py-20 px-4 md:px-20 bg-sky-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose <span className="text-sky-600">AWS?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how Accurate Windoor Solutions stands out against large corporates and local vendors.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-sky-200 shadow-xl bg-white">
          <div className="grid grid-cols-4 bg-sky-600 text-white font-bold p-6 text-lg">
            <div>Feature</div>
            <div className="text-center bg-sky-500 rounded-lg py-2">AWS (Us)</div>
            <div className="text-center opacity-90">Large MNCs</div>
            <div className="text-center opacity-90">Local Vendors</div>
          </div>
          
          {features.map((item, idx) => (
            <div key={idx} className={`grid grid-cols-4 p-6 items-center ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="font-semibold text-gray-700">{item.label}</div>
              
              {/* AWS Column */}
              <div className="text-center font-bold text-sky-700 flex justify-center items-center gap-2">
                <CheckCircle2 size={18} /> {item.aws}
              </div>

              {/* MNC Column */}
              <div className={`text-center flex justify-center items-center gap-2 ${item.mncBad ? 'text-red-500' : (item.mncWarn ? 'text-amber-500' : 'text-gray-500')}`}>
                {item.mncBad ? <XCircle size={18} /> : item.mncWarn ? <AlertCircle size={18} /> : null}
                {item.mnc}
              </div>

              {/* Local Column */}
              <div className={`text-center flex justify-center items-center gap-2 ${item.localBad ? 'text-red-500' : 'text-gray-500'}`}>
                 {item.localBad ? <XCircle size={18} /> : null}
                 {item.local}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
            {features.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-sky-100">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">{item.label}</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-sky-700">AWS</span>
                            <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-bold">{item.aws}</span>
                        </div>
                        <div className="flex justify-between items-center text-gray-500 text-sm">
                            <span>MNCs</span>
                            <span className={item.mncBad ? 'text-red-500 font-medium' : ''}>{item.mnc}</span>
                        </div>
                        <div className="flex justify-between items-center text-gray-500 text-sm">
                            <span>Local</span>
                            <span className={item.localBad ? 'text-red-500 font-medium' : ''}>{item.local}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}