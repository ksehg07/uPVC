// src/components/expertise.tsx
'use client';
import { ShieldCheck, CloudRain, Zap, LayoutTemplate, VolumeX, Lightbulb } from 'lucide-react';

const features = [
  {
    title: 'Security & Durability',
    icon: ShieldCheck,
    description: 'Peace of mind guaranteed. Our premium aluminium and uPVC profiles are engineered for maximum security, featuring multi-point locking systems.',
  },
  {
    title: 'Weather Resistance',
    icon: CloudRain,
    description: 'Built for the elements. From scorching summers to heavy monsoons, our windows resist warping, fading, and leakage, ensuring year-round protection.',
  },
  {
    title: 'Energy Efficiency',
    icon: Zap,
    description: 'Save on bills. Advanced thermal break technology and double-glazing options prevent heat transfer, keeping interiors cool in summer and warm in winter.',
  },
  {
    title: 'Customization',
    icon: LayoutTemplate,
    description: 'Your vision, our craft. We offer extensive customization in colors, finishes, and opening styles to perfectly match your architectural vision.',
  },
  {
    title: 'Sound Proofing',
    icon: VolumeX,
    description: 'Silence the noise. Reduce external chaos by up to 40dB with our precision-engineered acoustic seals and glazing options.',
  },
  {
    title: 'Innovative Design',
    icon: Lightbulb,
    description: 'Modern aesthetics meets functionality. Our slim profiles and sleek designs maximize natural light while maintaining structural strength.',
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-4 md:px-20 max-w-7xl mx-auto bg-white">
      <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Our <span className="text-green-600">Expertise</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-3xl border border-green-100 bg-white hover:shadow-xl hover:border-green-300 transition-all duration-300">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                </p>
            </div>
        ))}
      </div>
    </section>
  );
}