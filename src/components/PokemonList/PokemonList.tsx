import { Box } from '@chakra-ui/react';
import { ReactNode } from "react";

interface PokemonListProps {
  isLoading?: boolean;
  isError?: boolean;
  children: ReactNode
  pokemonListRef?: any
  onScroll: () => void
}

const PokemonList = ({ isLoading, isError, children, pokemonListRef, onScroll }: PokemonListProps) => {
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
    <Box onScroll={onScroll} ref={pokemonListRef} bg="#222" border="2px" maxH={400} overflowY="scroll" rounded="10px">
      {children}
    </Box>
  )
}

export { PokemonList }