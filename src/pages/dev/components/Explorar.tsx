import { Box } from '@chakra-ui/react'

import { ProjectCard } from '@/components/ProjectCard'
import { useExploreProjects } from '@/service/query/explore'
import { Apply } from './modal/Apply'

export const Explorar = () => {
  const { data, isLoading } = useExploreProjects({})
  return (
    <Box>
      {data?.projects?.map((project) => (
        <ProjectCard key={project.id} {...project}>
          <Apply id={project.id} />
        </ProjectCard>
      ))}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        fontSize="2xl"
        color="gray.500"
        mt="8"
      >
        {isLoading ? 'Carregando...' : data?.projects?.length === 0 && 'Nenhum projeto encontrado'}
      </Box>
    </Box>
  )
}
