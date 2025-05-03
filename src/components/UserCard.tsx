import Org from '@/assets/collab.png'
import Dev from '@/assets/learning.png'
import Admin from '@/assets/research.png'
import jigsaw from '@/assets/jigsaw.png'
import { useAuth } from '@/context/auth'
import { Box, Button, Card, Heading, Image, Separator, Skeleton, Text } from '@chakra-ui/react'
import { LuLogOut } from 'react-icons/lu'

const img = {
  dev: Dev,
  mentor: Dev,
  company: Org,
  admin: Admin,
}

const roles = {
  dev: 'Desenvolvedor',
  mentor: 'Mentor',
  company: 'Empresa',
  admin: 'Administrador',
  default: '...',
}

export const UserCard = () => {
  const { logout, user, loading } = useAuth()

  return (
    <Box mx="auto" minW="100%">
      <Card.Root variant="elevated" borderRadius="md" maxW={{ lg: '400px' }}>
        <Box
          display="flex"
          justifyContent="center"
          mb="4"
          bg="#F7FAFC"
          borderTopRadius="md"
          bgImage={`url(${jigsaw})`}
          bgRepeat="repeat"
        >
          {user?.role ? (
            <Image src={img[user.role]} maxH="100px" objectFit="contain" />
          ) : (
            <Skeleton h="100px" w="100%" />
          )}
        </Box>
        <Card.Header>
          <Text textAlign="center">
            {user?.name ? user.name : <Skeleton h="1.3rem" w="50%" mx="auto" />}
          </Text>
          <Heading textAlign="center">
            {user?.role ? roles[user?.role] : <Skeleton h="1.5rem" w="100%" />}
          </Heading>
        </Card.Header>

        <Box w="100%" maxW="500px" mx="auto" my="4">
          <Box display="flex" justifyContent="center" alignItems="center" mt="4">
            <Separator flex="1" my="6" ml="8" borderTopWidth="2px" borderColor="gray.700" />
            <Text w="fit-content" mx="4" fontSize="lg" fontWeight="bold" color="gray.700">
              PROJETOS
            </Text>
            <Separator flex="1" my="6" mr="8" borderTopWidth="2px" borderColor="gray.700" />
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center" mx="4" gap="4">
            {user?.projects?.pending !== undefined && (
              <Box textAlign="center">
                <Heading color="gray.600" fontSize=".7rem">
                  EM VERIFICAÇÃO
                </Heading>
                <Text fontSize="2rem" color="gray.600" fontWeight="bold">
                  {user?.projects?.pending}
                </Text>
              </Box>
            )}
            {user?.projects?.approved !== undefined && (
              <Box textAlign="center">
                <Heading color="gray.600" fontSize=".7rem">
                  EM PROGRESSO
                </Heading>
                <Text fontSize="2rem" color="gray.600" fontWeight="bold">
                  {user?.projects?.approved}
                </Text>
              </Box>
            )}
            {user?.projects?.closed !== undefined && (
              <Box textAlign="center">
                <Heading color="gray.600" fontSize=".7rem">
                  CONCLUIDOS
                </Heading>
                <Text fontSize="2rem" color="gray.600" fontWeight="bold">
                  {user?.projects?.closed}
                </Text>
              </Box>
            )}
            {loading && <Skeleton h="3.8rem" w="80%" mt="2" mx="auto" />}
          </Box>

          <Separator my="6" mx="8" borderTopWidth="2px" borderColor="gray.700" />
        </Box>

        <Button
          onClick={logout}
          variant="outline"
          w="fit-content"
          ml="auto"
          mr="8"
          mb="4"
          color="red.500"
          borderColor="red"
          fontWeight="bold"
        >
          Sair <LuLogOut size={20} style={{ marginLeft: '4px' }} />
        </Button>
      </Card.Root>
    </Box>
  )
}
