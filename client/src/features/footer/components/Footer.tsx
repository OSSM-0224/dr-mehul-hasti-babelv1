"use client"

import React from "react";
import { COLORS } from "@/src/features/shared/constants/colors";
import { FacebookLogo, InstagramLogo, YoutubeLogo, TwitterLogo, Shield, Trophy, ArrowUpRight, MapPin, Phone, Clock } from "@phosphor-icons/react";
import { branchesConfig } from "@/src/config/branches";
import DualBranchMap from "./DualBranchMap";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToHeader = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  const treatmentLinks = [
    { label: "Laser Root Canal", id: "treatment-card-1" },
    { label: "Robotic Dental Implants", id: "treatment-card-2" },
    { label: "Single Day CAD-CAM Dentistry", id: "treatment-card-3" },
    { label: "Painless Kid's Dentistry", id: "treatment-card-4" },
    { label: "Clear Aligners", id: "treatment-card-5" },
    { label: "Smile Design Veneers", id: "treatment-card-6" },
    { label: "Wisdom Tooth Surgery", id: "treatment-card-7" },
    { label: "BPS Premium Dentures", id: "treatment-card-10" }
  ];

  const techLinks = [
    { label: "In-house CAD-CAM Milling" },
    { label: "High-Resolution Microscopes" },
    { label: "3Shape 3D Scanner" },
    { label: "Low-Dose CBCT 3D X-Rays" },
    { label: "Dental Lasers" },
    { label: "Guided Surgical Navigation" }
  ];

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 font-inter text-sm pt-16 border-t border-slate-800">

      {/* 5-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Column 1: Brand (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleScrollToHeader}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-playfair font-bold text-lg shadow-md"
                style={{ backgroundColor: COLORS.primary }}
              >
                U
              </div>
              <div>
                <span className="font-playfair font-bold text-xl tracking-tight text-white block">
                  Unique Dental Care
                </span>
                <span className="block text-[9px] uppercase font-bold tracking-wider text-[#00A8E8]">
                  Laser & Cosmetic Dentistry
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Unique Dental Care is a premier cosmetic clinic led by Dr. Mehul Hasti Babel. We provide luxury veneers, advanced smile design, painless root canals, and computer-guided implants in Mankhurd & Chembur, Mumbai.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-[#00A8E8] hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Facebook"
              >
                <FacebookLogo size={18} className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-[#00A8E8] hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} className="text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-[#00A8E8] hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                aria-label="YouTube"
              >
                <YoutubeLogo size={18} className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-[#00A8E8] hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Twitter"
              >
                <TwitterLogo size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "Home", id: "home" },
                { label: "About Clinic", id: "about" },
                { label: "Clinical Team", id: "team" },
                { label: "Treatments", id: "treatments" },
                { label: "Contact Us", id: "contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollToSection(link.id)}
                    className="hover:text-[#00A8E8] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {treatmentLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollToSection("treatments")}
                    className="hover:text-[#00A8E8] transition-colors text-left flex items-center justify-between group cursor-pointer"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technologies (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Technologies
            </h4>
            <ul className="space-y-2.5 text-xs">
              {techLinks.map((link, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E8] shrink-0" />
                  <span>{link.label}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Redesigned Contact & Locations Section: Dual Columns with gold divider & interactive dual-pin map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Block: Two Branch columns (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <h4 className="font-playfair font-bold text-lg text-white uppercase tracking-wider mb-2">
                Our Physical Branches
              </h4>
              <p className="text-xs text-slate-400 mb-6 max-w-md">
                Walk in or schedule an appointment at either of our premium multi-specialty clinical centers in Mumbai.
              </p>

              {/* Dual columns for Chembur & Mankhurd side-by-side on md+, stacked on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

                {/* Chembur Column */}
                <div className="space-y-4 text-left pr-2">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#005B96]" />
                    <h5 className="font-playfair font-bold text-sm text-slate-100 uppercase tracking-wide">
                      Chembur Branch
                    </h5>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#005B96] mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Shop No. 2, Ground Floor, Sai Dwar Building, Opposite Fine Arts Society, RC Marg, Chembur, Mumbai 400071
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#005B96] shrink-0" />
                    <a href="tel:+919833622444" className="text-xs text-slate-300 font-bold hover:text-[#005B96] transition-colors">
                      +91 98336 22444
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#005B96] mt-0.5 shrink-0" />
                    <div className="text-xs text-slate-400 space-y-0.5 font-medium">
                      <span className="block text-slate-300 font-bold">Mon - Sat: 10:00 AM - 9:00 PM</span>
                      <span className="block text-slate-500">Sunday: By Appointment</span>
                    </div>
                  </div>
                </div>

                {/* Subtle vertical gold divider between the two branch columns on md+ screens */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#894600] opacity-60 -translate-x-1/2" />

                {/* Mankhurd Column */}
                <div className="space-y-4 text-left pl-2">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#894600]" />
                    <h5 className="font-playfair font-bold text-sm text-slate-100 uppercase tracking-wide">
                      Mankhurd Branch
                    </h5>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#894600] mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Shop No. 5, Crystal Plaza, Near Mankhurd Railway Station, Mankhurd East, Mumbai 400088
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#894600] shrink-0" />
                    <a href="tel:+919833622444" className="text-xs text-slate-300 font-bold hover:text-[#894600] transition-colors">
                      +91 98336 22444
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#894600] mt-0.5 shrink-0" />
                    <div className="text-xs text-slate-400 space-y-0.5 font-medium">
                      <span className="block text-slate-300 font-bold">Mon - Sat: 10:00 AM - 9:00 PM</span>
                      <span className="block text-slate-500">Sunday: Closed</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs text-slate-400">
                Email: <a href="mailto:care@uniquedentalcare.in" className="hover:text-[#005B96] text-slate-200 transition-colors font-semibold">care@uniquedentalcare.in</a>
              </span>
              <div className="flex gap-2">
                <a href={branchesConfig[0].directionsUrl} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-[11px] transition-colors flex items-center gap-1 border border-slate-700/50">
                  Chembur Map
                </a>
                <a href={branchesConfig[1].directionsUrl} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-[11px] transition-colors flex items-center gap-1 border border-slate-700/50">
                  Mankhurd Map
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Single Google Map with TWO pins (6 cols on lg) */}
          <div className="lg:col-span-6 min-h-[300px] lg:min-h-full">
            <DualBranchMap />
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between text-xs font-inter space-y-4 md:space-y-0">

        {/* Left: Copyright */}
        <p className="text-slate-500">
          © {currentYear} Unique Dental Care. All rights reserved. Luxury Dentistry & Advanced Cosmetic Procedures.
        </p>

        {/* Center: Quick certifications */}
        <div className="flex items-center gap-4 text-slate-500">
          <span className="flex items-center gap-1">
            <Shield size={14} className="text-emerald-500" />
            <span>ISO 9001 Certified</span>
          </span>
          <span className="flex items-center gap-1">
            <Trophy size={14} className="text-[#00A8E8]" />
            <span>Biofunctional BPS Accredited</span>
          </span>
        </div>

        {/* Right: Policy Links */}
        <div className="flex gap-6 text-slate-500">
          <a href="#privacy" className="hover:text-[#00A8E8] transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#00A8E8] transition-colors">Terms of Service</a>
          <button onClick={handleScrollToHeader} className="hover:text-[#00A8E8] font-bold flex items-center gap-0.5 cursor-pointer">
            <span>Back to Top</span>
            <ArrowUpRight size={12} weight="bold" />
          </button>
        </div>

      </div>

    </footer>
  );
}
