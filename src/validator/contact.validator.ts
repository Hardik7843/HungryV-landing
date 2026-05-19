import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Business name is required"),

  website: z.string().trim().optional().or(z.literal("")), // allow empty string

  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits"),
  email: z.email().trim(),
  city: z
    .string()
    .trim()
    .min(2, "City is required")
    .max(80, "City is too long"),
  state: z
    .string()
    .trim()
    .min(2, "State is required")
    .max(80, "State is too long"),

  query: z.string().trim().min(10, "Query must be 10 characters long"),
});
