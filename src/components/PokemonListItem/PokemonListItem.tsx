import { Flex } from '@chakra-ui/react';
import { ReactNode } from "react";

interface PokemonListItemProps {
  children: ReactNode
}

const PokemonListItem = ({ children }: PokemonListItemProps) => {

  return (
    <Flex justifyContent="center" borderBottom="1px" color="white" py="10px" textStyle="heading2">
      {children}
    </Flex >
  )
}

export { PokemonListItem }