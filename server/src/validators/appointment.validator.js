import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().min(6).optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  clinic: z.string().optional(),
  notes: z.string().optional(),
});

export function validateAppointment(data) {
  const result = appointmentSchema.safeParse(data);
  if (!result.success) {
    const issue = result.error.issues[0];
    throw new Error(issue.message);
  }
  return result.data;
}
