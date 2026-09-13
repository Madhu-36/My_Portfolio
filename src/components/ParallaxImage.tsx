import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  parallaxSpeed?: number;
};

export default function ParallaxImage({ src, alt, className = '' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: 1.2 }}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
