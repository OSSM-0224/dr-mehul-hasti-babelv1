"use client"

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Sparkle, ArrowsLeftRight, CaretRight } from "@phosphor-icons/react";
import { useGallery } from "../hooks/useGallery.js";
import { Skeleton } from "../../shared/components/Skeleton.js";

export default function SmileGallery() {
  const { gallery, loading, error } = useGallery();
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = gallery[activeCaseIndex];

  // Track container width live — fixes stale calculations on resize/rotate
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const updateWidth = () => setContainerWidth(el.getBoundingClientRect().width);
    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    },
    [handleMove]
  );

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseUp, handleMouseMove]);

  // Native, non-passive touchmove so we can preventDefault and stop page
  // scroll while the user is actively dragging the slider divider.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };

    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, [handleMove]);

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    if ("touches" in e) {
      handleMove(e.touches[0].clientX);
    } else {
      e.preventDefault();
      handleMove(e.clientX);
    }
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-12 lg:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase font-inter text-[#00A8E8]">
            SMILE GALLERY (BEFORE / AFTER)
          </span>
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight">
            Visual Proof of Clinical Artistry
          </h2>
          <p className="font-inter text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-0">
            Drag the slider divider left and right to inspect the seamless translucency, alignment, and tissue healing achieved by Dr. Mehul Hasti Babel's treatments.
          </p>
        </div>

        {loading || !activeCase ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <Skeleton className="w-full aspect-[4/3] sm:aspect-[3/2] rounded-2xl" />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <Skeleton className="h-6 w-1/4 rounded-full" />
              <Skeleton className="h-10 w-3/4 rounded" />
              <Skeleton className="h-20 w-full rounded" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Drag Slider */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div
                ref={containerRef}
                onMouseDown={startDragging}
                onTouchStart={startDragging}
                style={{ touchAction: "none" }}
                className="relative w-full aspect-[4/3] sm:aspect-[3/2] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-slate-100 cursor-ew-resize select-none bg-slate-900"
              >
                <img
                  src={activeCase.afterImg}
                  alt="After treatment result"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-500/90 text-white font-bold text-[9px] sm:text-[10px] uppercase tracking-wider px-2.5 py-1 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm shadow font-sans z-20">
                  After
                </div>

                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImg}
                    alt="Before treatment condition"
                    className="absolute inset-0 h-full object-cover max-w-none"
                    style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
                    referrerPolicy="no-referrer"
                    draggable={false}
                  />
                </div>
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-slate-900/90 text-white font-bold text-[9px] sm:text-[10px] uppercase tracking-wider px-2.5 py-1 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm shadow font-sans z-20">
                  Before
                </div>

                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg border border-slate-200 hover:scale-105 active:scale-95 transition-transform">
                    <ArrowsLeftRight size={16} weight="bold" />
                  </div>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-400 font-medium font-sans mt-3 sm:mt-4 text-center flex items-center gap-1.5 justify-center">
                <span>●</span>
                <span>Drag the center bar to compare before and after</span>
                <span>●</span>
              </p>
            </div>

            {/* Right: Case Details & Switcher */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6 flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[11px] sm:text-xs font-bold text-[#00A8E8] uppercase tracking-wider bg-[#00A8E8]/10 px-3 py-1 rounded-full font-inter w-fit block">
                  {activeCase.category}
                </span>

                <h3 className="font-playfair font-bold text-xl sm:text-2xl md:text-3xl text-slate-900 leading-tight">
                  {activeCase.title}
                </h3>

                <p className="font-inter text-slate-600 text-sm md:text-base leading-relaxed">
                  {activeCase.description}
                </p>

                <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                  <span className="block text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                    Clinical Specifications
                  </span>
                  <span className="font-inter font-bold text-xs sm:text-sm text-[#005B96] flex items-center gap-1.5">
                    <Sparkle size={16} className="text-[#00A8E8] shrink-0" weight="fill" />
                    {activeCase.stats}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h4 className="font-playfair font-semibold text-slate-800 text-sm uppercase tracking-wider">
                  Select Case Study
                </h4>

                <div
                  className="
                    flex gap-2.5
                    flex-row overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0
                    snap-x snap-mandatory scrollbar-hide
                    lg:flex-col lg:overflow-visible lg:pb-0 lg:snap-none
                  "
                >
                  {gallery.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveCaseIndex(idx);
                        setSliderPosition(50);
                      }}
                      className={`flex items-center justify-between gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer font-inter shrink-0 snap-start
                        w-[78%] xs:w-[65%] sm:w-[45%] lg:w-full
                        ${activeCaseIndex === idx
                          ? "bg-[#005B96] text-white border-transparent shadow-md"
                          : "bg-white text-slate-700 border-slate-150 hover:bg-slate-50"
                        }`}
                    >
                      <div className="space-y-0.5 pr-2 min-w-0">
                        <span className={`block text-[10px] uppercase font-bold tracking-wider ${activeCaseIndex === idx ? "text-blue-200" : "text-slate-400"
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