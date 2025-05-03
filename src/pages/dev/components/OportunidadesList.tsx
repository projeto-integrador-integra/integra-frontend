import { Tabs } from '@chakra-ui/react'
import { useNavigate, useSearchParams } from 'react-router'
import { Explorar } from './Explorar'
import { Contribuindo } from './Contribuindo'
import { Concluido } from './Concluido'

export const OportunidadesList = () => {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const tab = searchParams.get('tab') || 'explorar'
  const page = searchParams.get('page') || '1'

  const handleTabChange = (tab: string) => {
    navigate(`?tab=${tab}&page=${page}`)
  }

  return (
    <Tabs.Root
      defaultValue="explorar"
      variant="line"
      value={tab}
      onValueChange={(e) => handleTabChange(e.value)}
      w="100%"
    >
      <Tabs.List>
        <Tabs.Trigger value="explorar" fontSize={{ lgDown: '0.7rem' }}>
          Explorar
        </Tabs.Trigger>
        <Tabs.Trigger value="contribuindo" fontSize={{ lgDown: '0.7rem' }}>
          Contribuindo
        </Tabs.Trigger>
        <Tabs.Trigger value="concluido" fontSize={{ lgDown: '0.7rem' }}>
          Concluido
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="explorar">
        <Explorar />
      </Tabs.Content>
      <Tabs.Content value="contribuindo">
        <Contribuindo />
      </Tabs.Content>
      <Tabs.Content value="concluido">
        <Concluido />
      </Tabs.Content>
    </Tabs.Root>
  )
}
