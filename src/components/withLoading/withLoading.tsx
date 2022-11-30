import { Flex, Text } from '@chakra-ui/react';

const withLoading = (Component: any) => {
  const ComponentWithLoading = ({ isLoading, isError, ...props }: any) => {
    if (isLoading) {
      return (
        <Flex flexDir={'column'} justifyContent="center" bg="#222" border="2px" h={400} rounded="10px" {...props}>
          <Text textAlign="center" textStyle={'body2'} color="#fff">Loading Pokemon...</Text>
        </Flex>
      )
    }

    if (isError) {
      return (
        <Flex flexDir={'column'} justifyContent="center" bg="#222" border="2px" h={400} rounded="10px" {...props}>
          <Text textAlign="center" textStyle={'body2'} color="#fff">An error occurred fetching the pokemon.</Text>
        </Flex>
      )
    }
    return (
      <Component {...props} />
    );
  }
  return ComponentWithLoading
}

export default withLoading;