// Server-side static database dataset
// Isolated from components to prevent hardcoding

export const TREATMENTS = [
  {
    id: 1,
    title: "Cosmetic Smile Design",
    category: "Cosmetics",
    description: "Transform your appearance with computer-analyzed Digital Smile Design. See and try on your dream smile before any work begins.",
    duration: "2 visits",
    details: [
      "Custom facial analysis and computerized planning",
      "Interactive try-on session to preview your new smile",
      "Tailored shape, length, and shade matching for absolute realism",
      "Minimally invasive techniques preserving maximum natural enamel",
      "Instant confidence boost with a photogenic, balanced smile"
    ],
    iconName: "Sparkles"
  },
  {
    id: 2,
    title: "Teeth Whitening/Bleaching",
    category: "Cosmetics",
    description: "Get up to 8 shades whiter teeth in under an hour using safe, laser-activated, ultra-premium whitening technology.",
    duration: "45 minutes",
    details: [
      "Safe, in-office laser whitening with instant results",
      "Specialized desensitizing agents prevent post-treatment sensitivity",
      "Effectively removes stubborn stains from coffee, smoking, and aging",
      "Safe on dental enamel with clinically validated protocols",
      "Includes customized take-home touch-up kit for lasting brilliance"
    ],
    iconName: "Zap"
  },
  {
    id: 3,
    title: "Dental Implants",
    category: "Implantology",
    description: "Painless computer-guided replacement for missing teeth using premium biocompatible titanium implants for lifetime durability.",
    duration: "30 - 45 minutes",
    details: [
      "Minimally invasive keyhole placement with rapid recovery",
      "3D CBCT bone mapping for 100% precise planning and placement",
      "Highest success rate of over 99% with premium Swiss implants",
      "Immediate loading options available for same-day teeth",
      "Prevents jaw bone loss and restores full chewing efficiency"
    ],
    iconName: "Cpu"
  },
  {
    id: 4,
    title: "Crown & Bridge",
    category: "Prosthodontics",
    description: "High-strength, lifelike metal-free zirconia and ceramic restorations custom-milled for a seamless, natural fit.",
    duration: "1 - 2 days",
    details: [
      "100% biocompatible, metal-free materials with zero dark gum lines",
      "Premium zirconia provides extreme fracture resistance for molars",
      "Ultra-translucent glass-ceramics offer perfect aesthetics for front teeth",
      "In-house digital design guarantees flawless bite and alignment",
      "Comes with computerized quality certifications and warranties"
    ],
    iconName: "Layers"
  },
  {
    id: 5,
    title: "Root Canal Treatment",
    category: "Endodontics",
    description: "Painless single-visit microscopic root canals to cure persistent infections and save your natural tooth.",
    duration: "45 - 60 minutes",
    details: [
      "Finished in a single comfortable sitting under local anesthesia",
      "Conducted with advanced electronic apex locators and rotary files",
      "Laser sterilization of canals ensures zero persistent micro-infections",
      "Absolutely pain-free procedure under high-magnification diagnostics",
      "Prepares the tooth immediately for a CAD-CAM protective crown"
    ],
    iconName: "Clock"
  },
  {
    id: 6,
    title: "Orthodontics (Braces/Aligners)",
    category: "Orthodontics",
    description: "Straighten your teeth invisibly with custom clear aligners or highly aesthetic self-ligating ceramic braces.",
    duration: "6 - 18 months",
    details: [
      "Virtually invisible clear aligners custom-modeled using 3D simulations",
      "3D digital treatment plan lets you view your future smile before starting",
      "Fewer physical visits required with convenient remote tracking",
      "Comfortable, metal-free option that doesn't disrupt your daily lifestyle",
      "We also offer self-ligating metal and luxury ceramic brace systems"
    ],
    iconName: "Layers"
  },
  {
    id: 7,
    title: "Periodontal Treatment",
    category: "Periodontics",
    description: "Expert therapeutic treatments for gum recession, bleeding, and advanced periodontal disease to protect your bone support.",
    duration: "30 - 45 minutes",
    details: [
      "Laser-assisted deep pocket sterilization with zero surgical cuts",
      "Painless ultrasonic scaling below the gum line to remove deep tartar",
      "Advanced regenerative techniques using Platelet-Rich Fibrin (PRF)",
      "Prevents tooth mobility and halts systematic inflammatory markers",
      "Restores pink, tight, and healthy gum margins"
    ],
    iconName: "Scissors"
  },
  {
    id: 8,
    title: "Full Mouth Makeover",
    category: "Restorative",
    description: "Comprehensive restoration of chewing function, bite alignment, and smile aesthetics for heavily worn or missing teeth.",
    duration: "3 - 5 days",
    details: [
      "Complete rehabilitation utilizing computerized jaw tracking",
      "Combines implants, crowns, and veneers for full aesthetic restoration",
      "Restores youthful facial support, lip fullness, and muscle balance",
      "Individually hand-crafted, lifelike teeth designed for your face structure",
      "Improves overall health, systemic nutrition, and speech clarity"
    ],
    iconName: "Cpu"
  },
  {
    id: 9,
    title: "Composite Bonding",
    category: "Cosmetics",
    description: "Quick, single-sitting artistic bonding with premium composite resins to fix chipped, gapped, or slightly misaligned teeth.",
    duration: "30 - 45 minutes",
    details: [
      "Completed in a single appointment with immediate, beautiful results",
      "Requires absolutely zero tooth cutting, preserving 100% natural enamel",
      "Artistic custom shade layering mimics the tooth's natural translucency",
      "Perfect for repairing minor chips, gaps, or tooth discolorations",
      "An incredibly cost-effective yet highly aesthetic solution"
    ],
    iconName: "Sparkles"
  },
  {
    id: 10,
    title: "Veneers & Laminates",
    category: "Cosmetics",
    description: "Ultra-thin, custom-made ceramic shells bonded to the front teeth to create a Hollywood-standard, flawless smile.",
    duration: "2 visits",
    details: [
      "Hand-characterized ceramic shells just 0.3mm thin",
      "Corrects severe discoloration, wear, gaps, and minor crowding",
      "Extremely stain-resistant premium materials with a lifelike luster",
      "Superb durability, lasting for decades with proper maintenance",
      "Custom design ensures optimal light reflection for a natural glow"
    ],
    iconName: "Sparkles"
  },
  {
    id: 11,
    title: "Teeth Cleaning & Polishing",
    category: "Preventive",
    description: "Ultrasonic scaling and advanced air-polishing to remove plaque, calculus, and tough tea/coffee stains.",
    duration: "30 minutes",
    details: [
      "Deep scaling removes hardened tartar that standard brushing cannot",
      "Micro-polishing removes surface discolorations for instant freshness",
      "Eliminates chronic bad breath and prevents bleeding gums",
      "Essential preventative therapy recommended once every 6 months",
      "Protects overall systemic health by reducing oral bacteremia"
    ],
    iconName: "Clock"
  },
  {
    id: 12,
    title: "Laser Dentistry",
    category: "Digital Clinic",
    description: "Cutting-edge, drill-free laser technology for painless gum contouring, ulcer treatments, and surgical procedures.",
    duration: "15 - 30 minutes",
    details: [
      "Suture-free, bloodless, and stitch-free gum procedures",
      "Treats painful mouth ulcers instantly and painlessly",
      "Eliminates the need for noisy, vibrating dental drills",
      "Low-level laser therapy accelerates postoperative cellular healing",
      "Drastically reduces the need for local anesthesia injections"
    ],
    iconName: "Zap"
  },
  {
    id: 13,
    title: "Digital Smile Design",
    category: "Cosmetics",
    description: "Advanced 3D virtual smile layout that models your final aesthetic result aligned with your unique facial geometry.",
    duration: "1 visit",
    details: [
      "High-definition clinical portrait photography and video analysis",
      "Computer-generated mockups displaying exact smile metrics",
      "Ensures absolute symmetry with facial midlines and lip curves",
      "Provides a collaborative blueprint so you are the co-designer",
      "Zero guesswork; preview your exact final veneers before creation"
    ],
    iconName: "Cpu"
  },
  {
    id: 14,
    title: "Painless Treatments",
    category: "Specialty",
    description: "We utilize computerized anesthetic systems, dental lasers, and specialized protocols to eliminate dental fear.",
    duration: "Varies",
    details: [
      "Virtually imperceptible computer-controlled anesthetic delivery",
      "Ultra-fine micro-needles and premium numbing gels",
      "Piezosurgery utilizes ultrasonic vibrations instead of surgical bone drills",
      "Empathetic, stress-free clinical pace designed for highly anxious patients",
      "Soothing premium clinical ambiance with headphones and screens"
    ],
    iconName: "Baby"
  },
  {
    id: 15,
    title: "Emergency Dental Care",
    category: "Emergency",
    description: "Immediate relief for severe toothaches, broken teeth, or dental trauma, backed by our 24/7 emergency WhatsApp support.",
    duration: "Immediate",
    details: [
      "Same-day emergency visits prioritized to relieve pain instantly",
      "Immediate management of dental fractures, knocks, and trauma",
      "Express root canals and digital scans for sudden severe dental crises",
      "Round-the-clock emergency triage support via WhatsApp",
      "Absolute sterilization standards maintained for emergency surgeries"
    ],
    iconName: "RotateCcw"
  },
  {
    id: 16,
    title: "Dental Tourism",
    category: "Dental Tourism",
    description: "World-class, highly affordable dental treatments for international and out-of-city patients, combining clinical precision with curated travel assistance.",
    duration: "3 - 7 days",
    details: [
      "Virtual pre-treatment video consultations and customized 3D planning",
      "Affordable luxury packages saving up to 70% compared to Western countries",
      "Dedicated airport pick-up, local travel logistics, and hotel bookings",
      "Fast-track treatments using in-house digital CAD/CAM and dental lasers",
      "Continuous tele-dentistry support and comprehensive follow-up care"
    ],
    iconName: "Globe"
  }
];

export const TEAM = [
  {
    id: 1,
    name: "Dr. Mehul Hasti Babel",
    title: "Founder & Lead Dentist",
    specialty: "MDS - Luxury Dentistry & Advanced Cosmetic Procedures",
    bio: "Dr. Mehul Hasti Babel is a highly acclaimed dentist specializing in Luxury Dentistry and Advanced Cosmetic Procedures. Reclaiming smiles through a combination of cutting-edge technology and fine artistry, Dr. Babel is dedicated to providing high-precision, pain-free dental care. With years of experience and deep expertise in digital smile redesigns, full-mouth makeovers, and custom aesthetic ceramic restorations, he has established Unique Dental Care as Mumbai's premium destination for dental excellence.",
    education: [
      "Master of Dental Surgery (MDS) in Prosthodontics, Crown & Bridge",
      "Certified Digital Smile Design (DSD) Specialist",
      "Fellowship in Advanced Esthetic Dentistry & Micro-Endodontics",
      "Pioneer in Computer-Guided Keyhole Implant Therapies"
    ],
    imageUrl: "https://picsum.photos/seed/drmehul/400/400"
  },
  {
    id: 2,
    name: "Dr. Piyush Patil",
    title: "Orthodontist",
    specialty: "MDS - Orthodontics & Dentofacial Orthopedics",
    bio: "Dr. Piyush Patil is an expert in modern orthodontics, specializing in self-ligating braces and digital clear aligners. He is committed to creating beautiful, functional smiles with maximum comfort and efficiency.",
    education: [
      "MDS in Orthodontics & Dentofacial Orthopedics",
      "Certified Invisalign Provider & Clear Aligner Specialist",
      "Expert in Damon Self-Ligating Braces & Micro-Implants"
    ],
    imageUrl: "https://picsum.photos/seed/drpiyush/400/400"
  },
  {
    id: 3,
    name: "Dr. Tanvi Sharma",
    title: "Orthodontist",
    specialty: "MDS - Orthodontics & Dentofacial Orthopedics",
    bio: "Dr. Tanvi Sharma specializes in cosmetic smile design through advanced invisible braces and adult clear aligners. Her precision-focused approach ensures customized, comfortable treatment plans for each unique patient.",
    education: [
      "MDS in Orthodontics & Dentofacial Orthopedics",
      "Certified Aligner practitioner",
      "Advanced certification in Invisible Brackets and Adult Orthodontics"
    ],
    imageUrl: "https://picsum.photos/seed/drtanvi/400/400"
  },
  {
    id: 4,
    name: "Dr. Sushma Singh",
    title: "Pedodontist",
    specialty: "MDS - Pediatric & Preventive Dentistry",
    bio: "Dr. Sushma Singh is dedicated to pediatric dental health, ensuring that every child's visit is stress-free, engaging, and positive. She excels in preventive dentistry and early habit interception.",
    education: [
      "MDS in Pediatric & Preventive Dentistry",
      "Certified in Conscious Nitrous Oxide Inhalation Sedation",
      "Specialist in Early Intervention Orthodontics and Childhood Trauma Management"
    ],
    imageUrl: "https://picsum.photos/seed/drsushma/400/400"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    patientName: "Arun Mehra",
    title: "Software Architect",
    quote: "I traveled to Unique Dental Care specifically for Dr. Mehul's computer-guided Smile Design. The precision was incredible, and being able to preview my teeth on screen beforehand made the experience completely transparent and reassuring!",
    stars: 5,
    treatmentType: "Digital Smile Design",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=200",
    afterImg: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    patientName: "Priya Sharma",
    title: "Corporate HR Lead",
    quote: "My ceramic laminates have completely changed my self-image. I can't stop smiling in meetings now! Dr. Mehul's artistic attention to detail is remarkable. The teeth look completely natural, sparkling, and fit flawlessly.",
    stars: 5,
    treatmentType: "Veneers & Laminates",
    beforeImg: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=200",
    afterImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    patientName: "Dr. Sandeep Patel",
    title: "Cardiologist",
    quote: "As a doctor, clinic sterility and technological precision are my top concerns. Dr. Mehul's laser-assisted root canal was phenomenal. Zero pain, microscopic guidance, and absolute sterile protocols. A world-class standard of dental care.",
    stars: 5,
    treatmentType: "Root Canal Treatment",
    beforeImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=200",
    afterImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 4,
    patientName: "Meenakshi Iyer",
    title: "Classical Dancer & Homemaker",
    quote: "My 9-year-old was petrified of dentists. Dr. Dharanshi and the painless computerized anesthetic delivery made his treatment a total breeze. He felt absolutely nothing, and was smiling throughout. Exceptional pediatric care!",
    stars: 5,
    treatmentType: "Painless Kid's Dentistry",
    beforeImg: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=200",
    afterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 5,
    patientName: "Rajesh Gupte",
    title: "Retired Bank Manager",
    quote: "Got full mouth implants and crowns. The bite perfection is incredible—I can eat apples and nuts with total ease. Dr. Mehul Hasti Babel restored my chewing efficiency and confidence completely. Highly recommended!",
    stars: 5,
    treatmentType: "Full Mouth Makeover",
    beforeImg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=200",
    afterImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const STATS = [
  { id: 1, number: "15+", label: "Years of Experience", iconName: "GraduationCap" },
  { id: 2, number: "5000+", label: "Happy Patients", iconName: "Smiley" },
  { id: 3, number: "98%", label: "Patient Satisfaction", iconName: "Star" },
  { id: 4, number: "24/7", label: "Emergency Support", iconName: "Users" },
  { id: 5, number: "15+", label: "Advanced Technologies", iconName: "BookOpen" }
];

export const FEATURES = [
  {
    id: 1,
    title: "Advanced Technology",
    description: "Equipped with high-definition digital scanners, 3D CBCT, and advanced lasers for unmatched precision.",
    iconName: "Trophy"
  },
  {
    id: 2,
    title: "Luxury Experience",
    description: "Premium soothing ambiance, absolute hygiene protocols, and comforting personalized care pathways.",
    iconName: "Crown"
  },
  {
    id: 3,
    title: "Expert Dentist",
    description: "Led by Dr. Mehul Hasti Babel, internationally certified MDS prosthodontist & cosmetic dentistry expert.",
    iconName: "Stethoscope"
  },
  {
    id: 4,
    title: "Personalized Care",
    description: "Every smile designed individually to match your facial midline, skin tone, and unique cosmetic goals.",
    iconName: "Heart"
  },
  {
    id: 5,
    title: "Pain-Free Procedures",
    description: "We use computerized anesthetic delivery, specialized laser treatment, and ultra-fine micro-needles.",
    iconName: "Lightning"
  },
  {
    id: 6,
    title: "Emergency Services",
    description: "24/7 round-the-clock emergency support via WhatsApp so we are always there when you need us.",
    iconName: "Phone"
  }
];

export const STEPS = [
  {
    id: 1,
    number: "01",
    title: "Book Appointment",
    description: "Schedule your luxury treatment session through our website form or instant WhatsApp chat.",
    iconName: "CalendarDays"
  },
  {
    id: 2,
    number: "02",
    title: "Advanced Diagnosis",
    description: "Get comprehensive mapping via digital intraoral scans, low-dose 3D CBCT imaging, and digital smile design.",
    iconName: "Eye"
  },
  {
    id: 3,
    number: "03",
    title: "Luxury Clinical Treatment",
    description: "Relax in our comfortable dental operatory while receiving expert care under 100% sterile clinical safety.",
    iconName: "Stethoscope"
  },
  {
    id: 4,
    number: "04",
    title: "Radiant Translucent Smile",
    description: "Step out with functional bite perfection, extreme comfort, and a dazzling, life-transforming smile.",
    iconName: "CheckCircle2"
  }
];

export const BLOGS = [
  {
    id: 1,
    title: "The Art of Cosmetic Smile Design – What Makes a Smile Look Truly Natural?",
    excerpt: "Learn how Dr. Mehul Hasti Babel combines state-of-the-art computer mapping with dental artistry to create custom, translucent, and realistic smiles.",
    content: "An attractive smile is not just about pearly white teeth; it is about how those teeth reflect light, coordinate with your lip contours, and balance with your facial midline. Digital Smile Design (DSD) captures high-definition portraits and facial dynamics to construct a customized virtual blueprint. By layering premium ceramic materials that mimic the subtle translucency of natural enamel, Dr. Mehul Hasti Babel ensures that your custom veneers look beautifully lifelike and completely natural in any lighting.",
    category: "Cosmetics",
    date: "June 20, 2026",
    author: "Dr. Mehul Hasti Babel",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600",
    readTime: "4 mins read"
  },
  {
    id: 2,
    title: "Clear Aligners vs. Traditional Braces – The Modern Orthodontic Choice",
    excerpt: "Discover how invisible clear aligners utilize 3D computer models to align your smile seamlessly without affecting your active lifestyle.",
    content: "Metal brackets and wires are no longer your only choice for a perfectly aligned smile. Advanced clear aligners are fabricated from medical-grade, transparent polymers that fit comfortably over your teeth. Through custom 3D computer simulations, we map the precise microscopic movement of each tooth. Aligners can be easily removed for meals, brushing, and speaking engagements, providing an incredibly discreet and highly effective aesthetic treatment.",
    category: "Orthodontics",
    date: "May 15, 2026",
    author: "Dr. Mehul Hasti Babel",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    readTime: "5 mins read"
  }
];

export const SMILE_GALLERY = [
  {
    id: 1,
    title: "Cosmetic Smile Makeover",
    category: "Veneers & Laminates",
    description: "Correction of adult crowding, heavy staining, and asymmetrical midline using 8 hand-crafted, ultra-thin porcelain veneers.",
    beforeImg: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600&h=400",
    afterImg: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=400",
    stats: "8 Premium E-Max Veneers • Shade OM1"
  },
  {
    id: 2,
    title: "Full-Mouth Dental Implant Rehab",
    category: "Implantology",
    description: "Restored full chewing function and facial support for a patient with severely worn and missing teeth using computer-guided titanium implants.",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=400",
    afterImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=400",
    stats: "Fixed Zirconia Bridge • Computer-Guided"
  },
  {
    id: 3,
    title: "Laser Gum Contouring & Bleaching",
    category: "Cosmetic Surgery",
    description: "Corrected a gummy smile and uneven gum margins with suture-free water-laser contouring, followed by in-office Zoom bleaching.",
    beforeImg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=400",
    afterImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=400",
    stats: "Stitch-Free Contouring • 8 Shades Whiter"
  }
];

export const CLINIC_BRANCHES = [
  {
    id: 1,
    name: "Mankhurd Branch",
    address: "Unique Dental Care, Shop No: 51, Building No: 22, Near Shiv Sena Shaka, PMG COLONY, Mankhurd (W), Mumbai, Maharashtra 400043",
    phone: "+91 91361 74840",
    email: "care@uniquedentalcare.in",
    timings: "Tue - Sun: 10:00 AM - 8:00 PM"
  },
  {
    id: 2,
    name: "Chembur Branch",
    address: "Unique Dental Care, Behind Chembur Shoppers Stop, Tilak Nagar, Chembur West, Mumbai, Maharashtra 400089",
    phone: "+91 91361 74840",
    email: "care@uniquedentalcare.in",
    timings: "Tue - Sun: 10:00 AM - 8:00 PM"
  }
];

export const FAQS = [
  {
    id: 1,
    question: "Is digital cosmetic smile design painful?",
    answer: "No, absolutely not. The diagnostic planning stage (high-definition photography, 3D intraoral scans, and interactive try-on blueprints) is completely non-invasive and painless. When preparing teeth for porcelain veneers or laminates, we use micro-precision techniques that preserve 95%+ of your natural tooth enamel under computer-guided local numbing gel and anesthetic STA systems, ensuring zero pain."
  },
  {
    id: 2,
    question: "How long do porcelain veneers and laminates last?",
    answer: "With proper clinical bonding and standard oral hygiene, premium E-Max and feldspathic glass-ceramic veneers last between 15 to 20 years. Because we utilize high-magnification dental microscopes during tooth preparation, we ensure a perfect microscopic marginal seal that prevents secondary decay and protects the underlying structures indefinitely."
  },
  {
    id: 3,
    question: "Can I get a dental implant on the same day as my tooth extraction?",
    answer: "Yes. In many cases, we utilize immediate-loading computer-guided implants. Guided by 3D CBCT scans, Dr. Mehul Hasti Babel can gently extract the failing root and place the biocompatible Swiss titanium implant immediately in the same slot. In-house digital CAD-CAM milling then allows us to place a temporary, natural-looking tooth over the implant on the very same day, so you never walk out toothless."
  },
  {
    id: 4,
    question: "Why do you use microscopic root canals instead of traditional ones?",
    answer: "Traditional root canals rely on raw visual guessing, leading to missed accessory canals and persistent micro-infections. By using a Carl Zeiss dental microscope at 20x magnification, our clinicians can map the microscopic anatomy of canal pulp precisely. Paired with laser-assisted canal sterilization, we achieve a 99%+ success rate and can complete the procedure in a single, painless sitting."
  },
  {
    id: 5,
    question: "Are clear aligners suitable for adults, and how do they work?",
    answer: "Clear aligners are highly recommended for adults due to their virtual invisibility and comfort. We scan your teeth in 3D using the 3Shape TRIOS, and generate a step-by-step physical tooth movement animation on-screen. You receive a series of clear, medical-grade thermoplastic aligners that you swap out every 10 days. They are completely removable, allowing you to eat, brush, and maintain corporate interactions without braces."
  },
  {
    id: 6,
    question: "What are your sterilisation, hygiene, and patient safety standards?",
    answer: "We adhere strictly to international hospital-grade Class-B autoclaving guidelines. Every physical surgical kit is sealed individually in sterilization pouches with chemical indicators, and opened only in front of the patient. Operatory air is continuously decontaminated using medical HEPA and UV air sanitizers. Our water lines are fully sterilized to prevent biofilm buildup."
  }
];

export const TECH_DATA = [
  {
    id: 1,
    title: "Carl Zeiss Dental Microscope",
    specs: "Up to 24x magnification with high-intensity shadow-free LED illumination.",
    clinicalUse: "Microscopic root canals, ultra-thin veneer margins, micro-sutures.",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: 2,
    title: "3Shape TRIOS Intraoral Scanner",
    specs: "High-speed color scanner with powder-free 3D capture of arches.",
    clinicalUse: "Digital study models, aligner tracking, crown milling blueprint.",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: 3,
    title: "STA Computer-Controlled Anesthesia",
    specs: "Continuous micro-processor drug-delivery feedback system.",
    clinicalUse: "Single-tooth anesthesia with zero facial numbness or injection anxiety.",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600&h=400"
  }
];
