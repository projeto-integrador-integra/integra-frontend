import { Button } from '@/components/button'
import { Box } from '@chakra-ui/react'
import { Title } from 'react-head'
import { useNavigate } from 'react-router'

export const Empresa = () => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    // Handle login logic here
    navigate('/')
  }

  return (
    <>
      <Title>Integra | Empresa</Title>

      <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" gap="4">
        <Button onClick={handleLogOut}>Log Out</Button>
      </Box>
    </>
  )
}
