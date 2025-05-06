import { useAuth } from '@/context/auth'
import { useSummaryProjects } from '@/service/query/summary'
import { Box, Heading, Skeleton, Text } from '@chakra-ui/react'

export const ProjectSummary = () => {
  const { user } = useAuth()
  const { isLoading, data } = useSummaryProjects({
    enabled: !!user?.role,
  })

  if (isLoading) return <Skeleton h="3.8rem" w="80%" mt="2" mx="auto" />
  return (
    <>
      {data?.pending !== undefined && (
        <Box textAlign="center">
          <Heading color="gray.600" fontSize=".7rem">
            EM VERIFICAÇÃO
          </Heading>
          <Text fontSize="2rem" color="gray.600" fontWeight="bold">
            {data?.pending}
          </Text>
        </Box>
      )}
      {data?.approved !== undefined && (
        <Box textAlign="center">
          <Heading color="gray.600" fontSize=".7rem">
            EM PROGRESSO
          </Heading>
          <Text fontSize="2rem" color="gray.600" fontWeight="bold">
            {data?.approved}
          </Text>
        </Box>
      )}
      {data?.closed !== undefined && (
        <Box textAlign="center">
          <Heading color="gray.600" fontSize=".7rem">
            CONCLUIDOS
          </Heading>
          <Text fontSize="2rem" color="gray.600" fontWeight="bold">
            {data?.closed}
          </Text>
        </Box>
      )}
    </>
  )
}
