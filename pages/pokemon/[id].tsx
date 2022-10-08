import { fetchPokemonById } from '@api/pokemonById';
import { PokemonListItem } from '@components/PokemonListItem/PokemonListItem';
import { useQueryPokemonById } from "@hooks/index"
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Image from "next/image";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "react-query";

const Pokemon: NextPage = () => {
  const router = useRouter();
  const pokemonId = typeof router.query?.id === "string" ? router.query.id : "";
  const pokemon = useQueryPokemonById(pokemonId)

  return (
    <PokemonListItem
      isLoading={pokemon.isLoading}
      isError={pokemon.isError}
    >
      <Image src={pokemon?.data?.sprites?.other?.["official-artwork"]?.front_default} alt={pokemonId} width={100} height={100}></Image>
    </PokemonListItem>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["pokemonById", id],
    () => fetchPokemonById(id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  };
};

export default Pokemon