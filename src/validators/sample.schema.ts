import { z } from "zod";

export const sampleSchema = z.object({
  sampleId: z
    .string()
    .min(1, "Sample ID is required."),

  wellName: z
    .string()
    .min(1, "Well name is required."),

  depthFrom: z.coerce
    .number()
    .min(
      0,
      "Depth From must be greater than or equal to 0."
    ),

  depthTo: z.coerce
    .number()
    .min(
      0,
      "Depth To must be greater than or equal to 0."
    ),

  rockType: z
    .string()
    .min(1, "Rock type is required."),

  description: z.string().optional(),
});

export type SampleFormData = z.infer<
  typeof sampleSchema
>;