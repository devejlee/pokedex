import { Flex } from '@chakra-ui/react';
import { ReactNode } from "react"

interface LayoutDefaultProps {
  children: ReactNode
}

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Flex bg="blue" w="100%" justifyContent="center" alignItems="center">
      {children}
    </Flex>
  )
}

export { LayoutDefault };