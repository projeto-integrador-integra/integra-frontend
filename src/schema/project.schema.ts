import { PROJECT_APPROVAL_STATUSES, PROJECT_STATUS } from '@/constants/project'
import { z } from 'zod'
import { UserSchema } from './user.schema'

export const ProjectSchema = z.object({
  id: z.string().uuid({ message: 'ID inválido' }).optional(),

  name: z
    .string({ message: 'O nome do projeto deve ter no mínimo 3 caracteres' })
    .min(3, { message: 'O nome do projeto deve ter no mínimo 3 caracteres' })
    .max(50, { message: 'O nome do projeto deve ter no máximo 50 caracteres' }),

  description: z
    .string({ message: 'A descrição deve ter no mínimo 10 caracteres' })
    .min(10, { message: 'A descrição deve ter no mínimo 10 caracteres' })
    .max(300, { message: 'A descrição deve ter no máximo 300 caracteres' }),

  creatorId: z
    .string()
    .uuid({ message: 'ID do criador inválido' })
    .nonempty({ message: 'O ID do criador é obrigatório' }),

  tags: z.array(z.string().min(1, { message: 'Tags não podem estar vazias' })).optional(),

  needsMentors: z.boolean().default(true),
  needsDevs: z.boolean().default(true),

  maxParticipants: z
    .number()
    .min(1, { message: 'É necessário pelo menos 1 participante' })
    .max(5, { message: 'O máximo de participantes permitido é 5' })
    .default(3),

  status: z.enum(PROJECT_STATUS, { message: 'Status inválido' }).default('active'),

  approvalStatus: z
    .enum(PROJECT_APPROVAL_STATUSES, { message: 'Status de aprovação inválido' })
    .default('pending'),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),

  members: z.array(UserSchema).optional(),
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
  status: true,
  members: true,
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
