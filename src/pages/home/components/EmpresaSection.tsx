import { Box, Container, Heading, Image, Text } from '@chakra-ui/react'

import { SignDialog } from '@/components/signup/SignDialog'
import { Button } from '@/components/ui/button'
import collab from '@/assets/collab.png'

export const EmpresaSection = () => {
  return (
    <Container as="section" id="company" display="flex" gap="8" alignItems="center">
      <Box>
        <Heading fontSize={{ lgDown: 'xl', lg: '3xl' }} color="blue.900" fontWeight="bold">
          Tenho uma{' '}
          <Text as="span" color="blue.700">
            pequena empresa
          </Text>{' '}
          como posso participar?{' '}
        </Heading>
        <Text fontSize={{ lgDown: 'md', lg: 'lg' }} my="8">
          Se você tem uma pequena empresa e precisa de ajuda com tecnologia — como site, sistema,
          organização de informações ou algo digital — compartilhe seu desafio com a gente. Nossa
          comunidade de desenvolvedores iniciantes e mentores voluntários vai analisar seu pedido e,
          quando possível, desenvolver uma solução gratuita. Você recebe apoio, e eles ganham
          experiência real. Todo mundo sai ganhando!
        </Text>

        <SignDialog
          button={<Button variant="outline">Quero Mandar o meu Projeto</Button>}
          role="company"
          title="Olá Empreendedor!"
          img={<Image src={collab} />}
        />
      </Box>
      <Box hideBelow="md" minW="50%">
        <Image src={collab} mx="auto" />
      </Box>
    </Container>
  )
}
