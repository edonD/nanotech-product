# Technical Validation: Core RAPIDE Technologies

*Updated March 2026*

## 1. Deterministic Lateral Displacement (DLD) for Bacterial Separation

### Performance Data from Literature
- **Bacteria separation from blood**: Hybrid DLD + dielectrophoretic device achieves 95% separation efficiency for bacteria and RBCs after optimization (2025 study)
- **White blood cell separation**: 100% efficiency demonstrated
- **Label-free and continuous flow**: No antibodies or reagents needed for separation step
- **Pillar geometry innovations**: Inverse L-shaped pillars reduce critical separation size and act as deformability sensors
- **Rod-shaped bacteria**: DLD successfully separates rod-shaped bacterial cells up to 10 µm

### Design Parameters for RAPIDE
- Gap size: 10-20 µm (optimized for bacteria 0.5-5 µm)
- Pillar diameter: 15-25 µm
- Tilt angle: 2-5° (balances resolution vs. throughput)
- Flow rate: 1-10 µL/min
- Channel depth: 20-30 µm

### Key Reference
- Active area since 2004, hundreds of publications
- Well-understood physics, validated in clinical samples

---

## 2. Impedance Spectroscopy for Bacterial Growth Detection

### Detection Sensitivity
- **Best reported**: 12 CFU/mL with impedance change rate correlation
- **Typical microfluidic**: 39 CFU/mL within 2 hours (E. coli O157:H7)
- **Microfluidic advantage**: 10x better than non-microfluidic biosensors (3×10³ vs 3×10⁴ CFU/mL)
- **Listeria detection**: 1.6 × 10² CFU/mL demonstrated

### Near-Single-Cell AST
- A 2022 study in Biosensors & Bioelectronics explored "the fundamental limit of antimicrobial susceptibility by near-single-cell electrical impedance spectroscopy"
- Demonstrated that impedance can detect growth/no-growth at the near-single-cell level
- This is the key enabling technology for <60 minute AST

### For RAPIDE Application
- Interdigitated gold electrodes (5 µm pitch, 100-200 µm wide)
- Multi-frequency measurement (1 kHz - 10 MHz)
- Growth vs. no-growth detectable within 30-45 minutes from ~100 CFU inoculum
- Carbon screen-printed electrodes (SPE) as lower-cost alternative demonstrated for rapid AST (2024, Scientific Reports)

### Key Challenge
- Non-specific binding and matrix effects from complex samples
- Mitigation: on-chip sample prep (DLD separation) cleans sample before impedance measurement

---

## 3. Edge AI for Growth Curve Classification

### TinyML Capabilities (2025)
- STM32 microcontrollers: 1-2 MB flash, 512 KB RAM, sufficient for inference
- ESP32-S3: ML acceleration with vector instructions
- Growth curve classification: relatively simple ML task (time series binary/ternary classification)
- Model size: <100 KB for optimized neural network

### Training Data Requirements
- Need ~10,000-100,000 growth curves for robust classifier
- Can be generated synthetically from established growth models + clinical isolate data
- Federated learning across deployed readers improves accuracy over time

---

## 4. Integration Feasibility Assessment

| Subsystem | TRL | Risk | Mitigation |
|-----------|-----|------|------------|
| DLD bacterial separation | 5-6 | Medium | Well-characterized; need to optimize for whole blood matrix |
| Impedance growth detection | 5-6 | Medium | Proven in lab; need to validate with clinical concentrations |
| On-chip antibiotic storage | 4-5 | Medium | Lyophilization well-established; shelf-life validation needed |
| ML growth classification | 5-6 | Low | Standard time-series classification; training data available |
| Chip manufacturing | 6-7 | Low | Standard MEMS/injection molding processes |
| Reader electronics | 6-7 | Low | Standard impedance analyzer + MCU |

**Overall assessment: TRL 4-5 (Lab validation) → TRL 6 (System prototype) within 12-18 months**

This timeline is consistent with a $2.5M seed round supporting prototype development and initial clinical validation.
