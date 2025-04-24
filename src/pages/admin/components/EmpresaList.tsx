import { useUsers } from '@/service/query/users'
import { Box } from '@chakra-ui/react'
import { useSearchParams } from 'react-router'

export const EmpresaList = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') || '1'

  const { data, isLoading } = useUsers({
    role: 'company',
    approvalStatus: 'pending',
    page: Number(page),
  })

  return (
    <div>
      <h1>Empresa List</h1>
      <p>List of Empresa</p>
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
