import { useUsers } from '@/service/query/users'
import { Box } from '@chakra-ui/react'
import { useSearchParams } from 'react-router'

export const DevList = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') || '1'

  const { data, isLoading } = useUsers({
    role: 'dev',
    approvalStatus: 'pending',
    page: Number(page),
  })

  return (
    <div>
      <h1>Dev List</h1>
      <p>List of developers</p>
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
