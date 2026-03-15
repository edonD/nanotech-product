'use client';

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

const colorMap: Record<string, { border: string; bg: string; glow: string; text: string }> = {
  cyan: { border: 'border-cyan-400/40', bg: 'bg-cyan-400/10', glow: 'shadow-[0_0_20px_rgba(0,240,255,0.15)]', text: 'text-cyan-400' },
  yellow: { border: 'border-yellow-400/40', bg: 'bg-yellow-400/10', glow: 'shadow-[0_0_20px_rgba(250,204,21,0.15)]', text: 'text-yellow-400' },
  purple: { border: 'border-purple-400/40', bg: 'bg-purple-400/10', glow: 'shadow-[0_0_20px_rgba(167,139,250,0.15)]', text: 'text-purple-400' },
  green: { border: 'border-green-400/40', bg: 'bg-green-400/10', glow: 'shadow-[0_0_20px_rgba(52,211,153,0.15)]', text: 'text-green-400' },
};

export default function ExplodedScene({ activeLayer, onLayerClick }: ExplodedSceneProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Ambient glow */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-cyan-500/[0.05] blur-[80px]" />

      {/* Exploded chip layers */}
      <div className="relative flex flex-col items-center gap-4 perspective-[800px]">
        {layers.map((layer, i) => {
          const c = colorMap[layer.color];
          const isActive = activeLayer === i;
          return (
            <button
              key={layer.name}
              onClick={() => onLayerClick(i)}
              className={`relative w-[260px] h-[50px] rounded-lg border transition-all duration-500 cursor-pointer ${
                c.border
              } ${c.bg} ${isActive ? c.glow : ''} ${
                isActive ? 'scale-105 z-10' : 'hover:scale-[1.02]'
              }`}
              style={{
                transform: `rotateX(25deg) rotateZ(-5deg) ${isActive ? 'scale(1.08) translateY(-4px)' : ''}`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Internal pattern */}
              {i === 0 && (
                <div className="absolute inset-2 flex items-center gap-1 opacity-40">
                  {Array.from({ length: 12 }).map((_, j) => (
                    <div key={j} className="w-1 h-1 rounded-full bg-cyan-400" />
                  ))}
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-400/60 to-transparent ml-2" />
                </div>
              )}
              {i === 1 && (
                <div className="absolute inset-2 flex items-center gap-[3px] opacity-40">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div key={j} className="w-[2px] h-full bg-yellow-400/50 rounded" />
                  ))}
                </div>
              )}
              {i === 3 && (
                <div className="absolute inset-2 grid grid-cols-6 gap-1 opacity-30">
                  {Array.from({ length: 12 }).map((_, j) => (
                    <div key={j} className="rounded-sm bg-green-400/40" />
                  ))}
                </div>
              )}

              {/* Layer label */}
              <div className={`absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full pl-3 ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                <div className={`text-xs font-mono ${c.text} whitespace-nowrap`}>{layer.detail}</div>
              </div>
            </button>
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
