import { useUsers } from '@/service/query/users'
import { Box, Card, Heading, Tag, Text } from '@chakra-ui/react'
import { useSearchParams } from 'react-router'
import { ModalDelete } from './ModalDelete'
import { roleColor } from '@/utils/users'

export const UsersList = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') || '1'

  const { data, isLoading } = useUsers({
    approvalStatus: 'approved',
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
            <Card.Root key={user.id} variant="elevated" p="4" px="8" mb="4">
              <Tag.Root colorPalette={roleColor[user.role].color} w="fit-content">
                <Tag.Label px="2">{roleColor[user.role].label}</Tag.Label>
              </Tag.Root>
              <Card.Header>
                <Heading>{user.name}</Heading>
                <Text fontSize="sm">{user.email}</Text>
              </Card.Header>
              <Card.Body>
                <Text>{user.description}</Text>
              </Card.Body>
              <Card.Footer mt="8" ml="auto">
                <ModalDelete {...user} />
              </Card.Footer>
            </Card.Root>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
