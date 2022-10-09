import { Box } from '@chakra-ui/react';
import { ReactNode } from "react";

interface PokemonListProps {
  isLoading?: boolean;
  isError?: boolean;
  children: ReactNode
}

const PokemonList = ({ isLoading, isError, children }: PokemonListProps) => {
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
    <Box bg="#222" border="2px" maxH={300} overflowY="scroll" rounded="10px">
      {children}
    </Box>
  )
}

export { PokemonList }