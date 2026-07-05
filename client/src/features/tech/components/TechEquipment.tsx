"use client"

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Eye, ShieldCheck, Waves, Selection, Sparkle } from "@phosphor-icons/react";
import { useTech } from "../hooks/useTech.js";
import { Skeleton } from "../../shared/components/Skeleton.js";

const getIconForTitle = (title: string) => {
  if (title.includes("Microscope") || title.includes("Zeiss")) return <Eye size={28} className="text-[#00A8E8]" weight="fill" />;
  if (title.includes("TRIOS") || title.includes("Scanner")) return <Selection size={28} className="text-[#00A8E8]" weight="fill" />;
  if (title.includes("Anesthesia") || title.includes("STA")) return <Cpu size={28} className="text-[#00A8E8]" weight="fill" />;
  if (title.includes("CBCT")) return <Cpu size={28} className="text-[#00A8E8]" weight="fill" />;
  return <Waves size={28} className="text-[#00A8E8]" weight="fill" />;
};

export default function TechEquipment() {
  const { tech: technologies, loading, error } = useTech();

  return (
    <section id="technology" className="py-20 bg-slate-50 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-sm font-bold tracking-wider uppercase font-inter text-[#00A8E8] block">
            MEDICAL TECHNOLOGY & EQUIPMENT
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Digital Diagnostic & Surgical Masterclass
          </h2>
          <p className="font-inter text-slate-500 text-sm sm:text-base leading-relaxed">
            By shifting from guessing-based dental methods to high-magnification computerized robotics, we ensure perfect diagnostic validation and stress-free treatments.
          </p>
        </div>

        {/* 2x2 Grid of Tech cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col sm:flex-row gap-6">
                <Skeleton className="w-full sm:w-2/5 aspect-[16/10] sm:h-40 rounded-xl" />
                <div className="w-full sm:w-3/5 space-y-3">
                  <Skeleton className="h-4 w-1/4 rounded" />
                  <Skeleton className="h-6 w-3/4 rounded" />
                  <Skeleton className="h-12 w-full rounded" />
                </div>
              </div>
            ))
          ) : (
            technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
              >
                {/* Left/Top: Image container */}
                <div className="sm:w-2/5 relative overflow-hidden aspect-[16/10] sm:aspect-auto sm:min-h-[280px]">
                  <img 
                    src={tech.imageUrl} 
                    alt={tech.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/60 sm:from-transparent via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/85 text-white text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full font-inter backdrop-blur-sm shadow border border-white/10 flex items-center gap-1.5 z-10">
                    <ShieldCheck size={12} className="text-emerald-400" weight="fill" />
                    <span>FDA Approved</span>
                  </div>
                </div>

                {/* Right/Bottom: Content */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-xl">
                        {getIconForTitle(tech.title)}
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold font-sans">
                          {tech.specs}
                        </span>
                        <h3 className="font-playfair font-bold text-lg text-slate-900 leading-snug group-hover:text-[#005B96] transition-colors">
                          {tech.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="font-inter text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {tech.clinicalUse}
                    </p>
                  </div>

                  {/* Patient benefit footer callout */}
                  <div className="pt-3 border-t border-slate-50 bg-slate-50/50 p-3 rounded-xl border border-slate-100 font-sans">
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      Patient Benefit
                    </span>
                    <span className="text-xs font-semibold text-[#005B96] flex items-center gap-1.5 mt-0.5">
                      <Sparkle size={14} className="text-[#00A8E8]" weight="fill" />
                      {"Ultra-precise clinical micro-planning and maximum tissue safety"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
