"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { Mesh } from "three";
import type { Group } from "three";

// ---------------------------------------------------------------------------
// Helmet model  –  materials patched in useEffect
// ---------------------------------------------------------------------------
function Helmet() {
  const { scene } = useGLTF("/models/helmet.glb");
  const group = useRef<Group>(null);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((mat) => {
          // keep everything opaque
          mat.transparent = false;
          mat.opacity = 1;
          mat.depthWrite = true;

          // inject Bayer dither into the compiled fragment shader
          mat.onBeforeCompile = (shader: { uniforms: Record<string, { value: unknown }>; fragmentShader: string }) => {
            shader.uniforms.uColorLevels = { value: 4.0 };

            // 1) Bayer lookup function – inserted right after #include <common>
            shader.fragmentShader = shader.fragmentShader.replace(
              "#include <common>",
              `
              #include <common>

              uniform float uColorLevels;

              float bayerDither(vec2 pos) {
                mat4 bayer = mat4(
                  vec4( 0.0, 12.0,  3.0, 15.0),
                  vec4( 8.0,  4.0, 11.0,  7.0),
                  vec4( 2.0, 14.0,  1.0, 13.0),
                  vec4(10.0,  6.0,  9.0,  5.0)
                ) / 16.0;
                vec2 idx = mod(floor(pos), 4.0);
                return bayer[int(idx.x)][int(idx.y)];
              }
              `
            );

            // 2) Quantise outgoingLight right before tonemapping
            shader.fragmentShader = shader.fragmentShader.replace(
              "#include <tonemapping_fragment>",
              `
              float dither = bayerDither(gl_FragCoord.xy);
              outgoingLight = floor(outgoingLight * uColorLevels + dither) / uColorLevels;
              #include <tonemapping_fragment>
              `
            );
          };

          mat.needsUpdate = true;
        });
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={group} scale={[4, 4, 4]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/helmet.glb");

// ---------------------------------------------------------------------------
// Canvas
// ---------------------------------------------------------------------------
export function HeroHelmet() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }} gl={{ alpha: true }}>
        <Environment preset="studio" background={false} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 3]} intensity={0.5} />
        <pointLight position={[-3, 2, 4]} intensity={0.3} color="#e8ddd0" />
        <Suspense fallback={null}>
          <Helmet />
        </Suspense>
      </Canvas>
    </div>
  );
}
