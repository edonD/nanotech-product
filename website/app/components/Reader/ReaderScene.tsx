'use client';

import { useState, useEffect } from 'react';

export default function ReaderScene() {
  const [mounted, setMounted] = useState(false);
  const [scanY, setScanY] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scan line animation
  useEffect(() => {
    if (!mounted) return;
    let frame: number;
    const animate = () => {
      setScanY((prev) => (prev + 0.4) % 100);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [mounted]);

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
                    {/* Grid lines */}
                    <line x1="5" y1="10" x2="115" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    <line x1="5" y1="20" x2="115" y2="20" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    <line x1="5" y1="30" x2="115" y2="30" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    <line x1="5" y1="40" x2="115" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    {/* Vertical grid */}
                    <line x1="30" y1="5" x2="30" y2="45" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                    <line x1="55" y1="5" x2="55" y2="45" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                    <line x1="80" y1="5" x2="80" y2="45" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                    <line x1="105" y1="5" x2="105" y2="45" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                    {/* Axis labels */}
                    <text x="2" y="8" fill="rgba(0,240,255,0.3)" fontSize="3" fontFamily="monospace">OD</text>
                    <text x="100" y="48" fill="rgba(0,240,255,0.3)" fontSize="3" fontFamily="monospace">t(h)</text>
                    {/* Resistant strain - steep growth */}
                    <path d="M5 40 Q20 38 35 35 T65 20 T95 8 T115 5" stroke="rgba(0,240,255,0.6)" strokeWidth="1.5" fill="none" />
                    {/* Susceptible - flat */}
                    <path d="M5 42 Q20 42 35 42 T65 40 T95 38 T115 37" stroke="rgba(245,158,11,0.4)" strokeWidth="1" fill="none" />
                    {/* Intermediate */}
                    <path d="M5 35 Q20 32 35 25 T65 15 T95 10 T115 8" stroke="rgba(16,185,129,0.5)" strokeWidth="1" fill="none" />
                    {/* New: MIC threshold line */}
                    <line x1="5" y1="25" x2="115" y2="25" stroke="rgba(239,68,68,0.3)" strokeWidth="0.5" strokeDasharray="3 2" />
                    <text x="88" y="24" fill="rgba(239,68,68,0.4)" fontSize="3" fontFamily="monospace">MIC</text>
                    {/* New: secondary curve - delayed growth */}
                    <path d="M5 43 Q30 43 50 42 T75 38 T95 28 T115 18" stroke="rgba(167,139,250,0.35)" strokeWidth="0.8" fill="none" strokeDasharray="2 1" />
                    {/* New: no-growth control */}
                    <path d="M5 44 Q30 44 55 43 T85 43 T115 43" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" fill="none" />
                    {/* Data points on main curve */}
                    <circle cx="35" cy="35" r="1.2" fill="rgba(0,240,255,0.5)" />
                    <circle cx="65" cy="20" r="1.2" fill="rgba(0,240,255,0.5)" />
                    <circle cx="95" cy="8" r="1.2" fill="rgba(0,240,255,0.5)" />
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
                    <div className="flex items-center gap-1 ml-auto">
                      <span className="text-[5px] text-cyan-400/40 font-mono">12:34</span>
                    </div>
                  </div>
                </div>
                {/* Scanning line effect */}
                <div
                  className="absolute left-0 w-full h-[2px] pointer-events-none"
                  style={{
                    top: `${scanY}%`,
                    background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.15), transparent)',
                  }}
                />
              </div>

              {/* Chip insertion slot */}
              <div className="absolute top-1/2 left-3 -translate-y-1/2 w-3 h-[60px] rounded-r-lg bg-black/60 border border-cyan-500/15 border-l-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[2px] h-[40px] bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
                </div>
                {/* Idle glow pulse */}
                <div
                  className="absolute -inset-1 rounded-r-lg pointer-events-none pulse-ring"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.12), transparent 70%)',
                  }}
                />
                {/* Slot edge markers */}
                <div className="absolute top-1 right-0.5 w-[3px] h-[3px] rounded-full bg-cyan-400/30" />
                <div className="absolute bottom-1 right-0.5 w-[3px] h-[3px] rounded-full bg-cyan-400/30" />
              </div>

              {/* Status LED */}
              <div className="absolute top-4 left-[170px]">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>

              {/* Power button */}
              <div className="absolute top-4 left-[190px]">
                <div className="w-3 h-3 rounded-full border border-white/10 bg-[#0d0d1a] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full border border-white/15" />
                </div>
              </div>

              {/* USB-C port */}
              <div className="absolute bottom-3 left-6">
                <div className="w-5 h-[5px] rounded-full bg-black/50 border border-white/[0.06]" />
              </div>

              {/* Micro SD slot */}
              <div className="absolute bottom-3 left-14">
                <div className="w-3 h-[4px] rounded-sm bg-black/40 border border-white/[0.05]" />
              </div>

              {/* Volume / navigation buttons */}
              <div className="absolute top-[50px] left-[170px] flex flex-col gap-1">
                <div className="w-4 h-[5px] rounded-sm bg-[#13132a] border border-white/[0.06]" />
                <div className="w-4 h-[5px] rounded-sm bg-[#13132a] border border-white/[0.06]" />
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

              {/* Side connector port */}
              <div className="absolute top-[90px] right-3">
                <div className="w-[6px] h-4 rounded-sm bg-black/40 border border-white/[0.05]" />
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
