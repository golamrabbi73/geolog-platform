import { z } from "zod";

export const coreSampleSchema = z.object({
  sampleId: z.string().min(1, "Sample ID is required."),

  wellName: z.string().min(1, "Well name is required."),

  depthFrom: z.number().min(0, "Depth From must be at least 0."),

  depthTo: z.number().min(0, "Depth To must be at least 0."),

  rockType: z.string().min(1, "Rock type is required."),

  description: z.string().optional(),

  imageUrl: z
    .string()
    .trim()
    .url("Enter a valid image URL.")
    .optional()
    .or(z.literal("")),
});

export type CoreSampleFormData = z.infer<typeof coreSampleSchema>;