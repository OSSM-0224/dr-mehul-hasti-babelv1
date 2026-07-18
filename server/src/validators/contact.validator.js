import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().min(6).optional(),
  message: z.string().min(1),
});

export function validateContact(data) {
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    const issue = result.error.issues[0];
    throw new Error(issue.message);
  }
  return result.data;
}
