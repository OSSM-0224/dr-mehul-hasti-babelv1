"use client"

import React, { useState } from "react";
import { useBlog } from "../hooks/useBlog.js";
import { COLORS } from "@/src/features/shared/constants/colors";
import { BlogPost } from "@/src/types";
import { X, Calendar, User, ArrowRight, BookOpen } from "@phosphor-icons/react";
import { Skeleton } from "../../shared/components/Skeleton.js";

export default function BlogSection() {
  const { blogs, loading, error } = useBlog();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 bg-slate-50 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-sm font-bold tracking-wider uppercase text-secondary font-inter text-[#00A8E8]">
            CLINICAL BLOGS & ANNOUNCEMENTS
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Latest Articles & Case Reports
          </h2>
          <p className="font-inter text-slate-500 text-sm sm:text-base leading-relaxed">
            Stay updated with clinical breakthroughs, digital dental workshops, and inspiring case studies straight from Unique Dental Care's treatment rooms.
          </p>
        </div>

        {/* 3-Column Grid for Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-5 space-y-4 border border-slate-100">
                <Skeleton className="w-full aspect-[16/10] rounded-xl" />
                <Skeleton className="h-4 w-1/4 rounded" />
                <Skeleton className="h-6 w-3/4 rounded" />
                <Skeleton className="h-12 w-full rounded" />
              </div>
            ))
          ) : (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100 group transform hover:-translate-y-1.5"
              >
                {/* Blog Featured Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Badge */}
                  <span
                    className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded font-inter shadow"
                    style={{ backgroundColor: COLORS.tertiary }}
                  >
                    {blog.category}
                  </span>
                </div>

                {/* Blog Content */}
                <div className="p-5 flex flex-col flex-grow space-y-3">
                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-inter font-semibold">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-playfair font-bold text-lg leading-snug group-hover:text-[#005B96] transition-colors cursor-pointer"
                    style={{ color: COLORS.primary }}
                    onClick={() => setSelectedPost(blog)}
                  >
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-inter text-slate-500 text-sm leading-relaxed flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Footer details */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-inter text-xs text-slate-500 font-medium flex items-center gap-1">
                      <User size={14} className="text-[#00A8E8]" />
                      <span>By {blog.author}</span>
                    </span>
                    
                    <button
                      onClick={() => setSelectedPost(blog)}
                      className="font-inter font-bold text-xs flex items-center gap-1 transition-colors hover:text-[#005B96] cursor-pointer text-[#00A8E8]"
                    >
                      <span>Read More</span>
                      <ArrowRight size={14} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Blog Post Reader Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[85vh] border border-gray-100 animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Feature Banner */}
              <div className="relative aspect-[21/9] bg-slate-100">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={16} weight="bold" />
                </button>
                <div className="absolute bottom-3 left-4">
                  <span
                    className="text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded font-inter shadow"
                    style={{ backgroundColor: COLORS.tertiary }}
                  >
                    {selectedPost.category}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4 text-left">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs text-slate-400 font-inter font-semibold border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Published: {selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-[#00A8E8]" />
                    <span>By: {selectedPost.author}</span>
                  </div>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-playfair font-bold text-2xl text-slate-900 leading-snug">
                  {selectedPost.title}
                </h3>

                {/* Actual Content */}
                <div className="font-inter text-slate-600 text-sm leading-relaxed space-y-3.5 pt-2">
                  <p className="font-medium text-slate-800 text-base italic">
                    "{selectedPost.excerpt}"
                  </p>
                  <p className="whitespace-pre-line text-slate-600">
                    {selectedPost.content}
                  </p>
                  <p className="text-slate-600">
                    Unique Dental Care continues to bring leading-edge dental automation to ensure patients experience absolute safety, quick healing, and complete aesthetics in single-visit procedures. For detailed scans and evaluation, book an appointments session with our specialist team today.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 bg-slate-50 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-slate-400 font-inter font-semibold flex items-center gap-1">
                  <BookOpen size={16} className="text-[#00A8E8]" />
                  <span>Unique Dental Care Educational Series</span>
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2 rounded-lg font-inter font-semibold text-sm text-white shadow-md cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
