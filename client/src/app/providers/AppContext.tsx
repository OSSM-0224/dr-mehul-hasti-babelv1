import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  isWhatsAppModalOpen: boolean;
  setIsWhatsAppModalOpen: (open: boolean) => void;
  isDentalTourismOpen: boolean;
  setIsDentalTourismOpen: (open: boolean) => void;
  isLocationsOpen: boolean;
  setIsLocationsOpen: (open: boolean) => void;
  openWhatsAppModal: () => void;
  closeWhatsAppModal: () => void;
  selectedBranch: "chembur" | "mankhurd";
  setSelectedBranch: (branch: "chembur" | "mankhurd") => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isDentalTourismOpen, setIsDentalTourismOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
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

  const openWhatsAppModal = () => {
    setIsWhatsAppModalOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isWhatsAppModalOpen,
        setIsWhatsAppModalOpen,
        isDentalTourismOpen,
        setIsDentalTourismOpen,
        isLocationsOpen,
        setIsLocationsOpen,
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
