import { Button } from '@/components/ui/button'
import { toaster } from '@/components/ui/toaster'
import { UserRole } from '@/constants/user'
import { updateUserById } from '@/service/user'
import { Box, CloseButton, Dialog, Portal, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface ModalAcceptProps {
  id?: string
  name: string
  role: UserRole
}

export const ModalAccept = ({ id, name, role }: ModalAcceptProps) => {
  const [loading, setLoading] = useState(false)
  const onSubmit = async () => {
    if (!id) return
    setLoading(true)
    try {
      await updateUserById(id, {
        approvalStatus: 'approved',
      })
      toaster.success({
        title: 'Usuário aceito com sucesso',
        description: 'O usuário foi aceito com sucesso.',
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
        <Button px="8" w="fit-content" ml="auto">
          Aceitar
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Aceitar usuário na plataforma?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Box display="flex" flexDir="column" gap="4">
                <Text fontSize="sm" color="gray.500">
                  Você tem certeza que deseja aceitar o usuário <strong>{name}</strong> como{' '}
                  {role === 'dev' ? 'Dev Iniciante' : role === 'mentor' ? 'Mentor' : 'Empresa'}?
                </Text>
                <Button onClick={onSubmit} loading={loading} mt="8" w="fit-content" ml="auto">
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
