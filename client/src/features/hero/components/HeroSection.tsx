"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { COLORS } from "@/src/features/shared/constants/colors";
import {
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
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
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full"
    >
      <button
        onClick={onOpenWhatsAppModal}
        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-inter font-bold text-base text-white shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <Phone size={20} weight="bold" />
        <span>Book for Chembur</span>
      </button>

      <button
        onClick={onViewServices}
        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-inter font-bold text-base text-white border-2 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
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
      className="flex flex-wrap gap-4 sm:gap-6 pt-6 border-t border-white/10 mt-4"
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
    <div className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6 text-left">
      <TrustBadge />

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight"
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
// Magnetic mini-button — small GSAP touch on the panel CTA (desktop only)
// ---------------------------------------------------------------------------
function MagneticButton({
  children,
  className,
  style,
  enabled = true,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  enabled?: boolean;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = btnRef.current;
    if (!el || !enabled) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      xTo(relX * 0.25);
      yTo(relY * 0.35);
    };
    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled]);

  return (
    <button ref={btnRef} className={className} style={style}>
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Shared card content (used by both desktop hover panel + mobile static card)
// ---------------------------------------------------------------------------
function ClinicCardBody({
  doctorName,
  specialty,
  rating,
  ctaLabel,
  magnetic = true,
}: {
  doctorName: string;
  specialty: string;
  rating: string;
  ctaLabel: string;
  magnetic?: boolean;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6 lg:p-7 flex flex-col items-start text-left">
      <StarRow />
      <span className="text-xs text-white/70 font-inter mt-1 mb-2">
        {rating}
      </span>

      <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-white leading-tight">
        {doctorName}
      </h3>
      <p className="text-xs sm:text-sm text-blue-100/90 font-inter mt-1 mb-3 sm:mb-4">
        {specialty}
      </p>

      <MagneticButton
        enabled={magnetic}
        className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-inter font-bold text-xs sm:text-sm text-white shadow-lg cursor-pointer"
        style={{ backgroundColor: COLORS.secondary }}
      >
        <Phone size={16} weight="bold" />
        <span>{ctaLabel}</span>
        <ArrowRight size={14} weight="bold" />
      </MagneticButton>
    </div>
  );
}

function LocationBadge({ label, visible }: { label: string; visible: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/25"
    >
      <MapPin size={14} weight="fill" className="text-[#00A8E8]" />
      <span className="text-xs font-semibold font-inter text-white whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Desktop: hover-expandable clinic panel (Mankhurd <-> Chembur)
// ---------------------------------------------------------------------------
interface ClinicPanelProps {
  side: "left" | "right";
  branch: Branch;
  activeBranch: Branch;
  setActiveBranch: (branch: Branch) => void;
  clinicImage: string;
  doctorImage: string;
  doctorName: string;
  specialty: string;
  locationLabel: string;
  rating: string;
  ctaLabel: string;
}

function ClinicPanel({
  side,
  branch,
  activeBranch,
  setActiveBranch,
  clinicImage,
  doctorImage,
  doctorName,
  specialty,
  locationLabel,
  rating,
  ctaLabel,
}: ClinicPanelProps) {
  const isActive = activeBranch === branch;
  const otherActive = activeBranch !== null && activeBranch !== branch;
  const doctorShiftDirection = side === "left" ? 1 : -1;


  return (
    <motion.div
      onHoverStart={() => setActiveBranch(branch)}
      onHoverEnd={() => setActiveBranch(null)}
      className={`absolute ${side === "left" ? "left-0" : "right-0"} top-0 h-full overflow-hidden rounded-3xl`}
      style={{
        border: isActive
          ? `1.5px solid ${COLORS.secondary}66`
          : "1.5px solid transparent",
        width: isActive ? "100%" : "calc(50% - 6px)",
      }}
      animate={{
        opacity: otherActive ? 0 : 1,
      }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background clinic image */}
      <motion.img
        src={clinicImage}
        alt={`${doctorName} clinic`}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          filter: isActive ? "blur(0px) brightness(0.95)" : "blur(6px) brightness(0.7)",
          scale: isActive ? 1.03 : 1.1,
        }}
        transition={{
          duration: 1.15,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      <LocationBadge label={locationLabel} visible={isActive || activeBranch === null} />

      {/* Doctor image */}
      <motion.img
        src={doctorImage}
        alt={doctorName}
        animate={{
          scale: isActive ? 1.05 : 0.92,
          x: isActive ? 0 : 40 * doctorShiftDirection,
          filter: isActive
            ? "drop-shadow(0 20px 25px rgba(0,0,0,0.45))"
            : "drop-shadow(0 10px 15px rgba(0,0,0,0.3))",
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`absolute bottom-0 ${side === "left" ? "right-6" : "left-6"} h-[85%] object-contain z-10`}
      />

      {/* Bottom-up gradient — replaces the old white card */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,10,20,0.95) 0%, rgba(0,10,20,0.65) 35%, rgba(0,10,20,0.1) 75%, transparent 100%)",
        }}
      />

      <ClinicCardBody
        doctorName={doctorName}
        specialty={specialty}
        rating={rating}
        ctaLabel={ctaLabel}
      />
    </motion.div>
  );
}

function DesktopClinicShowcase() {
  const [activeBranch, setActiveBranch] = useState<Branch>(null);

  return (
    <div className="relative h-[560px] xl:h-[620px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
      <ClinicPanel
        side="left"
        branch="mankhurd"
        activeBranch={activeBranch}
        setActiveBranch={setActiveBranch}
        clinicImage={mankhurdClinic}
        doctorImage={drMehul}
        doctorName="Dr. Mehul Hasti Babel"
        specialty="Cosmetic Dentist & Implantologist"
        locationLabel="Mankhurd Branch"
        rating="4.9 (1,500+ reviews)"
        ctaLabel="Book for Mankhurd"
      />
      <ClinicPanel
        side="right"
        branch="chembur"
        activeBranch={activeBranch}
        setActiveBranch={setActiveBranch}
        clinicImage={chemburClinic}
        doctorImage={drSaloni}
        doctorName="Dr. Saloni Mehul Babel"
        specialty="Family & Cosmetic Dentist"
        locationLabel="Chembur Branch"
        rating="4.9 (800+ reviews)"
        ctaLabel="Book for Chembur"
      />

      {/* Center divider hint — shown only when nothing is hovered */}
      <motion.div
        initial={false}
        animate={{ opacity: activeBranch === null ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
      >
        <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
          <span className="text-white text-xs font-bold font-inter">VS</span>
        </div>
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile / tablet: static stacked cards (no hover dependency)
// ---------------------------------------------------------------------------
function MobileClinicCard({
  clinicImage,
  doctorImage,
  doctorName,
  specialty,
  locationLabel,
  rating,
  ctaLabel,
}: {
  clinicImage: string;
  doctorImage: string;
  doctorName: string;
  specialty: string;
  locationLabel: string;
  rating: string;
  ctaLabel: string;
}) {
  return (
    <div className="relative w-full h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl shadow-black/30">
      <img
        src={clinicImage}
        alt={`${doctorName} clinic`}
        className="absolute inset-0 w-full h-full object-cover brightness-90"
      />
      <LocationBadge label={locationLabel} visible={true} />
      <img
        src={doctorImage}
        alt={doctorName}
        className="absolute bottom-0 right-4 h-[80%] object-contain z-10"
        style={{ filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.4))" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,10,20,0.95) 0%, rgba(0,10,20,0.65) 35%, rgba(0,10,20,0.1) 75%, transparent 100%)",
        }}
      />
      <ClinicCardBody
        doctorName={doctorName}
        specialty={specialty}
        rating={rating}
        ctaLabel={ctaLabel}
        magnetic={false}
      />
    </div>
  );
}

function MobileClinicShowcase() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <MobileClinicCard
        clinicImage={mankhurdClinic}
        doctorImage={drMehul}
        doctorName="Dr. Mehul Hasti Babel"
        specialty="Cosmetic Dentist & Implantologist"
        locationLabel="Mankhurd Branch"
        rating="4.9 (1,500+ reviews)"
        ctaLabel="Book for Mankhurd"
      />
      <MobileClinicCard
        clinicImage={chemburClinic}
        doctorImage={drSaloni}
        doctorName="Dr. Saloni Mehul Babel"
        specialty="Family & Cosmetic Dentist"
        locationLabel="Chembur Branch"
        rating="4.9 (800+ reviews)"
        ctaLabel="Book for Chembur"
      />
    </div>
  );
}

function ClinicShowcase() {
  return (
    <>
      {/* lg and up: hover-split desktop version */}
      <div className="hidden lg:block">
        <DesktopClinicShowcase />
      </div>
      {/* below lg: stacked static cards, touch-friendly */}
      <div className="lg:hidden">
        <MobileClinicShowcase />
      </div>
    </>
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
      className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden text-white bg-slate-900"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primary} 0%, #003F6B 100%)`,
      }}
    >
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00A8E8]/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          <HeroText
            onOpenWhatsAppModal={onOpenWhatsAppModal}
            onViewServices={onViewServices}
          />
          <div className="lg:col-span-6 w-full">
            <ClinicShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}