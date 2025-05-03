import { z } from 'zod'

import { USER_ROLES } from '@/constants/user'
import { isValidUrl } from '@/utils/validation'

export const FeedbackUserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  role: z.enum(USER_ROLES),
})

export const FeedbackSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string().uuid(),
  comment: z
    .string()
    .min(10, { message: 'A mensagem deve ter no mínimo 10 caracteres.' })
    .max(500, { message: 'A mensagem deve ter no máximo 500 caracteres.' }),
  link: z
    .string()
    .transform((val) => (val?.trim() === '' ? undefined : val))
    .refine((val) => !val || isValidUrl(val), {
      message: 'URL inválida',
    })
    .optional(),
  rating: z.coerce.number({ message: 'Campo obrigatório*' }).min(1).max(10),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  user: FeedbackUserSchema,
})

export type FeedbackType = z.infer<typeof FeedbackSchema>

export const FeedbackCreateSchema = FeedbackSchema.omit({
  id: true,
  projectId: true,
  user: true,
  createdAt: true,
  updatedAt: true,
})

export type FeedbackCreateType = z.infer<typeof FeedbackCreateSchema>
