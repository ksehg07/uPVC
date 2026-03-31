'use client';
import { motion } from 'framer-motion';

export default function Comparison() {
  return (
    <section className="py-20 px-4 md:px-20 bg-sky-50">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
        The Right <span className="text-sky-600">Choice</span>
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-sky-300 text-lg">
              <th className="p-4 text-sky-700 font-bold uppercase tracking-wider">Feature</th>
              <th className="p-4 text-gray-900 font-semibold">Aluminum</th>
              <th className="p-4 text-gray-900 font-semibold">uPVC</th>
            </tr>
          </thead>
          {/* Using Framer Motion for stagger effect, but ensuring opacity defaults to 1 if animation fails */}
          <motion.tbody
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              { feat: 'Durability', al: 'Extremely High (30+ yrs)', upvc: 'High (20+ yrs)' },
              { feat: 'Maintenance', al: 'Low', upvc: 'Very Low' },
              { feat: 'Insulation', al: 'Good (w/ thermal break)', upvc: 'Excellent' },
              { feat: 'Aesthetics', al: 'Slim, Modern', upvc: 'Classic, Bold' },
              { feat: 'Cost', al: 'Premium', upvc: 'Economical' },
            ].map((row, i) => (
              <motion.tr 
                key={i} 
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="border-b border-sky-200 hover:bg-sky-100/50 transition"
              >
                {/* Explicit Text Colors to fix visibility */}
                <td className="p-5 font-medium text-gray-700">{row.feat}</td>
                <td className="p-5 text-gray-700">{row.al}</td>
                <td className="p-5 text-gray-700">{row.upvc}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </section>
  );
}