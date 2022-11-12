import { Box, Button, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
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
          <Button p={0} alignSelf="center" size={'lg'} maxW="200px" w="100%" variant="green">
            <NextLink href="/" passHref>
              <Link display={'flex'} justifyContent={'center'} alignItems={'center'} pt="4px" pb="8px" width="100%" height="100%" _hover={{}} textStyle={'body1'}>
                Home
              </Link>
            </NextLink>
          </Button>
        </Flex>
      </Box >
    </Flex >
  )
}

export { LayoutDefault };