import { useUsers } from '@/service/query/users'
import { Box } from '@chakra-ui/react'
import { useSearchParams } from 'react-router'

export const UsersList = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') || '1'

  const { data, isLoading } = useUsers({
    approvalStatus: 'approved',
    page: Number(page),
  })

  return (
    <div>
      <h1>User List</h1>
      <p>List of User</p>
      {isLoading && <p>Loading...</p>}
      <Box display="flex" flexDir="column" justifyContent="flex-start">
        <pre>
          {data?.users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </div>
          ))}
        </pre>
      </Box>
    </div>
  )
}
