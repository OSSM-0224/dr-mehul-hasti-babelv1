"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Calendar, 
  ChevronLeft, 
  ExternalLink,
  Navigation,
  Sparkles
} from "lucide-react";
import { COLORS } from "@/src/features/shared/constants/colors";
import { branchesConfig, BranchConfig } from "@/src/config/branches";

interface LocationsPageProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: (branchId?: number) => void;
}

export default function LocationsPage({ 
  isOpen, 
  onClose, 
  onOpenBookingModal 
}: LocationsPageProps) {

  // Lock body scroll when locations modal is active
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

  if (!isOpen) return null;

  // LocalBusiness Schema (JSON-LD) for Local SEO injection
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": branchesConfig.map(branch => ({
      "@type": "Dentist",
      "@id": `https://uniquedentalcare.in/#branch-${branch.id}`,
      "name": branch.seoName,
      "image": `https://uniquedentalcare.in${branch.imageUrl}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": branch.address.split(", Mumbai")[0],
        "addressLocality": branch.id === "chembur" ? "Chembur, Mumbai" : "Mankhurd, Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": branch.id === "chembur" ? "400071" : "400088",
        "addressCountry": "IN"
      },
      "telephone": branch.phone,
      "email": branch.email,
      "url": "https://uniquedentalcare.in/locations",
      "priceRange": "$$",
      "openingHoursSpecification": branch.workingHours.map(hours => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": hours.day.includes("Monday") ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] : ["Sunday"],
        "opens": hours.hours.includes("Closed") ? undefined : "10:00",
        "closes": hours.hours.includes("Closed") ? undefined : "21:00"
      })).filter(h => h.opens !== undefined)
    }))
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#FAF9F6] overflow-y-auto"
    >
      {/* Inject Structured Data for Google Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* STICKY/FIXED CONTROL HEADER */}
      <div className="sticky top-0 z-30 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-gray-200/40 px-6 sm:px-12 py-4 flex items-center justify-between">
        {/* Breadcrumb / Back Navigation */}
        <button 
          onClick={onClose}
          className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-500 hover:text-[#005B96] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 duration-300" />
          <span>Back to Home</span>
        </button>

        {/* Minimal Circle Close Button */}
        <button 
          onClick={onClose}
          className="p-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white text-slate-700 hover:bg-slate-50 transition-all duration-300 cursor-pointer shadow-sm group"
          aria-label="Close locations screen"
        >
          <X className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24">
        
        {/* 1. HERO SECTION (Quiet Luxury Editorial Heading) */}
        <div className="max-w-3xl space-y-6 text-left mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#894600]/10 border border-[#894600]/20 rounded-full text-[10px] font-semibold tracking-widest uppercase text-[#894600]">
            <Sparkles className="w-3.5 h-3.5" />
            Our physical clinics
          </div>
          <h1 className="font-playfair font-normal text-4xl sm:text-6xl tracking-tight text-slate-900 leading-none">
            Our Locations
          </h1>
          <p className="font-inter text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Experience clinical perfection and luxury hospitality at both of our state-of-the-art clinics in Mumbai. Whether you visit our premier flagship center in quiet Chembur or our modern suite in Mankhurd, you will receive the same uncompromised post-graduate specialist care.
          </p>
        </div>

        {/* 2. SIDE-BY-SIDE CLINIC CARDS (With Gold Divider) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch relative">
          
          {/* Vertical gold divider between columns on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-[#894600]/15 -translate-x-1/2 pointer-events-none" />

          {branchesConfig.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="flex flex-col bg-white border border-gray-150/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Full bleed card top photo */}
              <div className="relative h-64 sm:h-80 overflow-hidden shrink-0">
                <img 
                  src={branch.imageUrl} 
                  alt={`${branch.name} Interior Photo`}
                  className="w-full h-full object-cover object-center transition-transform duration-[1.5s] hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-6 inline-block text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 rounded-full shadow-sm">
                  {branch.id === "chembur" ? "Flagship Clinic" : "Clinical Expansion"}
                </span>
              </div>

              {/* Card body */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between text-left space-y-8">
                
                <div className="space-y-6">
                  {/* Branch name with local SEO title */}
                  <div className="space-y-2">
                    <span className="block text-[10px] tracking-widest text-[#894600] uppercase font-bold">
                      {branch.id === "chembur" ? "MUMBAI SUBURB EST." : "MODERN SUITE EST."}
                    </span>
                    <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-slate-900 leading-snug">
                      {branch.seoName}
                    </h2>
                  </div>

                  {/* Branch description essay */}
                  <p className="font-inter text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    {branch.description}
                  </p>

                  <hr className="border-gray-100" />

                  {/* Operational Details List */}
                  <div className="space-y-4">
                    {/* Address block */}
                    <div className="flex gap-4 items-start">
                      <MapPin className="w-5 h-5 text-[#894600] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider">Clinic Address</h4>
                        <p className="font-inter text-slate-700 text-sm leading-relaxed font-light mt-0.5">
                          {branch.address}
                        </p>
                        <a 
                          href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A8E8] hover:text-[#005B96] transition-colors mt-1.5"
                        >
                          <span>Get Navigation Directions</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Phone block */}
                    <div className="flex gap-4 items-start">
                      <Phone className="w-5 h-5 text-[#894600] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider">Phone Booking & Chat</h4>
                        <p className="font-inter text-slate-700 text-sm leading-relaxed font-light mt-0.5">
                          <a href={`tel:${branch.phone}`} className="hover:text-[#005B96] transition-colors font-medium">
                            {branch.phoneFormatted}
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Email block */}
                    <div className="flex gap-4 items-start">
                      <Mail className="w-5 h-5 text-[#894600] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider">Email Inquiry</h4>
                        <p className="font-inter text-slate-700 text-sm leading-relaxed font-light mt-0.5">
                          <a href={`mailto:${branch.email}`} className="hover:text-[#005B96] transition-colors">
                            {branch.email}
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Timing details */}
                    <div className="flex gap-4 items-start">
                      <Clock className="w-5 h-5 text-[#894600] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-sans font-semibold text-xs text-slate-400 uppercase tracking-wider">Working Hours</h4>
                        <div className="font-inter text-slate-700 text-sm mt-1 space-y-1 font-light">
                          {branch.workingHours.map((wh, idx) => (
                            <div key={idx} className="flex justify-between gap-4 text-xs sm:text-sm">
                              <span className="font-medium text-slate-600">{wh.day}:</span>
                              <span className="text-slate-800">{wh.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-6">
                  {/* Google Map frame - high end layout */}
                  <div className="w-full h-44 rounded-2xl overflow-hidden border border-gray-150 relative bg-slate-50">
                    <iframe
                      title={`Google Map - ${branch.name}`}
                      src={branch.googleMapEmbedUrl}
                      className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Primary CTA Booking Button */}
                  <button
                    onClick={() => onOpenBookingModal(branch.databaseId)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-inter font-bold text-xs uppercase tracking-widest text-white shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer hover:shadow-lg"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Book Appointment at {branch.id === "chembur" ? "Chembur" : "Mankhurd"}</span>
                  </button>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* 3. FOOTER INFO */}
        <div className="mt-20 text-center space-y-4 max-w-xl mx-auto border-t border-slate-200/60 pt-12">
          <p className="font-inter text-slate-400 text-xs font-light leading-relaxed">
            Need special support or organizing a combined visit across both locations? Contact our central administrative coordinator directly at <strong className="font-semibold text-slate-700">+91 98336 22444</strong>.
          </p>
        </div>

      </div>

      {/* Editorial aesthetic footer */}
      <footer className="py-12 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 border border-white/10 hover:border-white/30 text-white rounded-lg font-inter font-semibold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer bg-transparent"
          >
            Return to main site
          </button>
          <span className="text-slate-400 font-sans text-[10px] uppercase font-bold tracking-widest">
            Unique Dental Care • Chembur & Mankhurd, Mumbai • Esthetic Dentistry
          </span>
        </div>
      </footer>
    </motion.div>
  );
}
