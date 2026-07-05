"use client"

import React from "react";
import { motion } from "framer-motion";
import { FEATURES } from "@/src/features/shared/constants/constants";
import { Trophy, Crown, Stethoscope, Heart, Lightning, Phone } from "@phosphor-icons/react";

export default function WhyChooseUs() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Trophy":
        return <Trophy size={40} weight="fill" className="text-white transition-transform duration-300 group-hover:rotate-12" />;
      case "Crown":
        return <Crown size={40} weight="fill" className="text-white transition-transform duration-300 group-hover:rotate-12" />;
      case "Stethoscope":
        return <Stethoscope size={40} weight="fill" className="text-white transition-transform duration-300 group-hover:rotate-12" />;
      case "Heart":
        return <Heart size={40} weight="fill" className="text-white transition-transform duration-300 group-hover:rotate-12" />;
      case "Lightning":
        return <Lightning size={40} weight="fill" className="text-white transition-transform duration-300 group-hover:rotate-12" />;
      case "Phone":
        return <Phone size={40} weight="fill" className="text-white transition-transform duration-300 group-hover:rotate-12" />;
      default:
        return <Trophy size={40} weight="fill" className="text-white transition-transform duration-300 group-hover:rotate-12" />;
    }
  };

  return (
    <section id="technologies" className="py-16 md:py-20 bg-white text-left overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold tracking-wider uppercase font-inter text-[#00A8E8]"
          >
            CLINICAL ADVANTAGES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair font-bold text-3xl sm:text-4xl text-slate-900 leading-tight"
          >
            Why Patients Choose Unique Dental Care
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-inter text-slate-500 text-sm sm:text-base leading-relaxed"
          >
            By shifting from manual, guessing-based dentistry to computerized, visual dentistry, we provide unmatched accuracy, immediate recovery, and complete transparency.
          </motion.p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-x-6 md:gap-y-8 gap-4">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group bg-gradient-to-b from-[#F5F5F5] to-[#FAFAFA] border border-gray-200 rounded-[20px] py-8 px-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,91,150,0.15)] hover:border-[#00A8E8] hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
            >
              {/* Feature Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00A8E8] to-[#005B96] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(0,168,232,0.2)]">
                {getIcon(feature.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-playfair font-bold text-xl leading-[1.4] tracking-[-0.5px] text-[#005B96] mt-4 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-[#75777C] text-[15px] leading-[1.6]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
