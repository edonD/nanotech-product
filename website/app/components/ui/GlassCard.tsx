'use client';

import { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'cyan' | 'amber' | 'blue' | 'none';
}

const glowColors = {
  cyan: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
  amber: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
  blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  none: '',
};

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = 'cyan',
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6',
        hover && 'transition-all duration-500',
        hover && 'hover:border-white/[0.15] hover:bg-white/[0.05]',
        hover && glowColors[glow],
        className
      )}
    >
      {children}
    </div>
  );
}
