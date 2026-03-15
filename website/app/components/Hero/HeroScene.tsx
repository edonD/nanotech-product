'use client';

import { useState, useEffect } from 'react';

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow behind chip */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/[0.07] blur-[100px]" />
      <div className="absolute w-[250px] h-[250px] rounded-full bg-blue-500/[0.05] blur-[80px] translate-x-12 translate-y-12" />

      {/* Chip visualization */}
      <div className="relative animate-float">
        {/* Outer glow ring */}
        <div className="absolute -inset-10 rounded-3xl bg-gradient-to-br from-cyan-500/[0.06] via-transparent to-blue-500/[0.06] blur-2xl" />

        {/* Main chip body */}
        <div className="relative w-[340px] h-[240px] rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#0d1b3e] to-[#081225] shadow-[0_0_80px_rgba(0,240,255,0.08),0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden">
          {/* Silicon wafer grid pattern */}
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `
              linear-gradient(rgba(0,240,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,240,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '14px 14px',
          }} />

          {/* Top edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          {/* Layer 1 - Main channel path */}
          <div className="absolute top-4 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400/60 via-cyan-400/20 to-transparent" />
          <div className="absolute top-4 left-4 w-[2px] h-[70px] bg-gradient-to-b from-cyan-400/60 to-transparent" />

          {/* DLD pillar array with staggered animation */}
          <div className="absolute top-10 left-8 grid grid-cols-8 gap-[5px]">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className="w-[3px] h-[3px] rounded-full bg-cyan-400/40"
                style={{
                  animation: `pulseRing 3s ease-in-out infinite`,
                  animationDelay: `${(i % 8) * 0.15 + Math.floor(i / 8) * 0.1}s`,
                }}
              />
            ))}
          </div>

          {/* Channel branches — microfluidic network */}
          <svg className="absolute top-6 left-[85px] w-[200px] h-[90px]" viewBox="0 0 200 90" fill="none">
            <path d="M0 45 L45 45 L65 12 L200 12" stroke="rgba(0,240,255,0.25)" strokeWidth="1.5" />
            <path d="M45 45 L65 45 L200 45" stroke="rgba(0,240,255,0.35)" strokeWidth="1.5" />
            <path d="M45 45 L65 78 L200 78" stroke="rgba(0,240,255,0.25)" strokeWidth="1.5" />
            {/* Flow particles */}
            <circle r="2" fill="rgba(0,240,255,0.7)">
              <animateMotion dur="4s" repeatCount="indefinite" path="M0 45 L45 45 L65 12 L200 12" />
            </circle>
            <circle r="2" fill="rgba(0,240,255,0.6)">
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M0 45 L45 45 L65 45 L200 45" begin="0.5s" />
            </circle>
            <circle r="1.5" fill="rgba(0,240,255,0.5)">
              <animateMotion dur="4.2s" repeatCount="indefinite" path="M0 45 L45 45 L65 78 L200 78" begin="1s" />
            </circle>
          </svg>

          {/* 12 AST chambers — 3 rows x 4 cols */}
          <div className="absolute bottom-7 right-3 grid grid-cols-4 gap-[6px]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`w-[30px] h-[20px] rounded-sm border transition-colors duration-1000 ${
                  i % 3 === 0
                    ? 'border-cyan-400/30 bg-cyan-400/8'
                    : i % 3 === 1
                    ? 'border-blue-400/30 bg-blue-400/8'
                    : 'border-teal-400/30 bg-teal-400/8'
                }`}
              >
                {/* Tiny electrode lines inside chambers */}
                <div className="flex gap-px h-full items-center justify-center px-[2px]">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="w-px h-[8px] bg-yellow-400/20" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Gold electrode traces */}
          <div className="absolute bottom-[75px] left-[28%] right-[28%] flex gap-[3px]">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="flex-1 h-[45px] bg-gradient-to-b from-yellow-500/15 to-yellow-500/3 rounded-sm" />
            ))}
          </div>

          {/* Inlet port with glow */}
          <div className="absolute top-1/2 -left-3 -translate-y-1/2">
            <div className="w-5 h-10 rounded-r-xl bg-cyan-400/15 border border-cyan-400/25 border-l-0 flex items-center justify-center backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.6)] animate-pulse" />
            </div>
          </div>

          {/* Chip label */}
          <div className="absolute bottom-2 left-4 text-[7px] font-mono text-cyan-400/25 tracking-[0.15em]">
            RAPIDE-AST-v1.0
          </div>

          {/* Corner registration marks */}
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400/15" />
          <div className="absolute bottom-2 left-[45%] w-2 h-2 rounded-full border border-cyan-400/10" />
        </div>

        {/* Floating particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              top: `${15 + Math.sin(i * 0.7) * 35}%`,
              left: `${5 + (i * 10)}%`,
              animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
