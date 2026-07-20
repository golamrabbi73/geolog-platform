import { z } from "zod";

export const wellSchema = z.object({
  wellName: z
    .string()
    .trim()
    .min(1, "Well name is required."),

  location: z
    .string()
    .trim()
    .min(1, "Location is required."),

  operator: z
    .string()
    .trim()
    .min(1, "Operator is required."),

  depth: z
    .number()
    .min(0, "Depth must be at least 0."),

  status: z.enum([
    "planned",
    "active",
    "completed",
  ]),

  description: z.string().optional(),

  imageUrl: z
    .string()
    .trim()
    .url("Enter a valid image URL.")
    .optional()
    .or(z.literal("")),
});

export type WellFormData = z.input<typeof wellSchema>;