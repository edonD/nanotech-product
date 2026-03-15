"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

function AnimatedSection({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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

function IconHospital() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
      <path d="M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
      <path d="M10 9h4M12 7v4" />
    </svg>
  );
}

function IconMicroscope() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8M3 22h18M14 22a7 7 0 100-14h-1" />
      <path d="M9 14h2M9 12a2 2 0 01-2-2V6h6v4a2 2 0 01-2 2" />
      <path d="M12 6V3a1 1 0 00-1-1H9a1 1 0 00-1 1v3" />
    </svg>
  );
}

function IconBandage() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2l4 4-12 12-4 2 2-4L20 4" />
      <path d="M14 6l4 4" />
      <circle cx="11" cy="15" r="0.5" fill="currentColor" />
      <circle cx="9" cy="13" r="0.5" fill="currentColor" />
      <circle cx="13" cy="13" r="0.5" fill="currentColor" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89-.82 3.29-3.29" />
      <path d="M11 2c5 2 9.9 7 8 22-5-2-9.9-7-8-22" />
    </svg>
  );
}

const applications = [
  {
    title: "Sepsis & Bloodstream Infections",
    icon: <IconHospital />,
    stat: "270,000",
    statLabel: "US sepsis deaths/year",
    description:
      "In the ICU, every hour of delayed targeted therapy increases sepsis mortality by ~7%. RAPIDE enables clinicians to move from empiric broad-spectrum to targeted narrow-spectrum antibiotics within the first golden hour — before irreversible organ damage occurs.",
    impact: "Potential to prevent 50,000+ US deaths per year",
    color: "red",
  },
  {
    title: "Urinary Tract Infections",
    icon: <IconMicroscope />,
    stat: "150M+",
    statLabel: "UTI cases globally per year",
    description:
      "UTIs are the most common outpatient bacterial infection and the #1 driver of antibiotic prescriptions. Up to 30% of empiric UTI treatments fail due to resistance. RAPIDE in the primary care clinic means first-visit targeted treatment — no callback, no follow-up culture.",
    impact: "Reduce treatment failure rate from 30% to <5%",
    color: "cyan",
  },
  {
    title: "Surgical & Wound Infections",
    icon: <IconBandage />,
    stat: "$10B+",
    statLabel: "Annual US cost of surgical site infections",
    description:
      "Surgical site infections affect 2-5% of surgeries. With rising MRSA and VRE prevalence, empiric therapy is increasingly unreliable. RAPIDE at the surgical ward enables same-day wound culture AST, guiding targeted treatment before infections escalate to sepsis.",
    impact: "Reduce hospital stays by 1.75-6 days per infected patient",
    color: "blue",
  },
  {
    title: "Resource-Limited Settings",
    icon: <IconGlobe />,
    stat: "4.7M",
    statLabel: "AMR deaths in low-income countries",
    description:
      "The majority of AMR deaths occur in sub-Saharan Africa and South Asia, where microbiology labs are scarce or nonexistent. RAPIDE's portable form factor and nurse-level operation make laboratory-grade AST accessible in district hospitals, mobile clinics, and outbreak zones.",
    impact: "Bring AST to 2+ billion people who currently lack access",
    color: "green",
  },
  {
    title: "Antimicrobial Stewardship",
    icon: <IconChart />,
    stat: "30-50%",
    statLabel: "Reduction in unnecessary broad-spectrum use",
    description:
      "Hospital stewardship programs aim to reduce antibiotic overuse — but without rapid AST data, they operate blind. RAPIDE generates real-time resistance data that feeds directly into stewardship dashboards, enabling population-level tracking of resistance patterns.",
    impact: "Slow the evolution of multidrug-resistant superbugs",
    color: "purple",
  },
  {
    title: "Veterinary & Agriculture",
    icon: <IconLeaf />,
    stat: "73%",
    statLabel: "Of antibiotics used in livestock",
    description:
      "Animal agriculture accounts for the majority of global antibiotic use, driving resistance in both animal and human pathogens. RAPIDE enables rapid on-farm AST, allowing veterinarians to target infections precisely instead of prophylactic mass-dosing.",
    impact: "Reduce agricultural antibiotic use by enabling precision treatment",
    color: "amber",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4 block">
            Applications
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Where RAPIDE
            <br />
            <span className="gradient-text">Saves Lives</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            From ICU bedsides in major hospitals to mobile clinics in sub-Saharan
            Africa — rapid AST changes outcomes everywhere antibiotics are prescribed.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-7 h-full flex flex-col group hover:border-white/15 transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    app.color === "red" ? "bg-red-500/10 text-red-400" :
                    app.color === "cyan" ? "bg-cyan-500/10 text-cyan-400" :
                    app.color === "blue" ? "bg-blue-500/10 text-blue-400" :
                    app.color === "green" ? "bg-green-500/10 text-green-400" :
                    app.color === "purple" ? "bg-purple-500/10 text-purple-400" :
                    "bg-amber-500/10 text-amber-400"
                  }`}
                >
                  {app.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{app.title}</h3>

                <div className="mb-4">
                  <span
                    className={`text-2xl font-bold ${
                      app.color === "red" ? "text-red-400" :
                      app.color === "cyan" ? "text-cyan-400" :
                      app.color === "blue" ? "text-blue-400" :
                      app.color === "green" ? "text-green-400" :
                      app.color === "purple" ? "text-purple-400" :
                      "text-amber-400"
                    }`}
                  >
                    {app.stat}
                  </span>
                  <span className="text-xs text-slate-500 ml-2">
                    {app.statLabel}
                  </span>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  {app.description}
                </p>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-green-400/80 font-medium">
                      {app.impact}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Global impact callout */}
        <AnimatedSection className="mt-16">
          <div className="glass-card rounded-2xl p-8 sm:p-12 text-center glow-cyan">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Global Opportunity
            </h3>
            <div className="grid sm:grid-cols-3 gap-8 mb-6">
              <div>
                <div className="text-3xl font-bold text-cyan-400">$4.2B</div>
                <div className="text-sm text-slate-400">AST Market (2024)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">$7.5B</div>
                <div className="text-sm text-slate-400">Projected by 2030</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">$0</div>
                <div className="text-sm text-slate-400">Portable POC AST today</div>
              </div>
            </div>
            <p className="text-slate-400 max-w-xl mx-auto">
              The point-of-care rapid AST market is a{" "}
              <span className="text-white font-semibold">
                billion-dollar segment with zero products
              </span>
              . RAPIDE is built to be first.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
