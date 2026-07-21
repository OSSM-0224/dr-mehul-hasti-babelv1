"use client"

import React from "react";
import { COLORS } from "../../../features/shared/constants/colors";
import { Trophy, ShieldCheck, Heart, Sparkle } from "@phosphor-icons/react";
import AboutCarousel from "./AboutCarousel";

interface AboutProps {
  onOpenBookingModal: () => void;
}

export default function AboutSection({ onOpenBookingModal }: AboutProps) {
  const awards = [
    {
      title: "Best Digital Practice in India",
      org: "National Dental Excellence Awards",
      year: "2025"
    },
    {
      title: "Pioneer in Laser Endodontics",
      org: "International Laser Congress",
      year: "2024"
    },
    {
      title: "Top Microscopic Clinical Team",
      org: "All-India Micro-Dentistry Forum",
      year: "2025"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Text & Awards */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-sm font-bold tracking-wider uppercase font-inter" style={{ color: COLORS.secondary }}>
                ABOUT UNIQUE DENTAL CARE
              </span>
              <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Laser Dentistry Specialist & Advanced Cosmetic Excellence
              </h2>
            </div>

            <div className="space-y-4 font-inter text-slate-600 text-base leading-relaxed">
              <p>
                At <strong>Unique Dental Care</strong>, we believe dental treatments should be exceptionally precise, entirely customized, and absolutely pain-free. Led by the renowned cosmetic expert <strong>Dr. Mehul Hasti Babel</strong>, our boutique clinic is designed with ultra-premium standards to deliver a calming and high-end experience for all your aesthetic and dental desires.
              </p>
              <p>
                As specialists in <strong>Laser Dentistry Specialist & Advanced Cosmetic Procedures</strong>, we leverage modern technology alongside a refined aesthetic sense. Whether you require a life-changing <strong>Cosmetic Smile Makeover using ultra-thin porcelain veneers</strong>, computer-guided <strong>dental implant restorations</strong>, or a <strong>painless, single-sitting root canal treatment</strong>, we craft every solution with flawless precision.
              </p>
              <p>
                We maintain rigorous hospital-grade sterilization protocols, utilizing Class-B autoclaves and individually sealed sterile cassettes for every patient. Discover a sanctuary where clinical masterclass meets personalized artistic beauty.
              </p>
            </div>

            {/* Awards Section */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="font-playfair font-semibold text-lg text-slate-900">
                Pioneering Excellence & Recognized Leadership
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl border border-gray-100 bg-slate-50 flex flex-col gap-1 items-start shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Trophy size={28} weight="duotone" className="mb-1 text-[#894600]" />
                    <span className="font-inter font-bold text-xs text-slate-900 leading-tight">
                      {award.title}
                    </span>
                    <span className="font-inter text-[10px] text-slate-500">
                      {award.org} • {award.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-inter font-semibold text-sm border-2 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer hover:shadow-md hover:bg-slate-50"
                style={{
                  borderColor: COLORS.secondary,
                  color: COLORS.primary,
                }}
              >
                <span>Schedule a Luxury Consultation</span>
                <Sparkle size={16} weight="bold" className="text-[#00A8E8]" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Digital Infrastructure Image Carousel */}
          <div className="lg:col-span-6 space-y-6">
            <AboutCarousel />

            {/* Carousel auxiliary trusts */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-6 text-slate-500 text-xs font-inter font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} weight="bold" className="text-emerald-500" />
                <span>100% Sterile Environment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart size={16} weight="bold" className="text-rose-500" />
                <span>Anxiety-free Diagnostics</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
