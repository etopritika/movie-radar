import { z } from "zod";

export type SearchFormValues = z.infer<typeof searchSchema>;

export const searchSchema = z.object({
  query: z
    .string()
    .min(1, "Search query is required")
    .max(50, "Search query must be under 50 characters"),
});
