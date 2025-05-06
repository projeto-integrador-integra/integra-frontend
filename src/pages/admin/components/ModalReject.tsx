import { Button } from '@/components/ui/button'
import { LightMode } from '@/components/ui/color-mode'
import { toaster } from '@/components/ui/toaster'
import { UserRole } from '@/constants/user'
import { queryClient } from '@/service/query/queryClient'
import { updateUserById } from '@/service/user'
import { Box, CloseButton, Dialog, Portal, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface ModalRejectProps {
  id?: string
  name: string
  role: UserRole
}

export const ModalReject = ({ id, name, role }: ModalRejectProps) => {
  const [loading, setLoading] = useState(false)
  const onSubmit = async () => {
    if (!id) return
    setLoading(true)
    try {
      await updateUserById(id, {
        approvalStatus: 'rejected',
      })
      toaster.success({
        title: 'Sucesso',
        description: 'O usuário foi rejeitado com sucesso.',
      })
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'users',
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
          Rejeitar
        </Button>
      </Dialog.Trigger>
      <Portal>
        <LightMode>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Rejeitar usuário na plataforma?</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Box display="flex" flexDir="column" gap="4">
                  <Text fontSize="sm" color="gray.500">
                    Você tem certeza que deseja{' '}
                    <Text color="red.600" as="span" fontWeight="bold">
                      rejeitar
                    </Text>{' '}
                    o usuário <strong>{name}</strong> como{' '}
                    {role === 'dev' ? 'Dev Iniciante' : role === 'mentor' ? 'Mentor' : 'Empresa'}?
                  </Text>
                  <Button
                    onClick={onSubmit}
                    loading={loading}
                    mt="8"
                    w="fit-content"
                    ml="auto"
                    intent="danger"
                  >
                    Rejeitar
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
