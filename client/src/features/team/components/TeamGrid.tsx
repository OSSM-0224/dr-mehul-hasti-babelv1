"use client"

import React, { useState } from "react";
import { useTeam } from "../hooks/useTeam.js";
import { COLORS } from "@/src/features/shared/constants/colors";
import { TeamMember } from "@/src/types";
import { X, CheckCircle, GraduationCap } from "@phosphor-icons/react";
import { Skeleton } from "../../shared/components/Skeleton.js";

export default function TeamGrid() {
  const { team, loading, error } = useTeam();
  const [selectedDoctor, setSelectedDoctor] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-sm font-bold tracking-wider uppercase font-inter bg-gradient-to-r from-[#00A8E8] to-[#005B96] bg-clip-text text-transparent">
            CLINICAL SPECIALISTS & LEADERS
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Our Friendly Dentists Team
          </h2>
          <p className="font-inter text-slate-500 text-sm sm:text-base leading-relaxed">
            Our team comprises highly qualified Master of Dental Surgery (MDS) experts, each bringing dedicated training in microscopic, laser, robotic, and pediatric treatments.
          </p>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col items-center space-y-4">
                <Skeleton className="w-36 h-36 rounded-full" />
                <Skeleton className="h-6 w-3/4 rounded" />
                <Skeleton className="h-4 w-1/2 rounded" />
                <Skeleton className="h-4 w-2/3 rounded" />
              </div>
            ))
          ) : (
            team.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col h-full text-center p-5 space-y-4"
              >
                {/* Profile Image - circular with beautiful border */}
                <div className="relative mx-auto w-36 h-36 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner group-hover:border-[#00A8E8] transition-colors duration-300">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Name & Title */}
                <div className="space-y-1">
                  <h3
                    className="font-playfair font-bold text-lg group-hover:text-[#005B96] transition-colors"
                    style={{ color: COLORS.primary }}
                  >
                    {doc.name}
                  </h3>
                  <span className="block font-inter text-xs text-[#00A8E8] font-bold uppercase tracking-wider">
                    {doc.title}
                  </span>
                  <span className="block font-inter text-sm text-slate-500 font-medium">
                    {doc.specialty}
                  </span>
                </div>

                {/* CTA link with underline hover */}
                <div className="pt-2 flex-grow flex items-end justify-center">
                  <button
                    onClick={() => setSelectedDoctor(doc)}
                    className="font-inter font-bold text-xs underline decoration-[#00A8E8] underline-offset-4 cursor-pointer text-[#00A8E8] hover:text-[#005B96]"
                  >
                    Read Full Bio
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Doctor Biography Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[85vh] border border-gray-100 animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Profile with background gradient */}
              <div
                className="p-6 text-white relative flex items-center gap-4 text-left"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, #003F6B 100%)`
                }}
              >
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-black/25 text-white hover:bg-black/40 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={16} weight="bold" />
                </button>

                {/* Circular image inside modal header */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/50 shadow-md shrink-0">
                  <img
                    src={selectedDoctor.imageUrl}
                    alt={selectedDoctor.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h3 className="font-playfair font-bold text-xl leading-tight">
                    {selectedDoctor.name}
                  </h3>
                  <p className="font-inter text-xs font-semibold text-[#00A8E8] uppercase tracking-widest">
                    {selectedDoctor.title}
                  </p>
                  <p className="font-inter text-sm text-blue-100/90 leading-tight">
                    {selectedDoctor.specialty}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-left">
                {/* Biography */}
                <div className="space-y-2">
                  <h4 className="font-playfair font-bold text-slate-800 text-lg">About Clinical Journey</h4>
                  <p className="font-inter text-slate-600 text-sm leading-relaxed">
                    {selectedDoctor.bio}
                  </p>
                </div>

                {/* Professional Qualifications list */}
                <div className="space-y-3">
                  <h4 className="font-playfair font-bold text-slate-800 text-lg flex items-center gap-1.5">
                    <GraduationCap size={24} weight="duotone" className="text-[#00A8E8]" />
                    <span>Credentials & Education</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedDoctor.education.map((edu, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-inter text-slate-600">
                        <CheckCircle size={18} weight="fill" className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 bg-slate-50 border-t border-gray-100 text-right">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="px-5 py-2 rounded-lg font-inter font-semibold text-sm text-white shadow-md cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Close Profile
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
