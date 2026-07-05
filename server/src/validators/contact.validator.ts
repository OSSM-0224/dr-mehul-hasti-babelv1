import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  branch: z.string().optional(),
  message: z.string().optional(),
});

export type CreateContactInput = z.infer<typeof createContactSchema>;
