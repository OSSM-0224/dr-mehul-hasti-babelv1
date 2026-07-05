"use client";

import React, { useEffect, useState } from "react";
import { TREATMENTS } from "@/src/features/shared/constants/constants.js";
import { useAppointments, useApp } from "@/src/hooks/index.js";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/src/components/ui/card.jsx";
import { Badge } from "@/src/components/ui/badge.jsx";
import { Button } from "@/src/components/ui/button.jsx";
import { Clock, Calendar, Warning, Info, ArrowsCounterClockwise } from "@phosphor-icons/react";
import { toast } from "sonner";
import { Appointment } from "@/src/types/index.js";

const STATIC_APPOINTMENTS: Appointment[] = [
  {
    id: "static-1",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    treatmentId: 11,
    date: "Tomorrow",
    timeSlot: "11:00 AM Slot",
    notes: "Routine checkup and clinical scaling",
  },
  {
    id: "static-2",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    phone: "+91 98765 12345",
    treatmentId: 5,
    date: "Friday",
    timeSlot: "04:30 PM Slot",
    notes: "Root canal consultation regarding minor thermal sensitivity",
  },
  {
    id: "static-3",
    name: "Amit Verma",
    email: "amit.verma@example.com",
    phone: "+91 98765 99999",
    treatmentId: 2,
    date: "Monday",
    timeSlot: "02:00 PM Slot",
    notes: "Cosmetic enamel enhancement request",
  },
];

export default function AppointmentsManager() {
  const { refreshTrigger } = useApp();
  const { appointments, isLoading, error, fetchAppointments, cancelAppointment } = useAppointments();
  const [cancelledStaticIds, setCancelledStaticIds] = useState<string[]>([]);
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  useEffect(() => {
    fetchAppointments();
  }, [refreshTrigger, fetchAppointments]);

  const handleCancel = async (id: string) => {
    setCancellingId(id);
    if (id.startsWith("static-")) {
      setTimeout(() => {
        setCancelledStaticIds((prev) => [...prev, id]);
        toast.success("Appointment Cancelled", {
          description: "The scheduled slot has been removed.",
        });
        setCancellingId(null);
      }, 400);
      return;
    }
    await cancelAppointment(id);
    setCancellingId(null);
  };

  const getTreatmentTitle = (id: number) => {
    const treatment = TREATMENTS.find((t) => t.id === id);
    return treatment ? treatment.title : "General Diagnosis Checkup";
  };

  const displayedAppointments = [
    ...STATIC_APPOINTMENTS.filter((a) => !cancelledStaticIds.includes(a.id!)),
    ...appointments,
  ];

  const apptCount = displayedAppointments.length;
  const gridClass =
    apptCount === 1
      ? "grid grid-cols-1 max-w-md mx-auto gap-6"
      : apptCount === 2
      ? "grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-6"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-5 mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#005B96] font-sans block">
            Clinical Patient Queue
          </span>
          <h3 className="font-playfair font-bold text-2xl text-slate-900 leading-tight mt-1">
            Upcoming Appointments
          </h3>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchAppointments}
          className="font-inter font-semibold text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
          disabled={isLoading}
        >
          <ArrowsCounterClockwise size={14} className={`mr-1.5 ${isLoading ? "animate-spin" : ""}`} weight="bold" />
          Refresh Queue
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-rose-50 border border-rose-100 rounded-lg text-rose-600 text-xs font-medium flex items-center gap-2 mb-6 font-inter">
          <Warning size={18} className="shrink-0" weight="fill" />
          <span>{error}</span>
        </div>
      )}

      {isLoading && displayedAppointments.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 space-y-3">
          <div className="w-8 h-8 border-4 border-[#005B96] border-t-transparent rounded-full animate-spin" />
          <p className="font-inter text-xs text-slate-400 font-medium">Syncing slot database...</p>
        </div>
      ) : displayedAppointments.length === 0 ? (
        <div className="text-center py-16 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
          <Clock size={40} className="text-slate-300 mx-auto mb-2.5" weight="duotone" />
          <p className="font-inter font-semibold text-slate-600 text-sm">
            No active appointments scheduled.
          </p>
          <p className="font-inter text-slate-400 text-xs mt-1">
            Book a treatment or digital scan consultation above to see your live schedule.
          </p>
        </div>
      ) : (
        <div className={gridClass}>
          {displayedAppointments.map((appt) => (
            <Card
              key={appt.id}
              className="transition-all duration-300 hover:shadow-md border border-slate-100 bg-white flex flex-col justify-between overflow-hidden"
            >
              <div>
                <CardHeader className="pb-3 pt-5 px-5">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-playfair text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {appt.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-none px-2.5 py-0.5 text-[10px] font-bold"
                    >
                      ● Confirmed
                    </Badge>
                  </div>
                  <CardDescription className="font-sans font-medium text-[#005B96] text-xs mt-1">
                    Procedure: {getTreatmentTitle(appt.treatmentId)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 pb-4 px-5">
                  <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-slate-100/80 text-xs text-slate-500 font-medium font-sans">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#005B96]" weight="bold" />
                      <span>{appt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#005B96]" weight="bold" />
                      <span className="truncate" title={appt.timeSlot}>
                        {appt.timeSlot}
                      </span>
                    </div>
                  </div>

                  {appt.notes && (
                    <p className="text-[11px] text-slate-400 italic bg-slate-50/50 p-2.5 rounded-lg leading-relaxed border border-slate-50 font-sans">
                      "{appt.notes}"
                    </p>
                  )}
                </CardContent>
              </div>

              <CardFooter className="pt-2.5 pb-3.5 px-5 text-[11px] text-slate-400 font-medium text-center justify-center border-t border-slate-50 bg-slate-50/30 font-sans">
                Need to reschedule? Please contact the clinic.
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-xs font-inter text-center max-w-3xl mx-auto">
        <Info size={16} className="text-[#005B96] shrink-0" weight="fill" />
        <span>
          Appointment schedules are managed by the clinic. For rescheduling or appointment changes, please contact our
          reception team directly.
        </span>
      </div>
    </div>
  );
}
