import { Box, Container, Heading, Image, Text } from '@chakra-ui/react'

import { SignDialog } from '@/components/signup/SignDialog'
import { Button } from '@/components/ui/button'
import webinar from '@/assets/webinar.png'

export const MentorSection = () => {
  return (
    <Container
      as="section"
      id="mentor"
      p="8"
      py="2"
      display="flex"
      gap="8"
      alignItems="center"
      my={{ lg: '20' }}
    >
      <Box hideBelow="md" minW="50%">
        <Image src={webinar} mx="auto" />
      </Box>
      <Box>
        <Heading fontSize={{ lgDown: 'xl', lg: '3xl' }} color="blue.900" fontWeight="bold">
          Tenho{' '}
          <Text as="span" color="blue.700">
            experiência
          </Text>{' '}
          e quero ajudar quem está começando
        </Heading>
        <Text fontSize={{ lgDown: 'md', lg: 'lg' }} my="8">
          Se você já tem experiência na área e acredita no poder de compartilhar conhecimento, o
          Integra precisa de você. Sua orientação pode ser essencial para quem está começando agora.
          Vamos construir isso juntos?
        </Text>

        <SignDialog
          button={<Button variant="outline">Quero Mentorar</Button>}
          role="mentor"
          title="Olá Mentor!"
          img={<Box bg="red.100" />}
        />
      </Box>
    </Container>
  )
}
