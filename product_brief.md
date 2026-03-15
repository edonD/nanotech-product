# Product Brief: VERIDION — The RAPIDE Chip Platform

## Company: Veridion Microsystems

## Tagline
*"Every minute matters. Know resistance in minutes, not days."*

---

## The Problem

**Antimicrobial resistance (AMR) is a global health emergency.**

- **1.27 million people die directly** from drug-resistant infections every year — more than HIV or malaria
- AMR contributes to **4.95 million deaths annually** worldwide
- Without intervention, **39 million additional deaths** are projected between 2025 and 2050
- The economic cost: **$66 billion/year today**, projected to reach **$159 billion/year by 2050**

**The critical bottleneck: time.**

When a patient presents with a serious infection — sepsis, a surgical wound infection, a complicated UTI — clinicians must decide which antibiotic to prescribe. Today, they guess. They prescribe broad-spectrum antibiotics empirically and send a sample to the microbiology lab.

The lab takes **48 to 72 hours** to return antibiotic susceptibility results:
1. **Overnight culture** to grow the pathogen (18-24 hours)
2. **Isolation** of pure colonies
3. **Standard AST** (another 16-24 hours)
4. Results finally reach the clinician

In sepsis, **every hour of delayed appropriate antibiotic therapy increases mortality by approximately 7%.** By the time the lab result arrives, patients have either recovered on empiric therapy (often unnecessarily broad, fueling AMR) or deteriorated irreversibly.

The result: clinicians over-prescribe broad-spectrum antibiotics, accelerating resistance, while patients who needed targeted therapy waited too long.

---

## The Solution: RAPIDE Chip

**RAPIDE** = **R**apid **A**ntimicrobial **P**rofiling via **I**ntegrated **D**etection **E**lectronics

A disposable MEMS microfluidic chip + portable reader that delivers antibiotic susceptibility results **directly from a patient sample in under 60 minutes**, at the point of care.

### How It Works

**The Chip** (disposable, single-use):
1. **Sample Input**: A clinician loads a raw patient sample (blood, urine, or wound swab) into the chip's inlet port — no pre-processing required
2. **On-Chip Sample Preparation**: Integrated MEMS microfluidic channels use deterministic lateral displacement (DLD) arrays and inertial focusing to separate bacteria from blood cells, platelets, and debris
3. **Pathogen Concentration**: Bacteria are concentrated into micro-wells via acoustic focusing using on-chip piezoelectric transducers
4. **Parallel AST**: The chip splits the concentrated sample into 12 parallel micro-chambers, each pre-loaded with a different antibiotic at clinically relevant concentrations (plus growth controls)
5. **Real-Time Detection**: Integrated MEMS impedance sensors (interdigitated electrode arrays fabricated via surface micromachining) monitor bacterial growth/death in each chamber every 30 seconds

**The Reader** (portable, reusable):
- Compact benchtop unit (~30 × 20 × 15 cm), weighing <5 kg
- Provides temperature control, electrical readout, and on-board ML inference
- Edge AI classifier trained on >100,000 bacterial growth curves
- Outputs a clear susceptibility report (Susceptible / Intermediate / Resistant) for each antibiotic
- Results transmitted wirelessly to hospital EMR systems
- No specialized training required — designed for nurses and physicians

### Key Specifications (Target)

| Parameter | RAPIDE | Current Standard |
|-----------|--------|-----------------|
| Time to result | **< 60 minutes** | 48-72 hours |
| Sample type | Direct from patient | Requires overnight culture |
| Operator skill | Nurse-level | Lab technician |
| Antibiotics tested | 12 per chip | 12-20 per panel |
| Sample volume | 100 µL | 1-10 mL |
| Cost per test | ~$35-50 (chip) | $15-30 (reagents only, excludes lab overhead) |
| Reader cost | < $5,000 | $50,000-$180,000 |
| Portability | Portable (5 kg) | Fixed laboratory |

---

## The Technology

### MEMS Microfluidic Chip Architecture

The RAPIDE chip is a multi-layer MEMS device fabricated using standard semiconductor processes:

**Layer 1: Microfluidic Network (PDMS/Silicon)**
- Deterministic lateral displacement (DLD) pillar arrays for label-free bacterial separation from blood (10-20 µm gap, 97% capture efficiency demonstrated in literature)
- Inertial focusing channels with precise geometry for cell ordering
- Branching manifold distributing sample to 12 AST chambers

**Layer 2: Sensing & Actuation (Silicon/Glass)**
- Interdigitated gold electrode arrays (5 µm pitch) in each AST chamber for impedance spectroscopy
- Piezoelectric AlN transducers for acoustic pre-concentration
- On-chip temperature sensors (Pt RTDs) for closed-loop thermal control

**Layer 3: Reagent Storage**
- Lyophilized antibiotic panels stored in foil-sealed reservoirs
- Reconstituted upon chip activation with Mueller-Hinton broth
- 12-month shelf life at room temperature (target)

### Fabrication Process
1. Silicon wafer processing in a standard MEMS cleanroom
2. Electrode patterning via photolithography and lift-off
3. PDMS microfluidic layer via soft lithography (or injection molding at scale)
4. Wafer-level bonding and dicing
5. Reagent deposition and packaging in nitrogen atmosphere

### AI/ML Classification Engine
- Trained on growth curve databases from clinical isolates
- Classifies susceptibility within 30-45 minutes by detecting early growth kinetics
- Federated learning model: improves accuracy with each deployed reader without sharing patient data
- Algorithms validated against CLSI/EUCAST breakpoints

---

## Why Now — The Convergence

Three recent breakthroughs make RAPIDE possible today when it wasn't 3 years ago:

1. **Single-cell microfluidic AST demonstrated** (2024-2025): Multiple academic groups published proof that bacterial susceptibility can be determined from single-cell growth dynamics in under 60 minutes using microfluidic confinement. The science is validated.

2. **MEMS impedance sensors at scale** (2025): Advances in MEMS fabrication have enabled interdigitated electrode arrays with 5 µm features on glass/silicon substrates at costs compatible with disposable chips. Avails Medical proved the impedance approach works for AST; we take it from benchtop to point of care.

3. **Edge AI on microcontrollers** (2024-2025): TinyML inference on low-power MCUs now enables complex classification (growth curve analysis, MIC determination) directly on a portable reader. No cloud connection required. This eliminates latency and data privacy concerns.

---

## The Market

### Total Addressable Market (TAM)
- Global antimicrobial susceptibility testing market: **$4.2 billion** (2024)
- Projected to grow to **$7.5 billion by 2030** (12% CAGR)
- Hospital-acquired infection diagnostics: additional **$5+ billion**

### Serviceable Addressable Market (SAM)
- Rapid/POC AST segment: **$800M-$1.2B** (currently almost entirely unfilled)
- ~6,000 hospitals in the US alone with ICUs needing bedside AST
- ~30,000 hospitals globally with ICU/ED departments

### Beachhead Market
- **US hospital ICUs and Emergency Departments**: ~5 million sepsis cases/year in the US
- Each ICU averages 50-100 culture-pending patients/month who could benefit from rapid AST
- Initial target: **200 top US academic medical centers** (20,000+ beds)

### Revenue Model
- **Razor/razorblade**: Reader placed at low margin; recurring revenue from disposable chips
- Reader: $4,500 (subsidized from $8K BOM at scale)
- Chip: $45/test, ~$30 COGS at volume (>100K/year)
- Per-hospital annual revenue: ~$50K-$200K (1,000-4,000 tests/year)
- **Year 5 target**: 500 readers deployed, 1M chips/year = **$45M ARR**

---

## Competition & Differentiation

### Why Existing Rapid AST Products Don't Solve This

| Feature | RAPIDE | Accelerate WAVE | Q-Linea ASTar | Resistell | Avails Medical |
|---------|--------|----------------|---------------|-----------|---------------|
| Direct from sample | ✅ | ❌ (needs culture) | ❌ (needs culture) | ❌ (needs culture) | ⚠️ (urine only) |
| Time to result | <60 min | 2-7 hours | 6 hours | 2-4 hours | 3-4 hours |
| Point of care | ✅ | ❌ (lab only) | ❌ (lab only) | ❌ (lab only) | ❌ (lab only) |
| Reader cost | <$5K | ~$180K | ~$100K | ~$80K | ~$50K |
| Operator | Nurse | Lab tech | Lab tech | Lab tech | Lab tech |
| Portable | ✅ (5 kg) | ❌ | ❌ | ❌ | ❌ |

### Our Moat
1. **MEMS fabrication expertise**: Designing the integrated DLD + impedance sensor + acoustic focusing chip requires deep microsystems engineering knowledge. This cannot be replicated by a software or biology team.
2. **Integrated sample-to-answer**: No competitor does on-chip sample preparation + AST in a single disposable. This integration is the hardest engineering challenge and our core IP.
3. **Edge AI inference**: Growth curve classification without cloud dependency, trained on proprietary clinical datasets.
4. **Cost structure**: MEMS wafer-scale manufacturing yields thousands of chips per wafer, driving unit costs below $30 at scale.

---

## Why This Founder

The founder's microsystem engineering degree provides exactly the rare skillset required:
- **Cleanroom fabrication**: Can design and prototype the MEMS chip themselves
- **Micro/nanoscale physics**: Understands fluid dynamics at the microscale, electrode impedance, acoustic wave propagation
- **MEMS design tools**: L-Edit, COMSOL, ANSYS — can simulate and optimize chip geometries
- **Integration mindset**: Trained to combine mechanical, electrical, fluidic, and sensing elements on a single chip

This is not a product that a software engineer or biologist can build. The MEMS chip is the product, and the founder IS the chip designer.

---

## Regulatory & Clinical Strategy

### Phase 1 (Year 1-2): Research Use Only (RUO)
- Sell to research hospitals and academic medical centers for clinical research
- Build clinical evidence base
- No FDA clearance required for RUO instruments

### Phase 2 (Year 2-3): FDA De Novo / 510(k)
- Predicate devices exist (Accelerate Pheno, ASTar) for rapid AST
- Target 510(k) clearance for UTI indication first (simplest sample type)
- Parallel CE marking for European market

### Phase 3 (Year 3-5): Expand Indications
- Bloodstream infections (most impactful but hardest regulatory path)
- Wound infections
- Respiratory infections

---

## Funding Requirements

### Seed Round: $2.5M
- Chip design and first-generation prototyping (cleanroom time, materials)
- Reader hardware development
- AI model training with partner hospital data
- Team: 2 additional MEMS engineers, 1 ML engineer, 1 microbiologist

### Series A: $12-15M (Month 18-24)
- Clinical validation studies (200+ patient samples)
- Manufacturing scale-up (pilot production line)
- Regulatory preparation
- Commercial team buildout

---

## Impact

If RAPIDE achieves its goal of reducing time-to-appropriate-therapy from 48 hours to 1 hour:

- **Lives saved**: Models suggest targeted therapy within 1 hour could prevent **50,000+ deaths/year** in the US alone from sepsis mismanagement
- **AMR reduction**: Reducing broad-spectrum antibiotic use by 30-50% through targeted prescribing
- **Cost savings**: Shorter ICU stays (1.75-6 days per sepsis patient) = **$5-15 billion/year** savings in the US healthcare system
- **Antibiotic stewardship**: Real-time resistance data feeds into hospital stewardship programs, slowing the evolution of superbugs

---

*Veridion Microsystems — Because the right antibiotic at the right time saves lives.*
