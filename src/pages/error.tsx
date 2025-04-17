import { Button } from '@/components/button'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export const ErrorPage = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  return (
    <Box>
      <Heading>Erro 404</Heading>
      <Text>Página não encontrada</Text>
      <Button onClick={handleBack}>Voltar Para Home</Button>
    </Box>
  )
}
