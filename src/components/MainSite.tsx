import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

export default function MainSite() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
      <Canvas gl={{ antialias: true, alpha: false }} dpr={[1, 2]}>
        <color attach="background" args={['#050505']} />
        <PerspectiveCamera makeDefault position={[0, 2, 12]} fov={50} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, 5, 5]} intensity={1} color="#0044ff" />

        {/* Character removed, awaiting new content */}
      </Canvas>
      <h1 className="absolute text-4xl text-white font-light tracking-[0.2em] pointer-events-none">
        MAIN SITE (AWAITING NEW CONTENT)
      </h1>
    </div>
  );
}
