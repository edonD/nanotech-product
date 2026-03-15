"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4 block">
            Get Started
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join the Fight Against
            <br />
            <span className="gradient-text">Antimicrobial Resistance</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            We're seeking clinical partners, early-access hospitals, and
            investors who believe that the right antibiotic at the right time
            can save millions of lives.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Clinical Partners",
              desc: "Are you a hospital or health system interested in piloting rapid AST at the point of care? We're looking for early-access clinical sites for validation studies.",
              cta: "Partner With Us",
              icon: (
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              ),
              color: "cyan",
            },
            {
              title: "Investors",
              desc: "RAPIDE addresses a $4.2B market with zero point-of-care products. We're raising a seed round to bring our prototype from lab validation to clinical proof-of-concept.",
              cta: "Request Deck",
              icon: (
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              ),
              color: "blue",
            },
            {
              title: "Collaborators",
              desc: "Microbiologists, MEMS engineers, AI researchers — if you're passionate about combating AMR through technology, we'd love to hear from you.",
              cta: "Join the Team",
              icon: (
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              ),
              color: "purple",
            },
          ].map((card, i) => (
            <AnimatedSection key={i}>
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col text-center group hover:border-white/15 transition-all duration-300">
                <div
                  className={`w-14 h-14 rounded-xl mx-auto mb-6 flex items-center justify-center ${
                    card.color === "cyan"
                      ? "bg-cyan-500/10"
                      : card.color === "blue"
                      ? "bg-blue-500/10"
                      : "bg-purple-500/10"
                  }`}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={
                      card.color === "cyan"
                        ? "text-cyan-400"
                        : card.color === "blue"
                        ? "text-blue-400"
                        : "text-purple-400"
                    }
                  >
                    {card.icon}
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  {card.desc}
                </p>

                <button
                  className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    card.color === "cyan"
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20"
                      : card.color === "blue"
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20"
                      : "bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20"
                  }`}
                >
                  {card.cta}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Email CTA */}
        <AnimatedSection className="mt-12 text-center">
          <p className="text-slate-500 mb-3 text-sm">Or reach us directly</p>
          <a
            href="mailto:hello@veridion.io"
            className="text-xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            hello@veridion.io
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
