import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { ReactNode } from "react";

interface PokemonListProps extends FlexProps {
  isLoading?: boolean;
  isError?: boolean;
  children: ReactNode
  pokemonListRef?: any
  onScroll: () => void
}

const PokemonList = ({ isLoading, isError, children, pokemonListRef, onScroll, ...props }: PokemonListProps) => {
  if (isLoading) {
    return (
      <Flex flexDir={'column'} justifyContent="center" ref={pokemonListRef} bg="#222" border="2px" h={400} overflowY="scroll" rounded="10px" {...props}>
        <Text textAlign="center" textStyle={'body2'} color="#fff">Loading...</Text>
      </Flex>
    )
  }

  if (isError) {
    return (
      <Flex flexDir={'column'} justifyContent="center" ref={pokemonListRef} bg="#222" border="2px" h={400} overflowY="scroll" rounded="10px" {...props}>
        <Text textAlign="center" textStyle={'body2'} color="#fff">An error occurred.</Text>
      </Flex>
    )
  }

  return (
    <Flex onScroll={onScroll} flexDir={'column'} ref={pokemonListRef} bg="#222" border="2px" maxH={400} overflowY="scroll" rounded="10px" {...props}>
      {children}
    </Flex>
  )
}

export { PokemonList }