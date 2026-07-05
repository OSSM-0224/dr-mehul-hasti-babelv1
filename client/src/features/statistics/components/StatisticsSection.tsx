"use client"

import React from "react";
import { Card, CardContent } from "@/src/features/shared/components/Card";
import { AnimatedCounter } from "./AnimatedCounter";
import { GraduationCap, Smiley, Star, Users, BookOpen } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useStatistics } from "../hooks/useStatistics.js";
import { Skeleton } from "../../shared/components/Skeleton.js";

const getIcon = (name: string) => {
  switch (name) {
    case "GraduationCap": return <GraduationCap size={40} weight="duotone" className="text-[#00A8E8]" />;
    case "Smiley": return <Smiley size={40} weight="duotone" className="text-[#00A8E8]" />;
    case "Star": return <Star size={40} weight="duotone" className="text-[#00A8E8]" />;
    case "Users": return <Users size={40} weight="duotone" className="text-[#00A8E8]" />;
    case "BookOpen": return <BookOpen size={40} weight="duotone" className="text-[#00A8E8]" />;
    default: return <GraduationCap size={40} weight="duotone" className="text-[#00A8E8]" />;
  }
};

const parseNumberAndSuffix = (str: string) => {
  // Extract number
  const num = parseInt(str.replace(/[^0-9]/g, ""), 10) || 0;
  // Extract non-digits for suffix
  const suffix = str.replace(/[0-9]/g, "");
  return { num, suffix };
};

export function StatisticsSection() {
  const { statistics, loading, error } = useStatistics();

  return (
    <section className="w-full py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-900 to-slate-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-full inline-block mb-3 font-inter">
            Clinical Milestones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-white">
            Our Impact by the Numbers
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto font-inter">
            India's premier digital dental center, trusted by thousands of patients across Pune, Maharashtra, and worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-slate-800/50 rounded-2xl p-6 h-36 flex flex-col justify-center items-center space-y-2">
                <Skeleton className="h-10 w-10 rounded-full bg-slate-700/50" />
                <Skeleton className="h-6 w-1/2 rounded bg-slate-700/50" />
                <Skeleton className="h-4 w-3/4 rounded bg-slate-700/50" />
              </div>
            ))
          ) : (
            statistics.map((stat, index) => {
              const { num, suffix } = parseNumberAndSuffix(stat.number);
              const delay = index * 150;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: delay / 1000 }}
                  className="h-full"
                >
                  <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm p-6 text-center h-full hover:bg-slate-800 transition-all duration-300 hover:border-secondary/30 flex flex-col justify-center shadow-lg">
                    <CardContent className="p-0">
                      <AnimatedCounter
                        targetValue={num}
                        label={stat.label}
                        icon={getIcon(stat.iconName)}
                        suffix={suffix}
                        duration={2000}
                        startDelay={delay}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
