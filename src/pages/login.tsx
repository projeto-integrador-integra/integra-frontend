import { Box, Card, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { toaster } from '@/components/ui/toaster'
import { useAuth } from '@/context/auth'
import { SignUpSchema, SignUpType } from '@/schema/signup.schema'
import { zodResolver } from '@hookform/resolvers/zod'

import chatting from '@/assets/chatting.png'

export const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpType>({ resolver: zodResolver(SignUpSchema) })

  const onSubmit = async (data: SignUpType) => {
    try {
      const user = await login(data)
      if (!user) throw new Error('User not found')
      const { role, approvalStatus } = user

      if (approvalStatus === 'pending') return navigate('/pending')
      if (approvalStatus === 'rejected') return navigate('/rejected')

      if (role === 'admin') return navigate('/admin')
      if (role === 'company') return navigate('/empresa')
      if (['dev', 'mentor'].includes(role)) return navigate('/dev')

      toaster.create({
        title: 'Login successful',
        description: 'You have successfully logged in.',
        type: 'success',
      })
    } catch (error) {
      console.error('Login error:', error)
      toaster.create({
        title: 'Login failed',
        description: 'Invalid email or password.',
        type: 'error',
      })
    }
  }

  return (
    <Flex minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex flex="1" align="center" justify="center" p={{ base: 6, md: 12 }}>
        <Card.Root w="100%" maxW="md" variant="elevated" py="8">
          <Card.Header textAlign="center" pb="4">
            <Box
              display="flex"
              alignItems="top"
              w="min-content"
              mx="auto"
              gap="2"
              position="relative"
            >
              <Image src="/logo.svg" alt="" h="6" mb="4" mx="auto" position="absolute" left="-7" />
              <Text fontSize="2xl" color="gray.600">
                INTEGRA
              </Text>
            </Box>
            <Heading size="md" mb="1" mt="4">
              Acesse sua conta
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Entre para colaborar em projetos com impacto social.
            </Text>
          </Card.Header>

          <Card.Body
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            display="flex"
            flexDirection="column"
            gap="4"
            mt="4"
          >
            <Input label="E-mail" error={errors.email?.message} {...register('email')} />
            <Input
              label="Senha"
              as={PasswordInput}
              error={errors.password?.message}
              {...register('password')}
            />
            <Button type="submit" loading={isSubmitting} w="full">
              Entrar
            </Button>
          </Card.Body>
        </Card.Root>
      </Flex>

      <Flex flex="1" align="center" justify="center" bg="#F7FAFC" p="12" hideBelow="md">
        <VStack gap="6" textAlign="left" maxW="lg">
          <Heading fontSize={{ lgDown: '2xl', lg: '4xl' }} fontWeight="bold" w="100%">
            Bem-vindo ao Integra
          </Heading>
          <Text fontSize={{ lgDown: 'sm', lg: 'md' }} w="100%" color="gray.600">
            Conectamos talentos a projetos com impacto social.
          </Text>
          <VStack
            align="start"
            gap="2"
            fontSize={{ lgDown: 'md', lg: 'lg' }}
            color="gray.700"
            w="100%"
          >
            <Text>• Segurança garantida</Text>
            <Text>• Agilidade nos processos</Text>
            <Text>• Comunidade de apoio</Text>
          </VStack>
          <Box position="relative" w="full" h="auto" zIndex={1}>
            <Box
              position="absolute"
              bottom="-10"
              right="5"
              w="70%"
              aspectRatio={1}
              bg="blue.200"
              borderRadius="full"
              zIndex={-1}
            />
            <Image src={chatting} alt="" mt="6" zIndex={2} />
          </Box>
        </VStack>
      </Flex>
    </Flex>
  )
}
