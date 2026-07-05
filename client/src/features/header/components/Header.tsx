"use client"

import React, { useState, useEffect } from "react";
import { COLORS } from "@/src/features/shared/constants/colors";
import { List, X, Phone, Calendar } from "@phosphor-icons/react";
import { useApp } from "@/src/hooks/index.js";

interface HeaderProps {
  onOpenBookingModal: () => void;
  onOpenWhatsAppModal: () => void;
}

export default function Header({ onOpenBookingModal, onOpenWhatsAppModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { 
    isDentalTourismOpen, 
    setIsDentalTourismOpen,
    isLocationsOpen,
    setIsLocationsOpen,
    selectedBranch
  } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section when Dental Tourism or Locations is opened or closed
  useEffect(() => {
    if (isDentalTourismOpen) {
      setActiveSection("tourism");
    } else if (isLocationsOpen) {
      setActiveSection("locations");
    } else {
      // Fallback to active section when modal is closed
      const sections = ["home", "about", "treatments", "technologies", "team", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    }
  }, [isDentalTourismOpen, isLocationsOpen]);

  // Track active section on scroll
  useEffect(() => {
    if (isDentalTourismOpen || isLocationsOpen) return;

    const handleScroll = () => {
      const sections = ["home", "about", "treatments", "technologies", "team", "contact"];
      let currentActive = "home";
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Trigger if section top is above or near the viewport's middle
          if (rect.top <= 150) {
            currentActive = id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDentalTourismOpen, isLocationsOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === "tourism") {
      setIsLocationsOpen(false);
      setIsDentalTourismOpen(true);
      window.history.pushState(null, "", `/dental-tourism?branch=${selectedBranch}`);
      return;
    }
    if (id === "locations") {
      setIsDentalTourismOpen(false);
      setIsLocationsOpen(true);
      window.history.pushState(null, "", "/locations");
      return;
    }

    const wasOverlayOpen = isDentalTourismOpen || isLocationsOpen;
    setIsDentalTourismOpen(false);
    setIsLocationsOpen(false);

    if (window.location.pathname === "/locations" || window.location.pathname === "/locations/" || window.location.pathname.startsWith("/dental-tourism")) {
      window.history.pushState(null, "", "/");
    }

    const triggerScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 72; // matching our premium sticky navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (wasOverlayOpen) {
      setTimeout(triggerScroll, 100);
    } else {
      triggerScroll();
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Treatments", id: "treatments" },
    { label: "Dental Tourism", id: "tourism" },
    { label: "Locations", id: "locations" },
    { label: "Technologies", id: "technologies" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex items-center ${
        isScrolled
          ? "h-16 bg-white/90 backdrop-blur-md border-b border-slate-100/80 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
          : "h-20 bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        {/* Three Column Structure Container (Flexbox with a growing center section) */}
        <div className="flex justify-between items-center h-full w-full gap-4">
          
          {/* Column 1: Logo & Fallback (Always Left-aligned, shrink-0 to prevent compression) */}
          <div className="flex items-center justify-start z-10 select-none shrink-0">
            <div
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 cursor-pointer group text-left h-12 shrink-0 min-w-fit"
            >
              <img
                src="/logos/uniquedentalcare.png"
                alt="Unique Dental Care Logo"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-102 shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = document.getElementById("logo-text-fallback");
                  if (fallback) {
                    fallback.classList.remove("hidden");
                    fallback.classList.add("flex");
                  }
                }}
              />
              <div id="logo-text-fallback" className="hidden flex-col justify-center h-12 shrink-0 min-w-fit">
                <span className="font-playfair font-bold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-[#005B96] transition-colors leading-none whitespace-nowrap">
                  Unique Dental Care
                </span>
                <span className="block text-[9px] uppercase font-semibold tracking-widest text-slate-400 leading-none mt-1 whitespace-nowrap">
                  Luxury & Cosmetic Dentistry
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Center Navigation (flex-grow, center-aligned, with flexible sizing to prevent collision) */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-1.5 xl:gap-2 2xl:gap-3 h-9 select-none">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-inter font-medium text-[12px] xl:text-[12.5px] 2xl:text-[13px] tracking-wide transition-all duration-300 cursor-pointer flex items-center justify-center px-2 xl:px-2.5 2xl:px-3.5 h-9 rounded-full leading-none border-0 bg-transparent whitespace-nowrap shrink-0
                    ${isActive 
                      ? "text-[#005B96] font-semibold" 
                      : "text-slate-600 hover:text-[#005B96]"
                    }
                    group/nav
                  `}
                >
                  <span>{item.label}</span>
                  {/* Exquisite Underline Slider Effect */}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#005B96]/90 transition-all duration-300 rounded-full
                      ${isActive ? "w-6 opacity-100" : "w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:opacity-100"}
                    `}
                  />
                </button>
              );
            })}
          </nav>

          {/* Column 3: Premium CTA Buttons (Always Right-aligned, shrink-0 to maintain full visibility) */}
          <div className="hidden xl:flex items-center gap-2.5 xl:gap-3 2xl:gap-4 z-10 select-none shrink-0">
            <button
              onClick={onOpenWhatsAppModal}
              className="flex items-center justify-center gap-1.5 xl:gap-2 px-3.5 xl:px-4 py-2.5 rounded-full font-inter font-semibold text-xs text-white shadow-[0_2px_10px_-3px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_15px_-3px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer h-10 leading-none m-0 whitespace-nowrap shrink-0"
              style={{ backgroundColor: COLORS.secondary }}
            >
              <Phone size={14} weight="bold" className="shrink-0" />
              <span className="leading-none whitespace-nowrap">WhatsApp Chat</span>
            </button>
            <button
              onClick={onOpenBookingModal}
              className="flex items-center justify-center gap-1.5 xl:gap-2 px-4 xl:px-5 py-2.5 rounded-full font-inter font-semibold text-xs text-white shadow-[0_2px_10px_-3px_rgba(0,91,150,0.3)] hover:shadow-[0_4px_15px_-3px_rgba(0,91,150,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer h-10 leading-none m-0 whitespace-nowrap shrink-0"
              style={{ backgroundColor: COLORS.primary }}
            >
              <Calendar size={14} weight="bold" className="shrink-0" />
              <span className="leading-none whitespace-nowrap">Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="xl:hidden flex items-center gap-2.5 z-10">
            <button
              onClick={onOpenBookingModal}
              className="md:hidden p-2.5 rounded-full text-white shadow-sm flex items-center justify-center cursor-pointer transition-transform active:scale-95"
              style={{ backgroundColor: COLORS.primary }}
              title="Book Appointment"
            >
              <Calendar size={16} weight="bold" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full text-slate-700 hover:text-[#005B96] hover:bg-slate-50 transition-all duration-200 cursor-pointer flex items-center justify-center border border-slate-100"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} weight="bold" />
              ) : (
                <List size={20} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-slate-200/80 shadow-2xl py-5 px-6 space-y-4 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2.5 px-4 rounded-xl font-inter text-[15px] transition-all ${
                    isActive
                      ? "font-semibold text-[#005B96] bg-slate-50"
                      : "font-medium text-slate-600 hover:bg-slate-50 hover:text-[#005B96]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <hr className="border-slate-100 my-3" />
            <div className="grid grid-cols-2 gap-3.5 pt-1">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-full font-inter font-semibold text-xs text-white shadow-sm cursor-pointer transition-transform active:scale-98"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <Phone size={15} weight="bold" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-full font-inter font-semibold text-xs text-white shadow-md cursor-pointer transition-transform active:scale-98"
                style={{ backgroundColor: COLORS.primary }}
              >
                <Calendar size={15} weight="bold" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
