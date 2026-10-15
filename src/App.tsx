import { Canvas } from '@react-three/fiber';
import GeometricScene from './components/GeometricScene';
import { Suspense, useState, useEffect } from 'react';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import CustomCursor from './components/CustomCursor';
import HackerMode from './components/HackerMode';
import LiveStatsHUD from './components/LiveStatsHUD';
import { useSoundEffects } from './hooks/useSoundEffects';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { playHover, playClick } = useSoundEffects();

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0); // Force scroll to top when content appears
    }, 5000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  // Global Sound Effects Listener
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.classList.contains('group')) {
        playHover();
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a')) {
        playClick();
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
    };
  }, [playHover, playClick]);

  return (
    <div className="w-screen min-h-screen bg-transparent overflow-x-hidden text-white">
      
      {/* Permanent 3D Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 bg-[#0a0a0a] pointer-events-none">
        <Canvas gl={{ antialias: true, alpha: false }} dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
          <Suspense fallback={null}>
            <GeometricScene />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 + 0.2} minPolarAngle={Math.PI / 2 - 0.2} />
        </Canvas>
      </div>

      {/* Main Site Content (fades in after 5s of 3D intro) */}
      <CustomCursor />
      <HackerMode />
      <LiveStatsHUD />
      <AnimatePresence>
        {!isLoading && (
          <motion.div 
            className="relative w-full h-full z-10 bg-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="min-h-screen bg-transparent">
              <Navbar />
              <main>
                <Hero />
                <About />
                <Projects />
                <Expertise />
                <Experience />
                <Contact />
              </main>
              <Footer />
              <AIAssistant />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
