import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // High performance motion values: bypass React state updates on mouse move
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for follower ring
  const springConfig = { damping: 25, stiffness: 350, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Hide default cursor safely on desktop
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 h-2 w-2 rounded-full bg-accent-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
      />

      {/* Outer Follower Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 rounded-full border border-accent-400/50 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
        animate={{
          width: isHovering ? 44 : 28,
          height: isHovering ? 44 : 28,
          borderColor: isHovering ? 'rgba(34, 211, 238, 0.9)' : 'rgba(34, 211, 238, 0.4)',
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.12)' : 'rgba(6, 182, 212, 0.02)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />
    </div>
  );
}
