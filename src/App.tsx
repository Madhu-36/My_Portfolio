import { Canvas } from '@react-three/fiber';
import GeometricScene from './components/GeometricScene';
import { Suspense, useState, useEffect } from 'react';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import CanvasErrorBoundary from './components/CanvasErrorBoundary';

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
import BackToTop from './components/BackToTop';
import SectionDivider from './components/SectionDivider';
import OfflineBanner from './components/OfflineBanner';

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

  // Global Sound Effects Listener with performance throttling
  useEffect(() => {
    let lastCheck = 0;
    const handleMouseOver = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastCheck < 50) return;
      lastCheck = now;
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

    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
    };
  }, [playHover, playClick]);

  return (
    <div className="w-full min-h-screen bg-transparent overflow-x-hidden text-white">
      
      {/* Permanent 3D Background - Hardware accelerated with clamped DPR */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 bg-[#0a0a0a] pointer-events-none will-change-transform">
        <Canvas 
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }} 
          dpr={[1, 1.5]}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
          <CanvasErrorBoundary>
            <Suspense fallback={null}>
              <GeometricScene />
            </Suspense>
          </CanvasErrorBoundary>
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 + 0.2} minPolarAngle={Math.PI / 2 - 0.2} />
        </Canvas>
      </div>

      {/* Main Site Content */}
      <CustomCursor />
      <HackerMode />
      <LiveStatsHUD />
      <OfflineBanner />
      <AnimatePresence>
        {!isLoading && (
          <motion.div 
            className="relative w-full h-full z-10 bg-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="min-h-screen bg-transparent">
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-500 focus:text-ink-950 focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
              >
                Skip to main content
              </a>
              <Navbar />
              <main id="main-content">
                <Hero />
                <SectionDivider />
                <About />
                <SectionDivider />
                <Projects />
                <SectionDivider />
                <Expertise />
                <SectionDivider />
                <Experience />
                <SectionDivider />
                <Contact />
              </main>
              <Footer />
              <AIAssistant />
              <BackToTop />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
