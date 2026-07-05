"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTreatments } from "../hooks/useTreatments.js";
import { COLORS } from "@/src/features/shared/constants/colors";
import { Treatment } from "@/src/types";
import TreatmentCard from "./TreatmentCard";
import { X, Calendar, Sparkle, Funnel, CheckCircle } from "@phosphor-icons/react";
import { Skeleton } from "../../shared/components/Skeleton.js";
import { useApp } from "@/src/hooks/index.js";

interface TreatmentSectionProps {
  onOpenBookingModal: (treatmentId?: number) => void;
}

export default function TreatmentSection({ onOpenBookingModal }: TreatmentSectionProps) {
  const { treatments, loading, error } = useTreatments();
  const { setIsDentalTourismOpen } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeDetailsTreatment, setActiveDetailsTreatment] = useState<Treatment | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const categories = ["All", "Digital Clinic", "Endodontics", "Cosmetics", "Surgery", "Prosthodontics", "Pediatric", "Dental Tourism"];

  const filteredTreatments = selectedCategory === "All"
    ? treatments
    : treatments.filter(t => t.category === selectedCategory || (selectedCategory === "Pediatric" && t.category === "Pediatric"));

  const displayedTreatments = !isExpanded
    ? filteredTreatments.slice(0, 3)
    : filteredTreatments;

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsExpanded(false);
  };

  return (
    <section id="treatments" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold tracking-wider uppercase text-secondary font-inter text-[#00A8E8] block"
          >
            CLINICAL DEPARTMENTS & PROCEDURES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair font-bold text-3xl sm:text-4xl text-slate-900 leading-tight"
          >
            Advanced Clinical Solutions under One Roof
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-inter text-slate-500 text-sm sm:text-base leading-relaxed"
          >
            From single-sitting painless microscopic root canals to computer-planned robotic surgical implantations, we offer 100% digital dental precision tailored to your comfort.
          </motion.p>
        </div>

        {/* Filter Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4"
        >
          <div className="flex items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mr-2 font-inter mb-2">
            <Funnel size={16} className="mr-1 text-[#005B96]" weight="bold" />
            <span>Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`px-4 py-2 rounded-full font-inter font-semibold text-xs transition-all duration-300 cursor-pointer border ${
                selectedCategory === category
                  ? "text-white shadow-md border-transparent"
                  : "bg-white text-slate-600 hover:bg-slate-50 border-slate-200"
              }`}
              style={{
                backgroundColor: selectedCategory === category ? COLORS.primary : undefined,
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* 3-Column Treatments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
                <Skeleton className="h-48 w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4 rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-2/3 rounded" />
              </div>
            ))
          ) : (
            displayedTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
                className="flex flex-col h-full"
              >
                <TreatmentCard
                  treatment={treatment}
                  onSelect={(t) => {
                    if (t.id === 16) {
                      setIsDentalTourismOpen(true);
                    } else {
                      setActiveDetailsTreatment(t);
                    }
                  }}
                />
              </motion.div>
            ))
          )}
        </div>

        {/* Empty State */}
        {displayedTreatments.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-inner border border-gray-100">
            <p className="font-inter font-medium text-slate-400">No treatments found in this department yet.</p>
          </div>
        )}

        {/* Show More / Show Less button */}
        {filteredTreatments.length > 3 && (
          <div className="mt-16 text-center">
            {!isExpanded ? (
              <button
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#00A8E8] text-[#005B96] hover:bg-[#005B96] hover:border-[#005B96] hover:text-white font-inter font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <span>View All Treatments</span>
                <span className="text-[10px] bg-[#00A8E8]/10 text-[#005B96] group-hover:bg-white/20 group-hover:text-white px-2 py-0.5 rounded-full font-bold font-inter transition-colors">
                  +{filteredTreatments.length - displayedTreatments.length} more
                </span>
              </button>
            ) : (
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100 font-inter font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span>Show Less</span>
              </button>
            )}
          </div>
        )}

        {/* Floating Details Drawer/Modal */}
        {activeDetailsTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh] border border-gray-100 animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header block */}
              <div
                className="p-6 text-white relative text-left"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, #004D80 100%)`
                }}
              >
                <button
                  onClick={() => setActiveDetailsTreatment(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-black/25 text-white hover:bg-black/40 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} weight="bold" />
                </button>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#00A8E8] bg-white/10 px-2 py-0.5 rounded">
                  {activeDetailsTreatment.category}
                </span>
                <h3 className="font-playfair font-bold text-2xl mt-2 leading-snug">
                  {activeDetailsTreatment.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-left">
                {/* Introduction */}
                <div className="space-y-2">
                  <h4 className="font-playfair font-bold text-slate-800 text-lg">Treatment Overview</h4>
                  <p className="font-inter text-slate-600 text-sm leading-relaxed">
                    {activeDetailsTreatment.description}
                  </p>
                </div>

                {/* Treatment Highlights */}
                <div className="space-y-3">
                  <h4 className="font-playfair font-bold text-slate-800 text-lg flex items-center gap-1.5">
                    <Sparkle size={18} weight="duotone" className="text-[#00A8E8]" />
                    <span>Key Features & Clinical Protocol</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {activeDetailsTreatment.details.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm font-inter text-slate-600">
                        <CheckCircle size={18} weight="fill" className="text-[#00A8E8] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metadata Row */}
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-150 text-xs text-slate-500 font-inter">
                  <div className="text-left">
                    <span className="block font-bold text-slate-400 uppercase text-[9px] tracking-wider">Average Duration</span>
                    <span className="font-semibold text-slate-800 text-sm">{activeDetailsTreatment.duration}</span>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="text-left">
                    <span className="block font-bold text-slate-400 uppercase text-[9px] tracking-wider">Department</span>
                    <span className="font-semibold text-slate-800 text-sm">{activeDetailsTreatment.category}</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 bg-slate-50 border-t border-gray-100 flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveDetailsTreatment(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg font-inter font-semibold text-sm text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const id = activeDetailsTreatment.id;
                    setActiveDetailsTreatment(null);
                    onOpenBookingModal(id);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-inter font-bold text-sm text-white shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <Calendar size={16} weight="bold" />
                  <span>Book Treatment</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
