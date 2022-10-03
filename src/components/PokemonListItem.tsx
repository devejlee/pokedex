import { ReactNode } from "react"

interface PokemonListItemProps {
  children: ReactNode
}

const PokemonListItem = ({ children }: PokemonListItemProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default PokemonListItem