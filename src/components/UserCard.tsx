import { useAuth } from '@/context/auth'
import { Box, Card, Heading, Button } from '@chakra-ui/react'

export const UserCard = () => {
  const { logout } = useAuth()
  return (
    <Box mx="auto" minW="300px" maxW="400px">
      <Card.Root variant="elevated" p="8">
        <Card.Header>
          <Heading>User Card</Heading>
        </Card.Header>
        <Button onClick={logout} variant="outline">
          Logout
        </Button>
      </Card.Root>
    </Box>
  )
}
