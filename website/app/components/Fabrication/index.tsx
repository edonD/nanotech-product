'use client';

import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';
import GlassCard from '../ui/GlassCard';
import FabricationProcess from './FabricationProcess';
import ExplodedScene from './ExplodedScene';

const chipLayers = [
  {
    name: 'Microfluidic Network',
    material: 'PDMS / Silicon',
    detail: 'DLD pillar arrays (15-25µm pillars, 10-20µm gaps), inertial focusing channels, branching manifold to 12 AST chambers',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
  },
  {
    name: 'Sensor & Actuation Layer',
    material: 'Silicon / Glass',
    detail: 'Interdigitated gold electrode arrays (5µm pitch), on-chip Pt RTD temperature sensors, multi-frequency impedance spectroscopy',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-500/20',
  },
  {
    name: 'Piezoelectric Transducers',
    material: 'AlN on Silicon',
    detail: 'Acoustic pre-concentration via standing waves. MHz-frequency operation. >100x concentration factor.',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/20',
  },
  {
    name: 'Reagent Chambers',
    material: 'Foil-sealed reservoirs',
    detail: 'Lyophilized antibiotic panels reconstituted on activation. Mueller-Hinton broth. 12-month shelf life at room temperature.',
    color: 'text-green-400',
    borderColor: 'border-green-500/20',
  },
];

export default function Fabrication() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section id="chip" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-purple-500/[0.03] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="The Chip"
          title="Four layers. One breakthrough."
          subtitle="A multi-layer MEMS device fabricated using standard semiconductor processes — designed for single-use disposability at scale."
        />

        {/* 3D Exploded View + Layer Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 3D View */}
          <AnimatedSection direction="left">
            <div className="h-[400px] md:h-[500px] rounded-2xl border border-white/[0.06] bg-black/20 overflow-hidden">
              <ExplodedScene activeLayer={activeLayer} onLayerClick={setActiveLayer} />
            </div>
            <p className="text-xs text-slate-600 text-center mt-3 font-mono">
              Click layers to explore. Drag to rotate.
            </p>
          </AnimatedSection>

          {/* Layer Details */}
          <div className="space-y-4">
            {chipLayers.map((layer, i) => (
              <AnimatedSection key={layer.name} delay={i * 0.1} direction="right">
                <button
                  onClick={() => setActiveLayer(activeLayer === i ? null : i)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    activeLayer === i
                      ? `${layer.borderColor} bg-white/[0.05] shadow-lg`
                      : 'border-white/[0.05] bg-white/[0.02] hover:border-white/[0.1]'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-mono ${layer.color}`}>
                      Layer {i + 1}
                    </span>
                    <h4 className="text-lg font-bold text-white">{layer.name}</h4>
                  </div>
                  <div className="text-sm text-slate-500 mb-1">
                    Material: <span className="text-slate-400">{layer.material}</span>
                  </div>
                  {activeLayer === i && (
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{layer.detail}</p>
                  )}
                </button>
              </AnimatedSection>
            ))}

            {/* Scale callout */}
            <AnimatedSection delay={0.5}>
              <div className="p-4 rounded-xl border border-cyan-500/10 bg-cyan-500/[0.02] mt-4">
                <p className="text-sm text-slate-400">
                  <span className="text-cyan-400 font-semibold">Scale:</span> The microfluidic
                  channels are 20µm wide — thinner than a human hair (70µm). The DLD pillars
                  are smaller than a red blood cell.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Fabrication Process */}
        <FabricationProcess />
      </div>
    </section>
  );
}
