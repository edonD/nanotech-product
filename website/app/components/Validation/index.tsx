'use client';

import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import GlassCard from '../ui/GlassCard';

const subsystems = [
  {
    name: 'DLD Bacterial Separation',
    trl: 6,
    risk: 'Medium',
    detail: '97% capture efficiency demonstrated in clinical samples. Label-free continuous flow. Validated since 2004.',
    citations: ['Nature Communications, 2024', 'Lab on a Chip, 2023'],
  },
  {
    name: 'Impedance Growth Detection',
    trl: 6,
    risk: 'Medium',
    detail: '12 CFU/mL detection sensitivity. Growth vs. no-growth detectable in 30-45 minutes. Multi-frequency 1kHz-10MHz.',
    citations: ['Scientific Reports, 2024', 'Biosensors & Bioelectronics, 2023'],
  },
  {
    name: 'On-Chip Antibiotic Storage',
    trl: 5,
    risk: 'Medium',
    detail: 'Lyophilization process validated. 12-month shelf life target at room temperature. Foil-sealed reservoirs.',
    citations: ['Microsystems & Nanoengineering, 2024'],
  },
  {
    name: 'ML Growth Classification',
    trl: 6,
    risk: 'Low',
    detail: '<100KB model on low-power MCU. 94% sensitivity demonstrated. Validated against CLSI/EUCAST breakpoints.',
    citations: ['Nature Medicine, 2024', 'ACS Sensors, 2023'],
  },
  {
    name: 'Chip Manufacturing',
    trl: 7,
    risk: 'Low',
    detail: 'Standard MEMS/injection molding processes. Established supply chain via STMicro, X-FAB, Silex.',
    citations: ['Industry standard processes'],
  },
  {
    name: 'Reader Electronics',
    trl: 7,
    risk: 'Low',
    detail: 'Standard impedance analyzer + MCU architecture. Proven embedded design patterns.',
    citations: ['Industry standard components'],
  },
];

const specsComparison = [
  { param: 'Time to result', rapide: '< 60 min', standard: '48-72 hours' },
  { param: 'Sample type', rapide: 'Direct from patient', standard: 'Requires overnight culture' },
  { param: 'Operator skill', rapide: 'Nurse-level', standard: 'Lab technician' },
  { param: 'Antibiotics tested', rapide: '12 per chip', standard: '12-20 per panel' },
  { param: 'Sample volume', rapide: '100 µL', standard: '1-10 mL' },
  { param: 'Detection limit', rapide: '12 CFU/mL', standard: '~10⁵ CFU/mL' },
  { param: 'Reader cost', rapide: '< $5,000', standard: '$50,000-$180,000' },
  { param: 'Portability', rapide: '4.8 kg portable', standard: 'Fixed laboratory' },
];

export default function Validation() {
  return (
    <section id="validation" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.02] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Technology Validation"
          title="Grounded in peer-reviewed science"
          subtitle="Every subsystem builds on demonstrated, published results. The integration is the innovation."
        />

        {/* TRL Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {subsystems.map((sub, i) => (
            <AnimatedSection key={sub.name} delay={i * 0.08}>
              <GlassCard className="h-full">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold text-sm">{sub.name}</h4>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                    sub.risk === 'Low'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {sub.risk} Risk
                  </span>
                </div>

                {/* TRL bar */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-slate-500 font-mono">TRL</span>
                  <div className="flex-1 h-2 bg-white/[0.05] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${(sub.trl / 9) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-cyan-400 font-mono font-bold">{sub.trl}/9</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-3">{sub.detail}</p>

                <div className="border-t border-white/[0.05] pt-2">
                  {sub.citations.map((cite) => (
                    <div key={cite} className="text-xs text-slate-600 font-mono">{cite}</div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Specs comparison table */}
        <AnimatedSection>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            RAPIDE vs. State of the Art
          </h3>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 text-slate-500 font-mono text-xs">Parameter</th>
                  <th className="text-center py-3 px-4 text-cyan-400 font-mono text-xs">RAPIDE</th>
                  <th className="text-center py-3 px-4 text-slate-500 font-mono text-xs">Current Standard</th>
                </tr>
              </thead>
              <tbody>
                {specsComparison.map((row) => (
                  <tr key={row.param} className="border-b border-white/[0.04]">
                    <td className="py-3 px-4 text-slate-400">{row.param}</td>
                    <td className="text-center py-3 px-4 text-cyan-400 font-semibold">{row.rapide}</td>
                    <td className="text-center py-3 px-4 text-slate-500">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
