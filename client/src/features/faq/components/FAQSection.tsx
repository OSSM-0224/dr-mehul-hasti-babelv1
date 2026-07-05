"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Question, Info } from "@phosphor-icons/react";
import { useFaq } from "../hooks/useFaq.js";
import { Skeleton } from "../../shared/components/Skeleton.js";

export default function FAQSection() {
  const { faqs, loading, error } = useFaq();
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white text-left overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-sm font-bold tracking-wider uppercase font-inter text-[#00A8E8]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Consulting & Diagnostic FAQ Guidelines
          </h2>
          <p className="font-inter text-slate-500 text-sm sm:text-base leading-relaxed">
            Have questions about clinical protocols, safety compliance, or treatment timelines? Read our comprehensive guidelines from Dr. Mehul Hasti Babel.
          </p>
        </div>

        {/* Elegant Accordion Container */}
        <div className="space-y-4 font-inter">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl p-5 space-y-2">
                <Skeleton className="h-6 w-3/4 rounded" />
                <Skeleton className="h-4 w-1/2 rounded" />
              </div>
            ))
          ) : (
            faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-slate-50/50 border-[#005B96]/30 shadow-md"
                      : "bg-white border-slate-150 hover:border-[#005B96]/20 hover:shadow-sm"
                  }`}
                >
                  {/* Trigger Row */}
                  <button
                    onClick={() => handleToggle(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-3.5 pr-4">
                      <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 transition-colors duration-300 ${
                        isOpen ? "bg-[#005B96] text-white" : "bg-slate-50 text-slate-400"
                      }`}>
                        <Question size={18} weight={isOpen ? "fill" : "bold"} />
                      </div>
                      <span className={`font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                        isOpen ? "text-[#005B96]" : "text-slate-800"
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen ? "bg-[#005B96]/10 text-[#005B96] rotate-180" : "bg-slate-100 text-slate-500"
                    }`}>
                      {isOpen ? (
                        <Minus size={14} weight="bold" />
                      ) : (
                        <Plus size={14} weight="bold" />
                      )}
                    </div>
                  </button>

                  {/* Animated Expandable Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-0 pl-[52px]">
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line border-t border-slate-100/50 pt-3">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Dynamic Consulting Footer */}
        <div className="mt-12 p-4 bg-slate-50/50 border border-slate-100 rounded-2xl flex items-center gap-3 text-slate-500 text-xs sm:text-sm font-sans max-w-2xl mx-auto">
          <Info size={18} className="text-[#005B96] shrink-0" weight="fill" />
          <p>
            Still have queries or need a second opinion on other complex procedures? Connect with our digital concierge desk on <strong>WhatsApp support</strong> for immediate clinical feedback.
          </p>
        </div>

      </div>
    </section>
  );
}
