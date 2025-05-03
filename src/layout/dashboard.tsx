import { UserCard } from '@/components/UserCard'
import { Box, Heading, Image } from '@chakra-ui/react'
import { Outlet } from 'react-router'

export const DashboardLayout = () => {
  return (
    <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" gap="4">
      <Box
        p="8"
        bg="blue.50"
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
        <Box display="grid" gridTemplateColumns={{ lg: '1fr 2fr' }} gap="4" p="8">
          <UserCard />
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
