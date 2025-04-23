import { Box, Heading } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { toaster } from '@/components/ui/toaster'
import { apiErrorSchema } from '@/schema/error.schema'
import { signUpSchema, SignUpType } from '@/schema/signup.schema'
import { createAccount } from '@/service/auth'

export const AccessStep = ({ nextStep }: { nextStep: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit: SubmitHandler<SignUpType> = async (data) => {
    try {
      await createAccount(data)
      nextStep()
      toaster.create({
        type: 'success',
        title: 'Usuário cadastrado com sucesso',
        duration: 3000,
      })
    } catch (error: unknown) {
      const parsedError = apiErrorSchema.safeParse(error)
      if (parsedError.success) {
        toaster.create({
          type: 'error',
          title: 'Erro ao cadastrar usuário',
          duration: 3000,
        })
        console.error('Error during sign up:', parsedError.data.message)
      } else {
        console.error('Unexpected error:', error)
      }
    }
  }

  return (
    <Box>
      <Heading as="h2">Preencha aqui com suas informações:</Heading>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} display="grid" gap="4">
        <Input label="E-mail" error={errors.email?.message} {...register('email')} />
        <Input
          as={PasswordInput}
          label="Senha"
          error={errors.password?.message}
          {...register('password')}
        />
        <Button type="submit" w="100%" isDisabled={isSubmitting} isLoading={isSubmitting}>
          Cadastrar
        </Button>
      </Box>
    </Box>
  )
}
