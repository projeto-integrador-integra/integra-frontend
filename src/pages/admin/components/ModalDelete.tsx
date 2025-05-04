import { Button } from '@/components/ui/button'
import { toaster } from '@/components/ui/toaster'
import { updateUserById } from '@/service/user'
import { Box, CloseButton, Dialog, Portal, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface ModalDeleteProps {
  id?: string
  name: string
}

export const ModalDelete = ({ id, name }: ModalDeleteProps) => {
  const [loading, setLoading] = useState(false)
  const onSubmit = async () => {
    if (!id) return
    setLoading(true)
    try {
      await updateUserById(id, {
        approvalStatus: 'suspended',
      })
      toaster.success({
        title: 'Sucesso',
        description: 'O usuário foi removido com sucesso.',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      let message = 'Ocorreu um erro ao enviar sua aplicação. Tente novamente mais tarde.'
      if (error instanceof Error) message = error.message
      toaster.error({
        title: 'Erro ao enviar a aplicação',
        description: message,
      })
    } finally {
      setLoading(false)
    }
  }

  if (!id) return null

  return (
    <Dialog.Root size="lg" placement="center">
      <Dialog.Trigger asChild>
        <Button intent="danger" px="8" w="fit-content" ml="auto">
          Deletar
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Remover usuário da plataforma?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Box display="flex" flexDir="column" gap="4">
                <Text fontSize="sm" color="gray.500">
                  Você tem certeza que deseja{' '}
                  <Text color="red.600" as="span" fontWeight="bold">
                    remover
                  </Text>{' '}
                  o usuário <strong>{name}</strong> da plataforma?
                </Text>
                <Button
                  onClick={onSubmit}
                  loading={loading}
                  mt="8"
                  w="fit-content"
                  ml="auto"
                  intent="danger"
                >
                  Remover
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
