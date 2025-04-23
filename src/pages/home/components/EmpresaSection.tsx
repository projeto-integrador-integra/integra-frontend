import { Box, Heading, Text } from '@chakra-ui/react'

import { SignDialog } from '@/components/signup/SignDialog'
import { Button } from '@/components/ui/button'

export const EmpresaSection = () => {
  return (
    <Box>
      <Heading>
        <Text as="span" color="blue.700">
          Empresa
        </Text>{' '}
        Section
      </Heading>
      <Text>Empresa section content goes here.</Text>

      <SignDialog
        button={<Button variant="outline">Quero Participar</Button>}
        role="company"
        title="Tem um empresa?"
        img={<Box bg="green.100" />}
      />
    </Box>
  )
}
