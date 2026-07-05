import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

// Dental Implants
export function DentalImplantsIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Tooth Crown */}
      <path d="M7 6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2H7V6z" />
      {/* Gum Line */}
      <path d="M4 8h16" />
      {/* Implant Post / Abutment */}
      <path d="M12 8v4" />
      {/* Screw Thread Body */}
      <path d="M10 12h4" />
      <path d="M10 15h4" />
      <path d="M11 18h2" />
      <path d="M12 12v8" />
    </svg>
  );
}

// Root Canal Treatment
export function RootCanalIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Outer Tooth Shape */}
      <path d="M6 5c0-1.5 1.5-2 3-2s2 1 3 1 1.5-1 3-1 3 .5 3 2c0 2-1 4-1 7 0 2.5 2 3.5 1 5s-3 3-5 3c-.5 0-1-.5-1-1s-.5-1-1-1-1 .5-1 1-.5 1-1 1c-2 0-4-1.5-5-3s1-2.5 1-5c0-3-1-5-1-7z" />
      {/* Root Canal Path 1 */}
      <path d="M9.5 4v5c0 1.5-1 2.5-1 4s.5 2 1.5 3.5" strokeDasharray="1 1" />
      {/* Root Canal Path 2 */}
      <path d="M14.5 4v5c0 1.5 1 2.5 1 4s-.5 2-1.5 3.5" strokeDasharray="1 1" />
      {/* Healing Wave */}
      <path d="M12 7v4" className="text-sky-500" />
    </svg>
  );
}

// Teeth Whitening
export function TeethWhiteningIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Tooth */}
      <path d="M6 5c0-1.5 1.5-2 3-2s2 1 3 1 1.5-1 3-1 3 .5 3 2c0 2-1 4-1 7 0 2.5 2 3.5 1 5s-3 3-5 3c-.5 0-1-.5-1-1s-.5-1-1-1-1 .5-1 1-.5 1-1 1c-2 0-4-1.5-5-3s1-2.5 1-5c0-3-1-5-1-7z" />
      {/* Sparkles */}
      <path d="M18 2l1 2.5L21.5 5 19 6 18 8.5 17 6l-2.5-1 2.5-1z" fill="currentColor" stroke="none" className="text-amber-400" />
      <path d="M4 11l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" fill="currentColor" stroke="none" className="text-amber-400" />
      <path d="M12 11l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" fill="currentColor" stroke="none" className="text-sky-400" />
    </svg>
  );
}

// Dental Crowns
export function DentalCrownsIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Crown shape */}
      <path d="M4 12l2-7 4 3 2-4 2 4 4-3 2 7H4z" fill="none" />
      {/* Lower Tooth base */}
      <path d="M6 14c0 1.5 1.5 2 3 2s2-1 3-1 1.5 1 3 1 3-.5 3-2" />
      <path d="M5 12v3c0 2 1.5 3 4 3h6c2.5 0 4-1 4-3v-3" />
      {/* Jewels/Detail */}
      <circle cx="6" cy="5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Veneers
export function VeneersIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Original Tooth outline (dashed) */}
      <path d="M8 7c0-1 .5-1.5 1.5-1.5s1 .5 1.5.5 1-.5 1.5-.5 2 .5 2 1.5c0 1-.5 2.5-.5 4.5 0 1.5 1 2 1 3s-1.5 2-2.5 2H9.5C8.5 18.5 7 18 7 17s1-1.5 1-3c0-2-.5-3.5-.5-4.5z" strokeDasharray="2 2" className="opacity-50" />
      {/* Perfect Veneer Shell */}
      <path d="M10 4c0-1.5 1.5-2 3-2s2 1 3 1 1.5-1 3-1 3 .5 3 2c0 2-1 4-1 7 0 2.5 2 3.5 1 5s-3 3-5 3c-.5 0-1-.5-1-1" strokeWidth={2.5} className="text-sky-500" />
      {/* Application Arrow */}
      <path d="M4 10h5M8 7l2 3-2 3" />
    </svg>
  );
}

// Braces
export function BracesIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Tooth */}
      <path d="M6 5c0-1.5 1.5-2 3-2s2 1 3 1 1.5-1 3-1 3 .5 3 2c0 2-1 4-1 7 0 2.5 2 3.5 1 5s-3 3-5 3c-.5 0-1-.5-1-1s-.5-1-1-1-1 .5-1 1-.5 1-1 1c-2 0-4-1.5-5-3s1-2.5 1-5c0-3-1-5-1-7z" />
      {/* Orthodontic Bracket */}
      <rect x="9" y="8" width="6" height="4" rx="1" fill="none" />
      {/* Vertical slot */}
      <path d="M12 7v6" />
      {/* Horizontal archwire */}
      <path d="M3 10h18" strokeWidth={2} className="text-slate-400" />
      {/* Tiny wire ties */}
      <path d="M8 9h1M15 9h1" />
    </svg>
  );
}

// Teeth Cleaning
export function TeethCleaningIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Tooth */}
      <path d="M6 5c0-1.5 1.5-2 3-2s2 1 3 1 1.5-1 3-1 3 .5 3 2c0 2-1 4-1 7 0 2.5 2 3.5 1 5s-3 3-5 3c-.5 0-1-.5-1-1s-.5-1-1-1-1 .5-1 1-.5 1-1 1c-2 0-4-1.5-5-3s1-2.5 1-5c0-3-1-5-1-7z" />
      {/* Bubbles / Water spray */}
      <circle cx="17" cy="6" r="1.5" fill="currentColor" stroke="none" className="text-sky-400" />
      <circle cx="19" cy="11" r="1" fill="currentColor" stroke="none" className="text-sky-300" />
      <circle cx="5" cy="15" r="1" fill="currentColor" stroke="none" className="text-sky-300" />
      {/* Water Jet Nozzle tool */}
      <path d="M18 4l2-2" />
      <path d="M15 8c1-.5 2-.5 3 0" className="text-sky-500" />
      <path d="M14 11c1.5-.5 2.5-.2 3 .5" className="text-sky-500" />
    </svg>
  );
}

// Tooth Extraction
export function ToothExtractionIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Tooth being lifted */}
      <path d="M8 8c0-1.5 1.5-2 3-2s2 1 3 1 1.5-1 3-1 3 .5 3 2c0 1.5-.5 3-.5 5 0 1.5 1 2.5 1 3.5s-2 2-3.5 2c-.4 0-.8-.3-.8-.7" />
      {/* Empty gum socket (dashed representation) */}
      <path d="M6 18c0-2-1-3-1-4.5s1.5-1.5 2.5-1.5 1.5.5 2.5.5 1.5-.5 2.5-.5 2.5 0 2.5 1.5-.5 2.5-.5 4.5c0 1-1.5 2-3.5 2h-1c-.5 0-1-.5-1-1s-.5-1-1-1-1 .5-1 1-.5 1-1 1c-1 0-2-.5-2.5-1.5z" strokeDasharray="2 2" className="opacity-40" />
      {/* Upward force arrow */}
      <path d="M4 11V5M4 5l-2 2M4 5l2 2" className="text-sky-500" />
    </svg>
  );
}

// Gum Treatment
export function GumTreatmentIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Multiple teeth lined up */}
      <path d="M5 4c0-1 1-1.5 2-1.5s1.5.5 2 .5 1-.5 2-.5 2 .5 2 1.5v6c0 1-.5 2-.5 3h-.5" />
      <path d="M11 4c0-1 1-1.5 2-1.5s1.5.5 2 .5 1-.5 2-.5 2 .5 2 1.5v6c0 1-.5 2-.5 3h-.5" />
      {/* Healthy wavy firm gum contours */}
      <path d="M3 13c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0v5c0 2-2 3-5 3H8c-3 0-5-1-5-3v-5z" fill="none" strokeWidth={2.5} className="text-[#FF9EAA]" />
      {/* Laser line sterilizing */}
      <path d="M4 17h16" strokeDasharray="3 3" className="text-sky-500" />
    </svg>
  );
}

// Smile Makeover
export function SmileMakeoverIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Smiling Lips */}
      <path d="M3 10c2 3 5 5 9 5s7-2 9-5c-2 5-5 7-9 7s-7-2-9-7z" fill="none" strokeWidth={2} />
      {/* Sparkling clean teeth grid inside */}
      <path d="M7 11.5c1 .5 2.5.5 5 .5s4-.5 5-.5" />
      <path d="M9 11v1M12 11.5v1M15 11v1" />
      {/* Magic Wand sparkler */}
      <path d="M19 3l1.5 1.5L22 3l-1.5-1.5z" fill="currentColor" stroke="none" className="text-amber-400" />
      <circle cx="15" cy="4" r="1" fill="currentColor" stroke="none" className="text-amber-400" />
    </svg>
  );
}

// Pediatric Dentistry
export function PediatricDentistryIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Smaller cute baby tooth */}
      <path d="M8 8c0-1 1-1.5 2-1.5s1 .5 2 .5 1-.5 2-.5 2 .5 2 1.5c0 1-.3 2-.3 3.5 0 1.5 1 2 1 3s-1 1.5-2 1.5c-.3 0-.6-.3-.6-.6s-.3-.6-.6-.6-.6.3-.6.6-.3.6-.6.6c-1 0-2-.5-2.5-1.5s.6-1.5.6-3c0-1.5-.7-2.5-.7-3.5z" />
      {/* Smiling face on the tooth */}
      <circle cx="10.5" cy="11" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="11" r="0.75" fill="currentColor" stroke="none" />
      <path d="M11 13a1 1 0 0 0 2 0" />
      {/* Star of bravery */}
      <path d="M17 3l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8z" fill="currentColor" stroke="none" className="text-amber-400 animate-pulse" />
    </svg>
  );
}

// Oral Surgery
export function OralSurgeryIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Protective medical cross / shield in background */}
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth={1.5} className="opacity-30" />
      {/* Tooth inside safety shield */}
      <path d="M9.5 9c0-1 .5-1.5 1.5-1.5s1 .3 1.5.3 1-.3 1.5-.3 2 .5 2 1.5c0 1-.3 2-.3 3.5 0 1 .5 1.5.5 2.2s-1 1.3-2 1.3c-.3 0-.5-.2-.5-.5s-.2-.5-.5-.5-.5.2-.5.5-.2.5-.5.5c-.8 0-1.5-.5-1.8-1.3s.4-1.2.4-2.2c0-1-.8-1.7-.8-2.7z" />
      {/* Surgical precision focus crosshair */}
      <path d="M12 4v2M12 16v2M4 11h2M16 11h2" className="text-rose-500" />
    </svg>
  );
}

// Map treatment index to correct icon
export function getTreatmentIcon(id: number, className = "w-6 h-6", size = 24) {
  switch (id) {
    case 1: // Cosmetic Smile Design
    case 13: // Digital Smile Design
      return <SmileMakeoverIcon className={className} size={size} />;
    case 2: // Teeth Whitening/Bleaching
      return <TeethWhiteningIcon className={className} size={size} />;
    case 3: // Dental Implants
    case 8: // Full Mouth Makeover
      return <DentalImplantsIcon className={className} size={size} />;
    case 4: // Crown & Bridge
      return <DentalCrownsIcon className={className} size={size} />;
    case 5: // Root Canal Treatment
      return <RootCanalIcon className={className} size={size} />;
    case 6: // Orthodontics (Braces/Aligners)
      return <BracesIcon className={className} size={size} />;
    case 7: // Periodontal Treatment
      return <GumTreatmentIcon className={className} size={size} />;
    case 9: // Composite Bonding
      return <VeneersIcon className={className} size={size} />;
    case 10: // Veneers & Laminates
      return <VeneersIcon className={className} size={size} />;
    case 11: // Teeth Cleaning & Polishing
      return <TeethCleaningIcon className={className} size={size} />;
    case 12: // Laser Dentistry
      return <OralSurgeryIcon className={className} size={size} />;
    case 14: // Painless Treatments
      return <PediatricDentistryIcon className={className} size={size} />;
    case 15: // Emergency Dental Care
      return <ToothExtractionIcon className={className} size={size} />;
    default:
      return <SmileMakeoverIcon className={className} size={size} />;
  }
}
