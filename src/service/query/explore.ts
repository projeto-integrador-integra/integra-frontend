import { ListProjectsQueryType } from '@/schema/project.schema'
import { useQuery } from '@tanstack/react-query'
import { getExploreProjects } from '../project'

export function useExploreProjects(params: Partial<ListProjectsQueryType>) {
  return useQuery({
    queryKey: ['projects:explore', params],
    queryFn: async () => {
      const res = await getExploreProjects(params)
      return res
    },
  })
}
