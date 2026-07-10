import { z } from "zod";

// Lithology and Lab Status Enums matching our Type System
const lithologyOptions = ["Sandstone", "Limestone", "Shale", "Clay"] as const;
const labStatusOptions = ["pending", "completed", "in-progress"] as const;

export const sampleSchema = z.object({
  sampleName: z.string().min(3, "Sample name must be at least 3 characters."),
  wellId: z.string().min(1, "Well ID reference is required."),
  
  // Coerce converts string inputs from HTML forms into numbers automatically
  depthFeet: z.coerce.number().positive("Depth must be a positive number."),
  porosity: z.coerce.number().min(0).max(100, "Porosity must be between 0 and 100%."),
  permeability: z.coerce.number().nonnegative("Permeability cannot be negative."),
  analysisCost: z.coerce.number().nonnegative("Analysis cost must be a valid amount."),
  
  lithology: z.enum(lithologyOptions, {
    errorMap: () => ({ message: "Invalid lithology type selected." }),
  }),
  labStatus: z.enum(labStatusOptions).default("pending"),
  
  collectionDate: z.string().datetime({ message: "Invalid ISO date format." }),
  imageUrl: z.string().url("Invalid image URL.").optional().or(z.literal("")),
  notes: z.string().max(500, "Notes cannot exceed 500 characters.").optional(),
});