import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email({ message: "That is incorrect email" }),
    name: z.string().min(1, { message: "Name is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

export type SignUpInput = z.infer<typeof signUpSchema>;
