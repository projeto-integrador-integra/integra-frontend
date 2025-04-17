import { Button } from '@/components/button'
import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { AdminUsuariosList } from './components'

export const Admin = () => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    // Handle login logic here
    navigate('/')
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button onClick={handleLogOut}>Log Out</Button>
      <AdminUsuariosList />
    </Box>
  )
}
