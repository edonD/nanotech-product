'use client';

import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import CrisisStats from './CrisisStats';
import Timeline from './Timeline';

export default function Problem() {
  return (
    <section id="crisis" className="relative py-32 overflow-hidden">
      {/* Urgent amber ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/[0.03] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="The Crisis"
          title="Antimicrobial resistance is killing 1.27 million people every year"
          subtitle="Clinicians are forced to guess which antibiotic to prescribe. Lab results take 48-72 hours. For sepsis patients, every hour of delay increases mortality by 7%."
          labelColor="text-amber-400"
        />

        <CrisisStats />

        <AnimatedSection delay={0.3} className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            What happens while waiting for lab results?
          </h3>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            The current diagnostic workflow forces a dangerous 48-72 hour gap between
            sample collection and actionable results.
          </p>
        </AnimatedSection>

        <Timeline />

        {/* Mortality callout */}
        <AnimatedSection delay={0.2} className="mt-16">
          <div className="relative max-w-3xl mx-auto p-8 rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] backdrop-blur-sm">
            <div className="absolute -top-3 left-8 px-3 py-1 bg-amber-500 rounded-full text-xs font-bold text-black tracking-wider uppercase">
              Critical
            </div>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              In sepsis, <span className="text-amber-400 font-bold">every hour of delayed
              appropriate antibiotic therapy increases mortality by ~7%</span>. By the time
              lab results arrive, patients have either recovered on unnecessarily broad
              antibiotics — fueling resistance — or deteriorated irreversibly.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
