import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router'

export const DashboardLayout = () => {
  return (
    <Box>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        gap="4"
      >
        <Box p="8" bg="blue.50" w="100%" textAlign="center" display="flex" justifyContent="center">
          Dashboard Layout
        </Box>
        <Box flex="1" width="100%">
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
