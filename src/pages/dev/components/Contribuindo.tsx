import { Box } from '@chakra-ui/react'

import { ProjectCard } from '@/components/ProjectCard'
import { useMineProjects } from '@/service/query/mineProjects'
import { Feedback } from './modal/Feedback'
import { Leave } from './modal/Leave'

export const Contribuindo = () => {
  const { data, isLoading } = useMineProjects({
    status: 'active',
  })
  return (
    <Box>
      {data?.projects?.map((project) => (
        <ProjectCard key={project.id} {...project}>
          <Box mt="8" ml="auto" display="flex" gap="4">
            <Feedback id={project.id} />
            <Leave />
          </Box>
        </ProjectCard>
      ))}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        fontSize={{ sm: 'md', lg: '2xl' }}
        color="gray.500"
        mt="8"
      >
        {isLoading ? 'Carregando...' : data?.projects?.length === 0 && 'Nenhum projeto encontrado'}
      </Box>
    </Box>
  )
}
