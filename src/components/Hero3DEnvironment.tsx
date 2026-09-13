import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Box, TorusKnot, Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function Hero3DEnvironment() {
  const group = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Group>(null);
  const orbitGroup = useRef<THREE.Group>(null);

  // Rotate entire group slowly based on mouse position
  useFrame((state, delta) => {
    // 1. Scroll-driven camera
    const scrollY = window.scrollY;
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -scrollY * 0.01, 0.1);

    // 2. Parallax rotation for the environment
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.05);
    }

    // 3. 3D Text Parallax (moves opposite to background for depth)
    if (textRef.current) {
      textRef.current.position.x = THREE.MathUtils.lerp(textRef.current.position.x, state.mouse.x * -0.5 - 1.5, 0.05);
      textRef.current.position.y = THREE.MathUtils.lerp(textRef.current.position.y, state.mouse.y * -0.5 + 1.5, 0.05);
    }

    // 4. Rotate planet and orbit group
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.1;
    }
    if (orbitGroup.current) {
      orbitGroup.current.rotation.y -= delta * 0.15;
      orbitGroup.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      
      {/* 3D Typography (replaces HTML text) */}
      <group ref={textRef} position={[-1.5, 1.5, 1]}>
        <Text
          position={[0, 0, 0]}
          fontSize={0.8}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          fontWeight="bold"
        >
          Building the
        </Text>
        <Text
          position={[0, -1, 0]}
          fontSize={1}
          color="#58a6ff"
          anchorX="left"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          fontWeight="900"
        >
          DIGITAL FUTURE
        </Text>
      </group>

      {/* Holographic Planet (Center) */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={[2.5, 0, -3]}>
        <Sphere ref={planetRef} args={[2.5, 32, 32]}>
          <meshStandardMaterial color="#0d1117" emissive="#1f6feb" emissiveIntensity={0.2} wireframe />
        </Sphere>
        
        {/* Core glow */}
        <Sphere args={[2.3, 16, 16]}>
          <meshBasicMaterial color="#388bfd" transparent opacity={0.1} />
        </Sphere>

        {/* Orbiting Domain Nodes */}
        <group ref={orbitGroup}>
          {/* AI Node */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[-3.5, 1, 0]}>
            <Icosahedron args={[0.5, 1]} scale={1}>
              <meshStandardMaterial color="#388bfd" wireframe />
            </Icosahedron>
          </Float>

          {/* Game Dev Node */}
          <Float speed={3} rotationIntensity={2} floatIntensity={2.5} position={[2.5, -2, 2.5]}>
            <Box args={[0.6, 0.6, 0.6]} scale={1} rotation={[0.4, 0.2, 0]}>
              <meshStandardMaterial color="#56d364" />
            </Box>
          </Float>

          {/* Cybersecurity Node */}
          <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[1, 3, -2]}>
            <TorusKnot args={[0.3, 0.08, 100, 16]} scale={1}>
              <meshStandardMaterial color="#f85149" wireframe />
            </TorusKnot>
          </Float>
        </group>
      </Float>
      
      {/* Background Particles/Stars */}
      {Array.from({ length: 100 }).map((_, i) => (
        <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={1} position={[
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40 - 10,
          (Math.random() - 0.5) * 20 - 10
        ]}>
          <mesh>
            <sphereGeometry args={[Math.random() * 0.06, 8, 8]} />
            <meshBasicMaterial color={Math.random() > 0.8 ? "#58a6ff" : "#8b949e"} transparent opacity={0.4} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
