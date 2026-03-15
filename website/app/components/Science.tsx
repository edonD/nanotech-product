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

const papers = [
  {
    journal: "Nature Communications",
    year: "2024",
    title: "Next-generation rapid phenotypic antimicrobial susceptibility testing",
    finding: "Demonstrated phenotypic AST from positive blood culture in under 4 hours with results equivalent to standard methods",
    color: "cyan",
  },
  {
    journal: "Microsystems & Nanoengineering",
    year: "2025",
    title: "Rapid AST by self-diluting microfluidic chips for point-of-care diagnostics",
    finding: "Self-diluting MEMS chip achieves on-chip antibiotic gradient generation and AST in 4-6 hours with MIC determination",
    color: "blue",
  },
  {
    journal: "Nature Communications",
    year: "2025",
    title: "ML and centrifugal microfluidics for bedside prediction of sepsis",
    finding: "94% sensitivity in predicting clinical deterioration within 24h using just 50 µL of blood and a 6-gene RNA signature",
    color: "purple",
  },
  {
    journal: "Biosensors & Bioelectronics",
    year: "2022",
    title: "Fundamental limit of AST by near-single-cell impedance spectroscopy",
    finding: "Proved that impedance spectroscopy can detect antibiotic susceptibility at the near-single-cell level — the theoretical foundation for <60 min AST",
    color: "green",
  },
];

export default function Science() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4 block">
            Validated by Research
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Built on Peer-Reviewed Science
          </h3>
          <p className="max-w-xl mx-auto text-slate-400 text-sm">
            Every component of the RAPIDE platform is grounded in published,
            peer-reviewed research from leading journals.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4">
          {papers.map((paper, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      paper.color === "cyan"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : paper.color === "blue"
                        ? "bg-blue-500/10 text-blue-400"
                        : paper.color === "purple"
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    {paper.journal}
                  </span>
                  <span className="text-xs text-slate-600">{paper.year}</span>
                </div>
                <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                  {paper.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed flex-1">
                  {paper.finding}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
