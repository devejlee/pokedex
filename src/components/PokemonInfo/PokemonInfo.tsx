import { Box, Flex, Text, HStack, UnorderedList, ListItem } from '@chakra-ui/react';
import { capitalizeFirstLetter } from '@utils/uppercase';
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
    <Flex bg="white" h={400} overflowY="scroll" justifyContent={'center'} alignItems={'center'}>
      <Flex flexDir={'column'} alignItems={'center'} w="100%" maxW={300} mx="auto" border='4px' borderColor='gray.200' rounded="10px" overflow={'hidden'}>
        <Flex bg="#e0d494" flexDir={'column'} w="100%" alignItems={'center'}>
          <Text textStyle="heading2">{capitalizeFirstLetter(name)}</Text>
          <Box pos={'relative'} w={150} h={150}>
            <Image src={image} layout="fill" alt={id}></Image>
          </Box>
        </Flex>
        <HStack textStyle={'body2'} py="10px" bg="#f0eee6">
          <Text pl="20px" w="146px">Weight</Text>
          <Text w="146px">{weight / 10} kg</Text>
        </HStack>
        <HStack textStyle={'body2'} py="10px" bg="#f0eee6">
          <Text pl="20px" w="146px">Xp</Text>
          <Text w="146px">{xp}</Text>
        </HStack>
        <HStack w="100%" textStyle={'body2'} py="10px" bg="#f0eee6">
          <Text pl="15px" w="146px">Abilities</Text>
          <UnorderedList>
            {abilities.map((ability) => (
              <ListItem key={ability}>{ability}</ListItem>
            ))}
          </UnorderedList>
        </HStack>
      </Flex>
    </Flex>
  )
}

export { PokemonInfo }