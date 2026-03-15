'use client';

import Scene from '../three/Scene';
import ReaderModel from '../three/ReaderModel';
import { OrbitControls } from '@react-three/drei';

export default function ReaderScene() {
  return (
    <Scene cameraPosition={[3, 1.5, 3]} cameraFov={35} className="w-full h-full">
      <ReaderModel />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        autoRotate
        autoRotateSpeed={1}
      />
    </Scene>
  );
}
