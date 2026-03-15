'use client';

import Scene from '../three/Scene';
import ChipExploded from '../three/ChipExploded';
import { OrbitControls } from '@react-three/drei';

interface ExplodedSceneProps {
  activeLayer: number | null;
  onLayerClick: (layer: number) => void;
}

export default function ExplodedScene({ activeLayer, onLayerClick }: ExplodedSceneProps) {
  return (
    <Scene cameraPosition={[3, 2, 3]} cameraFov={35} className="w-full h-full">
      <ChipExploded
        explodeAmount={1.2}
        activeLayer={activeLayer}
        onLayerClick={onLayerClick}
      />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        autoRotate={false}
      />
    </Scene>
  );
}
