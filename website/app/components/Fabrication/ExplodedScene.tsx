'use client';

import { useState, useEffect } from 'react';

interface ExplodedSceneProps {
  activeLayer: number | null;
  onLayerClick: (layer: number) => void;
}

const layers = [
  { name: 'Microfluidic Network', color: 'cyan', detail: 'PDMS/Silicon' },
  { name: 'Sensor Layer', color: 'yellow', detail: 'Au electrodes' },
  { name: 'Piezo Transducers', color: 'purple', detail: 'AlN on Si' },
  { name: 'Reagent Chambers', color: 'green', detail: 'Foil-sealed' },
];

const colorMap: Record<string, { border: string; bg: string; glow: string; text: string; raw: string }> = {
  cyan: { border: 'border-cyan-400/40', bg: 'bg-cyan-400/10', glow: 'shadow-[0_0_20px_rgba(0,240,255,0.15)]', text: 'text-cyan-400', raw: 'rgba(0,240,255,' },
  yellow: { border: 'border-yellow-400/40', bg: 'bg-yellow-400/10', glow: 'shadow-[0_0_20px_rgba(250,204,21,0.15)]', text: 'text-yellow-400', raw: 'rgba(250,204,21,' },
  purple: { border: 'border-purple-400/40', bg: 'bg-purple-400/10', glow: 'shadow-[0_0_20px_rgba(167,139,250,0.15)]', text: 'text-purple-400', raw: 'rgba(167,139,250,' },
  green: { border: 'border-green-400/40', bg: 'bg-green-400/10', glow: 'shadow-[0_0_20px_rgba(52,211,153,0.15)]', text: 'text-green-400', raw: 'rgba(52,211,153,' },
};

export default function ExplodedScene({ activeLayer, onLayerClick }: ExplodedSceneProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setRotation((prev) => (prev + 0.15) % 360);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Ambient glow */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-cyan-500/[0.05] blur-[80px]" />

      {/* Exploded chip layers */}
      <div
        className="relative flex flex-col items-center gap-4"
        style={{
          perspective: '800px',
          transform: `rotateY(${Math.sin(rotation * (Math.PI / 180)) * 4}deg)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {layers.map((layer, i) => {
          const c = colorMap[layer.color];
          const isActive = activeLayer === i;
          return (
            <div key={layer.name} className="relative">
              {/* Inter-layer shadow / depth separator */}
              {i > 0 && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-[240px] h-[6px] rounded-full blur-sm pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse, ${c.raw}0.12) 0%, transparent 70%)`,
                  }}
                />
              )}

              <button
                onClick={() => onLayerClick(i)}
                className={`relative w-[260px] h-[50px] rounded-lg border transition-all duration-500 cursor-pointer overflow-hidden ${
                  c.border
                } ${c.bg} ${isActive ? c.glow : ''} ${
                  isActive ? 'scale-105 z-10' : 'hover:scale-[1.02]'
                }`}
                style={{
                  transform: `rotateX(25deg) rotateZ(-5deg) ${isActive ? 'scale(1.08) translateY(-4px)' : ''}`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Bottom edge depth line */}
                <div
                  className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${c.raw}0.2), transparent)`,
                  }}
                />

                {/* Internal pattern: Microfluidic Network */}
                {i === 0 && (
                  <div className="absolute inset-1 opacity-50 pointer-events-none">
                    {/* Channel grid */}
                    <svg className="w-full h-full" viewBox="0 0 240 40" fill="none">
                      {/* Horizontal channels */}
                      <line x1="10" y1="12" x2="230" y2="12" stroke="rgba(0,240,255,0.3)" strokeWidth="0.5" strokeDasharray="4 3" />
                      <line x1="10" y1="20" x2="230" y2="20" stroke="rgba(0,240,255,0.4)" strokeWidth="0.8" />
                      <line x1="10" y1="28" x2="230" y2="28" stroke="rgba(0,240,255,0.3)" strokeWidth="0.5" strokeDasharray="4 3" />
                      {/* Vertical connectors */}
                      {Array.from({ length: 8 }).map((_, j) => (
                        <line key={j} x1={30 + j * 28} y1="10" x2={30 + j * 28} y2="30" stroke="rgba(0,240,255,0.2)" strokeWidth="0.5" />
                      ))}
                      {/* Junction dots */}
                      {Array.from({ length: 8 }).map((_, j) => (
                        <circle key={`d${j}`} cx={30 + j * 28} cy={20} r="1.5" fill="rgba(0,240,255,0.5)" />
                      ))}
                      {/* Flow arrows */}
                      <path d="M20 20 L28 17 L28 23 Z" fill="rgba(0,240,255,0.35)" />
                      <path d="M210 20 L218 17 L218 23 Z" fill="rgba(0,240,255,0.35)" />
                    </svg>
                  </div>
                )}

                {/* Internal pattern: Sensor Layer / Au electrodes */}
                {i === 1 && (
                  <div className="absolute inset-1 opacity-50 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 240 40" fill="none">
                      {/* Electrode fingers */}
                      {Array.from({ length: 14 }).map((_, j) => (
                        <rect key={j} x={12 + j * 16} y="6" width="2" height="28" rx="1" fill="rgba(250,204,21,0.35)" />
                      ))}
                      {/* Connecting bus bars */}
                      <rect x="8" y="4" width="224" height="2" rx="1" fill="rgba(250,204,21,0.25)" />
                      <rect x="8" y="34" width="224" height="2" rx="1" fill="rgba(250,204,21,0.25)" />
                      {/* Contact pads */}
                      <rect x="10" y="2" width="8" height="6" rx="1" fill="rgba(250,204,21,0.4)" />
                      <rect x="222" y="2" width="8" height="6" rx="1" fill="rgba(250,204,21,0.4)" />
                      <rect x="10" y="32" width="8" height="6" rx="1" fill="rgba(250,204,21,0.4)" />
                      <rect x="222" y="32" width="8" height="6" rx="1" fill="rgba(250,204,21,0.4)" />
                    </svg>
                  </div>
                )}

                {/* Internal pattern: Piezo Transducers */}
                {i === 2 && (
                  <div className="absolute inset-1 opacity-50 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 240 40" fill="none">
                      {/* Transducer elements */}
                      {Array.from({ length: 6 }).map((_, j) => (
                        <g key={j}>
                          <rect x={18 + j * 36} y="8" width="24" height="24" rx="3" fill="none" stroke="rgba(167,139,250,0.35)" strokeWidth="1" />
                          {/* Piezo wave pattern */}
                          <path
                            d={`M${22 + j * 36} 20 Q${26 + j * 36} 12 ${30 + j * 36} 20 Q${34 + j * 36} 28 ${38 + j * 36} 20`}
                            stroke="rgba(167,139,250,0.5)"
                            strokeWidth="1"
                            fill="none"
                          />
                          <circle cx={30 + j * 36} cy={20} r="2" fill="rgba(167,139,250,0.3)" />
                        </g>
                      ))}
                    </svg>
                  </div>
                )}

                {/* Internal pattern: Reagent Chambers */}
                {i === 3 && (
                  <div className="absolute inset-1 opacity-50 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 240 40" fill="none">
                      {/* Chamber wells */}
                      {Array.from({ length: 8 }).map((_, j) => (
                        <g key={j}>
                          <rect x={10 + j * 28} y="6" width="20" height="28" rx="4" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.8" />
                          {/* Foil seal line */}
                          <line x1={10 + j * 28} y1="10" x2={30 + j * 28} y2="10" stroke="rgba(52,211,153,0.4)" strokeWidth="0.5" strokeDasharray="2 1" />
                          {/* Fill level */}
                          <rect x={12 + j * 28} y={14 + (j % 3) * 4} width="16" height={20 - (j % 3) * 4} rx="2" fill="rgba(52,211,153,0.12)" />
                        </g>
                      ))}
                    </svg>
                  </div>
                )}

                {/* Layer label */}
                <div className={`absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full pl-3 ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                  <div className={`text-xs font-mono ${c.text} whitespace-nowrap`}>{layer.detail}</div>
                </div>
              </button>
            </div>
          );
        })}

        {/* Label */}
        <div className="text-xs text-slate-600 font-mono mt-4 text-center">
          RAPIDE Chip — Exploded View
        </div>
      </div>
    </div>
  );
}
