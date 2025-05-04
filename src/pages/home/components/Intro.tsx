import { Box, Container, Heading, HStack, Image, Link as ChakraLink, Text } from '@chakra-ui/react'
import { Link } from 'react-router'

import { Button } from '@/components/ui/button'
import topography from '@/assets/topography.png'
import research from '@/assets/research.png'

export const Intro = () => {
  return (
    <Box
      as="section"
      aria-label="Seção principal de boas-vindas"
      bgImage={`url(${topography})`}
      bgPos="center"
      bgRepeat="repeat"
      w="100%"
    >
      <Container px="8" pb="8">
        <Box
          as="header"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          py="8"
        >
          <Box display="flex" alignItems="top" gap="2">
            <Image src="/logo.svg" h="6" />
            <Heading as="h1" fontSize={{ lgDown: 'lg', lg: '3xl' }} fontWeight="bold">
              INTEGRA
            </Heading>
          </Box>
          <Box as="nav" display="flex" gap="8">
            <HStack as="ul" gap="8" listStyleType="none" hideBelow="md">
              <li>
                <ChakraLink
                  color="blue.800"
                  href="#about"
                  fontWeight="medium"
                  _hover={{ textDecoration: 'underline' }}
                >
                  Sobre
                </ChakraLink>
              </li>
              <li>
                <ChakraLink
                  color="blue.800"
                  href="#dev"
                  fontWeight="medium"
                  _hover={{ textDecoration: 'underline' }}
                >
                  Desenvolvedores
                </ChakraLink>
              </li>
              <li>
                <ChakraLink
                  color="blue.800"
                  href="#mentor"
                  fontWeight="medium"
                  _hover={{ textDecoration: 'underline' }}
                >
                  Mentores
                </ChakraLink>
              </li>
              <li>
                <ChakraLink
                  color="blue.800"
                  href="#company"
                  fontWeight="medium"
                  _hover={{ textDecoration: 'underline' }}
                >
                  Empresas
                </ChakraLink>
              </li>
            </HStack>
            <Button as={Link} to="/login" intent="outline">
              Login
            </Button>
          </Box>
        </Box>
        <Box mt={4} display="flex" gap="4" justifyContent="space-between">
          <Box mt={{ lgDown: '4', lg: '24' }} mx="auto">
            <Heading
              as="h2"
              fontSize={{ lgDown: '2xl', lg: '4xl' }}
              fontWeight="bold"
              lineHeight="shorter"
              maxW="2xl"
              color="blue.900"
            >
              Aprender e crescer com tecnologia pode ser mais simples do que parece
            </Heading>
            <Text maxW="xl" mt="8" fontSize={{ lgDown: 'md', lg: 'lg' }}>
              O Integra é uma iniciativa que apoia pessoas em início de jornada e pequenos projetos
              que querem usar a tecnologia de forma prática, acessível e com propósito. Nosso
              objetivo é aproximar quem quer aprender de quem pode ajudar — tudo em um só lugar.
            </Text>
          </Box>
          <Box hideBelow="lg">
            <Image src={research} alt="" ml="auto" />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
