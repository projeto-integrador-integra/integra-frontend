import { Box } from '@chakra-ui/react'
import { Title } from 'react-head'
import { CreateProjectForm } from './components'

export const Empresa = () => {
  return (
    <>
      <Title>Integra | Empresa</Title>

      <Box display="flex" flexDir="column" gap="4">
        <CreateProjectForm />
      </Box>
    </>
  )
}
