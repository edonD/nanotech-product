'use client';

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Founder profile */}
          <AnimatedSection direction="left">
            <GlassCard className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center">
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

              {/* Expertise bars */}
              <div className="space-y-4">
                {expertise.map((exp) => (
                  <div key={exp.area}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-white font-medium">{exp.area}</span>
                      <span className="text-xs text-cyan-400 font-mono">{exp.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${exp.level}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">{exp.desc}</p>
                  </div>
                ))}
              </div>

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
          </AnimatedSection>

          {/* Advisory board + partnerships */}
          <div className="space-y-6">
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
