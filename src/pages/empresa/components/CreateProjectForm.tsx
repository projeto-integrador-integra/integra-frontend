import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TagInput } from '@/components/ui/tag-input'
import { toaster } from '@/components/ui/toaster'
import { apiErrorSchema } from '@/schema/error.schema'
import { ProjectCreationSchema, ProjectCreationType } from '@/schema/project.schema'
import { createProject } from '@/service/project'
import { queryClient } from '@/service/query/queryClient'
import { Box, Card, Heading, Textarea } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

export const CreateProjectForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ProjectCreationSchema),
  })

  const onSubmit = async (data: ProjectCreationType) => {
    try {
      await createProject(data)
      toaster.success({
        title: 'Projeto criado com sucesso',
        description: 'Seu projeto foi criado com sucesso.',
      })
      queryClient.setQueryData<{ pending: number; approved: number; closed: number }>(
        ['projects:summary'],
        (old) => {
          if (!old) return old
          return {
            ...old,
            pending: old.pending + 1,
          }
        }
      )

      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'projects',
      })
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'projects:summary',
      })
      reset()
    } catch (error) {
      console.error('Erro ao criar projeto:', error)

      const parsed = apiErrorSchema.safeParse(error)
      const message = parsed.success
        ? parsed.data.message
        : 'Ocorreu um erro ao criar o projeto. Tente novamente mais tarde.'

      toaster.error({
        title: 'Erro ao criar projeto',
        description: message,
      })
    }
  }

  return (
    <Card.Root w="100%" variant="elevated" p="8">
      <Heading mb="8">Conte-nos o que precisa realizar</Heading>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} display="flex" flexDir="column" gap="8">
        <Input
          label="Escolha um nome para o seu projeto"
          placeholder="Por exemplo: crie um site para mim"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          as={Textarea}
          rows={4}
          label="Conte mais sobre o seu projeto"
          placeholder="Descreva seu projeto aqui..."
          error={errors.description?.message}
          {...register('description')}
        />
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <TagInput
              value={field.value}
              setValue={field.onChange}
              error={errors.tags?.message}
              label="Digite as tags do seu projeto"
            />
          )}
        />

        <Button type="submit" ml="auto" mt="4" px="16" loading={isSubmitting}>
          Enviar
        </Button>
      </Box>
    </Card.Root>
  )
}
