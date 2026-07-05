"use client";

import React from "react";
import { motion } from "framer-motion";
import { useApp } from "@/src/hooks/index.js";
import { MapPin } from "lucide-react";

export default function BranchSelector() {
  const { selectedBranch, setSelectedBranch } = useApp();

  const branches = [
    { id: "chembur", label: "Chembur Clinic", subtitle: "Dr. Saloni Mehul Hasti" },
    { id: "mankhurd", label: "Mankhurd Clinic", subtitle: "Dr. Mehul Hasti Babel" },
  ] as const;

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 border-b border-slate-200/50 bg-[#FAF9F6]">
      <div className="text-center mb-3">
        <span className="text-[10px] font-bold tracking-widest text-[#894600] uppercase font-inter inline-flex items-center gap-1">
          <MapPin className="w-3 h-3" /> Select Clinical Residency
        </span>
      </div>
      
      {/* Outer elegant container */}
      <div className="relative flex items-center bg-white border border-slate-200/60 p-1 rounded-full shadow-sm max-w-md w-full mx-auto">
        {branches.map((b) => {
          const isActive = selectedBranch === b.id;
          return (
            <button
              key={b.id}
              onClick={() => setSelectedBranch(b.id)}
              className="relative flex-1 py-3 px-4 rounded-full text-center transition-all duration-300 cursor-pointer focus:outline-none select-none z-10"
            >
              {/* Text content */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span
                  className={`font-playfair text-sm sm:text-base font-bold transition-colors duration-300 leading-tight ${
                    isActive ? "text-[#005B96]" : "text-[#75777C] hover:text-[#005B96]"
                  }`}
                >
                  {b.label}
                </span>
                <span
                  className={`font-inter text-[9px] sm:text-[10px] tracking-wide mt-0.5 transition-colors duration-300 ${
                    isActive ? "text-[#894600] font-medium" : "text-slate-400 font-light"
                  }`}
                >
                  {b.subtitle}
                </span>
              </div>

              {/* Framer motion active pill backplate */}
              {isActive && (
                <motion.div
                  layoutId="activeBranchTab"
                  className="absolute inset-0 bg-[#FAF9F6] border border-[#894600]/10 rounded-full -z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
