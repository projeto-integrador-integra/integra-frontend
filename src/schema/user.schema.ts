import { USER_APPROVAL_STATUSES, USER_ROLES } from '@/constants/user'
import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string().uuid({ message: 'ID inválido.' }).optional(),
  sub: z.string().uuid({ message: 'Identificador do usuário inválido.' }).optional(),
  role: z.enum(USER_ROLES, {
    errorMap: () => ({
      message: 'Selecione um papel válido: dev, company ou mentor.',
    }),
  }),
  name: z
    .string()
    .min(1, { message: 'O nome é obrigatório.' })
    .max(50, { message: 'O nome deve ter no máximo 50 caracteres.' }),
  email: z.string().email({ message: 'E-mail inválido.' }).optional(),
  description: z
    .string()
    .max(300, { message: 'A descrição deve ter no máximo 300 caracteres.' })
    .optional()
    .nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  approvalStatus: z
    .enum(USER_APPROVAL_STATUSES, {
      errorMap: () => ({
        message: 'Status de aprovação inválido.',
      }),
    })
    .optional()
    .default('pending'),
})

export type UserType = z.infer<typeof UserSchema>

export const UserCreationSchema = UserSchema.omit({
  id: true,
  sub: true,
  email: true,
  createdAt: true,
  updatedAt: true,
  approvalStatus: true,
})
export type UserCreationType = z.infer<typeof UserCreationSchema>

export const UserUpdateSchema = UserSchema.partial().omit({
  id: true,
  sub: true,
  email: true,
  createdAt: true,
  updatedAt: true,
})
export type UserUpdateType = z.infer<typeof UserUpdateSchema>
