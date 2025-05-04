import { Box, CloseButton, Dialog, Portal, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FeedbackCreateSchema, FeedbackCreateType } from '@/schema/feedback.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitProjectFeedback } from '@/service/project'
import { toaster } from '@/components/ui/toaster'
import { LightMode } from '@/components/ui/color-mode'

export const Feedback = ({ id }: { id?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackCreateType>({
    resolver: zodResolver(FeedbackCreateSchema),
  })

  if (!id) return null

  const onSubmit = async (data: FeedbackCreateType) => {
    try {
      await submitProjectFeedback(id, data)
      toaster.success({
        title: 'Feedback enviado com sucesso',
        description: 'Obrigado por compartilhar sua experiência!',
      })
    } catch (error) {
      console.error(error)
      toaster.error({
        title: 'Erro ao enviar feedback',
        description: 'Tente novamente mais tarde.',
      })
    }
    console.log(data)
  }

  return (
    <Dialog.Root size="lg" placement="center">
      <Dialog.Trigger asChild>
        <Button mt="8" px="8" w="fit-content" ml="auto">
          Finalizar
        </Button>
      </Dialog.Trigger>
      <Portal>
        <LightMode>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Feedback</Dialog.Title>
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
                    label="De 0 a 10, qual nota você daria para o projeto?"
                    autoFocus
                    type="number"
                    min={0}
                    max={10}
                    error={errors.rating?.message}
                    {...register('rating')}
                  />
                  <Input
                    label="Teria algum link para compartilhar?"
                    error={errors.link?.message}
                    {...register('link')}
                  />
                  <Input
                    as={Textarea}
                    label="Conte como foi sua experiência?"
                    error={errors.comment?.message}
                    {...register('comment')}
                  />
                  <Button type="submit" loading={isSubmitting} mt="8" w="fit-content" ml="auto">
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
