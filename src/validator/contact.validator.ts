import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Business name is required"),
  website: z.string().trim().optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits"),
  email: z.string().email("Invalid email address").trim(),
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
  query: z
    .string()
    .trim()
    .min(10, "Query must be at least 10 characters"),
});

export const demoFormSchema = z.object({
  name: z.string().trim().min(1, "Business name is required"),
  email: z.string().email("Invalid email address").trim(),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits"),
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
  comments: z.string().trim().optional().or(z.literal("")),
  scheduledDate: z.string().min(1, "Please select a date"),
  scheduledTime: z.string().min(1, "Please select a time"),
});