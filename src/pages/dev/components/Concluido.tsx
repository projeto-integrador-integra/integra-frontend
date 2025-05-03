import { Box, Heading } from '@chakra-ui/react'

import { ProjectCard } from '@/components/ProjectCard'
import { useMineProjects } from '@/service/query/mineProjects'
import { FeedbackProject } from './FeedbackProject'

export const Concluido = () => {
  const { data, isLoading } = useMineProjects({
    status: 'closed',
  })

  return (
    <Box>
      {data?.projects?.map((project) => (
        <ProjectCard key={project.id} {...project}>
          <Box mt="8">
            <Heading>FEEDBACKS</Heading>
            {project.id && <FeedbackProject id={project.id} />}
          </Box>
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
