import { z } from "zod"

// We're keeping a simple non-relational schema here.
export const studySchema = z.object({
  id: z.number(),
  test_name: z.string(),
  specimen: z.string(),
  synonyms: z.string(),
  special_instructions: z.string(),
  expected_turnaround_time: z.string(),
  volume: z.string(),
  minimum_volume: z.string(),
  container: z.string(),
  collection: z.string(),
  storage_instructions: z.string(),
  patient_preparation: z.string(),
  causes_for_rejection: z.string(),
  use: z.string(),
  limitations: z.string(),
  methodology: z.string(),
  test_includes: z.string(),
  related_information: z.string(),
  footnotes: z.string(),
  stability_requirements: z.string().nullable(),
  reference_interval: z.string(),
  critical_value: z.string(),
  contraindications: z.string(),
  aftercare: z.string(),
})

export type Study = z.infer<typeof studySchema>
