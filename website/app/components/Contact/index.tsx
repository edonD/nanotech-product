'use client';

import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import GlassCard from '../ui/GlassCard';

const ctaCards = [
  {
    title: 'Clinical Partners',
    description: 'Academic medical centers and hospitals interested in clinical validation studies with the RAPIDE platform.',
    cta: 'Partner With Us',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: 'text-green-400',
    borderColor: 'border-green-500/20',
    href: 'mailto:clinical@veridion.io',
  },
  {
    title: 'Investors',
    description: 'We are raising our seed round to fund chip prototyping, reader development, and initial clinical validation.',
    cta: 'Investment Inquiry',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    href: 'mailto:invest@veridion.io',
  },
  {
    title: 'Collaborators',
    description: 'MEMS engineers, microbiologists, ML researchers — join us in building the future of rapid diagnostics.',
    cta: 'Join the Team',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    href: 'mailto:hello@veridion.io',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/[0.03] blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Get Involved"
          title="Join the fight against antimicrobial resistance"
          subtitle="Every minute matters. Whether you're a clinician, investor, or engineer — there's a role for you in making rapid AST a reality."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ctaCards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <GlassCard className="h-full flex flex-col" glow="cyan">
                <div className={`w-12 h-12 rounded-xl bg-white/[0.03] border ${card.borderColor} flex items-center justify-center ${card.color} mb-4`}>
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-6">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${card.color} hover:underline`}
                >
                  {card.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Newsletter / general contact */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-6">
              Get notified about clinical milestones, partnership announcements, and
              early access opportunities.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-600 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
