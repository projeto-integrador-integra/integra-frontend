import { Box, Skeleton } from '@chakra-ui/react'

export const Loading = () => {
  return (
    <Box h="100%" w="100%" display="flex" alignItems="center" justifyContent="center">
      <Skeleton height="200px" width="800px" />
    </Box>
  )
}
