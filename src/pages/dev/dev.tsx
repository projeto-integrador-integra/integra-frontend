import { Box } from '@chakra-ui/react'
import { Title } from 'react-head'
import { OportunidadesList } from './components'

export const Dev = () => {
  return (
    <>
      <Title>Integra | Dev</Title>
      <Box display="flex" justifyContent="center" px="8">
        <OportunidadesList />
      </Box>
    </>
  )
}
