import { z } from "zod";

export const reviewSchema = z.object({
  text: z.string().min(1, "The message is required"),
  rate: z.number().min(1, "The rate is required").max(5),
});

export type ReviewInputs = z.infer<typeof reviewSchema>;
