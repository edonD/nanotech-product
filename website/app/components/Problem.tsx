"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-400 uppercase mb-4 block">
            The Crisis
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Antimicrobial Resistance Is
            <br />
            <span className="text-red-400">Outpacing Medicine</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            Drug-resistant infections are among the leading causes of death
            worldwide — and the diagnostic tools meant to fight them haven't
            changed in decades.
          </p>
        </AnimatedSection>

        {/* Death toll stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              number: "1.27M",
              label: "Direct deaths per year from drug-resistant bacteria",
              subtext: "More than HIV or malaria",
              color: "red",
            },
            {
              number: "4.95M",
              label: "Deaths per year associated with AMR",
              subtext: "A hidden pandemic",
              color: "orange",
            },
            {
              number: "39M",
              label: "Projected additional deaths by 2050",
              subtext: "If we don't act now",
              color: "amber",
            },
          ].map((stat, i) => (
            <AnimatedSection key={i}>
              <div className="glass-card rounded-2xl p-8 text-center h-full">
                <div
                  className={`text-5xl font-bold mb-3 ${
                    stat.color === "red"
                      ? "text-red-400"
                      : stat.color === "orange"
                      ? "text-orange-400"
                      : "text-amber-400"
                  }`}
                >
                  {stat.number}
                </div>
                <p className="text-white font-medium mb-2">{stat.label}</p>
                <p className="text-sm text-slate-500">{stat.subtext}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* The bottleneck */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 sm:p-12 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              The Critical Bottleneck: <span className="text-cyan-400">Time</span>
            </h3>

            {/* Timeline visualization */}
            <div className="space-y-8">
              {/* Current workflow */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                    Today's Standard: 48-72 Hours
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {[
                    { step: "Sample collected", time: "0h" },
                    { step: "Transport to lab", time: "1-4h" },
                    { step: "Overnight culture", time: "18-24h" },
                    { step: "Colony isolation", time: "24-30h" },
                    { step: "AST incubation", time: "40-54h" },
                    { step: "Result to clinician", time: "48-72h" },
                  ].map((item, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                        <span className="text-xs text-slate-400 block">
                          {item.time}
                        </span>
                        <span className="text-sm text-white">{item.step}</span>
                      </div>
                      {j < 5 && (
                        <svg width="16" height="16" viewBox="0 0 16 16" className="text-slate-600">
                          <path d="M6 4l4 4-4 4" stroke="currentColor" fill="none" strokeWidth="1.5" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* RAPIDE workflow */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                    With RAPIDE: Under 60 Minutes
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {[
                    { step: "Sample loaded", time: "0 min" },
                    { step: "On-chip processing", time: "5 min" },
                    { step: "Parallel AST", time: "10-50 min" },
                    { step: "AI classification", time: "55 min" },
                    { step: "Targeted treatment", time: "<60 min" },
                  ].map((item, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <span className="text-xs text-cyan-400/70 block">
                          {item.time}
                        </span>
                        <span className="text-sm text-white">{item.step}</span>
                      </div>
                      {j < 4 && (
                        <svg width="16" height="16" viewBox="0 0 16 16" className="text-cyan-600">
                          <path d="M6 4l4 4-4 4" stroke="currentColor" fill="none" strokeWidth="1.5" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Mortality stat callout */}
        <AnimatedSection className="text-center">
          <div className="inline-block glass-card rounded-2xl p-8 sm:p-10 glow-cyan">
            <p className="text-slate-400 text-lg mb-3">
              In sepsis, every hour of delayed appropriate therapy
            </p>
            <p className="text-4xl sm:text-5xl font-bold text-white mb-3">
              increases mortality by{" "}
              <span className="text-red-400">~7%</span>
            </p>
            <p className="text-slate-500 text-sm">
              Kumar et al., Critical Care Medicine — validated across multiple studies
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
