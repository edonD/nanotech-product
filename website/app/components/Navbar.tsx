'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Crisis', href: '#crisis' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'The Chip', href: '#chip' },
  { label: 'Reader', href: '#reader' },
  { label: 'Impact', href: '#impact' },
  { label: 'Market', href: '#market' },
  { label: 'Validation', href: '#validation' },
  { label: 'Team', href: '#team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-[#0a0f1e]/30 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">Veridion</span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan-400 bg-cyan-500/[0.08]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:scale-[1.02]"
              >
                Get Early Access
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-slate-400 hover:text-white"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-white/[0.05] lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan-400 bg-cyan-500/[0.08]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold text-center mt-2"
              >
                Get Early Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
