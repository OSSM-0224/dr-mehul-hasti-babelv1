"use client"

import React from "react";
import { Treatment } from "@/src/types";
import { Clock, ArrowRight } from "@phosphor-icons/react";

interface TreatmentCardProps {
  key?: React.Key;
  treatment: Treatment;
  onSelect: (treatment: Treatment) => void;
}

export default function TreatmentCard({ treatment, onSelect }: TreatmentCardProps) {
  return (
    <div
      id={`treatment-card-${treatment.id}`}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100 group transform hover:-translate-y-1.5 text-left"
    >
      {/* Card Header Image/Illustration Area (Left Empty for now per design requirements) */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100/50 flex items-center justify-center border-b border-slate-100">
        {/*
          DESIGN PLACEHOLDER COMMENT:
          This designated area should be populated with a high-fidelity dental specialty SVG or custom illustration later.
          Target illustration name or path: `/src/assets/images/treatments/treatment-specialty-${treatment.id}.svg`
          Do not place any temporary icon, Phosphor icon, or generic placeholder icon here.
        */}

        {/* Category Badge overlay */}
        <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full font-inter">
          {treatment.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow space-y-3">
        <h3 className="font-playfair font-bold text-xl leading-snug group-hover:text-[#005B96] transition-colors duration-200 line-clamp-1">
          {treatment.title}
        </h3>
        
        <p className="font-inter text-slate-500 text-sm leading-relaxed flex-grow line-clamp-3">
          {treatment.description}
        </p>

        {/* Info row */}
        <div className="flex items-center text-xs text-slate-400 font-inter font-semibold py-1">
          <Clock size={14} className="mr-1.5 text-[#00A8E8]" weight="bold" />
          <span>Duration: {treatment.duration}</span>
        </div>

        {/* CTA "Know More" */}
        <div className="pt-2">
          <button
            onClick={() => onSelect(treatment)}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg border border-[#00A8E8] font-inter font-semibold text-xs transition-all duration-300 cursor-pointer text-[#005B96] hover:bg-[#00A8E8] hover:text-white"
          >
            <span>Learn More Details</span>
            <ArrowRight size={14} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
