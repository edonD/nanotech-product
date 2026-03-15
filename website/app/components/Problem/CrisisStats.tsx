'use client';

import AnimatedSection from '../ui/AnimatedSection';
import AnimatedCounter from '../ui/AnimatedCounter';

const stats = [
  {
    value: 1.27,
    suffix: 'M',
    label: 'Direct AMR Deaths / Year',
    description: 'More than HIV or malaria combined',
    color: 'text-red-400',
    borderColor: 'border-red-500/20',
    bgColor: 'bg-red-500/[0.05]',
    pulseColor: 'shadow-red-500/20',
    decimals: 2,
  },
  {
    value: 4.95,
    suffix: 'M',
    label: 'AMR-Associated Deaths / Year',
    description: 'Contributing factor in nearly 5 million deaths',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    bgColor: 'bg-amber-500/[0.05]',
    pulseColor: 'shadow-amber-500/20',
    decimals: 2,
  },
  {
    value: 66,
    suffix: 'B',
    prefix: '$',
    label: 'Annual Economic Cost',
    description: 'Projected to reach $159B/year by 2050',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    bgColor: 'bg-amber-500/[0.05]',
    pulseColor: 'shadow-amber-500/20',
    decimals: 0,
  },
  {
    value: 48,
    suffix: '-72h',
    label: 'Current Wait Time',
    description: 'For antibiotic susceptibility results',
    color: 'text-red-400',
    borderColor: 'border-red-500/20',
    bgColor: 'bg-red-500/[0.05]',
    pulseColor: 'shadow-red-500/20',
    decimals: 0,
  },
];

export default function CrisisStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <AnimatedSection key={stat.label} delay={i * 0.1}>
          <div
            className={`relative p-6 rounded-2xl border ${stat.borderColor} ${stat.bgColor} backdrop-blur-sm text-center h-full animate-pulse-border`}
            style={{
              animation: `pulse-border 3s ease-in-out ${i * 0.5}s infinite`,
            }}
          >
            <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-3 tracking-tight`}>
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.decimals}
                className={stat.color}
              />
            </div>
            <div className="text-white font-semibold mb-2">{stat.label}</div>
            <div className="text-sm text-slate-500">{stat.description}</div>
          </div>
        </AnimatedSection>
      ))}

      {/* Inline keyframes for pulse-border animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-border {
          0%, 100% {
            box-shadow: 0 0 0 0 transparent;
            border-color: rgba(255, 255, 255, 0.05);
          }
          50% {
            box-shadow: 0 0 15px 1px rgba(255, 255, 255, 0.03);
            border-color: rgba(255, 255, 255, 0.15);
          }
        }
      `}} />
    </div>
  );
}
