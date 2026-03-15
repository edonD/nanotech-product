'use client';

import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from '../ui/AnimatedCounter';

const competitors = [
  { name: 'RAPIDE', time: '<60 min', direct: true, poc: true, cost: '<$5K', portable: true, operator: 'Nurse', highlight: true },
  { name: 'Accelerate WAVE', time: '2-7h', direct: false, poc: false, cost: '~$180K', portable: false, operator: 'Lab tech', highlight: false },
  { name: 'Q-Linea ASTar', time: '6h', direct: false, poc: false, cost: '~$100K', portable: false, operator: 'Lab tech', highlight: false },
  { name: 'Resistell', time: '2-4h', direct: false, poc: false, cost: '~$80K', portable: false, operator: 'Lab tech', highlight: false },
  { name: 'Avails Medical', time: '3-4h', direct: false, poc: false, cost: '~$50K', portable: false, operator: 'Lab tech', highlight: false },
];

export default function Market() {
  return (
    <section id="market" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.03] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Market & Opportunity"
          title="A $7.5 billion market by 2030"
          subtitle="The rapid AST market is growing at 12% CAGR. The point-of-care segment is virtually untouched — a blank canvas for the first mover."
        />

        {/* TAM / SAM / SOM */}
        <AnimatedSection className="mb-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <GlassCard className="text-center" glow="blue">
              <div className="text-xs font-mono text-slate-500 mb-2">TAM</div>
              <div className="text-4xl font-bold text-white mb-1">
                $<AnimatedCounter end={7.5} decimals={1} className="text-white" />B
              </div>
              <div className="text-sm text-slate-400">Global AST market by 2030</div>
              <div className="text-xs text-blue-400 mt-2">12% CAGR from $4.2B (2024)</div>
            </GlassCard>

            <GlassCard className="text-center" glow="cyan">
              <div className="text-xs font-mono text-slate-500 mb-2">SAM</div>
              <div className="text-4xl font-bold text-white mb-1">
                $<AnimatedCounter end={1.2} decimals={1} className="text-white" />B
              </div>
              <div className="text-sm text-slate-400">Rapid/POC AST segment</div>
              <div className="text-xs text-cyan-400 mt-2">Currently almost entirely unfilled</div>
            </GlassCard>

            <GlassCard className="text-center" glow="cyan">
              <div className="text-xs font-mono text-slate-500 mb-2">Year 5 Target</div>
              <div className="text-4xl font-bold text-white mb-1">
                $<AnimatedCounter end={45} className="text-white" />M
              </div>
              <div className="text-sm text-slate-400">Annual recurring revenue</div>
              <div className="text-xs text-cyan-400 mt-2">500 readers, 1M chips/year</div>
            </GlassCard>
          </div>
        </AnimatedSection>

        {/* Competitive landscape */}
        <AnimatedSection className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Competitive Landscape
          </h3>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.01]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 text-slate-500 font-mono text-xs">Feature</th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`text-center py-3 px-4 text-xs font-mono ${
                        c.highlight ? 'text-cyan-400 bg-cyan-500/[0.04]' : 'text-slate-500'
                      }`}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Time to result', key: 'time' as const, bold: true },
                  { label: 'Direct from sample', key: 'direct' as const },
                  { label: 'Point of care', key: 'poc' as const },
                  { label: 'Reader cost', key: 'cost' as const, bold: true },
                  { label: 'Portable', key: 'portable' as const },
                  { label: 'Operator', key: 'operator' as const, bold: true },
                ].map((row, ri) => (
                  <tr key={row.label} className={`border-b border-white/[0.04] ${ri % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                    <td className="py-3 px-4 text-slate-400">{row.label}</td>
                    {competitors.map((c) => {
                      const val = c[row.key];
                      const display = typeof val === 'boolean' ? (val ? '✓' : '✗') : val;
                      return (
                        <td key={c.name} className={`text-center py-3 px-4 ${
                          c.highlight
                            ? `text-cyan-400 bg-cyan-500/[0.04] ${row.bold ? 'font-semibold' : ''}`
                            : `text-slate-400 ${typeof val === 'boolean' && !val ? 'text-slate-600' : ''}`
                        }`}>
                          {display}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Business model + Regulatory + Funding */}
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection direction="left">
            <GlassCard className="h-full">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">&#9670;</span> Business Model
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02]">
                  <span className="text-slate-400">Reader</span>
                  <span className="text-white font-semibold">$4,500</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02]">
                  <span className="text-slate-400">Chip / test</span>
                  <span className="text-white font-semibold">$45</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02]">
                  <span className="text-slate-400">Hospital rev</span>
                  <span className="text-white font-semibold">$50-200K/yr</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02]">
                  <span className="text-slate-400">Chip COGS</span>
                  <span className="text-green-400 font-semibold">~$5 at 1M/yr</span>
                </div>
                <p className="text-slate-600 text-xs mt-1">
                  Razor/razorblade: low-margin reader, high-margin recurring chips.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard className="h-full">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">&#9670;</span> Regulatory Pathway
              </h4>
              <div className="space-y-3">
                {[
                  { phase: 'Phase 1', time: 'Yr 1-2', label: 'Research Use Only', desc: 'No FDA clearance needed. Sell to academic centers.', active: true },
                  { phase: 'Phase 2', time: 'Yr 2-3', label: 'FDA 510(k) / De Novo', desc: 'UTI indication first. CE marking for EU.', active: false },
                  { phase: 'Phase 3', time: 'Yr 3-5', label: 'Expanded Indications', desc: 'BSI, wounds, respiratory. WHO prequalification.', active: false },
                ].map((item) => (
                  <div key={item.phase} className={`flex gap-3 p-3 rounded-lg ${item.active ? 'bg-cyan-500/[0.05] border border-cyan-500/10' : 'bg-white/[0.02]'}`}>
                    <div>
                      <div className="text-xs font-mono text-cyan-400">{item.phase} — {item.time}</div>
                      <div className="text-sm text-white font-semibold">{item.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <GlassCard className="h-full">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">&#9670;</span> Funding Alignment
              </h4>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-green-500/[0.03] border border-green-500/10">
                  <div className="text-xs font-mono text-green-400">CARB-X 2026</div>
                  <div className="text-sm text-white font-semibold">$1-5M non-dilutive</div>
                  <div className="text-xs text-slate-500 mt-0.5">&quot;Diagnosis of acute infections in 60 min or less&quot; — direct match</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02]">
                  <div className="text-xs font-mono text-blue-400">BARDA DRIVe</div>
                  <div className="text-sm text-white font-semibold">$1-10M milestone</div>
                  <div className="text-xs text-slate-500 mt-0.5">Post-prototype diagnostics innovation</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02]">
                  <div className="text-xs font-mono text-purple-400">NIH SBIR</div>
                  <div className="text-sm text-white font-semibold">$150K Phase I</div>
                  <div className="text-xs text-slate-500 mt-0.5">Bridge to seed round</div>
                </div>
                <div className="p-3 rounded-lg bg-cyan-500/[0.03] border border-cyan-500/10">
                  <div className="text-xs font-mono text-cyan-400">Seed VC</div>
                  <div className="text-sm text-white font-semibold">$2.5M target</div>
                  <div className="text-xs text-slate-500 mt-0.5">Chip proto + reader dev + clinical validation</div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
