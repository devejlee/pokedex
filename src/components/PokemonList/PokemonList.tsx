import { Flex, FlexProps } from '@chakra-ui/react';
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
      <div>Loading...</div>
    )
  }

  if (isError) {
    return (
      <div>Error</div>
    )
  }

  return (
    <Flex flexDir={'column'} onScroll={onScroll} ref={pokemonListRef} bg="#222" border="2px" maxH={400} overflowY="scroll" rounded="10px" {...props}>
      {children}
    </Flex>
  )
}

export { PokemonList }