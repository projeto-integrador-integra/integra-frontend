import { z } from 'zod'

export const profileSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  description: z.string().min(1, { message: 'A descrição é obrigatória' }),
  role: z.enum(['dev', 'company', 'mentor'], {
    message: 'Selecione um papel válido: dev, company ou mentor',
  }),
})

export type ProfileType = z.infer<typeof profileSchema>
