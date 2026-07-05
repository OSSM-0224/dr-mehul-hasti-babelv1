export interface BranchConfig {
  id: string;
  databaseId: number; // to associate with the booking system if needed
  name: string;
  seoName: string; // for local SEO (e.g. "Unique Dental Care — Chembur, Mumbai")
  address: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  timings: string;
  workingHours: { day: string; hours: string }[];
  googleMapEmbedUrl: string;
  imageUrl: string;
  description: string;
  coordinates: { lat: number; lng: number };
  directionsUrl: string;
}

export const branchesConfig: BranchConfig[] = [
  {
    id: "chembur",
    databaseId: 1,
    name: "Unique Dental Care — Chembur",
    seoName: "Unique Dental Care — Chembur, Mumbai",
    address: "Shop No. 2, Ground Floor, Sai Dwar Building, Opposite Fine Arts Society, RC Marg, Chembur, Mumbai, Maharashtra 400071",
    phone: "+919833622444",
    phoneFormatted: "+91 98336 22444",
    email: "chembur@uniquedentalcare.com",
    timings: "Monday - Saturday: 10:00 AM - 9:00 PM",
    workingHours: [
      { day: "Monday - Saturday", hours: "10:00 AM - 9:00 PM" },
      { day: "Sunday", hours: "By Appointment Only" }
    ],
    // High-contrast clean luxury Google Maps embed link
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1891157835157!2d72.89886751531737!3d19.055452287098402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6270e5b8d0d%3A0xc367db5cfb90212f!2sSai%20Dwar!5e0!3m2!1sen!2sin!4v1689250000000!5m2!1sen!2sin",
    imageUrl: "/uniquedental1.png",
    description: "Our premier flagship clinic in leafy, upscale Chembur. Features a peaceful five-star lounge ambiance, hospital-grade Class-A sterilization, digital smile diagnostics, and specialized surgical rooms.",
    coordinates: { lat: 19.055452, lng: 72.898868 },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Shop+No.+2,+Ground+Floor,+Sai+Dwar+Building,+RC+Marg,+Chembur,+Mumbai,+Maharashtra+400071"
  },
  {
    id: "mankhurd",
    databaseId: 2,
    name: "Unique Dental Care — Mankhurd",
    seoName: "Unique Dental Care — Mankhurd, Mumbai",
    address: "Shop No. 5, Crystal Plaza, Near Mankhurd Railway Station, Mankhurd East, Mumbai, Maharashtra 400088",
    phone: "+919833622444",
    phoneFormatted: "+91 98336 22444",
    email: "mankhurd@uniquedentalcare.com",
    timings: "Monday - Saturday: 10:00 AM - 9:00 PM",
    workingHours: [
      { day: "Monday - Saturday", hours: "10:00 AM - 9:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    // Mankhurd Station / crystal plaza map location
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.554318712061!2d72.92873131531713!3d19.03960148710815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5cbffffffbf%3A0x6b6fa38bdf882d90!2sMankhurd!5e0!3m2!1sen!2sin!4v1689251000000!5m2!1sen!2sin",
    imageUrl: "/images/chembur4.png",
    description: "Our modern clinical expansion at Mankhurd's Crystal Plaza. Fully integrated with advanced diagnostic digital radiography, general preventive family dentistry, and world-class dental restorations.",
    coordinates: { lat: 19.039601, lng: 72.928731 },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Shop+No.+5,+Crystal+Plaza,+Mankhurd+East,+Mumbai,+Maharashtra+400088"
  }
];
