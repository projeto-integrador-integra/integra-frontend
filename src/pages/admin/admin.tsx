import { Box } from '@chakra-ui/react'
import { Title } from 'react-head'
import { AdminUsuariosList } from './components'

export const Admin = () => {
  return (
    <>
      <Title>Integra | Admin</Title>

      <Box display="flex" justifyContent="center" alignItems="center" px={{ lgDown: '4', lg: '8' }}>
        <AdminUsuariosList />
      </Box>
    </>
  )
}
