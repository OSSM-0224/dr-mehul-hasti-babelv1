"use client"

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function useCounterAnimation(
  targetValue: number,
  duration: number = 2000, // 2 seconds
  startDelay: number = 0
) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const delay = setTimeout(() => {
      const startTime = Date.now();
      const endTime = startTime + duration;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        setDisplayValue(Math.floor(progress * targetValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }, startDelay);

    return () => clearTimeout(delay);
  }, [isInView, targetValue, duration, startDelay]);

  return { ref, displayValue };
}
