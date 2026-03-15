'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ChipModelProps {
  scale?: number;
  rotationSpeed?: number;
  showParticles?: boolean;
}

export default function ChipModel({
  scale = 1,
  rotationSpeed = 0.3,
  showParticles = true,
}: ChipModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Microfluidic channel paths
  const channelGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Main inlet channel
    shape.moveTo(-1.2, 0);
    shape.lineTo(-0.5, 0);
    // Branch into sub-channels
    shape.lineTo(-0.3, 0.3);
    shape.lineTo(0.8, 0.3);
    shape.lineTo(0.8, 0.2);
    shape.lineTo(-0.2, 0.2);
    shape.lineTo(-0.4, 0);
    shape.lineTo(-0.2, -0.2);
    shape.lineTo(0.8, -0.2);
    shape.lineTo(0.8, -0.3);
    shape.lineTo(-0.3, -0.3);
    shape.lineTo(-0.5, 0);
    shape.lineTo(-1.2, 0);

    const extrudeSettings = { depth: 0.02, bevelEnabled: false };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  // Particle system for ambient effect
  const particleData = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      velocities[i * 3] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
      sizes[i] = Math.random() * 2 + 0.5;
    }

    return { positions, velocities, sizes, count };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * rotationSpeed;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.05;
    }

    if (particlesRef.current && showParticles) {
      const positions = particlesRef.current.geometry.attributes.position;
      const arr = positions.array as Float32Array;
      for (let i = 0; i < particleData.count; i++) {
        arr[i * 3] += particleData.velocities[i * 3];
        arr[i * 3 + 1] += particleData.velocities[i * 3 + 1];
        arr[i * 3 + 2] += particleData.velocities[i * 3 + 2];

        // Wrap around
        for (let j = 0; j < 3; j++) {
          if (Math.abs(arr[i * 3 + j]) > 3) {
            arr[i * 3 + j] *= -0.9;
          }
        }
      }
      positions.needsUpdate = true;
    }
  });

  const s = scale;

  return (
    <group ref={groupRef} scale={[s, s, s]}>
      {/* Layer 1: Silicon substrate (bottom) */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[2.6, 0.08, 1.8]} />
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Layer 2: Electrode / sensor layer */}
      <mesh position={[0, -0.06, 0]}>
        <boxGeometry args={[2.4, 0.04, 1.6]} />
        <meshPhysicalMaterial
          color="#0d47a1"
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={0.85}
          emissive="#003c8f"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Gold electrode traces */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={`electrode-${i}`} position={[-0.8 + i * 0.32, -0.035, 0]}>
          <boxGeometry args={[0.15, 0.01, 1.2]} />
          <meshStandardMaterial
            color="#ffd700"
            metalness={1}
            roughness={0.1}
            emissive="#b8860b"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Layer 3: Microfluidic channels (transparent) */}
      <mesh position={[0, 0.04, 0]} geometry={channelGeometry}>
        <meshPhysicalMaterial
          color="#00f0ff"
          transparent
          opacity={0.3}
          emissive="#00f0ff"
          emissiveIntensity={0.4}
          roughness={0.1}
        />
      </mesh>

      {/* Layer 4: Top PDMS cover (semi-transparent) */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[2.4, 0.06, 1.6]} />
        <meshPhysicalMaterial
          color="#e0f7fa"
          transparent
          opacity={0.15}
          roughness={0.05}
          transmission={0.8}
          thickness={0.5}
          ior={1.4}
        />
      </mesh>

      {/* Inlet port */}
      <mesh position={[-1.3, 0.15, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.12, 16]} />
        <meshPhysicalMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.6}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* 12 AST micro-chambers */}
      {Array.from({ length: 12 }).map((_, i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;
        return (
          <mesh
            key={`chamber-${i}`}
            position={[0.2 + col * 0.3, 0.05, -0.45 + row * 0.45]}
          >
            <boxGeometry args={[0.18, 0.04, 0.25]} />
            <meshPhysicalMaterial
              color={i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#0ea5e9' : '#3b82f6'}
              transparent
              opacity={0.4}
              emissive={i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#0ea5e9' : '#3b82f6'}
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}

      {/* DLD pillar array visualization */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <mesh
            key={`pillar-${row}-${col}`}
            position={[-0.6 + col * 0.08, 0.04, -0.2 + row * 0.1]}
          >
            <cylinderGeometry args={[0.015, 0.015, 0.05, 8]} />
            <meshStandardMaterial
              color="#00f0ff"
              emissive="#00f0ff"
              emissiveIntensity={0.8}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))
      )}

      {/* Edge glow ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.6, 1.65, 64]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Ambient particles */}
      {showParticles && (
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[particleData.positions, 3]}
            />
            <bufferAttribute
              attach="attributes-size"
              args={[particleData.sizes, 1]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.02}
            color="#00f0ff"
            transparent
            opacity={0.4}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>
      )}
    </group>
  );
}
