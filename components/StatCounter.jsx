'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Animates 0 -> value once the stat scrolls into view. Real numbers only —
// see lib/data.js, runetedStats.
export default function StatCounter({ value, suffix = '', label, duration = 1.1 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-3xl font-medium text-ink dark:text-inkdark sm:text-4xl">
        {display.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-muted">{label}</div>
    </div>
  );
}
