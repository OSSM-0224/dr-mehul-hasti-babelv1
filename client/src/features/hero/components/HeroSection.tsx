"use client"

import React from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/src/features/shared/constants/colors";
import { Phone, Calendar, Star, CheckCircle, ArrowRight } from "@phosphor-icons/react";

interface HeroSectionProps {
  onOpenBookingModal: () => void;
  onOpenWhatsAppModal: () => void;
  onViewServices: () => void;
}

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
        background: `linear-gradient(135deg, ${COLORS.primary} 0%, #003F6B 100%)`
      }}
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00A8E8]/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Trust Badge */}
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

            {/* H1 Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight"
            >
              Welcome to <span className="text-secondary text-[#00A8E8]">Unique Dental Care</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-inter text-base sm:text-lg text-blue-100/95 max-w-2xl leading-relaxed"
            >
              Luxury Cosmetic Dentistry by Dr. Mehul Hasti Babel. Experience unparalleled precision, custom-crafted smiles, and patient-centered comfort in Mankhurd, Mumbai.
            </motion.p>

            {/* Bullet points of highlight */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-blue-50/90 font-inter pt-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#00A8E8] shrink-0" />
                <span>Cosmetic Smile Makeover</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#00A8E8] shrink-0" />
                <span>Premium Porcelain Veneers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#00A8E8] shrink-0" />
                <span>Computer-Guided Implants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#00A8E8] shrink-0" />
                <span>Painless Single-Sitting RCT</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
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
                <span>WhatsApp Digital Support</span>
              </button>

              <button
                onClick={onViewServices}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-inter font-bold text-base text-white border-2 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                style={{ borderColor: COLORS.tertiary, backgroundColor: COLORS.tertiary }}
              >
                <span>Our Digital Treatments</span>
                <ArrowRight size={18} weight="bold" />
              </button>
            </motion.div>

            {/* Trust Reviews Indicators */}
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
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} weight="fill" className="text-amber-400" />
                    ))}
                  </div>
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
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} weight="fill" className="text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-blue-100/85 font-semibold font-inter">
                    98% Recommended on Practo (800+)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Team Portrait */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-none"
            >
              <div className="absolute inset-0 bg-[#00A8E8]/20 rounded-2xl blur-2xl transform rotate-6 scale-95" />

              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600&h=450"
                  alt="Dr. Mehul Hasti Babel - Unique Dental Care Lead"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 brightness-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl text-slate-900 shadow-lg flex items-center justify-between border border-white text-left">
                  <div>
                    <h4 className="font-playfair font-bold text-base text-[#005B96]">Dr. Mehul Hasti Babel</h4>
                    <p className="text-xs text-slate-500 font-inter font-medium">MDS • Luxury Dentistry & Cosmetic Procedures</p>
                  </div>
                  <span className="bg-[#00A8E8]/10 text-[#005B96] border border-[#00A8E8]/20 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-inter">
                    Founder
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
