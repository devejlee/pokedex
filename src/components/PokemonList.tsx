import { ReactNode } from "react"

interface PokemonListProps {
  children: ReactNode
}

const PokemonList = ({ children }: PokemonListProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default PokemonList