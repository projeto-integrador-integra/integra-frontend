import { ListProjectsQueryType } from '@/schema/project.schema'
import { useQuery } from '@tanstack/react-query'
import { getUserProjects } from '../project'

export function useMineProjects(params: Partial<ListProjectsQueryType>) {
  return useQuery({
    queryKey: ['projects:mine', params],
    queryFn: async () => {
      const res = await getUserProjects(params)
      return res
    },
  })
}
