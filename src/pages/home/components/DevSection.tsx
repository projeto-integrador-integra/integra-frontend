import { Box, Heading, Text } from '@chakra-ui/react'

import { SignDialog } from '@/components/signup/SignDialog'
import { Button } from '@/components/ui/button'

export const DevSection = () => {
  return (
    <Box>
      <Heading>
        <Text as="span" color="blue.700">
          Dev
        </Text>{' '}
        Section
      </Heading>
      <Text>Mentor section content goes here.</Text>

      <SignDialog
        button={<Button variant="outline">Quero Participar</Button>}
        role="dev"
        title="Olá Dev!"
        img={<Box bg="red.100" />}
      />
    </Box>
  )
}
