import { Button } from '@/components/button'
import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export const Home = () => {
  const navigate = useNavigate()

  const handleLogIn = (type: string, status?: string) => () => {
    // Handle login logic here
    navigate(type, { state: { status } })
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap="2">
      <Button onClick={handleLogIn('/empresa')}>Login Empresa</Button>
      <Button onClick={handleLogIn('/dev', 'dev')}>Login Dev</Button>
      <Button onClick={handleLogIn('/dev', 'mentor')}>Login Mentor</Button>
      <Button onClick={handleLogIn('/admin')}>Login Admin</Button>
    </Box>
  )
}
