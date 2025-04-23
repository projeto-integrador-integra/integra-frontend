import { Box, Heading, Textarea } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toaster } from '@/components/ui/toaster'
import { profileSchema, ProfileType } from '@/schema/profile.schema'
import { createProfile } from '@/service/profile'

export const AboutStep = ({
  role,
  nextStep,
}: {
  role: 'dev' | 'company' | 'mentor'
  nextStep: () => void
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      role,
    },
  })

  const onSubmit: SubmitHandler<ProfileType> = async (data) => {
    try {
      console.log('data', data)
      await createProfile(data)
      toaster.create({
        title: 'Usuário criado com sucesso',
        description: 'Você pode acessar sua conta agora.',
        type: 'success',
      })
      nextStep()
    } catch (error) {
      console.error('Error creating user', error)
      toaster.create({
        title: 'Erro ao criar usuário',
        description: 'Ocorreu um erro ao criar o usuário. Tente novamente mais tarde.',
        type: 'error',
      })
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} display="grid" gap="4">
      <Heading as="h2">Preencha aqui com suas informações:</Heading>
      <Input
        label="Nome"
        placeholder="Digite seu nome"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Descrição"
        as={Textarea}
        placeholder="Conte mais sobre você"
        error={errors.description?.message}
        rows={5}
        {...register('description')}
      />
      <Button w="100%" type="submit" isLoading={isSubmitting}>
        Enviar
      </Button>
    </Box>
  )
}
