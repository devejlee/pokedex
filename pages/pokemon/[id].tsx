import { LayoutDefault } from '@components/LayoutDefault/LayoutDefault';
import { fetchPokemonById } from '@api/pokemonById';
import PokemonInfo from '@components/PokemonInfo/PokemonInfo';
import { useQueryPokemonById } from "@hooks/index"
import type { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "react-query";
import { NextPageWithLayout } from '../_app';

const Pokemon: NextPageWithLayout = () => {
  const router = useRouter();
  const pokemonId = typeof router.query?.id === "string" ? router.query.id : "";
  const pokemon = useQueryPokemonById(pokemonId)

  return (
    <PokemonInfo
      isLoading={pokemon.isLoading}
      isError={pokemon.isError}
      name={pokemon?.data?.name}
      id={pokemonId}
      image={pokemon?.data?.sprites.other?.["official-artwork"]?.front_default}
      weight={pokemon?.data?.weight}
      xp={pokemon?.data?.base_experience}
      abilities={pokemon?.data?.abilities?.map((item: any) => item.ability.name)}
    >
    </PokemonInfo>
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

Pokemon.getLayout = page => <LayoutDefault>{page}</LayoutDefault>;

export default Pokemon