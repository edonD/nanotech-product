'use client';

import Scene from '../three/Scene';
import ChipModel from '../three/ChipModel';
import { Float } from '@react-three/drei';

export default function HeroScene() {
  return (
    <Scene
      cameraPosition={[0, 1.5, 4]}
      cameraFov={40}
      className="w-full h-full"
    >
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <ChipModel scale={1.2} rotationSpeed={0.3} showParticles={true} />
      </Float>
    </Scene>
  );
}
