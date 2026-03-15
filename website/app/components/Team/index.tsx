'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import GlassCard from '../ui/GlassCard';

const expertise = [
  { area: 'MEMS Fabrication', desc: 'Cleanroom experience — chip design, lithography, etching, deposition', level: 95 },
  { area: 'Microfluidic Design', desc: 'DLD arrays, inertial focusing, acoustic manipulation at microscale', level: 90 },
  { area: 'Biosensor Integration', desc: 'Impedance spectroscopy, electrode design, signal processing', level: 88 },
  { area: 'Embedded Systems & AI', desc: 'Edge inference, TinyML, embedded firmware, real-time systems', level: 82 },
];

const tools = ['L-Edit', 'COMSOL', 'ANSYS', 'KLayout', 'Cadence Virtuoso', 'Python/TensorFlow Lite'];

const advisoryRoles = [
  { title: 'Clinical Advisor', desc: 'Infectious Disease / ICU Physician', status: 'Recruiting' },
  { title: 'Regulatory Advisor', desc: 'FDA IVD/510(k) Expert', status: 'Recruiting' },
  { title: 'Manufacturing Advisor', desc: 'MEMS Foundry / Scale-up', status: 'Recruiting' },
];

function ExpertiseBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-4">
      {expertise.map((exp) => (
        <div key={exp.area}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-white font-medium">{exp.area}</span>
            <span className="text-xs text-cyan-400 font-mono">{exp.level}%</span>
          </div>
          <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: visible ? `${exp.level}%` : '0%' }}
            />
          </div>
          <p className="text-xs text-slate-600 mt-0.5">{exp.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/[0.02] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Team"
          title="The chip designer is the founder"
          subtitle="This is not a product that a software engineer or biologist can build. The MEMS chip IS the product — and the founder is the chip designer."
        />

        {/* Key Insight callout */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12 p-5 rounded-2xl bg-gradient-to-r from-cyan-500/[0.08] to-blue-500/[0.08] border border-cyan-500/20">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-cyan-400 font-mono mb-1">Key Insight</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The MEMS chip <span className="text-white font-semibold">IS</span> the product, and the founder <span className="text-white font-semibold">IS</span> the chip designer. Unlike software startups where engineering talent is abundant, MEMS chip design requires rare microsystem engineering expertise that software and biology teams simply cannot replicate.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Founder profile — gradient border treatment */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/40 via-blue-500/20 to-purple-500/40">
              <GlassCard className="h-full rounded-[15px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,200,255,0.15)]">
                    <span className="text-2xl font-bold gradient-text">V</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Founder & CEO</h3>
                    <p className="text-sm text-cyan-400">Microsystems Engineer</p>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Background in microsystem engineering — the rare discipline that combines
                  mechanical, electrical, fluidic, and sensing design at the micro/nanoscale.
                  Can design, simulate, and fabricate the MEMS chip from first principles.
                </p>

                {/* Animated expertise bars */}
                <ExpertiseBars />

                {/* Tools */}
                <div className="mt-6 pt-4 border-t border-white/[0.05]">
                  <span className="text-xs text-slate-500 font-mono mb-2 block">Design Tools</span>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span key={tool} className="text-xs px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-400">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </AnimatedSection>

          {/* Advisory board + partnerships */}
          <div className="space-y-6">
            {/* Why this founder callout */}
            <AnimatedSection delay={0.05} direction="right">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/[0.06] to-cyan-500/[0.06] border border-purple-500/15">
                <h4 className="text-sm font-bold text-purple-400 font-mono mb-2">Why This Founder</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  MEMS chip design sits at the intersection of mechanical engineering, electrical engineering, microfluidics, and materials science. Fewer than a handful of programs worldwide produce graduates with this cross-domain skillset. Software teams can&apos;t learn it in a bootcamp; biology teams can&apos;t outsource it to a contractor. The founder&apos;s microsystem engineering background is the single hardest capability to replicate.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} direction="right">
              <GlassCard>
                <h4 className="text-lg font-bold text-white mb-4">Advisory Board</h4>
                <div className="space-y-3">
                  {advisoryRoles.map((role) => (
                    <div key={role.title} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <div>
                        <div className="text-sm text-white font-medium">{role.title}</div>
                        <div className="text-xs text-slate-500">{role.desc}</div>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {role.status}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <GlassCard>
                <h4 className="text-lg font-bold text-white mb-4">Partnership Opportunities</h4>
                <div className="space-y-3">
                  {[
                    { title: 'Academic Medical Centers', desc: 'Clinical validation studies with patient samples' },
                    { title: 'MEMS Foundries', desc: 'Wafer-scale chip manufacturing partnerships' },
                    { title: 'Pharmaceutical Companies', desc: 'Custom antibiotic panel development' },
                    { title: 'Global Health Organizations', desc: 'WHO prequalification for developing world deployment' },
                  ].map((p) => (
                    <div key={p.title} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <div className="text-sm text-white font-medium">{p.title}</div>
                      <div className="text-xs text-slate-500">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
