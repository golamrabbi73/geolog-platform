export const QUERY_KEYS = {
  ME: ["me"] as const,
  PROFILE: ["profile"] as const,

  WELLS: ["wells"] as const,
  WELL: (id: string) => ["wells", id] as const,

  SAMPLES: ["core-samples"] as const,
  SAMPLE: (id: string) => ["core-samples", id] as const,

  ANALYTICS: ["dashboard-analytics"] as const,
} as const;
