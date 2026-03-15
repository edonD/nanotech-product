'use client';

import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import GlassCard from '../ui/GlassCard';
import dynamic from 'next/dynamic';

const ReaderScene = dynamic(() => import('./ReaderScene'), { ssr: false });

const specs = [
  { label: 'Dimensions', value: '30 × 20 × 15 cm', icon: '📐' },
  { label: 'Weight', value: '< 5 kg (4.8 kg)', icon: '⚖️' },
  { label: 'Cost', value: '< $5,000', icon: '💰' },
  { label: 'Connectivity', value: 'Wi-Fi, Bluetooth, USB', icon: '📡' },
  { label: 'Inference', value: 'Edge AI, no cloud needed', icon: '🧠' },
  { label: 'EMR Integration', value: 'HL7 FHIR compatible', icon: '🏥' },
];

const features = [
  {
    title: 'Chip Insertion',
    description: 'The disposable RAPIDE chip slides into the reader through a guided slot. Automatic alignment ensures correct electrical and fluidic connection.',
  },
  {
    title: 'Temperature Control',
    description: 'Precision heating maintains 37°C for optimal bacterial growth kinetics. Closed-loop PID control via on-chip Pt RTD sensors.',
  },
  {
    title: 'Impedance Readout',
    description: 'Multi-frequency impedance spectroscopy reads all 12 AST chambers simultaneously. 30-second measurement intervals capture real-time growth curves.',
  },
  {
    title: 'Edge AI Classification',
    description: 'On-board ML classifier trained on >100,000 growth curves. Determines S/I/R within 30-45 minutes. No cloud dependency — results stay local.',
  },
];

export default function Reader() {
  return (
    <section id="reader" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-teal-500/[0.03] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="The Reader"
          title="Portable. Intelligent. Clinical-grade."
          subtitle="A compact benchtop unit that turns any room into a rapid diagnostics lab. No specialized training required."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Reader */}
          <AnimatedSection direction="left">
            <div className="h-[400px] md:h-[500px] rounded-2xl border border-white/[0.06] bg-black/20 overflow-hidden">
              <ReaderScene />
            </div>
          </AnimatedSection>

          {/* Specs grid */}
          <div className="space-y-6">
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-3">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
                  >
                    <span className="text-2xl mb-2 block">{spec.icon}</span>
                    <div className="text-sm text-slate-500">{spec.label}</div>
                    <div className="text-white font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection delay={0.2} direction="right">
              <div className="space-y-3 mt-4">
                {features.map((feature, i) => (
                  <details key={feature.title} className="group">
                    <summary className="flex items-center gap-3 p-3 rounded-lg border border-white/[0.05] bg-white/[0.02] cursor-pointer transition-all hover:border-cyan-500/20 hover:bg-white/[0.04]">
                      <span className="text-cyan-400 font-mono text-xs w-6">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-white font-medium flex-1">{feature.title}</span>
                      <svg className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-12 pb-3 pt-1">
                      <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </details>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
