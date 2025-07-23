'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function HelmetModel() {
  const helmetRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/helmet.glb');

  useFrame((state) => {
    if (helmetRef.current) {
      // Slow continuous rotation around Y axis
      helmetRef.current.rotation.y += 0.005;
      
       }
  });

  return (
    <group ref={helmetRef}>
      <primitive object={scene} scale={1.5} position={[0, 0, 0]} />
    </group>
  );
}

export function HelmetBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        
        <HelmetModel />
        
        <Environment preset="studio" />
        
        {/* Disable controls for background effect */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
} 