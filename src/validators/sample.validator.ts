import { z } from "zod";
import type { Lithology, LabStatus } from "@/types/common";

const lithologyOptions: [Lithology, ...Lithology[]] = [
  "Sandstone",
  "Limestone",
  "Shale",
  "Dolomite",
  "Siltstone",
  "Coal",
  "Basalt",
  "Granite",
];

const labStatusOptions: [LabStatus, ...LabStatus[]] = [
  "pending",
  "completed",
];

export const sampleSchema = z.object({
  sampleName: z.string().min(3, "Sample name must be at least 3 characters."),
  wellId: z.string().min(1, "Well ID reference is required."),
  
  depthFeet: z.coerce.number().positive("Depth must be a positive number."),
  porosity: z.coerce.number().min(0).max(100, "Porosity must be between 0 and 100%."),
  permeability: z.coerce.number().nonnegative("Permeability cannot be negative."),
  
  analysisCost: z.coerce.number().nonnegative("Analysis cost must be a valid amount.").optional(),
  
  lithology: z.enum(lithologyOptions, {
  message: "Invalid lithology type selected.",
}),
  
  labStatus: z.enum(labStatusOptions).default("pending"),
  
  collectionDate: z.string().min(1, "Collection date is required."),
  imageUrl: z.string().url("Invalid image URL.").optional(),
  notes: z.string().max(500, "Notes cannot exceed 500 characters.").optional(),
});