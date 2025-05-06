import { useQuery } from '@tanstack/react-query'
import { summaryProject } from '../project'

export function useSummaryProjects({ enabled = false }: { enabled: boolean }) {
  return useQuery({
    enabled,
    queryKey: ['projects:summary'],
    queryFn: async () => {
      const res = await summaryProject()
      return res
    },
  })
}
