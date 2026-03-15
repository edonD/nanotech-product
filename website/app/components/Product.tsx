"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Product() {
  return (
    <section id="product" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4 block">
            The Product
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Two Components.
            <br />
            <span className="gradient-text">One Breakthrough.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            A disposable MEMS microfluidic chip paired with a compact, intelligent
            reader. Together, they bring laboratory-grade antibiotic susceptibility
            testing to any bedside, clinic, or field hospital.
          </p>
        </AnimatedSection>

        {/* Two product cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* The Chip */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">The RAPIDE Chip</h3>
                  <span className="text-sm text-cyan-400 font-medium">Disposable, single-use</span>
                </div>
              </div>

              {/* Chip visualization */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 mb-6 border border-white/5">
                <div className="aspect-[4/3] relative flex items-center justify-center">
                  {/* Simplified chip diagram */}
                  <div className="w-full max-w-[280px]">
                    <div className="relative bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/20 p-4">
                      <div className="text-center text-xs text-cyan-400 font-mono mb-3">RAPIDE-AST-12</div>
                      {/* Sample inlet */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-cyan-500/30 border border-cyan-500/40 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        </div>
                        <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded" />
                        <span className="text-[10px] text-slate-500">Sample In</span>
                      </div>
                      {/* DLD separator */}
                      <div className="bg-white/5 rounded p-2 mb-3">
                        <div className="flex gap-[2px]">
                          {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="w-1 h-3 rounded-full bg-cyan-500/20" />
                          ))}
                        </div>
                        <span className="text-[9px] text-slate-500 mt-1 block">DLD Separation Array</span>
                      </div>
                      {/* AST chambers */}
                      <div className="grid grid-cols-4 gap-1 mb-2">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="aspect-square rounded bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/15 flex items-center justify-center">
                            <span className="text-[8px] text-blue-400/70">Ab{i + 1}</span>
                          </div>
                        ))}
                      </div>
                      <span className="text-[9px] text-slate-500">12 Parallel AST Chambers</span>
                      {/* Electrode lines */}
                      <div className="flex gap-1 mt-2">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 to-purple-500/10" />
                        ))}
                      </div>
                      <span className="text-[9px] text-slate-500">Impedance Electrode Bus</span>
                    </div>
                    <div className="text-center mt-3 text-xs text-slate-500">
                      25mm × 50mm × 3mm
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "On-chip sample prep — no pre-processing needed",
                  "DLD pillar arrays capture bacteria from whole blood",
                  "12 antibiotic chambers with pre-loaded, lyophilized panels",
                  "Integrated impedance sensors track growth in real-time",
                  "~$35-50 per chip at production volume",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* The Reader */}
          <AnimatedSection delay={0.15}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">The Reader</h3>
                  <span className="text-sm text-blue-400 font-medium">Portable, reusable</span>
                </div>
              </div>

              {/* Reader visualization */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 mb-6 border border-white/5">
                <div className="aspect-[4/3] relative flex items-center justify-center">
                  <div className="w-full max-w-[260px]">
                    <div className="relative bg-gradient-to-b from-slate-700/50 to-slate-800/50 rounded-xl border border-white/10 p-5">
                      {/* Screen */}
                      <div className="bg-[#0a1628] rounded-lg p-3 mb-4 border border-blue-500/10">
                        <div className="text-[10px] text-cyan-400 font-mono mb-2">RAPIDE READER v1.0</div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[9px]">
                            <span className="text-green-400">Amoxicillin</span>
                            <span className="text-green-400 font-bold">S</span>
                          </div>
                          <div className="flex justify-between text-[9px]">
                            <span className="text-red-400">Ciprofloxacin</span>
                            <span className="text-red-400 font-bold">R</span>
                          </div>
                          <div className="flex justify-between text-[9px]">
                            <span className="text-green-400">Meropenem</span>
                            <span className="text-green-400 font-bold">S</span>
                          </div>
                          <div className="flex justify-between text-[9px]">
                            <span className="text-amber-400">Ceftriaxone</span>
                            <span className="text-amber-400 font-bold">I</span>
                          </div>
                        </div>
                        <div className="mt-2 pt-2 border-t border-white/5">
                          <div className="text-[9px] text-slate-500">Time: 47 min | Confidence: 98.2%</div>
                        </div>
                      </div>
                      {/* Chip slot */}
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-8 rounded bg-cyan-500/10 border border-dashed border-cyan-500/30 flex items-center justify-center">
                          <span className="text-[8px] text-cyan-400">CHIP</span>
                        </div>
                        <div className="flex-1 text-[9px] text-slate-500">Insert chip here</div>
                      </div>
                    </div>
                    <div className="text-center mt-3 text-xs text-slate-500">
                      30cm × 20cm × 15cm — 4.8 kg
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Portable — under 5 kg, fits on any bedside table",
                  "Edge AI classifier trained on 100K+ growth curves",
                  "Clear S/I/R report for each antibiotic tested",
                  "Wireless EMR integration (HL7 FHIR compatible)",
                  "Reader price < $5,000 — 30x cheaper than competitors",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Comparison table */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 sm:p-10 overflow-x-auto">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              How RAPIDE Compares
            </h3>
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-slate-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-cyan-400 font-bold bg-cyan-500/5 rounded-t-lg">RAPIDE</th>
                  <th className="py-3 px-4 text-slate-500 font-medium">Accelerate WAVE</th>
                  <th className="py-3 px-4 text-slate-500 font-medium">Q-Linea ASTar</th>
                  <th className="py-3 px-4 text-slate-500 font-medium">Standard AST</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Time to result",
                    rapide: "< 60 min",
                    accel: "2-7 hours",
                    qlinea: "6 hours",
                    standard: "48-72 hours",
                  },
                  {
                    feature: "Direct from sample",
                    rapide: "✓",
                    accel: "✗",
                    qlinea: "✗",
                    standard: "✗",
                  },
                  {
                    feature: "Point of care",
                    rapide: "✓",
                    accel: "✗",
                    qlinea: "✗",
                    standard: "✗",
                  },
                  {
                    feature: "Instrument cost",
                    rapide: "< $5K",
                    accel: "~$180K",
                    qlinea: "~$100K",
                    standard: "~$50K",
                  },
                  {
                    feature: "Per-test cost",
                    rapide: "~$40",
                    accel: "~$100+",
                    qlinea: "~$80+",
                    standard: "~$15",
                  },
                  {
                    feature: "Operator",
                    rapide: "Nurse",
                    accel: "Lab tech",
                    qlinea: "Lab tech",
                    standard: "Lab tech",
                  },
                  {
                    feature: "Portable",
                    rapide: "4.8 kg",
                    accel: "No",
                    qlinea: "No",
                    standard: "No",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-slate-300 font-medium">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-center font-semibold text-cyan-400 bg-cyan-500/5">
                      {row.rapide}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-500">
                      {row.accel}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-500">
                      {row.qlinea}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-500">
                      {row.standard}
                    </td>
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
