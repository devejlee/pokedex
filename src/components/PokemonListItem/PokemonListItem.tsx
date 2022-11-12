import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from "react";

interface PokemonListItemProps extends FlexProps {
  children: ReactNode
}

const PokemonListItem = ({ children, ...props }: PokemonListItemProps) => {

  return (
    <Flex justifyContent="center" borderBottom="1px" color="white" textStyle="heading2" {...props}>
      {children}
    </Flex >
  )
}

export { PokemonListItem }