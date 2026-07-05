"use client"

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkle, ArrowsLeftRight, CaretRight } from "@phosphor-icons/react";
import { useGallery } from "../hooks/useGallery.js";
import { Skeleton } from "../../shared/components/Skeleton.js";

export default function SmileGallery() {
  const { gallery, loading, error } = useGallery();
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = gallery[activeCaseIndex];

  // Handle slide interaction
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDragging.current = true;
    if ("touches" in e) {
      handleMove(e.touches[0].clientX);
    } else {
      handleMove(e.clientX);
    }
  };

  const onContainerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    if ("touches" in e) {
      handleMove(e.touches[0].clientX);
    } else {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-sm font-bold tracking-wider uppercase font-inter text-[#00A8E8]">
            SMILE GALLERY (BEFORE / AFTER)
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Visual Proof of Clinical Artistry
          </h2>
          <p className="font-inter text-slate-500 text-sm sm:text-base leading-relaxed">
            Drag the slider divider left and right to inspect the seamless translucency, alignment, and tissue healing achieved by Dr. Mehul Hasti Babel's treatments.
          </p>
        </div>

        {loading || !activeCase ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Skeleton className="w-full aspect-[3/2] rounded-2xl" />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <Skeleton className="h-6 w-1/4 rounded-full" />
              <Skeleton className="h-10 w-3/4 rounded" />
              <Skeleton className="h-20 w-full rounded" />
            </div>
          </div>
        ) : (
          /* Interactive Showcase Row */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Drag Slider */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div 
                ref={containerRef}
                onMouseDown={startDragging}
                onTouchStart={startDragging}
                onMouseMove={onContainerMove}
                onTouchMove={onContainerMove}
                className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 cursor-ew-resize select-none bg-slate-900"
              >
                {/* After Image (Full width background) */}
                <img 
                  src={activeCase.afterImg} 
                  alt="After treatment result"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-emerald-500/90 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm shadow font-sans z-20">
                  After
                </div>

                {/* Before Image (Left clipped overlay) */}
                <div 
                  className="absolute inset-0 overflow-hidden pointer-events-none z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src={activeCase.beforeImg} 
                    alt="Before treatment condition"
                    className="absolute inset-0 w-[100vw] h-full object-cover max-w-none"
                    style={{ width: containerRef.current?.getBoundingClientRect().width }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm shadow font-sans z-20">
                  Before
                </div>

                {/* Slider Handle Divider */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg border border-slate-200 hover:scale-105 active:scale-95 transition-transform">
                    <ArrowsLeftRight size={16} weight="bold" />
                  </div>
                </div>
              </div>

              {/* Slider Instructions */}
              <p className="text-xs text-slate-400 font-medium font-sans mt-4 text-center flex items-center gap-1.5 justify-center">
                <span>●</span>
                <span>Drag the center bar to compare before and after</span>
                <span>●</span>
              </p>
            </div>

            {/* Right Side: Case Details & Switcher */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#00A8E8] uppercase tracking-wider bg-[#00A8E8]/10 px-3 py-1 rounded-full font-inter w-fit block">
                  {activeCase.category}
                </span>
                
                <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                  {activeCase.title}
                </h3>
                
                <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeCase.description}
                </p>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                    Clinical Specifications
                  </span>
                  <span className="font-inter font-bold text-sm text-[#005B96] flex items-center gap-1.5">
                    <Sparkle size={16} className="text-[#00A8E8]" weight="fill" />
                    {activeCase.stats}
                  </span>
                </div>
              </div>

              {/* Selector list with interactive indicator */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h4 className="font-playfair font-semibold text-slate-800 text-sm uppercase tracking-wider">
                  Select Case Study
                </h4>
                <div className="flex flex-col gap-2.5">
                  {gallery.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveCaseIndex(idx);
                        setSliderPosition(50);
                      }}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer font-inter ${
                        activeCaseIndex === idx
                          ? "bg-[#005B96] text-white border-transparent shadow-md"
                          : "bg-white text-slate-700 border-slate-150 hover:bg-slate-50"
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <span className={`block text-[10px] uppercase font-bold tracking-wider ${
                          activeCaseIndex === idx ? "text-blue-200" : "text-slate-400"
                        }`}>
                          Case 0{idx + 1} • {item.category}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold line-clamp-1">{item.title}</span>
                      </div>
                      {activeCaseIndex === idx ? (
                        <Sparkle size={18} weight="fill" className="text-amber-400 shrink-0" />
                      ) : (
                        <CaretRight size={16} className="text-slate-400 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
