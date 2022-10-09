import { Box } from '@chakra-ui/react';
import { ReactNode } from "react"

interface PokemonInfoProps {
  isLoading?: boolean;
  isError?: boolean;
  children: ReactNode
}

const PokemonInfo = ({ isLoading, isError, children }: PokemonInfoProps) => {
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

export { PokemonInfo }