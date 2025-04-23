import { Box, Heading, Text } from '@chakra-ui/react'

import { SignDialog } from '@/components/signup/SignDialog'
import { Button } from '@/components/ui/button'

export const MentorSection = () => {
  return (
    <Box>
      <Heading>
        <Text as="span" color="blue.700">
          Mentor
        </Text>{' '}
        Section
      </Heading>
      <Text>Mentor section content goes here.</Text>

      <SignDialog
        button={<Button variant="outline">Quero Participar</Button>}
        role="mentor"
        title="Olá Mentor!"
        img={<Box bg="blue.100" />}
      />
    </Box>
  )
}
