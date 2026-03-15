'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '< 60', unit: 'min', label: 'Time to result' },
  { value: '12', unit: '', label: 'Antibiotics per chip' },
  { value: '100', unit: 'µL', label: 'Sample volume' },
  { value: '< 5', unit: 'kg', label: 'Portable reader' },
];

export default function HeroStats() {
  return (
    <motion.div
      className="absolute bottom-20 left-0 right-0 z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-3 ${i < stats.length - 1 ? 'md:border-r md:border-white/[0.06]' : ''}`}
            >
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
                <span className="text-cyan-400 text-lg ml-1">{stat.unit}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
