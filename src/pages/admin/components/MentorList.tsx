import { useUsers } from '@/service/query/users'
import { Box, Card, Heading, Text } from '@chakra-ui/react'
import { useSearchParams } from 'react-router'
import { ModalAccept } from './ModalAccept'
import { ModalReject } from './ModalReject'

export const MentorList = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') || '1'

  const { data, isLoading } = useUsers({
    role: 'mentor',
    approvalStatus: 'pending',
    page: Number(page),
  })

  return (
    <Box display="flex" flexDir="column" justifyContent="flex-start">
      {!data?.users.length && (
        <Text
          fontSize={{ lgDown: 'md', lg: 'lg' }}
          color="gray.500"
          textAlign="center"
          fontWeight="bold"
          mt="8"
          mx="auto"
        >
          {isLoading ? 'Carregando...' : 'Nenhum mentor pendente para aprovar'}
        </Text>
      )}
      <Box display="flex" flexDir="column" justifyContent="flex-start">
        <Box>
          {data?.users.map((user) => (
            <Card.Root key={user.id} variant="elevated" p="4" mb="4">
              <Card.Header>
                <Heading>{user.name}</Heading>
                <Text fontSize="sm">{user.email}</Text>
              </Card.Header>
              <Card.Body>
                <p>{user.description}</p>
              </Card.Body>
              <Card.Footer mt="8" ml="auto">
                <ModalAccept {...user} />
                <ModalReject {...user} />
              </Card.Footer>
            </Card.Root>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
