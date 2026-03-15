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
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 text-slate-500 font-mono text-xs">Feature</th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`text-center py-3 px-4 text-xs font-mono ${
                        c.highlight ? 'text-cyan-400' : 'text-slate-500'
                      }`}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 px-4 text-slate-400">Time to result</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`text-center py-3 px-4 ${c.highlight ? 'text-cyan-400 font-semibold' : 'text-slate-400'}`}>
                      {c.time}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 px-4 text-slate-400">Direct from sample</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`text-center py-3 px-4 ${c.highlight ? 'text-cyan-400' : 'text-slate-400'}`}>
                      {c.direct ? '✓' : '✗'}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 px-4 text-slate-400">Point of care</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`text-center py-3 px-4 ${c.highlight ? 'text-cyan-400' : 'text-slate-400'}`}>
                      {c.poc ? '✓' : '✗'}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 px-4 text-slate-400">Reader cost</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`text-center py-3 px-4 ${c.highlight ? 'text-cyan-400 font-semibold' : 'text-slate-400'}`}>
                      {c.cost}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 px-4 text-slate-400">Portable</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`text-center py-3 px-4 ${c.highlight ? 'text-cyan-400' : 'text-slate-400'}`}>
                      {c.portable ? '✓' : '✗'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400">Operator</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`text-center py-3 px-4 ${c.highlight ? 'text-cyan-400 font-semibold' : 'text-slate-400'}`}>
                      {c.operator}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Business model + Regulatory */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection direction="left">
            <GlassCard className="h-full">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">&#9670;</span> Business Model
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02]">
                  <span className="text-slate-400">Reader</span>
                  <span className="text-white font-semibold">$4,500 <span className="text-slate-500 font-normal">(subsidized)</span></span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02]">
                  <span className="text-slate-400">Chip (per test)</span>
                  <span className="text-white font-semibold">$45 <span className="text-slate-500 font-normal">(~$30 COGS at volume)</span></span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02]">
                  <span className="text-slate-400">Per-hospital revenue</span>
                  <span className="text-white font-semibold">$50K-$200K<span className="text-slate-500 font-normal">/yr</span></span>
                </div>
                <p className="text-slate-500 text-xs mt-2">
                  Razor/razorblade model: low-margin reader placement drives high-margin recurring chip revenue.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <GlassCard className="h-full">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">&#9670;</span> Regulatory Pathway
              </h4>
              <div className="space-y-3">
                {[
                  { phase: 'Phase 1', time: 'Year 1-2', label: 'Research Use Only (RUO)', desc: 'No FDA clearance required. Sell to research hospitals.' },
                  { phase: 'Phase 2', time: 'Year 2-3', label: 'FDA 510(k) / De Novo', desc: 'UTI indication first. Parallel CE marking for EU.' },
                  { phase: 'Phase 3', time: 'Year 3-5', label: 'Expanded Indications', desc: 'Bloodstream infections, wounds, respiratory.' },
                ].map((item) => (
                  <div key={item.phase} className="flex gap-3 p-3 rounded-lg bg-white/[0.02]">
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
        </div>
      </div>
    </section>
  );
}
