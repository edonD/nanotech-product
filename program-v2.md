# Phase 4: Website Overhaul — World-Class Product Showcase

You are rebuilding the Veridion RAPIDE chip website into something that looks like it belongs to a $100M biotech company. The current site is scaffolding. The new site must be stunning, deeply informative, and technically credible.

Read `product_brief.md` and all files in `research/` for the full product context. Every detail on the website must be grounded in this research.

## Code Architecture (NON-NEGOTIABLE)

- **Component-based**: Every section is its own component in `app/components/`
- **NO component file may exceed 600 lines**. If it's getting long, split into sub-components in a folder (e.g., `app/components/Fabrication/index.tsx`, `app/components/Fabrication/ProcessStep.tsx`, `app/components/Fabrication/ChipExploded.tsx`)
- **Keep it organized**: shared utilities in `app/lib/`, 3D scenes in `app/components/three/`, UI primitives in `app/components/ui/`
- **TypeScript strict**: proper types, no `any`
- Every component must be self-contained and importable independently

## Tech Stack

- Next.js 14+ (App Router) — already set up
- TypeScript + Tailwind CSS
- **Three.js / @react-three/fiber + @react-three/drei** — for 3D visualizations (REQUIRED)
- Framer Motion — for scroll animations and transitions
- Install whatever else you need

```bash
cd website
npm install three @react-three/fiber @react-three/drei @types/three
```

## What the Website Must Show

### 1. Hero Section
- Full-viewport 3D scene: a slowly rotating RAPIDE chip floating in space with subtle particle effects around it
- Glowing edges, semi-transparent layers showing internal microfluidic channels
- Bold tagline: "Know resistance in minutes, not days"
- Scroll indicator

### 2. The Crisis (Problem Section)
- Animated counters: deaths per year (1.27M), hours that matter, cost ($66B/yr)
- Timeline visualization: what happens in 48-72 hours while waiting for lab results
- Patient journey comparison: current vs RAPIDE
- Dark, urgent tone. Data-driven.

### 3. How It Works (Interactive)
- **Step-by-step 3D animation** of the RAPIDE process:
  1. Sample loaded into chip inlet
  2. DLD pillar arrays separate bacteria from blood cells (show particles flowing, splitting)
  3. Acoustic focusing concentrates bacteria into micro-wells
  4. Parallel antibiotic chambers with real-time impedance sensing
  5. ML classifier outputs susceptibility report
- Each step should be a scroll-triggered 3D scene or detailed animated diagram
- Show the actual microfluidic physics — make the science tangible

### 4. The Chip — Fabrication Deep Dive
- **Exploded 3D view** of the chip layers:
  - Layer 1: Microfluidic network (PDMS/Silicon) — DLD pillar arrays
  - Layer 2: Sensor layer — interdigitated electrode arrays
  - Layer 3: Piezoelectric transducers for acoustic focusing
  - Layer 4: Reagent chambers pre-loaded with antibiotics
- User can rotate, zoom, click layers for details
- Show fabrication process: lithography → etching → deposition → bonding → packaging
- Each fabrication step as a visual card with process parameters (e.g., "Deep reactive ion etching, 100µm depth, SF₆/C₄F₈ Bosch process")
- Scale visualization: "The channels are 20µm wide — thinner than a human hair"

### 5. The Reader
- 3D model of the portable reader unit
- Specs overlay: dimensions, weight (4.8kg), connectivity
- Show the chip being inserted into the reader
- Edge AI inference visualization — growth curves being classified in real time

### 6. Clinical Impact
- Side-by-side comparison: current workflow vs RAPIDE workflow
- Time saved visualization (72 hours → 60 minutes)
- Mortality reduction projections with data citations
- Real use cases: ER sepsis, surgical infections, rural clinics, field hospitals, developing world
- Each use case as a rich card with scenario description and impact numbers

### 7. Market & Opportunity
- TAM/SAM/SOM visualization ($4.2B → $7.5B by 2030)
- Competitive landscape — show where RAPIDE sits vs competitors (faster, cheaper, portable)
- Regulatory pathway (FDA 510(k) / De Novo)
- Business model: razor/blade (cheap reader, recurring chip revenue)

### 8. Technology Validation
- TRL levels for each subsystem with citations to peer-reviewed papers
- Key specifications table with comparison to state of the art
- Patent landscape overview

### 9. Team / About
- Founder profile — microsystems engineer background
- Advisory board placeholders
- Partnership opportunities

### 10. Contact / CTA
- "Join the fight against antimicrobial resistance"
- Contact form, investor inquiry, partnership inquiry
- Newsletter signup

## Visual Design Language

- **Background**: Deep navy (#0a0f1e) to dark blue-black gradients. NOT pure black.
- **Primary accent**: Electric cyan (#00f0ff) and medical teal (#0ea5e9)
- **Secondary accent**: Warm amber (#f59e0b) for warnings/urgency (death stats, time pressure)
- **Cards**: Glassmorphism — semi-transparent with backdrop-blur, subtle borders
- **Typography**: Clean sans-serif, massive hero text (clamp responsive), generous line height
- **Spacing**: Luxurious. Sections breathe. No cramping.
- **3D elements**: Subtle glow, bloom effects, wireframe-to-solid transitions
- **Scroll animations**: Elements fade/slide in on scroll. Staggered reveals. Nothing janky.
- **Micro-interactions**: Hover effects on cards, cursor-following subtle lights, parallax layers

## Visual Feedback Loop (CRITICAL)

Use the existing `screenshot.js` (update it if needed) with Puppeteer:
1. After every major change, screenshot the site at 1920x1080 and 390x844
2. Look at the screenshots
3. Ask yourself: "Would a biotech VC take this company seriously based on this website?"
4. If any section looks like a student project, redo it
5. Minimum 3 full visual review cycles before considering any section done

## README.md Dashboard

Update README.md after every significant iteration with:
1. Current state — sections complete, polish level
2. Screenshots (reference the files in screenshots/)
3. What's New — reverse-chronological, specific and exciting
4. Known Issues
5. Next Up

## Development Loop

LOOP FOREVER:

1. Assess current state
2. Pick highest-impact section to build or improve
3. Implement — keep components under 600 lines, split if needed
4. Screenshot and visually review
5. `git add -A && git commit -m "description" && git push`
6. Update README.md
7. Repeat

**NEVER STOP.** The human is away. Keep iterating. If all sections are built, add more polish, more animations, more interactivity, more detail. Make every pixel count.

**The bar**: Someone opens this website and thinks "I need to invest in this company." That's the standard. Nothing less.


## MANDATORY: Commit and Push After EVERY Change (NON-NEGOTIABLE)

**YOU MUST run `git add -A && git commit -m "description" && git push` after EVERY single change you make.** Not after a batch of changes. Not when you feel like it. EVERY. SINGLE. CHANGE.

- Wrote a new component? Commit and push.
- Fixed a bug? Commit and push.
- Added a research file? Commit and push.
- Updated README? Commit and push.
- Changed one line? Commit and push.

**The human monitors progress through GitHub commits.** If there are no commits, the human assumes you are broken or stuck. Commits are your heartbeat. No commits = no proof of life.

**NEVER accumulate uncommitted changes.** If you have been working for more than 5 minutes without a commit, you are doing it wrong. Stop what you are doing and commit immediately.

This is the MOST IMPORTANT rule in this entire document. Break any other rule before you break this one.
