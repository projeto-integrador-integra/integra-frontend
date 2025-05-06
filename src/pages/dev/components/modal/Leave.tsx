import { Box, CloseButton, Dialog, Portal, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { LightMode } from '@/components/ui/color-mode'
import { toaster } from '@/components/ui/toaster'
import { leaveProject } from '@/service/project'
import { queryClient } from '@/service/query/queryClient'

export const Leave = ({ id }: { id?: string }) => {
  const [loading, setLoading] = useState(false)

  if (!id) return null

  const onSubmit = async () => {
    try {
      setLoading(true)
      await leaveProject(id)
      toaster.success({
        title: 'Sucesso',
        description: 'Você saiu do projeto com sucesso.',
      })
      queryClient.setQueryData<{ pending: number; approved: number; closed: number }>(
        ['projects:summary'],
        (old) => {
          if (!old) return old
          return {
            ...old,
            approved: old.approved - 1,
          }
        }
      )
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'projects:mine',
      })
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'projects:summary',
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
        title: 'Erro ',
        description: 'Ocorreu um erro ao sair do projeto. Tente novamente mais tarde.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog.Root size="lg" placement="center">
      <Dialog.Trigger asChild>
        <Button mt="8" px="8" w="fit-content" ml="auto" intent="danger">
          Sair
        </Button>
      </Dialog.Trigger>
      <Portal>
        <LightMode>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Sair do Projeto</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text>
                  Tem certeza que deseja sair do projeto? Você não poderá mais ver as atualizações e
                  nem contribuir com o projeto.
                </Text>
                <Box display="flex" gap="4" mt="8" ml="auto" w="fit-content">
                  <Button onClick={onSubmit} loading={loading}>
                    Sim, quero sair
                  </Button>
                  <Dialog.ActionTrigger asChild>
                    <Button intent="secondary">Cancelar</Button>
                  </Dialog.ActionTrigger>
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
