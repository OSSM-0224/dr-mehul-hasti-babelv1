"use client"

import React from "react";
import { useCounterAnimation } from "../hooks/useCounterAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  startDelay?: number;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  suffix?: string;
}

export function AnimatedCounter({
  targetValue,
  duration = 2000,
  startDelay = 0,
  label,
  icon,
  className,
  suffix = "",
}: AnimatedCounterProps) {
  const { ref, displayValue } = useCounterAnimation(
    targetValue,
    duration,
    startDelay
  );

  const formatValue = (value: number) => {
    if (value >= 1000) {
      return (value / 1000).toFixed(0) + "K";
    }
    return value.toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("flex flex-col items-center gap-2", className)}
    >
      {icon && <div className="text-secondary text-4xl mb-1">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold text-white font-inter tracking-tight">
        {formatValue(displayValue)}
        {suffix}
      </div>
      <p className="text-blue-100 text-center text-xs sm:text-sm font-medium uppercase tracking-wider font-inter">
        {label}
      </p>
    </motion.div>
  );
}
