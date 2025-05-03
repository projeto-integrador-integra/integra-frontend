import { z } from 'zod'

export const SignUpSchema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres.')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.')
    .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula.')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número.')
    .regex(/[^A-Za-z0-9]/, 'A senha deve conter pelo menos um caractere especial.')
    .max(20, 'A senha deve ter no máximo 20 caracteres.'),
})

export type SignUpType = z.infer<typeof SignUpSchema>
