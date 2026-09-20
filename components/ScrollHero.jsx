'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Wraps the hero block. As the person scrolls past it, it scales down and
// fades slightly — the same easing trick Apple product pages use on their
// opening section, kept subtle rather than a full pinned/scrub sequence.
export default function ScrollHero({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <motion.div ref={ref} style={{ scale, opacity, y }}>
      {children}
    </motion.div>
  );
}
