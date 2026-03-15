'use client';

import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from '../ui/AnimatedCounter';

const useCases = [
  {
    title: 'Emergency Sepsis',
    scenario: 'A patient arrives in the ER with suspected sepsis. Every hour of delayed appropriate antibiotic therapy increases mortality by 7%.',
    impact: '50,000+ US deaths preventable per year',
    stat: '270K',
    statLabel: 'US sepsis deaths/year',
    color: 'text-red-400',
    borderColor: 'border-red-500/15',
    accentColor: 'bg-red-500',
  },
  {
    title: 'Surgical Infections',
    scenario: 'Post-operative wound infections require rapid identification of the pathogen and its resistance profile to prevent implant failure and reoperation.',
    impact: '$10B+ annual cost from surgical site infections',
    stat: '$10B+',
    statLabel: 'Annual SSI cost',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/15',
    accentColor: 'bg-amber-500',
  },
  {
    title: 'Rural & Field Hospitals',
    scenario: 'Remote clinics and military field hospitals lack microbiology labs. RAPIDE brings AST capability anywhere — no infrastructure required.',
    impact: 'First-ever POC AST for resource-limited settings',
    stat: '4.7M',
    statLabel: 'AMR deaths in low-income countries',
    color: 'text-green-400',
    borderColor: 'border-green-500/15',
    accentColor: 'bg-green-500',
  },
  {
    title: 'UTI Diagnostics',
    scenario: '150M+ UTI cases per year globally. Most are treated empirically. Rising fluoroquinolone resistance makes targeted therapy increasingly critical.',
    impact: 'Simplest regulatory pathway — FDA UTI indication first',
    stat: '150M+',
    statLabel: 'Global UTI cases/year',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/15',
    accentColor: 'bg-blue-500',
  },
  {
    title: 'Antibiotic Stewardship',
    scenario: 'Hospital stewardship programs need real-time resistance data to reduce unnecessary broad-spectrum antibiotic use and slow the evolution of superbugs.',
    impact: '30-50% reduction in unnecessary broad-spectrum use',
    stat: '30-50%',
    statLabel: 'Reduction in broad-spectrum Rx',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/15',
    accentColor: 'bg-cyan-500',
  },
  {
    title: 'Developing World',
    scenario: 'Sub-Saharan Africa and South Asia bear the heaviest AMR burden with the least diagnostic infrastructure. A portable $5K reader changes the equation.',
    impact: 'WHO prequalification pathway for global access',
    stat: '4.95M',
    statLabel: 'Global AMR-associated deaths',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/15',
    accentColor: 'bg-purple-500',
  },
];

export default function ClinicalImpact() {
  return (
    <section id="impact" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-green-500/[0.02] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Clinical Impact"
          title="Saving lives, reducing resistance"
          subtitle="When targeted antibiotic therapy starts in minutes instead of days, the impact cascades through the entire healthcare system."
        />

        {/* Impact metrics */}
        <AnimatedSection className="mb-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-8 rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/[0.06] to-cyan-900/[0.02] backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                <AnimatedCounter end={72} className="text-cyan-400" />h{' '}
                <span className="text-white">&#8594;</span>{' '}
                <AnimatedCounter end={1} className="text-cyan-400" />h
              </div>
              <div className="text-slate-400 font-medium">Time to targeted therapy</div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-green-500/10 bg-gradient-to-br from-green-500/[0.06] to-green-900/[0.02] backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                <AnimatedCounter end={50} suffix="K+" className="text-green-400" />
              </div>
              <div className="text-slate-400 font-medium">US lives saveable per year</div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-amber-500/10 bg-gradient-to-br from-amber-500/[0.06] to-amber-900/[0.02] backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                $<AnimatedCounter end={5} className="text-amber-400" />-
                <AnimatedCounter end={15} className="text-amber-400" />B
              </div>
              <div className="text-slate-400 font-medium">Annual US healthcare savings</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <AnimatedSection key={uc.title} delay={i * 0.08}>
              <GlassCard className="h-full overflow-hidden" glow="cyan">
                {/* Colored accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${uc.accentColor} opacity-60 rounded-t-2xl`} />
                <div className={`text-xs font-mono ${uc.color} tracking-wider mb-3 uppercase`}>
                  {uc.stat} — {uc.statLabel}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{uc.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{uc.scenario}</p>
                <div className={`text-sm font-medium ${uc.color} border-t border-white/[0.05] pt-3`}>
                  {uc.impact}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* ROI callout */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="max-w-3xl mx-auto p-[1px] rounded-2xl bg-gradient-to-r from-green-500/40 via-cyan-500/20 to-green-500/40">
            <div className="p-8 rounded-2xl bg-slate-950/90 backdrop-blur-sm text-center">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-green-400 tracking-wider uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Proven ROI
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Hospital ROI</h3>
              <p className="text-slate-400 leading-relaxed">
                A single avoided ICU day saves <span className="text-green-400 font-semibold">$2,000-$4,000</span>.
                With a per-test cost of ~$45 and an average of{' '}
                <span className="text-green-400 font-semibold">1.75-6 fewer hospital days</span> per
                sepsis patient on targeted therapy, the RAPIDE chip delivers{' '}
                <span className="text-green-400 font-semibold">$3,500-$24,000 in savings per patient</span>.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
