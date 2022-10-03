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
    <>
      {children}
    </>
  )
}

export default PokemonList