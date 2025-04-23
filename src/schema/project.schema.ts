import { z } from 'zod'
import { PROJECT_APPROVAL_STATUSES, PROJECT_STATUS } from '@/constants/project'

export const ProjectSchema = z.object({
  id: z.string().uuid().optional(),
  name: z
    .string()
    .min(1, { message: 'O nome do projeto é obrigatório.' })
    .max(50, { message: 'O nome do projeto deve ter no máximo 50 caracteres.' }),
  description: z.string().max(300, { message: 'A descrição deve ter no máximo 300 caracteres.' }),
  creatorId: z
    .string()
    .uuid({ message: 'ID do criador inválido.' })
    .nonempty({ message: 'O ID do criador é obrigatório.' }),
  tags: z.string().array().optional(),
  needsMentors: z.boolean().default(true),
  needsDevs: z.boolean().default(true),
  maxParticipants: z
    .number()
    .min(1, { message: 'O número mínimo de participantes é 1.' })
    .max(5, { message: 'O número máximo de participantes é 5.' })
    .default(3),
  status: z
    .enum(PROJECT_STATUS, {
      errorMap: () => ({
        message: 'Status do projeto inválido.',
      }),
    })
    .default('active'),
  approvalStatus: z
    .enum(PROJECT_APPROVAL_STATUSES, {
      errorMap: () => ({
        message: 'Status de aprovação inválido.',
      }),
    })
    .default('pending'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type ProjectType = z.infer<typeof ProjectSchema>

export const ProjectCreationSchema = ProjectSchema.omit({
  id: true,
  creatorId: true,
  createdAt: true,
  updatedAt: true,
  needsMentors: true,
  needsDevs: true,
  approvalStatus: true,
})
export type ProjectCreationType = z.infer<typeof ProjectCreationSchema>

export const ProjectUpdateSchema = ProjectSchema.partial().omit({
  id: true,
  creatorId: true,
  createdAt: true,
  updatedAt: true,
  needsMentors: true,
  needsDevs: true,
})
export type ProjectUpdateType = z.infer<typeof ProjectUpdateSchema>

export const ProjectApplySchema = z.object({
  message: z
    .string()
    .max(300, { message: 'A mensagem pode ter no máximo 300 caracteres.' })
    .optional()
    .transform((val) => (val?.trim() === '' ? undefined : val)),
})

export type ProjectApplyType = z.infer<typeof ProjectApplySchema>
