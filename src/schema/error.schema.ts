import { z } from 'zod'

export const apiErrorSchema = z.object({
  message: z.string(),
  code: z.string().optional(),
})

export type ApiErrorType = z.infer<typeof apiErrorSchema>
