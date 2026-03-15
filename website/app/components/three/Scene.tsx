'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, ReactNode } from 'react';

interface SceneProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  cameraFov?: number;
  style?: React.CSSProperties;
}

export default function Scene({
  children,
  className = '',
  cameraPosition = [0, 0, 5],
  cameraFov = 45,
  style,
}: SceneProps) {
  return (
    <div className={`three-canvas-container ${className}`} style={style}>
      <Canvas
        camera={{ position: cameraPosition, fov: cameraFov }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
          <directionalLight position={[-3, 2, -5]} intensity={0.4} color="#00f0ff" />
          <pointLight position={[0, 3, 0]} intensity={0.5} color="#0ea5e9" />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
