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

const chipLayers = [
  {
    name: "Microfluidic Network",
    material: "PDMS / Silicon",
    color: "cyan",
    features: [
      "Deterministic lateral displacement (DLD) pillar arrays",
      "Label-free bacterial separation from blood cells",
      "Inertial focusing channels for cell ordering",
      "Branching manifold to 12 parallel AST chambers",
    ],
  },
  {
    name: "Sensing & Actuation",
    material: "Silicon / Glass",
    color: "blue",
    features: [
      "Interdigitated gold electrode arrays (5 µm pitch)",
      "Impedance spectroscopy for growth detection",
      "Piezoelectric AlN acoustic pre-concentration",
      "On-chip Pt RTD temperature sensors",
    ],
  },
  {
    name: "Reagent Storage",
    material: "Sealed Reservoirs",
    color: "purple",
    features: [
      "12 lyophilized antibiotic panels",
      "Mueller-Hinton broth reconstitution",
      "Foil-sealed for 12-month shelf life",
      "Room temperature storage",
    ],
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4 block">
            The Science
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            MEMS Engineering Meets
            <br />
            <span className="gradient-text">Clinical Microbiology</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            The RAPIDE chip integrates sample preparation, pathogen isolation,
            and antibiotic susceptibility testing onto a single MEMS microfluidic
            device — fabricated using semiconductor-grade processes.
          </p>
        </AnimatedSection>

        {/* Chip Architecture Diagram */}
        <AnimatedSection className="mb-20">
          <div className="glass-card rounded-2xl p-8 sm:p-12">
            <h3 className="text-xl font-bold text-white mb-8 text-center">
              Three-Layer Chip Architecture
            </h3>

            <div className="space-y-6">
              {chipLayers.map((layer, i) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <div
                    className={`rounded-xl p-6 border ${
                      layer.color === "cyan"
                        ? "bg-cyan-500/5 border-cyan-500/20"
                        : layer.color === "blue"
                        ? "bg-blue-500/5 border-blue-500/20"
                        : "bg-purple-500/5 border-purple-500/20"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${
                            layer.color === "cyan"
                              ? "bg-cyan-500/20 text-cyan-400"
                              : layer.color === "blue"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-purple-500/20 text-purple-400"
                          }`}
                        >
                          L{i + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <h4 className="text-lg font-semibold text-white">
                            {layer.name}
                          </h4>
                          <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded">
                            {layer.material}
                          </span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {layer.features.map((feature, j) => (
                            <div
                              key={j}
                              className="flex items-start gap-2 text-sm text-slate-400"
                            >
                              <svg
                                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                  layer.color === "cyan"
                                    ? "text-cyan-500"
                                    : layer.color === "blue"
                                    ? "text-blue-500"
                                    : "text-purple-500"
                                }`}
                                viewBox="0 0 16 16"
                                fill="currentColor"
                              >
                                <circle cx="8" cy="8" r="3" />
                              </svg>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* How it works - Process flow */}
        <AnimatedSection className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-10 text-center">
            From Sample to Answer in 5 Steps
          </h3>
          <div className="grid sm:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Load",
                desc: "Insert 100 µL of blood, urine, or wound swab into chip inlet",
                icon: (
                  <path d="M12 2v6m0 0l3-3m-3 3l-3-3M5 10h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" />
                ),
              },
              {
                step: "02",
                title: "Separate",
                desc: "DLD arrays isolate bacteria from blood cells, platelets, debris",
                icon: (
                  <path d="M4 6h16M4 12h8m-8 6h16" />
                ),
              },
              {
                step: "03",
                title: "Concentrate",
                desc: "Acoustic focusing drives bacteria into 12 parallel micro-chambers",
                icon: (
                  <path d="M9 3v18m6-18v18M3 9h18M3 15h18" />
                ),
              },
              {
                step: "04",
                title: "Challenge",
                desc: "Pre-loaded antibiotics reconstitute; impedance sensors track growth",
                icon: (
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
              },
              {
                step: "05",
                title: "Report",
                desc: "Edge AI classifies S/I/R per antibiotic and transmits wirelessly",
                icon: (
                  <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-6 text-center h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-cyan-400"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-cyan-500 mb-1">
                    {item.step}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Why Now - Convergence */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Why Now: <span className="gradient-text">The Convergence</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  year: "2024-2025",
                  title: "Single-Cell Microfluidic AST",
                  desc: "Multiple groups proved bacterial susceptibility determination from single-cell growth dynamics in <60 minutes. The fundamental science is validated.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                      <circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.48-8.48l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83" />
                    </svg>
                  ),
                },
                {
                  year: "2025",
                  title: "MEMS Impedance at Scale",
                  desc: "Interdigitated electrode arrays with 5 µm features on glass/silicon substrates at disposable-chip-compatible costs. Impedance AST is proven; we miniaturize it.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  ),
                },
                {
                  year: "2024-2025",
                  title: "Edge AI on Microcontrollers",
                  desc: "TinyML inference enables complex growth curve classification on low-power MCUs directly in the reader. No cloud required. Real-time, private, reliable.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44M14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96.44" /><path d="M4.2 16.78a2.5 2.5 0 013.3-3.73m8.8 3.73a2.5 2.5 0 00-3.3-3.73" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                  <span className="text-xs font-mono text-cyan-400 mb-2 block">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
