import { Box, Heading, Image } from '@chakra-ui/react'
import { Outlet } from 'react-router'

import { UserCard } from '@/components/UserCard'
import topography from '@/assets/topography.png'

export const DashboardLayout = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="4"
      bg="#E2E8F0"
      minH="100vh"
      bgImage={`url(${topography})`}
      bgRepeat="repeat"
    >
      <Box
        p="8"
        bg="#F7FAFC"
        w="100%"
        textAlign="center"
        display="flex"
        justifyContent="center"
        gap="1"
      >
        <Image src="/logo.svg" w="5" h="5" />
        <Heading>INTEGRA</Heading>
      </Box>
      <Box flex="1" width="100%" maxW="1400px" mx="auto">
        <Box display="flex" flexDir={{ lgDown: 'column', lg: 'row' }} gap="4" p="8">
          <UserCard />
          <Box flex="1" maxW="100%" minW="300px">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
