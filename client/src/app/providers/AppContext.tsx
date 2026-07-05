import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (open: boolean) => void;
  isWhatsAppModalOpen: boolean;
  setIsWhatsAppModalOpen: (open: boolean) => void;
  isDentalTourismOpen: boolean;
  setIsDentalTourismOpen: (open: boolean) => void;
  isLocationsOpen: boolean;
  setIsLocationsOpen: (open: boolean) => void;
  preselectedTreatmentId: number | undefined;
  setPreselectedTreatmentId: (id: number | undefined) => void;
  refreshTrigger: number;
  triggerRefresh: () => void;
  openBookingModal: (treatmentId?: number) => void;
  closeBookingModal: () => void;
  openWhatsAppModal: () => void;
  closeWhatsAppModal: () => void;
  selectedBranch: "chembur" | "mankhurd";
  setSelectedBranch: (branch: "chembur" | "mankhurd") => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isDentalTourismOpen, setIsDentalTourismOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [preselectedTreatmentId, setPreselectedTreatmentId] = useState<number | undefined>(undefined);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [selectedBranch, setSelectedBranchState] = useState<"chembur" | "mankhurd">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedBranch");
      if (saved === "chembur" || saved === "mankhurd") {
        return saved;
      }
    }
    return "chembur";
  });

  const setSelectedBranch = (branch: "chembur" | "mankhurd") => {
    setSelectedBranchState(branch);
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedBranch", branch);
    }
  };

  const triggerRefresh = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  const openBookingModal = (treatmentId?: number) => {
    setPreselectedTreatmentId(treatmentId);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const openWhatsAppModal = () => {
    setIsWhatsAppModalOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isBookingModalOpen,
        setIsBookingModalOpen,
        isWhatsAppModalOpen,
        setIsWhatsAppModalOpen,
        isDentalTourismOpen,
        setIsDentalTourismOpen,
        isLocationsOpen,
        setIsLocationsOpen,
        preselectedTreatmentId,
        setPreselectedTreatmentId,
        refreshTrigger,
        triggerRefresh,
        openBookingModal,
        closeBookingModal,
        openWhatsAppModal,
        closeWhatsAppModal,
        selectedBranch,
        setSelectedBranch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
