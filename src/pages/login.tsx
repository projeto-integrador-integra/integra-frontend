import { Box, Card, Heading, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { toaster } from '@/components/ui/toaster'
import { useAuth } from '@/context/auth'
import { SignUpType } from '@/schema/signup.schema'

export const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpType>()

  const onSubmit = async (data: SignUpType) => {
    try {
      const user = await login(data)
      if (!user) throw new Error('User not found')
      const { role } = user

      if (role === 'admin') navigate('/admin')
      if (role === 'company') navigate('/company')
      if (['dev', 'mentor'].includes(role)) navigate('/dev')

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
    <Box as="section" display="flex" alignItems="center" justifyContent="center" minH="100vh">
      <Card.Root maxW="lg" variant="elevated">
        <Card.Header>
          <Heading>Login</Heading>
          <Text>Login page content goes here.</Text>
        </Card.Header>
        <Card.Body
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          flexDirection="column"
          gap="4"
        >
          <Input label="E-mail" error={errors.email?.message} {...register('email')} />
          <Input
            label="Senha"
            as={PasswordInput}
            error={errors.password?.message}
            {...register('password')}
          />
          <Button type="submit" isLoading={isSubmitting}>
            Login
          </Button>
        </Card.Body>
      </Card.Root>
    </Box>
  )
}
