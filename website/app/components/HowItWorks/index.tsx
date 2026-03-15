'use client';

import SectionHeader from '../ui/SectionHeader';
import ProcessStep from './ProcessStep';
import AnimatedSection from '../ui/AnimatedSection';

const steps = [
  {
    number: 1,
    title: 'Sample Loaded',
    subtitle: 'Direct from patient',
    description:
      'A clinician loads 100µL of raw patient sample — blood, urine, or wound swab — directly into the chip inlet port. No pre-processing, no culture, no waiting.',
    technical: 'Passive capillary loading via surface-treated inlet. Sample flows through hydrophilic PDMS channel at controlled rate.',
    icon: 'inlet',
    color: 'cyan',
  },
  {
    number: 2,
    title: 'Bacterial Separation',
    subtitle: 'DLD pillar arrays',
    description:
      'Deterministic Lateral Displacement arrays use precisely arranged micropillars to separate bacteria from blood cells, platelets, and debris — no antibodies, no labels needed.',
    technical: '15-25µm pillars with 10-20µm gaps at 2-5° tilt angle. 97% bacterial capture efficiency. Label-free continuous flow.',
    icon: 'separation',
    color: 'teal',
  },
  {
    number: 3,
    title: 'Pathogen Concentration',
    subtitle: 'Acoustic focusing',
    description:
      'On-chip piezoelectric transducers create standing acoustic waves that concentrate bacteria from the separated stream into micro-wells — ensuring sufficient cell density for rapid AST.',
    technical: 'AlN piezoelectric transducers. Acoustic standing waves at ~MHz frequency. Concentration factor >100x.',
    icon: 'concentration',
    color: 'blue',
  },
  {
    number: 4,
    title: 'Parallel AST',
    subtitle: '12 antibiotic chambers',
    description:
      'The concentrated sample is split into 12 parallel micro-chambers, each pre-loaded with a different antibiotic at clinically relevant concentrations. Impedance sensors monitor bacterial growth or death every 30 seconds.',
    technical: 'Interdigitated gold electrodes (5µm pitch). Multi-frequency impedance spectroscopy (1kHz-10MHz). Real-time growth kinetics.',
    icon: 'parallel',
    color: 'purple',
  },
  {
    number: 5,
    title: 'ML Classification',
    subtitle: 'Susceptibility report',
    description:
      'Edge AI running on the portable reader classifies growth curves in real-time against >100,000 training patterns. Outputs a clear Susceptible / Intermediate / Resistant report for each antibiotic.',
    technical: 'TinyML inference on low-power MCU. <100KB model. Validated against CLSI/EUCAST breakpoints. No cloud dependency.',
    icon: 'report',
    color: 'green',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/[0.02] blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="From sample to susceptibility in 5 steps"
          subtitle="The RAPIDE chip integrates sample preparation, pathogen isolation, antibiotic challenge, and real-time detection on a single disposable MEMS device."
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-purple-500/30" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Result summary */}
        <AnimatedSection delay={0.2} className="mt-20">
          <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl border border-cyan-500/15 bg-gradient-to-r from-cyan-500/[0.03] to-blue-500/[0.03] backdrop-blur-sm">
            <div className="text-5xl font-bold text-white mb-2">
              {'< '}
              <span className="gradient-text">60 minutes</span>
            </div>
            <p className="text-slate-400 text-lg">
              From bedside sample collection to actionable antibiotic susceptibility report —
              no lab infrastructure required.
            </p>
          </div>
        </AnimatedSection>

        {/* Why Now — The Convergence */}
        <div className="mt-24">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-mono text-cyan-400 tracking-[0.2em] uppercase mb-4 block">Why Now</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">The Convergence</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Three recent breakthroughs make RAPIDE possible today when it wasn&apos;t 3 years ago.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <div className="h-full p-6 rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.02] backdrop-blur-sm">
                <span className="text-xs font-mono text-cyan-400 tracking-wider">2024-2025</span>
                <h4 className="text-lg font-bold text-white mt-2 mb-3">Single-Cell Microfluidic AST</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Multiple academic groups published proof that bacterial susceptibility can be determined from single-cell growth dynamics in under 60 minutes using microfluidic confinement.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="h-full p-6 rounded-2xl border border-blue-500/15 bg-blue-500/[0.02] backdrop-blur-sm">
                <span className="text-xs font-mono text-blue-400 tracking-wider">2025</span>
                <h4 className="text-lg font-bold text-white mt-2 mb-3">MEMS Impedance at Scale</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Advances in MEMS fabrication enabled interdigitated electrode arrays with 5µm features on glass/silicon substrates at costs compatible with disposable chips.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="h-full p-6 rounded-2xl border border-purple-500/15 bg-purple-500/[0.02] backdrop-blur-sm">
                <span className="text-xs font-mono text-purple-400 tracking-wider">2024-2025</span>
                <h4 className="text-lg font-bold text-white mt-2 mb-3">Edge AI on Microcontrollers</h4>
                <p className="text-sm text-slate-400 leading-relaxed">TinyML inference on low-power MCUs enables complex growth curve classification directly on a portable reader. No cloud connection required.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
