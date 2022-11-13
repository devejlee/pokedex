import { Button, Link, Box } from '@chakra-ui/react';
import { LayoutDefault } from '@components/LayoutDefault/LayoutDefault';
import { PokemonList } from '@components/PokemonList/PokemonList';
import { PokemonListItem } from '@components/PokemonListItem/PokemonListItem';
import { useQueryPokemon } from '@hooks/index';
import { Pokemon } from '@typedef/pokemon';
import { capitalizeFirstLetter } from '@utils/index';
import Head from 'next/head'
import NextLink from 'next/link';
import { useRef, useEffect } from 'react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const pokemons = useQueryPokemon()
  const pokemonListRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!pokemonListRef.current) return
    if (pokemonListRef.current.scrollHeight - Math.round(pokemonListRef.current.scrollTop) === pokemonListRef.current.clientHeight) {
      pokemons.fetchNextPage()
    }
  }

  const handleSetScrollPosition = () => {
    if (!pokemonListRef.current) return
    sessionStorage.setItem("scroll-position", pokemonListRef.current?.scrollTop.toString());
  }

  useEffect(() => {
    pokemonListRef.current?.scrollTo(0, Number(sessionStorage.getItem('scroll-position')) ?? 0)
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <PokemonList
          isLoading={pokemons.isLoading}
          isError={pokemons.isError}
          pokemonListRef={pokemonListRef}
          onScroll={handleScroll}
        >
          {
            pokemons.data?.pages.map((group) =>
              group?.results.map((pokemon: Pokemon) => <div key={pokemon.name}>
                <PokemonListItem onClick={handleSetScrollPosition}>
                  <NextLink href={`/pokemon/${pokemon.name}`} key={pokemon.name} passHref>
                    <Link py="10px" width="100%" height="100%" textAlign="center" _hover={{}}>
                      {capitalizeFirstLetter(pokemon.name)}
                    </Link>
                  </NextLink>
                </PokemonListItem>
              </div>)
            )
          }
          <Button
            alignSelf={'center'}
            flexShrink={0}
            width={'100px'}
            height={'50px'}
            disabled={!pokemons.hasNextPage || pokemons.isFetchingNextPage}
            onClick={() => pokemons.fetchNextPage()}
          >
            {pokemons.isFetchingNextPage
              ? "Loading more..."
              : pokemons.hasNextPage
                ? "Load More"
                : "Nothing more to load"}
          </Button>
        </PokemonList>
      </Box>
    </>
  )
}

Home.getLayout = page => <LayoutDefault>{page}</LayoutDefault>;

export default Home