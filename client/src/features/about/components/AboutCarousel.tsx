"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { ShieldCheck, Sparkle, CaretLeft, CaretRight, Cpu, Eye, Waves } from "@phosphor-icons/react";

interface InfrastructureSlide {
  id: number;
  url: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

const SLIDES: InfrastructureSlide[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1000&h=667",
    title: "Micro-Surgery Treatment Suite",
    category: "High-Magnification Diagnostics",
    description: "Every treatment chair is paired with a Carl Zeiss microscopic dental camera, allowing up to 20x magnification for immaculate accuracy.",
    badge: "Zone 01 • Surgery",
    icon: <Eye size={16} className="text-[#00A8E8]" weight="fill" />
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000&h=667",
    title: "CAD-CAM Robotic Prosthetic Lab",
    category: "Same-Day Restorations",
    description: "Our in-house automated milling machines carve ultra-durable zirconia veneers and crowns instantly to match your smile geometry.",
    badge: "Zone 02 • Digital Lab",
    icon: <Cpu size={16} className="text-[#00A8E8]" weight="fill" />
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000&h=667",
    title: "Class-B Sterilization Center",
    category: "Hospital-Grade Hygiene",
    description: "A triple-vacuum autoclave laboratory ensuring 100% molecular sanitization of surgical toolkits with sealed physical pouches.",
    badge: "Zone 03 • Sterilization",
    icon: <ShieldCheck size={16} className="text-emerald-400" weight="fill" />
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000&h=667",
    title: "Biolase Laser Surgical Unit",
    category: "No-Drill Minimally Invasive",
    description: "Equipped with advanced water-and-laser beams to recontour soft tissue, clean roots, and whiten teeth without standard suture wounds.",
    badge: "Zone 04 • Laser Suite",
    icon: <Waves size={16} className="text-[#00A8E8]" weight="fill" />
  }
];

export default function AboutCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay function using interval
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6000); // changes every 6 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="space-y-6 w-full">
      {/* Top Title/Visual Indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00A8E8] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold">
            Virtual Tour • Digital Ecosystem
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#005B96] bg-blue-50 px-2.5 py-1 rounded-full">
          <span>{current + 1}</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-400">{count}</span>
        </div>
      </div>

      {/* Main Carousel Element */}
      <div className="relative">
        <Carousel setApi={setApi} className="w-full" opts={{ loop: true, align: "start" }}>
          <CarouselContent>
            {SLIDES.map((slide, index) => (
              <CarouselItem key={slide.id} className="basis-full">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[3/2] shadow-xl border border-slate-100 group bg-slate-950">
                  {/* Slide Image */}
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dark Elegant Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-slate-900/90 text-white font-mono font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-white/10">
                    {slide.icon}
                    <span>{slide.badge}</span>
                  </div>

                  {/* Caption Info Box - bottom of slide */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-left text-white space-y-1.5">
                    <span className="text-[10px] sm:text-xs font-bold text-[#00A8E8] uppercase tracking-wider block font-sans">
                      {slide.category}
                    </span>
                    <h3 className="font-playfair font-bold text-lg sm:text-xl md:text-2xl leading-tight">
                      {slide.title}
                    </h3>
                    <p className="font-inter text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl line-clamp-2 group-hover:text-white transition-colors duration-300">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Luxury Custom-aligned Navigation Buttons on Carousel hover */}
          <div className="absolute top-1/2 -translate-y-1/2 left-3 z-10 opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => api?.scrollPrev()}
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg border border-slate-100 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              title="Previous Infrastructure"
            >
              <CaretLeft size={18} weight="bold" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-3 z-10 opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => api?.scrollNext()}
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg border border-slate-100 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              title="Next Infrastructure"
            >
              <CaretRight size={18} weight="bold" />
            </button>
          </div>
        </Carousel>
      </div>

      {/* Modern Horizontal Navigation Dots Indicators */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`transition-all duration-500 cursor-pointer ${
              current === index 
                ? "w-8 h-2 rounded-full bg-[#005B96]" 
                : "w-2 h-2 rounded-full bg-slate-200 hover:bg-slate-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
