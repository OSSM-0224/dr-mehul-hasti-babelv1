"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/src/features/shared/constants/colors";
import {
  Phone,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";

// TODO: point these at your actual asset paths / imports
import mankhurdClinic from "/images/mankhurd1.jpg";
import chemburClinic from "/images/chembur2.png";
import drMehul from "/images/dr-mehul.png";
import drSaloni from "/images/dr-saloni.png";

interface HeroSectionProps {
  onOpenBookingModal: () => void;
  onOpenWhatsAppModal: () => void;
  onViewServices: () => void;
}

type Branch = "mankhurd" | "chembur" | null;

// ---------------------------------------------------------------------------
// Trust badge (Star + label)
// ---------------------------------------------------------------------------
function TrustBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/20 w-fit"
    >
      <Star size={16} weight="fill" className="text-amber-400" />
      <span className="text-xs sm:text-sm font-semibold font-inter">
        Experience Precision, Aesthetics, and Comfort
      </span>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Bullet highlight row
// ---------------------------------------------------------------------------
const HIGHLIGHTS = [
  "Cosmetic Smile Makeover",
  "Premium Porcelain Veneers",
  "Computer-Guided Implants",
  "Painless Single-Sitting RCT",
];

function HighlightGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-blue-50/90 font-inter pt-2"
    >
      {HIGHLIGHTS.map((item) => (
        <div key={item} className="flex items-center gap-2">
          <CheckCircle
            size={18}
            weight="fill"
            className="text-[#00A8E8] shrink-0"
          />
          <span>{item}</span>
        </div>
      ))}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// CTA buttons
// ---------------------------------------------------------------------------
function CtaButtons({
  onOpenWhatsAppModal,
  onViewServices,
}: Pick<HeroSectionProps, "onOpenWhatsAppModal" | "onViewServices">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 pt-4"
    >
      <button
        onClick={onOpenWhatsAppModal}
        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-inter font-bold text-base text-white shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <Phone size={20} weight="bold" />
        <span>Book for Chembur</span>
      </button>

      <button
        onClick={onViewServices}
        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-inter font-bold text-base text-white border-2 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        style={{
          borderColor: COLORS.tertiary,
          backgroundColor: COLORS.tertiary,
        }}
      >
        <span>Book for Mankhurd</span>
        <ArrowRight size={18} weight="bold" />
      </button>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Star row used inside review badges
// ---------------------------------------------------------------------------
function StarRow() {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={14} weight="fill" className="text-amber-400" />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Google / Practo review trust indicators
// ---------------------------------------------------------------------------
function TrustReviews() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-wrap gap-6 pt-6 border-t border-white/10 mt-4"
    >
      {/* Google Reviews */}
      <div className="flex items-center gap-3">
        <div className="bg-white/10 p-2 rounded-lg font-bold font-playfair text-lg text-white">
          G
        </div>
        <div className="text-left">
          <StarRow />
          <span className="text-xs text-blue-100/85 font-semibold font-inter">
            4.9 / 5 Rating on Google (1,500+)
          </span>
        </div>
      </div>

      {/* Practo Reviews */}
      <div className="flex items-center gap-3">
        <div className="bg-teal-500/20 p-2 rounded-lg font-bold font-playfair text-lg text-teal-300">
          P
        </div>
        <div className="text-left">
          <StarRow />
          <span className="text-xs text-blue-100/85 font-semibold font-inter">
            98% Recommended on Practo (800+)
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Left column: all text content + CTAs + trust indicators
// ---------------------------------------------------------------------------
function HeroText({
  onOpenWhatsAppModal,
  onViewServices,
}: Pick<HeroSectionProps, "onOpenWhatsAppModal" | "onViewServices">) {
  return (
    <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
      <TrustBadge />

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight"
      >
        Welcome to{" "}
        <span className="text-secondary text-[#00A8E8]">
          Unique Dental Care
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-inter text-base sm:text-lg text-blue-100/95 max-w-2xl leading-relaxed"
      >
        Committed To Precision by Dr. Mehul Hasti Babel. Experience unparalleled
        precision, custom-crafted smiles, and patient-centered comfort in
        Mankhurd, Mumbai.
      </motion.p>

      <HighlightGrid />
      <CtaButtons
        onOpenWhatsAppModal={onOpenWhatsAppModal}
        onViewServices={onViewServices}
      />
      <TrustReviews />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Right column: hover-expandable clinic panel (Mankhurd <-> Chembur)
// ---------------------------------------------------------------------------
interface ClinicPanelProps {
  side: "left" | "right";
  branch: Branch;
  activeBranch: Branch;
  setActiveBranch: (branch: Branch) => void;
  clinicImage: string;
  doctorImage: string;
  doctorName: string;
  cardContent?: React.ReactNode;
}

function ClinicPanel({
  side,
  branch,
  activeBranch,
  setActiveBranch,
  clinicImage,
  doctorImage,
  doctorName,
  cardContent,
}: ClinicPanelProps) {
  const isActive = activeBranch === branch;
  const otherActive = activeBranch !== null && activeBranch !== branch;
  const doctorShiftDirection = side === "left" ? 1 : -1;

  return (
    <motion.div
      onHoverStart={() => setActiveBranch(branch)}
      onHoverEnd={() => setActiveBranch(null)}
      className={`absolute ${side === "left" ? "left-0" : "right-0"} top-0 h-full overflow-hidden`}
      animate={{
        width: activeBranch === null ? "50%" : isActive ? "100%" : "0%",
        opacity: otherActive ? 0 : 1,
      }}
      transition={{ duration: 0.6 }}
    >
      {/* Background */}
      <img
        src={clinicImage}
        alt={`${doctorName} clinic`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Background */}
      <motion.img
        src={clinicImage}
        alt={`${doctorName} clinic`}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          filter: isActive ? "blur(0px)" : "blur(5px)",
          scale: isActive ? 1 : 1.05,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Doctor */}
      <motion.img
        src={doctorImage}
        alt={doctorName}
        animate={{
          scale: isActive ? 1.1 : 1,
          x: isActive ? 0 : 40 * doctorShiftDirection,
        }}
        className={`absolute bottom-0 ${side === "left" ? "right-10" : "left-10"} h-[90%] object-contain`}
      />
      {/* Info card */}
      <div
        className={`absolute bottom-6 ${side === "left" ? "left-6" : "right-6"} bg-white rounded-2xl p-5`}
      >
        {cardContent}
      </div>
    </motion.div>
  );
}

function ClinicShowcase() {
  const [activeBranch, setActiveBranch] = useState<Branch>(null);

  return (
    <div className="relative h-[600px] w-full rounded-3xl overflow-hidden">
      <ClinicPanel
        side="left"
        branch="mankhurd"
        activeBranch={activeBranch}
        setActiveBranch={setActiveBranch}
        clinicImage={mankhurdClinic}
        doctorImage={drMehul}
        doctorName="Dr. Mehul"
        cardContent={
          <>
            <h3 className="text-xl font-bold text-slate-900">
              Dr. Mehul Hasti Babel
            </h3>

            <p className="text-gray-600 mt-2">
              Cosmetic Dentist & Implantologist
            </p>

            <button className="mt-4 bg-[#00A8E8] text-white px-4 py-2 rounded-lg">
              Book for Mankhurd
            </button>
          </>
        }
      />
      <ClinicPanel
        side="right"
        branch="chembur"
        activeBranch={activeBranch}
        setActiveBranch={setActiveBranch}
        clinicImage={chemburClinic}
        doctorImage={drSaloni}
        doctorName="Dr. Saloni"
        cardContent={
          <>
            <h3 className="text-xl font-bold text-slate-900">
              Dr. Saloni Mehul Babel
            </h3>
            <p className="text-gray-600 mt-2">Family & Cosmetic Dentist</p>

            <button className="mt-4 bg-[#00A8E8] text-white px-4 py-2 rounded-lg">
              Book for Chembur
            </button>
          </>
        }
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export default function HeroSection({
  onOpenBookingModal,
  onOpenWhatsAppModal,
  onViewServices,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden text-white bg-slate-900"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primary} 0%, #003F6B 100%)`,
      }}
    >
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00A8E8]/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <HeroText
            onOpenWhatsAppModal={onOpenWhatsAppModal}
            onViewServices={onViewServices}
          />
          <div className="lg:col-span-5">
            <ClinicShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
