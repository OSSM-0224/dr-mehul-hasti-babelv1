"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type AppointmentFormData } from "../schemas/appointmentSchema.js";
import { TREATMENTS } from "@/src/features/shared/constants/constants.js";
import { cn } from "@/src/utils/index.js";
import { useBooking, useApp } from "@/src/hooks/index.js";

// shadcn/ui components
import { Button } from "@/src/components/ui/button.jsx";
import { Input } from "@/src/components/ui/input.jsx";
import { Label } from "@/src/components/ui/label.jsx";
import { Separator } from "@/src/components/ui/separator.jsx";
import { Badge } from "@/src/components/ui/badge.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover.jsx";
import { Calendar } from "@/src/components/ui/calendar.jsx";
import { Dialog, DialogContent, DialogTitle } from "@/src/components/ui/dialog.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select.jsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip.jsx";

// Lucide Icons
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  ShieldCheck,
  X,
  Info,
  AlertCircle,
  Activity,
} from "lucide-react";

// Custom SVG Icons
import { getTreatmentIcon } from "./TreatmentIcons.jsx";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatmentId?: number;
  onBookingSuccess: () => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedTreatmentId,
  onBookingSuccess,
}: BookingModalProps) {
  const { triggerRefresh } = useApp();
  const { book, isSubmitting } = useBooking(() => {
    onBookingSuccess();
    triggerRefresh(); // Sync live appointments list immediately
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [lastBookingData, setLastBookingData] = useState<any>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      treatmentId: preselectedTreatmentId || 1,
      date: new Date().toISOString().split("T")[0],
      timeSlot: "Morning (10:00 AM - 12:00 PM)",
      notes: "",
    },
  });

  const watchTreatmentId = watch("treatmentId");

  useEffect(() => {
    if (preselectedTreatmentId) {
      setValue("treatmentId", preselectedTreatmentId);
    }
  }, [preselectedTreatmentId, setValue]);

  useEffect(() => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      setValue("date", formattedDate, { shouldValidate: true });
    }
  }, [date, setValue]);

  const onSubmit = async (data: AppointmentFormData) => {
    const result = await book({
      name: data.name,
      email: data.email || "",
      phone: data.phone,
      treatmentId: Number(data.treatmentId),
      date: data.date,
      timeSlot: data.timeSlot,
      notes: data.notes || "",
    });

    if (result.success && result.appointment) {
      setLastBookingData(result.appointment);
      setIsSuccess(true);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    reset();
    setDate(new Date());
    onClose();
  };

  const slots = [
    "Morning (10:00 AM - 12:00 PM)",
    "Noon (12:00 PM - 02:00 PM)",
    "Afternoon (02:00 PM - 05:00 PM)",
    "Evening (05:00 PM - 08:30 PM)",
  ];

  const activeTreatment = TREATMENTS.find((t) => t.id === Number(watchTreatmentId));

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-4xl p-0 bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-2xl max-h-[92vh] flex flex-col md:flex-row w-full gap-0 outline-none"
      >
        <div className="md:w-[42%] bg-gradient-to-b from-slate-50 to-slate-100/50 p-8 border-r border-slate-100 flex flex-col justify-between relative overflow-hidden hidden md:flex">
          <div className="absolute top-[-20%] right-[-20%] w-64 h-64 rounded-full bg-[#00A8E8]/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 rounded-full bg-[#005B96]/5 blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00A8E8] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#005B96] font-sans">
                Unique Dental Care
              </span>
            </div>

            {activeTreatment ? (
              <div className="space-y-5 animate-fade-in">
                <div className="inline-flex p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-[#005B96]">
                  {getTreatmentIcon(activeTreatment.id, "w-10 h-10", 40)}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-[#00A8E8]/10 text-[#005B96] font-semibold border-0 text-[10px] uppercase tracking-wider px-2 py-0.5"
                    >
                      {activeTreatment.category}
                    </Badge>
                    <Badge variant="outline" className="border-slate-200 text-slate-500 font-medium text-[10px] px-2 py-0.5">
                      {activeTreatment.duration}
                    </Badge>
                  </div>

                  <h4 className="text-xl font-bold font-sans text-slate-900 leading-tight">{activeTreatment.title}</h4>

                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{activeTreatment.description}</p>
                </div>

                <Separator className="bg-slate-200/60" />

                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Procedure Focus Points</p>
                  <ul className="space-y-2">
                    {activeTreatment.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="inline-flex p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-[#005B96]">
                  <Activity size={32} />
                </div>
                <h4 className="text-lg font-bold font-sans text-slate-900">Comprehensive Diagnosis</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Select a clinical treatment option from the menu to see detailed procedure timelines, technologies, and
                  recovery benefits in real-time.
                </p>
              </div>
            )}
          </div>

          <div className="p-4 bg-white/70 border border-slate-100 rounded-xl space-y-3 relative z-10 shadow-sm backdrop-blur-sm mt-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-emerald-500 w-5 h-5 shrink-0" />
              <span className="text-xs font-bold text-slate-800">Elite Standards Certifications</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Led by MDS prosthodontist Dr. Mehul Hasti Babel, our procedures use computerized anesthesia and zero-pain
              microscopic lasers.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[58%] p-8 overflow-y-auto max-h-[92vh] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4">
            <div className="space-y-1">
              <DialogTitle className="text-2xl font-bold font-sans text-slate-900 tracking-tight text-slate-700">
                Schedule Diagnostic Slot
              </DialogTitle>
              <p className="text-xs text-slate-400 font-sans font-medium">
                Complete your details for a digital diagnostic evaluation.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          </div>

          <Separator className="mb-6 bg-slate-100" />

          {isSuccess && lastBookingData ? (
            <div className="py-8 text-center space-y-6 flex-grow flex flex-col justify-center animate-fade-in text-slate-700">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                <ShieldCheck size={36} className="animate-scale-up" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-sans text-slate-900 tracking-tight">Appointment Confirmed!</h4>
                <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                  Your clinical diagnostic slot is saved securely. Dr. Mehul Hasti Babel's specialists are ready for your
                  session.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-xs space-y-3 max-w-sm mx-auto text-left shadow-sm">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200/50">
                  <span className="text-slate-400 font-medium font-sans">Patient</span>
                  <span className="text-slate-800 font-bold font-sans">{lastBookingData.name}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200/50">
                  <span className="text-slate-400 font-medium font-sans">Contact</span>
                  <span className="text-slate-800 font-bold font-sans">{lastBookingData.phone}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200/50">
                  <span className="text-slate-400 font-medium font-sans">Date</span>
                  <span className="text-slate-800 font-bold font-sans">{lastBookingData.date}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200/50">
                  <span className="text-slate-400 font-medium font-sans">Preferred Slot</span>
                  <span className="text-slate-800 font-bold font-sans">{lastBookingData.timeSlot?.split(" ")[0]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-medium font-sans">Procedure</span>
                  <span className="text-slate-800 font-bold font-sans truncate max-w-[180px]">
                    {TREATMENTS.find((t) => t.id === Number(lastBookingData.treatmentId))?.title || "Consultation"}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-8 py-5 h-11 bg-[#005B96] hover:bg-[#004565] text-white rounded-xl shadow-md font-semibold transition-all duration-300"
                >
                  Return to Dashboard
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-sans">
                    Patient Full Name <span className="text-rose-500">*</span>
                  </Label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="e.g. Arun Kumar"
                      className="pl-9 h-11 border-slate-200 focus-visible:border-[#00A8E8] focus-visible:ring-[#00A8E8]/10 rounded-xl text-slate-800 text-sm font-sans"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-rose-500 text-[11px] font-semibold flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-sans">
                      Phone Number <span className="text-rose-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="e.g. 9876543210"
                        className="pl-9 h-11 border-slate-200 focus-visible:border-[#00A8E8] focus-visible:ring-[#00A8E8]/10 rounded-xl text-slate-800 text-sm font-sans"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-rose-500 text-[11px] font-semibold flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.phone.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-sans">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="name@example.com"
                        className="pl-9 h-11 border-slate-200 focus-visible:border-[#00A8E8] focus-visible:ring-[#00A8E8]/10 rounded-xl text-slate-800 text-sm font-sans"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-rose-500 text-[11px] font-semibold flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="treatmentId" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-sans">
                      Select requested treatment <span className="text-rose-500">*</span>
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="text-slate-400 hover:text-[#005B96] cursor-pointer" type="button">
                          <Info size={14} />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#005B96] text-white p-2.5 rounded-lg text-xs max-w-xs font-sans">
                          Choosing your treatment customizes your preparation, time slots, and specialist assignments.
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <Controller
                    name="treatmentId"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value?.toString()}
                        onValueChange={(val) => {
                          field.onChange(Number(val));
                        }}
                      >
                        <SelectTrigger className="w-full h-11 border-slate-200 hover:border-slate-300 rounded-xl text-slate-800 text-sm font-sans bg-transparent py-2.5 px-3">
                          <SelectValue placeholder="Select clinical procedure">
                            {activeTreatment ? activeTreatment.title : undefined}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-slate-100 shadow-xl rounded-xl max-h-64 overflow-y-auto">
                          {TREATMENTS.map((treatment) => (
                            <SelectItem key={treatment.id} value={treatment.id.toString()}>
                              {treatment.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.treatmentId && (
                    <p className="text-rose-500 text-[11px] font-semibold flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.treatmentId.message}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 flex flex-col">
                    <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-sans">
                      Appointment Date <span className="text-rose-500">*</span>
                    </Label>

                    <Popover>
                      <PopoverTrigger
                        render={
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full h-11 justify-start text-left font-normal border-slate-200 hover:border-slate-300 rounded-xl px-3 font-sans text-slate-800",
                              !date && "text-slate-400"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-slate-400 shrink-0" />
                            {date ? (
                              date.toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            ) : (
                              <span>Choose a date</span>
                            )}
                          </Button>
                        }
                      />
                      <PopoverContent className="w-auto p-0 bg-white shadow-xl border border-slate-100 rounded-xl z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today;
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    {errors.date && (
                      <p className="text-rose-500 text-[11px] font-semibold flex items-center gap-1 mt-1">
                        <AlertCircle size={12} />
                        <span>{errors.date.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="timeSlot" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-sans">
                      Preferred Slot <span className="text-rose-500">*</span>
                    </Label>
                    <Controller
                      name="timeSlot"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="w-full h-11 border-slate-200 hover:border-slate-300 rounded-xl text-slate-800 text-sm font-sans bg-transparent py-2.5 px-3">
                            <SelectValue placeholder="Choose a preferred slot" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-slate-100 shadow-xl rounded-xl">
                            {slots.map((s, idx) => (
                              <SelectItem key={idx} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.timeSlot && (
                      <p className="text-rose-500 text-[11px] font-semibold flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.timeSlot.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="notes" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-sans">
                    Symptoms or clinical notes
                  </Label>
                  <textarea
                    id="notes"
                    {...register("notes")}
                    placeholder="e.g. Dental anxiety, wisdom teeth pressure, request digital smile mockup..."
                    rows={2}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/10 text-slate-800 text-sm font-sans outline-none resize-none transition-all"
                  />
                  {errors.notes && (
                    <p className="text-rose-500 text-[11px] font-semibold flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.notes.message}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-end gap-3 border-t border-slate-100 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="px-5 h-11 border-slate-200 hover:bg-slate-50 hover:text-slate-700 text-slate-500 font-semibold rounded-xl transition-all font-sans"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 h-11 bg-[#005B96] hover:bg-[#004565] text-white font-semibold rounded-xl shadow-md transition-all duration-300 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Clock size={16} className="animate-spin" />
                      <span>Scheduling...</span>
                    </>
                  ) : (
                    <>
                      <CalendarIcon size={16} />
                      <span>Book Diagnostic Slot</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
