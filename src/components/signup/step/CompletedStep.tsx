import { Box, Heading, Icon, Text } from '@chakra-ui/react'
import { HiCheckCircle } from 'react-icons/hi'

export const CompletedContent = () => {
  return (
    <Box>
      <Heading as="h2" mt="8" fontSize={{ base: '2xl', md: '3xl' }} textAlign="center">
        Agora é com a gente
      </Heading>
      <Box w="fit-content" my="8" mx="auto">
        <Icon as={HiCheckCircle} fontSize="6rem" mx="auto" textAlign="center" color="green.500" />
      </Box>
      <Text mt="4" fontSize={{ base: 'md', md: 'lg' }} mx="6">
        A gente vai dar uma olhada no seu perfil com carinho, e em breve alguém do nosso time entra
        em contato com você por e-mail pra seguir com os próximos passos.
      </Text>
    </Box>
  )
}
