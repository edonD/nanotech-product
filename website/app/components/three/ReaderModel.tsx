'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ReaderModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main body - portable reader unit */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1, 1.3]} />
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={0.7}
          roughness={0.2}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </mesh>

      {/* Top face - slightly lighter */}
      <mesh position={[0, 0.51, 0]}>
        <boxGeometry args={[2.02, 0.02, 1.32]} />
        <meshPhysicalMaterial
          color="#252540"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Display screen */}
      <mesh position={[0.2, 0.52, -0.1]}>
        <boxGeometry args={[1.0, 0.01, 0.7]} />
        <meshPhysicalMaterial
          color="#0a1628"
          emissive="#0ea5e9"
          emissiveIntensity={0.15}
          metalness={0.1}
          roughness={0.05}
        />
      </mesh>

      {/* Screen content - simulated display */}
      <mesh position={[0.2, 0.525, -0.1]}>
        <planeGeometry args={[0.9, 0.6]} />
        <meshBasicMaterial color="#0a1628" transparent opacity={0.95} />
      </mesh>

      {/* Screen glow line (growth curve) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`curve-${i}`} position={[-0.1 + i * 0.12, 0.527, -0.1 + Math.sin(i * 0.8) * 0.1]}>
          <boxGeometry args={[0.08, 0.001, 0.02]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.8} />
        </mesh>
      ))}

      {/* Chip insertion slot */}
      <mesh position={[-0.85, 0.2, 0]}>
        <boxGeometry args={[0.08, 0.35, 0.5]} />
        <meshPhysicalMaterial
          color="#000000"
          emissive="#00f0ff"
          emissiveIntensity={0.1}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Slot rim glow */}
      <mesh position={[-0.86, 0.2, 0]}>
        <boxGeometry args={[0.02, 0.38, 0.53]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Status LED */}
      <mesh position={[0.8, 0.52, 0.4]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial
          color="#10b981"
        />
      </mesh>

      {/* USB / connectivity port */}
      <mesh position={[1.01, -0.2, 0]}>
        <boxGeometry args={[0.02, 0.12, 0.15]} />
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Ventilation grille on side */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={`vent-${i}`} position={[0, -0.1, 0.66 + 0.005]}>
          <boxGeometry args={[0.3, 0.02, 0.01]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.3} />
        </mesh>
      ))}

      {/* Base rubber feet */}
      {[[-0.8, -0.52, 0.5], [0.8, -0.52, 0.5], [-0.8, -0.52, -0.5], [0.8, -0.52, -0.5]].map((pos, i) => (
        <mesh key={`foot-${i}`} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
          <meshStandardMaterial color="#333" roughness={0.9} />
        </mesh>
      ))}

      {/* Veridion logo text placeholder - small illuminated strip */}
      <mesh position={[0.2, 0.01, 0.66]}>
        <boxGeometry args={[0.6, 0.05, 0.01]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}
