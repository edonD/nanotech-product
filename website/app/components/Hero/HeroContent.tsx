'use client';

import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-mono tracking-wide mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          MEMS Microfluidic Diagnostics
        </span>
        <div className="text-xs text-slate-500 font-mono tracking-wider ml-1">
          Rapid Antimicrobial Profiling via Integrated Detection Electronics
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <span className="text-white">Know resistance</span>
        <br />
        <span className="text-white">in </span>
        <span className="gradient-text">minutes</span>
        <span className="text-white">,</span>
        <br />
        <span className="text-slate-400">not days.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
          The RAPIDE chip delivers antibiotic susceptibility results directly from
          patient samples — at the point of care, no lab required.
          <span className="inline-flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold whitespace-nowrap">
            &lt; 60 min
          </span>
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-4 pt-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:scale-[1.02]"
        >
          Request Early Access
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#how-it-works"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-white font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.06]"
        >
          See the Science
        </a>
      </motion.div>
    </div>
  );
}
