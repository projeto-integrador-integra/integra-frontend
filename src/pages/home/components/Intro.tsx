import { Box, Heading } from '@chakra-ui/react'

import { Button } from '@/components/ui/button'

export const Intro = () => {
  return (
    <Box as="section">
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        py="8"
      >
        <Heading as="h1" fontSize="2xl" fontWeight="bold">
          Integra
        </Heading>
        <Button>Login</Button>
      </Box>
      <Box as="p" mt={4}>
        Integra é uma plataforma que conecta desenvolvedores e mentores para facilitar o aprendizado
        e o desenvolvimento profissional.
      </Box>
    </Box>
  )
}
