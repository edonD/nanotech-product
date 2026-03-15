'use client';

import { useState, useEffect } from 'react';

export default function ReaderScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Ambient glow */}
      <div className="absolute w-[250px] h-[200px] rounded-full bg-teal-500/[0.06] blur-[80px]" />

      <div className="relative animate-float">
        {/* Reader body */}
        <div className="relative w-[320px] h-[200px]" style={{ perspective: '600px' }}>
          {/* Main unit */}
          <div
            className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a2e] to-[#12122a] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            style={{ transform: 'rotateX(10deg) rotateY(-8deg)' }}
          >
            {/* Top surface detail */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              {/* Display screen */}
              <div className="absolute top-4 right-4 w-[140px] h-[90px] rounded-lg bg-[#0a1628] border border-cyan-500/10 overflow-hidden">
                {/* Screen content - growth curves */}
                <div className="absolute inset-0 p-2">
                  <div className="text-[6px] font-mono text-cyan-400/50 mb-1">RAPIDE AST v1.0</div>
                  {/* Growth curve lines */}
                  <svg className="w-full h-[50px]" viewBox="0 0 120 50" fill="none">
                    <path d="M5 40 Q20 38 35 35 T65 20 T95 8 T115 5" stroke="rgba(0,240,255,0.6)" strokeWidth="1.5" fill="none" />
                    <path d="M5 42 Q20 42 35 42 T65 40 T95 38 T115 37" stroke="rgba(245,158,11,0.4)" strokeWidth="1" fill="none" />
                    <path d="M5 35 Q20 32 35 25 T65 15 T95 10 T115 8" stroke="rgba(16,185,129,0.5)" strokeWidth="1" fill="none" />
                  </svg>
                  {/* Status indicators */}
                  <div className="flex gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-green-400" />
                      <span className="text-[5px] text-green-400/60">S</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-amber-400" />
                      <span className="text-[5px] text-amber-400/60">I</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-red-400" />
                      <span className="text-[5px] text-red-400/60">R</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chip insertion slot */}
              <div className="absolute top-1/2 left-3 -translate-y-1/2 w-3 h-[60px] rounded-r-lg bg-black/60 border border-cyan-500/15 border-l-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[2px] h-[40px] bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
                </div>
              </div>

              {/* Status LED */}
              <div className="absolute top-4 left-[170px]">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>

              {/* Veridion label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30" />
              </div>

              {/* Ventilation grille */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-[3px]">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-8 h-[1px] bg-white/[0.06]" />
                ))}
              </div>
            </div>
          </div>

          {/* Shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[280px] h-[20px] rounded-full bg-cyan-500/[0.03] blur-xl" />
        </div>

        {/* Label */}
        <div className="text-xs text-slate-600 font-mono text-center mt-8">
          Portable Reader Unit — 4.8 kg
        </div>
      </div>
    </div>
  );
}
