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

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4 block">
            About
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built by Engineers Who
            <br />
            <span className="gradient-text">Speak Microsystems</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Antimicrobial resistance is one of the greatest threats to modern
                medicine. Every year, millions of people receive the wrong
                antibiotic — not because better drugs don't exist, but because
                the diagnostic test takes three days instead of one hour.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Veridion Microsystems was founded to close that gap. We believe
                that MEMS engineering — the same discipline that gave us
                smartphone accelerometers, inkjet printheads, and pressure
                sensors — can be applied to create diagnostic tools that are
                faster, smaller, and more accessible than anything that exists
                today.
              </p>
              <p className="text-slate-300 leading-relaxed font-medium">
                Our goal is simple: ensure that every infected patient, anywhere
                in the world, can receive the right antibiotic on the first try.
              </p>
            </div>
          </AnimatedSection>

          {/* Founder & expertise */}
          <AnimatedSection delay={0.15}>
            <div className="glass-card rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Technical Expertise
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our founding team brings deep microsystem engineering expertise —
                the rare intersection of cleanroom fabrication, microfluidic
                design, MEMS sensor development, and integrated systems
                engineering. This isn't a software company adding hardware; it's
                a hardware company solving a biological crisis.
              </p>

              <div className="space-y-4">
                {[
                  {
                    skill: "MEMS Fabrication",
                    desc: "Photolithography, thin-film deposition, etching, wafer bonding",
                    level: 95,
                  },
                  {
                    skill: "Microfluidic Design",
                    desc: "DLD arrays, inertial focusing, droplet generation, acoustic manipulation",
                    level: 90,
                  },
                  {
                    skill: "Biosensor Integration",
                    desc: "Impedance spectroscopy, electrochemical sensing, surface functionalization",
                    level: 88,
                  },
                  {
                    skill: "Embedded Systems & AI",
                    desc: "TinyML inference, signal processing, wireless protocols, ASIC design",
                    level: 82,
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-white">
                        {item.skill}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mb-2">{item.desc}</div>
                    <div className="w-full h-1.5 rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisors / Partners placeholder */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Strategic Partnerships
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Clinical Partners", desc: "Academic medical centers for validation studies" },
                  { name: "Fabrication", desc: "Tier-1 MEMS foundry partnerships" },
                  { name: "AI & Data", desc: "Clinical microbiology data consortia" },
                  { name: "Distribution", desc: "Global medical device distribution networks" },
                ].map((partner, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white/3 border border-white/5">
                    <div className="text-sm font-medium text-white mb-1">{partner.name}</div>
                    <div className="text-xs text-slate-500">{partner.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
