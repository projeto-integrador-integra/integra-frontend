import { Box, Separator, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router'

import { ProjectCard } from '@/components/ProjectCard'
import { useProjects } from '@/service/query/projects'
import { ProjectPagination } from './Pagination'

export const ListProject = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const page = searchParams.get('page') || '1'
  const limit = searchParams.get('limit') || '10'

  const { data, isLoading } = useProjects({
    page: Number(page),
    limit: Number(limit),
  })

  return (
    <>
      <Separator flex="1" my="8" />

      <Box>
        <Box display="flex" flexDir="column" gap="4">
          {data?.projects.map((project) => <ProjectCard key={project.id} {...project} />)}
        </Box>
        {isLoading ? (
          <Box display="flex" justifyContent="center" mt="4">
            <Text fontSize="lg" color="gray.500">
              Carregando...
            </Text>
          </Box>
        ) : (
          (data?.total || 0) === 0 && (
            <Box display="flex" justifyContent="center" mt="4">
              <Text fontSize="lg" color="gray.500">
                Nenhum projeto encontrado
              </Text>
            </Box>
          )
        )}
        {(data?.total || 0) > 0 && (
          <ProjectPagination count={data?.total} page={data?.page} pageSize={data?.limit} />
        )}
      </Box>
    </>
  )
}
