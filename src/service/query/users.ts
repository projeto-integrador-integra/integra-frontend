import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '../user'
import { ListUsersQueryType } from '@/schema/user.schema'

export function useUsers(params: Partial<ListUsersQueryType>) {
  return useQuery({
    queryKey: ['users', params],
    queryFn: async () => {
      const res = await getAllUsers(params)
      return res
    },
  })
}
