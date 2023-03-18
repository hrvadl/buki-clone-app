import { z } from "zod";

export const addAdSchema = z.object({
  description: z.string().min(10, "Description must be at least 10 characters"),
  subject: z
    .number()
    .min(0, "That isn't correct subject")
    .max(5, "That isn't correct subject"),
});

export type AdInput = z.infer<typeof addAdSchema>;
