import { Box } from '@chakra-ui/react'
import { Title } from 'react-head'

import { About, DevSection, EmpresaSection, Intro, MentorSection } from './components'
import graph from '@/assets/graph-paper.png'

export const Home = () => {
  return (
    <>
      <Title>Integra</Title>
      <Box as="main" display="flex" flexDirection="column" alignItems="center">
        <Intro />
        <About />
        <Box bgImage={`url(${graph})`} bgPos="center" bgRepeat="repeat" bgColor="#EDF2F7" w="100%">
          <DevSection />
          <MentorSection />
          <EmpresaSection />
        </Box>
      </Box>
    </>
  )
}
