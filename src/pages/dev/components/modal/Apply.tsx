import { Box, CloseButton, Dialog, Portal, Textarea } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toaster } from '@/components/ui/toaster'
import { ProjectApplySchema, ProjectApplyType } from '@/schema/project.schema'
import { applyToProject } from '@/service/project'
import { LightMode } from '@/components/ui/color-mode'

export const Apply = ({ id }: { id?: string }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ProjectApplyType>({
    resolver: zodResolver(ProjectApplySchema),
  })

  if (!id) return null

  const onSubmit = async (data: ProjectApplyType) => {
    try {
      await applyToProject(id, data)
      toaster.success({
        title: 'Aplicação enviada com sucesso',
        description: 'Parabéns! Sua aplicação foi enviada com sucesso.',
      })
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        toaster.error({
          title: 'Erro ao enviar a aplicação',
          description: error.message,
        })
      }
      toaster.error({
        title: 'Erro ao enviar a aplicação',
        description: 'Ocorreu um erro ao enviar sua aplicação. Tente novamente mais tarde.',
      })
    }
    console.log(data)
  }

  return (
    <Dialog.Root size="lg" placement="center">
      <Dialog.Trigger asChild>
        <Button mt="8" px="8" w="fit-content" ml="auto">
          Entrar
        </Button>
      </Dialog.Trigger>
      <Portal>
        <LightMode>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Aplicar para a vaga</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Box
                  as="form"
                  display="flex"
                  flexDir="column"
                  gap="4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Input
                    as={Textarea}
                    label="Como você gostaria de contribuir?"
                    autoFocus
                    error={errors.message?.message}
                    {...register('message')}
                  />
                  <Button type="submit" isLoading={isSubmitting} mt="8" w="fit-content" ml="auto">
                    Enviar
                  </Button>
                </Box>
              </Dialog.Body>

              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" variant="ghost" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </LightMode>
      </Portal>
    </Dialog.Root>
  )
}
