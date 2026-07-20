"use client";

import React, { useState } from "react";
import { COLORS } from "@/src/features/shared/constants/colors.js";
import { Phone, Envelope, MapPin, Clock, PaperPlaneRight, CheckCircle, Warning, Spinner } from "@phosphor-icons/react";
import { useContact } from "@/src/hooks/index.js";
import { useAbout } from "@/src/features/about/hooks/useAbout.js";
import { Skeleton } from "@/src/features/shared/components/Skeleton.js";

const getMapUrl = (branchName: string) => {
  if (branchName.toLowerCase().includes("mankhurd")) {
    return "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120681.16804000596!2d72.931934!3d19.051137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c73d9deb1b17%3A0xcabc7277a44a4c94!2sUNIQUE%20DENTAL%20CARE!5e0!3m2!1sen!2sin!4v1780401355164!5m2!1sen!2sin";
  }
  return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.116761385384!2d72.8954972!3d19.058603299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c2658754e5%3A0x59264c68f4384608!2sUnique%20Dental%20Care%20-%20Dr.%20Saloni%20%26%20Dr.%20Mehul%20Babel!5e0!3m2!1sen!2sin!4v1782913881617!5m2!1sen!2sin";
};

const getBadgeText = (branchName: string) => {
  return branchName.toLowerCase().includes("mankhurd") ? "Main Clinic" : "Premium Clinic";
};

export default function ContactSection() {
  const { submitContact, isSubmitting, error } = useContact();
  const { branches, loading: loadingBranches } = useAbout();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Free Digital Consultation Request",
    branch: "Mankhurd",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setValidationError("Please fill in all required fields (Name and Email).");
      return;
    }

    setValidationError("");

    const success = await submitContact({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message || "",
      branch: formData.branch,
    });

    if (success) {
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Free Digital Consultation Request",
        branch: "Mankhurd",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Two Branches responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loadingBranches ? (
              Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 flex flex-col gap-4">
                  <Skeleton className="h-8 w-1/3 rounded" />
                  <Skeleton className="h-16 w-full rounded" />
                  <Skeleton className="h-12 w-full rounded" />
                  <Skeleton className="h-40 w-full rounded-xl" />
                </div>
              ))
            ) : (
              branches.map((branch) => (
                <div key={branch.id} className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center justify-between">
                      <span>{branch.name}</span>
                      <span className="text-[10px] bg-blue-50 text-[#005B96] px-2.5 py-1 rounded-full font-sans font-bold uppercase tracking-wider">
                        {getBadgeText(branch.name)}
                      </span>
                    </h3>

                    <div className="space-y-4">
                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-blue-50 rounded-lg text-primary shrink-0">
                          <MapPin size={18} className="text-[#005B96]" />
                        </div>
                        <div className="font-inter">
                          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Clinic Address</span>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed font-semibold whitespace-pre-line">
                            {branch.address}
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-blue-50 rounded-lg text-primary shrink-0">
                          <Phone size={18} className="text-[#005B96]" />
                        </div>
                        <div className="font-inter">
                          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Phone & Mobile</span>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed font-semibold">
                            {branch.phone}
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-blue-50 rounded-lg text-primary shrink-0">
                          <Envelope size={18} className="text-[#005B96]" />
                        </div>
                        <div className="font-inter">
                          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</span>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed font-semibold">
                            {branch.email}
                          </p>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-blue-50 rounded-lg text-primary shrink-0">
                          <Clock size={18} className="text-[#005B96]" />
                        </div>
                        <div className="font-inter">
                          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Clinical Hours</span>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed font-semibold">
                            {branch.timings}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Embed */}
                  <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 aspect-[16/10] bg-slate-200 mt-4">
                    <iframe
                      title={`Unique Dental Care ${branch.name} Location Map`}
                      src={getMapUrl(branch.name)}
                      className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Centered Inquiry Form */}
          <div className="max-w-4xl mx-auto w-full bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-slate-100">
            <h3 className="font-playfair font-bold text-2xl text-slate-900 mb-2 leading-tight">Send an Inquiry</h3>
            <p className="font-inter text-slate-500 text-sm mb-6 leading-relaxed">
              We provide free computerized diagnostic guidelines for our digital dental procedures. Fill in the message
              below, and our consult doctors will respond.
            </p>

            {isSuccess ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-100 space-y-4 animate-scale-up">
                <CheckCircle size={64} weight="fill" className="text-emerald-500 mx-auto" />
                <h4 className="font-playfair font-bold text-2xl text-slate-900">Message Sent Successfully!</h4>
                <p className="font-inter text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Unique Dental Care. Our dedicated consulting team has received your details
                  and will call or email you back within 2 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-5 py-2 rounded-lg font-inter font-bold text-sm text-white shadow hover:opacity-95 transition-opacity"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-inter">
                {(validationError || error) && (
                  <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-sm font-medium flex items-center gap-2">
                    <Warning size={20} className="shrink-0 text-rose-500" />
                    <span>{validationError || error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Arun Kumar"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/15 outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. arun@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/15 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/15 outline-none transition-all"
                    />
                  </div>

                  {/* Preferred Branch Select */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Preferred Branch <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/15 outline-none bg-white transition-all font-semibold"
                    >
                      <option value="Mankhurd">Mankhurd Branch</option>
                      <option value="Chembur">Chembur Branch</option>
                    </select>
                  </div>
                </div>

                {/* Subject select (I'm Interested In) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">I'm Interested In</label>
                  <select
                     name="subject"
                     value={formData.subject}
                     onChange={handleChange}
                     className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/15 outline-none bg-white transition-all"
                  >
                    <option value="Free Digital Consultation Request">Free Digital Consultation</option>
                    <option value="Cosmetic Smile Design">Cosmetic Smile Design</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Crown & Bridge">Crown & Bridge</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Orthodontics (Braces/Aligners)">Orthodontics (Braces/Aligners)</option>
                    <option value="Teeth Whitening/Bleaching">Teeth Whitening/Bleaching</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Your Message <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your dental symptoms or consultation requirements here..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/15 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-inter font-bold text-sm text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner size={16} className="animate-spin" />
                        <span>Sending Consultation Request...</span>
                      </>
                    ) : (
                      <>
                        <PaperPlaneRight size={16} weight="bold" />
                        <span>Submit Consultation Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
