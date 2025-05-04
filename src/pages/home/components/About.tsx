import { Box, Card, Container, Heading, Image, Text } from '@chakra-ui/react'
import jigsaw from '@/assets/jigsaw.png'
import chatting from '@/assets/chatting.png'
import telecommuting from '@/assets/telecommuting.png'

export const About = () => {
  return (
    <Box
      as="section"
      id="about"
      bgColor="#EDF2F7"
      bgImage={`url(${jigsaw})`}
      bgPos="center"
      bgRepeat="repeat"
      w="100%"
      position="relative"
      zIndex={1}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex={-1}
        clipPath="polygon(0 0, 100% 100%, 0 100%)"
        bg="#E2E8F0"
      />
      <Container minH="100vh" p="12" py={{ lg: '20' }} display="flex" flexDir="column">
        <Heading
          textAlign="center"
          fontSize={{ lgDown: '2xl', lg: '5xl' }}
          color="blue.800"
          fontWeight="bold"
        >
          Por que o Integra existe?
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ lgDown: 'sm', lg: '2xl' }}
          mt={{ lgDown: '8', lg: '12' }}
          maxW="50ch"
          mx="auto"
        >
          Um espaço para quem quer aprender, ensinar e crescer com tecnologia.
        </Text>
        <Box mt="4">
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            gap="8"
            mt={{ lgDown: '12', lg: '16' }}
          >
            <Card.Root
              variant={{ lg: 'elevated' }}
              bgColor={{ lgDown: 'transparent' }}
              p={{ lg: '8' }}
              maxW="lg"
            >
              <Text fontSize={{ lgDown: 'md', lg: 'lg' }}>
                Nem todo mundo começa com os mesmos recursos, mas todo mundo pode aprender com as
                ferramentas certas. O Integra nasceu pra facilitar esse começo.
              </Text>
            </Card.Root>
            <Box hideBelow="lg">
              <Image src={chatting} ml="auto" />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-around" alignItems="center" gap="8">
            <Box hideBelow="lg">
              <Image src={telecommuting} ml="auto" />
            </Box>
            <Card.Root
              variant={{ lg: 'elevated' }}
              p={{ lg: '8' }}
              mt={{ lgDown: '8' }}
              maxW="lg"
              bgColor={{ lgDown: 'transparent' }}
            >
              <Text fontSize={{ lgDown: 'md', lg: 'lg' }}>
                A gente acredita que, com orientação e espaço pra trocar experiências, qualquer
                pessoa pode desenvolver soluções reais e fazer parte do mundo digital — mesmo
                começando do zero.
              </Text>
            </Card.Root>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
