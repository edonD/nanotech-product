'use client';

import AnimatedSection from '../ui/AnimatedSection';
import GlassCard from '../ui/GlassCard';

const steps = [
  {
    name: 'Photolithography',
    params: 'UV exposure, 1-5µm resolution',
    description: 'Pattern definition on silicon wafer using photoresist and UV exposure through chrome masks.',
    icon: '1',
  },
  {
    name: 'Deep RIE Etching',
    params: '100µm depth, SF₆/C₄F₈ Bosch process',
    description: 'High-aspect-ratio channel etching using alternating etch/passivation cycles.',
    icon: '2',
  },
  {
    name: 'Metal Deposition',
    params: 'Au/Ti lift-off, 5µm electrode pitch',
    description: 'Electrode patterning via sputtering and lift-off for impedance sensing arrays.',
    icon: '3',
  },
  {
    name: 'Wafer Bonding',
    params: 'Anodic / plasma bonding',
    description: 'Hermetic sealing of microfluidic channels. Glass-silicon or PDMS bonding.',
    icon: '4',
  },
  {
    name: 'Packaging',
    params: 'N₂ atmosphere, reagent loading',
    description: 'Dicing, reagent deposition, foil sealing, and final packaging in nitrogen atmosphere.',
    icon: '5',
  },
];

export default function FabricationProcess() {
  return (
    <div className="mt-24">
      <AnimatedSection className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Fabrication Process
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Standard MEMS cleanroom processes enable wafer-scale manufacturing —
          thousands of chips per wafer at costs below $5/chip at volume.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((step, i) => (
          <AnimatedSection key={step.name} delay={i * 0.1}>
            <GlassCard className="h-full text-center" glow="cyan">
              {/* Step number */}
              <div className="w-10 h-10 rounded-full border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 font-bold text-sm">{step.icon}</span>
              </div>
              <h4 className="text-white font-semibold mb-1">{step.name}</h4>
              <p className="text-xs font-mono text-cyan-400/60 mb-3">{step.params}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600 z-10">
                  &#8594;
                </div>
              )}
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
