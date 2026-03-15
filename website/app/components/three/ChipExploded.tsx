'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface ChipExplodedProps {
  explodeAmount?: number;
  activeLayer?: number | null;
  onLayerClick?: (layer: number) => void;
}

const layers = [
  {
    name: 'Microfluidic Network',
    color: '#00f0ff',
    emissive: '#006688',
    y: 0,
    height: 0.08,
    opacity: 0.6,
    description: 'PDMS/Silicon — DLD pillar arrays, inertial focusing channels',
  },
  {
    name: 'Sensor Layer',
    color: '#ffd700',
    emissive: '#b8860b',
    y: 0.12,
    height: 0.04,
    opacity: 0.85,
    description: 'Interdigitated electrode arrays — 5µm pitch gold on glass',
  },
  {
    name: 'Piezo Transducers',
    color: '#8b5cf6',
    emissive: '#5b21b6',
    y: 0.22,
    height: 0.03,
    opacity: 0.75,
    description: 'AlN piezoelectric — acoustic focusing at MHz frequencies',
  },
  {
    name: 'Reagent Chambers',
    color: '#10b981',
    emissive: '#065f46',
    y: 0.3,
    height: 0.06,
    opacity: 0.7,
    description: 'Lyophilized antibiotics — 12-month shelf life, foil-sealed',
  },
];

export default function ChipExploded({
  explodeAmount = 1,
  activeLayer = null,
  onLayerClick,
}: ChipExplodedProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const spread = explodeAmount * 0.5;

  return (
    <group ref={groupRef}>
      {layers.map((layer, i) => {
        const yPos = (layer.y + i * spread) - (layers.length * spread) / 3;
        const isActive = activeLayer === i;
        const scale = isActive ? 1.05 : 1;

        return (
          <group key={layer.name} position={[0, yPos, 0]}>
            <mesh
              scale={[scale, scale, scale]}
              onClick={() => onLayerClick?.(i)}
            >
              <boxGeometry args={[2.2, layer.height, 1.5]} />
              <meshPhysicalMaterial
                color={layer.color}
                emissive={layer.emissive}
                emissiveIntensity={isActive ? 0.8 : 0.3}
                transparent
                opacity={isActive ? layer.opacity + 0.2 : layer.opacity}
                metalness={0.4}
                roughness={0.3}
                clearcoat={0.5}
              />
            </mesh>

            {/* Layer edge highlight */}
            <mesh scale={[scale, scale, scale]}>
              <boxGeometry args={[2.22, layer.height + 0.005, 1.52]} />
              <meshBasicMaterial
                color={layer.color}
                transparent
                opacity={isActive ? 0.3 : 0.05}
                wireframe
              />
            </mesh>

            {/* Label */}
            {isActive && (
              <Html position={[1.4, 0, 0]} center>
                <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg p-3 min-w-[200px] pointer-events-none">
                  <div className="text-xs font-mono text-cyan-400 mb-1">Layer {i + 1}</div>
                  <div className="text-sm font-bold text-white">{layer.name}</div>
                  <div className="text-xs text-slate-400 mt-1">{layer.description}</div>
                </div>
              </Html>
            )}
          </group>
        );
      })}

      {/* Pillar array visualization on layer 1 */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <mesh
            key={`exp-pillar-${row}-${col}`}
            position={[
              -0.5 + col * 0.18,
              layers[0].y - (layers.length * spread) / 3 + 0.06,
              -0.3 + row * 0.2,
            ]}
          >
            <cylinderGeometry args={[0.02, 0.02, 0.06, 8]} />
            <meshStandardMaterial
              color="#00f0ff"
              emissive="#00f0ff"
              emissiveIntensity={0.6}
              transparent
              opacity={0.5}
            />
          </mesh>
        ))
      )}

      {/* Electrode traces on layer 2 */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={`exp-electrode-${i}`}
          position={[
            -0.7 + i * 0.2,
            layers[1].y + spread - (layers.length * spread) / 3,
            0,
          ]}
        >
          <boxGeometry args={[0.08, 0.005, 1.0]} />
          <meshStandardMaterial
            color="#ffd700"
            metalness={1}
            roughness={0.1}
            emissive="#ffd700"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}
