import { z } from "zod";

export const appointmentSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+0-9\s-]{10,15}$/, "Please enter a valid phone number"),
  treatmentId: z
    .union([z.string(), z.number()]),
  date: z
    .string()
    .min(1, "Please select an appointment date")
    .refine((dateStr) => {
      const selected = new Date(dateStr);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Date must be in the future or today"),
  timeSlot: z
    .string()
    .min(1, "Please select a preferred slot"),
  notes: z
    .string()
    .max(500, "Notes must not exceed 500 characters")
    .optional()
    .or(z.literal("")),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
