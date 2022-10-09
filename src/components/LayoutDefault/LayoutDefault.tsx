import { Flex } from '@chakra-ui/react';
import { ReactNode } from "react"

interface LayoutDefaultProps {
  children: ReactNode
}

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center" height="100vh">
      {children}
    </Flex>
  )
}

export { LayoutDefault };