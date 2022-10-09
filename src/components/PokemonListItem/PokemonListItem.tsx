import { Box } from '@chakra-ui/react';
import { ReactNode } from "react"

interface PokemonListItemProps {
  isLoading?: boolean;
  isError?: boolean;
  children: ReactNode
}

const PokemonListItem = ({ isLoading, isError, children }: PokemonListItemProps) => {
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
    <Box bg="white">
      {children}
    </Box>
  )
}

export { PokemonListItem }