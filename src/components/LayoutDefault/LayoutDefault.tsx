import { Box, Button, Flex } from '@chakra-ui/react';
import { ReactNode } from "react"

interface LayoutDefaultProps {
  children: ReactNode
}

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center" height="100vh">
      <Box bg="red.100" maxW={600} w="100%" border="2px" rounded="10px" boxShadow={'0px 6px 0px rgba(0, 0, 0, 0.25)'}>
        <Flex p={50} h={600} flexDir="column" justifyContent="space-between">
          <Box>
            {children}
          </Box>
          <Box bg="orange" h={100}>
            <Button size={'lg'} variant="green">PokeAPi</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export { LayoutDefault };