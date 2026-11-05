import { Canvas } from '@react-three/fiber';
import Hero3DEnvironment from './Hero3DEnvironment';
import { Suspense } from 'react';

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#58a6ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#56d364" />
        
        <Suspense fallback={null}>
          <Hero3DEnvironment />
        </Suspense>
      </Canvas>
    </div>
  );
}
