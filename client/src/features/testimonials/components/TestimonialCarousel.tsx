"use client"

import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTestimonials } from "../hooks/useTestimonials.js";
import { COLORS } from "@/src/features/shared/constants/colors";
import { Star, CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";
import { Skeleton } from "../../shared/components/Skeleton.js";

export default function TestimonialCarousel() {
  const { testimonials, loading, error } = useTestimonials();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-sm font-bold tracking-wider uppercase text-secondary font-inter text-[#00A8E8]">
            PATIENT JOURNEYS
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            What Our Patients Say
          </h2>
          <p className="font-inter text-slate-500 text-sm sm:text-base leading-relaxed">
            Real smiles transformed using our fully digital workflow. Read about patients who traveled internationally to experience pain-free precision.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {loading ? (
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 space-y-4">
              <Skeleton className="h-4 w-1/4 rounded" />
              <Skeleton className="h-8 w-2/3 rounded" />
              <Skeleton className="h-20 w-full rounded" />
            </div>
          ) : (
            <>
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="flex-[0_0_100%] min-w-0 px-4">
                      {/* Card Frame */}
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-12 text-left h-full">
                        
                        {/* Left Column: Visual Case Studies */}
                        <div className="md:col-span-5 bg-slate-900 p-6 flex flex-col justify-center items-center relative text-white space-y-4">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#00A8E8] border border-[#00A8E8]/30 px-2.5 py-1 rounded-full absolute top-4 left-4">
                            Case Study
                          </span>
                          <span className="text-[10px] uppercase font-semibold text-slate-400 absolute top-5 right-4 font-inter">
                            {testimonial.treatmentType}
                          </span>

                          {/* Grid of Before/After images */}
                          <div className="grid grid-cols-2 gap-3 w-full pt-6">
                            {/* Before */}
                            <div className="space-y-1">
                              <span className="block text-[10px] font-bold text-slate-400 uppercase text-center font-inter">
                                Healthy Diagnostic
                              </span>
                              <div className="rounded-lg overflow-hidden border border-white/10 aspect-square bg-slate-800">
                                <img
                                  src={testimonial.beforeImg}
                                  alt="Diagnostic Scan View"
                                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-300"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            </div>

                            {/* After */}
                            <div className="space-y-1">
                              <span className="block text-[10px] font-bold text-secondary uppercase text-center font-inter text-[#00A8E8]">
                                Restored Smile
                              </span>
                              <div className="rounded-lg overflow-hidden border border-[#00A8E8]/30 aspect-square bg-slate-800">
                                <img
                                  src={testimonial.afterImg}
                                  alt="Transformed Smile View"
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="text-center font-inter text-[11px] text-slate-400 pt-2 font-medium">
                            Clinical scan of treatment area vs. final happy patient smile
                          </div>
                        </div>

                        {/* Right Column: Narrative content */}
                        <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                          {/* Quote icon & Star ratings */}
                          <div className="flex justify-between items-start">
                            <Quotes size={48} weight="duotone" className="text-[#00A8E8] opacity-75 shrink-0" />
                            
                            {/* Stars */}
                            <div className="flex gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  size={18}
                                  weight="fill"
                                  className="text-[#894600]"
                                />
                              ))}
                            </div>
                          </div>

                          {/* Quote Text */}
                          <p className="font-inter text-slate-600 text-base sm:text-lg italic leading-relaxed font-medium">
                            "{testimonial.quote}"
                          </p>

                          {/* Patient Profile */}
                          <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                            <div>
                              <h4 className="font-playfair font-bold text-lg text-slate-900 leading-tight">
                                {testimonial.patientName}
                              </h4>
                              <span className="font-inter text-xs text-slate-400 font-semibold uppercase tracking-wider">
                                {testimonial.title}
                              </span>
                            </div>
                            
                            <span className="bg-slate-50 text-slate-600 font-inter text-xs font-semibold px-3 py-1 rounded-full border border-slate-100">
                              {testimonial.treatmentType}
                            </span>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={scrollPrev}
                  className="p-2.5 rounded-full border bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[#005B96] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center"
                  aria-label="Previous Testimonial"
                >
                  <CaretLeft size={20} weight="bold" />
                </button>
                
                {/* Bullet Indicators */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollTo(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        selectedIndex === idx ? "w-6" : "w-2.5 bg-slate-300"
                      }`}
                      style={{
                        backgroundColor: selectedIndex === idx ? COLORS.primary : undefined,
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={scrollNext}
                  className="p-2.5 rounded-full border bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[#005B96] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center"
                  aria-label="Next Testimonial"
                >
                  <CaretRight size={20} weight="bold" />
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
}
