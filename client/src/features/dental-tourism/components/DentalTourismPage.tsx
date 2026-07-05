"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X,
  Globe,
  Plane,
  ShieldCheck,
  DollarSign,
  Sparkles,
  Compass,
  MapPin,
  HeartHandshake,
  FileText,
  Calendar,
  CheckCircle,
  Phone,
  HelpCircle,
  Eye,
  Camera,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sofa,
  Smile,
  Plus,
  Minus,
} from "lucide-react";
import { COLORS } from "@/src/features/shared/constants/colors";
import { useApp } from "@/src/hooks/index.js";
import BranchSelector from "./BranchSelector.jsx";
import { dentalTourismContent } from "@/src/config/dentalTourismContent.js";

interface DentalTourismPageProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: (treatmentId?: number) => void;
  onOpenWhatsAppModal: () => void;
}

interface ImageSlot {
  id: number;
  filename: string;
  title: string;
  description: string;
  category: string;
  fallbackIcon: React.ReactNode;
}

export default function DentalTourismPage({
  isOpen,
  onClose,
  onOpenBookingModal,
  onOpenWhatsAppModal,
}: DentalTourismPageProps) {
  const { selectedBranch } = useApp();
  const currentBranchContent =
    dentalTourismContent[selectedBranch] || dentalTourismContent.chembur;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Reset states on close
  useEffect(() => {
    if (!isOpen) {
      setExpandedFaqIndex(null);
      setLightboxIndex(null);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Sync URL query param when branch is selected on Dental Tourism page
  useEffect(() => {
    if (isOpen) {
      const url = new URL(window.location.href);
      url.pathname = "/dental-tourism";
      url.searchParams.set("branch", selectedBranch);
      window.history.pushState(null, "", url.pathname + url.search);
    }
  }, [isOpen, selectedBranch]);

  if (!isOpen) return null;

  const getFallbackIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Sparkles className="w-6 h-6 text-[#894600]" />;
      case 2:
        return <CheckCircle className="w-6 h-6 text-[#894600]" />;
      case 3:
        return <ShieldCheck className="w-6 h-6 text-[#894600]" />;
      case 4:
        return <Layers className="w-6 h-6 text-[#894600]" />;
      case 5:
        return <Sofa className="w-6 h-6 text-[#894600]" />;
      case 6:
        return <Smile className="w-6 h-6 text-[#894600]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#894600]" />;
    }
  };

  // 6 Custom Clinic Image slots dynamically created from config
  const imageSlots: ImageSlot[] = currentBranchContent.gallery.map((g) => ({
    id: g.id,
    filename: g.filename,
    title: g.title,
    description: g.description,
    category: g.category,
    fallbackIcon: getFallbackIcon(g.id),
  }));

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null && prev > 0 ? prev - 1 : imageSlots.length - 1,
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null && prev < imageSlots.length - 1 ? prev + 1 : 0,
      );
    }
  };

  const heroImage = currentBranchContent.gallery[0]?.filename || "/uniquedental1.png";

  const faqs = [
    {
      question: "How much can I realistically save on dental care in Mumbai?",
      answer:
        "International patients routinely save between 60% and 75% on advanced procedures like computer-guided dental implants, digital smile makeovers, and full-mouth rehabilitations compared to Western Europe, North America, Australia, or the Middle East. This includes the cost of luxury flights and boutique accommodations.",
    },
    {
      question: "How long should I plan to stay in Mumbai for my treatment?",
      answer:
        "Depending on your bespoke treatment plan, trips average between 5 and 9 days. For example, handcrafted porcelain veneers or single-visit implants require 3 to 5 days, while complex full-mouth clinical makeovers may require up to 8 or 10 days to ensure absolute bite alignment, physical testing, and ultimate precision.",
    },
    {
      question: "Are the clinical materials used of international standard?",
      answer:
        "We employ the exact same high-caliber, FDA and CE-cleared materials used in premium practices globally. Our dental implants are sourced from Switzerland (Straumann) and Germany, while our porcelain veneers are masterfully crafted from premium Ivoclar E.Max ceramic blocks. Each restoration is accompanied by a genuine digital warranty certificate.",
    },
    {
      question: `Is the suburb of ${currentBranchContent.branchName} secure and easy to access?`,
      answer:
        currentBranchContent.branchId === "chembur"
          ? "Chembur is one of Mumbai's most affluent, serene, and tree-lined residential-commercial suburbs. It offers a tranquil escape from the high-density city center while remaining exceptionally well-connected—just a brief drive from the international airport. It hosts highly secure, luxury boutique hotels and elegant dining experiences."
          : "Mankhurd is an active, modernizing clinical hub with direct transit access across the Eastern Express Highway and suburban rail links. It is surrounded by dynamic retail hubs, corporate business hotels, and state-of-the-art diagnostic imaging complexes.",
    },
    {
      question: "How are post-treatment follow-ups and aftercare managed?",
      answer: `We believe care is eternal. Upon returning home, you will enter our digital tele-dentistry follow-up protocol. ${currentBranchContent.doctorShortName} and our clinical coordinators conduct scheduled review sessions via secure video calls. We provide complete electronic records, high-resolution pre/post radiographs, and treatment summaries to share with your local physician if desired.`,
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#faf9f6] overflow-y-auto"
    >
      {/* 1. CINEMATIC HERO SECTION (Quiet Luxury Editorial Cover) */}
      <div className="relative h-[90vh] w-full overflow-hidden flex items-end">
        {/* Parallax / Ken Burns background image */}
        <motion.div
          initial={{ scale: prefersReducedMotion ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={heroImage}
            alt="Unique Dental Care Luxury Suite"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Muted luxury slate-blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30" />
        </motion.div>

        {/* Minimal Float Close Button */}
        <button
          onClick={onClose}
          className="fixed top-8 right-8 z-50 p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-slate-950 transition-all duration-500 cursor-pointer shadow-lg group"
          aria-label="Return to Main"
        >
          <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
        </button>

        {/* Editorial Text Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 md:pb-24 w-full text-left">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-semibold tracking-widest uppercase text-slate-200"
            >
              <Globe className="w-3.5 h-3.5 text-[#00A8E8]" />
              Bespoke Dental Expeditions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-playfair font-normal text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none"
            >
              Quiet Luxury, <br />
              <span className="italic font-light text-slate-300">
                Flawless Artistry
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-inter text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light"
            >
              Welcome to clinical perfection without boundaries. Combine
              Mumbai’s premier boutique dental expertise with luxury private
              concierge assistance. Save up to 70% on elite-tier dental
              cosmetics and surgical implants.
            </motion.p>
          </div>
        </div>

        {/* Floating bottom scroll indicator line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/15" />
      </div>

      {/* Branch Selector Toggle Tab */}
      <BranchSelector />

      {/* 2. WHY CHOOSE DENTAL TOURISM (Editorial Split Layout) */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] text-slate-900 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Quiet luxury copy */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <span className="block text-xs uppercase tracking-widest font-bold text-[#894600] font-inter">
                THE EDITORIAL ESSAY
              </span>
              <h2 className="font-playfair font-normal text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight">
                An Uncompromised Path <br />
                <span className="italic font-light text-slate-500">
                  to Premium Dental Wellness
                </span>
              </h2>

              <div className="w-20 h-[1px] bg-[#894600]/30" />

              <div className="space-y-6 font-inter text-slate-600 text-sm md:text-base leading-relaxed font-light">
                <p>{currentBranchContent.executiveSummaryText}</p>
                <p>
                  We have carefully bypassed the corporate, mass-volume
                  healthcare approach. Our clinic functions as a private smile
                  studio, taking on a limited registry of patients to devote
                  extensive architectural pre-planning to every single dental
                  crown, veneer, and implant fixture.
                </p>
                <p>
                  By utilizing our advanced in-house diagnostic technology, we
                  expedite treatment timelines safely. Your clinical visits are
                  spaced seamlessly, leaving you ample time to relax in the
                  leafiest, most peaceful upscale neighborhoods of Mumbai.
                </p>
              </div>
            </div>

            {/* Right Column: Large Stat Numbers Layout */}
            <div className="lg:col-span-6 space-y-12 lg:pl-12 border-l border-gray-200/60 text-left">
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-playfair font-light text-6xl sm:text-8xl tracking-tighter text-[#005B96] leading-none">
                    75%
                  </span>
                  <span className="font-playfair text-xl italic text-slate-500">
                    Savings
                  </span>
                </div>
                <h4 className="font-playfair font-bold text-lg text-slate-900">
                  Unmatched Economic Alignment
                </h4>
                <p className="font-inter text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                  Enjoy custom luxury treatment sessions at a fraction of
                  Western fees, fully retaining elite FDA-cleared European
                  materials and microscopic precision.
                </p>
              </div>

              <div className="h-[1px] bg-[#894600]/10" />

              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-playfair font-light text-6xl sm:text-8xl tracking-tighter text-[#005B96] leading-none">
                    100%
                  </span>
                  <span className="font-playfair text-xl italic text-slate-500">
                    Certified
                  </span>
                </div>
                <h4 className="font-playfair font-bold text-lg text-slate-900">
                  Elite Swiss & German Materials
                </h4>
                <p className="font-inter text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                  No mock generic solutions. We partner directly with premium
                  European suppliers. Every crown and titanium fixture carries
                  an official material certificate.
                </p>
              </div>

              <div className="h-[1px] bg-[#894600]/10" />

              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-playfair font-light text-6xl sm:text-8xl tracking-tighter text-[#005B96] leading-none">
                    MDS
                  </span>
                  <span className="font-playfair text-xl italic text-slate-500">
                    Only
                  </span>
                </div>
                <h4 className="font-playfair font-bold text-lg text-slate-900">
                  Master Clinical Specialists
                </h4>
                <p className="font-inter text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                  Your team consists exclusively of academic master clinicians
                  holding post-graduate degrees, ensuring exceptional clinical
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TREATMENT CAPABILITIES LIST (Elegant Minimal Index) */}
      <section className="py-24 md:py-32 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-16 text-left">
            <span className="block text-xs uppercase tracking-widest font-bold text-[#894600] font-inter">
              CLINICAL MATRIX
            </span>
            <h2 className="font-playfair font-normal text-3xl sm:text-5xl tracking-tight text-slate-900">
              Expedited Luxury Solutions
            </h2>
            <p className="font-inter text-slate-500 text-sm md:text-base font-light leading-relaxed">
              We specialize in compressing comprehensive multi-visit clinical
              protocols into fast-tracked, highly coordinated single-trip plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left">
            <div className="border-t border-[#894600]/20 pt-6 space-y-3 group">
              <span className="block font-playfair font-light text-xs uppercase tracking-widest text-[#894600]">
                01 / IMPLANTOLOGY
              </span>
              <h3 className="font-playfair font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#005B96] transition-colors">
                Computer-Guided Dental Implants
              </h3>
              <p className="font-inter text-slate-500 text-sm leading-relaxed font-light">
                Utilizing state-of-the-art 3D bone mapping diagnostics, we map
                the exact orientation of each implant to execute painless
                keyhole installations with rapid recovery periods.
              </p>
            </div>

            <div className="border-t border-[#894600]/20 pt-6 space-y-3 group">
              <span className="block font-playfair font-light text-xs uppercase tracking-widest text-[#894600]">
                02 / COSMETICS
              </span>
              <h3 className="font-playfair font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#005B96] transition-colors">
                Digital Smile Design & Veneers
              </h3>
              <p className="font-inter text-slate-500 text-sm leading-relaxed font-light">
                Handcrafted porcelain veneers modeled live with digital mockups.
                Preview your aesthetic profile, bite structure, and customized
                tone mapping prior to veneer application.
              </p>
            </div>

            <div className="border-t border-[#894600]/20 pt-6 space-y-3 group">
              <span className="block font-playfair font-light text-xs uppercase tracking-widest text-[#894600]">
                03 / RECONSTRUCTION
              </span>
              <h3 className="font-playfair font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#005B96] transition-colors">
                Full-Mouth Clinical Rehabilitation
              </h3>
              <p className="font-inter text-slate-500 text-sm leading-relaxed font-light">
                Reconstruct worn teeth, align your bite, and support your facial
                drape with microscopic crowns, custom implant bridges, and
                bio-compatible support design.
              </p>
            </div>

            <div className="border-t border-[#894600]/20 pt-6 space-y-3 group">
              <span className="block font-playfair font-light text-xs uppercase tracking-widest text-[#894600]">
                04 / ENDODONTICS
              </span>
              <h3 className="font-playfair font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#005B96] transition-colors">
                Microscopic Single-Sitting Root Canals
              </h3>
              <p className="font-inter text-slate-500 text-sm leading-relaxed font-light">
                Endodontic treatments resolved with advanced surgical
                microscopes and rotary tools, ensuring complete diagnostic
                precision and pain-free execution in a single hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3-PHASE TIMELINE (Vertical Editorial Index) */}
      <section className="py-24 md:py-32 bg-[#005B96] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A8E8]/10 rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4 mb-20 text-left">
            <span className="block text-xs uppercase tracking-widest font-bold text-slate-300 font-inter">
              THE JOURNEY ARCHITECTURE
            </span>
            <h2 className="font-playfair font-normal text-3xl sm:text-5xl tracking-tight text-white">
              The Three-Phase Treatment Timeline
            </h2>
            <p className="font-inter text-slate-200 text-sm md:text-base font-light leading-relaxed">
              Every detail is meticulously planned across three key phases,
              establishing smooth communication before you arrive and continuous
              support after you return.
            </p>
          </div>

          {/* Vertical Timeline container */}
          <div className="relative max-w-4xl mx-auto text-left">
            {/* Elegant vertical connecting track */}
            <div className="absolute left-6 md:left-12 top-2 bottom-2 w-[1px] bg-white/20" />

            {/* Timeline Segment 1 */}
            <div className="relative pl-16 md:pl-32 pb-20 group">
              <span className="absolute left-3 md:left-9 top-0 w-7 h-7 rounded-full bg-[#005B96] border border-white/40 flex items-center justify-center z-10 transition-colors group-hover:border-[#00A8E8]">
                <span className="w-2.5 h-2.5 rounded-full bg-white transition-transform group-hover:scale-110" />
              </span>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2">
                  <span className="font-playfair font-light text-6xl md:text-7xl text-white/15 leading-none block select-none">
                    01
                  </span>
                </div>
                <div className="md:col-span-10 space-y-3">
                  <span className="block text-xs uppercase tracking-widest text-[#00A8E8] font-bold">
                    PHASE ONE • INITIAL CORRESPONDENCE
                  </span>
                  <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white">
                    The Virtual Diagnostic Canvas
                  </h3>
                  <p className="font-inter text-slate-200 text-sm leading-relaxed font-light">
                    {currentBranchContent.phase1ConsultDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Segment 2 */}
            <div className="relative pl-16 md:pl-32 pb-20 group">
              <span className="absolute left-3 md:left-9 top-0 w-7 h-7 rounded-full bg-[#005B96] border border-white/40 flex items-center justify-center z-10 transition-colors group-hover:border-[#00A8E8]">
                <span className="w-2.5 h-2.5 rounded-full bg-white transition-transform group-hover:scale-110" />
              </span>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2">
                  <span className="font-playfair font-light text-6xl md:text-7xl text-white/15 leading-none block select-none">
                    02
                  </span>
                </div>
                <div className="md:col-span-10 space-y-3">
                  <span className="block text-xs uppercase tracking-widest text-[#00A8E8] font-bold">
                    PHASE TWO • CLINICAL RESIDENCE
                  </span>
                  <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white">
                    The Fast-Track In-Clinic Care
                  </h3>
                  <p className="font-inter text-slate-200 text-sm leading-relaxed font-light">
                    Arrive in Mumbai and settle in. At our state-of-the-art
                    clinic in {currentBranchContent.branchName}, we carry out
                    precise diagnostic scans and execute your procedures with
                    uncompromised precision. Our digital in-house CAD/CAM
                    partnerships allow us to finish crown and veneer milling in
                    record time.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Segment 3 */}
            <div className="relative pl-16 md:pl-32 group">
              <span className="absolute left-3 md:left-9 top-0 w-7 h-7 rounded-full bg-[#005B96] border border-white/40 flex items-center justify-center z-10 transition-colors group-hover:border-[#00A8E8]">
                <span className="w-2.5 h-2.5 rounded-full bg-white transition-transform group-hover:scale-110" />
              </span>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2">
                  <span className="font-playfair font-light text-6xl md:text-7xl text-white/15 leading-none block select-none">
                    03
                  </span>
                </div>
                <div className="md:col-span-10 space-y-3">
                  <span className="block text-xs uppercase tracking-widest text-[#00A8E8] font-bold">
                    PHASE THREE • LIFELONG ASSURANCE
                  </span>
                  <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white">
                    Eternal Aftercare & Warranty
                  </h3>
                  <p className="font-inter text-slate-200 text-sm leading-relaxed font-light">
                    Walk away with your flawless new smile and an official
                    digital materials warranty certificate. Once back in your
                    home country, we conduct regular post-op check-ins via video
                    call to support your long-term comfort and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACCOMMODATION & CONCIERGE (Magazine Style Image-Text Split) */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] text-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side: Premium image box */}
            <div className="lg:col-span-6 relative group overflow-hidden rounded-3xl aspect-[4/3] shadow-lg">
              <img
                src="/uniquedental1.png"
                alt={`Elite ${currentBranchContent.branchName} lounge`}
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Gold border frame */}
              <div className="absolute inset-4 border border-[#894600]/15 pointer-events-none rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md p-6 rounded-xl text-left border border-white/10">
                <span className="text-[10px] tracking-widest text-[#00A8E8] uppercase font-bold block mb-1">
                  {currentBranchContent.conciergeLocationText}
                </span>
                <p className="text-white text-xs font-inter font-light leading-relaxed">
                  {currentBranchContent.conciergeDescription}
                </p>
              </div>
            </div>

            {/* Right side: Magazine copy */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <span className="block text-xs uppercase tracking-widest font-bold text-[#894600] font-inter">
                LIFESTYLE & LOGISTICS
              </span>
              <h2 className="font-playfair font-normal text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight">
                An Absolute Seamless <br />
                <span className="italic font-light text-slate-500">
                  Concierge Residency
                </span>
              </h2>

              <p className="font-inter text-slate-600 text-sm md:text-base leading-relaxed font-light">
                We believe your physical restoration should be accompanied by
                complete tranquility. From the split second you touch down in
                Mumbai, our dedicated concierge team orchestrates your
                logistics.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#894600]/20 flex items-center justify-center shrink-0 text-[#894600] bg-white">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-slate-900 text-base">
                      Private Airport Transfers
                    </h4>
                    <p className="font-inter text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                      A designated clinical coordinator greets you at Mumbai
                      International Airport (BOM) with a private luxury car to
                      bring you to your hotel or directly to the clinic.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-[#894600]/20 flex items-center justify-center shrink-0 text-[#894600] bg-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-slate-900 text-base">
                      Boutique Hotel Partnerships
                    </h4>
                    <p className="font-inter text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                      {currentBranchContent.conciergeHotelDetails}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 6-SLOT GALLERY (Asymmetric Bento Grid with Gold Hover & Lightbox) */}
      <section className="py-24 md:py-32 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#894600] font-inter">
              <Camera className="w-4 h-4" />
              THE SENSORY DECOR
            </span>
            <h2 className="font-playfair font-normal text-3xl sm:text-5xl text-slate-900">
              Pristine Clinical Sanctum
            </h2>
            <p className="font-inter text-slate-500 text-sm md:text-base font-light">
              Explore the clean architectural spaces of our{" "}
              {currentBranchContent.branchName} lounge, built with your safety
              and mental calm as our absolute priority.
            </p>
          </div>

          {/* Asymmetric Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
            {imageSlots.map((slot, index) => {
              const hasError = imageErrors[slot.id];
              // Grid span rules
              const isHero = index === 0;
              const gridSpanClass = isHero
                ? "md:col-span-2 md:row-span-2 h-full"
                : "md:col-span-1 h-full";

              return (
                <motion.div
                  key={slot.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer select-none bg-slate-950 flex flex-col justify-end text-left ${gridSpanClass}`}
                >
                  {!hasError ? (
                    <>
                      <img
                        src={slot.filename}
                        alt={slot.title}
                        onError={() => handleImageError(slot.id)}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      {/* Quiet vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10 opacity-90 transition-opacity group-hover:opacity-100" />
                    </>
                  ) : (
                    /* Elegant Editorial Fallback when image files are not loaded */
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col justify-between p-6 z-10 border border-slate-850">
                      <div className="flex justify-between items-start">
                        <div className="p-3 rounded-full bg-slate-900 border border-slate-800">
                          {slot.fallbackIcon}
                        </div>
                        <span className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-[#894600]/10 text-[#894600] border border-[#894600]/20">
                          Slot 0{slot.id}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                          {slot.category}
                        </span>
                        <h4 className="font-playfair font-bold text-white text-base leading-snug line-clamp-1">
                          {slot.title}
                        </h4>
                        <p className="font-inter text-slate-400 text-xs leading-relaxed line-clamp-2">
                          {slot.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Caption & Gold underline Hover effect */}
                  {!hasError && (
                    <div className="relative z-20 p-6 space-y-2">
                      <span className="inline-block text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 bg-[#894600] text-white rounded">
                        {slot.category}
                      </span>
                      <h4 className="font-playfair font-bold text-white text-lg leading-snug group-hover:text-[#00A8E8] transition-colors duration-300">
                        {slot.title}
                      </h4>
                      <p className="font-inter text-slate-200 text-xs leading-relaxed line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 font-light">
                        {slot.description}
                      </p>

                      {/* Hairline Gold/Accent Underline that draws in */}
                      <div className="w-0 h-[2px] bg-[#894600] transition-all duration-500 group-hover:w-full mt-2" />

                      <div className="pt-1 flex items-center gap-1.5 text-[9px] text-[#00A8E8] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Enlarge Gallery Suite</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION (Minimalist Accordion style) */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] text-slate-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="block text-xs uppercase tracking-widest font-bold text-[#894600] font-inter">
              COMMON INQUIRIES
            </span>
            <h2 className="font-playfair font-normal text-3xl sm:text-5xl text-slate-900">
              The Travel & Dental Intel
            </h2>
            <p className="font-inter text-slate-500 text-sm font-light">
              We focus on absolute clarity, providing answers to clear any
              doubts about scheduling, materials, or local logistics.
            </p>
          </div>

          {/* Minimalist Accordion (no cards, no shadows, thin dividers) */}
          <div className="space-y-0 border-t border-gray-200/80">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-gray-200/80 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-6 flex justify-between items-center text-left focus:outline-none cursor-pointer group"
                  >
                    <span className="font-playfair font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#005B96] transition-colors pr-6">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#894600] p-1">
                      {isExpanded ? (
                        <Minus className="w-5 h-5 transition-transform duration-300 rotate-180" />
                      ) : (
                        <Plus className="w-5 h-5 transition-transform duration-300" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="font-inter text-slate-600 text-sm leading-relaxed pb-6 pr-6 font-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION (Elegant deep-blue horizontal band) */}
      <section
        className="py-16 md:py-24 text-center text-white relative overflow-hidden border-y border-[#894600]/20"
        style={{
          background: `linear-gradient(180deg, #004D80 0%, #002D50 100%)`,
        }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00A8E8]/10 rounded-full blur-3xl -translate-x-12 -translate-y-12 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#894600]/5 rounded-full blur-3xl translate-x-12 translate-y-12 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
          <span className="block text-xs uppercase tracking-widest font-bold text-[#00A8E8] font-inter">
            BEGIN YOUR ESCAPE
          </span>
          <h2 className="font-playfair font-normal text-3xl sm:text-5xl tracking-tight text-white leading-tight">
            Design Your New Smile, <br />
            <span className="italic font-light text-slate-300">
              From Anywhere in the World
            </span>
          </h2>
          <p className="font-inter text-slate-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Coordinate with our elite treatment planners today. Receive a
            transparent virtual mock-up and comprehensive clinical diagnostic
            report free of charge.
          </p>

          {/* Clean horizontally aligned CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-lg mx-auto">
            <button
              onClick={onOpenWhatsAppModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-inter font-bold text-xs uppercase tracking-widest bg-[#25D366] text-white hover:bg-[#20ba59] shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span>WhatsApp Coordinator</span>
            </button>
            <button
              onClick={() => onOpenBookingModal(16)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-inter font-bold text-xs uppercase tracking-widest bg-white text-slate-900 hover:bg-[#FAF9F6] shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Luxury Footer control */}
      <footer className="py-12 bg-slate-950 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-white/10 hover:border-white/30 text-white rounded-lg font-inter font-semibold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer bg-transparent"
          >
            Return to main site
          </button>
          <span className="text-slate-400 font-sans text-[10px] uppercase font-bold tracking-widest">
            Unique Dental Care • {currentBranchContent.branchName}, Mumbai •
            Luxury Cosmetic dentistry
          </span>
        </div>
      </footer>

      {/* FULL SCREEN LIGHTBOX SLIDESHOW COMPONENT */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col justify-between p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Lightbox Header */}
            <div className="flex justify-between items-center p-4 text-white">
              <span className="font-playfair text-sm italic tracking-widest text-[#00A8E8]">
                Suite {lightboxIndex + 1} of {imageSlots.length} •{" "}
                {imageSlots[lightboxIndex].category}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 cursor-pointer border border-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Body Image */}
            <div className="flex-grow flex items-center justify-between gap-4 max-w-6xl mx-auto w-full">
              {/* Previous button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage(e);
                }}
                className="p-4 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all cursor-pointer border border-white/5 shrink-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main Content Area */}
              <div
                className="flex-grow flex flex-col items-center justify-center p-2"
                onClick={(e) => e.stopPropagation()}
              >
                {!imageErrors[imageSlots[lightboxIndex].id] ? (
                  <img
                    src={imageSlots[lightboxIndex].filename}
                    alt={imageSlots[lightboxIndex].title}
                    className="max-h-[60vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/5"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  /* Fallback when image doesn't exist yet */
                  <div className="w-full max-w-lg aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-center items-center p-8 space-y-4 text-center">
                    <div className="p-4 rounded-full bg-slate-800 text-[#00A8E8]">
                      {imageSlots[lightboxIndex].fallbackIcon}
                    </div>
                    <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-widest bg-slate-800/50 px-3 py-1 rounded-full">
                      Slot {imageSlots[lightboxIndex].id} - Pending Upload
                    </span>
                    <h3 className="font-playfair font-bold text-white text-lg">
                      {imageSlots[lightboxIndex].title}
                    </h3>
                    <p className="font-inter text-slate-400 text-xs max-w-sm leading-relaxed font-light">
                      {imageSlots[lightboxIndex].description}
                    </p>
                  </div>
                )}

                {/* Image Details overlay card */}
                <div className="mt-8 p-4 max-w-xl text-center space-y-2">
                  <h4 className="font-playfair font-bold text-white text-xl">
                    {imageSlots[lightboxIndex].title}
                  </h4>
                  <p className="font-inter text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {imageSlots[lightboxIndex].description}
                  </p>
                </div>
              </div>

              {/* Next button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage(e);
                }}
                className="p-4 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all cursor-pointer border border-white/5 shrink-0"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Footer text */}
            <div className="p-4 text-center">
              <span className="text-slate-500 text-[10px] uppercase tracking-widest font-inter">
                Swipe, tap arrows, or click background to exit
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
