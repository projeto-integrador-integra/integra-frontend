import { Button } from '@/components/ui/button'
import { Box } from '@chakra-ui/react'
import { Title } from 'react-head'
import { useNavigate } from 'react-router'
import { OportunidadesList } from './components'

export const Dev = () => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    // Handle login logic here
    navigate('/')
  }

  return (
    <>
      <Title>Integra | Dev</Title>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button onClick={handleLogOut}>Log Out</Button>
        <OportunidadesList />
      </Box>
    </>
  )
}
