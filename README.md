# Veridion Microsystems — RAPIDE Chip Platform

> *"Every minute matters. Know resistance in minutes, not days."*

## Current Phase: Complete — Iterating

---

## The Product

**RAPIDE** = Rapid Antimicrobial Profiling via Integrated Detection Electronics

A disposable MEMS microfluidic chip + portable reader delivering antibiotic susceptibility results **in under 60 minutes**, directly from a patient sample, at the point of care. No overnight culture. No lab required.

| Feature | RAPIDE | Standard AST | Best Competitor |
|---------|--------|-------------|----------------|
| Time | <60 min | 48-72 hours | 2-7 hours |
| Direct from sample | Yes | No | No (needs culture) |
| Point of care | Yes | No | No (lab only) |
| Reader cost | <$5K | $50K+ | $80-180K |
| Operator | Nurse | Lab tech | Lab tech |
| Portable | 4.8 kg | No | No |

## Why This Matters

- **1.27M** direct deaths/year from antimicrobial resistance
- **$24B/year** — sepsis is the most expensive condition in US healthcare
- **~7%** mortality increase per hour of delayed appropriate therapy in sepsis
- **Zero** portable point-of-care AST products exist worldwide
- **$4.2B** AST market → **$7.5B by 2030**

## Research Documents

| File | Description |
|------|-------------|
| `research/01_landscape_overview.md` | Comprehensive landscape across nanotech, BioMEMS, microsystems |
| `research/02_deep_dive_promising_threads.md` | Deep analysis of 5 product candidates |
| `research/03_competitive_landscape.md` | Detailed competitor analysis (updated March 2026) |
| `research/04_regulatory_and_manufacturing.md` | FDA pathway, manufacturing costs, production scale |
| `research/05_technical_validation.md` | TRL assessment of DLD, impedance, edge AI subsystems |
| `research/06_funding_and_economics.md` | CARB-X, BARDA funding + hospital economics |
| `product_brief.md` | Full product brief with specs, market, competition, strategy |

## Website

### Tech Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion
- Canvas particle animation, scroll-triggered animations, animated counters

### Sections
Hero | Problem | Technology | Science Citations | Product | Applications | About | Contact

### Visual Quality
- 3 visual review cycles completed via Puppeteer screenshots
- Dark deep-blue theme with glassmorphism, gradient accents
- SVG icons throughout (no emoji dependencies)
- Responsive desktop + mobile layout
- Investor-presentation quality

### Run Locally
```bash
cd website && npm install && npm run build && npm start
```

## Progress Log

| Time | Milestone |
|------|-----------|
| 2026-03-15 (6) | Animated counters, updated competitive landscape, economics research |
| 2026-03-15 (5) | Science citations section, technical validation research |
| 2026-03-15 (4) | Particle animation, regulatory/manufacturing research |
| 2026-03-15 (3) | Visual review cycles 2-3, SVG icons, comparison table polish |
| 2026-03-15 (2) | Website v1 complete — all 7 sections built and verified |
| 2026-03-15 (1) | Phase 1 research + Phase 2 product brief complete |
