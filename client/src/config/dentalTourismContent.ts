export interface ImageSlotConfig {
  id: number;
  filename: string;
  title: string;
  description: string;
  category: string;
}

export interface DentalTourismBranchContent {
  branchId: "chembur" | "mankhurd";
  branchName: string;
  doctorName: string;
  doctorShortName: string;
  doctorTitle: string;
  executiveSummaryText: string;
  phase1ConsultDescription: string;
  conciergeLocationText: string;
  conciergeDescription: string;
  conciergeHotelDetails: string;
  gallery: ImageSlotConfig[];
}

export const dentalTourismContent: Record<"chembur" | "mankhurd", DentalTourismBranchContent> = {
  chembur: {
    branchId: "chembur",
    branchName: "Chembur",
    doctorName: "Dr. Saloni Mehul Hasti",
    doctorShortName: "Dr. Saloni",
    doctorTitle: "MDS - Master of Dental Surgery, Clinical Director",
    executiveSummaryText: "Traveling for advanced medical procedures requires absolute clinical certainty. At Unique Dental Care, directed by the visionary master specialist Dr. Saloni Mehul Hasti, we merge hospital-grade safety protocols with high-end private hospitality.",
    phase1ConsultDescription: "Simply upload your local panoramic radiographs or simple clinical photographs. Dr. Saloni Mehul Hasti and our coordinators host a personal digital consult to outline your exact treatment paths, detailed durations, and clear pricing options prior to travel.",
    conciergeLocationText: "CHEMBUR, MUMBAI",
    conciergeDescription: "Located in Chembur, one of Mumbai's most affluent, leafy suburbs, our premier flagship center offers a tranquil escape from the high-density city center while remaining exceptionally well-connected.",
    conciergeHotelDetails: "Settle into premier boutique hotels located in and around leafy Chembur, providing quiet private suites, reliable dining options, and specialized soft menus during recovery.",
    gallery: [
      {
        id: 1,
        filename: "/uniquedental1.png",
        title: "The Master Operatory Suite",
        description: "Our core surgical and cosmetic suite featuring ergonomic leather patient comfort seating, specialized micro-instrumentation, and our signature geometric design lines.",
        category: "Suite Tour"
      },
      {
        id: 2,
        filename: "/images/chembur2.png",
        title: "Electronic Apex & Laser Guidance",
        description: "Close-up of the pristine clinical diagnostics interface, electronic root canal apex locator, and computerized aesthetic smile mapping.",
        category: "Technology"
      },
      {
        id: 3,
        filename: "/images/chembur3.png",
        title: "Class-A Sterilization Center",
        description: "Our dedicated surgical prep and sterilization cabinet, ensuring hospital-grade hygiene under soft, relaxing warm counter lights.",
        category: "Hygiene"
      },
      {
        id: 4,
        filename: "/images/chembur4.png",
        title: "State-of-the-Art Dental Lounge",
        description: "A wide panoramic perspective of the Chembur clinic's main clinical area, engineered for high-precision implant surgery.",
        category: "Clinic Tour"
      },
      {
        id: 5,
        filename: "/images/chembur5.png",
        title: "The Consultation Salon",
        description: "Private conversation quarters featuring plush executive teal armchairs and natural botanical elements, designed for personal smile design discussions.",
        category: "Consultation"
      },
      {
        id: 6,
        filename: "/images/chembur6.png",
        title: "Digital Mockup Workspace",
        description: "Detailed view of the patient consultation desk showing high-resolution digital imaging tools and botanical calming backdrops.",
        category: "Consultation"
      }
    ]
  },
  mankhurd: {
    branchId: "mankhurd",
    branchName: "Mankhurd",
    doctorName: "Dr. Mehul Hasti Babel",
    doctorShortName: "Dr. Mehul",
    doctorTitle: "MDS - Master of Dental Surgery, Lead Implantologist",
    executiveSummaryText: "Traveling for advanced medical procedures requires absolute clinical certainty. At Unique Dental Care, directed by the visionary master specialist Dr. Mehul Hasti Babel, we merge hospital-grade safety protocols with high-end private hospitality.",
    phase1ConsultDescription: "Simply upload your local panoramic radiographs or simple clinical photographs. Dr. Mehul Hasti Babel and our coordinators host a personal digital consult to outline your exact treatment paths, detailed durations, and clear pricing options prior to travel.",
    conciergeLocationText: "MANKHURD, MUMBAI",
    conciergeDescription: "Located in Mankhurd, our modern clinical facility offers convenient access to major transit links, premier business accommodations, and state-of-the-art diagnostic imaging suites.",
    conciergeHotelDetails: "Enjoy access to premium business class hotels near Mankhurd, with spacious suites, tailored high-protein dietary plans, and private chauffeur-driven recovery commutes.",
    gallery: []
  }
};
