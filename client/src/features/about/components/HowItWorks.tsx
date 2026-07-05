"use client"

import React from "react";
import { STEPS } from "@/src/features/shared/constants/constants";
import { COLORS } from "@/src/features/shared/constants/colors";
import { Calendar, Eye, Stethoscope, CheckCircle } from "@phosphor-icons/react";

export default function HowItWorks() {
  const getIcon = (name: string) => {
    switch (name) {
      case "CalendarDays":
        return <Calendar size={40} weight="duotone" className="text-[#00A8E8]" />;
      case "Eye":
        return <Eye size={40} weight="duotone" className="text-[#00A8E8]" />;
      case "Stethoscope":
        return <Stethoscope size={40} weight="duotone" className="text-[#00A8E8]" />;
      case "CheckCircle2":
        return <CheckCircle size={40} weight="fill" className="text-[#00A8E8]" />;
      default:
        return <CheckCircle size={40} weight="duotone" className="text-[#00A8E8]" />;
    }
  };

  return (
    <section
      className="py-20 text-white relative overflow-hidden bg-[#005B96]"
      style={{ backgroundColor: COLORS.primary }}
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none -ml-40 -mt-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00A8E8]/10 rounded-full blur-3xl pointer-events-none -mr-45 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-sm font-bold tracking-wider uppercase text-secondary font-inter text-[#00A8E8]">
            CLINICAL WORKFLOW & PROTOCOL
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-white leading-tight">
            What We Do for Your Teeth
          </h2>
          <p className="font-inter text-blue-100/80 text-sm sm:text-base leading-relaxed">
            Our fully digital dental journey ensures complete transparency, minimal chair time, and comfortable, highly accurate results. Here is what to expect during your visits:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#00A8E8]/0 via-[#00A8E8]/40 to-[#00A8E8]/0 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-start text-left p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#00A8E8]/30 transition-all duration-350 transform hover:-translate-y-1.5 group shadow-lg"
              >
                {/* Top Row with Icon and Elegant Number */}
                <div className="w-full flex justify-between items-start mb-6">
                  {/* Elegant Icon Container */}
                  <div className="p-3 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 group-hover:shadow-[#00A8E8]/10 group-hover:shadow-lg transition-all duration-300">
                    {getIcon(step.iconName)}
                  </div>
                  
                  {/* Step Number in refined, professional sans-serif */}
                  <span className="font-inter font-extralight text-5xl tracking-tighter text-white/20 group-hover:text-[#00A8E8] transition-colors duration-300 select-none">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-playfair font-bold text-xl text-white mb-2 leading-snug group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="font-inter text-blue-100/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
