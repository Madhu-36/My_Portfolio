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
    // Smooth mouse parallax
    const targetX = (state.mouse.x * viewport.width) / 10;
    const targetY = (state.mouse.y * viewport.height) / 10;
    
    mouseRef.current.x += (targetX - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (targetY - mouseRef.current.y) * 0.05;

    if (groupRef.current) {
      // Enhanced complex rotation
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x += delta * 0.15;
      groupRef.current.rotation.z += delta * 0.1;
      
      groupRef.current.position.x = mouseRef.current.x;
      groupRef.current.position.y = mouseRef.current.y;

      // Enhanced pulsating "breathing" animation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      groupRef.current.scale.setScalar(scale);
    }
  });

  return (
    <>
      <color attach="background" args={['#0a0a0a']} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, -10, -10]} intensity={8} color="#001188" />
      <directionalLight position={[10, -10, 10]} intensity={6} color="#00ff44" />
      <directionalLight position={[-10, 10, 10]} intensity={6} color="#ffcc00" />
      <directionalLight position={[10, -10, -10]} intensity={6} color="#ff0000" />

      {/* Dust/Sparkles for atmosphere */}
      <Sparkles count={500} scale={20} size={2} speed={0.4} opacity={0.3} color="#ffffff" />

      <group ref={groupRef}>
        {/* Central Complex Geometry */}
        <Float speed={4} rotationIntensity={3} floatIntensity={3}>
          <mesh>
            <torusKnotGeometry args={[2, 0.6, 512, 64]} />
            <MeshTransmissionMaterial 
              backside
              thickness={2}
              roughness={0.1}
              transmission={1}
              ior={1.5}
              chromaticAberration={0.5}
              anisotropy={0.3}
              color="#ffffff"
            />
          </mesh>
        </Float>

      </group>
      
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}
