import { Box, Tabs } from '@chakra-ui/react'
import { useNavigate, useSearchParams } from 'react-router'

export const OportunidadesList = () => {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const tab = searchParams.get('tab') || 'explorar'
  const page = searchParams.get('page') || '1'

  const handleTabChange = (tab: string) => {
    navigate(`?tab=${tab}&page=${page}`)
  }

  return (
    <Box>
      <Tabs.Root
        defaultValue="explorar"
        variant="line"
        value={tab}
        onValueChange={(e) => handleTabChange(e.value)}
      >
        <Tabs.List>
          <Tabs.Trigger value="explorar">Explorar</Tabs.Trigger>
          <Tabs.Trigger value="contribuindo">Contribuindo</Tabs.Trigger>
          <Tabs.Trigger value="concluido">Concluido</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="explorar">Manage your team members</Tabs.Content>
        <Tabs.Content value="contribuindo">Manage your projects</Tabs.Content>
        <Tabs.Content value="concluido">Manage your Concluido for freelancers</Tabs.Content>
      </Tabs.Root>
    </Box>
  )
}
