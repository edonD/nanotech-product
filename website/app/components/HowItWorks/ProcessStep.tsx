'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

interface Step {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  technical: string;
  icon: string;
  color: string;
}

const colorMap: Record<string, { accent: string; bg: string; border: string; glow: string }> = {
  cyan: {
    accent: 'text-cyan-400',
    bg: 'bg-cyan-500/[0.05]',
    border: 'border-cyan-500/20',
    glow: 'shadow-[0_0_30px_rgba(0,240,255,0.1)]',
  },
  teal: {
    accent: 'text-teal-400',
    bg: 'bg-teal-500/[0.05]',
    border: 'border-teal-500/20',
    glow: 'shadow-[0_0_30px_rgba(14,165,233,0.1)]',
  },
  blue: {
    accent: 'text-blue-400',
    bg: 'bg-blue-500/[0.05]',
    border: 'border-blue-500/20',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.1)]',
  },
  purple: {
    accent: 'text-purple-400',
    bg: 'bg-purple-500/[0.05]',
    border: 'border-purple-500/20',
    glow: 'shadow-[0_0_30px_rgba(139,92,246,0.1)]',
  },
  green: {
    accent: 'text-green-400',
    bg: 'bg-green-500/[0.05]',
    border: 'border-green-500/20',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.1)]',
  },
};

const iconSvgs: Record<string, React.ReactNode> = {
  inlet: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M24 8v12M24 20l-8 8h16l-8-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="12" y="28" width="24" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="34" r="2" fill="currentColor" />
    </svg>
  ),
  separation: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="32" r="2" fill="currentColor" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
      <path d="M8 24h32" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="28" cy="28" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  concentration: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M8 24h8M32 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16l8 8-8 8M32 16l-8 8 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  ),
  parallel: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <rect key={`${row}-${col}`} x={10 + col * 10} y={8 + row * 10} width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        ))
      )}
    </svg>
  ),
  report: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <rect x="10" y="6" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 18h12M18 24h12M18 30h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="34" r="6" fill="currentColor" opacity="0.2" />
      <path d="M32 34l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function ProcessStep({ step, index }: { step: Step; index: number }) {
  const [showTechnical, setShowTechnical] = useState(false);
  const colors = colorMap[step.color];
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection
      delay={0.1}
      direction={isEven ? 'left' : 'right'}
    >
      <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>
        <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
          <div className={`p-8 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-500 hover:${colors.glow}`}>
            {/* Step number and icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.accent}`}>
                {iconSvgs[step.icon]}
              </div>
              <div>
                <span className={`text-xs font-mono ${colors.accent} tracking-wider`}>
                  STEP {step.number}
                </span>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <span className="text-sm text-slate-500">{step.subtitle}</span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">{step.description}</p>

            {/* Technical details toggle */}
            <button
              onClick={() => setShowTechnical(!showTechnical)}
              className={`text-sm font-mono ${colors.accent} hover:underline transition-colors flex items-center gap-1`}
            >
              {showTechnical ? 'Hide' : 'Show'} technical specs
              <svg
                className={`w-3 h-3 transition-transform ${showTechnical ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <motion.div
              initial={false}
              animate={{ height: showTechnical ? 'auto' : 0, opacity: showTechnical ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-slate-500 font-mono mt-3 p-3 rounded-lg bg-black/20 border border-white/5">
                {step.technical}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Step number circle (center line) */}
        <div className={`hidden lg:flex items-center justify-center ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <div className="relative">
            <div className={`w-20 h-20 rounded-full border-2 ${colors.border} ${colors.bg} flex items-center justify-center`}>
              <span className={`text-3xl font-bold ${colors.accent}`}>{step.number}</span>
            </div>
            <div className={`absolute inset-0 rounded-full ${colors.bg} animate-ping opacity-20`} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
