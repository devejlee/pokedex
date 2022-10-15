import { Box, Text } from '@chakra-ui/react';
import Image from "next/image";
import { ReactNode } from "react"

interface PokemonInfoProps {
  isLoading?: boolean;
  isError?: boolean;
  children: ReactNode
  name: string,
  id: string,
  image: string,
  weight: number;
  xp: number;
  abilities: string[];

}

const PokemonInfo = ({ isLoading, isError, name, id, image, weight, xp, abilities }: PokemonInfoProps) => {
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
      <Text>{name}</Text>
      <Image src={image} alt={id} width={100} height={100}></Image>
      <Text>{weight / 10} kg</Text>
      <Text>{xp}</Text>
      <ul>
        {abilities.map((ability) => (
          <li key={ability}>{ability}</li>
        ))}
      </ul>
    </Box>
  )
}

export { PokemonInfo }