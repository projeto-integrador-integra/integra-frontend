import { Box, CloseButton, Dialog, Portal, Textarea } from '@chakra-ui/react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ProjectApplySchema, ProjectApplyType } from '@/schema/project.schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const Apply = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ProjectApplyType>({
    resolver: zodResolver(ProjectApplySchema),
  })

  const onSubmit = (data: ProjectApplyType) => {
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
      </Portal>
    </Dialog.Root>
  )
}
