import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function InteractiveParticles() {
  const count = 300;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  // Create initial random positions
  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 10 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }
    return { positions, originalPositions };
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Track global mouse because canvas is pointer-events-none
  const mouseRef = useRef(new THREE.Vector2(-999, -999));
  
  useMemo(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', (e) => {
        // Normalize mouse to -1 to 1 for 3D space approximation
        mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      });
    }
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      let x = originalPositions[i3];
      let y = originalPositions[i3 + 1];
      let z = originalPositions[i3 + 2];
      
      // Add slow natural floating
      x += Math.sin(time + i) * 2;
      y += Math.cos(time + i * 0.5) * 2;
      
      // Convert normalized mouse to world space roughly (assuming z=0 depth is around 15 units wide)
      const mouseWorldX = mouseRef.current.x * 20;
      const mouseWorldY = mouseRef.current.y * 20;
      
      // Calculate distance to mouse
      const dx = x - mouseWorldX;
      const dy = y - mouseWorldY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Repel from mouse
      if (dist < 8) {
        const force = (8 - dist) * 0.5;
        x += (dx / dist) * force;
        y += (dy / dist) * force;
      }
      
      dummy.position.set(x, y, z);
      dummy.rotation.x = time * 0.5 + i;
      dummy.rotation.y = time * 0.2 + i;
      
      // Scale pulse
      const s = (Math.sin(time * 2 + i) + 1.5) * 0.2;
      dummy.scale.set(s, s, s);
      
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#00ffcc" wireframe />
    </instancedMesh>
  );
}
