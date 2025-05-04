import { Box } from '@chakra-ui/react'
import { Title } from 'react-head'

import { About, DevSection, EmpresaSection, Intro, MentorSection } from './components'

export const Home = () => {
  return (
    <>
      <Title>Integra</Title>
      <Box as="main" display="flex" flexDirection="column" alignItems="center" gap="4">
        <Intro />
        <About />
        <DevSection />
        <MentorSection />
        <EmpresaSection />
      </Box>
    </>
  )
}
