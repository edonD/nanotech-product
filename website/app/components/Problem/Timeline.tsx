'use client';

import AnimatedSection from '../ui/AnimatedSection';

const currentSteps = [
  { time: '0h', label: 'Sample collected', detail: 'Blood culture drawn at bedside' },
  { time: '18-24h', label: 'Overnight culture', detail: 'Growing pathogen in incubator' },
  { time: '24-36h', label: 'Colony isolation', detail: 'Pure colonies selected manually' },
  { time: '36-56h', label: 'AST incubation', detail: 'Another 16-24h for susceptibility' },
  { time: '48-72h', label: 'Results to clinician', detail: 'Finally actionable data' },
];

const rapideSteps = [
  { time: '0 min', label: 'Sample loaded', detail: 'Direct from patient — blood, urine, or swab' },
  { time: '5 min', label: 'On-chip separation', detail: 'DLD arrays isolate bacteria automatically' },
  { time: '10 min', label: 'Pathogen concentrated', detail: 'Acoustic focusing into micro-wells' },
  { time: '15-55 min', label: 'Real-time AST', detail: '12 antibiotics tested simultaneously' },
  { time: '< 60 min', label: 'Results delivered', detail: 'S/I/R report wirelessly to EMR' },
];

export default function Timeline() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Current Workflow */}
      <AnimatedSection delay={0.1} direction="left">
        <div className="p-6 rounded-2xl border border-red-500/10 bg-red-500/[0.02]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <h4 className="text-lg font-bold text-red-400 tracking-wide uppercase">
              Current Standard — 48-72 Hours
            </h4>
          </div>
          <div className="space-y-4">
            {currentSteps.map((step, i) => (
              <div key={step.label} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-red-500/20 bg-red-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                  </div>
                  {i < currentSteps.length - 1 && (
                    <div className="w-px h-8 bg-gradient-to-b from-red-500/20 to-transparent mt-1" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-mono text-red-400/70">{step.time}</span>
                    <span className="text-white font-medium">{step.label}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* RAPIDE Workflow */}
      <AnimatedSection delay={0.2} direction="right">
        <div className="p-6 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.02]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <h4 className="text-lg font-bold text-cyan-400 tracking-wide uppercase">
              RAPIDE — Under 60 Minutes
            </h4>
          </div>
          <div className="space-y-4">
            {rapideSteps.map((step, i) => (
              <div key={step.label} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  {i < rapideSteps.length - 1 && (
                    <div className="w-px h-8 bg-gradient-to-b from-cyan-500/30 to-transparent mt-1" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-mono text-cyan-400/70">{step.time}</span>
                    <span className="text-white font-medium">{step.label}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Time savings highlight */}
          <div className="mt-6 p-4 rounded-xl bg-cyan-500/[0.05] border border-cyan-500/10 text-center">
            <span className="text-3xl font-bold text-cyan-400">72x</span>
            <span className="text-slate-400 ml-2">faster than current standard</span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
