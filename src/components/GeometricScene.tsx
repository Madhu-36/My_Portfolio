import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, MeshTransmissionMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

export default function GeometricScene() {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));

  useFrame((state, delta) => {
    // Smooth mouse parallax with clamp
    const targetX = (state.mouse.x * viewport.width) / 12;
    const targetY = (state.mouse.y * viewport.height) / 12;
    
    mouseRef.current.x += (targetX - mouseRef.current.x) * 0.04;
    mouseRef.current.y += (targetY - mouseRef.current.y) * 0.04;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x += delta * 0.12;
      groupRef.current.rotation.z += delta * 0.08;
      
      groupRef.current.position.x = mouseRef.current.x;
      groupRef.current.position.y = mouseRef.current.y;

      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.8) * 0.04;
      groupRef.current.scale.setScalar(scale);
    }
  });

  return (
    <>
      <color attach="background" args={['#0a0a0a']} />
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={2.5} color="#38bdf8" />
      <directionalLight position={[-10, -10, -10]} intensity={4} color="#0284c7" />
      <directionalLight position={[10, -10, 10]} intensity={3} color="#22d3ee" />

      {/* Lightweight, elegant dust particles */}
      <Sparkles count={120} scale={18} size={2} speed={0.3} opacity={0.25} color="#38bdf8" />

      <group ref={groupRef}>
        <Float speed={3} rotationIntensity={2} floatIntensity={2}>
          <mesh>
            {/* Optimized geometry: 128x32 provides identical visual smoothness with 75% fewer vertices */}
            <torusKnotGeometry args={[2, 0.58, 128, 32]} />
            <MeshTransmissionMaterial 
              backside={false}
              resolution={256}
              samples={4}
              thickness={1.5}
              roughness={0.12}
              transmission={1}
              ior={1.4}
              chromaticAberration={0.3}
              anisotropy={0.2}
              distortion={0}
              distortionScale={0}
              temporalDistortion={0}
              color="#ffffff"
            />
          </mesh>
        </Float>
      </group>
      
      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.25} mipmapBlur intensity={1.2} />
        <Vignette eskil={false} offset={0.15} darkness={1.1} />
      </EffectComposer>
    </>
  );
}
