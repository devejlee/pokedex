import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from "react"

interface LayoutDefaultProps {
  children: ReactNode
}

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center" height="100vh">
      <Box bg="red.100" maxW={600} w="100%" border="2px">
        <Flex p={50} h={600} flexDir="column" justifyContent="space-between">
          <Box maxH={300} overflowY="scroll">
            {children}
          </Box>
          <Box bg="orange" h={100}></Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export { LayoutDefault };