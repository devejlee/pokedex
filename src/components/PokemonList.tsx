import { Box } from '@chakra-ui/react';
import { ReactNode } from "react"

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
    <Box bg="red.100" maxW={500} w={"100%"}>
      {children}
    </Box>
  )
}

export { PokemonList }