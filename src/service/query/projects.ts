import { ListProjectsQueryType } from '@/schema/project.schema'
import { useQuery } from '@tanstack/react-query'
import { getAllProjects } from '../project'

export function useProjects(params: Partial<ListProjectsQueryType>) {
  return useQuery({
    queryKey: ['projects', params],
    queryFn: async () => {
      const res = await getAllProjects(params)
      return res
    },
  })
}
