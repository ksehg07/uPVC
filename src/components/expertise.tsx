// Newer style
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeX, Thermometer, Maximize, ChevronDown } from 'lucide-react';

const tabs = [
  {
    id: 'sound',
    title: 'Sound Proofing',
    icon: VolumeX,
    description: 'Silence the chaos. Our multi-chambered uPVC and double-glazed aluminum systems reduce external noise by up to 40dB, creating a sanctuary inside your home.',
  },
  {
    id: 'thermal',
    title: 'Thermal Break',
    icon: Thermometer,
    description: 'Energy efficiency redefined. Our thermal break technology prevents heat transfer, keeping your interiors cool in summer and warm in winter, slashing electricity bills.',
  },
  {
    id: 'slim',
    title: 'Slim Profiles',
    icon: Maximize,
    description: 'Minimalist design, maximum view. Our high-strength aluminum alloys allow for ultra-slim sightlines, flooding your space with natural light without compromising strength.',
  }
];

export default function Expertise() {
  const [activeTab, setActiveTab] = useState(0); // Index 0 open by default

  return (
    <section id="expertise" className="py-20 px-4 md:px-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Our <span className="text-green-500">Expertise</span></h2>
      
      <div className="flex flex-col gap-4">
        {tabs.map((tab, index) => {
            const isOpen = activeTab === index;
            return (
                <div key={tab.id} className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50">
                    {/* Header / Tab Trigger */}
                    <button 
                        onClick={() => setActiveTab(isOpen ? -1 : index)}
                        className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition text-left"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-full ${isOpen ? 'bg-green-500 text-black' : 'bg-white/10 text-green-500'}`}>
                                <tab.icon size={20} />
                            </div>
                            <span className="text-xl font-bold text-white">{tab.title}</span>
                        </div>
                        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-green-500' : 'text-gray-500'}`} />
                    </button>

                    {/* Expandable Content */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 border-t border-white/5 text-gray-400 leading-relaxed">
                                    <p className="mb-4">{tab.description}</p>
                                    <div className="h-40 w-full bg-black/40 rounded-xl border border-white/5 flex items-center justify-center text-sm text-gray-600">
                                        [Visual Representation of {tab.title}]
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            );
        })}
      </div>
    </section>
  );
}







// Older style
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { VolumeX, Thermometer, Maximize } from 'lucide-react';

// const tabs = [
//   {
//     id: 'sound',
//     title: 'Sound Proofing',
//     icon: VolumeX,
//     description: 'Silence the chaos. Our multi-chambered uPVC and double-glazed aluminum systems reduce external noise by up to 40dB, creating a sanctuary inside your home.',
//     img: 'bg-gradient-to-br from-gray-800 to-black'
//   },
//   {
//     id: 'thermal',
//     title: 'Thermal Break',
//     icon: Thermometer,
//     description: 'Energy efficiency redefined. Our thermal break technology prevents heat transfer, keeping your interiors cool in summer and warm in winter, slashing electricity bills.',
//     img: 'bg-gradient-to-br from-green-900 to-black'
//   },
//   {
//     id: 'slim',
//     title: 'Slim Profiles',
//     icon: Maximize,
//     description: 'Minimalist design, maximum view. Our high-strength aluminum alloys allow for ultra-slim sightlines, flooding your space with natural light without compromising strength.',
//     img: 'bg-gradient-to-br from-zinc-800 to-black'
//   }
// ];

// export default function Expertise() {
//   const [activeTab, setActiveTab] = useState(tabs[0].id);

//   return (
//     <section id="expertise" className="py-20 px-4 md:px-20">
//       <h2 className="text-4xl font-bold mb-12 text-center">Our <span className="text-green-500">Expertise</span></h2>
      
//       <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[500px] max-w-7xl mx-auto">
//         {tabs.map((tab) => {
//             const isActive = activeTab === tab.id;
//             return (
//                 <motion.div
//                     key={tab.id}
//                     layout
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`relative rounded-3xl overflow-hidden cursor-pointer border ${isActive ? 'border-green-500' : 'border-white/10'} ${tab.img}`}
//                     animate={{ flex: isActive ? 2 : 1 }}
//                     transition={{ type: 'spring', stiffness: 100, damping: 20 }}
//                 >
//                     <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition duration-500" />
                    
//                     <div className="absolute bottom-0 left-0 p-8 w-full z-10">
//                         <div className="flex items-center gap-4 mb-4">
//                             <div className={`p-3 rounded-full ${isActive ? 'bg-green-500 text-black' : 'bg-white/10 text-white'}`}>
//                                 <tab.icon size={24} />
//                             </div>
//                             <h3 className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
//                                 {tab.title}
//                             </h3>
//                         </div>
                        
//                         {isActive && (
//                             <motion.p 
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.2 }}
//                                 className="text-gray-300 leading-relaxed text-lg"
//                             >
//                                 {tab.description}
//                             </motion.p>
//                         )}
//                     </div>
//                 </motion.div>
//             );
//         })}
//       </div>
//     </section>
//   );
// }