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
  },
  {
    value: 4.95,
    suffix: 'M',
    label: 'AMR-Associated Deaths / Year',
    description: 'Contributing factor in nearly 5 million deaths',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    bgColor: 'bg-amber-500/[0.05]',
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
  },
  {
    value: 48,
    suffix: '-72h',
    label: 'Current Wait Time',
    description: 'For antibiotic susceptibility results',
    color: 'text-red-400',
    borderColor: 'border-red-500/20',
    bgColor: 'bg-red-500/[0.05]',
  },
];

export default function CrisisStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <AnimatedSection key={stat.label} delay={i * 0.1}>
          <div
            className={`relative p-6 rounded-2xl border ${stat.borderColor} ${stat.bgColor} backdrop-blur-sm text-center h-full`}
          >
            <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.value % 1 !== 0 ? 2 : 0}
                className={stat.color}
              />
            </div>
            <div className="text-white font-semibold mb-2">{stat.label}</div>
            <div className="text-sm text-slate-500">{stat.description}</div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
