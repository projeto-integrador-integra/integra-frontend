import { Box, Container, Heading, Image, Text } from '@chakra-ui/react'

import { SignDialog } from '@/components/signup/SignDialog'
import { Button } from '@/components/ui/button'
import learning from '@/assets/learning.png'

export const DevSection = () => {
  return (
    <Container as="section" id="dev" display="flex" gap="8" alignItems="center">
      <Box>
        <Heading fontSize={{ lgDown: 'xl', lg: '3xl' }} color="blue.900" fontWeight="bold">
          Sou{' '}
          <Text as="span" color="blue.700">
            iniciante
          </Text>{' '}
          em tecnologia, como posso participar?
        </Heading>
        <Text fontSize={{ lgDown: 'md', lg: 'lg' }} my="8">
          Se você está começando sua trajetória na área de tecnologia, o Integra é um espaço feito
          pra você. Aqui, você pode acessar conteúdos, participar de experiências reais e se
          conectar com profissionais que vão te ajudar a crescer.
        </Text>

        <SignDialog
          button={<Button variant="outline">Quero Participar</Button>}
          role="dev"
          title="Olá Dev!"
          img={<Image src={learning} />}
        />
      </Box>
      <Box hideBelow="md" minW="50%">
        <Image src={learning} mx="auto" />
      </Box>
    </Container>
  )
}
