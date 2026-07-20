"use client";

import React from "react";
import { AppProvider, useApp } from "./app/providers/index.js";
import { Header } from "./features/header/index.js";
import { Hero } from "./features/hero/index.js";
import { About, HowItWorks, WhyChooseUs } from "./features/about/index.js";
import { TreatmentSection } from "./features/treatments/index.js";
import { StatisticsSection } from "./features/statistics/index.js";
import { TestimonialCarousel } from "./features/testimonials/index.js";
import { Team } from "./features/team/index.js";
import { ContactSection } from "./features/contact/index.js";
import { Footer } from "./features/footer/index.js";

// New modular premium sections
import { TechEquipment } from "./features/tech/index.js";
import { SmileGallery } from "./features/gallery/index.js";
import { FAQSection } from "./features/faq/index.js";

// Modals & Overlays
import { WhatsAppModal } from "./features/whatsapp-chat/index.js";
import { DentalTourismPage } from "./features/dental-tourism/index.js";
import { LocationsPage } from "./features/locations/index.js";

import { Provider } from "react-redux";
import { store } from "./app/store/store.js";

function MainLayout() {
  const {
    isWhatsAppModalOpen,
    openWhatsAppModal,
    closeWhatsAppModal,
    isDentalTourismOpen,
    setIsDentalTourismOpen,
    isLocationsOpen,
    setIsLocationsOpen,
    selectedBranch,
    setSelectedBranch,
  } = useApp();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewServices = () => {
    const treatmentsSection = document.getElementById("treatments");
    if (treatmentsSection) {
      treatmentsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const handleUrlCheck = () => {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      const branchParam = params.get("branch");

      if (path === "/locations" || path === "/locations/") {
        setIsLocationsOpen(true);
        setIsDentalTourismOpen(false);
      } else if (path === "/dental-tourism" || path === "/dental-tourism/") {
        setIsLocationsOpen(false);
        setIsDentalTourismOpen(true);
        if (branchParam === "chembur" || branchParam === "mankhurd") {
          setSelectedBranch(branchParam);
        }
      } else {
        setIsLocationsOpen(false);
        setIsDentalTourismOpen(false);
      }
    };

    // Sync on initial mount
    handleUrlCheck();

    // Listen to browser forward/backward navigations
    window.addEventListener("popstate", handleUrlCheck);
    return () => {
      window.removeEventListener("popstate", handleUrlCheck);
    };
  }, [setIsLocationsOpen, setIsDentalTourismOpen, setSelectedBranch]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-inter antialiased selection:bg-[#00A8E8] selection:text-white">
      {/* Header and Fixed Navigation */}
      <Header
        onOpenBookingModal={scrollToContact}
        onOpenWhatsAppModal={openWhatsAppModal}
      />

      <main className="flex-grow">
        {/* 1. Premium Hero Section */}
        <Hero
          onOpenBookingModal={scrollToContact}
          onOpenWhatsAppModal={openWhatsAppModal}
          onViewServices={handleViewServices}
        />

        {/* 2. About Clinic */}
        <About onOpenBookingModal={scrollToContact} />

        {/* Statistics highlights directly integrated under About */}
        <StatisticsSection />

        {/* 3. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 4. Services Section */}
        <TreatmentSection onOpenBookingModal={scrollToContact} />

        {/* 5. Meet Our Doctors */}
        <Team />

        {/* 6. Technology & Equipment Section */}
        <TechEquipment />

        {/* 7. Smile Gallery (Before/After Slider) */}
        <SmileGallery />

        {/* 8. Patient Testimonials */}
        <TestimonialCarousel />

        {/* 9. Appointment Booking Workflow info */}
        <HowItWorks />


        {/* 10. FAQ Section */}
        <FAQSection />

        {/* 11, 12, 13. Contact Section (Multi-location, map support & inquiry form) */}
        <ContactSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* WhatsApp Simulated Interactive Chat Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={closeWhatsAppModal}
        onOpenBookingModal={scrollToContact}
      />

      {/* Dental Tourism Page overlay */}
      <DentalTourismPage
        isOpen={isDentalTourismOpen}
        onClose={() => {
          setIsDentalTourismOpen(false);
          const path = window.location.pathname;
          if (path.startsWith("/dental-tourism")) {
            window.history.pushState(null, "", "/");
          }
        }}
        onOpenBookingModal={scrollToContact}
        onOpenWhatsAppModal={openWhatsAppModal}
      />

      {/* Locations Page overlay */}
      <LocationsPage
        isOpen={isLocationsOpen}
        onClose={() => {
          setIsLocationsOpen(false);
          if (window.location.pathname === "/locations" || window.location.pathname === "/locations/") {
            window.history.pushState(null, "", "/");
          }
        }}
        onOpenBookingModal={scrollToContact}
      />
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <MainLayout />
      </AppProvider>
    </Provider>
  );
}
