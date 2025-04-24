import { UserRole } from '@/constants/user'
import { Box, Tabs } from '@chakra-ui/react'
import { useNavigate, useSearchParams } from 'react-router'
import { DevList } from './DevList'
import { EmpresaList } from './EmpresaList'
import { MentorList } from './MentorList'
import { UsersList } from './UsersList'

export const AdminUsuariosList = () => {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const tab = (searchParams.get('tab') || 'dev') as UserRole | 'users'
  const page = searchParams.get('page') || '1'

  const handleTabChange = (tab: string) => {
    navigate(`?tab=${tab}&page=${page}`)
  }

  return (
    <Box display="flex" flexDir="column" justifyContent="flex-start">
      <Tabs.Root
        value={tab}
        onValueChange={(e) => handleTabChange(e.value)}
        lazyMount
        unmountOnExit
      >
        <Tabs.List>
          <Tabs.Trigger value="dev">Dev Iniciante</Tabs.Trigger>
          <Tabs.Trigger value="mentor">Mentores</Tabs.Trigger>
          <Tabs.Trigger value="company">Empresas</Tabs.Trigger>
          <Tabs.Trigger value="users">Aprovados</Tabs.Trigger>
        </Tabs.List>
        <Box overflow="auto">
          <Tabs.Content value="dev" maxW="md">
            <DevList />
          </Tabs.Content>
          <Tabs.Content value="mentor">
            <MentorList />
          </Tabs.Content>
          <Tabs.Content value="company">
            <EmpresaList />
          </Tabs.Content>
          <Tabs.Content value="users">
            <UsersList />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  )
}
