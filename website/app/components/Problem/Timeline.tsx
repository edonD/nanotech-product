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
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Current Workflow */}
        <AnimatedSection delay={0.1} direction="left">
          <div className="p-6 rounded-2xl border border-red-500/10 bg-red-500/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <h4 className="text-lg font-bold text-red-400 tracking-wide uppercase">
                Current Standard — 48-72 Hours
              </h4>
            </div>

            {/* Time bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs text-red-400/60 mb-1.5">
                <span>0h</span>
                <span>72h total</span>
              </div>
              <div className="h-2 w-full rounded-full bg-red-500/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-500/40 via-red-500 to-red-400 animate-pulse"
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            <div className="space-y-4">
              {currentSteps.map((step, i) => (
                <div key={step.label} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-red-500/20 bg-red-500/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                    </div>
                    {i < currentSteps.length - 1 && (
                      <div className="w-0.5 h-8 mt-1 rounded-full bg-gradient-to-b from-red-500/40 via-red-400/20 to-transparent animate-pulse" />
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <h4 className="text-lg font-bold text-cyan-400 tracking-wide uppercase">
                RAPIDE — Under 60 Minutes
              </h4>
            </div>

            {/* Time bar — proportionally shorter (60min / 4320min = ~1.4%) */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs text-cyan-400/60 mb-1.5">
                <span>0 min</span>
                <span>60 min total</span>
              </div>
              <div className="h-2 w-full rounded-full bg-cyan-500/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500/60 via-cyan-400 to-cyan-300"
                  style={{ width: '1.4%', minWidth: '6px' }}
                />
              </div>
              <p className="text-[10px] text-cyan-400/40 mt-1">
                Shown to scale against the 72-hour bar above
              </p>
            </div>

            <div className="space-y-4">
              {rapideSteps.map((step, i) => (
                <div key={step.label} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                    {i < rapideSteps.length - 1 && (
                      <div className="w-0.5 h-8 mt-1 rounded-full bg-gradient-to-b from-cyan-500/50 via-cyan-400/20 to-transparent animate-pulse" />
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
          </div>
        </AnimatedSection>
      </div>

      {/* Prominent 72x faster highlight */}
      <AnimatedSection delay={0.3}>
        <div className="relative p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/[0.05] via-cyan-500/[0.1] to-cyan-500/[0.05] text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-pulse" />
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300">
              72x
            </span>
            <div className="text-left">
              <span className="block text-lg font-bold text-white">
                Faster than current standard
              </span>
              <span className="block text-sm text-slate-400">
                From 72 hours down to under 60 minutes
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
