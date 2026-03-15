'use client';

import AnimatedSection from './AnimatedSection';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  labelColor?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  labelColor = 'text-cyan-400',
  align = 'center',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <AnimatedSection className={`max-w-3xl ${alignment} mb-16`}>
      <span
        className={`inline-block text-sm font-mono font-semibold tracking-[0.2em] uppercase mb-4 ${labelColor}`}
      >
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
