import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from "next/router";
import { useQueryPokemonById } from "@hooks/index"
import Image from "next/image";
import { QueryClient, dehydrate } from "react-query";
import { fetchPokemonById } from '@api/pokemonById';

const Pokemon: NextPage = () => {
  const router = useRouter();
  const pokemonId = typeof router.query?.id === "string" ? router.query.id : "";
  const pokemon = useQueryPokemonById(pokemonId)

  if (pokemon.isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (pokemon.isError) {
    return (
      <div>Error</div>
    )
  }

  return (
    <div>
      <Image src={pokemon?.data?.sprites?.other?.["official-artwork"]?.front_default} alt={pokemonId} width={100} height={100}></Image>
    </div>
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