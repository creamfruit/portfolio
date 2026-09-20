'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Subtle Apple-style scroll drift: the element moves a little slower/faster
// than the page as it passes through the viewport. strength is in pixels.
export default function Parallax({ children, strength = 30, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
