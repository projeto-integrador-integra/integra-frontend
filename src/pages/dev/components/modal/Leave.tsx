import { Button } from '@/components/ui/button'
import { Box, CloseButton, Dialog, Portal, Text } from '@chakra-ui/react'

export const Leave = () => {
  return (
    <Dialog.Root size="lg" placement="center">
      <Dialog.Trigger asChild>
        <Button mt="8" px="8" w="fit-content" ml="auto" intent="danger">
          Sair
        </Button>
      </Dialog.Trigger>
      <Portal>
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
                <Button>Sim, quero sair</Button>
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
      </Portal>
    </Dialog.Root>
  )
}
